function initHeroIntro() {
  const heroState = {
    introFinished: false,
    mouseEnabled: false,
    reducedMotion: window.MuseumUtils.prefersReducedMotion
  };
  const heroVideos = Array.from(document.querySelectorAll(".hero-video"));
  if (heroVideos.length) {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = !motionPreference.matches;
    let visible = false;
    let activeVideoIndex = 0;
    let frameRequestId = null;
    let frameRequestVideo = null;
    let blendTimeoutId = null;
    let isBlending = false;
    const loopBlendSeconds = 0.42;

    heroVideos.forEach((video) => {
      video.muted = true;
      video.loop = false;
    });

    const getActiveVideo = () => heroVideos[activeVideoIndex];
    const canPlay = () => enabled && visible && !document.hidden;

    const clearLoopWatch = () => {
      if (frameRequestId !== null && frameRequestVideo && "cancelVideoFrameCallback" in frameRequestVideo) {
        frameRequestVideo.cancelVideoFrameCallback(frameRequestId);
      }
      frameRequestId = null;
      frameRequestVideo = null;
    };

    const clearBlend = () => {
      if (blendTimeoutId !== null) window.clearTimeout(blendTimeoutId);
      blendTimeoutId = null;
      isBlending = false;
    };

    const resetToActiveVideo = () => {
      heroVideos.forEach((video, index) => {
        video.classList.toggle("is-loop-active", index === activeVideoIndex);
        if (index !== activeVideoIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    const beginLoopBlend = () => {
      if (!canPlay() || isBlending) return;
      const outgoingVideo = getActiveVideo();
      const incomingIndex = (activeVideoIndex + 1) % heroVideos.length;
      const incomingVideo = heroVideos[incomingIndex];
      if (incomingVideo.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
        incomingVideo.addEventListener("canplay", beginLoopBlend, { once: true });
        return;
      }

      isBlending = true;
      incomingVideo.currentTime = 0;
      incomingVideo.play().then(() => {
        if (!canPlay()) {
          isBlending = false;
          return;
        }
        activeVideoIndex = incomingIndex;
        incomingVideo.classList.add("is-loop-active");
        outgoingVideo.classList.remove("is-loop-active");
        blendTimeoutId = window.setTimeout(() => {
          outgoingVideo.pause();
          outgoingVideo.currentTime = 0;
          blendTimeoutId = null;
          isBlending = false;
        }, loopBlendSeconds * 1000);
        watchForLoop();
      }).catch(() => {
        isBlending = false;
      });
    };

    const watchForLoop = () => {
      clearLoopWatch();
      const activeVideo = getActiveVideo();
      const nextFrame = (_now, metadata) => {
        if (!canPlay() || activeVideo !== getActiveVideo()) return;
        if (metadata.mediaTime >= activeVideo.duration - loopBlendSeconds) {
          beginLoopBlend();
          return;
        }
        frameRequestVideo = activeVideo;
        frameRequestId = activeVideo.requestVideoFrameCallback(nextFrame);
      };

      if ("requestVideoFrameCallback" in activeVideo && Number.isFinite(activeVideo.duration)) {
        frameRequestVideo = activeVideo;
        frameRequestId = activeVideo.requestVideoFrameCallback(nextFrame);
      }
    };

    heroVideos.forEach((video) => {
      video.addEventListener("timeupdate", () => {
        if (video === getActiveVideo() && canPlay() && video.duration - video.currentTime <= loopBlendSeconds) {
          beginLoopBlend();
        }
      });
    });

    const syncPlayback = () => {
      if (canPlay()) {
        getActiveVideo().play().then(watchForLoop).catch(() => {});
      } else {
        clearLoopWatch();
        clearBlend();
        heroVideos.forEach((video) => video.pause());
        resetToActiveVideo();
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
    visibilityObserver.observe(heroVideos[0].closest(".hero-section"));
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
