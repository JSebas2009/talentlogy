/*Realizar un programa que tenga una clase Persona con las siguientes características. La clase 
tendrá como atributos el nombre y la edad de una persona. Implementar los métodos necesarios para 
inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.*/

class Persona {
  constructor(nombre, edad = 0) {
    this._nombre = nombre;
    this._edad = edad;
  }
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  mayoresDeEdad() {
    if (this._edad > 18) {
      return "mayor de edad";
    } else {
      return "menor de edad";
    }
  }
  toString() {
    return `${this._nombre} es ${this.mayoresDeEdad()}`;
  }
}

let persona = new Persona("sebastian", 19);

console.log(persona.toString());
