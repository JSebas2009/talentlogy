/*Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los 
métodos para inicializar los atributos, imprimir el valor del lado con un tamaño mayor y el tipo de
 triángulo que es (equilátero, isósceles o escaleno).*/

 class Triangulo {
    constructor(lado1, lado2, lado3) {
      this._lado1 = lado1;
      this._lado2 = lado2;
      this._lado3 = lado3;
    }
  
    mayorLado() {
      if (this._lado1 >= this._lado2 && this._lado1 >= this._lado3) {
        return this._lado1;
      } else if (this._lado2 >= this._lado1 && this._lado2 >= this._lado3) {
        return this._lado2;
      } else {
        return this._lado3;
      }
    }
  
    tipoDeTriangulo() {
      if (this._lado1 === this._lado2 && this._lado1 === this._lado3) {
        return "equilátero";
      } else if (this._lado1 === this._lado2 || this._lado1 === this._lado3 || this._lado2 === this._lado3) {
        return "isósceles";
      } else {
        return "escaleno";
      }
    }
  
    toString() {
      return `El lado mayor es: ${this.mayorLado()}, y el triángulo es de tipo ${this.tipoDeTriangulo()}`;
    }
  }
  
  let triangulo = new Triangulo(5, 5, 5);
  console.log(triangulo.toString());
  
  triangulo = new Triangulo(3, 4, 5);
  console.log(triangulo.toString());
  
  triangulo = new Triangulo(2, 3, 4);
  console.log(triangulo.toString());
  