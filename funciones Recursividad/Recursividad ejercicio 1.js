function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const numeroIngresado = +prompt("Ingresa un número para calcular su posición en la serie de Fibonacci:");
const resultado = fibonacci(numeroIngresado);
console.log(`El número en la posición ${numeroIngresado} de la serie de Fibonacci es: ${resultado}`);