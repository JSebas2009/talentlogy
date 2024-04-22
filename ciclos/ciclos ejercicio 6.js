//Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. 
//Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los 
//anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …


let n=+prompt("ingresa un numero")
let a=0, b=1
let i=1

while (i<=n) {
   console.log(b)
   b=a+b
   a=b-a
   i++
}