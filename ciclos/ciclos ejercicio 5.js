//Escribir un programa que dado un número entero positivo n, calcule 
//la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n

let n=+prompt("ingresa un numero")

let suma=0

for (let i = 1; i <=n; i++) {
    suma+=1/i
    
}
console.log(`la serie para ${n} es ${suma}`)