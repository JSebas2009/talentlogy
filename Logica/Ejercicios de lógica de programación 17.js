//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima,
//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.

let nom=prompt("ingresa tu nombre")
let edad=prompt("ingresa tu edad")
let sex=prompt("ingresa tu sexo masculino/femenino")
let es=sex==="masculino" && edad>=18
 if (es) {
    alert(`su nombre es ${nom}`)
 }