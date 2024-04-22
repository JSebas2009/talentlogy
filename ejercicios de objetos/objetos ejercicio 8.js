/*Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. Calcular después la suma, resta, multiplicación y división. Utilizar
 un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.*/

class Calculadora {
  constructor() {
    this._num1 = +prompt("ingresa el primer digito");
    this._num2 = +prompt("ingresa el segundo digito");
  }
  suma() {
    let operacion = this._num1 + this._num2;
    return operacion;
  }
  resta() {
    let operacion = this._num1 - this._num2;
    return operacion;
  }
  multiplicacion() {
    let operacion = this._num1 * this._num2;
    return operacion;
  }
  division() {
    let operacion = this._num1 / this._num2;
    return operacion;
  }
}

let calculadora = new Calculadora()
console.log(`suma ${calculadora.suma()}`)
console.log(`resta ${calculadora.resta()}`)
console.log(`multiplicacion ${calculadora.multiplicacion()}`)
console.log(`division ${calculadora.division()}`)
