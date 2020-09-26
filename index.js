const btn = document.getElementById("hamburguer");
const closeBtn = document.getElementById("close-button");
const nav = document.getElementById("sidebar-container");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});