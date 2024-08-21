// Operadores de comparación
// si se utiliza el triple === se compara que sea igual el tipo y el dato.

let a = 5;
let b = '5';
console.log(typeof a);
console.log(typeof b);

// Operadores igualdad ==
// solo compara valores y hace una conversion si es necesario.
console.log("a == b ->", a == b);

// Operador de igualdad exacto.
// se compara el valor y el tipo de dato.
console.log("a === b -> ", a === b);
console.log(`${a} == ${b} -> ${a == b}`)

// String interpolation
console.log(`Texto...${a}`)
console.log(`${a} === ${b} -> ${a === b}`)

// Operador menor que
console.log(`${a} < ${b} -> ${a < b}`)

// Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`)

// Operador mayor que
console.log(`${a} > ${b} -> ${a > b}`)

// Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`)