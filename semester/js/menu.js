// Hämta hamburger-knapp och meny
const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Klickfunktion: visa/dölj menyn
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});



