let menu = document.getElementById("menu");
let subMenu = document.getElementById("submenu");
menu.setAttribute("class", "fa-solid fa-bars");
menu.addEventListener("click", () => {
  if (subMenu.style.display === "none" || subMenu.style.display === "") {
    subMenu.style.display = "block";
    menu.setAttribute("class", "fa-solid fa-xmark");
  } else {
    subMenu.style.display = "none";
    menu.setAttribute("class", "fa-solid fa-bars");
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
let price = document.getElementById("price1");
let overlay = document.getElementById("overlay1");
setTimeout(() => {
    price.style.display = "none";
    overlay.style.display = "none"; 
}, 3000);
