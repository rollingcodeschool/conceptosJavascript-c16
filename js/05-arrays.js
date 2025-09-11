// declarar arrays

//array vacio
const colores = [];

//array con datos
const juegos = ["aoe II", "minecraft", true, 200.5, 2025, "Pokemon"];

//mostrar el array
console.log(colores);
console.log(juegos);
document.writeln(`<p>Array de colores: ${colores}</p>`);
document.writeln(`<p>Array de juegos: ${juegos}</p>`);
document.writeln(`<p>Elemento del array juegos: ${juegos[1]}</p>`);
document.writeln(`<p>Elemento del array juegos: ${juegos[5]}</p>`);
document.writeln(
  `<p>Elemento del array juegos: ${juegos[juegos.length - 1]}</p>`
);
document.writeln(`<p>Elemento del array juegos: ${juegos[20]}</p>`);
document.writeln(
  `<p>Cuantos elementos tiene el array juegos: ${juegos.length}</p>`
);

document.writeln(`<h3>Lista de juegos 🎮</h3>`);

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

// Agregar elementos en el array
juegos.unshift("Lol", "half life");

document.writeln(
  `<h4 class='my-3'>Agregar elementos al inicio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.push("valorant");
document.writeln(
  `<h4 class='my-3'>Agregar elementos al final del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.splice(5, 0, "ciudades");
document.writeln(
  `<h4 class='my-3'>Agregar un elemento en el medio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

//Modificar elementos de un Array
juegos[6] = "Terraria";
// juegos = 'Terraria'  esto no se puede hacer con un array constante

document.writeln(
  `<h4 class='my-3'>Modificar un elemento del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

// borrar elementos del array
juegos.shift();
document.writeln(
  `<h4 class='my-3'>Borrar el primer elemento del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.pop();
document.writeln(
  `<h4 class='my-3'>Borrar el ultimo elemento del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

juegos.splice(3, 1);
// juegos.splice(3,2) borra dos elementos desde la posicion 3
// juegos.splice(3,20) borra todos los elementos desde la posicion 3 hasta la 20
// juegos.splice(3) borra todos los elementos desde la posicion 3 en adelante
document.writeln(
  `<h4 class='my-3'>Borrar elementos del medio del array juegos 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);

// pedir al usuario ingresar un juego, agregarlo al final del array, luego preguntar si quiere adicionar otro juego, si es asi volver a repetir el proceso anterior, caso contrario mostrar el array resultante.

do {
  const nombreJuego = prompt("Ingresa el nombre de un juego:");
  juegos.push(nombreJuego);
} while (confirm("¿Quieres agregar otro juego?"));

document.writeln(
  `<h4 class='my-3'>Cargar dinamicamente elementos al array 🎮 - cantidad de elementos: ${juegos.length}</h4>`
);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < juegos.length; i++) {
  document.writeln(`<li class="list-group-item">${juegos[i]}</li>`);
}
document.writeln(`</ul>`);
