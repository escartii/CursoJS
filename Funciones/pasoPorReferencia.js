// Paso por referencia en JS
// Objetos (por ejemplo un array) se pasan por referencia.
// Esto quiere decir que no pasamos un valor, si no una referencia en memoria.

function cambiarValor(parametro){
    parametro[0] = 20;
}

// Llamamos a la función
let arreglo = [10];
console.log(`Antes de la funcion: ${arreglo[0]}`)
cambiarValor(arreglo)
console.log(`después de la función: ${arreglo[0]}`)