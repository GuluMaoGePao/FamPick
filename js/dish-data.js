// ============================================
// FamPick 菜品数据模块
// 模块化的菜品数据架构，便于扩展和维护
// ============================================

const DishData = {
  // 菜品分类
  categories: ['全部', '甜品', '饮品', '主食', '炒菜', '汤类'],
  
  // 子分类
  subcategories: {
    '主食': ['米饭', '面食', '粥类', '饼类', '其他'],
    '炒菜': ['蔬菜', '荤菜', '海鲜'],
    '蔬菜': ['春季', '夏季', '秋季', '冬季'],
    '汤类': [],
    '饮品': ['奶茶', '咖啡', '花果茶']
  },

  // 用户角色
  chefs: ['爸爸', '妈妈', '爷爷'],

  // 难度等级
  difficulties: ['简单', '中等', '困难'],

  // 菜品数据库 - 所有菜品数据
  dishes: [
    // ========== 主食类 ==========
    {
      id: 'xianggu-jisimiand',
      name: '香菇鸡丝面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '15分钟',
      chef: '妈妈',
      description: '香菇鸡丝面是一道经典的中式面食，以面条、鸡肉、香菇为主要原料，搭配各种调料，味道鲜美，营养丰富。',
      tags: ['主食', '面条', '鸡肉'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '鸡肉', amount: '适量' },
        { name: '香菇', amount: '适量' },
        { name: '青菜', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备材料，鸡肉切丝。',
        '锅中加油，放入鸡肉丝煸炒。',
        '加入香菇继续煸炒。',
        '加入适量水烧开。',
        '下面条煮至熟透。',
        '加入青菜煮软。',
        '调味即可出锅。'
      ],
      likes: 0
    },
    {
      id: 'zhurou-dacong-jiaozi',
      name: '猪肉大葱饺子',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '30分钟',
      chef: '爸爸',
      description: '猪肉大葱饺子是中国传统美食，以猪肉和大葱为馅料，口感鲜美，营养丰富。',
      tags: ['主食', '饺子', '猪肉'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '猪肉', amount: '适量' },
        { name: '大葱', amount: '适量' },
        { name: '饺子皮', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备食材，猪肉剁碎，大葱切碎。',
        '将猪肉和大葱混合，加入调料搅拌均匀。',
        '取饺子皮，放入馅料。',
        '包成饺子形状。',
        '锅中加水烧开，放入饺子煮至熟透。'
      ],
      likes: 0
    },
    {
      id: 'koumo-xian-sha-mian',
      name: '口蘑鲜沙面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '爷爷',
      description: '口蘑鲜沙面是一道风味独特的面食，以口蘑为主要原料，口感鲜美，营养丰富。',
      tags: ['主食', '面条', '口蘑'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '口蘑', amount: '适量' },
        { name: '青菜', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备材料，口蘑切片。',
        '锅中加油，放入口蘑煸炒。',
        '加入适量水烧开。',
        '下面条煮至熟透。',
        '加入青菜煮软。',
        '调味即可出锅。'
      ],
      likes: 0
    },
    {
      id: 'qingtang-mian',
      name: '清汤面',
      category: '主食',
      subcategory: '面食',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '清汤面是一道简单清爽的面食，以面条和清汤为主要原料，适合早餐或清淡饮食。',
      tags: ['主食', '面条', '清汤'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '鸡蛋', amount: '2个' },
        { name: '青菜', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备材料，鸡蛋打散。',
        '锅中加水烧开，下面条煮至熟透。',
        '加入青菜煮软。',
        '倒入打散的鸡蛋。',
        '调味即可出锅。'
      ],
      likes: 0
    },
    // ========== 甜品类 ==========
    {
      id: 'yuni-tusi',
      name: '芋泥吐司',
      category: '甜品',
      difficulty: '中等',
      time: '15分钟',
      chef: '妈妈',
      description: '芋泥吐司是一道美味的甜品，以芋头、紫薯和吐司为主要原料，口感丰富，甜而不腻。',
      tags: ['甜品', '芋泥', '吐司'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芋头', amount: '适量' },
        { name: '紫薯', amount: '适量' },
        { name: '吐司', amount: '4片' },
        { name: '鸡蛋', amount: '2个' },
        { name: '牛奶', amount: '适量' },
        { name: '炼乳', amount: '适量' }
      ],
      steps: [
        '芋头、紫薯蒸熟，加入牛奶、炼乳，搅拌成泥。',
        '取4片吐司切去边边。',
        '碗中打入两个鸡蛋，打散均匀。',
        '取一片吐司，涂上芋泥，再盖上一片吐司，然后裹满蛋液。',
        '锅中少许油，煎至两面金黄，搞定吃！'
      ],
      likes: 0
    },
    {
      id: 'bingtang-hulu',
      name: '冰糖葫芦',
      category: '甜品',
      difficulty: '中等',
      time: '20分钟',
      chef: '妈妈',
      description: '冰糖葫芦是一道传统的中式甜品，以水果和冰糖为主要原料，口感酸甜可口，外脆内嫩。',
      tags: ['甜品', '冰糖', '水果'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '山楂', amount: '适量' },
        { name: '草莓', amount: '适量' },
        { name: '葡萄', amount: '适量' },
        { name: '白糖', amount: '适量' },
        { name: '竹签', amount: '适量' }
      ],
      steps: [
        '水果洗净擦干水分后，用竹签串好。',
        '锅中加入白糖和适量水，大火烧开后转小火。',
        '煮至糖浆颜色变深，用筷子蘸取糖浆能拉出丝。',
        '将串好的水果放入糖浆中裹均匀，放在油纸上冷却即可。'
      ],
      likes: 0
    },
    {
      id: 'mangguo-suannai-dong',
      name: '芒果酸奶冻',
      category: '甜品',
      difficulty: '简单',
      time: '6小时',
      chef: '妈妈',
      description: '芒果酸奶冻是一道美味的甜品，以芒果和酸奶为主要原料，口感清爽，适合夏季食用。',
      tags: ['甜品', '芒果', '酸奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芒果', amount: '适量' },
        { name: '酸奶', amount: '适量' },
        { name: '模具', amount: '1个' }
      ],
      steps: [
        '准备材料，芒果切块。',
        '将芒果肉倒入酸奶中，搅拌均匀。',
        '倒入模具中，放入冰箱冷藏5-6小时。',
        '取出脱模即可食用。'
      ],
      likes: 0
    },
    {
      id: 'yuni-suannai-dangao',
      name: '芋泥酸奶蛋糕',
      category: '甜品',
      difficulty: '中等',
      time: '2小时',
      chef: '妈妈',
      description: '芋泥酸奶蛋糕是一道美味的甜品，以芋头、酸奶和蛋糕为主要原料，口感丰富，甜而不腻。',
      tags: ['甜品', '芋泥', '酸奶', '蛋糕'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芋头', amount: '适量' },
        { name: '酸奶', amount: '适量' },
        { name: '蛋糕', amount: '1片' },
        { name: '牛奶', amount: '适量' }
      ],
      steps: [
        '准备食材，芋头蒸熟。',
        '将芋头压成泥，加入牛奶搅拌均匀。',
        '取一片蛋糕，切去边缘。',
        '在蛋糕上抹一层芋泥，再铺一层蛋糕，重复3次。',
        '最后在顶部淋上酸奶，点缀水果片即可。'
      ],
      likes: 0
    },
    {
      id: 'aoliao-mashu',
      name: '奥利奥麻薯',
      category: '甜品',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '奥利奥麻薯是一道美味的甜品，以奥利奥和麻薯为主要原料，口感软糯，甜而不腻。',
      tags: ['甜品', '奥利奥', '麻薯'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '奥利奥', amount: '适量' },
        { name: '牛奶', amount: '250ml' },
        { name: '木薯淀粉', amount: '30g' },
        { name: '白糖', amount: '适量' }
      ],
      steps: [
        '奥利奥去掉中间的奶油，把饼干压碎。',
        '牛奶倒入锅中，加入木薯淀粉和白糖，搅拌均匀。',
        '开小火煮至浓稠，不断搅拌，不要粘锅。',
        '煮好后放入奥利奥碎中，裹均匀，完成！'
      ],
      likes: 0
    },
    // ========== 主食类 ==========
    {
      id: 'boluo-chaofan',
      name: '菠萝炒饭',
      category: '主食',
      subcategory: '米饭',
      difficulty: '中等',
      time: '20分钟',
      chef: '爸爸',
      description: '菠萝炒饭是一道美味的主食，以菠萝、米饭和各种蔬菜为主要原料，口感丰富，酸甜可口。',
      tags: ['主食', '菠萝', '炒饭'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '菠萝', amount: '1个' },
        { name: '米饭', amount: '适量' },
        { name: '鸡蛋', amount: '2个' },
        { name: '胡萝卜', amount: '1根' },
        { name: '玉米粒', amount: '适量' },
        { name: '青豆', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '菠萝切去1/3处，挖空果肉。',
        '胡萝卜切丁，鸡蛋打散。',
        '锅中加油，倒入鸡蛋炒熟盛出。',
        '锅中再加油，放入胡萝卜、玉米粒、青豆煸炒。',
        '加入米饭和炒好的鸡蛋，调味。',
        '最后加入菠萝丁翻炒均匀，盛入菠萝壳中即可。'
      ],
      likes: 0
    },
    {
      id: 'feicai-jidan-bing',
      name: '韭菜鸡蛋饼',
      category: '主食',
      subcategory: '饼类',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '韭菜鸡蛋饼是一道简单美味的主食，以韭菜和鸡蛋为主要原料，口感鲜香，营养丰富。',
      tags: ['主食', '韭菜', '鸡蛋', '饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '韭菜', amount: '适量' },
        { name: '鸡蛋', amount: '3个' },
        { name: '面粉', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '韭菜洗净切碎，鸡蛋打散。',
        '将韭菜、鸡蛋、面粉混合，加入调料搅拌成面糊。',
        '锅中加油，倒入面糊摊成饼状。',
        '小火煎至两面金黄即可。'
      ],
      likes: 0
    },
    {
      id: 'congyou-bing',
      name: '葱油饼',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '爸爸',
      description: '葱油饼是一道经典的中式面食，以面粉和葱为主要原料，口感酥脆，香气四溢。',
      tags: ['主食', '葱', '饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面粉', amount: '适量' },
        { name: '葱', amount: '适量' },
        { name: '油', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '面粉加入温水和成面团，醒发15分钟。',
        '葱切碎，加入油和调料制成葱油。',
        '面团擀成薄片，抹上葱油，卷起来。',
        '分成小剂子，擀成饼状。',
        '锅中加油，煎至两面金黄即可。'
      ],
      likes: 0
    },
    {
      id: 'congxiang-jidan-jianbing',
      name: '葱香鸡蛋煎饼',
      category: '主食',
      subcategory: '饼类',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '葱香鸡蛋煎饼是一道简单美味的主食，以面粉、鸡蛋和葱为主要原料，口感鲜香，营养丰富。',
      tags: ['主食', '葱', '鸡蛋', '煎饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面粉', amount: '适量' },
        { name: '鸡蛋', amount: '2个' },
        { name: '葱', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '面粉加入牛奶和鸡蛋，搅拌成面糊。',
        '加入切碎的葱和调料，搅拌均匀。',
        '锅中加油，倒入面糊摊成饼状。',
        '小火煎至两面金黄，打入鸡蛋。',
        '煎熟后出锅即可。'
      ],
      likes: 0
    },
    {
      id: 'shengjianbao',
      name: '生煎包',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '25分钟',
      chef: '爸爸',
      description: '生煎包是一道经典的中式面食，以面粉和肉馅为主要原料，口感酥脆，香气四溢。',
      tags: ['主食', '包子', '煎包'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面粉', amount: '适量' },
        { name: '猪肉馅', amount: '适量' },
        { name: '酵母', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '面粉加入酵母和温水和成面团，醒发30分钟。',
        '猪肉馅加入调料搅拌均匀。',
        '面团分成小剂子，包入馅料。',
        '锅中加油，放入包子，煎至底部金黄。',
        '加入适量水，盖盖焖熟即可。'
      ],
      likes: 0
    },
    {
      id: 'fanqie-nongtang-mian',
      name: '番茄浓汤面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '妈妈',
      description: '番茄浓汤面是一道美味的面食，以番茄和面条为主要原料，汤汁浓郁，营养丰富。',
      tags: ['主食', '番茄', '面条', '汤面'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '番茄', amount: '2个' },
        { name: '鸡蛋', amount: '2个' },
        { name: '葱', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '番茄切块，鸡蛋打散。',
        '锅中加油，放入番茄煸炒出汁。',
        '加入适量水烧开，下面条煮至熟透。',
        '倒入打散的鸡蛋，调味。',
        '撒上葱花即可出锅。'
      ],
      likes: 0
    },
    {
      id: 'zha-jiang-mian',
      name: '炸酱面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '25分钟',
      chef: '爸爸',
      description: '炸酱面是一道经典的中式面食，以面条和炸酱为主要原料，口感丰富，味道鲜美。',
      tags: ['主食', '面条', '炸酱'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '猪肉', amount: '适量' },
        { name: '黄豆酱', amount: '适量' },
        { name: '黄瓜', amount: '1根' },
        { name: '胡萝卜', amount: '1根' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备材料，猪肉切丁，黄瓜、胡萝卜切丝。',
        '锅中加油，放入猪肉丁煸炒至变色。',
        '加入黄豆酱和调料，翻炒均匀。',
        '煮面条至熟透，捞出沥干。',
        '将炸酱浇在面条上，加入黄瓜丝和胡萝卜丝即可。'
      ],
      likes: 0
    },
    {
      id: 'congyou-banmian',
      name: '葱油拌面',
      category: '主食',
      subcategory: '面食',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '葱油拌面是一道简单美味的面食，以面条和葱油为主要原料，口感鲜香，营养丰富。',
      tags: ['主食', '面条', '葱油'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '葱', amount: '适量' },
        { name: '油', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '准备材料，葱切碎。',
        '锅中加油，放入葱花煸炒出香味。',
        '加入调料，翻炒均匀。',
        '煮面条至熟透，捞出沥干。',
        '将葱油浇在面条上，搅拌均匀即可。'
      ],
      likes: 0
    },
    {
      id: 'fanqie-roujiang-mian',
      name: '番茄肉酱面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '妈妈',
      description: '番茄肉酱面是一道美味的面食，以番茄、肉酱和面条为主要原料，汤汁浓郁，营养丰富。',
      tags: ['主食', '番茄', '肉酱', '面条'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '西红柿', amount: '2个' },
        { name: '肉末', amount: '适量' },
        { name: '蒜', amount: '适量' },
        { name: '葱', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '西红柿切丁，蒜切末，小葱切葱花。',
        '调制酱汁：一勺生抽、半勺老抽、一勺蚝油、少许盐、少许糖。',
        '油锅中爆香蒜，炒香肉末，炒至变色，加番茄炒出汁，加入酱汁，想要更浓郁的可加入一勺番茄酱或少许水淀粉。',
        '面条煮熟捞出，淋上番茄肉酱，拌匀开吃！'
      ],
      likes: 0
    },
    {
      id: 'mizhi-jipaifan',
      name: '蜜汁鸡排饭',
      category: '主食',
      subcategory: '米饭',
      difficulty: '中等',
      time: '20分钟',
      chef: '爸爸',
      description: '蜜汁鸡排饭是一道美味的主食，以鸡腿肉和米饭为主要原料，口感丰富，味道鲜美。',
      tags: ['主食', '鸡排', '蜜汁', '米饭'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡腿肉', amount: '适量' },
        { name: '姜', amount: '适量' },
        { name: '生抽', amount: '2勺' },
        { name: '老抽', amount: '半勺' },
        { name: '料酒', amount: '1勺' },
        { name: '蚝油', amount: '1勺' },
        { name: '蜂蜜', amount: '2勺' },
        { name: '盐', amount: '少许' },
        { name: '黑胡椒', amount: '少许' }
      ],
      steps: [
        '鸡腿去骨头、洗去血水，用叉子戳戳戳，或划几刀青敲敲敲，放入姜片，1勺料酒、少许盐、胡椒粉，抓匀腌制15分钟。',
        '调个酱汁：2勺生抽、1勺蚝油、半勺老抽、2勺蜂蜜、水，搅拌均匀。',
        '锅中放油，鸡肉小火煎至两面金黄，倒入酱汁，焖煮5分钟（汁少的加点水），大火收汁即可（边收汁一边翻面）。'
      ],
      likes: 0
    },
    {
      id: 'tudousi-shucaibing',
      name: '土豆丝蔬菜饼',
      category: '主食',
      subcategory: '饼类',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '土豆丝蔬菜饼是一道健康美味的主食，以土豆、胡萝卜和鸡蛋为主要原料，口感酥脆，营养丰富。',
      tags: ['主食', '土豆', '蔬菜', '饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '土豆', amount: '1个' },
        { name: '胡萝卜', amount: '1根' },
        { name: '卷心菜', amount: '适量' },
        { name: '鸡蛋', amount: '1个' },
        { name: '面粉', amount: '一大勺' },
        { name: '盐', amount: '一勺' },
        { name: '十三香', amount: '适量' }
      ],
      steps: [
        '蔬菜洗净、切丝。',
        '蔬菜丝、一个鸡蛋、一大勺面粉，一勺盐、十三香，拌匀。',
        '锅里放油，油热放入蔬菜丝围成一个圈圈，中间打入鸡蛋。上面可撒点葱花。',
        '凝固后翻面，熟后关火出锅，开吃！'
      ],
      likes: 0
    },
    {
      id: 'e-zi-jian',
      name: '蚵仔煎',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '15分钟',
      chef: '爸爸',
      description: '蚵仔煎是一道经典的闽南小吃，以海蛎子、鸡蛋和面粉为主要原料，口感丰富，味道鲜美。',
      tags: ['主食', '海蛎子', '鸡蛋', '饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '海蛎子', amount: '适量' },
        { name: '鸡蛋', amount: '1个' },
        { name: '蒜苗', amount: '适量' },
        { name: '面粉', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '胡椒粉', amount: '适量' }
      ],
      steps: [
        '适量面粉加入一个鸡蛋，搅匀成糊糊，加入蒜末、胡椒粉、盐，搅拌均匀。',
        '加入蛎子肉，搅拌均匀，挂上糊糊。',
        '锅里倒油，油热倒入蛎子糊糊摊平，凝固后翻面，煎至两面金黄，完成！'
      ],
      likes: 0
    },
    {
      id: 'huotui-sanmingzhi',
      name: '火腿三明治',
      category: '主食',
      subcategory: '其他',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '火腿三明治是一道简单美味的主食，以吐司、火腿和鸡蛋为主要原料，口感丰富，营养均衡。',
      tags: ['主食', '火腿', '三明治', '吐司'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面包吐司', amount: '适量' },
        { name: '番茄', amount: '1个' },
        { name: '生菜', amount: '适量' },
        { name: '鸡蛋', amount: '3个' },
        { name: '黄瓜', amount: '1根' },
        { name: '火腿片', amount: '适量' },
        { name: '芝士', amount: '适量' },
        { name: '番茄酱', amount: '适量' }
      ],
      steps: [
        '3个鸡蛋打入碗中，搅拌均匀成蛋液，可加少许盐、黑胡椒。',
        '西红柿、黄瓜切片，吐司片切两半。',
        '锅放少许油，倒入蛋液，放入吐司片，吐司蘸面、两面裹满蛋液。',
        '吐司蛋液凝固但个侧面（吐司在下，蛋在上），熟后关火，大余吐司外的鸡蛋可以叠起来。',
        '一半位置放入想吃的蔬菜、火腿、芝士、番茄酱……，对折！吃吃吃！'
      ],
      likes: 0
    },
    {
      id: 'jirou-bing',
      name: '鸡肉饼',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '25分钟',
      chef: '妈妈',
      description: '鸡肉饼是一道健康美味的主食，以鸡胸肉和蔬菜为主要原料，口感丰富，营养均衡。',
      tags: ['主食', '鸡肉', '饼', '蔬菜'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡胸肉', amount: '适量' },
        { name: '蔬菜', amount: '适量' },
        { name: '生抽', amount: '2勺' },
        { name: '料酒', amount: '1勺' },
        { name: '老抽', amount: '半勺' },
        { name: '黑胡椒', amount: '少许' },
        { name: '淀粉', amount: '2勺' }
      ],
      steps: [
        '食材洗净，西兰花、胡萝卜、玉米粒煮熟；西兰花、胡萝卜、鸡胸肉剁碎。',
        '剁碎的食材加入玉米粒，加入2勺生抽、1勺料酒、半勺老抽、少许黑胡椒、2勺淀粉，搅拌均匀，腌制20-30分钟。',
        '肉馅先弄成球球，两手掌轻压成肉饼，锅放油，油热放肉饼。',
        '煎至两面金黄即可出锅（不确定熟没熟就用铲子中间一切两半，看看中间情况）。'
      ],
      likes: 0
    },
    {
      id: 'luosifen-zhaidan',
      name: '螺蛳粉炸蛋',
      category: '主食',
      subcategory: '其他',
      difficulty: '简单',
      time: '10分钟',
      chef: '爸爸',
      description: '螺蛳粉炸蛋是一道美味的配菜，以鸡蛋为主要原料，口感酥脆，味道鲜美。',
      tags: ['主食', '鸡蛋', '炸蛋', '螺蛳粉'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡蛋', amount: '3个' },
        { name: '油', amount: '适量' }
      ],
      steps: [
        '碗中打入两三个鸡蛋，用筷子打散打匀。',
        '锅中倒油，筷子沾上少许蛋液放入锅中，快速起泡即可开始倒入蛋液。',
        '蛋液一圈圈倒入，一面炸至金黄后翻面，两面金黄后捞出即可，完成！'
      ],
      likes: 0
    },
    {
      id: 'busuzhibazizhi',
      name: '不素之霸自制',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '爸爸',
      description: '不素之霸自制是一道美味的三明治，以面包片、火腿和鸡蛋为主要原料，口感丰富，营养均衡。',
      tags: ['主食', '三明治', '火腿', '鸡蛋'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面包片', amount: '适量' },
        { name: '鸡蛋', amount: '适量' },
        { name: '东方甄选烤肠', amount: '适量' },
        { name: '生菜', amount: '适量' },
        { name: '番茄', amount: '适量' },
        { name: '番茄酱', amount: '适量' },
        { name: '芝士', amount: '适量' }
      ],
      steps: [
        '火腿切花刀。',
        '番茄切片，小火将鸡蛋煎至两面均匀，煎至凝固后再焖半分钟。',
        '火腿煎至两面微焦，然后放在番茄酱、生菜、鸡蛋、芝士、火腿、番茄酱、面包片。',
        '开吃！'
      ],
      likes: 0
    },
    {
      id: 'jiangyou-tangxin-dan',
      name: '酱油糖心蛋',
      category: '主食',
      subcategory: '其他',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '酱油糖心蛋是一道美味的小吃，以鸡蛋和酱油为主要原料，口感丰富，味道鲜美。',
      tags: ['主食', '鸡蛋', '糖心蛋', '酱油'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '可生食鸡蛋', amount: '适量' },
        { name: '香菜', amount: '适量' },
        { name: '洋葱', amount: '适量' },
        { name: '小米椒', amount: '适量' },
        { name: '蒜', amount: '适量' },
        { name: '凉开水', amount: '适量' },
        { name: '生抽', amount: '适量' }
      ],
      steps: [
        '水开放鸡蛋，转中小火煮6分钟。',
        '捞出放入冰水，过2-3分钟左右剥皮。',
        '生抽:空白开=1:1倒入碗中，加入切好的洋葱、香菜、小米椒、蒜，搅拌均匀，放入剥好的鸡蛋。',
        '密封放入冰箱，冷藏腌制一晚上完成！'
      ],
      likes: 0
    },
    {
      id: 'latiao-chaofan',
      name: '辣条炒饭',
      category: '主食',
      subcategory: '米饭',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '辣条炒饭是一道创意十足的主食，以辣条和米饭为主要原料，口感丰富，味道独特。',
      tags: ['主食', '辣条', '炒饭', '创意'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡蛋', amount: '1个' },
        { name: '米饭', amount: '适量' },
        { name: '辣条', amount: '适量' },
        { name: '葱花', amount: '适量' },
        { name: '生抽', amount: '1勺' },
        { name: '蚝油', amount: '半勺' },
        { name: '老抽', amount: '少许' }
      ],
      steps: [
        '锅中倒油，油热倒入鸡蛋液，炒熟。',
        '倒入米饭，炒匀，加入一勺生抽半勺蚝油，少许老抽上色，炒匀麻辣王子。',
        '倒入切好的辣条，炒匀，最后撒上葱花，完成！'
      ],
      likes: 0
    },
    {
      id: 'xiaren-doufu-zhengdan',
      name: '虾仁豆腐蒸蛋',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '20分钟',
      chef: '妈妈',
      description: '虾仁豆腐蒸蛋是一道营养美味的主食，以虾仁、豆腐和鸡蛋为主要原料，口感滑嫩，营养丰富。',
      tags: ['主食', '虾仁', '豆腐', '蒸蛋'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡蛋', amount: '3个' },
        { name: '豆腐', amount: '适量' },
        { name: '虾仁', amount: '适量' },
        { name: '生抽', amount: '适量' },
        { name: '盐', amount: '少许' }
      ],
      steps: [
        '三个鸡蛋打入碗中，加入1:1的水、少许盐，打散搅拌均匀。',
        '豆腐切小块放入碗中，放入虾仁，倒入蛋液（可以撒点葱花，或加点蔬菜比如西兰花）。',
        '上锅蒸15-20分钟，出锅后倒点生抽，拌匀，开吃！'
      ],
      likes: 0
    },
    {
      id: 'zhandoubao',
      name: '粘豆包',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '2小时',
      chef: '妈妈',
      description: '粘豆包是一道传统的中式面食，以大黄米粉、玉米粉和红豆沙为主要原料，口感软糯，味道香甜。',
      tags: ['主食', '粘豆包', '传统', '红豆沙'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '大黄米粉', amount: '400克' },
        { name: '玉米粉', amount: '100克' },
        { name: '红豆沙', amount: '200克' }
      ],
      steps: [
        '大黄米粉、玉米粉混匀，需少量多次加入250克开水面食边用筷子搅成絮状，揉成团盖上保鲜膜放到温暖的地方自然蒸发一晚。',
        '红豆沙搓成团备用(30g)，取适量面团搓圆压扁(40g)，包入红豆沙用虎口收紧成团。',
        '冷水上锅蒸，每个豆包适当间隔距离，水开蒸15分钟左右即可，等到豆包适当冷却起锅。'
      ],
      likes: 0
    },
    {
      id: 'shouzhuabing-sanmingzhi',
      name: '手抓饼三明治',
      category: '主食',
      subcategory: '其他',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '手抓饼三明治是一道简单美味的主食，以手抓饼、火腿和鸡蛋为主要原料，口感丰富，营养均衡。',
      tags: ['主食', '手抓饼', '三明治', '火腿'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '手抓饼', amount: '1张' },
        { name: '鸡蛋', amount: '1个' },
        { name: '火腿', amount: '适量' },
        { name: '黄瓜', amount: '适量' },
        { name: '番茄', amount: '适量' },
        { name: '番茄酱', amount: '适量' },
        { name: '芝士', amount: '适量' }
      ],
      steps: [
        '火腿切片，黄瓜切片，番茄切片。',
        '先煎个鸡蛋，火腿稍微煎一下。',
        '手抓饼稍微煎一下变软一点，依次放番茄、黄瓜、火腿、鸡蛋、番茄、芝士、火腿放在上面挤好，然后把边边折起来按一下，把整个手抓饼翻面再煎一下。',
        '对半切开，开吃！'
      ],
      likes: 0
    },
    {
      id: 'lanren-jiangxiangbing',
      name: '懒人酱香饼',
      category: '主食',
      subcategory: '饼类',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '懒人酱香饼是一道简单美味的主食，以手抓饼和酱料为主要原料，口感酥脆，味道鲜美。',
      tags: ['主食', '手抓饼', '酱香', '饼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '手抓饼', amount: '1张' },
        { name: '葱蒜', amount: '适量' },
        { name: '芝麻', amount: '适量' },
        { name: '淀粉', amount: '适量' },
        { name: '豆瓣酱', amount: '1勺' },
        { name: '黄豆酱', amount: '1勺' },
        { name: '番茄酱', amount: '1勺' },
        { name: '蚝油', amount: '半勺' },
        { name: '五香粉', amount: '少许' }
      ],
      steps: [
        '酱汁：豆瓣酱、黄豆酱、番茄酱各一勺，蚝油半勺，少许五香粉、淀粉，小半碗水，搅拌均匀。',
        '锅热放入少许油，蒜末炒香，倒入酱汁，煮至浓稠。',
        '锅热放入手抓饼，煎至两面金黄盛出。',
        '饼上添满酱汁，撒点芝麻、葱花，完成！'
      ],
      likes: 0
    },
    {
      id: 'hebao-dan-menmian',
      name: '荷包蛋焖面',
      category: '主食',
      subcategory: '面食',
      difficulty: '中等',
      time: '15分钟',
      chef: '爸爸',
      description: '荷包蛋焖面是一道美味的面食，以面条、鸡蛋和蔬菜为主要原料，口感丰富，营养均衡。',
      tags: ['主食', '鸡蛋', '面条', '焖面'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '适量' },
        { name: '鸡蛋', amount: '2个' },
        { name: '葱', amount: '适量' },
        { name: '小米椒', amount: '适量' },
        { name: '青菜', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '酱汁：1勺生抽、半勺蚝油、半勺老抽、2勺醋，少许糖(不喜酸少放醋)。',
        '锅里放油，煎俩蛋，捞出。',
        '煎蛋剩的油，放入葱姜末、小米椒炒香，先倒酱汁，再倒适量水(够煮面条就行)，放煎蛋，煮开。',
        '下入面条，盖盖焖煮5分钟左右(中间时不时搅拌)，面条煮熟，临出锅可加入青菜煮熟，关火！'
      ],
      likes: 0
    },
    {
      id: 'youpo-mian',
      name: '油泼面',
      category: '主食',
      subcategory: '面食',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '油泼面是一道经典的中式面食，以面条和油泼调料为主要原料，口感麻辣鲜香。',
      tags: ['主食', '面条', '油泼'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '刀削面', amount: '适量' },
        { name: '青菜', amount: '适量' },
        { name: '蒜', amount: '适量' },
        { name: '辣椒面', amount: '适量' },
        { name: '油', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '煮刀削面至熟透，快速过凉水捞出备用。',
        '用煮面条的水把青菜烫熟，捞出备用。',
        '面条上中间放上葱花、盐、蒜末、辣椒面，淋上热油。',
        '放入青菜，加入少许老抽、一勺醋，搅拌均匀开始嗦面！'
      ],
      likes: 0
    },
    // ========== 汤品类 ==========
    {
      id: 'xiangtian-nangua-zhou',
      name: '香甜南瓜粥',
      category: '主食',
      subcategory: '粥类',
      difficulty: '简单',
      time: '20分钟',
      chef: '妈妈',
      description: '香甜南瓜粥是一道营养美味的粥品，以南瓜和糯米粉为主要原料，口感顺滑，味道香甜。',
      tags: ['汤品', '粥', '南瓜', '香甜'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '南瓜', amount: '200g' },
        { name: '糯米粉', amount: '30g' },
        { name: '糖', amount: '适量' }
      ],
      steps: [
        '南瓜削皮，去籽，切小块。',
        '南瓜放入锅中煮熟，锅中压成泥。',
        '煮南瓜过程中一糯米粉放入碗中，加入适量水，搅成无颗粒粥状。',
        '锅转小火，一边搅拌，一边慢慢倒入糯米糊，不停搅拌（如果太浓稠，可以再加入适量水调整）（喜欢甜的小伙可以加入少许糖）。'
      ],
      likes: 0
    },
    {
      id: 'xiaren-haixian-zhou',
      name: '虾仁海鲜粥',
      category: '主食',
      subcategory: '粥类',
      difficulty: '中等',
      time: '30分钟',
      chef: '爸爸',
      description: '虾仁海鲜粥是一道营养美味的粥品，以大米、虾仁和各种蔬菜为主要原料，口感丰富，营养均衡。',
      tags: ['汤品', '粥', '海鲜', '虾仁'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '大虾', amount: '10只' },
        { name: '大米', amount: '适量' },
        { name: '香菇', amount: '适量' },
        { name: '青菜', amount: '适量' },
        { name: '玉米', amount: '适量' },
        { name: '胡萝卜', amount: '适量' },
        { name: '青豆', amount: '适量' }
      ],
      steps: [
        '大虾去皮留头，虾头与虾仁分开。',
        '将米、大米洗净。',
        '香菇切片，青菜切碎。',
        '锅中放入少许油，油热后倒入虾头、虾仁，炒出虾油。',
        '捞出虾仁，虾油中加入大米、香菇、青菜肝、玉米。',
        '加入调料、料酒、少许盐，搅拌均匀就可以出锅啦！'
      ],
      likes: 0
    },
    {
      id: 'pidan-shourou-zhou',
      name: '皮蛋瘦肉粥',
      category: '主食',
      subcategory: '粥类',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '皮蛋瘦肉粥是一道经典的中式粥品，以大米、皮蛋和瘦肉为主要原料，口感丰富，营养均衡。',
      tags: ['汤品', '粥', '皮蛋', '瘦肉'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '皮蛋', amount: '2个' },
        { name: '瘦肉', amount: '适量' },
        { name: '大米', amount: '适量' },
        { name: '小青菜', amount: '适量' },
        { name: '葱花', amount: '适量' },
        { name: '姜末', amount: '适量' },
        { name: '调料', amount: '适量' }
      ],
      steps: [
        '煮湖同时，食材切好：皮蛋、青菜切好，姜切成末或切丝，肉切成丝。',
        '腌制肉丝：肉丝、姜末中加入一勺生抽、一勺料酒、胡椒粉、少许盐，筷子搅拌或手抓均匀，腌制10-15分钟。',
        '煮湖大功告成：大米煮到开花后，放入切碎的皮蛋、腌制的肉丝煮5分钟(要肉丝煮散)，快出锅时，放入切碎的青菜，最后加入葱花，出锅！'
      ],
      likes: 0
    },
    {
      id: 'meiling-zhou',
      name: '美龄粥',
      category: '主食',
      subcategory: '粥类',
      difficulty: '中等',
      time: '40分钟',
      chef: '妈妈',
      description: '美龄粥是一道营养美味的粥品，以山药、豆浆粉、大米和糯米为主要原料，口感顺滑，营养丰富。',
      tags: ['汤品', '粥', '营养'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '山药', amount: '80g' },
        { name: '豆浆粉', amount: '30g' },
        { name: '大米', amount: '15g' },
        { name: '糯米', amount: '20g' },
        { name: '燕麦', amount: '20g' },
        { name: '红枣', amount: '6颗' }
      ],
      steps: [
        '准备食材，红枣去核切碎，大米、糯米洗净，山药削皮切块。',
        '材料放入锅里，加入适量清水，煮到大米开花粥浓稠。',
        '关火后用勺子将山药压成泥。',
        '出锅就是烟烟！'
      ],
      likes: 0
    },
    {
      id: 'niunai-yiner-tang',
      name: '牛奶银耳羹',
      category: '汤类',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '牛奶银耳羹是一道营养美味的甜品汤，以银耳、牛奶和红枣为主要原料，口感顺滑，营养丰富。',
      tags: ['汤品', '牛奶', '银耳', '甜品'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '银耳', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '银耳泡发，撕成小朵。',
        '锅中加入银耳、红枣和适量水，大火烧开后转小火煮20分钟。',
        '加入枸杞和冰糖，继续煮5分钟。',
        '加入牛奶，搅拌均匀即可。'
      ],
      likes: 0
    },
    // ========== 饮品类 ==========
    {
      id: 'huasheng-lao',
      name: '花生酪',
      category: '甜品',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '花生酪是一道营养美味的饮品，以花生、糯米和冰糖为主要原料，口感顺滑，味道香甜。',
      tags: ['饮品', '花生', '糯米', '甜汤'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '花生', amount: '100g' },
        { name: '糯米', amount: '50g' },
        { name: '清水', amount: '450ml' },
        { name: '冰糖', amount: '3块' }
      ],
      steps: [
        '花生去皮:倒入开水，浸泡5-10分钟，皮搓掉，捞出。',
        '花生、糯米、冰糖、水，倒入破壁机，选择豆浆模式。',
        '倒出后可撒上桂花或干玫瑰花瓣放置一会还有奶皮，娘娘！快用餐！'
      ],
      likes: 0
    },
    {
      id: 'huamei-boluo-bing',
      name: '话梅菠萝冰',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '话梅菠萝冰是一道清爽的夏日饮品，以菠萝、话梅和冰糖为主要原料，口感酸甜可口。',
      tags: ['饮品', '话梅', '菠萝', '冷饮'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '菠萝', amount: '1个' },
        { name: '话梅', amount: '适量' },
        { name: '冰糖', amount: '适量' },
        { name: '柠檬', amount: '1个' }
      ],
      steps: [
        '菠萝切块，柠檬切片。',
        '锅中加入菠萝、话梅、冰糖和适量水，煮开后放凉。',
        '加入柠檬片，放入冰箱冷藏。',
        '取出即可饮用。'
      ],
      likes: 0
    },
    {
      id: 'yuanyang-yogurt-coffee',
      name: '鸳鸯酸奶咖啡',
      category: '饮品',
      subcategory: '咖啡',
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
      subcategory: '奶茶',
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
      subcategory: '花果茶',
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
    },
    {
      id: 'sea-salt-ice-matcha',
      name: '海盐冰抹茶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '海盐冰抹茶是一款清爽的夏日饮品，以抹茶粉、炼乳、牛奶、淡奶油、盐和茉莉花茶为原料，口感丰富，既有抹茶的清香，又有海盐的咸鲜。',
      tags: ['饮品', '抹茶', '冷饮'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '抹茶粉', amount: '2勺' },
        { name: '炼乳', amount: '少许' },
        { name: '牛奶', amount: '100ml' },
        { name: '淡奶油', amount: '50ml' },
        { name: '盐', amount: '少许' },
        { name: '茉莉花茶', amount: '150ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '两勺抹茶粉，少许炼乳，50ml水，搅拌均匀。',
        '杯中倒入150ml茉莉花茶、100ml牛奶、50ml淡奶油、少许盐，倒入搅拌好的抹茶液，搅拌均匀。',
        '出品杯放入冰块，倒入牛奶抹茶液，完成！'
      ],
      likes: 10
    },
    {
      id: 'oreo-frappuccino',
      name: '奥利奥星冰乐',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '15分钟',
      chef: '爸爸',
      description: '奥利奥星冰乐是一款美味的冰沙饮品，以奥利奥、牛奶、淡奶油、炼乳为原料，口感丰富，既有奥利奥的酥脆，又有奶昔的顺滑。',
      tags: ['饮品', '奥利奥', '冰沙'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '奥利奥', amount: '5块' },
        { name: '牛奶', amount: '200ml' },
        { name: '淡奶油', amount: '少许' },
        { name: '炼乳', amount: '少许' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '两块奥利奥放入杯中压碎，倒入一点牛奶混合，做挂壁。',
        '3块奥利奥、200ml牛奶、少许淡奶油、炼乳，放入榨汁机，打成奶昔。',
        '挂壁杯中倒入打好的奶昔，喷上奶油顶，最后撒点奥利奥，完成！'
      ],
      likes: 15
    },
    {
      id: 'caramel-popcorn-latte',
      name: '焦糖爆米花拿铁',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '简单',
      time: '8分钟',
      chef: '爷爷',
      description: '焦糖爆米花拿铁是一款创意咖啡饮品，以咖啡粉、牛奶、炼乳、爆米花为原料，口感丰富，既有咖啡的香浓，又有爆米花的酥脆。',
      tags: ['饮品', '咖啡', '爆米花'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '咖啡粉', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '炼乳', amount: '适量' },
        { name: '爆米花', amount: '适量' }
      ],
      steps: [
        '咖啡粉，加30ml水，搅拌均匀。',
        '杯中倒入牛奶、炼乳、爆米花，最后淋上咖啡液，完成！'
      ],
      likes: 8
    },
    {
      id: 'coconut-matcha',
      name: '生椰抹茶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '生椰抹茶是一款清爽的饮品，以抹茶粉、牛奶、椰乳、冰块为原料，口感丰富，既有抹茶的清香，又有椰子的香甜。',
      tags: ['饮品', '抹茶', '椰子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '抹茶粉', amount: '1勺' },
        { name: '牛奶', amount: '适量' },
        { name: '椰乳', amount: '适量' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '一勺抹茶粉，加30ml水，搅拌均匀。',
        '杯中放入冰块，倒入椰乳、牛奶。',
        '最后倒入抹茶液，完成！'
      ],
      likes: 12
    },
    {
      id: 'black-powder-oreo',
      name: '黑粉奥利奥',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '10分钟',
      chef: '妈妈',
      description: '黑粉奥利奥是一款创意饮品，以奥利奥、牛奶、淡奶油、巧克力酱、草莓粉为原料，口感丰富，既有奥利奥的酥脆，又有草莓的香甜。',
      tags: ['饮品', '奥利奥', '草莓'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '牛奶', amount: '适量' },
        { name: '奥利奥', amount: '2块' },
        { name: '淡奶油', amount: '30ml' },
        { name: '冰块', amount: '适量' },
        { name: '巧克力酱', amount: '少许' },
        { name: '草莓粉', amount: '少许' }
      ],
      steps: [
        '两块奥利奥放入杯中压碎，少许巧克力酱挂壁。',
        '30ml淡奶油、少许草莓粉，打出奶盖。',
        '挂壁杯中放入冰块、倒入八分满的牛奶、奶盖，最后撒上奥利奥碎，完成！'
      ],
      likes: 18
    },
    {
      id: 'strawberry-milk-latte',
      name: '草莓牛乳拿铁',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '中等',
      time: '12分钟',
      chef: '爸爸',
      description: '草莓牛乳拿铁是一款美味的咖啡饮品，以草莓、牛奶、奶油、咖啡、草莓酱、淡奶油为原料，口感丰富，既有草莓的香甜，又有咖啡的香浓。',
      tags: ['饮品', '草莓', '咖啡'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '牛奶', amount: '200ml' },
        { name: '奶油', amount: '适量' },
        { name: '咖啡', amount: '适量' },
        { name: '草莓酱', amount: '15g' },
        { name: '淡奶油', amount: '30ml' }
      ],
      steps: [
        '出品杯中放入草莓，压碎。',
        '200ml牛奶、30ml淡奶油、15g草莓酱，搅拌均匀。',
        '草莓牛乳倒入出品杯，继续倒入咖啡液。',
        '最后喷射奶油做个雪顶，撒点草莓粉，完成！'
      ],
      likes: 20
    },
    {
      id: 'oreo-sea-salt-latte',
      name: '奥利奥海盐奶盖咖啡',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '中等',
      time: '15分钟',
      chef: '爷爷',
      description: '奥利奥海盐奶盖咖啡是一款创意咖啡饮品，以奥利奥、牛奶、咖啡、淡奶油、糖、盐为原料，口感丰富，既有奥利奥的酥脆，又有海盐的咸鲜。',
      tags: ['饮品', '奥利奥', '咖啡'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '牛奶', amount: '适量' },
        { name: '奥利奥', amount: '2块' },
        { name: '咖啡', amount: '适量' },
        { name: '淡奶油', amount: '50ml' },
        { name: '糖', amount: '少许' },
        { name: '盐', amount: '少许' }
      ],
      steps: [
        '两块奥利奥放入杯中压碎，倒入一点牛奶混合，做挂壁。',
        '50ml淡奶油、少许盐、糖，打发至变硬（不流动即可）。',
        '挂壁杯中倒入牛奶、冲好的咖啡，最后放上奶盖，撒点奥利奥，完成！'
      ],
      likes: 16
    },
    {
      id: 'chocolate-black-tea',
      name: '巧克力红茶冰奶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '巧克力红茶冰奶是一款清爽的饮品，以可可粉、巧克力酱、红茶、牛奶、炼乳、冰块为原料，口感丰富，既有巧克力的香浓，又有红茶的清香。',
      tags: ['饮品', '巧克力', '红茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '可可粉', amount: '2勺' },
        { name: '巧克力酱', amount: '1圈' },
        { name: '红茶', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '炼乳', amount: '1圈' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '红茶用热水泡好，只留红茶汤。',
        '2勺可可粉，1圈巧克力酱，1圈炼乳，倒入300ml红茶汤，搅拌均匀。',
        '杯中加入6分满冰块，倒入搅拌好的巧克力液，加满牛奶，开喝！'
      ],
      likes: 14
    },
    {
      id: 'osmanthus-latte',
      name: '桂花拿铁',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '简单',
      time: '8分钟',
      chef: '爷爷',
      description: '桂花拿铁是一款清香的咖啡饮品，以桂花酱、牛奶、浓缩咖啡液为原料，口感丰富，既有桂花的清香，又有咖啡的香浓。',
      tags: ['饮品', '桂花', '咖啡'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '桂花酱', amount: '1勺' },
        { name: '牛奶', amount: '适量' },
        { name: '浓缩咖啡液', amount: '适量' }
      ],
      steps: [
        '取1勺桂花酱，用勺子涂到杯壁，做挂壁效果。',
        '取适量牛奶，加热，后打出奶泡，倒入杯中。',
        '取咖啡液，倒入杯中，制作完成。顶部还可以撒一些干桂花。'
      ],
      likes: 17
    },
    {
      id: 'red-bean-matcha-latte',
      name: '红豆抹茶拿铁',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '红豆抹茶拿铁是一款美味的饮品，以抹茶粉、牛奶、炼乳、冰块、红豆为原料，口感丰富，既有抹茶的清香，又有红豆的香甜。',
      tags: ['饮品', '抹茶', '红豆'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '抹茶粉', amount: '2勺(约5g)' },
        { name: '牛奶', amount: '适量' },
        { name: '炼乳', amount: '少许' },
        { name: '冰块', amount: '适量' },
        { name: '红豆', amount: '适量' }
      ],
      steps: [
        '两勺(约5g)抹茶粉，加入30ml热水(可多可少)，搅拌均匀。',
        '杯底放入煮熟的红豆，加入少许炼乳，搅拌压碎，放入冰块。',
        '最后倒入牛奶、抹茶液，完成！'
      ],
      likes: 19
    },
    {
      id: 'marshmallow-hot-cocoa',
      name: '棉花糖热可可',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '8分钟',
      chef: '爸爸',
      description: '棉花糖热可可是一款温暖的热饮，以可可粉、巧克力酱、牛奶、棉花糖为原料，口感丰富，既有巧克力的香浓，又有棉花糖的甜蜜。',
      tags: ['饮品', '巧克力', '热饮'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '可可粉', amount: '2勺' },
        { name: '巧克力酱', amount: '3-4圈' },
        { name: '牛奶', amount: '适量' },
        { name: '棉花糖', amount: '适量' }
      ],
      steps: [
        '杯壁挤一圈巧克力酱，挂个壁。',
        '2勺可可粉，3-4圈巧克力酱，倒入少许热牛奶，搅拌均匀。',
        '挂壁杯中加入可可奶、9分满热牛奶，摆上棉花糖，撒点可可粉、淋点巧克力酱，完成！'
      ],
      likes: 16
    },
    {
      id: '400-times-coffee',
      name: '400次咖啡',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '中等',
      time: '15分钟',
      chef: '爷爷',
      description: '400次咖啡是一款创意咖啡饮品，以咖啡粉、糖、水、牛奶、厚椰乳、冰块为原料，口感丰富，既有咖啡的香浓，又有椰乳的香甜。',
      tags: ['饮品', '咖啡', '创意'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '咖啡', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '糖', amount: '适量' },
        { name: '厚椰乳', amount: '适量' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '咖啡粉：糖：水=1:1:1，混合打发到不流动。',
        '杯中放入冰块，倒入牛奶、厚椰乳。',
        '最后倒入打发的咖啡到杯子中，完成！'
      ],
      likes: 22
    },
    {
      id: 'strawberry-pudding-sago',
      name: '草莓奶冻西米露',
      category: '甜品',
      difficulty: '中等',
      time: '2小时',
      chef: '妈妈',
      description: '草莓奶冻西米露是一款美味的甜品饮品，以草莓、白凉粉、西米、牛奶、糖、淡奶油为原料，口感丰富，既有草莓的香甜，又有奶冻的顺滑。',
      tags: ['饮品', '草莓', '甜品'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '白凉粉', amount: '30g' },
        { name: '西米', amount: '适量' },
        { name: '牛奶', amount: '200ml' },
        { name: '糖', amount: '10g' },
        { name: '淡奶油', amount: '50ml' }
      ],
      steps: [
        '水开放西米，搅拌煮到剩小白芯关火，盖盖焖15分钟，过凉水。',
        '200ml牛奶、50ml淡奶油、30g白凉粉、10g糖，搅拌均匀，开小火，煮开，关火后倒入模具冷却2小时，切块备用。',
        '碗中放入切碎的草莓、西米、奶冻，倒入牛奶，完成！'
      ],
      likes: 25
    },
    {
      id: 'banana-apple-smoothie',
      name: '香蕉苹果奶昔',
      category: '甜品',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '香蕉苹果奶昔是一款健康的饮品，以苹果、香蕉、牛奶为原料，口感丰富，既有苹果的清爽，又有香蕉的香甜。',
      tags: ['饮品', '水果', '奶昔'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '苹果', amount: '1个' },
        { name: '香蕉', amount: '1根' },
        { name: '牛奶', amount: '300ml' }
      ],
      steps: [
        '1个苹果、1根香蕉，切块。',
        '苹果香蕉放入榨汁机或破壁机（果汁/奶昔），倒入300ml牛奶，突突突。'
      ],
      likes: 18
    },
    {
      id: 'jasmine-milk-green',
      name: '茉莉奶绿',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '3分钟',
      chef: '爸爸',
      description: '茉莉奶绿是一款清爽的饮品，以旺仔牛奶、茉莉清茶、冰块为原料，口感丰富，既有牛奶的香甜，又有茉莉的清香。',
      tags: ['饮品', '茉莉', '奶茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '旺仔牛奶', amount: '100ml' },
        { name: '茉莉清茶', amount: '300ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '杯中加入6分满冰块。',
        '倒入旺仔牛奶100ml，茉莉清茶300ml（比例1:3），搅拌均匀，喝起来！'
      ],
      likes: 16
    },
    {
      id: 'strawberry-chocolate-milk',
      name: '草莓巧克力牛奶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '8分钟',
      chef: '妈妈',
      description: '草莓巧克力牛奶是一款美味的饮品，以纯牛奶、草莓巧克力、草莓酱、淡奶油为原料，口感丰富，既有巧克力的香浓，又有草莓的香甜。',
      tags: ['饮品', '草莓', '巧克力'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '纯牛奶', amount: '适量' },
        { name: '草莓巧克力', amount: '3块' },
        { name: '草莓酱', amount: '1勺' },
        { name: '淡奶油', amount: '30ml' }
      ],
      steps: [
        '三块草莓巧克力，隔热水融化，制作挂壁效果。',
        '30ml淡奶油，1勺草莓酱，打出奶盖。',
        '牛奶加热，倒入挂壁杯中，再倒入奶盖，完成！'
      ],
      likes: 20
    },
    {
      id: 'strawberry-milk-cream',
      name: '雪顶草莓牛乳',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '爸爸',
      description: '雪顶草莓牛乳是一款美味的饮品，以草莓、草莓果酱、冻干草莓、纯牛奶、奶油为原料，口感丰富，既有草莓的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '草莓', '奶油'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '草莓果酱', amount: '适量' },
        { name: '冻干草莓', amount: '适量' },
        { name: '纯牛奶', amount: '适量' },
        { name: '奶油', amount: '适量' }
      ],
      steps: [
        '草莓压碎，然后加入草莓果酱。',
        '将草莓涂到杯壁，倒入牛奶。',
        '挤上奶油做雪顶，最后撒上冻干草莓碎。'
      ],
      likes: 22
    },
    {
      id: 'taro-bean-milk-cup',
      name: '芋泥豆乳杯',
      category: '甜品',
      difficulty: '中等',
      time: '1小时',
      chef: '爷爷',
      description: '芋泥豆乳杯是一款美味的甜品饮品，以芋头、紫薯、香蕉、酸奶、豆浆粉、蓝莓、牛奶为原料，口感丰富，既有芋泥的绵密，又有豆乳的香甜。',
      tags: ['饮品', '芋泥', '甜品'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芋头', amount: '适量' },
        { name: '紫薯', amount: '适量' },
        { name: '香蕉', amount: '1根' },
        { name: '酸奶', amount: '适量' },
        { name: '豆浆粉', amount: '适量' },
        { name: '蓝莓', amount: '适量' },
        { name: '牛奶', amount: '适量' }
      ],
      steps: [
        '芋头、紫薯上锅蒸熟，出锅后搅拌均匀，再加适量牛奶拌成泥。',
        '制作豆乳：豆浆粉+酸奶搅拌均匀。',
        '杯中依次铺入芋泥、豆乳、香蕉片，每层不要太厚，可以多铺几层。',
        '最后顶顶撒上豆浆粉，加几颗蓝莓点缀，放入冰箱冷藏一晚，第二天开吃！'
      ],
      likes: 24
    },
    {
      id: 'red-bean-milk',
      name: '红豆沙牛乳',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '红豆沙牛乳是一款营养的饮品，以红豆、红枣、大米、牛奶为原料，口感丰富，既有红豆的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '红豆', '营养'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红豆', amount: '40g' },
        { name: '红枣', amount: '8颗' },
        { name: '大米', amount: '30g' },
        { name: '牛奶', amount: '300ml' }
      ],
      steps: [
        '红豆、大米，洗干净；红枣切块去核。',
        '放入破壁机：(1)放入红豆、大米、红枣；(2)加入300ml清水；(3)开启豆浆/米糊模式；(4)打好后，倒入牛奶。'
      ],
      likes: 19
    },
    {
      id: 'honey-ice-milk',
      name: '蜂蜜冰奶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '爸爸',
      description: '蜂蜜冰奶是一款清爽的饮品，以奶粉、纯牛奶、蜂蜜、淡奶油、冰块为原料，口感丰富，既有蜂蜜的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '蜂蜜', '冷饮'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '奶粉', amount: '3勺' },
        { name: '纯牛奶', amount: '250ml' },
        { name: '蜂蜜', amount: '2勺' },
        { name: '淡奶油', amount: '20ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '加入3勺奶粉。',
        '加入少许热水（水量为能够融化的量即可）。',
        '搅拌均匀。',
        '依次加入：250ml牛奶、7分满的冰块、2勺蜂蜜、20ml淡奶油。',
        '搅拌均匀，开喝！'
      ],
      likes: 17
    },
    {
      id: 'taro-milk-green',
      name: '芋泥奶绿',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '20分钟',
      chef: '爷爷',
      description: '芋泥奶绿是一款美味的饮品，以芋头、紫薯、牛奶、白砂糖、茉莉绿茶、糖浆、奶油为原料，口感丰富，既有芋泥的绵密，又有绿茶的清香。',
      tags: ['饮品', '芋泥', '绿茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芋头', amount: '适量' },
        { name: '紫薯', amount: '适量' },
        { name: '牛奶', amount: '100ml' },
        { name: '白砂糖', amount: '少许' },
        { name: '茉莉绿茶', amount: '150ml' },
        { name: '糖浆', amount: '10ml' },
        { name: '奶油', amount: '20ml' }
      ],
      steps: [
        '芋头紫薯蒸熟，放少许白砂糖、牛奶，料理机打成泥，杯中挂壁。',
        '茉莉绿茶泡好，只用茶汤。',
        '150ml茉莉绿茶汤、100ml牛奶、20ml奶油、10ml糖浆，搅拌均匀，倒入芋泥杯中。'
      ],
      likes: 21
    },
    {
      id: 'antioxidant-smoothie',
      name: '抗氧化奶昔',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '抗氧化奶昔是一款健康的饮品，以草莓、树莓、蓝莓、牛奶为原料，口感丰富，既有水果的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '水果', '健康'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '树莓', amount: '适量' },
        { name: '蓝莓', amount: '适量' },
        { name: '牛奶', amount: '适量' }
      ],
      steps: [
        '草莓、树莓、蓝莓、牛奶，一起倒入榨汁机30秒左右，或破壁机选择果汁模式。',
        '搞定！又是一款一步就搞定的好喝奶昔！想要饱腹感可以加入麦片，不加也好喝～'
      ],
      likes: 23
    },
    {
      id: 'red-bean-taro-milk',
      name: '红豆芋泥牛乳',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '30分钟',
      chef: '爷爷',
      description: '红豆芋泥牛乳是一款美味的饮品，以芋头、紫薯、红豆、冰糖、炼乳、黄油、牛奶、清水为原料，口感丰富，既有红豆的香甜，又有芋泥的绵密。',
      tags: ['饮品', '红豆', '芋泥'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芋头', amount: '150g' },
        { name: '紫薯', amount: '20g' },
        { name: '红豆', amount: '30g' },
        { name: '冰糖', amount: '少许' },
        { name: '炼乳', amount: '适量' },
        { name: '黄油', amount: '适量' },
        { name: '牛奶', amount: '200ml' },
        { name: '清水', amount: '400ml' }
      ],
      steps: [
        '制作芋泥：芋头50g、紫薯20g去皮切块，蒸熟，加入少量糖、炼乳、黄油，打成泥，涂抹到杯子挂壁。',
        '制作牛乳：芋头100g去皮切块，红豆30g，清水400ml，喜甜放少量冰糖，放入豆浆模式，开打，结束后倒入200ml牛奶，搅拌均匀。',
        '牛乳倒入铺满芋泥的杯子中，开喝！'
      ],
      likes: 24
    },
    {
      id: 'oreo-milk-cover',
      name: '奥利奥奶盖',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '奥利奥奶盖是一款美味的饮品，以牛奶、奥利奥、淡奶油、冰块为原料，口感丰富，既有奥利奥的酥脆，又有奶盖的顺滑。',
      tags: ['饮品', '奥利奥', '奶盖'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '牛奶', amount: '适量' },
        { name: '奥利奥', amount: '2块' },
        { name: '淡奶油', amount: '30ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '两块奥利奥放入杯中压碎，倒入一点牛奶混合，做挂壁。',
        '30ml淡奶油、少许奥利奥碎，打出奶盖。',
        '挂壁杯中放入冰块、倒入八分满的牛奶、奶盖，最后撒上奥利奥碎，完成！'
      ],
      likes: 20
    },
    {
      id: 'coconut-cocoa',
      name: '生椰可可',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '爸爸',
      description: '生椰可可是一款美味的饮品，以可可粉、巧克力酱、厚椰乳、喷射奶油、冰块为原料，口感丰富，既有可可的香浓，又有椰子的香甜。',
      tags: ['饮品', '可可', '椰子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '可可粉', amount: '2勺' },
        { name: '巧克力酱', amount: '3-4圈' },
        { name: '厚椰乳', amount: '适量' },
        { name: '喷射奶油', amount: '适量' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '2勺可可粉，三四圈巧克力酱，加入少许热水，搅拌均匀。',
        '杯壁巧克力挂壁，放入7分满冰块、8分满椰乳，搅拌好的巧克力液。',
        '最后喷上奶油，撒上可可粉、或淋点巧克力酱，搞定！'
      ],
      likes: 18
    },
    {
      id: 'frappuccino',
      name: '星冰乐',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '15分钟',
      chef: '爷爷',
      description: '星冰乐是一款美味的冰沙饮品，以牛奶、小饼干、冰块、奶油、炼乳、喷射奶油为原料，口感丰富，既有饼干的酥脆，又有冰沙的清凉。',
      tags: ['饮品', '冰沙', '饼干'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '牛奶', amount: '适量' },
        { name: '小饼干', amount: '2块' },
        { name: '冰块', amount: '适量' },
        { name: '奶油', amount: '少许' },
        { name: '炼乳', amount: '少许' },
        { name: '喷射奶油', amount: '适量' }
      ],
      steps: [
        '两块小饼干放入杯中，压碎（想做挂壁可加一点牛奶搅成泥）。',
        '冰块、小饼干、牛奶、少许奶油、炼乳，放入榨汁机，打成冰沙。',
        '挂壁杯中倒入打好的冰沙，喷上奶油顶，最后撒点饼干碎，搞定！'
      ],
      likes: 22
    },
    {
      id: 'cocoa-oat-milk',
      name: '可可燕麦奶',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '可可燕麦奶是一款健康的饮品，以可可粉、香蕉、即食燕麦、牛奶、水为原料，口感丰富，既有可可的香浓，又有燕麦的营养。',
      tags: ['饮品', '可可', '燕麦'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '可可粉', amount: '1勺' },
        { name: '香蕉', amount: '1根' },
        { name: '即食燕麦', amount: '30g' },
        { name: '牛奶', amount: '300ml' },
        { name: '水', amount: '100ml' }
      ],
      steps: [
        '一勺可可粉、一根香蕉、30g即食燕麦、300ml牛奶、100ml水，放入榨汁机、或破壁机内。',
        '打开开关（破壁机可选迷糊模式），开榨！突突突突突…'
      ],
      likes: 19
    },
    {
      id: 'matcha-oat-latte',
      name: '抹茶燕麦拿铁',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '8分钟',
      chef: '爸爸',
      description: '抹茶燕麦拿铁是一款美味的饮品，以抹茶粉、咖啡液、燕麦奶、冰块为原料，口感丰富，既有抹茶的清香，又有燕麦的营养。',
      tags: ['饮品', '抹茶', '燕麦'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '抹茶粉', amount: '2勺(约5g)' },
        { name: '咖啡液', amount: '适量' },
        { name: '燕麦奶', amount: '适量' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '两勺(约5g)抹茶粉，加入30ml热水(可多可少)，搅拌均匀。',
        '杯中倒入咖啡液，加入冰块，倒入燕麦奶。',
        '最后倒入抹茶液，撒点抹茶粉，搞定！'
      ],
      likes: 21
    },
    {
      id: 'black-tea-yuan-yang-latte',
      name: '红茶鸳鸯拿铁',
      category: '饮品',
      subcategory: '咖啡',
      difficulty: '简单',
      time: '10分钟',
      chef: '爷爷',
      description: '红茶鸳鸯拿铁是一款经典的港式饮品，以牛奶、咖啡、红茶、糖浆、冰块为原料，口感丰富，既有红茶的清香，又有咖啡的香浓。',
      tags: ['饮品', '红茶', '咖啡'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '牛奶', amount: '适量' },
        { name: '咖啡', amount: '适量' },
        { name: '红茶', amount: '适量' },
        { name: '糖浆', amount: '10ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '水烧开，倒入红茶中，泡三分钟。',
        '咖啡粉加200ml水，搅拌均匀。',
        '杯子加入6分满冰块、10ml糖浆，倒入牛奶、红茶，搅拌均匀，最后倒入咖啡液，完成！'
      ],
      likes: 19
    },
    {
      id: 'plum-peel-drink',
      name: '乌梅陈皮饮',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '乌梅陈皮饮是一款养生的饮品，以乌梅条、玫瑰、桑葚、陈皮、山楂干为原料，口感丰富，既有乌梅的酸甜，又有陈皮的清香。',
      tags: ['饮品', '养生', '酸甜'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '乌梅条', amount: '5个' },
        { name: '玫瑰', amount: '10朵' },
        { name: '桑葚', amount: '15个' },
        { name: '陈皮', amount: '3g' },
        { name: '山楂干', amount: '8片' }
      ],
      steps: [
        '食材：乌梅条5个、玫瑰10朵、桑葚15个、陈皮3g、山楂干8片。',
        '食材放入养生壶，加水，选择花茶模式，咕嘟咕嘟煮开。'
      ],
      likes: 17
    },
    {
      id: 'fresh-orange-jasmine-tea',
      name: '鲜橙茉莉花茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '鲜橙茉莉花茶是一款清爽的饮品，以橙子、茉莉花茶、小金桔、柠檬、冰糖为原料，口感丰富，既有橙子的香甜，又有茉莉花的清香。',
      tags: ['饮品', '橙子', '茉莉花茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '橙子', amount: '7个' },
        { name: '茉莉花茶', amount: '适量' },
        { name: '小金桔', amount: '6个' },
        { name: '柠檬', amount: '1个' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '水果用盐搓洗干净、去籽，橙子、柠檬各1个切片、6个金桔切两半。',
        '绿茶、冰糖一起，泡好晾凉。',
        '7个橙子榨汁，过滤，橙汁加绿茶汤搅匀，加入切好的水果，冷藏。',
        '喝时还可加袋益生菌，增强调理！'
      ],
      likes: 20
    },
    {
      id: 'orange-ice-tea',
      name: '橘子冰茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '橘子冰茶是一款清爽的饮品，以橘子、冰块、茉莉花茶、蜂蜜为原料，口感丰富，既有橘子的香甜，又有茉莉花的清香。',
      tags: ['饮品', '橘子', '冰茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '橘子', amount: '1个' },
        { name: '冰块', amount: '适量' },
        { name: '茉莉花茶', amount: '适量' },
        { name: '蜂蜜', amount: '少许' }
      ],
      steps: [
        '橘子剥皮，放入杯中，捣烂压碎。',
        '放入6分冰块，倒入茉莉花茶，少许蜂蜜。',
        '摇晃均匀，开喝！'
      ],
      likes: 18
    },
    {
      id: 'grape-lemon-tea',
      name: '青提柠檬茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '爸爸',
      description: '青提柠檬茶是一款清爽的饮品，以青提、茉莉花茶、柠檬、冰块为原料，口感丰富，既有青提的香甜，又有柠檬的清新。',
      tags: ['饮品', '青提', '柠檬'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '青提', amount: '五六颗' },
        { name: '茉莉花茶', amount: '适量' },
        { name: '柠檬', amount: '两三片' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '青提、柠檬：洗净、去籽（柠檬用盐搓洗干净，切片）。',
        '杯中放入五六颗青提、两三片柠檬、2块冰块，捣烂压碎。',
        '加入冰块至6分满，倒入茉莉清茶或茉莉花茶，搅拌或摇晃均匀，喝！'
      ],
      likes: 22
    },
    {
      id: 'plum-lemon-tea',
      name: '话梅柠檬茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '话梅柠檬茶是一款清爽的饮品，以咸话梅、小青柠、柠檬、茉莉花茶、糖浆、冰块为原料，口感丰富，既有话梅的咸香，又有柠檬的清新。',
      tags: ['饮品', '话梅', '柠檬'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '咸话梅', amount: '适量' },
        { name: '小青柠', amount: '适量' },
        { name: '柠檬', amount: '适量' },
        { name: '茉莉花茶', amount: '适量' },
        { name: '糖浆', amount: '20ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '茉莉花茶泡好，晾凉；咸话梅倒入少量开水泡15分钟左右。',
        '柠檬、青柠用盐搓洗干净、去籽，柠檬切片，青柠切两半。',
        '杯中放入柠檬片、小青柠、少许冰，捶打出汁，放入话梅。',
        '加冰块、20ml糖浆，倒入茉莉花茶，搅拌或摇晃均匀，喝！'
      ],
      likes: 19
    },
    {
      id: 'passion-fruit-lemon-drink',
      name: '百香果柠檬饮',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '10分钟',
      chef: '爸爸',
      description: '百香果柠檬饮是一款清爽的饮品，以百香果、柠檬、小金桔、黄冰糖、冰块、蜂蜜为原料，口感丰富，既有百香果的香甜，又有柠檬的清新。',
      tags: ['饮品', '百香果', '柠檬'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '百香果', amount: '适量' },
        { name: '柠檬', amount: '适量' },
        { name: '小金桔', amount: '适量' },
        { name: '黄冰糖', amount: '适量' },
        { name: '冰块', amount: '适量' },
        { name: '蜂蜜', amount: '适量' }
      ],
      steps: [
        '柠檬、小金桔，用盐搓洗干净去籽，柠檬切片，小金桔切两半。',
        '养生壶中放入适量水、冰糖，煮开煮融化，放凉。',
        '加入柠檬片、小金桔、百香果果肉、蜂蜜、冰块，倒入适量水，搅拌均匀，喝！'
      ],
      likes: 20
    },
    {
      id: 'strawberry-hot-black-tea',
      name: '草莓热红茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '草莓热红茶是一款温暖的热饮，以草莓、冰糖、红茶为原料，口感丰富，既有草莓的香甜，又有红茶的清香。',
      tags: ['饮品', '草莓', '红茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '冰糖', amount: '适量' },
        { name: '红茶', amount: '适量' }
      ],
      steps: [
        '草莓洗净、切去屁股、切两半。',
        '草莓、冰糖，放入养生壶，红茶放入茶漏，倒入适量水。',
        '可选果茶模式，煮开。'
      ],
      likes: 18
    },
    {
      id: 'celery-cucumber-apple-juice',
      name: '芹菜黄瓜苹果汁',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '芹菜黄瓜苹果汁是一款健康的饮品，以芹菜、黄瓜、苹果、水为原料，口感清爽，有助于刮油解腻，改善便秘。',
      tags: ['饮品', '健康', '蔬菜'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芹菜', amount: '3根' },
        { name: '黄瓜', amount: '半根' },
        { name: '苹果', amount: '半个' },
        { name: '水', amount: '适量' }
      ],
      steps: [
        '芹菜去叶，食材洗净，全部切块/切段。',
        '食材放入榨汁机，倒入适量水（没过食材），开榨，突突突。'
      ],
      likes: 16
    },
    {
      id: 'mango-pomelo-sago',
      name: '杨枝甘露',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '中等',
      time: '20分钟',
      chef: '爸爸',
      description: '杨枝甘露是一款经典的港式甜品饮品，以芒果、西柚、西米、厚椰乳为原料，口感丰富，既有芒果的香甜，又有西柚的清新。',
      tags: ['饮品', '芒果', '甜品'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芒果', amount: '适量' },
        { name: '西柚', amount: '适量' },
        { name: '西米', amount: '适量' },
        { name: '厚椰乳', amount: '适量' }
      ],
      steps: [
        '水开放西米，搅拌煮到剩小白芯关火，盖盖焖15分钟，过凉水。',
        '榨汁机放入芒果肉、椰乳，打成奶昔。',
        '杯中放入芒果肉、西柚肉、西米，倒入椰乳，再倒入芒果奶昔，搞定！'
      ],
      likes: 23
    },
    {
      id: 'pomegranate-black-tea',
      name: '石榴红茶',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '石榴红茶是一款温暖的热饮，以石榴、冰糖、红茶为原料，口感丰富，既有石榴的香甜，又有红茶的清香。',
      tags: ['饮品', '石榴', '红茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '石榴', amount: '适量' },
        { name: '冰糖', amount: '适量' },
        { name: '红茶', amount: '适量' }
      ],
      steps: [
        '剥石榴：外皮、隔膜全部去掉。',
        '养生壶中放入石榴、冰糖，茶漏中放入适量红茶，加水。',
        '煮开，可以选择比如“果茶”模式，煮开后，开喝！'
      ],
      likes: 19
    },
    {
      id: 'blueberry-mulberry-wolfberry',
      name: '蓝莓桑葚黑枸杞',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '蓝莓桑葚黑枸杞是一款健康的饮品，以蓝莓、桑葚、黑枸杞、水为原料，口感丰富，既有蓝莓的香甜，又有桑葚的酸甜。',
      tags: ['饮品', '健康', '水果'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '蓝莓', amount: '80g' },
        { name: '桑葚', amount: '80g' },
        { name: '黑枸杞', amount: '15g' },
        { name: '水', amount: '500ml' }
      ],
      steps: [
        '蓝莓80g、桑葚80g、黑枸杞15g，水500ml，放入破壁机或榨汁机。',
        '破壁机选择果汁模式，开榨，嗡嗡嗡嗡嗡嗡。'
      ],
      likes: 21
    },
    {
      id: 'three-black-drink',
      name: '脱发喝三黑',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '简单',
      time: '20分钟',
      chef: '爸爸',
      description: '脱发喝三黑是一款健康的饮品，以黑米、黑豆、黑芝麻、核桃、牛奶、水为原料，口感丰富，有助于头发健康。',
      tags: ['饮品', '健康', '养生'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '黑米', amount: '30g' },
        { name: '黑豆', amount: '20g' },
        { name: '黑芝麻', amount: '5g' },
        { name: '核桃', amount: '3个' },
        { name: '牛奶', amount: '200ml' },
        { name: '水', amount: '500ml' }
      ],
      steps: [
        '【豆浆机、破壁机】食材洗净后，加水500-600ml，全部放入破壁机，破壁机选择豆浆模式或米糊模式。',
        '【电饭煲、电暖炉】食材洗净后，加适量水，选择煮粥模式，或直接煮至浓稠。',
        '出锅后加入牛奶！如果想要甜一点，可以加入几颗红枣。'
      ],
      likes: 22
    },
    {
      id: 'kumquat-pear-soup',
      name: '金桔雪梨汤',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '金桔雪梨汤是一款养生的饮品，以雪梨、金桔、红枣、枸杞、冰糖为原料，口感丰富，既有雪梨的清甜，又有金桔的清香。',
      tags: ['饮品', '养生', '止咳'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '雪梨', amount: '1个' },
        { name: '金桔', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '雪梨、梨切块，金桔，用盐洗净，梨去芯切块，红枣去核切块。',
        '雪梨、金桔、红枣、枸杞、冰糖，一起放入养生壶，加入适量水，炖煮20-30分钟。'
      ],
      likes: 18
    },
    {
      id: 'red-date-white fungus-soup',
      name: '红枣银耳羹',
      category: '汤类',
      difficulty: '中等',
      time: '1.5小时',
      chef: '爷爷',
      description: '红枣银耳羹是一款养生的甜品饮品，以银耳、红枣、枸杞、莲子、百合为原料，口感丰富，既有银耳的滑嫩，又有红枣的香甜。',
      tags: ['饮品', '养生', '甜品'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '银耳', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '莲子', amount: '适量' },
        { name: '百合', amount: '适量' }
      ],
      steps: [
        '食材洗净，银耳泡发洗净撕碎，红枣去核。',
        '银耳、莲子、百合，加水，煮开，煮至浓稠出胶（我煮了约1个半小时）。',
        '加入红枣、枸杞，再焖20分钟，完成！'
      ],
      likes: 20
    },
    {
      id: 'corn-juice',
      name: '奶香玉米汁',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '15分钟',
      chef: '妈妈',
      description: '奶香玉米汁是一款香甜的饮品，以玉米、大米、小米、冰糖、牛奶、水为原料，口感丰富，既有玉米的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '玉米', '奶香'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '玉米', amount: '1根' },
        { name: '大米', amount: '20g' },
        { name: '小米', amount: '15g' },
        { name: '冰糖', amount: '适量' },
        { name: '牛奶', amount: '200ml' },
        { name: '水', amount: '800ml' }
      ],
      steps: [
        '玉米剥粒，食材洗净。',
        '玉米粒、大米、小米、糖，倒入破壁机或豆浆机，加入800ml水，突突突开榨。',
        '结束后加入牛奶，搅拌搅拌开喝！'
      ],
      likes: 21
    },
    {
      id: 'christmas-hot-wine',
      name: '圣诞热红酒',
      category: '饮品',
      subcategory: '花果茶',
      difficulty: '中等',
      time: '30分钟',
      chef: '爸爸',
      description: '圣诞热红酒是一款温暖的热饮，以橙子、白砂糖、八角、苹果、丁香、话梅、桂皮、红酒为原料，口感丰富，既有红酒的香醇，又有水果的香甜。',
      tags: ['饮品', '红酒', '圣诞'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '橙子', amount: '2个' },
        { name: '白砂糖', amount: '60g' },
        { name: '八角', amount: '1个' },
        { name: '苹果', amount: '1个' },
        { name: '丁香', amount: '10个' },
        { name: '话梅', amount: '4个' },
        { name: '桂皮', amount: '1个' },
        { name: '红酒', amount: '750ml' }
      ],
      steps: [
        '两个橙子用盐搓洗干净，刮刀刮下一些橙皮备用（只需要黄色皮不要白色），之后剥去外皮，留果肉。',
        '锅内放入一个橙子肉、橙子皮屑、4个话梅、60g白砂糖、1个八角、10粒丁香、1个苹果、一根桂皮、一瓶红酒750ml。',
        '开火煮到冒冒，快开时（不要开），转小火，缓慢煮20-30分钟（一直不煮开），到点关火，搞定！'
      ],
      likes: 23
    },
    {
      id: 'guava-coconut',
      name: '芭乐椰椰',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '芭乐椰椰是一款清爽的饮品，以芭乐、绿茶、椰奶为原料，口感丰富，既有芭乐的香甜，又有椰子的清香。',
      tags: ['饮品', '芭乐', '椰子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芭乐', amount: '1个' },
        { name: '绿茶', amount: '适量' },
        { name: '椰奶', amount: '适量' }
      ],
      steps: [
        '芭乐洗净，去皮，切块。',
        '放入榨汁机，倒入100ml左右的绿茶汤，打成泥。',
        '再倒入椰奶（椰乳或椰汁+牛奶都可以），搅拌均匀。完成！'
      ],
      likes: 19
    },
    {
      id: 'watermelon-coconut',
      name: '西瓜椰椰',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '爸爸',
      description: '西瓜椰椰是一款清爽的饮品，以西瓜、黑波波、冰块、厚椰乳为原料，口感丰富，既有西瓜的香甜，又有椰子的清香。',
      tags: ['饮品', '西瓜', '椰子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '西瓜', amount: '适量' },
        { name: '黑波波', amount: '适量' },
        { name: '冰块', amount: '适量' },
        { name: '厚椰乳', amount: '200ml' }
      ],
      steps: [
        '杯子1中放入少许西瓜，压碎，倒入200ml椰乳，摇晃均匀。',
        '杯子2中放入西瓜，压碎，放入冰块、黑波波。',
        '倒入杯子1中西瓜椰乳，搅拌搅拌，开喝！'
      ],
      likes: 20
    },
    {
      id: 'grape-yakult',
      name: '青提养乐多',
      category: '饮品',
      subcategory: '奶茶',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '青提养乐多是一款清爽的饮品，以青提、养乐多、葡萄桃桃、冰块为原料，口感丰富，既有青提的香甜，又有养乐多的酸甜。',
      tags: ['饮品', '青提', '养乐多'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '青提', amount: '适量' },
        { name: '养乐多', amount: '适量' },
        { name: '葡萄桃桃', amount: '适量' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '青提剥皮，放入杯底，冰糖压碎。',
        '加入冰块，约六七分满，倒入养乐多。',
        '倒入葡萄桃桃，完成！'
      ],
      likes: 22
    },
    {
      id: 'orange-lemon-tea',
      name: '橘子柠檬茶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '橘子柠檬茶是一款清爽的饮品，以红茶、橘子、柠檬、冰糖为原料，口感丰富，既有橘子的香甜，又有柠檬的清新。',
      tags: ['饮品', '橘子', '柠檬'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '橘子', amount: '适量' },
        { name: '柠檬', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '柠檬用盐搓洗干净、去籽切片，橘子去外皮（怕苦可把水果的外皮、白膜皮都去掉）。',
        '红茶放入养生壶的茶漏中；柠檬片、冰糖、橘子，放入壶中（橘子在壶中压烂出汁）；加水，煮开。',
        '煮完后把红茶取出，可以嚼到满满的橘子肉，喝喝喝！'
      ],
      likes: 19
    },
    {
      id: 'hong-kong-lemon-tea',
      name: '港式冻柠茶',
      category: '饮品',
      difficulty: '简单',
      time: '20分钟',
      chef: '爸爸',
      description: '港式冻柠茶是一款经典的港式饮品，以红茶、柠檬、冰糖为原料，口感丰富，既有红茶的清香，又有柠檬的清新。',
      tags: ['饮品', '港式', '柠檬'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '柠檬', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '柠檬用盐搓洗干净、去籽，切片。',
        '红茶泡好滤除茶叶，放入冰糖，融化、晾凉。',
        '柠檬片放入少许盐、糖，压出汁腌制15分钟左右。',
        '柠檬片腌好后，加入冰块、晾凉的茶汤，搞定！'
      ],
      likes: 21
    },
    {
      id: 'mango-coconut',
      name: '芒果椰椰',
      category: '饮品',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '芒果椰椰是一款清爽的饮品，以芒果、脆波波、冰块、厚椰乳为原料，口感丰富，既有芒果的香甜，又有椰子的清香。',
      tags: ['饮品', '芒果', '椰子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '芒果', amount: '适量' },
        { name: '脆波波', amount: '适量' },
        { name: '冰块', amount: '适量' },
        { name: '厚椰乳', amount: '适量' }
      ],
      steps: [
        '杯底放入少许芒果肉，压碎，倒入脆波波、少许椰乳。',
        '榨汁机放入芒果肉、冰块、椰乳，打成冰沙。',
        '打好的冰沙倒入杯子中，搞定！'
      ],
      likes: 20
    },
    {
      id: 'white-fungus-soybean-milk',
      name: '银耳豆浆',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '银耳豆浆是一款健康的饮品，以银耳、红枣、黄豆、小米、水为原料，口感丰富，既有银耳的滑嫩，又有豆浆的香甜。',
      tags: ['饮品', '健康', '豆浆'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '银耳', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '黄豆', amount: '20g' },
        { name: '小米', amount: '10g' },
        { name: '水', amount: '800ml' }
      ],
      steps: [
        '红枣去核，银耳泡发洗净，去掉底部黄色部分。',
        '食材洗净，全部放入破壁机，倒入800ml水，选择豆浆模式，结束！等喝！'
      ],
      likes: 18
    },
    {
      id: 'pear-soup',
      name: '小吊梨汤',
      category: '饮品',
      difficulty: '中等',
      time: '40分钟',
      chef: '奶奶',
      description: '小吊梨汤是一款传统的中式甜品饮品，以雪梨、银耳、红枣、枸杞、陈皮、话梅为原料，口感丰富，既有梨的清甜，又有银耳的滑嫩。',
      tags: ['饮品', '梨汤', '养生'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '雪梨', amount: '1个' },
        { name: '银耳', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '陈皮', amount: '适量' },
        { name: '话梅', amount: '适量' }
      ],
      steps: [
        '梨用盐搓洗干净，切块（不去皮），红枣去核，银耳泡发撕很碎。',
        '壶中放入银耳，水（没过银耳），煮出胶（勤搅拌易出胶）。',
        '再加入梨、话梅、红枣、陈皮，加水，煮20-30分钟。',
        '枸杞出锅前再加即可。'
      ],
      likes: 22
    },
    {
      id: 'apple-orange-tea',
      name: '苹果热橙茶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '苹果热橙茶是一款温暖的热饮，以红茶、苹果、橙子、冰糖为原料，口感丰富，既有苹果的香甜，又有橙子的清新。',
      tags: ['饮品', '苹果', '橙子'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '苹果', amount: '1个' },
        { name: '橙子', amount: '1个' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '橙子去皮只留果肉（白色纤维也去掉），苹果去核切块。',
        '锅中放入苹果、橙子肉、红茶、冰糖，加水没过食材。',
        '开小火，煮开，关火（不要煮太久红茶会变苦）。搞定开喝！'
      ],
      likes: 20
    },
    {
      id: 'boya-juexian',
      name: '伯牙绝弦',
      category: '饮品',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '伯牙绝弦是一款清爽的饮品，以纯牛奶、茉莉花茶、旺仔牛奶、冰块为原料，口感丰富，既有牛奶的顺滑，又有茉莉花的清香。',
      tags: ['饮品', '牛奶', '茉莉花茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '纯牛奶', amount: '100ml' },
        { name: '茉莉花茶', amount: '200ml' },
        { name: '旺仔牛奶', amount: '100ml' },
        { name: '冰块', amount: '适量' }
      ],
      steps: [
        '杯中放入适量冰块。',
        '倒入200ml茉莉花茶、100ml牛奶、100ml旺仔。',
        '搅拌或摇晃均匀完成！'
      ],
      likes: 19
    },
    {
      id: 'longan-hot-black-tea',
      name: '桂圆热红茶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '桂圆热红茶是一款温暖的热饮，以红茶、桂圆为原料，口感丰富，既有桂圆的香甜，又有红茶的清香。',
      tags: ['饮品', '桂圆', '红茶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '桂圆', amount: '6-7个' }
      ],
      steps: [
        '6-7个桂圆去皮、去核（果肉切开锅的香味更快更浓）。',
        '红茶放入茶漏，桂圆放入养生壶，倒入水。',
        '可选花茶模式，煮开。'
      ],
      likes: 18
    },
    {
      id: 'osmanthus-roasted-milk',
      name: '桂花烤奶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '奶奶',
      description: '桂花烤奶是一款香甜的饮品，以红茶、桂花、牛奶、冰糖为原料，口感丰富，既有桂花的清香，又有牛奶的顺滑。',
      tags: ['饮品', '桂花', '牛奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '桂花', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '红茶、桂花，放入锅中，小火慢炒出香味，再加入少量水，煮开。',
        '加水煮开后，继续煮5分钟左右，倒入牛奶，喜欢甜的集美可以再加几块冰糖再次煮开。',
        '关火，过滤掉茶叶，撒上桂花喝它。'
      ],
      likes: 21
    },
    {
      id: 'rose-roasted-milk',
      name: '玫瑰烤奶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '奶奶',
      description: '玫瑰烤奶是一款香甜的饮品，以红茶、玫瑰、枸杞、红枣、牛奶、冰糖为原料，口感丰富，既有玫瑰的清香，又有牛奶的顺滑。',
      tags: ['饮品', '玫瑰', '牛奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '玫瑰', amount: '4朵' },
        { name: '枸杞', amount: '6个' },
        { name: '红枣', amount: '适量' },
        { name: '牛奶', amount: '适量' },
        { name: '冰糖', amount: '适量' }
      ],
      steps: [
        '红茶放入锅中，小火慢炒一会，加入少量水煮开。',
        '放入红枣（去核切块）、玫瑰4朵、枸杞6个，加水700ml，再次煮开5分钟左右（喜甜可加入少许冰糖）。',
        '倒入牛奶，慢慢搅匀，牛奶热透。',
        '关火，过滤食材，开喝！'
      ],
      likes: 22
    },
    {
      id: 'red-date-milk',
      name: '红枣牛奶',
      category: '饮品',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '红枣牛奶是一款营养的饮品，以红枣、枸杞、纯牛奶、水为原料，口感丰富，既有红枣的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '红枣', '牛奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红枣', amount: '适量（切块）' },
        { name: '枸杞', amount: '5-6个' },
        { name: '纯牛奶', amount: '适量' },
        { name: '水', amount: '少量' }
      ],
      steps: [
        '放入红枣、枸杞、一丢丢清水，等煮开。',
        '煮开后，转小火，加入牛奶，再热1-2分钟，就可以出锅啦！'
      ],
      likes: 19
    },
    {
      id: 'strawberry-milk',
      name: '草莓牛奶',
      category: '饮品',
      difficulty: '简单',
      time: '2小时',
      chef: '爸爸',
      description: '草莓牛奶是一款香甜的饮品，以草莓、白砂糖、淡奶油、牛奶为原料，口感丰富，既有草莓的香甜，又有牛奶的顺滑。',
      tags: ['饮品', '草莓', '牛奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '草莓', amount: '适量' },
        { name: '白砂糖', amount: '适量' },
        { name: '淡奶油', amount: '适量' },
        { name: '牛奶', amount: '适量' }
      ],
      steps: [
        '草莓洗净去蒂，切丁。',
        '加入适量白砂糖，搅拌均匀，密封放入冰箱腌2小时（出汁差不多了）。',
        '杯中放入腌好的草莓酱，倒入牛奶、淡奶油，搅拌均匀，完成！'
      ],
      likes: 20
    },
    {
      id: 'brown-sugar-ginger-date-milk-tea',
      name: '红糖姜枣奶茶',
      category: '饮品',
      difficulty: '简单',
      time: '15分钟',
      chef: '奶奶',
      description: '红糖姜枣奶茶是一款温暖的饮品，以红茶、红枣、枸杞、生姜、红糖、牛奶为原料，口感丰富，既有红糖的香甜，又有生姜的辛辣。',
      tags: ['饮品', '红糖', '生姜'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '红茶', amount: '适量' },
        { name: '红枣', amount: '适量' },
        { name: '枸杞', amount: '适量' },
        { name: '生姜', amount: '适量' },
        { name: '红糖', amount: '适量' },
        { name: '牛奶', amount: '适量' }
      ],
      steps: [
        '红枣去核切块、姜切片。',
        '养生壶中放入红茶、红枣、枸杞、姜片、红糖。',
        '壶中倒入少量水，把红糖煮化。',
        '火调小（保温加热模式就好），倒入牛奶，热透之后，就可以喝啦！'
      ],
      likes: 21
    },
    {
      id: 'pitaya-smoothie',
      name: '火龙果奶昔',
      category: '饮品',
      difficulty: '简单',
      time: '5分钟',
      chef: '妈妈',
      description: '火龙果奶昔是一款清爽的饮品，以火龙果、香蕉、即食燕麦、酸奶或牛奶为原料，口感丰富，既有火龙果的香甜，又有香蕉的顺滑。',
      tags: ['饮品', '火龙果', '奶昔'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '火龙果', amount: '半个' },
        { name: '香蕉', amount: '1根' },
        { name: '即食燕麦', amount: '15g' },
        { name: '酸奶或牛奶', amount: '300ml' }
      ],
      steps: [
        '火龙果、香蕉切块。',
        '火龙果、香蕉、麦片、酸奶或牛奶300ml，放入榨汁机或破壁机，开榨。',
        '杯中留少许酸奶，勺子涂抹挂壁，倒入榨好的奶昔，搞定！'
      ],
      likes: 18
    },
    {
      id: 'strawberry-yogurt',
      name: '草莓酸奶',
      category: '饮品',
      difficulty: '简单',
      time: '10分钟',
      chef: '妈妈',
      description: '草莓酸奶是一款香甜的饮品，以酸奶、草莓、草莓果酱为原料，口感丰富，既有草莓的香甜，又有酸奶的顺滑。',
      tags: ['饮品', '草莓', '酸奶'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '酸奶', amount: '适量' },
        { name: '草莓', amount: '适量' },
        { name: '草莓果酱', amount: '1勺' }
      ],
      steps: [
        '杯底放入草莓压碎，1勺草莓果酱，搅拌均匀。',
        '倒入酸奶（不搅拌）。',
        '酸奶+草莓放入榨汁机打成奶昔，倒入杯中，完成！'
      ],
      likes: 20
    },
    {
      id: 'taro-yogurt-zongzi',
      name: '芋泥酸奶粽',
      category: '主食',
      difficulty: '中等',
      time: '2小时',
      chef: '奶奶',
      description: '芋泥酸奶粽是一款创意的粽子，以糯米、芋泥、红豆、芒果、酸奶为原料，口感丰富，既有芋泥的绵密，又有酸奶的顺滑。',
      tags: ['主食', '粽子', '芋泥'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '糯米', amount: '500g' },
        { name: '芋泥', amount: '适量' },
        { name: '红豆', amount: '适量' },
        { name: '芒果', amount: '适量' },
        { name: '酸奶', amount: '适量' }
      ],
      steps: [
        '芒果切小块备用。',
        '芒果糯米饭：糯米提前浸泡，放入锅中蒸熟，加入适量白糖和芒果丁。',
        '粽叶提前浸泡，包入糯米饭、芋泥、红豆，扎紧，放入锅中蒸熟。',
        '粽子上淋酸奶，放上自己喜欢吃的水果，开吃。'
      ],
      likes: 22
    },
    {
      id: 'fresh-meat-wonton',
      name: '鲜肉馄饨',
      category: '主食',
      difficulty: '中等',
      time: '1小时',
      chef: '妈妈',
      description: '鲜肉馄饨是一款经典的中式主食，以猪肉、馄饨皮、葱姜等为原料，口感丰富，既有肉馅的鲜美，又有馄饨皮的滑嫩。',
      tags: ['主食', '馄饨', '肉类'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '猪肉', amount: '250g' },
        { name: '馄饨皮', amount: '200g' },
        { name: '葱', amount: '适量' },
        { name: '姜', amount: '适量' },
        { name: '料酒', amount: '适量' },
        { name: '生抽', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '香油', amount: '适量' }
      ],
      steps: [
        '猪肉剁碎，加入葱姜末、料酒、生抽、盐、香油，搅拌均匀。',
        '取一张馄饨皮，放入适量馅料，包成馄饨。',
        '锅中烧开水，放入馄饨，煮至浮起。',
        '碗中放入紫菜、虾皮、盐、香油，倒入馄饨和汤，完成！'
      ],
      likes: 23
    },
    {
      id: 'hot-dry-noodles',
      name: '热干面',
      category: '主食',
      difficulty: '简单',
      time: '15分钟',
      chef: '爸爸',
      description: '热干面是一款经典的武汉小吃，以面条、芝麻酱、酱油、醋等为原料，口感丰富，既有面条的劲道，又有芝麻酱的香味。',
      tags: ['主食', '面条', '小吃'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '200g' },
        { name: '芝麻酱', amount: '2勺' },
        { name: '酱油', amount: '1勺' },
        { name: '醋', amount: '半勺' },
        { name: '盐', amount: '适量' },
        { name: '葱花', amount: '适量' },
        { name: '辣椒油', amount: '适量' }
      ],
      steps: [
        '锅中烧开水，放入面条，煮至八分熟，捞出沥干。',
        '碗中放入芝麻酱、酱油、醋、盐，搅拌均匀。',
        '将面条放入碗中，加入葱花、辣椒油，搅拌均匀，完成！'
      ],
      likes: 21
    },
    {
      id: 'homemade-hand-pulled-pancake',
      name: '自制手抓饼',
      category: '主食',
      difficulty: '中等',
      time: '30分钟',
      chef: '爷爷',
      description: '自制手抓饼是一款美味的中式面食，以面粉、盐、油为原料，口感丰富，既有饼的酥脆，又有层次的分明。',
      tags: ['主食', '饼类', '面食'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面粉', amount: '200g' },
        { name: '盐', amount: '2g' },
        { name: '油', amount: '适量' },
        { name: '葱花', amount: '适量' }
      ],
      steps: [
        '面粉中加入盐，用温水和面，揉至光滑，醒发30分钟。',
        '将面团擀成薄片，刷上油，撒上葱花。',
        '将面片卷起来，分成小剂子，擀成饼状。',
        '锅中刷油，放入饼坯，煎至两面金黄，完成！'
      ],
      likes: 20
    },
    {
      id: 'curry-chicken-rice',
      name: '咖喱鸡块饭',
      category: '主食',
      difficulty: '中等',
      time: '30分钟',
      chef: '妈妈',
      description: '咖喱鸡块饭是一款美味的中式主食，以鸡胸肉、土豆、胡萝卜、咖喱块等为原料，口感丰富，既有咖喱的香味，又有鸡肉的鲜嫩。',
      tags: ['主食', '咖喱', '鸡肉'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡胸肉', amount: '200g' },
        { name: '土豆', amount: '1个' },
        { name: '胡萝卜', amount: '1根' },
        { name: '洋葱', amount: '1个' },
        { name: '咖喱块', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '油', amount: '适量' }
      ],
      steps: [
        '准备食材：鸡胸肉、土豆、胡萝卜、洋葱分别切块备用。',
        '锅中放油，放入鸡胸肉翻炒至变色。',
        '加入洋葱、土豆、胡萝卜翻炒均匀。',
        '加入适量清水，大火煮开后转小火煮10分钟。',
        '加入咖喱块，搅拌至融化，煮至汤汁浓稠即可。',
        '出锅装盘。'
      ],
      likes: 22
    },
    {
      id: 'fish-fragrant-egg-rice',
      name: '鱼香鸡蛋盖饭',
      category: '主食',
      difficulty: '简单',
      time: '20分钟',
      chef: '爸爸',
      description: '鱼香鸡蛋盖饭是一款经典的中式主食，以鸡蛋、胡萝卜、木耳等为原料，口感丰富，既有鱼香的味道，又有鸡蛋的嫩滑。',
      tags: ['主食', '鱼香', '鸡蛋'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '鸡蛋', amount: '2个' },
        { name: '胡萝卜', amount: '1根' },
        { name: '木耳', amount: '适量' },
        { name: '青椒', amount: '1个' },
        { name: '蒜末', amount: '适量' },
        { name: '姜末', amount: '适量' },
        { name: '葱花', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '糖', amount: '适量' },
        { name: '醋', amount: '适量' },
        { name: '生抽', amount: '适量' },
        { name: '油', amount: '适量' }
      ],
      steps: [
        '准备食材：胡萝卜、木耳、青椒分别切丝备用。',
        '鸡蛋打散，锅中放油炒熟盛出备用。',
        '锅中放油，放入蒜末、姜末爆香。',
        '加入胡萝卜、木耳、青椒翻炒至熟。',
        '加入炒好的鸡蛋，加盐、糖、醋、生抽调味。',
        '翻炒均匀后撒上葱花，出锅盖在米饭上即可。'
      ],
      likes: 20
    },
    {
      id: 'sour-soup-noodles',
      name: '酸汤面',
      category: '主食',
      difficulty: '简单',
      time: '15分钟',
      chef: '爷爷',
      description: '酸汤面是一款酸辣可口的中式主食，以面条、鸡蛋、西红柿等为原料，口感丰富，既有酸味，又有辣味。',
      tags: ['主食', '面条', '酸辣'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面条', amount: '200g' },
        { name: '鸡蛋', amount: '1个' },
        { name: '西红柿', amount: '1个' },
        { name: '葱花', amount: '适量' },
        { name: '蒜末', amount: '适量' },
        { name: '醋', amount: '适量' },
        { name: '辣椒油', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '生抽', amount: '适量' },
        { name: '油', amount: '适量' }
      ],
      steps: [
        '准备食材：西红柿切块备用。',
        '锅中放油，放入蒜末爆香，加入西红柿炒至出汁。',
        '加入适量清水，大火煮开。',
        '下面条，煮至八成熟。',
        '打入鸡蛋，搅散成蛋花。',
        '加入盐、生抽、醋、辣椒油调味。',
        '撒上葱花，出锅即可。'
      ],
      likes: 19
    },
    {
      id: 'pancake-roll',
      name: '煎饼果子',
      category: '主食',
      subcategory: '饼类',
      difficulty: '中等',
      time: '20分钟',
      chef: '奶奶',
      description: '煎饼果子是一款经典的中式小吃，以面粉、鸡蛋、薄脆等为原料，口感丰富，既有饼的酥脆，又有鸡蛋的嫩滑。',
      tags: ['主食', '饼类', '小吃'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '面粉', amount: '200g' },
        { name: '鸡蛋', amount: '2个' },
        { name: '薄脆', amount: '适量' },
        { name: '葱花', amount: '适量' },
        { name: '香菜', amount: '适量' },
        { name: '甜面酱', amount: '适量' },
        { name: '辣椒酱', amount: '适量' },
        { name: '盐', amount: '适量' },
        { name: '水', amount: '适量' }
      ],
      steps: [
        '面粉中加入盐，用温水调成面糊。',
        '平底锅加热，倒入面糊，摊成圆形。',
        '打入鸡蛋，用铲子摊匀。',
        '撒上葱花、香菜。',
        '翻面，涂抹甜面酱、辣椒酱。',
        '放入薄脆，卷起来即可。'
      ],
      likes: 21
    },
    {
      id: 'happy-laba-porridge',
      name: '没烦恼腊八粥',
      category: '主食',
      subcategory: '粥类',
      difficulty: '简单',
      time: '1小时',
      chef: '奶奶',
      description: '没烦恼腊八粥是一款营养丰富的传统粥品，以大米、小米、红豆、绿豆等为原料，口感丰富，既有各种谷物的香味，又有豆类的绵密。',
      tags: ['主食', '粥类', '传统'],
      image: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c6dc717de851426fb4d707c012c347bf~tplv-a9rns2rl98-image.image?lk3s=8e244e95&rcl=2026041823492331B278E392A4CAE44178&rrcfp=f06b921b&x-expires=1779119451&x-signature=GhUT1YBLfltxy4Sup4M5lyVEitM%3D',
      ingredients: [
        { name: '大米', amount: '50g' },
        { name: '小米', amount: '50g' },
        { name: '红豆', amount: '30g' },
        { name: '绿豆', amount: '30g' },
        { name: '花生', amount: '30g' },
        { name: '莲子', amount: '20g' },
        { name: '红枣', amount: '10个' },
        { name: '桂圆', amount: '10个' },
        { name: '冰糖', amount: '适量' },
        { name: '水', amount: '适量' }
      ],
      steps: [
        '准备食材：将所有豆类、花生提前浸泡4小时。',
        '将所有食材放入锅中，加入适量清水。',
        '大火煮开后转小火煮1小时。',
        '加入冰糖，搅拌至融化即可。'
      ],
      likes: 18
    }
  ],

  // 根据分类获取菜品
  getDishesByCategory(category, subcategory = null) {
    if (!category || category === '全部') {
      return this.dishes;
    }
    let filteredDishes = this.dishes.filter(dish => dish.category === category);
    
    if (subcategory && subcategory !== '全部') {
      filteredDishes = filteredDishes.filter(dish => dish.subcategory === subcategory);
    }
    
    return filteredDishes;
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
