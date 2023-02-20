export default function resizeScreen(resizeData) {
  if (!resizeData.length) return;
  function resize(element, className, size, isLess) {
    const el = document.querySelector(element);
    if(!el) return
    if (isLess) {
      window.innerWidth <= size
        ? el.classList.add(className)
        : el.classList.remove(className);
    } else {
      window.innerWidth > size
        ? el.classList.add(className)
        : el.classList.remove(className);
    }
  }

  window.addEventListener("resize", loopResizeData);

  function loopResizeData() {
    resizeData.forEach(({ element, className, size, isLess }) => {
      resize(element, className, size, isLess);
    });
  }

  loopResizeData();
}
