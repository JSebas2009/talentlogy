function numerosPerfectosOImperfectos() {
    let numero=+prompt("ingresa un numero y te diremos si es perfecto o imperfecto")
     let suma=0
    for (let i = 1; i < numero; i++) {
        if (numero%i===0) {    
            suma+=i}  
        }
        if (suma===numero) {
            alert(`el numero ${numero} es perfecto`)
        } else {
            alert(`el numero ${numero} es imperfecto`)
        }
}
numerosPerfectosOImperfectos()