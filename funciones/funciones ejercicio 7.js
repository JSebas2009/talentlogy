function obtener() {
    let numeros = []
    for (let i = 1; i<=3; i++) {
       let num=+prompt("ingresa tu numero")
        numeros.push(num)
    }
    return numeros
}

function ordenar(numeros) {
    return numeros.sort((a, b) => a - b);
}

function mostrar(numeros) {
    alert(`sus numeros ordenados son: ${numeros.join(", ")}`)
}

function programaPrincipal() {
    let numeros = obtener()
    numeros = ordenar(numeros)
    mostrar(numeros)
}
programaPrincipal()
