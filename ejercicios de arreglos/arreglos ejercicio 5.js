/*Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.*/

const numero=[8,7,6,1,8,4,6,2,8,9]

let mayor=Math.max(...numero)
let menor=Math.min(...numero)

let contDeLosDigitos=0
let sumaDeLosDigitos=0
for (let i = 0; i < numero.length; i++) {
    sumaDeLosDigitos+=numero[i]
    contDeLosDigitos++
    
}
let promedio=sumaDeLosDigitos/contDeLosDigitos

console.log(`el mayor de todos los digitos es: ${mayor}`)
console.log(`el menor de todos los digitos es: ${menor}`)
console.log(`el promedio de todos los digitos es: ${promedio}`)