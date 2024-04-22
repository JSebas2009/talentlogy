/*Crea una clase Contador con los métodos para incrementar y decrementar el contador. La clase 
contendrá un constructor por defecto y los métodos getters y setters.*/

class Contador {
    constructor() {
      this._contador = 0;
    }
  
    get contador() {
      return this._contador;
    }
  
    set contador(nuevoValor) {
      this._contador = nuevoValor;
    }
  
    incrementar() {
      this._contador++;
    }
  
    decrementar() {
      this._contador--;
    }
  }
  let miContador = new Contador();
  
  miContador.incrementar();
  console.log(miContador.contador);
  
  miContador.decrementar();
  console.log(miContador.contador);
  
  miContador.contador = 10;
  console.log(miContador.contador);
  