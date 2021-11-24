const navlinks = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger");
function showLikns() {
    if (navlinks.style.display === "block") {
      navlinks.style.display = "none";
      hamburger.className = 'fas fa-bars';
    } else {
      hamburger.className = 'fas fa-times';
      navlinks.style.display = "block";
    }
  }