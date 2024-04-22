//Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada
//mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.

let contador=0
for (let mes=1 ; mes<=12; mes++) {
    let montoDepositado=+prompt("ingrese su cantidad de dinero")
    contador+=montoDepositado
    console.log(`total ahorrado ${mes}: $${contador}`)
    
}
console.log(`total ahorrado al final de año: $${contador}`)