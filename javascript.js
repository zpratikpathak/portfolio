document.getElementById("menuIcon").addEventListener("click", () => {
  const menuIcon = document.querySelector(".menuIcon");
  const navbar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});
