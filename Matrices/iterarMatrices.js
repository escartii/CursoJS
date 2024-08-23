// Una matriz es un array de 2 dimensiones.
// Declaracion de una matriz
let matriz = [[100,200,300],[101,102,103]];
// Nº de Renglones
console.log(matriz.length)
// Nº de columnas
console.log(matriz[0].length)
console.log(matriz[1].length)
// Recorres las filas
for (let ren = 0; ren < matriz.length; ren++){
    // Recorrer las columnas
    for (let col = 0; col < matriz[ren].length; col++) {
        console.log(`Elemento[${ren}][${col}] = ${matriz[ren][col]}`);
    }
}