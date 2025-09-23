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
        document.writeln(`<p>Mostrar todos los datos del objeto</p>`)
    },
    actualizarPrecio: (nuevoPrecio) =>{
         document.writeln(`<p>agregar el codigo para actualizar el precio</p>`)
    }, 
    mostrarEstado: () =>{
         document.writeln(`<p>mostrar si el funko esta habilitado o no</p>`)
    } 
}