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
window.addEventListener('scroll', function() {
  const animatedTexts = document.querySelectorAll('.animated-text'); // انتخاب تمام عناصر
  const screenPosition = window.innerHeight / 1.2; // 1.2 برای اینکه زودتر ظاهر شود

  animatedTexts.forEach(animatedText => { // حلقه برای هر عنصر
      const textPosition = animatedText.getBoundingClientRect().top;

      if (textPosition < screenPosition) {
          animatedText.classList.add('visible'); // اضافه کردن کلاس visible
          animatedText.style.animation = 'slideIn 600ms ease-in-out'; // اجرای انیمیشن
      }
  });
});
window.addEventListener('scroll', function() {
  const animatedTextl = document.querySelectorAll('.animated-textl'); // انتخاب تمام عناصر
  const screenPosition = window.innerHeight / 1; // 1.2 برای اینکه زودتر ظاهر شود

  animatedTextl.forEach(animatedText => { // حلقه برای هر عنصر
      const textPosition = animatedText.getBoundingClientRect().top;

      if (textPosition < screenPosition) {
          animatedText.classList.add('visible'); // اضافه کردن کلاس visible
          animatedText.style.animation = 'all 600ms linear'; // اجرای انیمیشن
      }
  });
});

