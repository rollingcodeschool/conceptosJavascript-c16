// declarar arrays

//array vacio
const colores = [];

//array con datos
const juegos = ['aoe II', 'minecraft',true, 200.5, 2025, 'Pokemon']

//mostrar el array
console.log(colores)
console.log(juegos)
document.writeln(`<p>Array de colores: ${colores}</p>`)
document.writeln(`<p>Array de juegos: ${juegos}</p>`)
document.writeln(`<p>Elemento del array juegos: ${juegos[1]}</p>`)
document.writeln(`<p>Elemento del array juegos: ${juegos[5]}</p>`)
document.writeln(`<p>Elemento del array juegos: ${juegos[juegos.length -1]}</p>`)
document.writeln(`<p>Elemento del array juegos: ${juegos[20]}</p>`)
document.writeln(`<p>Cuantos elementos tiene el array juegos: ${juegos.length}</p>`)

document.writeln(`<h3>Lista de juegos 🎮</h3>`)

document.writeln(`<ul class="list-group">`)
for(let i=0 ; i < juegos.length; i++){
    document.writeln(`<li class="list-group-item">${juegos[i]}</li>`)
}
document.writeln(`</ul>`)