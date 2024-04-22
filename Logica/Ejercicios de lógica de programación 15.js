//Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo 
//imprima el número y un mensaje que diga “tiene raíz imaginaria”.

let num=+prompt("ingresa un numero")
if (num>0) {
    let nu=Math.sqrt(num)
 alert(`la raiz cuadrada de ${num} es ${nu}`)
} else {
    let a=Math.sqrt(Math.abs(num))
    alert(`la raiz cuadrada de ${num} es ${a}i y es imaginaria`)
}