/*Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que 
introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se 
introduzca como nombre un asterisco (*). Al finalizar se mostrará los siguientes datos:*/

let nombres=[]
let edades=[]
let edadMayor=0
let indiceDeEdadMayor=[]

while (true) {
    let nombre=prompt("ingrese el nombre del alumno (o * para terminar)")
if (nombre === "*") {
    break;
} 
   let edad=+prompt(`ingrese la edad de ${nombre}`)
     nombres.push(nombre)
     edades.push(edad)
    
    if (edad>edadMayor) {
        edadMayor=edad
        indiceDeEdadMayor=[nombres.length -1]
    } else if (edad===edadMayor) {
        indiceDeEdadMayor.push=(nombres.length -1)
    }
}
console.log(`alumnos mayores de edad`)
    for (let i = 0; i < nombres.length; i++) {
       if(edades[i]>= 18)
       console.log(nombres[i])
        }
        console.log(`alumnos con la mayor edad`)
        for (let indice of indiceDeEdadMayor) {
            console.log(nombres[indice])
        }