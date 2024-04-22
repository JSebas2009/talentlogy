let num1 = +prompt("Ingresa tu primer número");
let num2 = +prompt("Ingresa tu segundo número");

function media(num1, num2) {
    let num = num1 + num2;
    let me = num / 2;
    return `La media de tus 2 números es ${me}`;
}

// Llama a la función con los números ingresados por el usuario
let resultado = media(num1, num2);

// Muestra el resultado
alert(resultado);
