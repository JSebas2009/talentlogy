let sexo=prompt("ingrese su sexo masculino/femenino")
let edad=prompt("ingrese su edad")

if (sexo==="masculino"&&edad>=60||sexo==="femenino"&&edad>=54) {
    alert(`¡felicidades ya puedes ya jubilarte!`)
} else {
    alert(`todavia no te puedes jubilar`)
}