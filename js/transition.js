function initPageTransition() {
  const layer = document.getElementById("page-transition");
  if (!layer) return;

  window.addEventListener("pageshow", () => {
    layer.classList.remove("is-active");
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin && window.location.protocol !== "file:") return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    event.preventDefault();
    const color = link.dataset.transitionColor || "#55766f";
    layer.style.setProperty("--transition-color", color);
    layer.style.setProperty("--click-x", `${event.clientX}px`);
    layer.style.setProperty("--click-y", `${event.clientY}px`);
    layer.classList.add("is-active");
    // 色幕覆盖后再跳转，形成“进入一种颜色”的页面转场。
    window.setTimeout(() => {
      window.location.href = href;
    }, window.MuseumUtils.prefersReducedMotion ? 0 : 580);
  });
}
