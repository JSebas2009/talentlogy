let precio1=+prompt("ingrese el precio de su primera pelicula")
let precio2=+prompt("ingrese el precio de su segunda pelicula")
let precio3=+prompt("ingrese el precio de su tercera pelicula")

let precios=[precio1, precio2, precio3 ]
precios.sort((a, b) => a - b);

let pagar= precios[0] + precios[1]

alert(`total a pagar ${+pagar}`)