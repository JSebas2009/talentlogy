/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener 
decimales).

El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo 
anterior.
Crea sus métodos get, set y toString.
Tendrá dos métodos especiales:
ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
*/

class Cuenta {
  constructor(titular, cantidad = 0) {
   this.titular = titular;
   this.cantidad = cantidad;
  }

  get cantidad() {
    return this._cantidad;
  }
  set cantidad(nuevaCantidad) {
    this._cantidad = nuevaCantidad;
  }
  toString() {
    return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`;
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.cantidad += cantidad;
    }
  }
  retirar(cantidad) {
    if (cantidad > 0) {
      this.cantidad -= cantidad;

      if (this.cantidad < 0) {
        this.cantidad = 0;
      }
    }
  }
}

let cuenta = new Cuenta("juan sebastian", 100);
console.log(cuenta.toString());

cuenta.ingresar(50);
console.log(cuenta.toString());

cuenta.retirar(200);
console.log(cuenta.toString());
