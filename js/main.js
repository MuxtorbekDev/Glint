// Headre fixd qilish

const navBar = document.querySelector("header");
const navHeight = navBar.getBoundingClientRect().height;
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
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
  const body = document.querySelector("body");

  goClick.addEventListener("click", () => {
    goLeft.classList.add("left");
    body.classList.add("hidden");
  });
  goRight.addEventListener("click", () => {
    goLeft.classList.remove("left");
    body.classList.remove("hidden");
  });
}

myFunc(".dot-icon", "header nav .dot .boxs", ".boxs .box .times i");

function menuBlock(menu, buttonOpen, buttonClose) {
  const goMenu = document.querySelector(menu);
  const goButtonOpen = document.querySelector(buttonOpen);
  const goButtonClose = document.querySelector(buttonClose);
  const body = document.querySelector("body");

  goButtonOpen.addEventListener("click", () => {
    goMenu.classList.add("block");
    body.classList.add("hidden");
  });

  goButtonClose.addEventListener("click", () => {
    goMenu.classList.remove("block");
    body.classList.remove("hidden");
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

var swiper = new Swiper(".mySwiper.boxs", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    994: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".mySwiper.logo-partner", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    994: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

const greyYell = document.querySelectorAll(".greyYell");
const img = document.querySelector(".project .box");
const swiperWrapper = document.querySelector(".swiper-wrapper");

greyYell.forEach((item) => (item.style.width = img.style.width));

function textBlock(itemone, itemtwo) {
  const itemOne = document.querySelector(itemone);
  const itemTwo = document.querySelector(itemtwo);
  const leftIcon = document.querySelector(".icon .far.fa-arrow-left");
  const rightIcon = document.querySelector(".icon .far.fa-arrow-right");

  leftIcon.addEventListener("click", () => {
    itemOne.classList.toggle("block");
    itemTwo.classList.toggle("block");
  });
  rightIcon.addEventListener("click", () => {
    itemOne.classList.toggle("block");
    itemTwo.classList.toggle("block");
  });
}

textBlock(".testim-text.one", ".testim-text.two");

document.querySelector("footer .footer h5 b").innerHTML =
  new Date().getFullYear();
