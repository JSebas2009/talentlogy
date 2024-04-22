/*Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un procedimiento 
muestre por pantalla el número escrito en letras.*/

function mostrarNumerosEnLetras() {
    
    let numero=+prompt("ingresa un numero del 1 al 10")
 
switch (numero) {
    case 1:
        mensaje="uno"
        break;
    case 2:
        mensaje="dos"
        break;
    case 3:
        mensaje="tres" 
        break
    case 4:
        mensaje="cuatro"
        break;
    case 5:
        mensaje="cinco"
        break;
    case 6:
        mensaje="seis"
        break;
    case 7:
        mensaje="siete"
        break;
    case 8:
        mensaje="ocho"
        break;
    case 9:
        mensaje="nueve"
        break;
    case 10:
        mensaje="diez"
       
    default:
        mensaje="el numero tiene que ser menor de 10"
}
alert(mensaje)
}
mostrarNumerosEnLetras()
