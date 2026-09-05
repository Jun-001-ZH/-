window.ArtifactMuseumData = {
  categories: [
    {
      id: "ceramic",
      number: "01",
      name: "陶瓷",
      title: "陶瓷之色",
      english: "COLORS OF CERAMICS",
      line: "火与釉之间，颜色从不完全由人掌控。",
      material: "釉中见天光",
      image: "../assets/artifacts/ceramic-zone-vessel.jpg",
      alt: "青瓷铺首耳罐局部图，器身呈温润青灰釉色",
      palette: ["#6E8B8B", "#D6D2C3", "#8EA58B", "#AAB8AF"]
    },
    {
      id: "costume",
      number: "02",
      name: "服饰",
      title: "服饰之色",
      english: "COLORS OF COSTUME",
      line: "色入衣冠，便进入身份、礼仪与日常生活。",
      material: "衣冠有色",
      image: "../assets/artifacts/costume-zone-brocade.jpg",
      alt: "绛红织锦局部图，花鸟纹中可见金线、青蓝叶纹与暗红织地",
      palette: ["#7A3436", "#9E4F4F", "#B19A61", "#3F5961"]
    },
    {
      id: "painting",
      number: "03",
      name: "书画",
      title: "书画之色",
      english: "COLORS OF PAINTING",
      line: "一笔石青，一层石绿，山河便有了颜色。",
      material: "丹青入纸",
      image: "../assets/artifacts/painting-zone-landscape.jpg",
      alt: "青绿山水局部图，可见石青石绿山石与纸绢肌理",
      palette: ["#4F7586", "#66846A", "#9C6A49", "#343735"]
    },
    {
      id: "architecture",
      number: "04",
      name: "建筑",
      title: "建筑之色",
      english: "COLORS OF ARCHITECTURE",
      line: "颜色落在空间之上，便成为秩序的一部分。",
      material: "宫墙瓦宇",
      image: "../assets/artifacts/architecture-zone-palace-wall.jpg",
      alt: "宫墙与琉璃瓦建筑局部图，包含朱红墙面、琉璃黄瓦和石基",
      palette: ["#963C34", "#C58B35", "#2F4C40", "#D8D0BE"]
    }
  ],
  artifacts: [
    {
      id: "celadon-vessel",
      name: "青瓷釉色器",
      dynasty: "设计期示意",
      category: "ceramic",
      material: "瓷胎、青釉",
      technique: "釉色、火候、窑变",
      zoneImage: "../assets/artifacts/ceramic-zone-vessel.jpg",
      zoneImageAlt: "青瓷铺首耳罐图，器身有温润青灰釉色与开片纹",
      zoneColors: [
        { id: "tian-qing", name: "天青", pinyin: "TIAN QING", hex: "#8FA6A2", rgb: "143, 166, 162", x: 50, y: 44, meaning: "温润 · 含蓄 · 清雅", usage: "釉面主色" },
        { id: "yue-bai", name: "月白", pinyin: "YUE BAI", hex: "#D8D3C7", rgb: "216, 211, 199", x: 53, y: 16, meaning: "清冷 · 柔光 · 留白", usage: "口沿高光" },
        { id: "you-hui", name: "釉灰", pinyin: "YOU HUI", hex: "#9BAAA6", rgb: "155, 170, 166", x: 35, y: 58, meaning: "灰青 · 层次 · 静气", usage: "腹部暗面" }
      ],
      image: "../assets/artifacts/ceramic-card-vase.jpg",
      imageAlt: "青瓷盘口瓶图，器身有青灰釉色与开片纹",
      featured: true,
      description: "这件示意器物用于说明青瓷釉色的观看方式。釉层、光线与烧制状态会让同一种天青呈现不同的冷暖和深浅。",
      colors: [
        { id: "tian-qing", name: "天青", pinyin: "TIAN QING", hex: "#7F9A98", rgb: "127, 154, 152", x: 50, y: 53, meaning: "温润 · 含蓄 · 清雅", usage: "瓶身釉面" },
        { id: "yue-bai", name: "月白", pinyin: "YUE BAI", hex: "#D4CEC1", rgb: "212, 206, 193", x: 53, y: 14, meaning: "清冷 · 柔光 · 留白", usage: "口沿高光" },
        { id: "you-hui", name: "釉灰", pinyin: "YOU HUI", hex: "#9AA9A4", rgb: "154, 169, 164", x: 74, y: 39, meaning: "灰青 · 层次 · 静气", usage: "耳饰暗面" }
      ],
      labColors: [
        { id: "tian-qing", name: "天青", pinyin: "TIAN QING", hex: "#7F9A98", rgb: "127, 154, 152", x: 50, y: 53, meaning: "温润 · 含蓄 · 清雅", usage: "瓶身釉面" }
      ]
    },
    {
      id: "embroidered-silk",
      name: "绛地织绣纹样",
      dynasty: "设计期示意",
      category: "costume",
      material: "丝线、织物",
      technique: "染色、织造、刺绣",
      zoneImage: "../assets/artifacts/costume-zone-brocade.jpg",
      zoneImageAlt: "绛红织锦大图，花鸟纹样在丝面褶皱中起伏",
      zoneColors: [
        { id: "jiang-hong", name: "绛红", pinyin: "JIANG HONG", hex: "#6F2525", rgb: "111, 37, 37", x: 31, y: 43, meaning: "深红 · 庄重 · 收束", usage: "织物底色" },
        { id: "qiu-xiang", name: "秋香", pinyin: "QIU XIANG", hex: "#B28B55", rgb: "178, 139, 85", x: 46, y: 61, meaning: "温厚 · 秋意 · 克制", usage: "花纹金线" },
        { id: "dai-qing", name: "黛青", pinyin: "DAI QING", hex: "#3F5961", rgb: "63, 89, 97", x: 65, y: 31, meaning: "深远 · 含蓄 · 山色", usage: "叶羽青线" }
      ],
      image: "../assets/artifacts/costume-card-floral.jpg",
      imageAlt: "绛红花卉织锦局部图，金线与青蓝叶纹交织",
      featured: true,
      description: "织物中的颜色不只来自染料，也来自丝线方向、纹样密度和光泽变化。靠近观察时，色彩会显出更细的层次。",
      colors: [
        { id: "jiang-hong", name: "绛红", pinyin: "JIANG HONG", hex: "#74302C", rgb: "116, 48, 44", x: 51, y: 53, meaning: "深红 · 庄重 · 收束", usage: "织物底色" },
        { id: "qiu-xiang", name: "秋香", pinyin: "QIU XIANG", hex: "#AA8550", rgb: "170, 133, 80", x: 66, y: 45, meaning: "温厚 · 秋意 · 克制", usage: "花纹金线" },
        { id: "dai-qing", name: "黛青", pinyin: "DAI QING", hex: "#3E5860", rgb: "62, 88, 96", x: 32, y: 47, meaning: "深远 · 含蓄 · 山色", usage: "叶纹暗线" }
      ]
    },
    {
      id: "mineral-landscape",
      name: "青绿山水局部",
      dynasty: "设计期示意",
      category: "painting",
      material: "纸绢、矿物颜料、墨",
      technique: "石青、石绿、赭石与墨色层染",
      zoneImage: "../assets/artifacts/painting-zone-landscape.jpg",
      zoneImageAlt: "青绿山水画大图，山石与远峰呈现矿物颜料层次",
      zoneColors: [
        { id: "shi-qing", name: "石青", pinyin: "SHI QING", hex: "#4F7586", rgb: "79, 117, 134", x: 31, y: 31, meaning: "矿物 · 沉静 · 山色", usage: "山石青色" },
        { id: "shi-lu", name: "石绿", pinyin: "SHI LU", hex: "#758B72", rgb: "117, 139, 114", x: 47, y: 64, meaning: "草木 · 层染 · 生机", usage: "坡石绿意" },
        { id: "mo-se", name: "墨色", pinyin: "MO SE", hex: "#343735", rgb: "52, 55, 53", x: 49, y: 43, meaning: "层次 · 纸墨 · 沉静", usage: "树影与皴线" }
      ],
      image: "../assets/artifacts/painting-card-green-cliff.jpg",
      imageAlt: "青绿山水画局部图，山石上可见石青石绿颜料",
      featured: true,
      description: "书画之色常在局部发生。石青、石绿、赭石与墨色层层进入纸绢，使山石、云气与远峰拥有不同的色相边界。",
      colors: [
        { id: "shi-qing", name: "石青", pinyin: "SHI QING", hex: "#4E7C84", rgb: "78, 124, 132", x: 48, y: 39, meaning: "矿物 · 沉静 · 山色", usage: "山石亮面" },
        { id: "shi-lu", name: "石绿", pinyin: "SHI LU", hex: "#718D78", rgb: "113, 141, 120", x: 31, y: 56, meaning: "草木 · 层染 · 生机", usage: "坡石与苔点" },
        { id: "mo-se", name: "墨色", pinyin: "MO SE", hex: "#343735", rgb: "52, 55, 53", x: 45, y: 27, meaning: "层次 · 纸墨 · 沉静", usage: "皴线与树影" }
      ]
    },
    {
      id: "palace-wall",
      name: "宫墙瓦宇局部",
      dynasty: "设计期示意",
      category: "architecture",
      material: "墙面、琉璃瓦、石基",
      technique: "空间表面与建筑彩画",
      zoneImage: "../assets/artifacts/architecture-zone-palace-wall.jpg",
      zoneImageAlt: "宫墙与琉璃瓦建筑大图，朱红墙面、琉璃瓦和石基层次分明",
      zoneColors: [
        { id: "gong-qiang-hong", name: "宫墙红", pinyin: "GONG QIANG HONG", hex: "#963C34", rgb: "150, 60, 52", x: 43, y: 52, meaning: "庄重 · 空间 · 秩序", usage: "墙面" },
        { id: "liu-li-huang", name: "琉璃黄", pinyin: "LIU LI HUANG", hex: "#C58B35", rgb: "197, 139, 53", x: 57, y: 18, meaning: "明净 · 礼制 · 屋瓦", usage: "瓦当与屋脊" },
        { id: "han-bai", name: "汉白", pinyin: "HAN BAI", hex: "#D8D0BE", rgb: "216, 208, 190", x: 50, y: 77, meaning: "石质 · 清肃 · 承托", usage: "石基" }
      ],
      image: "../assets/artifacts/architecture-card-tile-shadow.jpg",
      imageAlt: "宫墙瓦面局部图，黄色琉璃瓦、绿色檐下与朱红墙面形成层次",
      featured: true,
      description: "建筑中的颜色属于空间秩序。墙、瓦、梁枋和石基共同构成可行走的色谱，而不是单一平面的颜色装饰。",
      colors: [
        { id: "gong-qiang-hong", name: "宫墙红", pinyin: "GONG QIANG HONG", hex: "#A34432", rgb: "163, 68, 50", x: 52, y: 49, meaning: "庄重 · 空间 · 秩序", usage: "墙面" },
        { id: "liu-li-huang", name: "琉璃黄", pinyin: "LIU LI HUANG", hex: "#C98B32", rgb: "201, 139, 50", x: 46, y: 14, meaning: "明净 · 礼制 · 屋瓦", usage: "瓦当与屋脊" },
        { id: "han-bai", name: "汉白", pinyin: "HAN BAI", hex: "#D5C8B2", rgb: "213, 200, 178", x: 50, y: 89, meaning: "石质 · 清肃 · 承托", usage: "石雕基座" }
      ]
    },
    {
      id: "green-glaze-bowl",
      name: "豆青釉碗",
      dynasty: "示意器型",
      category: "ceramic",
      material: "瓷、釉",
      technique: "青釉层次",
      image: "../assets/artifacts/ceramic-card-bowl.jpg",
      imageAlt: "豆青釉碗近景图，可见口沿、釉色和开片肌理",
      description: "豆青与月白常在光线中彼此靠近，数字色值只能作为屏幕展示参考。",
      colors: [
        { id: "dou-qing", name: "豆青", pinyin: "DOU QING", hex: "#789694", rgb: "120, 150, 148", x: 49, y: 53, meaning: "朴素 · 清润 · 亲近", usage: "碗壁釉面" }
      ]
    },
    {
      id: "red-silk-band",
      name: "胭脂织带",
      dynasty: "示意纹样",
      category: "costume",
      material: "丝织物",
      technique: "染与织",
      image: "../assets/artifacts/costume-card-ribbon.jpg",
      imageAlt: "红地花卉织带局部图，纹样沿织带纵向展开",
      description: "服饰色彩的浓淡，常随纹样密度和丝线反光而改变。",
      colors: [
        { id: "yan-zhi", name: "胭脂", pinyin: "YAN ZHI", hex: "#98504B", rgb: "152, 80, 75", x: 50, y: 48, meaning: "柔和 · 肌理 · 温度", usage: "织带底色" }
      ]
    },
    {
      id: "ochre-ridge",
      name: "赭石山脊",
      dynasty: "示意画面",
      category: "painting",
      material: "纸本设色",
      technique: "矿物与墨色",
      image: "../assets/artifacts/painting-card-ochre-ridge.jpg",
      imageAlt: "青绿山水画面局部示意图",
      description: "赭石让山石有土性和重量，也让青绿不至于漂浮。",
      colors: [
        { id: "zhe-shi", name: "赭石", pinyin: "ZHE SHI", hex: "#8F7758", rgb: "143, 119, 88", x: 58, y: 31, meaning: "土石 · 沉稳 · 温厚", usage: "山脊暖色" }
      ]
    },
    {
      id: "dark-tile-shadow",
      name: "黛瓦阴影",
      dynasty: "示意建筑",
      category: "architecture",
      material: "瓦、木、墙",
      technique: "建筑表面色",
      image: "../assets/artifacts/architecture-card-eaves.jpg",
      imageAlt: "琉璃瓦檐与朱红墙面近景图，檐下阴影清晰",
      description: "黛瓦灰不是纯黑，而是由阴影、灰尘和瓦面材质共同形成的低明度色。",
      colors: [
        { id: "dai-wa", name: "黛瓦灰", pinyin: "DAI WA HUI", hex: "#2F4C40", rgb: "47, 76, 64", x: 45, y: 24, meaning: "瓦影 · 静穆 · 边界", usage: "檐下青绿阴影" }
      ]
    }
  ]
};
