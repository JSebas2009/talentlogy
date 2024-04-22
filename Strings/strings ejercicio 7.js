/*Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y 
muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también 
funcione cuando el día o el mes se introduzcan con un solo carácter.*/

let fechaDeNacimiento=prompt("ingrese su fecha de nacimiento en este formato: dd/mm/aaaa")

let fechaPartes= fechaDeNacimiento.split("/")
let dia = fechaPartes[0]
let mes = fechaPartes[1]
let año = fechaPartes[2]


if (dia.length===1) {
    dia= "0" + dia
}
if (mes.length===1) {
    mes= "0" + mes
}
alert(`dia ${dia}`)
alert(`mes ${mes}`)
alert(`año ${año}`)
