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
