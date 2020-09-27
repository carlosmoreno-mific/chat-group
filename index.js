const btn = document.getElementById("hamburguer");
const closeBtn = document.getElementById("close-button");
const nav = document.getElementById("sidebar-container");
const btnToggleDropdown = document.getElementById('btn-toggle-dropdown');
const dropdownContent = document.getElementById('dropdown-content');

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

btnToggleDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
});

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
}