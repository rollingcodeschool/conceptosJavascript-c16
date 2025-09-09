// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingresa la cantidad de filas'))
const columnas = parseInt(prompt('Ingresa la cantidad de columnas'))

document.writeln(`<table class="table table-striped-columns"><tbody>`)

for(let indiceFilas=1; indiceFilas <= filas ; indiceFilas++){
document.writeln(`<tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>`)
}
document.writeln(`</tbody></table>`)