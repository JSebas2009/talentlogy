function invertirNumerosEnteros(numero) {
    invertido=0
    resto=numero
    while (resto>0) {
        invertido=invertido*10+(resto%10)
        resto=Math.floor(resto/10)
    }
return invertido
}
let numero=+prompt("ingresa un numero para invertirlo")
if (!isNaN(numero)) {
    const invertido=invertirNumerosEnteros(numero)
    alert(`el numero ${numero} invertido es ${invertido}`)
} else {
    alert(`ingresa un numero valido`)
}