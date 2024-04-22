/*Escribir un programa que pregunte el correo electrónico del usuario en la consola y muestre 
por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) pero 
con dominio ceu.es.*/

let correo=prompt("ingresa tu actual correo")

let partesDelCorreo= correo.split("@")
let nombreDeUsuario= partesDelCorreo[0]

let nuevoCorreo= nombreDeUsuario + "@ceu.es."

alert(`su nuevo correo es: ${nuevoCorreo} `)