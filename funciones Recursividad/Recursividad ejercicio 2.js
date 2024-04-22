function imprimirNumerosRecursivos(n) {
    if (n>=1) {
        console.log(n)
        imprimirNumerosRecursivos(n-1)
    }
}

let numero=+prompt("ingrese un numero positivo")
imprimirNumerosRecursivos(numero)