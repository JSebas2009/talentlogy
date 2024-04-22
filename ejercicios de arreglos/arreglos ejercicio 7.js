/*Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos 
(Utilizar métodos de array).*/

const numeros=[1,5,2,6,3,7,3,8,3,7]

let contador

let multiplicacion = numeros.map(function(numeros) {
        return numeros*2
    });
    console.log(`el resultado es: ${multiplicacion}`)
    

