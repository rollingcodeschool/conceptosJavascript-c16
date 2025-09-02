//  Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// 1- Escribe un programa que pida una frase
//2- preguntar si el primer caracter es un vacal, si lo es lo muestro por pantalla, sino no haga nada
//3- preguntar si el segundo caracter es un vacal, si lo es lo muestro por pantalla, sino no haga nada

const frase = prompt('Ingresa una frase de hasta 5 caracteres').toLowerCase()
// hola
console.log(frase.toUpperCase())
console.log(frase.length)// devulve la cantidad de caracteres de la frase
console.log(frase.charAt(0))// devulve el caracter seleccionado
// analizo el primer caracter
if(frase.charAt(0) === 'a' || frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u'){
    document.writeln(frase.charAt(0))
}
// analizo el segundo caracter
if(frase.charAt(1) === 'a' || frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u'){
    document.writeln(frase.charAt(1))
}

if(frase.charAt(2) === 'a' || frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u'){
    document.writeln(frase.charAt(2))
}

if(frase.charAt(3) === 'a' || frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u'){
    document.writeln(frase.charAt(3))
}

if(frase.charAt(4) === 'a' || frase.charAt(4) === 'e' || frase.charAt(4) === 'i' || frase.charAt(4) === 'o' || frase.charAt(4) === 'u'){
    document.writeln(frase.charAt(4))
}


