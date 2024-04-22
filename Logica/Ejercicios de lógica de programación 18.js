/*Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente.
Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, 
las otras marcas 2%*/

let marca=prompt("ingresa la marca de la moto (honda/yamaha/susuki/otras)")
let precio=+prompt("ingresa el precio de tu moto")


if (marca.toLowerCase() ==="honda") {
    let descuento=precio*0.05
    let total=precio - descuento
    alert(`el precio de su moto marca honda es: $${total}`)
} else if(marca.toLowerCase() ==="yamaha"){
    let descuento=precio*0.08
    let total=precio - descuento
    alert(`èl precio de su moto marca yamaha es: $${total}`)
} else if (marca.toLowerCase() === "susuki") {
    let descuento=precio*0.10
    let total=precio-descuento
    alert(`el precio de su moto marca susuki es: $${total}`)
} else if (marca.toLowerCase() === "otras") {
    let descuento=precio*0.02
    let total=precio - descuento
    alert(`el precio de su moto es: $${total}`)
}