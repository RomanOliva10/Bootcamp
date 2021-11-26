const img = document.getElementById("img");
const images = ["img/click-al-mono.JPG", "img/click-al-mono2.JPG"];
var i = 0;


function changeImg(){
    img.setAttribute("src", images[i]);
    if (i>=images.length - 1) {
        i=0;
    }else{
        i++;
    }
}