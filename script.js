const header = document.querySelector("header");

document.querySelector(".menu-icon").addEventListener("click", () => {
  header.classList.toggle("close");
});