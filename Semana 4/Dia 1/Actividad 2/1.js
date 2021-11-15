const boton = document.querySelector('.button')
const changeContent = () =>{
    document.querySelector('.input').value = content;
    contenido.style.background = 'red'
    contenido.style.color = 'blue'
};
boton.addEventListener('click',changeContent);


const input = document.querySelector('.input')
console.log(input.value)

const contenido= document.querySelector('.content')

content = contenido.innerText = 'Hola, como estas';
