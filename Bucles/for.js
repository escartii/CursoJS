// Bucle for
// Declar la variable, condición a evaluar, incremento de contador (igual que en java)

const EDAD = 18;
for (let index = 0; index <= EDAD; index++) {
    console.log(index);
    if (index == EDAD) {
        console.log("Enhorabuena, eres mayor de edad")
    } else{
        console.log("Todavia no eres mayor de edad :(")
    }
}