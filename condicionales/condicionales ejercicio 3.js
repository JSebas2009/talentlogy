let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("Los números son múltiplos entre sí.");
} else {
    console.log("Los números no son múltiplos entre sí.");
}
