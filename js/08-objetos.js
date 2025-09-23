// objeto: notacion literal

/*propiedades
codigo
nombre
tamaño
precio
marca
estado: true

metodos:
actualizaPrecio(nuevoPrecio)
cambiarEstado(nuevoEstado)
*/

//objeto vacio
const cancion = {}

//objeto con valores
const funko = {
    //definir las propiedades
    //clave: valor (cualquier tipo de dato de js)
    codigo : 867, 
    precio: 20.5,
    nombre: 'Tanjiro kamado',
    marca: 'special edition',
    estado: true,
    //métodos
    mostrarDatos: function (){
        console.log(this)
        document.writeln(`<p><b>Funko: ${this.nombre} </b></p>`)
        document.writeln(`<ul>
            <li>Código: ${this.codigo} </li>
            <li>Precio: ${this.precio} </li>
            <li>Marca: ${this.marca} </li>
            <li>Estado: ${this.estado} </li>
            </ul>`)
    },
    actualizarPrecio: function (nuevoPrecio) {
        console.log(this)
        console.log(this.precio)
        this.precio = nuevoPrecio
        document.writeln(`<p>Precio actualizado, el precio nuevo es: ${this.precio}</p>`)
    }, 
    mostrarEstado: () =>{
         document.writeln(`<p>mostrar si el funko esta habilitado o no</p>`)
    } 
}
// mostrar un objeto

console.log(funko)
document.writeln(funko)
//mostrar las propiedades de un objeto
document.writeln(`<p>Código: ${funko.codigo}</p>`)
document.writeln(`<p>Nombre: ${funko.nombre}</p>`)
document.writeln(`<p>Precio: $ ${funko['precio']}</p>`)
document.writeln(`<p>Tamaño: ${funko.tamanio}</p>`)
document.writeln(`<p>Tamaño: ${funko['tamanio']}</p>`)
document.writeln(`<p>Marca: ${funko.marca}</p>`)
//modificar la propiedad de un objeto
funko.marca = 'Exclusive Funko'
document.writeln(`<p>Marca: ${funko.marca}</p>`)

//agregar propiedades nuevas o metodos nuevos al objeto
funko.tamanio = 'Regular'
document.writeln(`<p>Tamaño: ${funko.tamanio}</p>`)
console.log(funko)

funko.tienda = 'no definido'
document.writeln(`<p>Tienda: ${funko.tienda}</p>`)

//borrar propiedad del objeto
delete funko.tienda
document.writeln(`<p>Tienda: ${funko.tienda}</p>`)

//usar metodos del objeto
funko.mostrarDatos()
funko.actualizarPrecio(40)
funko.mostrarDatos()

console.log(this)