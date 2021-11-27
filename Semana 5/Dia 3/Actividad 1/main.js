const menu = document.getElementById("menu");
const button = document.getElementById("button");
const hamburger = document.getElementById("hamburger");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const nav = document.getElementById("nav");
function showMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        main.style.display = "block";
        footer.style.display = "flex";
        hamburger.className = 'fas fa-bars';
        nav.style.backgroundColor = 'white';
        nav.style.height = '80px'
    }else {
        hamburger.className = 'fas fa-times';
        menu.style.display = "block";
        main.style.display = "none";
        footer.style.display = "none";
        nav.style.backgroundColor = 'var(--gray)';
        nav.style.height = '100vh'
    }
}