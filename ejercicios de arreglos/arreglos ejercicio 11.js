/* Crea un array o arreglo unidimensional donde tú le indiques el tamaño por teclado y crear una 
función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. Por 
ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 
15. Mostrarlos por pantalla usando otra función distinta.*/

let tamaño =+prompt("ingresa el tamaño del array")

function tamañoDelArray(tamaño,numero) {
    let array=[]
for (let i = 1; i <= tamaño; i++) {
    array.push(numero*i)
    }
    return array
}
let numero=+prompt("ingresa un numero el cual quieres saber cuales son sus multiplos")

let resultado=tamañoDelArray(tamaño,numero)

alert(`los multiplos de ${numero} son: ${resultado}`)