//Escribir un programa que, dadas 5 notas finales, determine cuántas notas 
//fueron mayores o iguales a 3.0.
let contador=0
for (let i = 1; i <=5; i++) {
   let nota=+prompt(`ingresa tu nota${i}`)
    if (nota>=3.0) {
        contador++
    }
}
alert(`tus notas mayores o iguales son ${contador}`)