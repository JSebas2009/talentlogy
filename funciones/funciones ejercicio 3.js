function sumar(num1,num2) {
    return num1+num2
}

function restar(num1,num2) {
    return num1-num2
}

function multiplicar(num1,num2) {
    return num1*num2
}

function dividir(num1,num2) {
    return num1/num2
}

let opcion=prompt("ingrese la opcion que necesite:(sumar/restar/multiplicar/dividir)")

let num1=+prompt("ingrese su primer numero")
let num2=+prompt("ingrese su segundo numero")

if (opcion.toLowerCase() === "sumar") {
    alert(`el resultado es ${sumar(num1,num2)}`)
} else if (opcion.toLowerCase() === "restar") {
    alert(`el resultado es ${restar(num1,num2)}`)
} else if (opcion.toLowerCase() === "multiplicar") {
    alert(`el resultado es ${multiplicar(num1,num2)}`)
}else if (opcion.toLowerCase() === "dividir") {
    alert(`el resultado es ${dividir(num1,num2)}`)
}