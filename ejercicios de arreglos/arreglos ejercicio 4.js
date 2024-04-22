/*Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los 
desaprobados e indique la cantidad de aprobados y desaprobados.*/

const notas=[15,20,1,3,4,2,8,18,16,15,2,4,15,7,3]

let sumaDeAprobados=0
let sumaDeDesaprobados=0
let contDeAprobados=0
let contDeDesaprobados=0

for (let i = 0; i < notas.length; i++) {
    if (notas[i]>=11) {
        sumaDeAprobados+=notas[i]
        contDeAprobados++
    } else {
        sumaDeDesaprobados+=notas[i]
        contDeDesaprobados++
    }
    
}
const promedioDeAprobados= sumaDeAprobados/contDeAprobados
const promedioDeDesaprobados= sumaDeDesaprobados/contDeDesaprobados

console.log(`el promedio de las notas aprobadas es: ${promedioDeAprobados}`)
console.log(`el promedio de las notas desaprobadas es: ${promedioDeDesaprobados}`)
console.log(`la cantidad de las notas aprobadas es: ${contDeAprobados}`)
console.log(`la cantidad de las notas aprobadas es: ${contDeDesaprobados}`)