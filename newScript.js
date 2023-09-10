let ERROR = document.getElementById ("error");
let FLU = document. getElementById ("flu");
let MAN = document. getElementById ("man");
let INPUT = document. getElementById ("peso");
const BOTON = document. getElementById ("calcular");

BOTON.addEventListener("click", calcular);

function calcular() {
    let peso= INPUT.value;
    
    if (peso > 0) {
        ERROR.style.display="none";
        let res = holliday("peso");
        console.log (res);
    } else {
        console.log("error");
        ERROR.style.display="block";
    }
}

    function holliday (peso) {
        let volumen;

        if (peso <= 10){
            volumen = peso * 100
        }else if (peso > 10 && peso <= 20){
            volumen = 1000 + (peso - 10) * 50;
        } else {
            volumen = 1500 + (peso - 20) * 20;
        }
        return volumen;
    }

        
    console.log ("error");  
    console.log ("verdadero");
    console.log ("se ha apretado el boton");
    console.log (peso);

    console.log (true);
    
    let a= 30;
    let b= 30;
    let c = 4

    if(b > a){
        console.log (b);
    } else {
        console.log (a);
    }
