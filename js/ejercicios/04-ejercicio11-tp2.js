//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

const nombre1 = prompt("Ingresa el primer nombre");
const edad1 = parseInt(prompt("Ingresa la edad de la primera persona"));
const nombre2 = prompt("Ingresa el segundo nombre");
const edad2 = parseInt(prompt("Ingresa la edad de la segunda persona"));
const nombre3 = prompt("Ingresa el tercer nombre");
const edad3 = parseInt(prompt("Ingresa la edad de la tercer persona"));

console.log(
  `Persona 1:${nombre1} - edad: ${edad1}`,
  `Persona 2:${nombre2} - edad: ${edad2}`,
  `Persona 3:${nombre3} - edad: ${edad3}`
);
const edadMaxima = Math.max(edad1, edad2, edad3);
console.log(Math.max(edad1, edad2, edad3));

if (edadMaxima === edad1) {
  document.writeln(
    `La persona mas grande es ${nombre1} y tiene ${edadMaxima} años.`
  );
} else if (edadMaxima === edad2) {
  document.writeln(
    `La persona mas grande es ${nombre2} y tiene ${edadMaxima} años.`
  );
} else {
  document.writeln(
    `La persona mas grande es ${nombre3} y tiene ${edadMaxima} años.`
  );
}
