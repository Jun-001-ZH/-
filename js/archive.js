(function () {
  const colors = (window.ArchiveColorData || []).map((color) => ({ ...color }));
  const palettes = window.ArchivePaletteData || [];
  const familyOrder = ["白", "黄", "棕", "赤", "紫", "青", "绿", "蓝", "灰", "黑"];
  const storageKey = "ccm-collected-colors";
  const paletteStorageKey = "ccm-saved-palettes";
  const legacyKeys = ["ccm-artifact-colors", "ccm-archive-colors"];
  const state = {
    search: "",
    family: "all",
    dynasty: "all",
    category: "all",
    sort: "default",
    view: "standard",
    archiveExpanded: false,
    selected: [],
    composerTouched: false,
    pickerSlot: 0,
    pickerTab: "picked",
    drawerColor: null,
    lastTrigger: null,
    toastTimer: 0
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("archive-page")) return;
    prepareData();
    readParams();
    validateColorDatabase();
    renderHeroSpines();
    renderHeroStats();
    renderSpectrum();
    renderFilters();
    initSearch();
    initDrawer();
    initFilterSheet();
    initComposerPicker();
    initViewSwitch();
    initClosingLinks();
    updateArchive();
    renderPicked();
    renderClassicPalettes();
    renderComposer();
    renderObservations();
    initObservationMotion();
    initClosingMotion();
    openInitialHash();
    window.addEventListener("resize", debounce(() => {
      if (!state.archiveExpanded) updateArchive();
    }, 180));
  });

  function prepareData() {
    colors.forEach((color) => {
      color.rgbTuple = color.rgb.split(",").map((item) => Number(item.trim()));
      color.hue = hslFromHex(color.hex).h;
      color.lightness = hslFromHex(color.hex).l;
      color.searchText = [color.name, color.pinyin, color.family, color.source, color.dynasty.join(" "), color.categories.join(" "), color.meaning.join(" ")].join(" ").toLowerCase();
    });
  }

  function renderHeroSpines() {
    const root = document.querySelector("[data-archive-spines]");
    const tip = document.querySelector("[data-spine-tip]");
    if (!root) return;
    const amount = heroSpineAmount();
    root.dataset.amount = String(amount);
    root.innerHTML = colors.slice(0, amount).map((color, index) => `
      <button class="archive-spine" type="button" style="--spine-color:${color.hex};--spine-width:${8 + (index % 6) * 4}px;--spine-height:${24 + ((index * 17) % 48)}vh;--spine-delay:${index * 28}ms" data-color-id="${color.id}" data-cursor-text="拾色" data-cursor-color="${color.hex}" aria-label="${color.name} ${color.hex}"></button>
    `).join("");
    if (!root.dataset.heroBound) {
      root.dataset.heroBound = "true";
      root.addEventListener("pointerover", (event) => {
        const spine = event.target.closest(".archive-spine");
        if (!spine || !tip) return;
        const color = findColor(spine.dataset.colorId);
        tip.innerHTML = `<strong>${color.name}</strong><br><span>${color.hex}</span>`;
        tip.classList.add("is-visible");
      });
      root.addEventListener("pointermove", (event) => {
        if (!tip) return;
        tip.style.left = `${event.clientX + 18}px`;
        tip.style.top = `${event.clientY + 18}px`;
      }, { passive: true });
      root.addEventListener("pointerleave", () => tip?.classList.remove("is-visible"));
      root.addEventListener("click", (event) => {
        const spine = event.target.closest(".archive-spine");
        if (spine) jumpToColor(spine.dataset.colorId, true);
      });
    }
    if (!root.dataset.resizeBound) {
      root.dataset.resizeBound = "true";
      window.addEventListener("resize", debounce(() => {
        const nextAmount = heroSpineAmount();
        if (root.dataset.amount !== String(nextAmount)) renderHeroSpines();
      }, 180));
    }
  }

  function heroSpineAmount() {
    if (window.matchMedia("(max-width: 620px)").matches) return 34;
    if (window.matchMedia("(max-width: 900px)").matches) return 46;
    if (window.matchMedia("(max-width: 1180px)").matches) return 58;
    return 72;
  }

  function renderHeroStats() {
    setCount("total", colors.length);
    setCount("families", unique(colors.map((color) => color.family)).length);
    setCount("categories", unique(colors.flatMap((color) => color.categories)).length);
    document.querySelectorAll("[data-count-to]").forEach((node) => animateCount(node, Number(node.dataset.countTo || node.textContent || 0)));
  }

  function setCount(key, value) {
    const node = document.querySelector(`[data-stat="${key}"]`);
    if (node) node.dataset.countTo = String(value);
  }

  function animateCount(node, target) {
    const start = performance.now();
    const duration = 1100;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      node.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1 && !window.MuseumUtils?.prefersReducedMotion) requestAnimationFrame(step);
      else node.textContent = String(target);
    };
    requestAnimationFrame(step);
  }

  function renderSpectrum() {
    const root = document.querySelector("[data-spectrum]");
    if (!root) return;
    const sorted = [...colors].sort((a, b) => familyOrder.indexOf(a.family) - familyOrder.indexOf(b.family) || a.hue - b.hue);
    root.innerHTML = sorted.map((color, index) => `
      <button type="button" style="--color:${color.hex};--spectrum-ink:${isLight(color.hex) ? "#202321" : "#eee9dd"};--spectrum-height:${72 + ((index * 11) % 28)}%" data-color-id="${color.id}" data-cursor-text="探色" data-cursor-color="${color.hex}" aria-label="${color.name} ${color.pinyin} ${color.hex}">
        <span><b>${color.name}</b><small>${color.pinyin}</small><small>${color.family}系 · ${color.hex}</small></span>
      </button>
    `).join("");
    root.addEventListener("click", (event) => {
      const button = event.target.closest("[data-color-id]");
      if (!button) return;
      openDrawer(findColor(button.dataset.colorId), button);
    });
  }

  function renderFilters() {
    const families = ["all", ...familyOrder.filter((family) => colors.some((color) => color.family === family))];
    renderFamilyButtons(document.querySelector("[data-family-filter]"), families);
    fillSelect("[data-dynasty-filter]", ["all", ...unique(colors.flatMap((color) => color.dynasty))]);
    fillSelect("[data-category-filter]", ["all", ...unique(colors.flatMap((color) => color.categories))]);
  }

  function renderFamilyButtons(root, families) {
    if (!root) return;
    const colorMap = { 青: "#55766f", 赤: "#a84a3f", 黄: "#c5a35a", 白: "#d9d4c8", 黑: "#252927", 绿: "#5f7f67", 蓝: "#42556b", 紫: "#8a6f7b", 棕: "#7e5141", 灰: "#8e8d85" };
    root.innerHTML = families.map((family) => `
      <button type="button" style="--family-color:${colorMap[family] || "#202321"}" data-family="${family}" aria-pressed="${state.family === family}">${family === "all" ? "全部" : family}</button>
    `).join("");
    root.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        state.family = button.dataset.family;
        state.archiveExpanded = false;
        updateArchive();
      });
    });
  }

  function fillSelect(selector, values) {
    const select = document.querySelector(selector);
    if (!select) return;
    select.innerHTML = values.map((value) => `<option value="${value}">${value === "all" ? "全部" : value}</option>`).join("");
    const stateKey = selector.includes("dynasty") ? "dynasty" : "category";
    select.value = state[stateKey];
    select.addEventListener("change", () => {
      state[stateKey] = select.value;
      state.archiveExpanded = false;
      updateArchive();
    });
  }

  function initSearch() {
    const input = document.querySelector("[data-search-input]");
    const clear = document.querySelector("[data-clear-search]");
    const sort = document.querySelector("[data-sort-select]");
    const clearAllButtons = document.querySelectorAll("[data-clear-all]");
    if (input) {
      input.value = state.search;
      input.closest(".archive-search-field")?.classList.toggle("has-value", Boolean(state.search));
      input.addEventListener("input", debounce(() => {
        state.search = input.value.trim();
        state.archiveExpanded = false;
        input.closest(".archive-search-field")?.classList.toggle("has-value", Boolean(state.search));
        updateArchive();
      }, 180));
    }
    clear?.addEventListener("click", () => {
      state.search = "";
      state.archiveExpanded = false;
      if (input) input.value = "";
      input?.closest(".archive-search-field")?.classList.remove("has-value");
      updateArchive();
    });
    sort?.addEventListener("change", () => {
      state.sort = sort.value;
      state.archiveExpanded = false;
      updateArchive();
    });
    clearAllButtons.forEach((button) => button.addEventListener("click", () => clearFilters(true)));
  }

  function initViewSwitch() {
    document.querySelectorAll("[data-view-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        state.view = button.dataset.viewMode;
        state.archiveExpanded = false;
        document.querySelectorAll("[data-view-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        updateArchive();
      });
    });
    document.querySelector("[data-show-more]")?.addEventListener("click", () => {
      state.archiveExpanded = true;
      updateArchive();
    });
  }

  function updateArchive() {
    updateControls();
    const result = getFilteredColors();
    renderArchiveColors(result);
    renderActiveFilters();
    updateUrl();
    setText("[data-result-count]", `共寻得 ${result.length} 色`);
    const empty = document.querySelector("[data-archive-empty]");
    if (empty) empty.hidden = result.length !== 0;
  }

  function updateControls() {
    document.querySelectorAll("[data-family]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.family === state.family)));
    const dynasty = document.querySelector("[data-dynasty-filter]");
    const category = document.querySelector("[data-category-filter]");
    const sort = document.querySelector("[data-sort-select]");
    if (dynasty) dynasty.value = state.dynasty;
    if (category) category.value = state.category;
    if (sort) sort.value = state.sort;
  }

  function getFilteredColors() {
    const query = state.search.toLowerCase();
    const filtered = colors.filter((color) => {
      const matchesSearch = !query || color.searchText.includes(query);
      const matchesFamily = state.family === "all" || color.family === state.family;
      const matchesDynasty = state.dynasty === "all" || color.dynasty.includes(state.dynasty);
      const matchesCategory = state.category === "all" || color.categories.includes(state.category);
      return matchesSearch && matchesFamily && matchesDynasty && matchesCategory;
    });
    return sortColors(filtered);
  }

  function sortColors(list) {
    const sorted = [...list];
    if (state.sort === "hue") sorted.sort((a, b) => a.hue - b.hue);
    if (state.sort === "lightness") sorted.sort((a, b) => b.lightness - a.lightness);
    if (state.sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
    return sorted;
  }

  function renderArchiveColors(list) {
    const root = document.querySelector("[data-archive-grid]");
    if (!root) return;
    root.classList.toggle("is-compact", state.view === "compact");
    const visibleCount = state.archiveExpanded ? list.length : previewColorCount();
    const visible = list.slice(0, visibleCount);
    const fragment = document.createDocumentFragment();
    visible.forEach((color, index) => {
      const article = document.createElement("article");
      article.className = "archive-color-card";
      article.id = `color-${color.id}`;
      article.style.setProperty("--color", color.hex);
      article.style.animationDelay = `${Math.min(index * 18, 360)}ms`;
      article.innerHTML = `
        <button class="archive-color-card__open" type="button" data-open-color="${color.id}" data-cursor-text="探色" data-cursor-color="${color.hex}">
          <div class="archive-color-card__swatch" data-code="${color.archiveId}" style="--swatch-ink:${isLight(color.hex) ? "#202321" : "#eee9dd"}"></div>
          <div class="archive-color-card__content">
            <h3>${color.name}</h3>
            <span>${color.pinyin}</span>
            <span>${color.hex}</span>
            <div class="archive-color-card__meta"><small>${color.dynasty[0]}</small><small>${color.categories[0]}</small></div>
            <b class="archive-card-cta">查看色档 →</b>
          </div>
        </button>`;
      fragment.appendChild(article);
    });
    root.replaceChildren(fragment);
    const more = document.querySelector("[data-show-more]");
    if (more) {
      more.hidden = state.archiveExpanded || list.length <= visibleCount;
      more.textContent = `显示更多 · 余 ${Math.max(list.length - visibleCount, 0)} 色`;
    }
    root.querySelectorAll("[data-open-color]").forEach((button) => {
      button.addEventListener("click", () => openDrawer(findColor(button.dataset.openColor), button));
    });
    initCustomCursor();
  }

  function previewColorCount() {
    const width = window.innerWidth;
    if (state.view === "compact") {
      if (width <= 768) return 9;
      if (width <= 1180) return 12;
      return 18;
    }
    if (width <= 768) return 6;
    if (width <= 1180) return 9;
    return 12;
  }

  function renderActiveFilters() {
    const root = document.querySelector("[data-active-filters]");
    if (!root) return;
    const filters = [
      state.search && { key: "search", label: `搜索：${state.search}` },
      state.family !== "all" && { key: "family", label: state.family },
      state.dynasty !== "all" && { key: "dynasty", label: state.dynasty },
      state.category !== "all" && { key: "category", label: state.category }
    ].filter(Boolean);
    root.innerHTML = filters.map((filter) => `<button type="button" data-remove-filter="${filter.key}">${filter.label} ×</button>`).join("") + (filters.length ? `<button type="button" data-clear-all>清除筛选</button>` : "");
    root.querySelectorAll("[data-remove-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.removeFilter === "search") {
          state.search = "";
          const input = document.querySelector("[data-search-input]");
          if (input) input.value = "";
        } else {
          state[button.dataset.removeFilter] = "all";
        }
        state.archiveExpanded = false;
        updateArchive();
      });
    });
    root.querySelector("[data-clear-all]")?.addEventListener("click", () => clearFilters(true));
  }

  function clearFilters(update = true) {
    state.search = "";
    state.family = "all";
    state.dynasty = "all";
    state.category = "all";
    state.archiveExpanded = false;
    const input = document.querySelector("[data-search-input]");
    if (input) input.value = "";
    input?.closest(".archive-search-field")?.classList.remove("has-value");
    if (update) updateArchive();
  }

  function jumpToColor(id, open) {
    const node = document.getElementById(`color-${id}`);
    if (!node) {
      state.search = "";
      state.family = "all";
      state.dynasty = "all";
      state.category = "all";
      updateArchive();
      requestAnimationFrame(() => jumpToColor(id, open));
      return;
    }
    const offset = window.matchMedia("(max-width: 768px)").matches ? 150 : 182;
    window.scrollTo({ top: node.getBoundingClientRect().top + window.scrollY - offset, behavior: window.MuseumUtils?.prefersReducedMotion ? "auto" : "smooth" });
    node.classList.add("is-target");
    setTimeout(() => node.classList.remove("is-target"), 900);
    if (open) setTimeout(() => openDrawer(findColor(id), node.querySelector("button")), 520);
  }

  function initDrawer() {
    const drawer = document.querySelector(".archive-drawer");
    const backdrop = document.querySelector(".archive-drawer-backdrop");
    const close = document.querySelector(".archive-drawer__close");
    [backdrop, close].forEach((node) => node?.addEventListener("click", closeDrawer));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer?.classList.contains("is-open")) closeDrawer();
    });
    drawer?.addEventListener("click", (event) => {
      const copy = event.target.closest("[data-copy-value]");
      const related = event.target.closest("[data-related-color]");
      const collect = event.target.closest("[data-collect-color]");
      if (copy) copyValue(copy.dataset.copyValue, copy);
      if (related) openDrawer(findColor(related.dataset.relatedColor), related);
      if (collect) collectColor(findColor(collect.dataset.collectColor), collect);
    });
  }

  function openDrawer(color, trigger) {
    const drawer = document.querySelector(".archive-drawer");
    if (!color || !drawer) return;
    state.drawerColor = color;
    state.lastTrigger = trigger;
    drawer.style.setProperty("--drawer-color", color.hex);
    drawer.style.setProperty("--swatch-ink", isLight(color.hex) ? "#202321" : "#eee9dd");
    drawer.querySelector(".archive-drawer__swatch").innerHTML = `<span>${color.archiveId}</span><h2 id="archive-drawer-title">${color.name}</h2><p>${color.pinyin}</p>`;
    drawer.querySelector(".archive-drawer__content").innerHTML = `
      <div class="archive-value-grid">
        <button type="button" data-copy-value="${color.hex}"><small>HEX</small><b>${color.hex}</b></button>
        <button type="button" data-copy-value="${color.rgb}"><small>RGB</small><b>${color.rgb}</b></button>
        <button type="button" data-copy-value="${color.hsl}"><small>HSL</small><b>${color.hsl}</b></button>
        <button type="button" data-copy-value="${color.name} ${color.hex}"><small>色名</small><b>${color.name}</b></button>
      </div>
      <div class="archive-fact-grid">
        <div><dt>色系</dt><dd>${color.family}</dd></div>
        <div><dt>时代关联</dt><dd>${color.dynasty.join("、")}</dd></div>
        <div><dt>主要应用</dt><dd>${color.categories.join("、")}</dd></div>
        <div><dt>文化意象</dt><dd>${color.meaning.join(" · ")}</dd></div>
      </div>
      <p class="archive-description">${color.description}</p>
      <button class="archive-collect-button ${isCollected(color.id) ? "is-collected" : ""}" type="button" data-collect-color="${color.id}">${isCollected(color.id) ? "已收入" : "+ 收入拾色篮"}</button>
      <div class="archive-related"><h3>相关颜色</h3><div class="archive-related-list">${color.relatedColors.map((id) => relatedButton(id)).join("")}</div></div>
    `;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.querySelector(".archive-drawer-backdrop")?.classList.add("is-open");
    history.replaceState(null, "", `#${color.id}`);
    drawer.querySelector(".archive-drawer__close")?.focus({ preventScroll: true });
  }

  function relatedButton(id) {
    const color = findColor(id);
    if (!color) return "";
    return `<button type="button" data-related-color="${color.id}"><i style="--color:${color.hex}"></i><span>${color.name}</span><small>${color.hex}</small></button>`;
  }

  function closeDrawer() {
    const drawer = document.querySelector(".archive-drawer");
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
    document.querySelector(".archive-drawer-backdrop")?.classList.remove("is-open");
    if (location.hash && state.drawerColor?.id === location.hash.slice(1)) history.replaceState(null, "", location.pathname + location.search);
    state.lastTrigger?.focus?.({ preventScroll: true });
  }

  function initFilterSheet() {
    const sheet = document.querySelector(".archive-filter-sheet");
    const backdrop = document.querySelector(".archive-filter-backdrop");
    const content = document.querySelector("[data-sheet-content]");
    const open = document.querySelector("[data-open-filters]");
    const close = document.querySelector(".archive-filter-sheet__close");
    if (!sheet || !content) return;
    content.innerHTML = `
      <div class="archive-select">色系<div class="family-filter" data-sheet-family></div></div>
      <label class="archive-select">朝代<select data-sheet-dynasty></select></label>
      <label class="archive-select">应用<select data-sheet-category></select></label>
      <button class="line-button" type="button" data-sheet-submit>查看 ${getFilteredColors().length} 种颜色 <span>→</span></button>
    `;
    renderFamilyButtons(content.querySelector("[data-sheet-family]"), ["all", ...familyOrder.filter((family) => colors.some((color) => color.family === family))]);
    fillSheetSelect("[data-sheet-dynasty]", ["all", ...unique(colors.flatMap((color) => color.dynasty))], "dynasty");
    fillSheetSelect("[data-sheet-category]", ["all", ...unique(colors.flatMap((color) => color.categories))], "category");
    const hide = () => {
      sheet.classList.remove("is-open");
      backdrop?.classList.remove("is-open");
      sheet.setAttribute("aria-hidden", "true");
    };
    open?.addEventListener("click", () => {
      sheet.classList.add("is-open");
      backdrop?.classList.add("is-open");
      sheet.setAttribute("aria-hidden", "false");
    });
    [close, backdrop, content.querySelector("[data-sheet-submit]")].forEach((node) => node?.addEventListener("click", hide));
  }

  function fillSheetSelect(selector, values, key) {
    const select = document.querySelector(selector);
    if (!select) return;
    select.innerHTML = values.map((value) => `<option value="${value}">${value === "all" ? "全部" : value}</option>`).join("");
    select.value = state[key];
    select.addEventListener("change", () => {
      state[key] = select.value;
      state.archiveExpanded = false;
      updateArchive();
    });
  }

  function collectColor(color, button) {
    const collection = readCollection();
    if (!collection.some((item) => item.colorId === color.id)) {
      collection.push({ key: `archive:${color.id}`, colorId: color.id, name: color.name, hex: color.hex, rgb: color.rgb, sourceType: "archive", sourceName: color.source, hall: "拾色藏库" });
      saveCollection(collection);
    }
    if (button) {
      button.textContent = "已收入";
      button.classList.add("is-collected");
    }
    renderPicked();
    state.composerTouched = false;
    renderComposer();
    showToast("已收入拾色篮");
  }

  function renderPicked() {
    const root = document.querySelector("[data-picked]");
    if (!root) return;
    const collection = hydrateCollection(readCollection());
    if (!collection.length) {
      root.innerHTML = `<div class="picked-empty"><p>你的拾色篮还是空的。<br>去色彩藏目中收入一抹喜欢的颜色，它会被带回这里。</p><nav><button type="button" data-scroll-collection>去拾色 →</button></nav></div>`;
      root.querySelector("[data-scroll-collection]")?.addEventListener("click", () => {
        document.getElementById("archive-collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    root.innerHTML = `
      <div class="picked-rack">${collection.map((item) => `
        <article style="--picked-color:${item.hex};--picked-ink:${isLight(item.hex) ? "#202321" : "#eee9dd"}" tabindex="0">
          <strong>${item.name}</strong><small>${item.hex}</small><em>来自 ${item.hall || item.sourceName || "展厅"}</em>
          <div><button type="button" data-copy-value="${item.hex}">复制</button><button type="button" data-remove-pick="${item.key || ""}" data-remove-color-id="${item.colorId || ""}" data-remove-hex="${item.hex}">移除</button></div>
        </article>
      `).join("")}</div>
      ${collection.length >= 3 ? `<div class="picked-preview"><div class="picked-preview__bar">${collection.map((item) => `<i style="--color:${item.hex}"></i>`).join("")}</div><button class="line-button" type="button" data-copy-picked>复制全部 HEX <span>→</span></button></div>` : ""}
    `;
    root.querySelectorAll("[data-copy-value]").forEach((button) => button.addEventListener("click", () => copyValue(button.dataset.copyValue, button)));
    root.querySelectorAll("[data-remove-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        const removeKey = button.dataset.removePick;
        const removeId = button.dataset.removeColorId;
        const removeHex = button.dataset.removeHex?.toLowerCase();
        saveCollection(readCollection().filter((item) => {
          if (removeKey && item.key === removeKey) return false;
          if (removeId && item.colorId === removeId) return false;
          if (removeHex && item.hex?.toLowerCase() === removeHex) return false;
          return true;
        }));
        state.composerTouched = false;
        renderPicked();
        renderComposer();
        showToast("已移出拾色篮");
      });
    });
    root.querySelector("[data-copy-picked]")?.addEventListener("click", (event) => copyValue(collection.map((item) => item.hex).join(", "), event.currentTarget));
  }

  function hydrateCollection(collection) {
    return collection.map((item) => {
      const color = item.colorId ? findColor(item.colorId) : colors.find((entry) => entry.hex.toLowerCase() === item.hex?.toLowerCase());
      return color ? { ...item, colorId: color.id, name: color.name, hex: color.hex, rgb: color.rgb } : item;
    }).filter((item) => item.hex && item.name);
  }

  function renderClassicPalettes() {
    const root = document.querySelector("[data-classic-palettes]");
    if (!root) return;
    root.innerHTML = palettes.map((palette) => {
      const resolved = palette.colors.map((entry) => ({ ...entry, color: findColor(entry.colorId) })).filter((entry) => entry.color);
      return `
        <article class="palette-scroll reveal reveal-up">
          <div class="palette-visual">
            <div class="palette-bar">${resolved.map((entry) => `<button type="button" style="--color:${entry.color.hex};--ratio:${entry.ratio};--ink-on-color:${isLight(entry.color.hex) ? "#202321" : "#eee9dd"}" data-copy-value="${entry.color.hex}"><span>${entry.color.name}<br>${entry.color.hex}</span></button>`).join("")}</div>
            <div class="palette-ratios">${resolved.map((entry) => `<span>${entry.color.name} ${entry.ratio}%</span>`).join("")}</div>
          </div>
          <div class="palette-copy-content">
            <span>${palette.english}</span>
            <h3>${palette.name}</h3>
            <dl><div><dt>气质</dt><dd>${palette.mood.join(" · ")}</dd></div><div><dt>适合</dt><dd>${palette.usage}</dd></div><div><dt>建议</dt><dd>${palette.suggestion}</dd></div></dl>
            <button class="palette-copy" type="button" data-copy-value="${resolved.map((entry) => entry.color.hex).join(", ")}">复制配色</button>
          </div>
        </article>`;
    }).join("");
    root.querySelectorAll("[data-copy-value]").forEach((button) => button.addEventListener("click", () => copyValue(button.dataset.copyValue, button)));
    initRevealAnimations();
  }

  function renderComposer() {
    const root = document.querySelector("[data-composer]");
    if (!root) return;
    if (!state.composerTouched) state.selected = composerIdsFromCollection();
    const selected = state.selected.map(findColor).filter(Boolean);
    root.innerHTML = `
      <div class="composer-selected">
        <h3>当前配色</h3>
        <div class="composer-preview">${selected.map((color) => `<i style="--color:${color.hex}"></i>`).join("")}</div>
        <div class="composer-slots">${[0, 1, 2, 3, 4].map((index) => slotHtml(selected[index], index)).join("")}</div>
      </div>
      <div class="composer-actions">
        <button type="button" data-copy-composer>复制当前 HEX</button>
        <button type="button" data-save-composer>保存配色</button>
        <button type="button" data-clear-composer>清空</button>
      </div>
      <div class="composer-saved" data-saved-palettes>${savedPalettesHtml()}</div>
    `;
    root.querySelectorAll("[data-add-composer]").forEach((button) => button.addEventListener("click", () => addComposer(button.dataset.addComposer)));
    root.querySelectorAll("[data-remove-slot]").forEach((button) => button.addEventListener("click", () => {
      state.composerTouched = true;
      state.selected.splice(Number(button.dataset.removeSlot), 1);
      renderComposer();
    }));
    root.querySelectorAll("[data-open-composer-picker]").forEach((button) => {
      button.addEventListener("click", () => openComposerPicker(Number(button.dataset.openComposerPicker)));
    });
    root.querySelector("[data-copy-composer]")?.addEventListener("click", (event) => copyValue(selected.map((color) => color.hex).join(", "), event.currentTarget));
    root.querySelector("[data-save-composer]")?.addEventListener("click", saveComposer);
    root.querySelector("[data-clear-composer]")?.addEventListener("click", () => {
      state.composerTouched = true;
      state.selected = [];
      renderComposer();
    });
    root.querySelectorAll("[data-delete-palette]").forEach((button) => button.addEventListener("click", () => {
      writeJson(paletteStorageKey, readJson(paletteStorageKey, []).filter((item) => item.id !== button.dataset.deletePalette));
      renderComposer();
    }));
    root.querySelectorAll("[data-copy-saved-palette]").forEach((button) => {
      button.addEventListener("click", () => copyValue(button.dataset.copySavedPalette, button));
    });
  }

  function slotHtml(color, index) {
    if (!color) return `<button class="composer-slot is-empty" type="button" data-open-composer-picker="${index}">待选<br><small>${index + 1} / 5</small></button>`;
    return `<button class="composer-slot" type="button" style="--color:${color.hex};--chip-ink:${isLight(color.hex) ? "#202321" : "#eee9dd"}" data-remove-slot="${index}">${color.name}<small>${color.hex}</small></button>`;
  }

  function chipHtml(color) {
    return `<button class="composer-chip" type="button" style="--color:${color.hex};--chip-ink:${isLight(color.hex) ? "#202321" : "#eee9dd"}" data-add-composer="${color.id}">${color.name}<small>${color.hex}</small></button>`;
  }

  function addComposer(id) {
    if (state.selected.length >= 5 || state.selected.includes(id)) return;
    state.composerTouched = true;
    state.selected.push(id);
    renderComposer();
  }

  function composerIdsFromCollection() {
    const ids = hydrateCollection(readCollection())
      .map((item) => item.colorId || colors.find((color) => color.hex.toLowerCase() === item.hex?.toLowerCase())?.id)
      .filter(Boolean);
    return unique(ids).slice(0, 5);
  }

  function initComposerPicker() {
    const picker = document.querySelector(".composer-picker");
    const backdrop = document.querySelector(".composer-picker-backdrop");
    const close = document.querySelector(".composer-picker__close");
    if (!picker) return;
    [backdrop, close].forEach((node) => node?.addEventListener("click", closeComposerPicker));
    picker.querySelectorAll("[data-picker-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pickerTab = button.dataset.pickerTab;
        renderComposerPicker();
      });
    });
    picker.addEventListener("click", (event) => {
      const button = event.target.closest("[data-pick-composer-color]");
      if (!button) return;
      pickComposerColor(button.dataset.pickComposerColor);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && picker.classList.contains("is-open")) closeComposerPicker();
    });
  }

  function openComposerPicker(slotIndex) {
    state.pickerSlot = slotIndex;
    state.pickerTab = "picked";
    renderComposerPicker();
    const picker = document.querySelector(".composer-picker");
    const backdrop = document.querySelector(".composer-picker-backdrop");
    picker?.classList.add("is-open");
    picker?.setAttribute("aria-hidden", "false");
    backdrop?.classList.add("is-open");
    picker?.querySelector(".composer-picker__close")?.focus({ preventScroll: true });
  }

  function closeComposerPicker() {
    document.querySelector(".composer-picker")?.classList.remove("is-open");
    document.querySelector(".composer-picker")?.setAttribute("aria-hidden", "true");
    document.querySelector(".composer-picker-backdrop")?.classList.remove("is-open");
  }

  function renderComposerPicker() {
    const picker = document.querySelector(".composer-picker");
    const panel = document.querySelector("[data-picker-panel]");
    if (!picker || !panel) return;
    picker.querySelectorAll("[data-picker-tab]").forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.pickerTab === state.pickerTab));
    });
    const picked = hydrateCollection(readCollection()).map((item) => findColor(item.colorId)).filter(Boolean);
    const source = state.pickerTab === "picked" ? uniqueById(picked) : colors;
    if (!source.length) {
      panel.innerHTML = `<p class="composer-picker__empty">我的拾色中还没有颜色，可先在色彩藏目里打开色档并收入拾色篮。</p>`;
      return;
    }
    panel.innerHTML = source.map((color) => `
      <button type="button" style="--color:${color.hex};--chip-ink:${isLight(color.hex) ? "#202321" : "#eee9dd"}" data-pick-composer-color="${color.id}">
        <i></i><span>${color.name}</span><small>${color.hex}</small>
      </button>
    `).join("");
  }

  function pickComposerColor(id) {
    if (!findColor(id)) return;
    state.composerTouched = true;
    state.selected[state.pickerSlot] = id;
    state.selected = unique(state.selected.filter(Boolean)).slice(0, 5);
    closeComposerPicker();
    renderComposer();
  }

  function saveComposer() {
    if (state.selected.length < 2) {
      showToast("至少选择 2 色");
      return;
    }
    const saved = readJson(paletteStorageKey, []);
    saved.push({ id: `palette-${Date.now()}`, name: `我的配色 ${String(saved.length + 1).padStart(2, "0")}`, colors: [...state.selected], createdAt: new Date().toISOString() });
    writeJson(paletteStorageKey, saved);
    showToast("配色已保存");
    renderComposer();
  }

  function savedPalettesHtml() {
    const saved = readJson(paletteStorageKey, []);
    if (!saved.length) return "";
    return saved.map((palette) => {
      const resolved = palette.colors.map(findColor).filter(Boolean);
      const hexList = resolved.map((color) => color.hex).join(", ");
      return `<article><div><strong>${palette.name}</strong><div class="picked-preview__bar">${resolved.map((color) => `<i style="--color:${color.hex}"></i>`).join("")}</div></div><div class="composer-saved__actions"><button type="button" data-copy-saved-palette="${hexList}">复制当前 HEX</button><button type="button" data-delete-palette="${palette.id}">删除</button></div></article>`;
    }).join("");
  }

  function renderObservations() {
    const root = document.querySelector("[data-observations]");
    if (!root) return;
    root.innerHTML = [
      panelHtml("色系分布", countBy(colors, "family")),
      panelHtml("应用分布", countByFlat(colors, "categories")),
      panelHtml("时代关联", countByFlat(colors, "dynasty"))
    ].join("");
  }

  function initObservationMotion() {
    const root = document.querySelector("[data-observations]");
    if (!root) return;
    if (!("IntersectionObserver" in window) || window.MuseumUtils?.prefersReducedMotion) {
      root.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        root.classList.add("is-visible");
        observer.disconnect();
      });
    }, { threshold: 0.24 });
    observer.observe(root);
  }

  function initClosingMotion() {
    const root = document.querySelector(".closing-lines");
    if (!root) return;
    if (!("IntersectionObserver" in window) || window.MuseumUtils?.prefersReducedMotion) {
      root.classList.add("is-open");
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        root.classList.add("is-open");
        observer.disconnect();
      });
    }, { threshold: 0.35 });
    observer.observe(root);
  }

  function panelHtml(title, rows) {
    const max = Math.max(...rows.map((row) => row.count), 1);
    return `<article class="observation-panel"><h3>${title}</h3>${rows.map((row, index) => `<div class="observation-row"><span>${row.key}</span><i style="--amount:${row.count / max};--color:${familyColor(row.key)};--row-index:${index}"></i><b>${row.count}</b></div>`).join("")}</article>`;
  }

  function initClosingLinks() {
    document.querySelector("[data-scroll-picked]")?.addEventListener("click", () => document.getElementById("my-colors")?.scrollIntoView({ behavior: "smooth" }));
  }

  function openInitialHash() {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    if (findColor(id)) setTimeout(() => jumpToColor(id, true), 350);
  }

  function updateUrl() {
    const params = new URLSearchParams();
    if (state.search) params.set("q", state.search);
    if (state.family !== "all") params.set("family", state.family);
    if (state.dynasty !== "all") params.set("dynasty", state.dynasty);
    if (state.category !== "all") params.set("category", state.category);
    if (state.sort !== "default") params.set("sort", state.sort);
    const url = `${location.pathname}${params.toString() ? `?${params}` : ""}${location.hash}`;
    history.replaceState(null, "", url);
  }

  function readParams() {
    const params = new URLSearchParams(location.search);
    state.search = params.get("q") || "";
    state.family = params.get("family") || "all";
    state.dynasty = params.get("dynasty") || "all";
    state.category = params.get("category") || "all";
    state.sort = params.get("sort") || "default";
  }

  function readCollection() {
    const current = readJson(storageKey, []);
    legacyKeys.forEach((key) => {
      readJson(key, []).forEach((item) => {
        const legacyKey = item.key || `${key}:${item.name}:${item.hex}`;
        if (!current.some((entry) => entry.key === legacyKey)) {
          current.push({ key: legacyKey, colorId: item.colorId || item.id, name: item.name, hex: item.hex, rgb: item.rgb, sourceType: "legacy", sourceName: item.artifactName || item.sourceName, hall: item.hall || "物色生香" });
        }
      });
    });
    return current;
  }

  function saveCollection(collection) {
    writeJson(storageKey, collection);
    writeJson("ccm-archive-colors", collection.filter((item) => item.hall === "拾色藏库" || item.sourceType === "archive"));
  }

  function isCollected(id) {
    return readCollection().some((item) => item.colorId === id || findColor(id)?.hex.toLowerCase() === item.hex?.toLowerCase());
  }

  async function copyValue(value, button) {
    if (!value) return;
    const original = button.innerHTML;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "已拾取";
      showToast("已拾取色值");
    } catch (error) {
      button.textContent = "未能拾取";
      showToast("复制失败");
    }
    setTimeout(() => { button.innerHTML = original; }, 1200);
  }

  function showToast(text) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("is-visible");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1200);
  }

  function validateColorDatabase() {
    const ids = new Set();
    const archiveIds = new Set();
    colors.forEach((color) => {
      if (ids.has(color.id) || archiveIds.has(color.archiveId) || !/^#[0-9A-F]{6}$/i.test(color.hex)) {
        console.warn("Archive color data issue", color);
      }
      ids.add(color.id);
      archiveIds.add(color.archiveId);
    });
  }

  function findColor(id) {
    return colors.find((color) => color.id === id);
  }

  function unique(list) {
    return [...new Set(list)].filter(Boolean);
  }

  function uniqueById(list) {
    const seen = new Set();
    return list.filter((item) => {
      if (!item || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      showToast("本地存储不可用");
    }
  }

  function countBy(list, key) {
    return Object.entries(list.reduce((acc, item) => {
      acc[item[key]] = (acc[item[key]] || 0) + 1;
      return acc;
    }, {})).map(([rowKey, count]) => ({ key: rowKey, count })).sort((a, b) => b.count - a.count);
  }

  function countByFlat(list, key) {
    return Object.entries(list.flatMap((item) => item[key]).reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {})).map(([rowKey, count]) => ({ key: rowKey, count })).sort((a, b) => b.count - a.count).slice(0, 9);
  }

  function familyColor(key) {
    return {
      青: "#55766f",
      赤: "#a84a3f",
      黄: "#c5a35a",
      白: "#f0eadc",
      黑: "#252927",
      绿: "#4f7a5f",
      蓝: "#3f5f7e",
      紫: "#8a5f7b",
      棕: "#8a5b45",
      灰: "#6f746f",
      服饰: "#9e4f4f",
      自然: "#5f7f67",
      器物: "#806b4f",
      书画: "#4f7586",
      建筑: "#963c34",
      陶瓷: "#6e8b8b",
      礼制: "#c5a35a",
      明: "#a84a3f",
      清: "#42556b",
      跨时期使用: "#55766f",
      宋: "#6e8b8b",
      近现代整理: "#8a6f7b",
      唐: "#c5a35a",
      汉: "#7e5141",
      先秦: "#252927",
      元: "#5e8a72"
    }[key] || "#6f746f";
  }

  function hslFromHex(hex) {
    const value = hex.replace("#", "");
    let r = parseInt(value.slice(0, 2), 16) / 255;
    let g = parseInt(value.slice(2, 4), 16) / 255;
    let b = parseInt(value.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      if (max === g) h = (b - r) / d + 2;
      if (max === b) h = (r - g) / d + 4;
      h *= 60;
    }
    return { h, l };
  }

  function isLight(hex) {
    const value = hex.replace("#", "");
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  }

  function debounce(fn, delay) {
    let timer = 0;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
})();
