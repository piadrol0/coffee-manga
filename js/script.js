let menu = document.getElementById("menu");
let subMenu = document.getElementById("submenu");
let overlay2 = document.getElementById("overlay2");
let mangaProducts = document.getElementById("mangaProducts");
let welcoming = document.getElementById("welcoming");
menu.setAttribute("class", "fa-solid fa-bars");
menu.addEventListener("click", () => {
  if (subMenu.style.display === "none" || subMenu.style.display === "") {
    subMenu.style.display = "block";
    menu.setAttribute("class", "fa-solid fa-xmark");
    overlay2.style.display = "block";
    mangaProducts.style.filter = "Blur(10px)";
    welcoming.style.filter = "Blur(10px)";
  } else {
    subMenu.style.display = "none";
    menu.setAttribute("class", "fa-solid fa-bars");
    overlay2.style.display = "none";
    mangaProducts.style.filter = "Blur(0px)";
    welcoming.style.filter = "Blur(0px)";
  }
});
window.addEventListener("scroll", function () {
  const animatedTexts = document.querySelectorAll(".animated-text");
  const screenPosition = window.innerHeight / 1.2;

  animatedTexts.forEach((animatedText) => {
    const textPosition = animatedText.getBoundingClientRect().top;

    if (textPosition < screenPosition) {
      animatedText.classList.add("visible");
      animatedText.style.animation = "slideIn 600ms ease-in";
    }
  });
});
window.addEventListener("scroll", function () {
  const animatedTextl = document.querySelectorAll(".animated-textl");
  const screenPosition = window.innerHeight / 1;

  animatedTextl.forEach((animatedText) => {
    const textPosition = animatedText.getBoundingClientRect().top;

    if (textPosition < screenPosition) {
      animatedText.classList.add("visible");
      animatedText.style.animation = "all 600ms linear";
    }
  });
});
let price1 = document.getElementById("price1");
let overlay1 = document.getElementById("overlay1");
let sfooter = document.getElementById("sfooter");
setTimeout(() => {
  price1.style.display = "none";
  overlay1.style.display = "none";
  sfooter.style.display = "flex";
}, 5000);
