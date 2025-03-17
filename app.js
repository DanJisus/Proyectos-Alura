//varibles con enlace a id predefinidots en html
const inputAmigos = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulresultado = document.getElementById ("resultado");


//funciones

//funcion de agregar amigo a lista//
function agregarAmigo() {
    if (!inputAmigos.value){
        alert("favor escribir un nombre valido")};
    listaAmigos.push(inputAmigos.value);
    ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${inputAmigos.value}</li>`;
};

//funcion de sorteo//
function sortearAmigo(){
const random = Math.floor(Math.random() * listaAmigos.length);
const amigoSecreto =  listaAmigos[random];
ulresultado.innerHTML = `<li>${amigoSecreto}</li>`;
};