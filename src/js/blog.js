import resizeScreen from "./resize";



function checkSafari() {
  resizeScreen([
    {element: '.career-first', className:'mobile', size: 1023, isLess: true },
    {element: '.blog-items', className:'mobile', size: 1023, isLess: true },
  ])
  const isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const mainTentacles = document.querySelectorAll(".career-first-tentacle");
  mainTentacles.forEach((ten) => {
    const images = ten.querySelectorAll("img");
    if (isSafary) {
      images[0].style.display = "block";
      images[1].style.display = "none";
    } else {
      images[1].style.display = "block";
      images[0].style.display = "none";
    }
  });
}

const buttonMouseEnter = (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  let circle = document.createElement("div");
  circle.classList.add("button-circle");
  event.target.appendChild(circle);
  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";
  gsap.to(event.target.children[1], 0.5, {
    width: 800,
    height: 800,
    x: -400,
    y: -400,
  });
};

const buttonMouseLeave = (event) => {
  let x = event.offsetX;
  let y = event.offsetY;

  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";

  gsap.to(event.target.children[1], 0.3, {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    onComplete: () => {
      event.target.removeChild(event.target.children[1]);
    },
  });
};
const btns = document.querySelectorAll('.button--main');
btns.forEach(btn => {
  btn.addEventListener("mouseenter", buttonMouseEnter);
  btn.addEventListener("mouseleave", buttonMouseLeave);
})


checkSafari()