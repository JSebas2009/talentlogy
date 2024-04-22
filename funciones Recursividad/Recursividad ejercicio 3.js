/*Número Entero a Binario con Recursividad Pasar de número entero a número binario con 
Recursividad.*/

function conversionDeNumerosNormalesABinarios() {
      if (number===0) {
        return "0"
      }
   let binary= ""
   for (let n = number; n> 0; n=Math.floor(n / 2)) {
   let operacion= n%2
    binary= operacion+binary
       }
return binary
}
let number=+prompt("ingrese un numero para convertitlo en numero binario")
if (!isNaN(number)) {
   const binariRepresentacion=conversionDeNumerosNormalesABinarios(number)
    alert (`el numero binario de ${number} es ${binariRepresentacion}`)
} else {
    alert(`ingresa un numero valido`)
}