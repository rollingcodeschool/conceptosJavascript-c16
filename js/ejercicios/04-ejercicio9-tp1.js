//  Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// 1- Escribe un programa que pida una frase
//2- preguntar si el primer caracter es un vacal, si lo es lo muestro por pantalla, sino no haga nada
//3- preguntar si el segundo caracter es un vacal, si lo es lo muestro por pantalla, sino no haga nada

const frase = prompt("Ingresa una frase").toLowerCase();
//hola mundo_
for (let caracter = 0; caracter <= frase.length -1; caracter++) {
    console.log(frase.charAt(caracter))
  if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  ) {
    document.writeln(frase.charAt(caracter));
  }
}
