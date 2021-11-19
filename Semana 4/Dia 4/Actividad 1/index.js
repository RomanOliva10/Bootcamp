const slides = document.getElementById("slides");
const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
var i = 0;

const next = document.getElementsByClassName("next");
function nextF(){
    slides.setAttribute("src", images[i]);
    if (i>=images.length - 1) {
        i=0;
    }else{
        i++;
    }
}
next.addEventListener("click", nextF());

const prev = document.getElementsByClassName("prev");
function prevF(){
    slides.setAttribute("src", images[i]);
    if (i <= 0) {
        i = images.length - 1;
    }else{
        i--;
    }
}
prev.addEventListener("click", prevF());