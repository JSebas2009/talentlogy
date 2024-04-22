/*Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y 
la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un 
mensaje con el resultado de la nota y si ha aprobado o no.*/

class Alumno {
  constructor(nombre, nota = 0) {
    this._nombre = nombre;
    this._nota = nota;
  }
  get nombre() {
    return this._nombre;
  }
  get nota() {
    return this._nota;
  }

  nota() {
    if (this._nota <= 10 && this._nota >= 6) {
      return "aprobo";
    } else {
      return "reprobo";
    }
  }
  toString() {
    return `el alumno ${this.nombre} ${this.nota()}`;
  }
}
let alumno = new Alumno("sebas", 7);

alumno.nota();
console.log(alumno.toString());
