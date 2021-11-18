const play = document.getElementById('play');

function changeStatus(){
    if (play.classList.contains('fa-play-circle')){
        play.classList.remove('fa-play-circle'); 
        play.classList.add('fa-pause-circle');
    }else{
        play.classList.add('fa-play-circle');
    }
};
play.addEventListener('click', changeStatus);


const like = document.getElementById('like');
function changeColor(){
    if (like.style.color === "var(--dark-color)") {
    like.style.color = "red";
    }else{
    like.style.color = "var(--dark-color)";
    }
};
like.addEventListener('click', changeColor);