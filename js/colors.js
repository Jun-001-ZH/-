function initHeroIntro() {
  const heroState = {
    introFinished: false,
    mouseEnabled: false,
    reducedMotion: window.MuseumUtils.prefersReducedMotion
  };
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = !motionPreference.matches;
    let visible = false;
    heroVideo.muted = true;

    const syncPlayback = () => {
      if (enabled && visible && !document.hidden) {
        heroVideo.play().catch(() => {});
      } else {
        heroVideo.pause();
      }
    };
    motionPreference.addEventListener("change", (event) => {
      enabled = !event.matches;
      syncPlayback();
    });
    document.addEventListener("visibilitychange", syncPlayback);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    visibilityObserver.observe(heroVideo.closest(".hero-section"));
  }
  window.heroState = heroState;
  window.setTimeout(() => {
    heroState.introFinished = true;
    heroState.mouseEnabled = !heroState.reducedMotion;
  }, heroState.reducedMotion ? 10 : 2600);
}

function initHeroParallax() {
  return;
}

function initFiveColorInteraction() {
  const data = window.MuseumColorData.fiveColors;
  const section = document.querySelector(".five-colors-section");
  const stage = document.querySelector(".five-color-stage");
  const buttons = document.querySelectorAll(".five-color-item");
  const info = document.querySelector(".five-color-info");
  if (!section || !stage || !buttons.length || !info) return;
  let activeFiveColor = "qing";
  window.fiveColorDemoStopped = false;

  buttons.forEach((button) => {
    const item = data.find((color) => color.key === button.dataset.color);
    if (!item) return;
    button.style.setProperty("--item-color", item.color);
    button.dataset.meta = `${item.direction} · ${item.element} · ${item.season}`;
    button.addEventListener("mouseenter", () => activate(item.key, true));
    button.addEventListener("focus", () => activate(item.key, true));
    button.addEventListener("click", () => activate(item.key, true));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("is-awake");
        stage.classList.add("has-active");
        activate(activeFiveColor, false);
        initFiveColorAutoDemo();
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.35 });
  observer.observe(section);

  function activate(key, fromUser) {
    const item = data.find((color) => color.key === key);
    if (!item) return;
    if (fromUser) window.fiveColorDemoStopped = true;
    activeFiveColor = key;
    section.style.setProperty("--active-color", item.glow);
    const activeButton = Array.from(buttons).find((button) => button.dataset.color === key);
    if (activeButton) {
      const sectionRect = section.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const glowX = ((buttonRect.left + buttonRect.width / 2 - sectionRect.left) / sectionRect.width) * 100;
      const glowY = ((buttonRect.top + buttonRect.height / 2 - sectionRect.top) / sectionRect.height) * 100;
      section.style.setProperty("--glow-x", `${window.MuseumUtils.clamp(glowX, 8, 92).toFixed(2)}%`);
      section.style.setProperty("--glow-y", `${window.MuseumUtils.clamp(glowY, 8, 92).toFixed(2)}%`);
    } else {
      section.style.setProperty("--glow-x", item.x);
      section.style.setProperty("--glow-y", item.y);
    }
    buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.color === key));
    info.classList.add("is-changing");
    window.setTimeout(() => {
      info.querySelector('[data-info="direction"]').textContent = item.direction;
      info.querySelector('[data-info="element"]').textContent = item.element;
      info.querySelector('[data-info="season"]').textContent = item.season;
      info.querySelector('[data-info="meaning"]').textContent = item.meaning;
      info.querySelector('[data-info="description"]').textContent = item.description;
      info.classList.remove("is-changing");
    }, 180);
  }

  window.activateFiveColor = activate;
}

function initFiveColorAutoDemo() {
  if (window.fiveColorAutoStarted) return;
  window.fiveColorAutoStarted = true;
  const keys = window.MuseumColorData.fiveColors.map((color) => color.key);
  keys.forEach((key, index) => {
    window.setTimeout(() => {
      if (!window.fiveColorDemoStopped && window.activateFiveColor) window.activateFiveColor(key, false);
    }, 450 + index * 1500);
  });
}

function initExhibitionCards() {
  const clampValue = window.MuseumUtils.clamp;

  document.querySelectorAll(".exhibition-card").forEach((card) => {
    const setPointerPosition = (event) => {
      const rect = card.getBoundingClientRect();
      const x = clampValue(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
      const y = clampValue(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    };

    const activatePointer = (event) => {
      card.classList.add("is-pointer-active");
      setPointerPosition(event);
    };

    const resetPointer = () => {
      card.classList.remove("is-pointer-active");
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    };

    card.addEventListener("pointerenter", activatePointer, { passive: true });
    card.addEventListener("pointermove", setPointerPosition, { passive: true });
    card.addEventListener("pointerleave", resetPointer, { passive: true });
    card.addEventListener("blur", resetPointer, true);
    card.addEventListener("focus", () => {
      card.classList.add("is-pointer-active");
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    }, true);
  });

  document.querySelectorAll(".daily-swatch").forEach((swatch) => {
    const activatePointer = () => swatch.classList.add("is-pointer-active");
    const resetPointer = () => swatch.classList.remove("is-pointer-active");

    swatch.addEventListener("pointerenter", activatePointer, { passive: true });
    swatch.addEventListener("pointerleave", resetPointer, { passive: true });
    swatch.addEventListener("blur", resetPointer, true);
    swatch.addEventListener("focus", activatePointer, true);
  });
}

function initDailyColor() {
  const colors = window.MuseumColorData.dailyColors;
  if (!colors?.length) return;
  const dayIndex = Math.floor(Date.now() / 86400000);
  const index = dayIndex % colors.length;
  window.currentDailyColorIndex = index;
  window.isColorTransitioning = false;
  renderDailyColor(colors[index]);
}

function initDailyColorSwitcher() {
  const button = document.querySelector(".daily-random");
  const colors = window.MuseumColorData.dailyColors;
  if (!button || !colors?.length) return;
  button.addEventListener("click", () => {
    if (window.isColorTransitioning) return;
    window.isColorTransitioning = true;
    button.disabled = true;
    let nextIndex = window.currentDailyColorIndex;
    while (nextIndex === window.currentDailyColorIndex) {
      nextIndex = Math.floor(Math.random() * colors.length);
    }
    const meta = document.querySelector(".daily-meta");
    meta?.classList.add("is-changing");
    window.setTimeout(() => {
      window.currentDailyColorIndex = nextIndex;
      renderDailyColor(colors[nextIndex]);
      meta?.classList.remove("is-changing");
    }, 190);
    window.setTimeout(() => {
      window.isColorTransitioning = false;
      button.disabled = false;
    }, 720);
  });
}

function renderDailyColor(color) {
  const section = document.querySelector(".daily-color-section");
  const swatch = document.querySelector(".daily-swatch");
  section?.style.setProperty("--daily-color", color.hex);
  swatch?.style.setProperty("--daily-color", color.hex);
  setDailyText("swatchName", color.name);
  setDailyText("name", color.name);
  setDailyText("pinyin", color.pinyin);
  setDailyText("hex", color.hex);
  setDailyHTML("quote", color.quote);
  setDailyText("source", color.source);
  setDailyText("description", color.description);
}

function setDailyText(key, value) {
  const node = document.querySelector(`[data-daily="${key}"]`);
  if (node) node.textContent = value;
}

function setDailyHTML(key, value) {
  const node = document.querySelector(`[data-daily="${key}"]`);
  if (node) node.innerHTML = value;
}

function initCopyButtons() {
  document.querySelectorAll(".copy-button").forEach((button) => {
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
      window.setTimeout(() => {
        label.textContent = "复制";
      }, 1500);
    });
  });
}
