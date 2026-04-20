// ============================================
// FamPick 菜品数据模块
// 模块化的菜品数据架构，便于扩展和维护
// ============================================

const DishData = {
  // 菜品分类
  categories: ['全部', '饮品'],

  // 用户角色
  chefs: ['爸爸', '妈妈', '爷爷'],

  // 难度等级
  difficulties: ['简单', '中等', '困难'],

  // 菜品数据库 - 所有菜品数据
  dishes: [
    // ========== 饮品类 ==========
    {
      id: 'yuanyang-yogurt-coffee',
      name: '鸳鸯酸奶咖啡',
      category: '饮品',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '鸳鸯酸奶咖啡是一款创意饮品，将酸奶与咖啡完美结合，口感丰富，既有酸奶的酸甜，又有咖啡的香浓，制作简单，适合在家享用。',
      tags: ['饮品', '咖啡', '酸奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '酸奶', amount: '2盒(90g/盒)' },
        { name: '咖啡粉', amount: '1颗' }
      ],
      steps: [
        '准备两盒酸奶（90g一盒的风味酸奶）和一颗咖啡粉。',
        '将咖啡粉倒入一盒酸奶中，搅拌均匀。',
        '左手拿原味酸奶，右手拿咖啡酸奶，同时倒入杯子中，完成！'
      ],
      likes: 12
    },
    {
      id: 'strawberry-yeye',
      name: '雪顶草莓耶耶',
      category: '饮品',
      difficulty: '简单',
      time: '10分钟',
      chef: '爸爸',
      description: '雪顶草莓耶耶是一款颜值与口感并存的饮品，以草莓、椰乳、椰子冻和茉莉花茶为主要原料，顶部加上奶油雪顶，酸甜可口，清爽宜人。',
      tags: ['饮品', '草莓', '椰乳'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '5颗' },
        { name: '椰乳', amount: '200ML' },
        { name: '椰子冻', amount: '适量' },
        { name: '茉莉花茶', amount: '100ML' },
        { name: '草莓果酱', amount: '适量' },
        { name: '奶油', amount: '适量' }
      ],
      steps: [
        '杯中放入5颗草莓碎，杯子内边缘涂一圈草莓果酱。',
        '杯中放椰子冻，倒茉莉花茶100ML，倒椰乳200ML。',
        '喷一圈奶油雪顶。',
        '草莓切片装饰，开吃！'
      ],
      likes: 8
    },
    {
      id: 'orange-hot-beer',
      name: '橙香热啤酒',
      category: '饮品',
      difficulty: '中等',
      time: '15分钟',
      chef: '爷爷',
      description: '橙香热啤酒是一款温暖的热饮，以橙子、柠檬、冰糖、啤酒等为原料，加入红枣和枸杞，具有驱寒暖身的功效，适合秋冬季节饮用。',
      tags: ['饮品', '啤酒', '热饮'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '橙子', amount: '1个' },
        { name: '柠檬', amount: '1个' },
        { name: '冰糖', amount: '适量' },
        { name: '啤酒', amount: '1瓶' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '姜', amount: '适量' }
      ],
      steps: [
        '橙子柠檬用盐搓洗干净、切片、去籽，红枣去核，姜去皮切片。',
        '除去酒酸、枸杞，全部放入养生壶中，煮到快开时，再放入酒酸、枸杞，煮开。'
      ],
      likes: 5
    }
  ],

  // 根据分类获取菜品
  getDishesByCategory(category) {
    if (!category || category === '全部') {
      return this.dishes;
    }
    return this.dishes.filter(dish => dish.category === category);
  },

  // 根据ID获取菜品
  getDishById(id) {
    return this.dishes.find(dish => dish.id === id);
  },

  // 根据名称获取菜品
  getDishByName(name) {
    return this.dishes.find(dish => dish.name === name);
  },

  // 更新菜品信息
  updateDish(dishName, updates) {
    const dish = this.getDishByName(dishName);
    if (!dish) return null;
    
    Object.assign(dish, updates);
    this.saveToStorage();
    return dish;
  },

  // 添加评价
  addReview(dishName, review) {
    const dish = this.getDishByName(dishName);
    if (!dish) return null;
    
    if (!dish.reviews) dish.reviews = [];
    
    const newReview = {
      id: Date.now(),
      user: review.user || '匿名用户',
      content: review.content,
      rating: review.rating || 5,
      createdAt: new Date().toISOString()
    };
    
    dish.reviews.unshift(newReview);
    this.saveToStorage();
    return newReview;
  },

  // 获取评价
  getReviews(dishName) {
    const dish = this.getDishByName(dishName);
    return dish?.reviews || [];
  },

  // 切换喜欢状态
  toggleLike(dishName) {
    const dish = this.getDishByName(dishName);
    if (!dish) return false;

    // 检查用户是否已经喜欢
    const userLikes = this.getUserLikes();
    const likedIndex = userLikes.indexOf(dishName);

    if (likedIndex > -1) {
      // 取消喜欢
      userLikes.splice(likedIndex, 1);
      dish.likes = Math.max(0, (dish.likes || 0) - 1);
      this.saveUserLikes(userLikes);
      return false;
    } else {
      // 添加喜欢
      userLikes.push(dishName);
      dish.likes = (dish.likes || 0) + 1;
      this.saveUserLikes(userLikes);
      return true;
    }
  },

  // 获取用户喜欢的菜品列表
  getUserLikes() {
    try {
      const saved = localStorage.getItem('fampick_user_likes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  },

  // 保存用户喜欢列表
  saveUserLikes(likes) {
    try {
      localStorage.setItem('fampick_user_likes', JSON.stringify(likes));
    } catch (e) {
      console.warn('保存用户喜欢失败:', e);
    }
  },

  // 检查用户是否喜欢某菜品
  isLikedByUser(dishName) {
    const userLikes = this.getUserLikes();
    return userLikes.indexOf(dishName) > -1;
  },

  // 保存到本地存储
  saveToStorage() {
    try {
      localStorage.setItem('fampick_dishes', JSON.stringify(this.dishes));
    } catch (e) {
      console.warn('保存菜品数据失败:', e);
    }
  },

  // 从本地存储加载
  loadFromStorage() {
    try {
      const saved = localStorage.getItem('fampick_dishes');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.dishes = parsed;
      }
    } catch (e) {
      console.warn('加载菜品数据失败:', e);
    }
  },

  // 添加新菜品
  addDish(dish) {
    const newDish = {
      ...dish,
      id: dish.id || this.generateId(dish.name)
    };
    this.dishes.push(newDish);
    return newDish;
  },

  // 生成唯一ID
  generateId(name) {
    return name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
  },

  // 获取所有分类
  getCategories() {
    return this.categories;
  },

  // 搜索菜品
  searchDishes(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return this.dishes.filter(dish =>
      dish.name.toLowerCase().includes(lowerKeyword) ||
      dish.description.toLowerCase().includes(lowerKeyword) ||
      dish.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    );
  },

  // 获取随机菜品
  getRandomDishes(count = 3) {
    const shuffled = [...this.dishes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  },

  // ========== 用户数据管理 ==========

  // 默认用户配置
  defaultUser: {
    name: '家庭成员',
    avatar: '',
    role: 'member',
    joinDate: new Date().toISOString(),
    favorites: [],
    orderHistory: [],
    statistics: {
      totalOrders: 0,
      totalDishes: 0,
      favoriteChef: '',
      mostOrderedDish: ''
    }
  },

  // 获取用户数据
  getUserData() {
    try {
      const saved = localStorage.getItem('fampick_user');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('加载用户数据失败:', e);
    }
    return { ...this.defaultUser };
  },

  // 保存用户数据
  saveUserData(userData) {
    try {
      localStorage.setItem('fampick_user', JSON.stringify(userData));
    } catch (e) {
      console.warn('保存用户数据失败:', e);
    }
  },

  // 更新用户数据
  updateUserData(updates) {
    const userData = this.getUserData();
    Object.assign(userData, updates);
    this.saveUserData(userData);
    return userData;
  },

  // 添加收藏
  addFavorite(dishName) {
    const userData = this.getUserData();
    if (!userData.favorites.includes(dishName)) {
      userData.favorites.push(dishName);
      this.saveUserData(userData);
    }
    return userData;
  },

  // 移除收藏
  removeFavorite(dishName) {
    const userData = this.getUserData();
    userData.favorites = userData.favorites.filter(f => f !== dishName);
    this.saveUserData(userData);
    return userData;
  },

  // 获取收藏列表
  getFavorites() {
    return this.getUserData().favorites || [];
  },

  // 添加订单历史
  addOrderHistory(menuItems) {
    const userData = this.getUserData();
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: menuItems,
      totalItems: menuItems.length
    };
    userData.orderHistory.unshift(order);
    userData.statistics.totalOrders++;
    userData.statistics.totalDishes += menuItems.length;
    this.saveUserData(userData);
    return userData;
  },

  // 获取订单历史
  getOrderHistory(limit = 10) {
    const userData = this.getUserData();
    return userData.orderHistory.slice(0, limit);
  },

  // 获取用户统计
  getUserStatistics() {
    return this.getUserData().statistics || {};
  }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DishData;
}
