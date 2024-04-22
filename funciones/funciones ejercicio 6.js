/*Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por 
pantalla, el número se pedirá en el programa principal. Usar procedimiento.*/ 

function tablasDeMultiplicar() {
    let num=+prompt("ingresa el numero que vas a multiplicar")
    
    for (let contador= 1; contador <= 20; contador++) {
        
        let resultado= contador*num
        
        console.log(`${num} x ${contador} = ${resultado}`)
    }
}
tablasDeMultiplicar()