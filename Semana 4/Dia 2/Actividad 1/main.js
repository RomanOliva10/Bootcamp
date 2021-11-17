//Ej 1

const container = document.querySelector('.container');
const p = document.querySelectorAll(".p");
let cont = 0;
p.forEach(element => {
    cont+=element.textContent.length;
    element.style.background = 'red';
});


//Ej 2
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "Cantidad de palabras: "+cont;
document.body.insertAdjacentElement("afterbegin",nuevoParrafo) ;


//Ej 3
const a = document.querySelector("a");
a.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.insertAdjacentText("afterbegin",a.href);
});


//Ej 4
const img = document.createElement("img");
img.setAttribute("src","photo.jpg");
container.appendChild(img);
