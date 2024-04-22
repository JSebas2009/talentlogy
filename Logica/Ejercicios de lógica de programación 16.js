//Ingresar por teclado el nombre y el signo de cualquier persona e imprima, el nombre sólo
//si la persona es signo Aries, caso contrario imprima no es signo Aries.
let nom=prompt("ingrese su nombre")
let sig=prompt("ingrese su signo zodiacal")

if (sig==="aries") {

    alert(`su nombre es ${nom}`)
} else {
    alert(`su signo no es aries`)
}