
// Objetos literales, también son conocidos como diccionarios

const persona = {
    nombre: 'Fernando',
    apellido: 'Santiago',
    edad: 24,
    direccion: {
        ciudad: 'CDMX',
        zip: 13278,
        lat: 24.32323,
        lng: 13.2231 
    }
};

// Operador spreet
const persona2 = {...persona};
persona2.nombre = 'Luis'

console.log(persona);
console.log(persona2);