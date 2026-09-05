function initCustomCursor() {
  const { prefersReducedMotion } = window.MuseumUtils;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const label = ring?.querySelector("span");
  if (!dot || !ring || prefersReducedMotion || window.matchMedia("(max-width: 768px)").matches) return;

  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    frame: 0
  };

  window.addEventListener("mousemove", (event) => {
    state.x = event.clientX;
    state.y = event.clientY;
    document.body.classList.add("has-cursor");
    scheduleRender();
  }, { passive: true });

  // 鼠标停下后停止 RAF，避免光标效果成为常驻性能开销。
  function scheduleRender() {
    if (!state.frame) state.frame = requestAnimationFrame(render);
  }

  function render() {
    state.frame = 0;
    state.ringX += (state.x - state.ringX) * 0.32;
    state.ringY += (state.y - state.ringY) * 0.32;
    dot.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0) translate(-50%, -50%)`;
    if (Math.abs(state.x - state.ringX) > 0.4 || Math.abs(state.y - state.ringY) > 0.4) scheduleRender();
  }

  document.addEventListener("mouseover", (event) => {
    const interactive = event.target.closest("a, button, [data-cursor-text], .daily-swatch, .exhibition-card");
    if (!interactive) return;
    document.body.classList.remove("cursor-text");
    document.body.classList.add("cursor-link");
    if (label) label.textContent = "";
    const color = interactive.dataset.cursorColor || getComputedStyle(interactive).getPropertyValue("--daily-color") || "";
    ring.style.setProperty("--cursor-color", color.trim() || "var(--ink)");
  });

  document.addEventListener("mouseout", (event) => {
    if (!event.target.closest("a, button, [data-cursor-text], .daily-swatch, .exhibition-card")) return;
    document.body.classList.remove("cursor-link", "cursor-text");
    if (label) label.textContent = "";
    ring.style.setProperty("--cursor-color", "var(--ink)");
  });
}
