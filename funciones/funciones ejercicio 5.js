/*Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para 
convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.*/
function conversionDeGrados() {
    let opcion=prompt("ingresa de celsius a que otra escala de temperatura quieres cambiar (kelvin/Fahrenheit)")
    let gradosCelsius=+prompt("ingrese sus grados celsius")

    if (opcion.toLowerCase() === "kelvin") {
        let operacion=gradosCelsius+273.15
        alert(`tus grados kelvin son: ${operacion}`)
    } else if (opcion.toLowerCase() === "fahrenheit") {
        let operacion=(9*gradosCelsius)/5 + 32;
        alert(`su cantidad en grados fahrenheit es: ${operacion}`)
    } else {
        alert(`el nombre que ingresastes esta mal escrito o es invalido`)
    }
}
conversionDeGrados()