
let calculadora = document.getElementById ("calculadora");

console.log (calculadora);

calculadora.style.backgroundColor = "green";

let ERROR = document.getElementById ("error");
let FLU = document. getElementById ("flu");
let MAN = document. getElementById ("man");
let INPUT = document. getElementById ("peso");
const BOTON = document. getElementById ("calcular");

BOTON.addEventListener("click", calcular);

console.log(1);
saludo();
console.log(2);

function calcular () {}


function saludo(){
    console.log ("bienvenida desde una funcion");