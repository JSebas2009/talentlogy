let a = +prompt("ingresa un numero");

function paresOImpares(a) {
    if (a % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

console.log(paresOImpares(a));
