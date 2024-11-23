// Crear la matriz de equipos de la liga
const equipos = [
    { numero: 1, nombre: 'Barcelona' },
    { numero: 2, nombre: 'Madrid' },
    { numero: 3, nombre: 'Valencia' },
    { numero: 4, nombre: 'Atletico' }
];

// Recorrer la matriz utilizando forEach
equipos.forEach((equipo) => {
    console.log(`${equipo.numero}: ${equipo.nombre}`);
});
