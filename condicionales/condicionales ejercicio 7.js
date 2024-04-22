let num1 = +prompt("ingresa tu primera nota");
let num2 = +prompt("ingresa tu segunda nota");
let num3 = +prompt("ingresa tu tercera nota");
let num4 = +prompt("ingresa tu cuarto nota");

let suma=(num1 + num2 + num3 + num4)
let promedio = suma/4;
let maxNot = Math.max(num1, num2, num3, num4)
let minNota = Math.min(num1, num2, num3, num4);


    
alert(`el promedio de sus calificaciones es ${+promedio}`);
alert(`tu nota mas alta es ${+maxNot}`)
alert(`tu nota mas baja es ${+minNota}`)