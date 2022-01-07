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

hoverTop("header nav ul li:nth-child(1)", "header nav ul li .list-1");
hoverTop("header nav ul li:nth-child(5)", "header nav ul li .list-2");
