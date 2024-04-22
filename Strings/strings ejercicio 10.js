/*Crear función que determine si un string numérico es capicúa EJ: “12321”.*/

let numero=prompt("ingresa un numero y te diremos si es capicula o no")

let alrevez= numero.split("").reverse().join("")

if (numero===alrevez) {
    alert(`el numero ${numero} si es capícula`)
} else {
    alert(`el numero ${numero} no es capicula`)
}