/* class CreateInput{
    constructor (parentId, type, classBoostrap, id, placeholder, name){
        this.parentId = parentId;
        this.type = type;
        this.classBoostrap = classBoostrap;
        this.id = id;
        this.placeholder = placeholder;
        this.name = name;
    }
    render() {
        let inputForm = document.getElementById(this.parentId);
        const myInputForm = `${inputForm.innerHTML}<input type="${this.type}" class="${this.classBoostrap}" id="${this.id}" placeholder="${this.placeholder}" name="${this.name}">`;
        inputForm.innerHTML = myInputForm;
    }
} */
    /*renderInput(type, classBootstrap, id, placeholder, name) {
         const inputForm = document.getElementById(this.parentId);
        const inputElement = document.createElement('input');
        inputElement.type = type;
        inputElement.classList.add(classBootstrap);
        inputElement.id = id;
        inputElement.placeholder = placeholder;
        inputElement.name = name;
        const divElement = document.createElement('div');
        divElement.classList.add('col-3');
        divElement.appendChild(inputElement);
        inputForm.appendChild(divElement);
      }      
}

let primerInput = new CreateInput("capa", "password", "form-control w-25", "form", "Ingrese password", "form");
primerInput.render();
let primerInput1 = new CreateInput("capa", "text", "form-control w-25", "form1", "Ingrese texto", "form1");
primerInput1.render();
primerInput.renderInput("password", "form-control", "form2", "Ingrese password", "form2");
primerInput.renderInput("email", "form-control", "form3", "Ingrese email", "form3");

function createInput(parentId, type, classBootstrap, id, placeholder, name) {
    const inputForm = document.getElementById(parentId);
    const myInputForm = `${inputForm.innerHTML}<input type="${type}" class="${classBootstrap}" id="${id}" placeholder="${placeholder}" name="${name}">`;
    inputForm.innerHTML = myInputForm;
}
  
createInput("capa", "email", "form-control w-25", "form4", "Ingrese email", "form4"); */

class Elemento{
    constructor(parentId, type, classBoostrap, id, placeholder, texto, name){
        this.parentId = parentId;
        this.type = type;
        this.classBoostrap = classBoostrap;
        this.id = id;
        this.placeholder = placeholder;
        this.texto = texto;
        this.name = name;
    }
    render(){
        const elemento = document.getElementById(this.parentId);
        const myBoton = `${elemento.innerHTML}<input type="${this.type}" class="${this.classBoostrap}" id="${this.id}" placeholder="${this.placeholder}" value="${this.texto}" name="${this.name}">`;
        elemento.innerHTML = myBoton;
    }
};

const elementoList = [
    {type: "button", classBoostrap: "btn btn-primary", value: "Click", id: "boton1", placeholder: "", name: "boton1"},
    {type: "submit", classBoostrap: "btn btn-danger", value: "Enviar", id: "boton2", placeholder: "", name: "boton2"},
    {type: "reset", classBoostrap: "btn btn-success", value: "Resetear", id: "boton3", placeholder: "", name: "boton3"},
    {type: "text", classBoostrap: "form-control w-25", value: "", id: "input1", placeholder: "Ingrese nombre", name: "input1"},
    {type: "text", classBoostrap: "form-control w-25", value: "", id: "input1", placeholder: "Ingrese apellido", name: "input1"}
];

elementoList.forEach((elemento) => {
    const instanciaBoton = new Elemento("capa", elemento.type, elemento.classBoostrap, elemento.id, elemento.placeholder, elemento.value, elemento.name);
    instanciaBoton.render();
});
const inputForm = document.getElementById("capa");
const br = document.createElement("br");
const p = document.createElement('p');
inputForm.appendChild(br);
p.innerHTML = "Despues de usar la función filter"
inputForm.appendChild(p);

/* const filtrar = elementoList.filter(input => input.type === "text");

const lista = document.createElement("ul");
filtrar.forEach((elemento) => {
  const li = document.createElement("li");
  li.textContent = elemento.name;
  lista.appendChild(li);
});
document.body.appendChild(lista); */

/* const filtrar = elementoList.filter(input => input.type === "text");

if (filtrar.length > 0) {
  const elementoFiltrado = filtrar[0];
  const instanciaFiltrado = new Elemento("capa", elementoFiltrado.type, elementoFiltrado.classBoostrap, elementoFiltrado.id, elementoFiltrado.placeholder, elementoFiltrado.value, elementoFiltrado.name);
  instanciaFiltrado.render();
} */

const filtrar = elementoList.filter(input => input.type === "text");

if (filtrar.length > 0) {
  filtrar.forEach((elemento) => {
    const instanciaFiltrado = new Elemento("capa", elemento.type, elemento.classBoostrap, elemento.id, elemento.placeholder, elemento.value, elemento.name);
    instanciaFiltrado.render();
  });
}




