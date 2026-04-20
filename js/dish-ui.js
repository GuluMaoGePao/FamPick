// ============================================
// FamPick UI渲染模块
// 负责将数据渲染到界面上
// ============================================

const DishUI = {
  // 初始化UI
  init() {
    this.renderDate();
    this.renderRecommendPreview();
    this.renderCategoryButtons();
    this.renderDishList();
    this.renderTodayMenu();
  },

  // 渲染当前日期
  renderDate() {
    const dateEl = document.getElementById('current-date');
    if (!dateEl) return;

    const now = new Date();
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekDay = weekDays[now.getDay()];

    dateEl.textContent = `${year}年${month}月${date}日 ${weekDay}`;
  },

  // 渲染分类按钮
  renderCategoryButtons() {
    const container = document.getElementById('category-buttons');
    if (!container) return;

    container.innerHTML = '';
    const categories = DishData.categories;

    categories.forEach((category, index) => {
      const button = document.createElement('button');
      button.className = index === 0 
        ? 'category-btn active flex-shrink-0' 
        : 'category-btn flex-shrink-0';
      button.textContent = category;
      button.setAttribute('data-category', category);

      button.addEventListener('click', () => {
        // 更新活跃状态
        container.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        // 更新状态
        DishApp.state.selectedCategory = category;

        // 渲染对应分类的菜品
        this.renderDishList(category);
      });

      container.appendChild(button);
    });
  },

  // 渲染菜品列表
  renderDishList(category = '全部') {
    const container = document.getElementById('dish-list');
    if (!container) return;

    container.innerHTML = '';
    const dishes = DishData.getDishesByCategory(category);

    if (dishes.length === 0) {
      container.innerHTML = '<p class="text-center text-gray-500 py-12 col-span-2">暂无菜品</p>';
      return;
    }

    dishes.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card';
      card.setAttribute('data-dish', dish.name);

      const isLiked = DishData.isLikedByUser(dish.name);
      const quantity = DishApp.getQuantity(dish.name);
      const isAdded = quantity > 0;
      
      card.innerHTML = `
        <div class="flex items-center">
          <img src="${dish.image}" alt="${dish.name}" class="dish-card-image">
          <div class="dish-card-body">
            <h4 class="dish-name">${dish.name}</h4>
            <div class="dish-info">
              <span>
                <i class="fa fa-tag text-emerald-500 mr-1"></i>
                ${dish.category}
              </span>
              <span class="separator">|</span>
              <span>
                <i class="fa fa-clock-o text-amber-500 mr-1"></i>
                ${dish.time}
              </span>
            </div>
          </div>
          <div class="dish-actions">
            <div class="like-count">
              <button onclick="event.stopPropagation(); DishApp.toggleLike('${dish.name}')" class="action-btn like-btn ${isLiked ? 'liked' : ''}">
                <i class="fa fa-heart text-sm"></i>
              </button>
              <span class="like-count-text">${dish.likes || 0}</span>
            </div>
            ${isAdded ? `
              <div class="quantity-control">
                <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', -1)" class="quantity-btn">
                  <i class="fa fa-minus text-xs"></i>
                </button>
                <span class="quantity-value">${quantity}</span>
                <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', 1)" class="quantity-btn">
                  <i class="fa fa-plus text-xs"></i>
                </button>
              </div>
            ` : `
              <button onclick="event.stopPropagation(); DishApp.addToMenu('${dish.name}')" class="action-btn add-btn">
                <i class="fa fa-plus text-xs"></i>
              </button>
            `}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        DishApp.showDishDetail(dish.name);
      });

      container.appendChild(card);
    });
  },

  // 渲染今日菜单
  renderTodayMenu() {
    const container = document.getElementById('today-menu-list');
    const countEl = document.getElementById('order-count');
    if (!container) return;

    container.innerHTML = '';
    const todayMenu = DishApp.getTodayMenu();

    if (countEl) {
      countEl.textContent = todayMenu.reduce((sum, item) => sum + (item.quantity || 1), 0);
    }

    if (todayMenu.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12">
          <div class="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <i class="fa fa-cutlery text-3xl text-emerald-400"></i>
          </div>
          <p class="text-gray-500 mb-2">今日菜单为空</p>
          <p class="text-gray-400 text-sm">点击右下角按钮添加菜品</p>
        </div>
      `;
      return;
    }

    todayMenu.forEach((menuItem, index) => {
      const dish = DishData.getDishByName(menuItem.name);
      if (!dish) return;

      const quantity = menuItem.quantity || 1;
      const item = document.createElement('div');
      item.className = 'dish-card';

      item.innerHTML = `
        <div class="flex items-center">
          <img src="${dish.image}" alt="${dish.name}" class="dish-card-image">
          <div class="dish-card-body">
            <h4 class="dish-name">${dish.name}</h4>
            <div class="dish-info">
              <span>
                <i class="fa fa-tag text-emerald-500 mr-1"></i>
                ${dish.category}
              </span>
              <span class="separator">|</span>
              <span>
                <i class="fa fa-clock-o text-amber-500 mr-1"></i>
                ${dish.time}
              </span>
            </div>
          </div>
          <div class="dish-actions">
            <div class="like-count">
              <button onclick="event.stopPropagation(); DishApp.toggleLike('${dish.name}')" class="action-btn like-btn ${DishData.isLikedByUser(dish.name) ? 'liked' : ''}">
                <i class="fa fa-heart text-sm"></i>
              </button>
              <span class="like-count-text">${dish.likes || 0}</span>
            </div>
            <div class="quantity-control">
              <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', -1)" class="quantity-btn">
                <i class="fa fa-minus text-xs"></i>
              </button>
              <span class="quantity-value">${quantity}</span>
              <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', 1)" class="quantity-btn">
                <i class="fa fa-plus text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      `;

      // 点击打开详情页
      item.addEventListener('click', () => {
        DishApp.showDishDetail(dish.name);
      });

      container.appendChild(item);
    });
  },

  // 渲染菜品详情
  renderDishDetail(dishName) {
    const dish = DishData.getDishByName(dishName);
    if (!dish) return;

    const isLiked = DishData.isLikedByUser(dish.name);
    const likeClass = isLiked ? 'text-red-500' : 'text-gray-300';
    const likeBgClass = isLiked ? 'bg-red-50' : 'bg-gray-100';

    // 更新详情页数据
    const detailImage = document.getElementById('dish-detail-image');
    const detailName = document.getElementById('dish-detail-name');
    const detailCategory = document.getElementById('dish-detail-category');
    const detailTime = document.getElementById('dish-detail-time');
    const detailDifficulty = document.getElementById('dish-detail-difficulty');
    const detailDescription = document.getElementById('dish-detail-description');
    const detailTags = document.getElementById('dish-detail-tags');
    const detailIngredients = document.getElementById('dish-detail-ingredients');
    const detailSteps = document.getElementById('dish-detail-steps');
    const detailChef = document.getElementById('dish-detail-chef');
    const editBtn = document.getElementById('edit-dish-btn');
    const likeBtn = document.getElementById('like-dish-btn');

    if (detailImage) detailImage.src = dish.image;
    if (detailName) detailName.textContent = dish.name;
    if (detailCategory) detailCategory.textContent = dish.category;
    if (detailTime) detailTime.textContent = `烹饪时间：${dish.time}`;
    if (detailDifficulty) detailDifficulty.textContent = dish.difficulty;
    if (detailDescription) detailDescription.textContent = dish.description;
    if (detailChef) detailChef.textContent = dish.chef;
    if (editBtn) editBtn.setAttribute('data-dish', dish.name);
    if (likeBtn) {
      likeBtn.setAttribute('data-dish', dish.name);
      likeBtn.className = `w-11 h-11 rounded-2xl ${likeBgClass} flex items-center justify-center transition-colors`;
      likeBtn.innerHTML = `<i class="fa fa-heart ${likeClass} text-lg"></i>`;
    }

    if (detailTags) {
      detailTags.innerHTML = '';
      dish.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag bg-emerald-50 text-emerald-600';
        tagEl.textContent = tag;
        detailTags.appendChild(tagEl);
      });
    }

    if (detailIngredients) {
      detailIngredients.innerHTML = '';
      dish.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between py-2';
        li.innerHTML = `
          <span class="text-gray-700">${ingredient.name}</span>
          <span class="text-gray-500 text-sm">${ingredient.amount}</span>
        `;
        detailIngredients.appendChild(li);
      });
    }

    if (detailSteps) {
      detailSteps.innerHTML = '';
      dish.steps.forEach((step, index) => {
        const div = document.createElement('div');
        div.className = 'flex items-start';
        div.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
            ${index + 1}
          </div>
          <p class="text-gray-600 pt-1">${step}</p>
        `;
        detailSteps.appendChild(div);
      });
    }

    // 渲染评价
    this.renderReviews(dishName);
  },

  // 渲染评价列表
  renderReviews(dishName) {
    const container = document.getElementById('dish-reviews');
    if (!container) return;

    const reviews = DishData.getReviews(dishName);

    if (reviews.length === 0) {
      container.innerHTML = '<p class="text-center text-gray-400 py-4">暂无评价</p>';
      return;
    }

    container.innerHTML = '';
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'bg-gray-50 rounded-2xl p-4';

      // 生成星星
      const stars = '★'.repeat(parseInt(review.rating)) + '☆'.repeat(5 - parseInt(review.rating));

      div.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mr-3">
              <i class="fa fa-user text-white text-xs"></i>
            </div>
            <span class="font-medium text-gray-800">${review.user}</span>
          </div>
          <span class="text-yellow-500 star-rating">${stars}</span>
        </div>
        <p class="text-gray-600 text-sm">${review.content}</p>
      `;
      container.appendChild(div);
    });
  },

  // 渲染用户页面
  renderUserPage() {
    const userData = DishData.getUserData();
    const stats = userData.statistics || {};
    const favorites = userData.favorites || [];
    const orderHistory = DishData.getOrderHistory(5);

    // 渲染用户信息卡片
    this.renderUserInfo(userData);

    // 渲染统计数据
    this.renderUserStats(stats);

    // 渲染收藏列表
    this.renderFavoriteList(favorites);

    // 渲染订单历史
    this.renderOrderHistory(orderHistory);
  },

  // 渲染用户信息
  renderUserInfo(userData) {
    const container = document.getElementById('user-info');
    if (!container) return;

    const joinDate = new Date(userData.joinDate).toLocaleDateString('zh-CN');

    container.innerHTML = `
      <div class="flex items-center mb-4">
        <div class="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shadow-lg">
          <i class="fa fa-user text-2xl text-emerald-500"></i>
        </div>
        <div class="ml-4">
          <h3 class="text-xl font-bold text-white">${userData.name}</h3>
          <p class="text-emerald-100 text-sm">加入于 ${joinDate}</p>
        </div>
      </div>
      <button onclick="DishApp.showEditProfile()" class="w-full bg-white text-emerald-600 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all">
        <i class="fa fa-edit mr-2"></i>编辑资料
      </button>
    `;
  },

  // 渲染用户统计
  renderUserStats(stats) {
    const container = document.getElementById('user-stats');
    if (!container) return;

    container.innerHTML = `
      <div class="stat-card">
        <div class="stat-number">${stats.totalOrders || 0}</div>
        <div class="stat-label">总订单</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${stats.totalDishes || 0}</div>
        <div class="stat-label">品尝菜品</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${stats.favoriteChef || '-'}</div>
        <div class="stat-label">喜爱主厨</div>
      </div>
    `;
  },

  // 渲染收藏列表
  renderFavoriteList(favorites) {
    const container = document.getElementById('user-favorites');
    if (!container) return;

    if (favorites.length === 0) {
      container.innerHTML = `
        <div class="text-center py-6 text-gray-400">
          <div class="w-16 h-16 mx-auto rounded-full bg-rose-50 flex items-center justify-center mb-3">
            <i class="fa fa-heart text-3xl text-rose-300"></i>
          </div>
          <p>暂无收藏</p>
          <p class="text-xs text-gray-400 mt-1">去菜单页收藏喜欢的菜品吧</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    favorites.forEach(dishName => {
      const dish = DishData.getDishByName(dishName);
      if (!dish) return;

      const div = document.createElement('div');
      div.className = 'flex items-center bg-gray-50 rounded-2xl p-3';
      div.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="w-14 h-14 rounded-xl object-cover">
        <div class="flex-1 ml-4">
          <h4 class="font-medium text-gray-800">${dish.name}</h4>
          <p class="text-xs text-gray-500">${dish.category}</p>
        </div>
        <button onclick="DishApp.removeFavorite('${dish.name}')" class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors">
          <i class="fa fa-trash"></i>
        </button>
      `;
      container.appendChild(div);
    });
  },

  // 渲染订单历史
  renderOrderHistory(orders) {
    const container = document.getElementById('user-orders');
    if (!container) return;

    if (orders.length === 0) {
      container.innerHTML = `
        <div class="text-center py-6 text-gray-400">
          <div class="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <i class="fa fa-history text-3xl text-blue-300"></i>
          </div>
          <p>暂无订单历史</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    orders.forEach(order => {
      const date = new Date(order.date).toLocaleDateString('zh-CN');
      const itemsText = order.items.map(item => item.name).join('、');

      const div = document.createElement('div');
      div.className = 'bg-gray-50 rounded-2xl p-4 mb-3';
      div.innerHTML = `
        <div class="flex justify-between items-start mb-2">
          <span class="text-sm text-gray-400">${date}</span>
          <span class="badge badge-primary">${order.totalItems}道菜</span>
        </div>
        <p class="text-sm text-gray-600">${itemsText}</p>
      `;
      container.appendChild(div);
    });
  },

  // 渲染智能推荐预览
  renderRecommendPreview() {
    const container = document.getElementById('recommend-preview');
    if (!container) return;

    // 如果没有保存的推荐菜品，则生成新的
    if (DishApp.state.recommendDishes.length === 0) {
      DishApp.state.recommendDishes = DishData.getRandomDishes(3);
    }

    container.innerHTML = '';
    DishApp.state.recommendDishes.forEach(dish => {
      const isLiked = DishData.isLikedByUser(dish.name);
      const quantity = DishApp.getQuantity(dish.name);
      const isAdded = quantity > 0;

      const div = document.createElement('div');
      div.className = 'dish-card';
      div.innerHTML = `
        <div class="flex items-center">
          <img src="${dish.image}" alt="${dish.name}" class="dish-card-image">
          <div class="dish-card-body">
            <h4 class="dish-name">${dish.name}</h4>
            <div class="dish-info">
              <span>
                <i class="fa fa-tag text-emerald-500 mr-1"></i>
                ${dish.category}
              </span>
              <span class="separator">|</span>
              <span>
                <i class="fa fa-clock-o text-amber-500 mr-1"></i>
                ${dish.time}
              </span>
            </div>
          </div>
          <div class="dish-actions">
            <div class="like-count">
              <button onclick="event.stopPropagation(); DishApp.toggleLike('${dish.name}')" class="action-btn like-btn ${isLiked ? 'liked' : ''}">
                <i class="fa fa-heart text-sm"></i>
              </button>
              <span class="like-count-text">${dish.likes || 0}</span>
            </div>
            ${isAdded ? `
              <div class="quantity-control">
                <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', -1)" class="quantity-btn">
                  <i class="fa fa-minus text-xs"></i>
                </button>
                <span class="quantity-value">${quantity}</span>
                <button onclick="event.stopPropagation(); DishApp.updateQuantity('${dish.name}', 1)" class="quantity-btn">
                  <i class="fa fa-plus text-xs"></i>
                </button>
              </div>
            ` : `
              <button onclick="event.stopPropagation(); DishApp.addRecommendToMenu('${dish.name}')" class="action-btn add-btn">
                <i class="fa fa-plus text-xs"></i>
              </button>
            `}
          </div>
        </div>
      `;
      container.appendChild(div);
    });
  },

  // 渲染识别结果
  renderRecognizeResult(dishName) {
    const container = document.getElementById('recognize-result');
    if (!container) return;

    const dish = DishData.getDishByName(dishName);

    if (dish) {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-6 shadow-sm">
          <h3 class="text-xl font-bold text-gray-800 mb-4">识别成功！</h3>
          <div class="flex items-center mb-4">
            <img src="${dish.image}" alt="${dish.name}" class="w-24 h-24 rounded-2xl object-cover">
            <div class="flex-1 ml-4">
              <h4 class="font-bold text-gray-800">${dish.name}</h4>
              <span class="badge badge-primary mt-2">${dish.category}</span>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">${dish.description}</p>
          <button onclick="DishApp.addToMenu('${dish.name}')" class="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all">
            <i class="fa fa-plus mr-2"></i>加入今日菜单
          </button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-6 text-center shadow-sm">
          <p class="text-gray-600 mb-2">未找到匹配菜品</p>
          <p class="text-sm text-gray-400">您可以手动添加到菜单中</p>
        </div>
      `;
    }
  },

  // 显示编辑表单
  showEditForm(dishName) {
    const dish = DishData.getDishByName(dishName);
    if (!dish) return;

    const modal = document.getElementById('edit-dish-modal');
    if (modal) modal.classList.remove('hidden');

    // 填充表单
    document.getElementById('edit-dish-name').value = dish.name;
    document.getElementById('edit-dish-difficulty').value = dish.difficulty;
    document.getElementById('edit-dish-chef').value = dish.chef;
    document.getElementById('edit-dish-description').value = dish.description;
    document.getElementById('edit-dish-image').value = dish.image;
  },

  // 隐藏编辑表单
  hideEditForm() {
    const modal = document.getElementById('edit-dish-modal');
    if (modal) modal.classList.add('hidden');
  },

  // 显示编辑资料弹窗
  showEditProfileModal() {
    const userData = DishData.getUserData();
    const modal = document.getElementById('edit-profile-modal');
    const nameInput = document.getElementById('edit-profile-name');

    if (nameInput) nameInput.value = userData.name;
    if (modal) modal.classList.remove('hidden');
  },

  // 隐藏编辑资料弹窗
  hideEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.classList.add('hidden');
  },

  // 切换页面显示
  showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page-section').forEach(page => {
      page.classList.add('hidden');
    });

    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.remove('hidden');
    }
  },

  // 更新导航栏状态
  updateNavState(index) {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, i) => {
      if (i === index) {
        btn.classList.remove('text-gray-400');
        btn.classList.add('text-emerald-500', 'active');
      } else {
        btn.classList.add('text-gray-400');
        btn.classList.remove('text-emerald-500', 'active');
      }
    });

    // 更新用户按钮
    const userBtn = document.getElementById('user-avatar-btn');
    if (userBtn) {
      if (index === 3) {
        userBtn.classList.remove('text-gray-400');
        userBtn.classList.add('text-emerald-500');
      } else {
        userBtn.classList.add('text-gray-400');
        userBtn.classList.remove('text-emerald-500');
      }
    }
  },

  // 显示提示消息
  showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.querySelector('.toast-message').textContent = message;
    toast.classList.remove('hidden');

    // 根据类型设置背景色
    if (type === 'success') {
      toast.className = toast.className.replace(/bg-\w+-\d+/g, 'bg-gradient-to-r from-emerald-500 to-emerald-600');
    } else if (type === 'error') {
      toast.className = toast.className.replace(/bg-\w+-\d+/g, 'bg-gradient-to-r from-red-500 to-red-600');
    }

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2000);
  }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DishUI;
}
