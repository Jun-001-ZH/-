(function preparePageEntrance() {
  const layer = document.getElementById("page-transition");
  if (!layer) return;

  const activeLink = document.querySelector(".site-nav a.is-active");
  const transitionColor = activeLink?.dataset.transitionColor || "#55766f";
  layer.style.setProperty("--transition-color", transitionColor);
  layer.dataset.hall = document.title.split("｜")[0] || "中国色彩数字博物馆";
  layer.classList.add("is-entering");
  document.documentElement.classList.add("is-page-entering");
})();

function initPageTransition() {
  const layer = document.getElementById("page-transition");
  if (!layer) return;

  const getTransitionLabel = (link) => {
    const explicitLabel = link.dataset.transitionLabel || link.getAttribute("aria-label");
    const headingLabel = link.querySelector("h1, h2, h3, strong")?.textContent;
    return (explicitLabel || headingLabel || link.textContent || "入展").replace(/\s+/g, "");
  };

  const resetTransition = () => {
    layer.classList.remove("is-active", "is-loading", "is-entering");
    document.documentElement.classList.remove("is-page-entering", "is-page-exiting");
    document.body.classList.remove("is-page-exiting");
  };

  const finishEntrance = () => {
    window.setTimeout(resetTransition, window.MuseumUtils.prefersReducedMotion ? 80 : 820);
  };

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      resetTransition();
      return;
    }
    finishEntrance();
  });

  finishEntrance();

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin && window.location.protocol !== "file:") return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    event.preventDefault();
    const color = link.dataset.transitionColor || "#55766f";
    const hallName = getTransitionLabel(link);
    layer.style.setProperty("--transition-color", color);
    layer.style.setProperty("--click-x", `${event.clientX}px`);
    layer.style.setProperty("--click-y", `${event.clientY}px`);
    layer.dataset.hall = hallName;
    layer.classList.remove("is-entering");
    layer.classList.add("is-active", "is-loading");
    document.documentElement.classList.add("is-page-exiting");
    document.body.classList.add("is-page-exiting");
    // 色幕先收束当前展厅，再以短暂加载态把目标展厅交给下一页入场。
    window.setTimeout(() => {
      window.location.href = href;
    }, window.MuseumUtils.prefersReducedMotion ? 80 : 820);
  });
}
