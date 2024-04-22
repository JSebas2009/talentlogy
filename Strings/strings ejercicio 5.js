/*Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, 
y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.*/

let frase=prompt("introduce una frace")
let vocal=prompt("introduce la vocal que deseas que se resalte en la frase")

let vocalMayuscula= vocal.toUpperCase()

let fraseResaltada=frase.replace(new RegExp(vocal ,'gi'), vocalMayuscula)

alert(fraseResaltada)

