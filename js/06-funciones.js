// como declarar o crear una funcion tradicional
function saludar(){
    //aqui agrego todas las lineas de codigo que quiero aislar en esta funcion
    document.writeln('<p>Hola mundo 🌎</p>')
}

//funcion tradicional con parametros
function valorAleatorio(max, min){
   const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    document.writeln(`<p>El numero aleatorio creado es: ${aleatorio}</p>`)
}

//funciones que retornan un valor
function suma(numero1, numero2){
    const total = numero1 + numero2
    console.log(total)
    return total
}


//invocar o llamar a una funcion
saludar()

const max = parseInt(prompt('Ingresa un numero maximo'))
const min = parseInt(prompt('Ingresa un numero minimo'))

valorAleatorio(max,min)

const resultado = suma(10,24);
document.writeln(`<p>El resultado de la suma es: ${resultado}</p>`)
document.writeln(`<p>El resultado de la suma es: ${suma(12,24)}</p>`)
