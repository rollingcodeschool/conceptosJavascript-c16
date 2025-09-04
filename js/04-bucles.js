// Estructura de repeticion
// tipos de bucles while, do-while, for

// while - mientras se cumple una condicion logica entonces hace tal tarea

/*
while(condicion logica){
todas las lineas de codigo que planeo repetir varias veces
agregar una linea que haga que la condicion logica deje de cumplirse en algun momento
}
*/

let renglon = 1;
while (renglon <= 50) {
  document.writeln(`<p>Renglon numero ${renglon}</p>`);
  renglon++; // renglon = renglon + 1
}
