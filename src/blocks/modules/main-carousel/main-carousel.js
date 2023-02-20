const mainCarousel = class MainCarousel {
  constructor() {}
  onCarouselChange() {}
  init() {
    const self = this;
    const carousel = document.querySelector(".main-carousel-carousel");
    if (!carousel) return;
    const cells = carousel.querySelectorAll(".main-carousel-cell");
    let cellCount; // cellCount set from cells-range input value
    let selectedIndex = 0;
    const cellWidth = carousel.offsetWidth;
    const cellHeight = carousel.offsetHeight;
    let isHorizontal = true;
    let rotateFn = isHorizontal ? "rotateY" : "rotateX";
    let radius, theta;

    const maxTitlesHeight = Math.max.apply(
      null,
      document
        .querySelectorAll(".main-carousel__text-item_titles .title")
        .forEach((ele) => {
          return ele.clientHeight;
        })
    );
    const maxTextsHeight = Math.max.apply(
      null,
      document
        .querySelectorAll(".main-carousel__text-item_texts .text")
        .forEach((ele) => {
          return ele.clientHeight;
        })
    );

    function rotateCarousel() {
      self.onCarouselChange();
      const angle = theta * selectedIndex * -1;
      const badge = document.querySelector(
        ".main-carousel__text-item_gifts .badge"
      );
      const gradesFrom = document.querySelector(".main-carousel__grades .from");
      const giftsLeftIn = document.querySelector(
        ".main-carousel__text-item_gifts .left__in"
      );
      badge.style.transform = `translateY(-50%) translateX(50%) rotate(${angle}deg)`;
      badge.textContent = Math.round(
        (360 / cellCount) * (selectedIndex % cellCount)
      );
      gradesFrom.textContent = Math.round(
        (360 / cellCount) * (selectedIndex % cellCount)
      );

      if (Math.round((360 / cellCount) * (selectedIndex % cellCount)) < 0) {
        gradesFrom.textContent =
          Math.round((360 / cellCount) * (selectedIndex % cellCount)) * -1;
      }
      giftsLeftIn.style.transform = `rotate(${angle * -1}deg)`;

      carousel.style.transform =
        "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      const cells = carousel.querySelectorAll(".main-carousel-cell");
      document
        .querySelectorAll(`.main-carousel__text-item_titles .title`)
        .forEach((item) => {
          item.classList.remove("isActive");
        });
      if (
        document.querySelector(
          `.main-carousel__text-item_titles .title[data-title-id="${
            (selectedIndex % cellCount) + 1
          }"]`
        )
      ) {
        document
          .querySelector(
            `.main-carousel__text-item_titles .title[data-title-id="${
              (selectedIndex % cellCount) + 1
            }"]`
          )
          .classList.add("isActive");
      }
      gsap.to(document.querySelectorAll(`.main-carousel__text-item_titles`), {
        height: maxTitlesHeight,
      });
      document
        .querySelectorAll(`.main-carousel__text-item_texts .text`)
        .forEach((item) => {
          item.classList.remove("isActive");
        });
      if (
        document.querySelector(
          `.main-carousel__text-item_texts .text[data-text-id="${
            (selectedIndex % cellCount) + 1
          }"]`
        )
      ) {
        document
          .querySelector(
            `.main-carousel__text-item_texts .text[data-text-id="${
              (selectedIndex % cellCount) + 1
            }"]`
          )
          .classList.add("isActive");
      }
      gsap.to(document.querySelectorAll(`.main-carousel__text-item_texts`), {
        height: maxTextsHeight,
      });
    }

    const prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", function () {
      selectedIndex--;
      rotateCarousel();
      clearInterval(interval);
    });

    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function () {
      selectedIndex++;
      rotateCarousel();
      clearInterval(interval);
    });

    const cellsRange = document.querySelector(".cells-range");
    cellsRange.addEventListener("change", changeCarousel);
    cellsRange.addEventListener("input", changeCarousel);

    function changeCarousel() {
      cellCount = cellsRange.value;
      theta = 360 / cellCount;
      const cellSize = isHorizontal ? cellWidth : cellHeight;
      radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (i < cellCount) {
          // visible cell
          cell.style.opacity = 1;
          const cellAngle = theta * i;
          cell.style.transform =
            rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
        } else {
          // hidden cell
          cell.style.opacity = 0;
          cell.style.transform = "none";
        }
      }

      rotateCarousel();
    }

    const orientationRadios = document.querySelectorAll(
      'input[name="orientation"]'
    );
    (function () {
      for (let i = 0; i < orientationRadios.length; i++) {
        const radio = orientationRadios[i];
        radio.addEventListener("change", onOrientationChange);
      }
    })();

    function onOrientationChange() {
      const checkedRadio = document.querySelector(
        'input[name="orientation"]:checked'
      );
      isHorizontal = checkedRadio.value == "horizontal";
      rotateFn = isHorizontal ? "rotateY" : "rotateX";
      changeCarousel();
    }
    function chooseElem(index) {
      if (selectedIndex == index) return;
      selectedIndex = index;
      rotateCarousel();
    }

    document.addEventListener("click", function (event) {
      if (event.target.dataset.cellIndex) {
        chooseElem(event.target.dataset.cellIndex - 1);
        clearInterval(interval);
      }
    });
    const interval = setInterval(function () {
      selectedIndex++;
      rotateCarousel();
    }, 5000);

    // set initials
    onOrientationChange();
    let starCoord = 0;

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1023) {
        interact(".main-carousel")
          .draggable({
            origin: "self",
            inertia: true,
            listeners: {
              move(event) {},
            },
          })
          .on("dragstart", (event) => {
            starCoord = event.clientX;
          })
          .on("dragend", (event) => {
            if (starCoord > event.clientX) {
              selectedIndex++;
              rotateCarousel();
              clearInterval(interval);
            } else {
              selectedIndex--;
              rotateCarousel();
              clearInterval(interval);
            }
          });
      }
    });
  }
};

export default mainCarousel;
