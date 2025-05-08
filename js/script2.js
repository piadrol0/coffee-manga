const items = document.querySelectorAll(".item");
let price = document.getElementById("price");
let overlay = document.getElementById("overlay");
const body = document.body;
items.forEach((item) => {
  item.addEventListener("click", () => {
    price.style.display = "flex";
    overlay.style.display = "block";
  });
});
overlay.addEventListener("click", () => {
    price.style.display = "none";
    overlay.style.display = "none"; 
  });
