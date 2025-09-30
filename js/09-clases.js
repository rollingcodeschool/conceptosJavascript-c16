//Usuarios
// propiedades: Nombre, apellido, email, password, edad, dni, estado
// metodos: iniciarSesion, recuperarPassword, mostrarDatos

//Alumnos
// curso, asistencia, notas, modulos, rollingCoins
// actualizarRollingCoins, mostrarDatos, actualizarAsistencia, agregarNotas, mostrarModulo, actualizarModulo

class Usuario {
  //diseñar las propiedades
  #email;
  #password;
  constructor(nombreParam, apellido, email, password, edad, dni) {
    // clave: valor
    this.nombre = nombreParam;
    this.apellido = apellido;
    this.#email = email;
    this.#password = password;
    this.edad = edad;
    this.dni = dni;
    this.estado = true; //propiedades por defecto
  }
  //diseñar get y set
  get email() {
    return this.#email;
  }

  set email(nuevoEmail) {
    //si existe el nuevo email
    if (nuevoEmail) {
      this.#email = nuevoEmail;
    }
  }

  get getPassword() {
    return this.#password;
  }

  set setPassword(nuevoPassword) {
    // simbolo de estrictamente distinto ! ==
    // if(nuevoPassword !== "")
    // if(nuevoPassword) // nuevoPassword no es un valor vacio '', false, null
    if (nuevoPassword.length > 0) {
      this.#password = nuevoPassword;
    }
  }

  //diseñar los métodos
  mostrarDatos() {
    document.writeln(`<h3>Usuario</h3>`);
    document.writeln(`<ul>
            <li>Nombre y apellido: ${(this.nombre, this.apellido)} </li>
            <li>Email: ${this.#email} </li>
            <li>Edad: ${this.edad} </li>
            <li>DNI: ${this.dni} </li>
            </ul>`);
  }
}
// ? Herencia
class Alumno extends Usuario {
  #asistencia;
  #notas;
  #modulos;
  #rollingCoins;
  #curso;
  constructor(nombreParam, apellido, email, password, edad, dni, curso) {
    //super invoca al constructor de la clase padre
    super(nombreParam, apellido, email, password, edad, dni);
    this.#curso = curso;
    this.#asistencia = 0;
    this.#notas = 0;
    this.#modulos = 1;
    this.#rollingCoins = 0;
  }
  //agrego los get y set
  get curso() {
    return this.#curso;
  }
  get asistencia() {
    return this.#asistencia;
  }
  get notas() {
    return this.#notas;
  }
  get modulos() {
    return this.#modulos;
  }
  get rollingCoins() {
    return this.#rollingCoins;
  }
  set asistencia(nuevaAsistencia) {
    this.#asistencia = nuevaAsistencia;
  }
  set notas(nuevaNota) {
    if (nuevaNota > 0 && nuevaNota <= 10) {
      this.#notas = nuevaNota;
    }
  }
  set modulos(nuevoModulo) {
    this.#modulos = nuevoModulo;
  }
  set rollingCoins(nuevoRollingCoins) {
    this.#rollingCoins = nuevoRollingCoins;
  }

  //metodos
  otorgarRollingCoins(cantidad) {
    // this.rollingCoins = this.#rollingCoins + cantidad;
    this.rollingCoins += cantidad;
  }
  //polimorfismo
  mostrarDatos() {
    document.writeln(`<h3>Alumnos 👨‍💻👩‍💻</h3>`);
    document.writeln(`<ul>
            <li>Nombre y apellido: ${(this.nombre, this.apellido)} </li>
            <li>Email: ${this.email} </li>
            <li>Edad: ${this.edad} </li>
            <li>DNI: ${this.dni} </li>
            <li>Curso: ${this.curso} </li>
            <li>Módulo: ${this.modulos} </li>
            <li>RollingCoins: ${this.rollingCoins} 💵</li>
            </ul>`);
  }
}

//implementar o usar mi clase

const marcos = new Usuario(
  "Marcos",
  "Molina",
  "marcos@mail.com",
  "123asdA@sdfs",
  25,
  "40222333"
);
const valentina = new Usuario(
  "Valentina",
  "Iramain",
  "valentina@mail.com",
  "123asdA@sdfs",
  30,
  "35222333"
);

console.log(marcos);
marcos.mostrarDatos();
console.log(valentina);
valentina.mostrarDatos();

document.writeln(`<p>Email de Marcos:  ${marcos.email}</p>`);
marcos.email = "marcosmolina@mail.com";
// document.writeln(`<p>Email de Marcos:  ${marcos.#email}</p>`);
marcos.mostrarDatos();

document.writeln(`<p>Password de Valentina:  ${valentina.getPassword}</p>`);

// valentina.setPassword = prompt("Ingresa un nuevo password");

// document.writeln(
//   `<p>Password actualizado de Valentina:  ${valentina.getPassword}</p>`
// );

// usar la nueva clase Alumno
const lisandro = new Alumno(
  "Lisandro",
  "Araoz",
  "lisandro@mail.com",
  "124dfwer",
  22,
  "40333222",
  "FullStack MERN"
);
console.log(lisandro);

lisandro.mostrarDatos();

document.writeln(
  `<p>RollingCoins de ${lisandro.nombre}: ${lisandro.rollingCoins} 💵</p>`
);
lisandro.otorgarRollingCoins(3);

document.writeln(
  `<p>RollingCoins de ${lisandro.nombre}: ${lisandro.rollingCoins} 💵</p>`
);
