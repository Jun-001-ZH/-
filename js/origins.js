(function () {
  const colors = [
    {
      key: "qing",
      index: "01",
      name: "青",
      pinyin: "QING",
      english: "GREEN / BLUE",
      color: "#55766F",
      ink: "#23312d",
      tags: [["方位", "东方"], ["五行", "木"], ["季节", "春"], ["象征", "生长 · 初生 · 生机"]],
      text: "“青”并不等同于现代单一的绿色或蓝色。它可以覆盖从草木之青，到天空之青，再到陶瓷釉色中的天青。这种边界的流动，正是中国传统色彩命名的一种特征。",
      ritual: "东方之色 · 春生之象 · 木德之色",
      artifact: "汝窑天青釉",
      era: "北宋",
      caption: "釉色含蓄温润，成为后世理解“天青”的重要视觉参照。",
      image: "../assets/origins/orthodox-qing.png",
      derived: [
        ["天青", "TIAN QING", "#6E8B8B", "110, 139, 139", "宋瓷色意", "陶瓷", "温润 · 含蓄 · 克制"],
        ["豆青", "DOU QING", "#8EA58B", "142, 165, 139", "草木色意", "陶瓷", "朴素 · 清润 · 亲近"],
        ["竹青", "ZHU QING", "#7E9A86", "126, 154, 134", "草木色意", "织物", "清雅 · 修长 · 生机"],
        ["石青", "SHI QING", "#4F7586", "79, 117, 134", "矿物色意", "绘画", "沉静 · 矿物 · 稳定"],
        ["黛青", "DAI QING", "#445C5A", "68, 92, 90", "山水色意", "染织", "深远 · 含蓄 · 山色"]
      ]
    },
    {
      key: "chi",
      index: "02",
      name: "赤",
      pinyin: "CHI",
      english: "CINNABAR RED",
      color: "#A84A3F",
      ink: "#2f211e",
      tags: [["方位", "南方"], ["五行", "火"], ["季节", "夏"], ["象征", "炽盛 · 礼仪 · 光明"]],
      text: "赤，是火与盛夏之色。从朱砂矿物，到漆器与建筑，赤色长期承担着礼仪、身份与空间秩序的表达。它并不只是热烈，更是一种被制度化的颜色。",
      ritual: "南方之色 · 火德之色 · 礼仪之光",
      artifact: "朱漆器",
      era: "漆艺传统",
      caption: "朱砂与漆艺共同塑造出沉着的红色光泽，也让赤色进入礼仪空间。",
      image: "../assets/origins/orthodox-chi.png",
      derived: [
        ["朱砂", "ZHU SHA", "#A83B32", "168, 59, 50", "矿物色意", "漆器", "庄重 · 礼仪 · 矿物"],
        ["胭脂", "YAN ZHI", "#9E4F4F", "158, 79, 79", "妆色意象", "染织", "柔和 · 肌理 · 温度"],
        ["赭石", "ZHE SHI", "#9C6A49", "156, 106, 73", "矿物色意", "绘画", "土石 · 沉稳 · 温厚"],
        ["珊瑚", "SHAN HU", "#C06F63", "192, 111, 99", "器物色意", "饰物", "暖红 · 明净 · 生动"],
        ["绛红", "JIANG HONG", "#7A3436", "122, 52, 54", "染织色意", "服饰", "深红 · 庄严 · 收束"]
      ]
    },
    {
      key: "huang",
      index: "03",
      name: "黄",
      pinyin: "HUANG",
      english: "EARTH YELLOW",
      color: "#C5A35A",
      ink: "#2f2a1d",
      tags: [["方位", "中央"], ["五行", "土"], ["季节", "长夏"], ["象征", "中央 · 土德 · 尊贵"]],
      text: "黄居五色之中。在五行体系中，它对应中央与土地。随着礼制发展，黄色又逐渐承载更明确的身份与秩序意味。",
      ritual: "中央之色 · 土德之色 · 秩序之色",
      artifact: "黄色服饰",
      era: "明清宫廷礼制",
      caption: "色彩在服饰制度中，不仅承担审美作用，也参与身份与等级的表达。",
      image: "../assets/origins/orthodox-huang.png",
      derived: [
        ["秋香", "QIU XIANG", "#B19A61", "177, 154, 97", "岁时色意", "织物", "温厚 · 秋意 · 克制"],
        ["鹅黄", "E HUANG", "#E0C878", "224, 200, 120", "草木色意", "染织", "明柔 · 初生 · 轻暖"],
        ["藤黄", "TENG HUANG", "#D2A33F", "210, 163, 63", "植物色意", "绘画", "明亮 · 植物 · 纸上光"],
        ["杏黄", "XING HUANG", "#D8B36A", "216, 179, 106", "果实色意", "器用", "成熟 · 日暖 · 柔和"],
        ["赭黄", "ZHE HUANG", "#B1844D", "177, 132, 77", "矿物色意", "陶器", "土性 · 沉着 · 古朴"]
      ]
    },
    {
      key: "bai",
      index: "04",
      name: "白",
      pinyin: "BAI",
      english: "LAYERED WHITE",
      color: "#DDD8CC",
      ink: "#2d2d29",
      tags: [["方位", "西方"], ["五行", "金"], ["季节", "秋"], ["象征", "肃静 · 收敛 · 金石"]],
      text: "白并非“无色”。从月白、象牙白，到瓷器与织物中的不同白度，传统语境中的白，拥有细微而丰富的层次。",
      ritual: "西方之色 · 金德之色 · 肃静之象",
      artifact: "德化白瓷",
      era: "白瓷传统",
      caption: "白瓷的微妙暖冷、厚薄与光泽，让白色拥有可被观看的层次。",
      image: "../assets/origins/orthodox-bai.png",
      derived: [
        ["月白", "YUE BAI", "#D6D2C3", "214, 210, 195", "月色意象", "织物", "清冷 · 温柔 · 留白"],
        ["象牙白", "XIANG YA BAI", "#E8DECB", "232, 222, 203", "器物色意", "器用", "温润 · 柔白 · 骨质"],
        ["缟色", "GAO SE", "#F0ECE3", "240, 236, 227", "织物色意", "服饰", "素净 · 纤维 · 清肃"],
        ["米白", "MI BAI", "#EEE5D2", "238, 229, 210", "生活色意", "纸张", "暖白 · 亲近 · 柔光"],
        ["霜色", "SHUANG SE", "#E1DED3", "225, 222, 211", "节令色意", "织物", "轻薄 · 秋凉 · 安静"]
      ]
    },
    {
      key: "hei",
      index: "05",
      name: "黑",
      pinyin: "HEI",
      english: "MYSTIC BLACK",
      color: "#252927",
      ink: "#eee9dd",
      tags: [["方位", "北方"], ["五行", "水"], ["季节", "冬"], ["象征", "玄远 · 冬藏 · 深沉"]],
      text: "黑，在古代色彩观中常与“玄”相连。它指向北方、水与冬藏，也常延伸出深远、幽微与未知的文化意味。",
      ritual: "北方之色 · 水德之色 · 冬藏之象",
      artifact: "黑漆器",
      era: "漆艺与器用",
      caption: "黑色在漆器和陶瓷上形成深处的光，静而不空。",
      image: "../assets/origins/orthodox-hei.png",
      derived: [
        ["玄色", "XUAN SE", "#202321", "32, 35, 33", "玄色意象", "礼服", "深远 · 幽微 · 庄重"],
        ["黛黑", "DAI HEI", "#2B3331", "43, 51, 49", "山水色意", "染织", "青黑 · 远山 · 含蓄"],
        ["墨色", "MO SE", "#343735", "52, 55, 53", "水墨色意", "书画", "层次 · 纸墨 · 沉静"],
        ["乌色", "WU SE", "#171918", "23, 25, 24", "器物色意", "漆器", "浓黑 · 收敛 · 稳定"],
        ["鸦青", "YA QING", "#2E3533", "46, 53, 51", "衣冠色意", "服饰", "黑中有青 · 夜色 · 呼吸"]
      ]
    }
  ];

  const detailText = "传统色彩并不是孤立的数值。它的名称常来自器物、矿物、植物、节令与生活经验；同一个颜色在不同材料上，也会呈现不同的温度、光泽和边界。";

  document.addEventListener("DOMContentLoaded", () => {
    renderOrthodoxPanels();
    renderSpectrums();
    initOriginsHero();
    initFiveSystem();
    initHorizontalScrollGallery();
    initColorDrawer();
  });

  function renderOrthodoxPanels() {
    colors.forEach((item) => {
      const panel = document.querySelector(`[data-panel="${item.key}"]`);
      if (!panel) return;
      const tags = item.tags.map(([label, value]) => `<span><small>${label}</small>${value}</span>`).join("");
      const glyph = `<div class="orthodox-panel__glyph" aria-hidden="true">${item.name}</div>`;
      const copy = `
        <div class="orthodox-panel__copy">
          <h2>${item.name}<span>${item.pinyin} · ${item.english}</span></h2>
          <p class="orthodox-panel__text">${item.text}</p>
          <div class="culture-tags">${tags}</div>
          <p class="orthodox-panel__text">${item.ritual}</p>
        </div>`;
      const artifact = `
        <div>
          <div class="artifact-plate" data-cursor-text="观器" style="--panel-color:${item.color}">
            <img src="${item.image}" alt="${item.artifact}">
          </div>
          <div class="artifact-label">
            <strong>${item.artifact}</strong>
            <span>${item.era}</span>
            <p>${item.caption}</p>
          </div>
        </div>`;
      const order = item.key === "chi" ? `${artifact}${copy}${glyph}` : item.key === "huang" ? `${copy}${glyph}${artifact}` : `${glyph}${copy}${artifact}`;
      panel.innerHTML = `<div class="orthodox-panel__inner">${order}</div>`;
    });
  }

  function renderSpectrums() {
    const list = document.querySelector(".spectrum-list");
    if (!list) return;
    list.innerHTML = colors.map((item) => {
      const chips = item.derived.concat(extraDerived(item.key)).map((chip, index) => {
        const html = colorChip(chip, item.name, "spectrum-chip");
        return html.replace("color-chip", "color-chip").replace("style=\"", `style="--chip-index:${index};`);
      }).join("");
      return `
        <section class="spectrum-row reveal reveal-up" style="--family-color:${item.color}">
          <div class="spectrum-heading">
            <h3>${item.name}系</h3>
            <p>${item.tags[3][1]}</p>
          </div>
          <div class="spectrum-swatches">${chips}</div>
        </section>`;
    }).join("");
    initRevealAnimations();
  }

  function extraDerived(key) {
    const map = {
      qing: [["苍青", "CANG QING", "#586F5F", "88, 111, 95", "草木色意", "山水", "老木 · 深青 · 风霜"]],
      chi: [["水红", "SHUI HONG", "#C27A74", "194, 122, 116", "染织色意", "织物", "退红 · 柔和 · 余韵"]],
      huang: [["松花", "SONG HUA", "#B7B278", "183, 178, 120", "草木色意", "织物", "灰黄 · 植物 · 微暖"]],
      bai: [["玉色", "YU SE", "#D8DED4", "216, 222, 212", "玉石色意", "器物", "温润 · 洁净 · 含光"]],
      hei: [["绀青", "GAN QING", "#33465D", "51, 70, 93", "染织色意", "织物", "深青 · 庄重 · 夜海"]]
    };
    return map[key] || [];
  }

  function colorChip(chip, family, extraClass = "") {
    const [name, pinyin, hex, rgb, source, usage, meaning] = chip;
    const darkInk = isLight(hex) ? "#202321" : "#f4f0e8";
    const payload = encodeURIComponent(JSON.stringify({ name, pinyin, hex, rgb, family, source, usage, meaning, description: detailText }));
    return `<button class="color-chip ${extraClass}" type="button" data-color-detail="${payload}" data-cursor-text="拾色" style="--chip-color:${hex};--chip-ink:${darkInk}"><b>${name}</b><span>${hex}</span></button>`;
  }

  function isLight(hex) {
    const value = hex.replace("#", "");
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }

  function initOriginsHero() {
    const hero = document.querySelector(".origins-hero");
    const title = document.querySelector(".origins-hero__copy");
    const columns = document.querySelector(".order-columns");
    if (!hero || !title || !columns || window.MuseumUtils.prefersReducedMotion) return;
    let ticking = false;
    function update() {
      const rect = hero.getBoundingClientRect();
      const progress = window.MuseumUtils.clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
      title.style.transform = `translateY(${-progress * 50}px)`;
      columns.style.transform = `translateY(${progress * 22}px)`;
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  function initFiveSystem() {
    const section = document.querySelector(".five-system-section");
    const orbit = document.querySelector(".five-orbit");
    if (!section || !orbit) return;
    const washColors = {
      qing: "#4B8983",
      chi: "#A93226",
      huang: "#D4AC0D",
      bai: "#F5F5F0",
      hei: "#1A1A1A"
    };
    const washForegrounds = {
      qing: "#13231F",
      chi: "#F6ECE4",
      huang: "#1F1A0C",
      bai: "#1C1D1B",
      hei: "#EEE9DD"
    };
    orbit.querySelectorAll(".five-node").forEach((node) => {
      node.addEventListener("focus", () => setActive(node));
      node.addEventListener("click", () => {
        node.classList.toggle("is-expanded");
        setActive(node);
      });
    });
    orbit.addEventListener("pointerover", (event) => {
      const node = event.target.closest(".five-node");
      if (node && orbit.contains(node)) setActive(node);
    });
    orbit.addEventListener("mouseleave", resetWash);
    orbit.addEventListener("pointerout", (event) => {
      if (!orbit.contains(event.relatedTarget)) resetWash();
    });
    orbit.addEventListener("focusout", (event) => {
      if (!orbit.contains(event.relatedTarget)) resetWash();
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) orbit.classList.add("is-visible");
      });
    }, { threshold: 0.35 });
    observer.observe(orbit);

    function setActive(node) {
      const key = node.dataset.node;
      const color = getComputedStyle(node).getPropertyValue("--node-color").trim();
      const glyph = node.querySelector("b") || node;
      const rect = glyph.getBoundingClientRect();
      const parent = section.getBoundingClientRect();
      orbit.dataset.active = key;
      orbit.querySelectorAll(".five-node").forEach((item) => {
        item.classList.toggle("is-wash-source", item === node);
      });
      section.style.setProperty("--system-glow", `${color}24`);
      section.style.setProperty("--system-x", `${((rect.left + rect.width / 2 - parent.left) / parent.width) * 100}%`);
      section.style.setProperty("--system-y", `${((rect.top + rect.height / 2 - parent.top) / parent.height) * 100}%`);
      section.style.setProperty("--wash-x", `${((rect.left + rect.width / 2 - parent.left) / parent.width) * 100}%`);
      section.style.setProperty("--wash-y", `${((rect.top + rect.height / 2 - parent.top) / parent.height) * 100}%`);
      section.style.setProperty("--wash-color", washColors[key] || color);
      section.style.setProperty("--wash-foreground", washForegrounds[key] || "#1c1d1b");
      section.style.backgroundColor = washColors[key] || color;
      section.classList.add("is-washing");
      section.classList.toggle("is-dark-wash", key === "hei");
    }

    function resetWash() {
      section.classList.remove("is-washing", "is-dark-wash");
      orbit.querySelectorAll(".five-node").forEach((item) => item.classList.remove("is-wash-source"));
      section.style.backgroundColor = "#f4f0e8";
    }
  }

  function initHorizontalScrollGallery() {
    const section = document.querySelector(".scroll-gallery");
    const sticky = document.querySelector(".scroll-gallery__sticky");
    const track = document.querySelector(".scroll-gallery__track");
    const panels = Array.from(document.querySelectorAll(".orthodox-panel[data-panel]"));
    const header = document.querySelector(".origins-header");
    if (!section || !sticky || !track || !panels.length) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 1199px)");
    let maxTranslate = 0;
    let sectionTop = 0;
    let scrollDistance = 0;
    let ticking = false;

    function measure() {
      if (reducedQuery.matches || mobileQuery.matches) {
        section.style.removeProperty("--gallery-height");
        track.style.transform = "";
        panels.forEach((panel) => panel.classList.add("is-active"));
        return;
      }
      maxTranslate = Math.max(track.scrollWidth - window.innerWidth, 0);
      scrollDistance = maxTranslate;
      section.style.setProperty("--gallery-height", `${scrollDistance + window.innerHeight}px`);
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      update();
    }

    function update() {
      if (reducedQuery.matches || mobileQuery.matches) {
        ticking = false;
        return;
      }
      const scrollY = window.scrollY || window.pageYOffset;
      const progress = window.MuseumUtils.clamp((scrollY - sectionTop) / Math.max(scrollDistance, 1), 0, 1);
      track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;
      sticky.style.setProperty("--gallery-progress", progress.toFixed(4));
      setActivePanel(progress);
      header?.classList.toggle("is-gallery", scrollY >= sectionTop && scrollY <= sectionTop + scrollDistance);
      ticking = false;
    }

    function setActivePanel() {
      const viewportCenter = window.innerWidth / 2;
      let active = panels[0];
      let best = Number.POSITIVE_INFINITY;
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        if (distance < best) {
          best = distance;
          active = panel;
        }
      });
      const item = colors.find((color) => color.key === active.dataset.panel) || colors[0];
      panels.forEach((panel) => panel.classList.toggle("is-active", panel === active));
      document.querySelector("[data-current-index]").textContent = `${item.index} / 05`;
      document.querySelector("[data-current-name]").textContent = item.name;
      document.querySelector(".gallery-status").textContent = `${item.name}  ${item.index} / 05`;
      sticky.style.setProperty("--gallery-ui", item.key === "hei" ? "#eee9dd" : "#1c1d1b");
      header.dataset.theme = item.key === "hei" && header.classList.contains("is-gallery") ? "dark" : "light";
      document.querySelectorAll("[data-dot]").forEach((dot) => dot.classList.toggle("is-active", dot.dataset.dot === item.key));
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    window.addEventListener("load", measure);
    measure();
  }

  function initColorDrawer() {
    const drawer = document.querySelector(".color-drawer");
    const backdrop = document.querySelector(".drawer-backdrop");
    const close = document.querySelector(".drawer-close");
    if (!drawer || !backdrop || !close) return;

    document.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-color-detail]");
      if (!chip) return;
      event.preventDefault();
      const data = JSON.parse(decodeURIComponent(chip.dataset.colorDetail));
      renderDrawer(data);
      document.body.classList.add("drawer-open");
      drawer.setAttribute("aria-hidden", "false");
      close.focus({ preventScroll: true });
    });

    [backdrop, close].forEach((node) => node.addEventListener("click", closeDrawer));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("drawer-open")) closeDrawer();
    });
    drawer.querySelectorAll("[data-copy-value]").forEach((button) => {
      button.addEventListener("click", async () => {
        const value = button.querySelector("span")?.textContent?.trim();
        const label = button.querySelector("b");
        if (!value || !label) return;
        try {
          await navigator.clipboard.writeText(value);
          label.textContent = "已拾取";
        } catch (error) {
          label.textContent = "未能拾取";
        }
        setTimeout(() => { label.textContent = "复制"; }, 1500);
      });
    });

    function renderDrawer(data) {
      drawer.style.setProperty("--drawer-color", data.hex);
      drawer.querySelector("#drawer-title").textContent = data.name;
      Object.entries(data).forEach(([key, value]) => {
        const node = drawer.querySelector(`[data-drawer="${key}"]`);
        if (node) node.textContent = value;
      });
    }

    function closeDrawer() {
      document.body.classList.remove("drawer-open");
      drawer.setAttribute("aria-hidden", "true");
    }
  }
})();
