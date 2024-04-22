/*
fizz si es múltiplo de 3
buzz si es múltiplo 5 
beff si es multiplo de 7

fizz buzz si es de los dos y devuelve
 el numero si no es múltiplo de ninguno 
 */

function multiplosYNoMultiplos() {
  const MULTIPLO_TRES = 3;
  const MULTIPLO_CINCO = 5;
  const MULTIPLO_SIETE = 7;
  let num = +prompt("ingrese un numero y le diremos si es múltiplo de 3,5 O 7");
  let esMultiploDeTres = num % MULTIPLO_TRES === 0;
  let esMultiploDeCinco = num % MULTIPLO_CINCO === 0;
  let esMultiploDeSiete = num % MULTIPLO_SIETE === 0;
  

  let mensaje = '';
  if (esMultiploDeTres) {
    mensaje += `fizz`;
  }
  if (esMultiploDeSiete) {
    mensaje += "beff"
  }
  if (esMultiploDeCinco) {
    mensaje += "buzz"; // mensaje = mensaje + 'buzz'
  }
  if (!esMultiploDeTres && !esMultiploDeCinco) {
    mensaje = num;
  }
  alert(mensaje);
}
multiplosYNoMultiplos();
