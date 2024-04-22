/*Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un 
número impar, mostrar en pantalla el valor que ocupa el centro del array.*/

// Generar un array de 5 números enteros aleatorios entre 1 y 100
let N = 5;
let numeros = Array.from({ length: N}, () => Math.floor(Math.random() * 100));
console.log(`array:${numeros}`);

let indiceCentral = Math.floor(numeros.length / 2);
let elementoCentral = numeros [indiceCentral]

console.log(`El elemento central es: ${elementoCentral}`);
