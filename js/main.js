// Headre fixd qilish

const navBar = document.querySelector("header");
const navHeight = navBar.getBoundingClientRect().height;
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  console.log();
  if (scrollHeight > navHeight + 100) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// nav hover

function hoverTop(hover, item) {
  const hoverItem = document.querySelector(hover);
  const topItem = document.querySelector(item);

  hoverItem.addEventListener("mousemove", () => {
    topItem.classList.add("block");
  });

  hoverItem.addEventListener("mouseout", () => {
    topItem.classList.remove("block");
  });
}

hoverTop("header nav ul li:nth-child(2)", "header nav ul li .list-1");
hoverTop("header nav ul li:nth-child(6)", "header nav ul li .list-2");

// dot block

function myFunc(itemClick, itemLeft, itemRight) {
  const goClick = document.querySelector(itemClick);
  const goLeft = document.querySelector(itemLeft);
  const goRight = document.querySelector(itemRight);

  goClick.addEventListener("click", () => {
    goLeft.classList.add("left");
  });
  goRight.addEventListener("click", () => {
    goLeft.classList.remove("left");
  });
}

myFunc(".dot-icon", "header nav .dot .boxs", ".boxs .box .times i");

function menuBlock(menu, buttonOpen, buttonClose) {
  const goMenu = document.querySelector(menu);
  const goButtonOpen = document.querySelector(buttonOpen);
  const goButtonClose = document.querySelector(buttonClose);

  goButtonOpen.addEventListener("click", () => {
    goMenu.classList.add("block");
  });

  goButtonClose.addEventListener("click", () => {
    goMenu.classList.remove("block");
  });
}

menuBlock("header nav ul", "header nav .bars i", "#timesUl i");

const sliderOne = document.querySelector(".slider.one");
const iconOne = document.querySelector(".bos h4.one");
const sliderTwo = document.querySelector(".slider.two");
const iconTwo = document.querySelector(".bos h4.two");
const pageOneText = document.querySelector(".main .slider  .page-text.one");
const pageTwoText = document.querySelector(".main .slider  .page-text.two");
const pageOneImage = document.querySelector(".main .slider  .page-image.one");
const pageTwoImage = document.querySelector(".main .slider  .page-image.two");

function sliderOneBlock(sliderOne, iconOne) {
  sliderOne.classList.add("flex");
  iconOne.classList.add("yellovG");
  pageOneImage.classList.add("animation");
  pageOneText.classList.add("animation");
}

function sliderOneNone(sliderOne, iconOne) {
  sliderOne.classList.remove("flex");
  iconOne.classList.remove("yellovG");
  pageOneImage.classList.remove("animation");
  pageOneText.classList.remove("animation");
}

function sliderTwoBlock(sliderTwo, iconTwo) {
  sliderTwo.classList.add("flex");
  iconTwo.classList.add("yellovG");
  pageTwoImage.classList.add("animation");
  pageTwoText.classList.add("animation");
}

function sliderTwoNone(sliderTwo, iconTwo) {
  sliderTwo.classList.remove("flex");
  iconTwo.classList.remove("yellovG");
  pageTwoImage.classList.remove("animation");
  pageTwoText.classList.remove("animation");
}

iconTwo.addEventListener("click", () => {
  sliderOneNone(sliderOne, iconOne);
  sliderTwoBlock(sliderTwo, iconTwo);
});

iconOne.addEventListener("click", () => {
  sliderOneBlock(sliderOne, iconOne);
  sliderTwoNone(sliderTwo, iconTwo);
});

// const myInterval = setInterval(myTimer, 3000);

// function myTimer() {

// }

// function myStop() {
//   clearInterval(myInterval);
// }

// while (0 < 100) {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// }

// var timeInterval = 1000;
// var automate = true;

// function navigateSlider() {
//   if (automate) {
//     setInterval(function () {
//       let num = 1;
//       if (num % 2 == 1) {
//         sliderOneNone(sliderOne, iconOne);
//         sliderTwoBlock(sliderTwo, iconTwo);
//         num++;
//       } else {
//         sliderOneNone(sliderOne, iconOne);
//         sliderTwoBlock(sliderTwo, iconTwo);
//         num++;
//         navigateSlider();
//       }
//     }, timeInterval);
//   }
// }
// navigateSlider();
// let num = 1;

// function autoPlay() {
//   if (num % 2 > 1) {
//     sliderOneNone(sliderOne, iconOne);
//     sliderTwoBlock(sliderTwo, iconTwo);
//     num++;
//   } else {
//     sliderOneNone(sliderOne, iconOne);
//     sliderTwoBlock(sliderTwo, iconTwo);
//     num++;
//     navigateSlider();
//   }
// }

// setInterval(autoPlay(), 3000);
