//Escribir un programa que imprima todos los números pares entre dos números que se le pida al 
//usuario.
let num1=+prompt("ingresa tu numero de comienzo")
let num2=+prompt("ingresa tu numero de final")

for (let  i=num1; i<=num2; i++){
if (i%2===0) {
    console.log(i)   
}
 
}