//En este programa, calcularemos el precio final de un producto después de aplicar un descuento.
//Ingresar el precio del producto, aplicar un descuento de 25%

const precioProducto = parseFloat(prompt("Ingresa el valor del producto"));
let precioFinal = precioProducto;

if (precioProducto > 2000) {
  const descuento = precioProducto * 0.25;
  precioFinal = precioProducto - descuento;
  document.writeln(`El descuento del producto es de $ ${descuento}`);
}

document.writeln(`<br>El precio del producto es de $ ${precioFinal}`);
