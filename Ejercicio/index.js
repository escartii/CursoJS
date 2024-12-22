// Si utilizamos querySelector, y solo queremos seleccionar un elemento, debemos pasar a la función
// un evento que se ejecute en el elemento que queremos seleccionar, en este caso, el evento es el click
// si el objetivo del evento es el mismo elemento, entonces se ejecuta la alerta.

let middlebox = document.querySelector('.middle-box');

middlebox.addEventListener('click', function(event) {
    if (event.target === middlebox) { // Comprobamos si el target es el propio middlebox
        alert("CLICK DIRECTO en middle-box");
    }
});