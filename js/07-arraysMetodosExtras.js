//Crear un programa que tenga un array de peliculas. Queremos pedirle al usuario que realice alguna de las siguientes opciones: 1 - encontrar una peli en el array, 2- filtrar peliculas que contengan algun nombre, 3- mostrar todas las peliculas del array.

function mostrarMensaje(mensaje) {
  console.log(mensaje);
  document.writeln(`<p>${mensaje}</p>`);
}

const peliculas = [
  "El Señor de los Anillos",
  "Jurassic Park",
  "John Wick",
  "Jurassic Park: El Mundo Perdido",
  "Interestelar",
  "Jurassic World",
];

do {
  const opcion = parseInt(
    prompt(
      "Seleccionar una opcion: 1 - encontrar una peli en el array, 2- filtrar peliculas que contengan algun nombre, 3- mostrar todas las peliculas del array"
    )
  );

  switch (opcion) {
    case 1:
      //pedir al usuario la peli que quiere buscar
      const peliBuscada = prompt("Ingresa la pelicula que quieres buscar");
      //buscar la pelicula y mostrar por pantalla si la encontre, si no mostrar un mensaje de pelicula no encontrada.
      const coincidencia = peliculas.find(
        (pelicula) => pelicula.toLowerCase() === peliBuscada.toLowerCase()
      );

      console.log(coincidencia);
      //falsies = false, '', undefined, null
      if (coincidencia) {
        mostrarMensaje("Pelicula encontrada 🎬 " + peliBuscada);
      } else {
        mostrarMensaje("No encontramos la peli que seleccionaste 😌 ");
      }
      break;
    case 2:
      const peli = prompt("Ingresa la pelicula que quieres buscar");
      const peliculasFiltradas = peliculas.filter((pelicula) =>
        pelicula.toLowerCase().includes(peli.toLowerCase())
      );
      console.log(peliculas[0].toLowerCase().includes(peli.toLowerCase()));
      console.log(peliculas[2].toLowerCase().includes(peli.toLowerCase()));
      //investiguen el uso de include para buscar una peli que 'incluya el termino jurassic por ejemplo, la idea es mostrar por pantalla todas las pelis que incluyan esa palabra'
      peli.charAt(0)
      if (peliculasFiltradas.length !== 0) {
        mostrarMensaje("Peliculas filtradas:");
        peliculasFiltradas.forEach((itemPelicula) =>
          mostrarMensaje(itemPelicula)
        );
      } else {
        mostrarMensaje(
          "No se encontraron peliculas con el termino de busqueda"
        );
      }
      break;
    case 3:
      mostrarMensaje("Mostrar todos los elementos del array");
      peliculas.forEach((itemPelicula) => mostrarMensaje(itemPelicula));
      break;
    default:
  }
} while (confirm("¿Quieres realizar otra operación?"));
