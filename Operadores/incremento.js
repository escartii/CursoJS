// Operadores de incremento / decremento

let a,b,c;
a = 0;
// Pre-incremento
++a;
console.log(a);
//Post-incremento
a++;
console.log(a);

// Pre-drecremento
--a;
console.log(a);
//Post-decremento
a--;
console.log(a);

// Ejemplo de uso
a = 5;
b = 2;
// el resultado es 12 porque el se multiplica por b, el decremento se aplica después de la primera vez que se utiliza.
c = ++a * b--;
console.log(c);