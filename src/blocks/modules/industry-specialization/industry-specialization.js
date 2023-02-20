export default class IndustrySpecialization {
  constructor() {
    this.buttons = document.querySelectorAll(
      ".industry-specialization-tab__navigation .btn"
    );
    this.industryColumns = document.querySelectorAll(
      ".industry-specialization__column"
    );
    this.tabItemsContent = this.industryColumns[0].querySelectorAll(
      ".industry-specialization-tab__content .industry-specialization-tab__content-item"
    );
    this.tabItemsColumn = this.industryColumns[1].querySelectorAll(
      ".industry-specialization-tab__content .industry-specialization-tab__content-item"
    );
  }

  makeHidden(elements, role) {
    if (role === "element") {
      elements.forEach((el) => {
        el.style.display = "none";
      });
    } else if (role === "buttons") {
      elements.forEach((el) => {
        el.classList.remove("active");
      });
    }
  }
  specializtionClick() {
    this.makeHidden(this.tabItemsContent, "element");
    this.makeHidden(this.tabItemsColumn, "element");
    this.tabItemsContent[0].style.display = "block";
    this.tabItemsColumn[0].style.display = "block";
    this.buttons[0].classList.add("active");
    this.buttons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        this.makeHidden(this.tabItemsContent, "element");
        this.makeHidden(this.tabItemsColumn, "element");
        this.makeHidden(this.buttons, "buttons");
        this.tabItemsContent[idx].style.display = "block";
        this.tabItemsColumn[idx].style.display = "block";
        this.buttons[idx].classList.add("active");
      });
    });
  }

  dynamicStyle() {
    const isMobile = window.innerWidth <= 1023;
    if (isMobile) {
      const inner = document.createElement("p");
      inner.style.width = "250px";
      inner.style.height = "100%";

      const outer = document.createElement("div");
      outer.style.position = "absolute";
      outer.style.top = "0px";
      outer.style.left = "0px";
      outer.style.visibility = "hidden";
      outer.style.width = "200px";
      outer.style.height = "150px";
      outer.style.overflow = "hidden";
      outer.appendChild(inner);

      document.body.appendChild(outer);
      const w1 = inner.offsetWidth;
      outer.style.overflow = "scroll";
      let w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild(outer);

      return w1 - w2;
    }
    return 0;
  }

  addDynamicStyle() {
    const gridRowHidden = document.querySelectorAll(
      ".industry-specialization-tab__grid-row-hidden"
    );
    const gridRowScroll = document.querySelectorAll(
      ".industry-specialization-tab__grid-row-scroll"
    );
    gridRowHidden.forEach((el, idx) => {
      gridRowHidden[idx].style.marginBottom = `${-2 * this.dynamicStyle()}px`;
      gridRowScroll[idx].style.paddingBottom = `${2 * this.dynamicStyle()}px`;
    });
  }

  init() {
    this.specializtionClick();
    this.addDynamicStyle();
    this.dynamicStyle();
    window.addEventListener("resize", () => {
      this.addDynamicStyle();
      this.dynamicStyle();
    });
  }
}
