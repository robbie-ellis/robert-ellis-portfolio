const menuButton = document.getElementById("menuButton");
const navPortfolioMenu = document.getElementById("navPortfolioMenu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle('open');
  navPortfolioMenu.classList.toggle('open');
  overlay.classList.toggle('open');
});