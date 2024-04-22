/*Trabajo con Matriz Diseñar el algoritmo correspondiente a un programa, que:

*Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
*Carga la tabla con valores numéricos enteros.
*Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los 
resultados en pantalla.*/


let matrix=[
    [1,6,3,7,3],
    [6,4,8,4,4],
    [5,3,7,5,5],
    [3,8,1,8,9],
    [4,8,3,6,8]
];

/* let sumaFilas = [];
let sumaColumnas = []; */

let sumaFilas = matrix.map(fila => fila.reduce((acc, val) => acc + val, 0));
let sumaColumnas = matrix[0].map((_, i) => matrix.reduce((acc, fila) => acc + fila[i], 0));

console.log(`Suma de las filas: ${sumaFilas}`);
console.log(`Suma de las columnas: ${sumaColumnas}`);

console.log(`la suma de las columnas es ${sumaColumnas}`);
console.log(`la suma de las filas es ${sumaFilas}`);
