/*Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre 
por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra 
con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en 
mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.*/

let nombre = prompt("ingresa tu nombre y apellido")

function repeticionMayusculas(nombre) {
    let resultado= ""
    for (let i = 0; i < 3; i++) {
        resultado+= nombre.toUpperCase() + " ";
    
    }
    return resultado.trim()
}

function repeticionMinusculas(nombre) {
    let resultado= ""
    for (let i = 0; i < 3; i++) {
      resultado+= nombre.toLowerCase() + " ";
        
    }
    return resultado.trim()
}
function lasPrimerasLetras(nombre) {
    let partesNombre = nombre.split(" ");
    let resultado = partesNombre[0].charAt(0).toUpperCase() + partesNombre[1].charAt(0).toUpperCase();
    return resultado;
}

let primerResultado=repeticionMayusculas(nombre)
let segundoResultado=repeticionMinusculas(nombre)
let tercerResultado=lasPrimerasLetras(nombre)


console.log("nombres en mayusculas");
console.log(primerResultado)

console.log("nombres en minusculas");
console.log(segundoResultado)

console.log("primeras letras");
console.log(tercerResultado)



