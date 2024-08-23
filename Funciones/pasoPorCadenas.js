// Cadenas y funciones en JS
// cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro = "Adiós";
}

// 2. Llamar a la función
let argumento = "Hola";
console.log(`Antes función: ${argumento}`);
cambiarValor(argumento);
console.log(`Después de la función: ${argumento}`);