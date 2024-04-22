/*Que lea una oración desde el teclado y determine cuántas palabras tiene la oración*/

let oracion=prompt("ingresa una oracion")
let partesDeLaOracion=oracion.split(" ")
contador=0
for (let i = 0; i < partesDeLaOracion.length; i++) {
if (oracion[i]) {
    contador++
}
    
}
console.log(`la oracion tiene ${contador} palabras`)