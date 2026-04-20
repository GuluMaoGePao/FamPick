// ============================================
// FamPick 核心应用模块
// 协调数据层和UI层，处理业务逻辑
// ============================================

const DishApp = {
  // 应用状态
  state: {
    currentUser: null,
    currentPage: 'today-order-page',
    selectedCategory: '全部',
    todayMenu: [],
    isLoggedIn: false,
    previousPage: 'today-order-page', // 记录进入详情页前的页面
    recommendDishes: [] // 保存当前推荐菜品
  },

  // 初始化应用
  init() {
    this.loadState();
    this.bindEvents();

    if (this.state.isLoggedIn) {
      this.showMainApp();
    }
  },

  // 加载保存的状态
  loadState() {
    try {
      const saved = localStorage.getItem('fampick_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state.todayMenu = parsed.todayMenu || [];
        this.state.isLoggedIn = parsed.isLoggedIn || false;
        this.state.currentUser = parsed.currentUser || null;
      }
    } catch (e) {
      console.warn('加载状态失败:', e);
    }
  },

  // 保存状态
  saveState() {
    try {
      localStorage.setItem('fampick_state', JSON.stringify({
        todayMenu: this.state.todayMenu,
        isLoggedIn: this.state.isLoggedIn,
        currentUser: this.state.currentUser
      }));
    } catch (e) {
      console.warn('保存状态失败:', e);
    }
  },

  // 绑定事件
  bindEvents() {
    // 登录按钮
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => this.handleLogin());
    }

    // 快速登录按钮
    const quickLoginBtn = document.getElementById('quick-login-btn');
    if (quickLoginBtn) {
      quickLoginBtn.addEventListener('click', () => this.handleQuickLogin());
    }

    // 用户头像点击
    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) {
      userAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        const userMenu = document.getElementById('user-menu');
        userMenu.classList.toggle('hidden');
      });
    }

    // 退出登录
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // 底部导航
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.switchTab(index);
      });
    });

    // 用户页面导航
    const userAvatarBtn = document.getElementById('user-avatar-btn');
    if (userAvatarBtn) {
      userAvatarBtn.addEventListener('click', () => this.switchToUserPage());
    }

    // 添加菜品按钮
    const addDishBtn = document.getElementById('add-dish-btn');
    if (addDishBtn) {
      addDishBtn.addEventListener('click', () => this.showAddDishModal());
    }

    // 关闭添加菜品弹窗
    const closeAddDish = document.getElementById('close-add-dish');
    if (closeAddDish) {
      closeAddDish.addEventListener('click', () => this.hideAddDishModal());
    }

    // 从菜单选择
    const selectFromMenu = document.getElementById('select-from-menu');
    if (selectFromMenu) {
      selectFromMenu.addEventListener('click', () => {
        this.hideAddDishModal();
        this.switchTab(1); // 切换到菜单页面
      });
    }

    // 上传新菜品
    const uploadNewDish = document.getElementById('upload-new-dish');
    if (uploadNewDish) {
      uploadNewDish.addEventListener('click', () => {
        this.showUploadForm();
      });
    }

    // 图像识别
    const imageRecognize = document.getElementById('image-recognize');
    if (imageRecognize) {
      imageRecognize.addEventListener('click', () => {
        this.hideAddDishModal();
        this.switchTab(2); // 切换到图像识别页面
      });
    }

    // 取消上传
    const cancelUpload = document.getElementById('cancel-upload');
    if (cancelUpload) {
      cancelUpload.addEventListener('click', () => this.hideUploadForm());
    }

    // 上传表单提交
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm) {
      uploadForm.addEventListener('submit', (e) => this.handleUpload(e));
    }

    // 返回按钮
    const backToMenu = document.getElementById('back-to-menu');
    if (backToMenu) {
      backToMenu.addEventListener('click', () => this.goBackFromDetail());
    }

    // 从详情页添加到菜单
    const addToMenuFromDetail = document.getElementById('add-to-menu-from-detail');
    if (addToMenuFromDetail) {
      addToMenuFromDetail.addEventListener('click', () => {
        const dishName = document.getElementById('dish-detail-name')?.textContent;
        if (dishName) {
          this.addToMenu(dishName);
          this.goBackFromDetail();
        }
      });
    }

    // 编辑按钮
    const editDishBtn = document.getElementById('edit-dish-btn');
    if (editDishBtn) {
      editDishBtn.addEventListener('click', () => {
        const dishName = editDishBtn.getAttribute('data-dish');
        if (dishName) {
          DishUI.showEditForm(dishName);
        }
      });
    }

    // 关闭编辑弹窗
    const closeEditDish = document.getElementById('close-edit-dish');
    if (closeEditDish) {
      closeEditDish.addEventListener('click', () => DishUI.hideEditForm());
    }

    // 编辑表单提交
    const editDishForm = document.getElementById('edit-dish-form');
    if (editDishForm) {
      editDishForm.addEventListener('submit', (e) => this.handleEditDish(e));
    }

    // 喜欢按钮
    const likeDishBtn = document.getElementById('like-dish-btn');
    if (likeDishBtn) {
      likeDishBtn.addEventListener('click', () => {
        const dishName = likeDishBtn.getAttribute('data-dish');
        if (dishName) {
          this.toggleLike(dishName);
          // 重新渲染详情页以更新按钮状态
          DishUI.renderDishDetail(dishName);
        }
      });
    }

    // 生成推荐按钮
    const generateRecommendBtn = document.getElementById('generate-recommend-btn');
    if (generateRecommendBtn) {
      generateRecommendBtn.addEventListener('click', () => this.handleGenerateRecommend());
    }

    // 识别上传
    const recognizeUpload = document.getElementById('recognize-upload');
    if (recognizeUpload) {
      recognizeUpload.addEventListener('change', (e) => this.handleRecognize(e));
    }

    // 提交评价
    const submitReview = document.getElementById('submit-review');
    if (submitReview) {
      submitReview.addEventListener('click', () => this.handleAddReview());
    }

    // 编辑资料弹窗
    const closeEditProfile = document.getElementById('close-edit-profile');
    if (closeEditProfile) {
      closeEditProfile.addEventListener('click', () => DishUI.hideEditProfileModal());
    }

    const editProfileForm = document.getElementById('edit-profile-form');
    if (editProfileForm) {
      editProfileForm.addEventListener('submit', (e) => this.handleEditProfile(e));
    }

    // 点击背景关闭菜单
    document.addEventListener('click', () => {
      const userMenu = document.getElementById('user-menu');
      if (userMenu) {
        userMenu.classList.add('hidden');
      }
    });

    // 点击背景关闭弹窗
    const editDishModal = document.getElementById('edit-dish-modal');
    if (editDishModal) {
      editDishModal.addEventListener('click', (e) => {
        if (e.target === editDishModal) {
          DishUI.hideEditForm();
        }
      });
    }

    const editProfileModal = document.getElementById('edit-profile-modal');
    if (editProfileModal) {
      editProfileModal.addEventListener('click', (e) => {
        if (e.target === editProfileModal) {
          DishUI.hideEditProfileModal();
        }
      });
    }

    const addDishModal = document.getElementById('add-dish-modal');
    if (addDishModal) {
      addDishModal.addEventListener('click', (e) => {
        if (e.target === addDishModal) {
          this.hideAddDishModal();
        }
      });
    }
  },

  // 处理登录
  handleLogin() {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    if (!username || !password) {
      DishUI.showToast('请输入用户名和密码', 'error');
      return;
    }

    this.state.currentUser = username;
    this.state.isLoggedIn = true;

    // 初始化用户数据
    DishData.updateUserData({ name: username });

    this.saveState();
    this.showMainApp();
    DishUI.showToast('登录成功');
  },

  // 处理快速登录
  handleQuickLogin() {
    this.state.currentUser = '家庭成员';
    this.state.isLoggedIn = true;

    // 初始化用户数据
    DishData.updateUserData({ name: '家庭成员' });

    this.saveState();
    this.showMainApp();
    DishUI.showToast('登录成功');
  },

  // 处理退出登录
  handleLogout() {
    this.state.currentUser = null;
    this.state.isLoggedIn = false;
    this.saveState();
    this.showLoginPage();
    DishUI.showToast('已退出登录');
  },

  // 显示登录页面
  showLoginPage() {
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');
    const bottomNav = document.getElementById('bottom-nav');
    const fabAddContainer = document.getElementById('fab-add-container');

    loginPage.classList.remove('hidden');
    mainPage.classList.add('hidden');
    bottomNav.classList.add('hidden');
    fabAddContainer.classList.add('hidden');
  },

  // 显示主应用
  showMainApp() {
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');
    const bottomNav = document.getElementById('bottom-nav');
    const fabAddContainer = document.getElementById('fab-add-container');

    loginPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    bottomNav.classList.remove('hidden');
    fabAddContainer.classList.remove('hidden');

    // 初始化UI
    DishUI.init();

    // 渲染推荐预览
    DishUI.renderRecommendPreview();

    // 默认进入首页并激活导航按钮
    this.switchTab(0);

    // 页面滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // 切换标签页
  switchTab(index) {
    const pages = [
      'today-order-page',
      'menu-page',
      'recognize-page',
      'user-page'
    ];

    const pageId = pages[index];
    if (!pageId) return;

    this.state.currentPage = pageId;
    DishUI.showPage(pageId);
    DishUI.updateNavState(index);

    // 如果是用户页面，渲染用户数据
    if (index === 3) {
      DishUI.renderUserPage();
    }
  },

  // 切换到用户页面
  switchToUserPage() {
    DishUI.renderUserPage();
    DishUI.showPage('user-page');
    DishUI.updateNavState(3);
  },

  // 显示添加菜品弹窗
  showAddDishModal() {
    const modal = document.getElementById('add-dish-modal');
    if (modal) modal.classList.remove('hidden');
  },

  // 隐藏添加菜品弹窗
  hideAddDishModal() {
    const modal = document.getElementById('add-dish-modal');
    if (modal) modal.classList.add('hidden');
    this.hideUploadForm();
  },

  // 显示上传表单
  showUploadForm() {
    const uploadForm = document.getElementById('upload-form');
    const cancelUpload = document.getElementById('cancel-upload');
    const options = document.querySelectorAll('#select-from-menu, #upload-new-dish, #image-recognize');

    options.forEach(opt => opt.classList.add('hidden'));
    uploadForm.classList.remove('hidden');
    cancelUpload.classList.remove('hidden');

    // 填充分类选项
    const categorySelect = document.getElementById('dish-category');
    if (categorySelect) {
      categorySelect.innerHTML = '<option value="">请选择分类</option>';
      DishData.categories.forEach(category => {
        if (category !== '全部') {
          categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
        }
      });
    }
  },

  // 隐藏上传表单
  hideUploadForm() {
    const uploadForm = document.getElementById('upload-form');
    const cancelUpload = document.getElementById('cancel-upload');
    const options = document.querySelectorAll('#select-from-menu, #upload-new-dish, #image-recognize');

    uploadForm.classList.add('hidden');
    cancelUpload.classList.add('hidden');
    options.forEach(opt => opt.classList.remove('hidden'));

    // 重置表单
    if (uploadForm) uploadForm.reset();
  },

  // 处理上传
  handleUpload(e) {
    e.preventDefault();

    const name = document.getElementById('dish-name')?.value;
    const category = document.getElementById('dish-category')?.value;
    const time = document.getElementById('dish-time')?.value;
    const difficulty = document.getElementById('dish-difficulty')?.value;
    const chef = document.getElementById('dish-chef')?.value;

    if (!name || !category) {
      DishUI.showToast('请填写必填项', 'error');
      return;
    }

    const newDish = {
      id: name.replace(/\s+/g, '-').toLowerCase(),
      name,
      category,
      difficulty,
      time: time ? `${time}分钟` : '未知',
      chef,
      description: '新添加的菜品',
      tags: ['新菜品'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop',
      ingredients: [{ name: '食材1', amount: '适量' }],
      steps: ['步骤1', '步骤2']
    };

    DishData.addDish(newDish);
    this.hideUploadForm();
    this.hideAddDishModal();
    DishUI.showToast('菜品添加成功');

    // 刷新菜品列表
    DishUI.renderCategoryButtons();
    DishUI.renderDishList();
  },

  // 显示菜品详情
  showDishDetail(dishName) {
    // 保存当前页面，以便返回
    this.state.previousPage = this.state.currentPage;
    DishUI.renderDishDetail(dishName);
    DishUI.showPage('dish-detail-page');
  },

  // 从详情页返回
  goBackFromDetail() {
    // 返回到之前的页面
    DishUI.showPage(this.state.previousPage);
    // 如果是菜单页或用户页，需要更新导航状态
    if (this.state.previousPage === 'menu-page') {
      DishUI.updateNavState(1);
    } else if (this.state.previousPage === 'user-page') {
      DishUI.updateNavState(3);
    } else {
      DishUI.updateNavState(0);
    }
  },

  // 添加到菜单
  addToMenu(dishName) {
    const dish = DishData.getDishByName(dishName);
    if (!dish) return;

    // 检查是否已添加
    const existing = this.state.todayMenu.find(item => item.name === dishName);
    if (existing) {
      // 已存在，增加数量
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      // 不存在，添加新的
      this.state.todayMenu.push({
        name: dishName,
        quantity: 1,
        time: new Date().toISOString()
      });
    }

    this.saveState();
    DishUI.renderTodayMenu();
    DishUI.renderDishList(this.state.selectedCategory || '全部');
    DishUI.renderRecommendPreview();
    DishUI.showToast(`${dishName} 已添加到菜单`);
  },

  // 更新菜品数量
  updateQuantity(dishName, change) {
    const item = this.state.todayMenu.find(item => item.name === dishName);
    if (!item) return;

    item.quantity = (item.quantity || 1) + change;
    
    if (item.quantity <= 0) {
      // 数量为0，移除
      const index = this.state.todayMenu.findIndex(item => item.name === dishName);
      if (index > -1) {
        this.state.todayMenu.splice(index, 1);
      }
    }

    this.saveState();
    DishUI.renderTodayMenu();
    DishUI.renderDishList(this.state.selectedCategory || '全部');
    DishUI.renderRecommendPreview();
  },

  // 处理编辑菜品
  handleEditDish(e) {
    e.preventDefault();

    const name = document.getElementById('edit-dish-name')?.value;
    const description = document.getElementById('edit-dish-description')?.value;
    const image = document.getElementById('edit-dish-image')?.value;

    DishData.updateDish(name, {
      description,
      image
    });

    DishUI.hideEditForm();
    DishUI.renderDishDetail(name);
    DishUI.showToast('菜品信息已更新');
  },

  // 处理生成推荐
  handleGenerateRecommend() {
    // 生成新的随机推荐
    this.state.recommendDishes = DishData.getRandomDishes(3);
    DishUI.renderRecommendPreview();
    DishUI.showToast('换了一批推荐');
  },

  // 添加推荐菜品到菜单
  addRecommendToMenu(dishName) {
    this.addToMenu(dishName);
  },

  // 处理图像识别
  handleRecognize(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const loading = document.getElementById('recognize-loading');
    const result = document.getElementById('recognize-result');

    if (loading) loading.classList.remove('hidden');
    if (result) result.classList.add('hidden');

    // 模拟识别过程 - 随机返回一个饮品
    setTimeout(() => {
      if (loading) loading.classList.add('hidden');
      if (result) {
        result.classList.remove('hidden');
        const drinks = ['鸳鸯酸奶咖啡', '雪顶草莓耶耶', '橙香热啤酒'];
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
        DishUI.renderRecognizeResult(randomDrink);
      }
    }, 2000);
  },

  // 处理添加评价
  handleAddReview() {
    const dishName = document.getElementById('dish-detail-name')?.textContent;
    const reviewContent = document.getElementById('review-content')?.value;
    const reviewRating = document.getElementById('review-rating')?.value;

    if (!dishName || !reviewContent) {
      DishUI.showToast('请填写评价内容', 'error');
      return;
    }

    const review = {
      user: this.state.currentUser || '家庭成员',
      content: reviewContent,
      rating: reviewRating
    };

    DishData.addReview(dishName, review);

    const reviewInput = document.getElementById('review-content');
    if (reviewInput) reviewInput.value = '';

    DishUI.renderReviews(dishName);
    DishUI.showToast('评价已提交');
  },

  // 显示编辑资料
  showEditProfile() {
    DishUI.showEditProfileModal();
  },

  // 处理编辑资料保存
  handleEditProfile(e) {
    e.preventDefault();
    const nameInput = document.getElementById('edit-profile-name');
    const newName = nameInput?.value.trim();

    if (!newName) {
      DishUI.showToast('请输入用户名', 'error');
      return;
    }

    DishData.updateUserData({ name: newName });
    this.state.currentUser = newName;
    this.saveState();

    DishUI.hideEditProfileModal();
    DishUI.renderUserPage();
    DishUI.showToast('资料已更新');
  },

  // 添加收藏
  addFavorite(dishName) {
    DishData.addFavorite(dishName);
    DishUI.showToast('已添加到收藏');
  },

  // 移除收藏
  removeFavorite(dishName) {
    DishData.removeFavorite(dishName);
    DishUI.renderFavoriteList(DishData.getFavorites());
    DishUI.showToast('已取消收藏');
  },

  // 切换喜欢状态
  toggleLike(dishName) {
    const isLiked = DishData.toggleLike(dishName);
    // 重新渲染所有相关组件以更新UI
    DishUI.renderDishList(DishApp.state.selectedCategory || '全部');
    DishUI.renderTodayMenu();
    DishUI.renderRecommendPreview();
    if (isLiked) {
      DishUI.showToast('已添加到喜欢');
    } else {
      DishUI.showToast('已取消喜欢');
    }
  },

  // 获取当前菜单
  getTodayMenu() {
    return this.state.todayMenu;
  },

  // 获取当前用户
  getCurrentUser() {
    return this.state.currentUser;
  },

  // 获取菜品数量
  getQuantity(dishName) {
    const item = this.state.todayMenu.find(item => item.name === dishName);
    return item ? (item.quantity || 1) : 0;
  }
};

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  if (typeof DishData !== 'undefined' && typeof DishUI !== 'undefined') {
    DishApp.init();
  }
});
