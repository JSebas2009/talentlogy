/*Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por
pantalla la frase invertida.*/
let palabra=prompt("ingresa una palabra")

let palabraInversa= palabra.split("").reverse().join("")

alert(`la palabra ${palabra} al revez es ${palabraInversa}`)