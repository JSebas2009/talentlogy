let numeros=prompt("ingresa una serie de numeros separados por comas (,):")

let cadena= numeros.split(",").map(Number);

alert(`el valor de los numeros es: ${cadena}`)


