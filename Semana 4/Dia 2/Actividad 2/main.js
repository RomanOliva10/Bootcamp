//Ej 1

const p = document.createElement('p');
const textP = document.createTextNode('Hola');
p.appendChild(textP);
document.body.appendChild(p)


const button = document.createElement('button');
const textButton = document.createTextNode('Boton');
button.appendChild(textButton);
document.body.appendChild(button)

const hiddenContent = () =>{
    if (p.style.display === "none") {
        p.style.display = "block";
    }else{
        p.style.display = "none";
    }
    
};
button.addEventListener('click',hiddenContent);


//Ej 2
const ul = document.createElement('ul');
const li = document.createElement('li');
ul.appendChild(li);
document.body.appendChild(ul);

const input = document.createElement('input');
document.body.appendChild(input);
input.addEventListener("keypress",e=>{
    if (e.key == "Enter"){
        li.textContent = input.value;
    }
});

//Ej 3
const span = document.createElement('span');
let fecha = "Hola "+new Date().getUTCFullYear();
span.textContent = fecha;
document.body.appendChild(span)

//Ej 4
const div = document.createElement("div");
div.style.height = "400px";
div.style.width = "400px";
document.body.appendChild(div);

const button1 = document.createElement("button")
const button2 = document.createElement("button")
button1.textContent = "Boton 1";
button2.textContent = "Boton 2";
div.appendChild(button1);
div.appendChild(button2);
document.addEventListener("click",e=>{
    if(e.target== button1){
        e.stopPropagation();
        console.log("boton 1");
    }
    if(e.target== button2){
        e.stopPropagation();
        console.log("boton 2");
    }
    if(e.target == div){
        e.stopPropagation();
        div.style.backgroundColor = "red";
    }
})


//Ej 5
const form = document.createElement("form");
const input1 = document.createElement("input")
const input2 = document.createElement("input")
const input3= document.createElement("input")
input3.setAttribute("type","submit");

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

document.body.appendChild(form);
