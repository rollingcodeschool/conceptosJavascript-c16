// Diseñar un programa que solicite una edad y diga si podemos votar o no.
// menores de 16 no pueden votar
// entre 18 y 69 estamos obligados a votor
// 16 y 17, y mayores de 70 es optativo

let edad = parseInt(prompt('ingresa tu edad'))

console.log(edad)

if(edad < 16){
    document.writeln('No puedes votar')
}else{
    // && AND
    // || OR
    if( edad >= 18 && edad <=69){
        document.writeln('Debes votar si o si')
    }else{
         document.writeln('Es optativo votar')
    }
}