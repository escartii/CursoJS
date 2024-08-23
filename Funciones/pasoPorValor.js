// Paso Valor en JS
// Pasando información de tipo primitivo (number,bool,string...)

function cambiarValor(parametro){
    parametro = 20;
}

// no cambia el valor
let argumento = 10;
cambiarValor(argumento);
console.log(argumento)