(function () {
  const data = window.ArtifactMuseumData || { categories: [], artifacts: [] };
  const state = {
    activeArtifact: null,
    activeLabArtifact: null,
    found: {},
    picked: readPicked(),
    lastTrigger: null,
    lockScrollY: 0,
    activeSectionId: "",
    navLockId: "",
    navLockUntil: 0
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("artifacts-page")) return;
    renderMaterialBands();
    renderFeatured();
    renderZoneNav();
    renderZones();
    initDialog();
    initLab();
    initPickedColors();
    initSectionTracking();
    initHeroParallaxLocal();
    initPaintingReveal();
  });

  function renderMaterialBands() {
    const root = document.querySelector(".material-bands");
    if (!root) return;
    const textures = {
      ceramic: "radial-gradient(circle at 20% 40%, rgba(255,255,255,.38) 0 1px, transparent 2px), repeating-linear-gradient(112deg, transparent 0 18px, rgba(28,29,27,.05) 19px 20px)",
      costume: "repeating-linear-gradient(90deg, rgba(255,255,255,.1) 0 1px, transparent 1px 7px), repeating-linear-gradient(0deg, rgba(28,29,27,.06) 0 1px, transparent 1px 9px)",
      painting: "radial-gradient(circle at 28% 34%, rgba(79,117,134,.2), transparent 18%), radial-gradient(circle at 68% 48%, rgba(102,132,106,.18), transparent 20%)",
      architecture: "linear-gradient(90deg, rgba(150,60,52,.2), transparent 42%), repeating-linear-gradient(0deg, rgba(28,29,27,.08) 0 1px, transparent 1px 34px)"
    };
    const bgs = {
      ceramic: "#dfe8e5",
      costume: "#ead9cb",
      painting: "#f5f0e5",
      architecture: "#ded9cf"
    };
    root.innerHTML = data.categories.map((cat) => `
      <button class="material-band material-band--${cat.id}" type="button" data-scroll-target="${cat.id}-section" data-cursor-text="入展" style="--band-bg:${bgs[cat.id]};--band-texture:${textures[cat.id]}">
        <span>${cat.number}</span>
        <div><h3>${cat.title}</h3><p>${cat.material}</p></div>
        <b aria-hidden="true">→</b>
      </button>
    `).join("");
    root.querySelectorAll("[data-scroll-target]").forEach((button) => {
      button.addEventListener("click", () => scrollToId(button.dataset.scrollTarget));
    });
  }

  function renderFeatured() {
    const root = document.querySelector(".featured-layout");
    if (!root) return;
    root.innerHTML = data.artifacts.filter((item) => item.featured).slice(0, 4).map((item, index) => `
      <article class="featured-artifact reveal reveal-up" data-artifact-id="${item.id}" data-cursor-text="寻色">
        <img src="${item.image}" alt="${item.imageAlt}" loading="${index === 0 ? "eager" : "lazy"}">
        <div class="featured-artifact__caption">
          <small>${String(index + 1).padStart(2, "0")} · ${categoryName(item.category).toUpperCase()}</small>
          <strong>${item.name}</strong>
          <small>${item.dynasty}</small>
        </div>
        <button class="artifact-explore-trigger" type="button" aria-label="探索${item.name}中的颜色"></button>
      </article>
    `).join("");
    root.querySelectorAll(".artifact-explore-trigger").forEach((button) => {
      button.addEventListener("click", (event) => openDialog(event.target.closest("[data-artifact-id]").dataset.artifactId, button));
    });
  }

  function renderZoneNav() {
    const side = document.querySelector(".artifact-side-nav");
    const mobile = document.querySelector(".artifact-mobile-nav");
    const html = data.categories.map((cat) => `<button type="button" data-scroll-target="${cat.id}-section" style="--nav-color:${cat.palette[0]}">${cat.number} ${cat.name}</button>`).join("");
    if (side) side.innerHTML = html;
    if (mobile) mobile.innerHTML = data.categories.map((cat) => `<button type="button" data-scroll-target="${cat.id}-section">${cat.name}</button>`).join("");
    document.querySelectorAll(".artifact-side-nav button, .artifact-mobile-nav button").forEach((button) => {
      button.addEventListener("click", () => scrollToId(button.dataset.scrollTarget));
    });
  }

  function renderZones() {
    const root = document.querySelector(".artifact-zones");
    if (!root) return;
    root.innerHTML = data.categories.map((cat) => {
      const items = data.artifacts.filter((item) => item.category === cat.id);
      const hero = items[0];
      const zoneImage = hero.zoneImage || hero.image;
      const zoneImageAlt = hero.zoneImageAlt || hero.imageAlt;
      const zoneColors = hero.zoneColors || hero.colors;
      return `
        <section class="artifact-zone artifact-zone--${cat.id}" id="${cat.id}-section" data-category="${cat.id}" style="--zone-bg:${zoneBg(cat.id)};--zone-accent:${cat.palette[0]}">
          <div class="zone-head reveal reveal-up">
            <span class="zone-head__number">${cat.number}</span>
            <div><h2>${cat.title}</h2><p>${cat.line}</p><p>${cat.english}</p></div>
          </div>
          <div class="zone-hero reveal reveal-up">
            <figure class="zone-hero__image" data-cursor-text="${cat.id === "costume" ? "观纹" : "观器"}">
              <img src="${zoneImage}" alt="${zoneImageAlt}" loading="lazy">
              ${pointsHtml(zoneColors)}
              ${cat.id === "painting" ? '<span class="painting-reveal" aria-hidden="true"></span>' : ""}
            </figure>
            <div>
              <div class="zone-hero__facts">
                ${zoneFacts(cat.id).map((fact, index) => `<span data-index="${String(index + 1).padStart(2, "0")}">${fact}</span>`).join("")}
              </div>
              <p class="zone-note">${zoneNote(cat.id)}</p>
            </div>
          </div>
          ${cat.id === "costume" ? costumeBand(cat.palette) : ""}
          <div class="artifact-grid">
            ${items.map((item) => cardHtml(item)).join("")}
          </div>
        </section>`;
    }).join("");
    root.querySelectorAll(".artifact-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest(".artifact-point")) return;
        openDialog(card.dataset.artifactId, card);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter") openDialog(card.dataset.artifactId, card);
      });
    });
    initRevealAnimations();
  }

  function cardHtml(item) {
    return `
      <article class="artifact-card reveal reveal-up" tabindex="0" data-artifact-id="${item.id}" data-cursor-text="寻色">
        <img src="${item.image}" alt="${item.imageAlt}" loading="lazy">
        <div class="artifact-card__caption">
          <strong>${item.name}</strong>
          <small>${item.dynasty} · ${categoryName(item.category)}</small>
        </div>
      </article>`;
  }

  function pointsHtml(colors) {
    return colors.map((color) => `
      <button class="artifact-point" type="button" style="--x:${color.x}%;--y:${color.y}%;--tone:${color.hex}" data-color-id="${color.id}" data-color-name="${color.name}" data-color-hex="${color.hex}" data-cursor-text="拾色" data-cursor-color="${color.hex}" aria-label="查看${color.name}数字参考色"><span></span></button>
    `).join("");
  }

  function initDialog() {
    const dialog = document.querySelector(".artifact-dialog");
    const backdrop = document.querySelector(".artifact-dialog-backdrop");
    const close = document.querySelector(".artifact-dialog__close");
    if (!dialog || !backdrop || !close) return;
    [backdrop, close].forEach((node) => node.addEventListener("click", closeDialog));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.classList.contains("is-open")) closeDialog();
    });
    dialog.addEventListener("click", (event) => {
      const point = event.target.closest(".artifact-point");
      const copy = event.target.closest("[data-copy-color]");
      if (copy) {
        copyText(copy.dataset.copyColor, copy);
        return;
      }
      if (point && state.activeArtifact) {
        const color = state.activeArtifact.colors.find((item) => item.id === point.dataset.colorId);
        if (color) renderDialogColor(color, state.activeArtifact);
      }
    });
  }

  function openDialog(id, trigger) {
    const artifact = byId(id);
    const dialog = document.querySelector(".artifact-dialog");
    if (!artifact || !dialog) return;
    state.activeArtifact = artifact;
    state.lastTrigger = trigger;
    dialog.querySelector(".artifact-dialog__image img").src = artifact.image;
    dialog.querySelector(".artifact-dialog__image img").alt = artifact.imageAlt;
    dialog.querySelector(".dialog-points").innerHTML = pointsHtml(artifact.colors);
    dialog.querySelector("#artifact-dialog-title").textContent = artifact.name;
    dialog.querySelector("[data-dialog-category]").textContent = `${categoryName(artifact.category)} · 数字参考色`;
    dialog.querySelector("[data-dialog-dynasty]").textContent = artifact.dynasty;
    dialog.querySelector("[data-dialog-material]").textContent = artifact.material;
    dialog.querySelector("[data-dialog-technique]").textContent = artifact.technique;
    dialog.querySelector("[data-dialog-description]").textContent = artifact.description;
    renderDialogColor(artifact.colors[0], artifact);
    dialog.classList.add("is-open");
    dialog.setAttribute("aria-hidden", "false");
    lockPageScroll();
    dialog.querySelector(".artifact-dialog__close").focus({ preventScroll: true });
  }

  function closeDialog() {
    const dialog = document.querySelector(".artifact-dialog");
    if (!dialog) return;
    dialog.classList.remove("is-open");
    dialog.setAttribute("aria-hidden", "true");
    const trigger = state.lastTrigger;
    trigger?.focus?.({ preventScroll: true });
    unlockPageScroll();
  }

  function renderDialogColor(color, artifact) {
    const root = document.querySelector(".dialog-color-detail");
    if (!root) return;
    root.innerHTML = `
      <div class="artifact-color-panel" style="--detail-color:${color.hex}">
        <i aria-hidden="true"></i>
        <strong>${color.name}</strong>
        <span>${color.pinyin} · ${color.hex}</span>
        <p>${color.usage}。${color.meaning}。数字色值只是屏幕展示参考，不等同于真实器物表面的全部颜色。</p>
        <div class="artifact-color-actions"><button type="button" data-copy-color="${color.hex}">复制 HEX</button></div>
        <button type="button" data-pick-color>收入我的拾色</button>
      </div>`;
    root.querySelector("[data-pick-color]").addEventListener("click", () => pickColor(color, artifact));
  }

  function initLab() {
    const selector = document.querySelector(".lab-selector");
    if (!selector) return;
    const featured = data.artifacts.filter((item) => item.featured).slice(0, 4);
    selector.innerHTML = featured.map((item, index) => `<button type="button" data-lab-id="${item.id}"><strong>${categoryName(item.category)}</strong><span>${String(index + 1).padStart(2, "0")} ${item.name}</span></button>`).join("");
    selector.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => setLabArtifact(button.dataset.labId)));
    document.querySelector(".lab-points")?.addEventListener("click", (event) => {
      const point = event.target.closest(".artifact-point");
      if (!point || !state.activeLabArtifact) return;
      const color = labColors(state.activeLabArtifact).find((item) => item.id === point.dataset.colorId);
      if (!color) return;
      state.found[state.activeLabArtifact.id] ||= new Set();
      state.found[state.activeLabArtifact.id].add(color.id);
      renderLabColor(color, state.activeLabArtifact);
    });
    setLabArtifact(featured[0]?.id);
  }

  function setLabArtifact(id) {
    const artifact = byId(id);
    if (!artifact) return;
    state.activeLabArtifact = artifact;
    const stage = document.querySelector(".lab-stage");
    const image = stage?.querySelector("img");
    if (!stage || !image) return;
    image.style.opacity = "0";
    setTimeout(() => {
      image.src = artifact.image;
      image.alt = artifact.imageAlt;
      image.style.opacity = "1";
      document.querySelector(".lab-points").innerHTML = pointsHtml(labColors(artifact));
      renderLabDefault(artifact);
    }, 180);
    document.querySelectorAll("[data-lab-id]").forEach((button) => button.classList.toggle("is-active", button.dataset.labId === id));
  }

  function renderLabDefault(artifact) {
    const root = document.querySelector(".lab-result");
    const found = state.found[artifact.id]?.size || 0;
    root.innerHTML = `<p>选择一个色点</p><h3>查看它来自器物的何处</h3><span>已发现 <b data-found-count>${found} / ${labColors(artifact).length}</b> 色</span>`;
  }

  function renderLabColor(color, artifact) {
    const found = state.found[artifact.id]?.size || 0;
    const done = found === labColors(artifact).length ? "<p>此器之色，已悉数拾取。</p>" : "";
    document.querySelector(".lab-result").innerHTML = `
      <div class="color-detail-card" style="--detail-color:${color.hex}">
        <i aria-hidden="true"></i>
        <small>${color.pinyin} · ${color.hex}</small>
        <strong>${color.name}</strong>
        <p>${color.usage}。${color.meaning}。</p>
        <div class="artifact-color-actions"><button type="button" data-copy-color="${color.hex}">复制 HEX</button></div>
        <button type="button" data-pick-color>收入我的拾色</button>
        <span>已发现 <b>${found} / ${artifact.colors.length}</b> 色</span>
        ${done}
      </div>`;
    document.querySelector(".lab-result [data-pick-color]").addEventListener("click", () => pickColor(color, artifact));
    document.querySelectorAll(".lab-result [data-copy-color]").forEach((button) => {
      button.addEventListener("click", () => copyText(button.dataset.copyColor, button));
    });
  }

  function initPickedColors() {
    renderPickedColors();
  }

  function pickColor(color, artifact) {
    const key = `${artifact.id}:${color.id}`;
    if (!state.picked.some((item) => item.key === key)) {
      state.picked.push({ key, artifactId: artifact.id, artifactName: artifact.name, ...color });
      savePicked();
      renderPickedColors();
    }
    const button = document.activeElement?.matches?.("[data-pick-color]") ? document.activeElement : null;
    if (button) {
      button.textContent = "已收入";
      setTimeout(() => { button.textContent = "收入我的拾色"; }, 1400);
    }
  }

  function renderPickedColors() {
    const root = document.querySelector(".picked-colors");
    if (!root) return;
    if (!state.picked.length) {
      root.innerHTML = `<div class="picked-empty"><p>尚未拾得颜色。<br>去文物中寻找一抹喜欢的色。</p><button type="button" data-scroll-target="artifact-lab">继续寻色 ↑</button></div>`;
      root.querySelector("button").addEventListener("click", () => scrollToId("artifact-lab"));
      return;
    }
    root.innerHTML = `
      <div class="picked-board">
        <aside class="picked-summary">
          <span>MY PALETTE</span>
          <strong>${state.picked.length} 色入藏</strong>
          <p>从器物色点中暂存的个人色谱，可复制色值，也可随时移除后重新拾取。</p>
          <button class="line-button" type="button" data-clear-picks>清空拾色 <span>→</span></button>
        </aside>
        <div class="picked-strip">
          ${state.picked.map((item, index) => `<article class="picked-color" style="--picked-color:${item.hex};--picked-ink:${isLight(item.hex) ? "#1c1d1b" : "#f4f0e8"}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.name}</strong>
            <small>${item.hex}</small>
            <em>${item.artifactName}</em>
            <div class="picked-color__actions">
              <button type="button" data-copy-color="${item.hex}">复制</button>
              <button type="button" data-remove-pick="${item.key}">移除</button>
            </div>
          </article>`).join("")}
        </div>
      </div>`;
    root.querySelectorAll("[data-remove-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        state.picked = state.picked.filter((item) => item.key !== button.dataset.removePick);
        savePicked();
        renderPickedColors();
      });
    });
    root.querySelectorAll("[data-copy-color]").forEach((button) => {
      button.addEventListener("click", () => copyText(button.dataset.copyColor, button));
    });
    root.querySelector("[data-clear-picks]")?.addEventListener("click", () => {
      state.picked = [];
      savePicked();
      renderPickedColors();
    });
  }

  function initSectionTracking() {
    const sections = Array.from(document.querySelectorAll(".artifact-zone"));
    const side = document.querySelector(".artifact-side-nav");
    if (!sections.length) return;
    let ticking = false;
    function update() {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      const viewportTop = mobile ? 142 : 72;
      const viewportBottom = window.innerHeight;
      const readings = sections.map((section) => {
        const rect = section.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop));
        return {
          id: section.id,
          node: section,
          visible,
          top: rect.top
        };
      });
      if (state.navLockId && Date.now() < state.navLockUntil) {
        setSectionNavActive(state.navLockId);
        side?.classList.toggle("is-visible", !mobile);
        ticking = false;
        return;
      }
      state.navLockId = "";
      let active = readings.reduce((best, item) => item.visible > best.visible ? item : best, readings[0]);
      if (mobile) {
        const activationLine = viewportTop + 28;
        readings.forEach((item) => {
          if (item.top <= activationLine) active = item;
        });
      }
      const inRange = readings.some((item) => item.visible > 0);
      if (!inRange) {
        document.querySelectorAll(".artifact-side-nav button, .artifact-mobile-nav button").forEach((button) => {
          button.classList.remove("is-active");
        });
        state.activeSectionId = "";
      }
      const id = active.id;
      if (inRange && id !== state.activeSectionId) {
        setSectionNavActive(id);
      }
      side?.classList.toggle("is-visible", inRange && !mobile);
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    document.querySelectorAll(".artifact-zone img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", update, { once: true });
    });
    update();
  }

  function initHeroParallaxLocal() {
    const hero = document.querySelector(".artifacts-hero");
    const copy = document.querySelector(".artifacts-hero__copy");
    const image = document.querySelector(".hero-artifact");
    if (!hero || !copy || !image || window.MuseumUtils.prefersReducedMotion || window.matchMedia("(max-width: 1024px)").matches) return;
    let ticking = false;
    function update() {
      const rect = hero.getBoundingClientRect();
      const progress = window.MuseumUtils.clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
      copy.style.transform = `translateY(${-progress * 60}px)`;
      image.style.transform = `translateY(${-progress * 35}px)`;
      image.style.opacity = String(1 - progress * 0.18);
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.setTimeout(update, 1700);
  }

  function initPaintingReveal() {
    document.addEventListener("pointermove", (event) => {
      const target = event.target.closest(".artifact-zone--painting .zone-hero__image");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--paint-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      target.style.setProperty("--paint-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    }, { passive: true });
  }

  function costumeBand(palette) {
    const names = ["朱砂", "绛红", "胭脂", "秋香", "石青", "黛青"];
    const colors = ["#A83B32", "#7A3436", "#9E4F4F", "#B19A61", "#4F7586", "#445C5A"];
    return `<div class="costume-band" aria-label="服饰颜色织带">${names.map((name, index) => `<button type="button" style="--strip-color:${colors[index]};--strip-ink:${isLight(colors[index]) ? "#1c1d1b" : "#f4f0e8"}"><span>${name}<small>${colors[index]}</small></span></button>`).join("")}</div>`;
  }

  function byId(id) {
    return data.artifacts.find((item) => item.id === id);
  }

  function labColors(artifact) {
    return artifact.labColors || artifact.colors;
  }

  function categoryName(id) {
    return data.categories.find((cat) => cat.id === id)?.name || id;
  }

  function zoneBg(id) {
    return { ceramic: "#eef3f0", costume: "#f2e6d8", painting: "#f7f2e8", architecture: "#e8e3db" }[id] || "#f4f0e8";
  }

  function zoneFacts(id) {
    return {
      ceramic: ["釉色", "火候", "胎土", "矿物", "窑变"],
      costume: ["染 · 染色", "织 · 织造", "绣 · 刺绣", "纹 · 纹样"],
      painting: ["石青", "石绿", "朱砂", "赭石", "墨"],
      architecture: ["墙", "瓦", "梁", "门", "石"]
    }[id] || [];
  }

  function zoneNote(id) {
    return {
      ceramic: "同一个“天青”并不是简单 HEX 值。光线、釉层、烧制状态和图片采集都会产生视觉差异，数字色值只是展示参考。",
      costume: "颜色进入织物后，会随纤维方向、刺绣密度与反光角度改变。色点标出纹样中的关键成色位置，便于逐处观看。",
      painting: "书画不是只看完整画卷。局部显色会让矿物颜料、纸绢肌理和墨线层次从画面里慢慢浮出。",
      architecture: "建筑色彩落在墙、瓦、梁枋与石基之上。色点沿着真实构件布置，帮助看见空间如何被颜色组织。"
    }[id] || "";
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;
    state.navLockId = id;
    state.navLockUntil = Date.now() + 1600;
    setSectionNavActive(id);
    const alignTarget = (behavior = "smooth") => {
      const offset = window.matchMedia("(max-width: 768px)").matches ? 142 : 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior });
    };
    alignTarget();
    [320, 780, 1280].forEach((delay) => {
      window.setTimeout(() => {
        if (Date.now() <= state.navLockUntil + 120) alignTarget("auto");
      }, delay);
    });
  }

  function setSectionNavActive(id) {
    state.activeSectionId = id;
    document.querySelectorAll(".artifact-side-nav button, .artifact-mobile-nav button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.scrollTarget === id);
    });
  }

  function readPicked() {
    try {
      return JSON.parse(localStorage.getItem("ccm-artifact-colors")) || [];
    } catch (error) {
      return [];
    }
  }

  function savePicked() {
    localStorage.setItem("ccm-artifact-colors", JSON.stringify(state.picked));
  }

  function lockPageScroll() {
    state.lockScrollY = window.scrollY || window.pageYOffset;
    document.documentElement.classList.add("artifact-dialog-open");
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("artifact-dialog-open");
  }

  function unlockPageScroll() {
    const y = state.lockScrollY;
    document.documentElement.classList.remove("artifact-dialog-open");
    document.documentElement.style.overflow = "";
    document.body.classList.remove("artifact-dialog-open");
    window.scrollTo(0, y);
    requestAnimationFrame(() => window.scrollTo(0, y));
    setTimeout(() => window.scrollTo(0, y), 80);
  }

  async function copyText(value, button) {
    if (!value) return;
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "已复制";
    } catch (error) {
      button.textContent = "未复制";
    }
    setTimeout(() => { button.textContent = original; }, 1200);
  }

  function isLight(hex) {
    const value = hex.replace("#", "");
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }
})();
