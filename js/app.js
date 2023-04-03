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

const filtrar = elementoList.filter(input => input.type === "text");

if (filtrar.length > 0) {
  filtrar.forEach((elemento) => {
    const instanciaFiltrado = new Elemento("capa", elemento.type, elemento.classBoostrap, elemento.id, elemento.placeholder, elemento.value, elemento.name);
    instanciaFiltrado.render();
  });
}




