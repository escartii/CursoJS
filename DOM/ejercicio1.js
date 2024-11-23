// Obtención de un único elemento
let special = document.getElementById('special');
special.style.color = 'red';
console.log(special);

// No obtenemos ningún elemento
let element = document.getElementById('no-existe');

if (!element) {
    alert('No existe el elemento');
}

// Obtenemos varios elementos
let lista_elementos = document.querySelectorAll('li');
console.log(lista_elementos);

// Distintas formas de itrar sobres los elementos obtenidos
// 1. For
// Cambiamos de tamaño la fuente de los elementos de la lista
for (let i = 0; i < lista_elementos.length; i++) {
    lista_elementos[i].style.fontSize = '20px';
}

// 2. For of
// Cambiamos el color de fondo de los elementos de la lista
for (const item of lista_elementos.values()) {
    item.style.fontSize = '50px';
}

// 3. ForEach
// Cambiamos el color de fondo de los elementos de la lista
lista_elementos.forEach((item) => {
    item.style.color = 'blue';
});