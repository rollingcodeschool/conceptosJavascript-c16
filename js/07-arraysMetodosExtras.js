//Crear un programa que tenga un array de peliculas. Queremos pedirle al usuario que realice alguna de las siguientes opciones: 1 - encontrar una peli en el array, 2- filtrar peliculas que contengan algun nombre, 3- mostrar todas las peliculas del array.

const peliculas = [
    "El Señor de los Anillos",
    "Jurassic Park",
    "John Wick",
    "Jurassic Park: El Mundo Perdido",
    "Interestelar",
    "Jurassic World"
];

do{
const opcion = parseInt(prompt('Seleccionar una opcion: 1 - encontrar una peli en el array, 2- filtrar peliculas que contengan algun nombre, 3- mostrar todas las peliculas del array'))

switch(opcion){
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log('Mostrar todos los elementos del array')
        document.writeln('<p>Mostrar todos los elementos del array</p>')

        peliculas.forEach((itemPelicula)=> console.log(itemPelicula))

        break;
    default:

}
}while(confirm('¿Quieres realizar otra operación?'))
