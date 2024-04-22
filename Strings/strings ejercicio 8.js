/*Escribir un programa que pregunte por consola por los productos de una cesta de la compra, 
separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.*/

let canasta = prompt("Ingresa los productos de tu cesta de compras separados por comas");
let partesDeLaCanasta = canasta.split(",");

for (let i = 0; i < partesDeLaCanasta.length; i++) {
  console.log("Producto " + (i + 1) + ": " + partesDeLaCanasta[i].trim());
}
