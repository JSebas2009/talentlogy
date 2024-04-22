var num1=+prompt("ingrese su primer numero")
var num2=+prompt("ingrese su segundo numero")
var num3=+prompt("ingrese su tercer numero")

let numeros = [
    { nombre: 'persona 1', valor: num1 },
    { nombre: 'persona 2', valor: num2 },
    { nombre: 'persona 3', valor: num3 }
];
numeros.sort((a, b) => b.valor - a.valor);

alert(`Mayor: ${numeros[0].nombre}`);
alert(`Medio: ${numeros[1].nombre}`);
alert(`Menor: ${numeros[2].nombre}`);


// Ejemplo de uso
clasificarNumeros();