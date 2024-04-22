//Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de un
//número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.

let numero=+prompt("ingresa un numero")
let factorial=1
for (let i= 1; i < numero; i++) {
    factorial*=i
    
}
console.log(`${factorial}`)