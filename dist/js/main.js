const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
  navbar.classList.toggle('change', window.scrollY > 100);
})