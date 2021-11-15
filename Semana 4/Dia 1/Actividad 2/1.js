const boton = document.querySelector('.button')
const changeContent = () =>{
    contenido.innerText = input.value;
    contenido.style.background = 'red'
    contenido.style.color = 'blue'
};
boton.addEventListener('click',changeContent);

const contenido= document.querySelector('.content')
contenido.innerText = 'Hola, como estas';

const input = document.querySelector('.input')
console.log(input.value)

