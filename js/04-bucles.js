// Estructura de repeticion
// tipos de bucles while, do-while, for

// while - mientras se cumple una condicion logica entonces hace tal tarea

/*
while(condicion logica){
todas las lineas de codigo que planeo repetir varias veces
agregar una linea que haga que la condicion logica deje de cumplirse en algun momento
}
*/

// let renglon = 1;
// while (renglon <= 50) {
//   document.writeln(`<p>Renglon numero ${renglon}</p>`);
//   renglon++; // renglon = renglon + 1
// }

// do-while hacer - mientras
/*

do{
todas las lineas de codigo que planeo repetir varias veces
agregar algo que haga que el bucle se deje de repetir en algun momento
}while(condicion logica)

*/
// let pasos = 0;

// do {
//   document.writeln(`<p>Paso numero ${pasos}</p>`);
//   pasos++;
// } while (pasos < 5);

// for
/*
for(inicializar una variable; condicion logica; actualizar la variable){
    todas las lineas de codigo que planeo repetir varias veces
}
*/
for(let contador =10; contador >= 0; contador--){
    document.writeln(`<p>Cuenta regresiva ${contador}</p>`);
}