/*Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario
 lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de 
 usuario en mayúsculas y <n> es el número de letras que tienen el nombre.*/
let nombre=prompt("ingresa tu nombre")

var numeroDeLetras= nombre.length;

let mayusculas= nombre.toUpperCase()

console.log(`el nombre ${mayusculas} tiene ${numeroDeLetras} de letras`)