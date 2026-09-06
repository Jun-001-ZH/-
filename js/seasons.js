(function () {
  const terms = window.SolarTermsData || [];
  const state = {
    activeIndex: 0,
    positions: [],
    ticking: false,
    reducedMotion: window.MuseumUtils?.prefersReducedMotion || false,
    lastThemeDark: false,
    drawerTerm: null
  };

  const seasonMeta = {
    spring: {
      name: "春",
      english: "SPRING",
      line: "万物初发，青意渐生。",
      color: "#A8B78C"
    },
    summer: {
      name: "夏",
      english: "SUMMER",
      line: "草木极盛，光色渐浓。",
      color: "#B65343"
    },
    autumn: {
      name: "秋",
      english: "AUTUMN",
      line: "万物成熟，颜色由青转黄。",
      color: "#B89B62"
    },
    winter: {
      name: "冬",
      english: "WINTER",
      line: "繁色渐收，天地归于清寂。",
      color: "#4B5A57"
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("seasons-page") || !terms.length) return;
    renderSeasonOverview();
    renderSolarTerms();
    renderSideNav();
    renderSpectrumWall();
    renderYearRing();
    initSeasonCurtain();
    initTermTracking();
    initHeroParallax();
    initDrawer();
  });

  function renderSeasonOverview() {
    const root = document.querySelector(".season-word-list");
    if (!root) return;
    root.innerHTML = Object.entries(seasonMeta).map(([season, meta]) => {
      const seasonTerms = terms.filter((term) => term.season === season);
      return `
        <button class="season-word reveal reveal-up" type="button" style="--season-word-color:${meta.color}" data-season-target="${season}" data-cursor-text="入时">
          <div><b>${meta.name}</b><small>${meta.english}</small></div>
          <p>${meta.line}</p>
          <ol>${seasonTerms.map((term) => `<li>${term.name}</li>`).join("")}</ol>
        </button>
      `;
    }).join("");
    root.querySelectorAll("[data-season-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const first = terms.find((term) => term.season === button.dataset.seasonTarget);
        if (first) scrollToTerm(first.id);
      });
    });
    initRevealAnimations();
  }

  function renderSolarTerms() {
    const root = document.querySelector(".solar-terms");
    if (!root) return;
    root.innerHTML = terms.map((term) => {
      const sideClass = ["jingzhe", "guyu", "xiazhi", "liqiu", "bailu", "shuangjiang", "xiaohan"].includes(term.id) ? "term-side-right" : "";
      const leftClass = ["xiaoshu", "hanlu", "dongzhi"].includes(term.id) ? "term-side-left" : "";
      const seasonStart = [1, 7, 13, 19].includes(term.index);
      return `
        <article class="solar-term ${sideClass} ${leftClass} ${seasonStart ? "is-season-start" : ""}" id="term-${term.id}" data-term-id="${term.id}" data-season-mark="${seasonStart ? term.seasonName : ""}" style="--term-color:${term.representativeColor.hex}">
          <figure class="solar-term__background" aria-hidden="true">
            <img src="../assets/seasons/${term.id}.jpg" alt="" loading="${term.index === 1 ? "eager" : "lazy"}" decoding="async" fetchpriority="${term.index === 1 ? "high" : "auto"}">
          </figure>
          <div class="solar-term__marker"></div>
          <div class="solar-term__content">
            <span class="solar-term__index">${String(term.index).padStart(2, "0")} / 24</span>
            <h3>${term.name}</h3>
            <span class="solar-term__english">${term.english}</span>
            <div class="solar-term__color">
              <button class="solar-swatch-button" type="button" data-color-term="${term.id}" data-cursor-text="观色" data-cursor-color="${term.representativeColor.hex}" aria-label="查看${term.name}${term.representativeColor.name}色彩详情"></button>
              <span>${term.representativeColor.name}</span>
              <small>${term.representativeColor.hex}</small>
            </div>
            <p class="solar-term__phenology">${term.phenology}</p>
            <p class="solar-term__description">${term.description}</p>
            ${term.emphasis ? `<strong class="solar-term__emphasis">${term.emphasis}</strong>` : ""}
            <div class="solar-term__keywords">${term.keywords.map((item) => `<span>${item}</span>`).join("")}</div>
          </div>
        </article>
        `;
    }).join("");
    root.querySelectorAll("[data-color-term]").forEach((button) => {
      button.addEventListener("click", () => openDrawer(termById(button.dataset.colorTerm)));
    });
    initRevealAnimations();
  }

  function renderSideNav() {
    const root = document.querySelector(".solar-side-nav");
    if (!root) return;
    root.innerHTML = terms.map((term) => `
      <button type="button" style="--term-color:${term.representativeColor.hex}" data-term-id="${term.id}" aria-label="跳至${term.name}">
        <span>${String(term.index).padStart(2, "0")} ${term.name}</span>
      </button>
    `).join("");
    root.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => scrollToTerm(button.dataset.termId));
    });
  }

  function renderSpectrumWall() {
    const root = document.querySelector(".spectrum-wall");
    if (!root) return;
    root.innerHTML = terms.map((term) => `
      <button type="button" style="--term-color:${term.representativeColor.hex};--spectrum-ink:${isLight(term.representativeColor.hex) ? "#1c1d1b" : "#f4f0e8"}" data-color-term="${term.id}" data-cursor-text="观色" data-cursor-color="${term.representativeColor.hex}" aria-label="${term.name} ${term.representativeColor.name} ${term.representativeColor.hex}">
        <span class="spectrum-wall__index">${String(term.index).padStart(2, "0")}</span>
        <span class="spectrum-wall__detail"><b>${term.name}</b><b>${term.representativeColor.name}</b><small>${term.representativeColor.hex}</small></span>
      </button>
    `).join("");
    root.querySelectorAll("[data-color-term]").forEach((button) => {
      button.addEventListener("click", () => openDrawer(termById(button.dataset.colorTerm)));
    });
  }

  function renderYearRing() {
    const root = document.querySelector(".year-ring");
    if (!root) return;
    root.innerHTML = `<div class="year-ring__breath"><div class="year-ring__orbit">${terms.map((term, index) => `
      <i style="--term-color:${term.representativeColor.hex};--angle:${index * 15}deg;--dot-index:${index}" title="${term.name} ${term.representativeColor.name}"><span></span></i>
    `).join("")}</div></div>`;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        root.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0 });
    observer.observe(root);
  }

  function initTermTracking() {
    const timelineSection = document.querySelector(".solar-timeline-section");
    const termNodes = Array.from(document.querySelectorAll(".solar-term"));
    if (!timelineSection || !termNodes.length) return;

    const cache = () => {
      state.positions = termNodes.map((node, index) => ({
        node,
        index,
        id: node.dataset.termId,
        center: node.getBoundingClientRect().top + window.scrollY + node.offsetHeight / 2
      }));
      update();
    };

    const onScroll = () => {
      if (!state.ticking) {
        state.ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", debounce(cache, 160));
    window.addEventListener("load", cache);
    cache();
  }

  function update() {
    const timelineSection = document.querySelector(".solar-timeline-section");
    if (!timelineSection || !state.positions.length) {
      state.ticking = false;
      return;
    }

    const viewportCenter = window.scrollY + window.innerHeight / 2;
    const active = nearestPosition(viewportCenter);
    setActiveTerm(active.index);
    updateTimelineProgress(timelineSection);
    updateSeasonColor(viewportCenter);
    state.ticking = false;
  }

  function nearestPosition(viewportCenter) {
    return state.positions.reduce((best, item) => {
      const distance = Math.abs(item.center - viewportCenter);
      return distance < best.distance ? { ...item, distance } : best;
    }, { ...state.positions[0], distance: Infinity });
  }

  function setActiveTerm(index) {
    if (index < 0 || index >= terms.length) return;
    state.activeIndex = index;
    const term = terms[index];
    document.querySelectorAll(".solar-term").forEach((node, nodeIndex) => {
      node.classList.toggle("is-active", nodeIndex === index);
      node.classList.toggle("is-visible", nodeIndex === index);
    });
    document.querySelectorAll(".solar-side-nav button").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });
    setText(".sticky-season b", term.seasonName);
    setText(".sticky-season span", term.seasonEnglish);
    setText(".sticky-term span", `${String(term.index).padStart(2, "0")} / 24`);
    setText(".sticky-term b", term.name);
    setText(".sticky-term small", term.english);
    setText(".season-status", `${term.seasonName}  ${String(term.index).padStart(2, "0")} / 24  ${term.name}`);
    updateSeasonCurtain(term);

    const sideNav = document.querySelector(".solar-side-nav");
    const inTimeline = isSectionInView(document.querySelector(".solar-timeline-section"));
    const header = document.querySelector(".site-header");
    sideNav?.classList.toggle("is-visible", inTimeline);
    header?.classList.toggle("is-timeline", inTimeline);

    const dark = inTimeline && ["dongzhi", "xiaohan", "dahan"].includes(term.id);
    if (dark !== state.lastThemeDark) {
      state.lastThemeDark = dark;
      document.body.classList.toggle("is-season-dark", dark);
      header?.setAttribute("data-theme", dark ? "dark" : "light");
    }
  }

  function updateTimelineProgress(section) {
    const start = section.offsetTop + 320;
    const end = section.offsetTop + section.offsetHeight - window.innerHeight * 0.72;
    const progress = clamp((window.scrollY - start) / Math.max(end - start, 1), 0, 1);
    document.documentElement.style.setProperty("--timeline-progress", progress.toFixed(4));
  }

  function updateSeasonColor(viewportCenter) {
    if (state.reducedMotion) {
      const term = terms[state.activeIndex];
      applySeasonVars(term.bgColor, term.representativeColor.hex, isLight(term.bgColor) ? "#242723" : "#EEE9DD");
      return;
    }
    const positions = state.positions;
    let index = 0;
    for (let i = 0; i < positions.length - 1; i += 1) {
      if (viewportCenter >= positions[i].center && viewportCenter <= positions[i + 1].center) {
        index = i;
        break;
      }
      if (viewportCenter > positions[i + 1].center) index = i + 1;
    }
    const lastPosition = positions[positions.length - 1]?.center || 0;
    if (viewportCenter > lastPosition) {
      const last = terms[terms.length - 1];
      const amount = smoothstep(clamp((viewportCenter - lastPosition) / (window.innerHeight * 2.8), 0, 1));
      const bg = mixHex(last.bgColor, "#E7E8DF", amount);
      const accent = mixHex(last.representativeColor.hex, "#A8B78C", amount);
      applySeasonVars(bg, accent, isLight(bg) ? "#242723" : "#EEE9DD");
      return;
    }

    const current = terms[index];
    const next = terms[Math.min(index + 1, terms.length - 1)];
    const currentPos = positions[index]?.center || 0;
    const nextPos = positions[Math.min(index + 1, positions.length - 1)]?.center || currentPos + 1;
    const raw = (viewportCenter - currentPos) / Math.max(nextPos - currentPos, 1);
    const amount = smoothstep(clamp((raw - 0.35) / 0.3, 0, 1));
    const bg = mixHex(current.bgColor, next.bgColor, amount);
    const accent = mixHex(current.representativeColor.hex, next.representativeColor.hex, amount);
    const text = isLight(bg) ? "#242723" : "#EEE9DD";
    applySeasonVars(bg, accent, text);
  }

  function applySeasonVars(bg, accent, text) {
    const root = document.body;
    root.style.setProperty("--season-bg", bg);
    root.style.setProperty("--season-accent", accent);
    root.style.setProperty("--season-text", text);
    root.style.setProperty("--cursor-color", accent);
  }

  function initSeasonCurtain() {
    updateSeasonCurtain(terms[state.activeIndex] || terms[0]);
  }

  function updateSeasonCurtain(term) {
    const curtain = document.querySelector(".season-curtain");
    if (!curtain || !term) return;
  curtain.style.setProperty("--curtain-color", term.representativeColor.hex);
  curtain.style.setProperty("--curtain-soft", mixHex(term.representativeColor.hex, "#FFFFFF", .62));
  curtain.style.setProperty("--curtain-progress", String((term.index - 1) / Math.max(terms.length - 1, 1)));
}

  function riverPalette(term, next) {
    const seasonalBase = {
      spring: ["#A8B78C", "#D1C767", "#496E64"],
      summer: ["#B65343", "#D89A65", "#5D7D6C"],
      autumn: ["#B89B62", "#C87958", "#4B5A57"],
      winter: ["#647B80", "#B9CDD0", "#26373A"]
    };
    const base = seasonalBase[term.season] || seasonalBase.spring;
    return {
      primary: mixHex(base[0], term.representativeColor.hex, .62),
      secondary: mixHex(base[1], next.representativeColor.hex, .22),
      shadow: base[2]
    };
  }

  function createRiverRenderer(river) {
    const canvas = river.querySelector(".time-river__canvas");
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return null;

    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    let paused = false;
    let palette = riverPalette(terms[0], terms[1] || terms[0]);

    const resize = () => {
      const rect = river.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(Math.round(rect.width), 1);
      height = Math.max(Math.round(rect.height), 1);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (state.reducedMotion) draw(0);
    };

    const positionAt = (t, lane, time) => {
      const direction = window.matchMedia("(max-width: 768px)").matches ? 0.15 : 0.38;
      const crest = Math.sin(t * 7.2 + time * (0.45 + lane * 0.04)) * height * .055;
      const ripple = Math.sin(t * 18 - time * (0.72 + lane * .05)) * height * .012;
      return {
        x: t * width,
        y: height * (.86 - t * (.44 + direction)) + lane * height * .115 + crest + ripple
      };
    };

    const drawBand = (lane, time, fill, alpha) => {
      const samples = 48;
      const bandWidth = height * (.17 - lane * .008);
      context.beginPath();
      for (let step = 0; step <= samples; step += 1) {
        const point = positionAt(step / samples, lane, time);
        const y = point.y - bandWidth * .5;
        if (!step) context.moveTo(point.x, y);
        else context.lineTo(point.x, y);
      }
      for (let step = samples; step >= 0; step -= 1) {
        const point = positionAt(step / samples, lane, time);
        context.lineTo(point.x, point.y + bandWidth * .5);
      }
      context.closePath();
      const gradient = context.createLinearGradient(0, height, width, 0);
      gradient.addColorStop(0, `${fill}00`);
      gradient.addColorStop(.18, `${fill}${Math.round(alpha * .62).toString(16).padStart(2, "0")}`);
      gradient.addColorStop(.56, `${fill}${Math.round(alpha).toString(16).padStart(2, "0")}`);
      gradient.addColorStop(1, `${fill}${Math.round(alpha * .36).toString(16).padStart(2, "0")}`);
      context.fillStyle = gradient;
      context.fill();
      context.strokeStyle = "rgba(255,255,255,.56)";
      context.lineWidth = 1.1;
      context.stroke();
    };

    const drawGlints = (lane, time) => {
      for (let index = 0; index < 5; index += 1) {
        const travel = (index / 5 + time * (.022 + lane * .002)) % 1;
        const point = positionAt(travel, lane, time);
        const radius = 1.4 + (Math.sin(time * 2.4 + index) + 1) * .8;
        const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 5);
        glow.addColorStop(0, "rgba(255,255,255,.88)");
        glow.addColorStop(1, "rgba(255,255,255,0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(point.x, point.y, radius * 5, 0, Math.PI * 2);
        context.fill();
      }
    };

    const draw = (now) => {
      frame = 0;
      const delta = Math.min((now - last) / 1000 || 0, .05);
      last = now;
      if (!paused && !state.reducedMotion) elapsed += delta;
      context.clearRect(0, 0, width, height);
      const colors = [
        palette.primary,
        mixHex(palette.secondary, "#C66555", .38),
        palette.secondary,
        mixHex(palette.shadow, "#7FB0B9", .48),
        mixHex(palette.primary, "#FFFFFF", .74)
      ];
      colors.forEach((color, lane) => drawBand(lane, elapsed, color, lane === 4 ? 98 : 182 - lane * 12));
      for (let lane = 0; lane < 4; lane += 1) drawGlints(lane, elapsed);
      if (!paused && !state.reducedMotion) frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(river);
    resize();
    draw(performance.now());

    return {
      setPalette(nextPalette) {
        palette = nextPalette;
        if (paused || state.reducedMotion) draw(performance.now());
      },
      setPaused(nextPaused) {
        paused = nextPaused;
        if (paused && frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
        if (!paused && !state.reducedMotion && !frame) frame = requestAnimationFrame(draw);
      }
    };
  }

  function initHeroParallax() {
    const hero = document.querySelector(".seasons-hero");
    const copy = document.querySelector(".seasons-hero__copy");
    const curtain = document.querySelector(".season-curtain");
    if (!hero || !copy || !curtain || state.reducedMotion) return;
    let ticking = false;
    function render() {
      const rect = hero.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
      copy.style.transform = `translateY(${-progress * 50}px)`;
      curtain.style.transform = `translate3d(${progress * 12}px, ${progress * 22}px, 0)`;
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    }, { passive: true });
    render();
  }

  function initDrawer() {
    const drawer = document.querySelector(".solar-color-drawer");
    const backdrop = document.querySelector(".solar-drawer-backdrop");
    const close = document.querySelector(".solar-drawer-close");
    if (!drawer || !backdrop || !close) return;
    [backdrop, close].forEach((node) => node.addEventListener("click", closeDrawer));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
    drawer.addEventListener("click", (event) => {
      const copy = event.target.closest("[data-copy-solar]");
      if (copy) copyText(copy.dataset.copySolar, copy);
    });
  }

  function openDrawer(term) {
    const drawer = document.querySelector(".solar-color-drawer");
    if (!term || !drawer) return;
    state.drawerTerm = term;
    drawer.style.setProperty("--drawer-color", term.representativeColor.hex);
    drawer.querySelector(".solar-drawer-content").innerHTML = `
      <p>${term.representativeColor.pinyin}</p>
      <h2 id="solar-drawer-title">${term.representativeColor.name}</h2>
      <p>本馆数字参考色</p>
      <div class="solar-drawer-values">
        <button type="button" data-copy-solar="${term.representativeColor.hex}">${term.representativeColor.hex} <b>复制 HEX</b></button>
      </div>
      <p>对应节气：${term.name} · ${term.english}</p>
      <p>${term.note}</p>
    `;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    drawer.querySelector(".solar-drawer-close")?.focus({ preventScroll: true });
  }

  function closeDrawer() {
    const drawer = document.querySelector(".solar-color-drawer");
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
  }

  async function copyText(value, button) {
    const original = button.innerHTML;
    try {
      await navigator.clipboard.writeText(value);
      button.innerHTML = "已拾取";
    } catch (error) {
      button.innerHTML = "未能拾取";
    }
    window.setTimeout(() => { button.innerHTML = original; }, 1200);
  }

  function scrollToTerm(id) {
    const target = document.getElementById(`term-${id}`);
    if (!target) return;
    const offset = window.matchMedia("(max-width: 768px)").matches ? 118 : 96;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: state.reducedMotion ? "auto" : "smooth"
    });
  }

  function termById(id) {
    return terms.find((term) => term.id === id);
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function isSectionInView(section) {
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.bottom > 120 && rect.top < window.innerHeight - 120;
  }

  function debounce(fn, delay) {
    let timer = 0;
    return () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(fn, delay);
    };
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function smoothstep(value) {
    return value * value * (3 - 2 * value);
  }

  function mixHex(a, b, amount) {
    const ca = hexToRgb(a);
    const cb = hexToRgb(b);
    const mixed = ca.map((channel, index) => Math.round(channel + (cb[index] - channel) * amount));
    return `#${mixed.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
  }

  function hexToRgb(hex) {
    const value = hex.replace("#", "");
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16)
    ];
  }

  function isLight(hex) {
    const [r, g, b] = hexToRgb(hex);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }
})();
