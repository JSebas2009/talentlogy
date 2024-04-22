//Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  
//menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.

let t=+prompt("ingrese su gasto de corriente electrica")

if (t<=1000) {
    alert(`su tarifa es de 1.2`)
} else {
    if (t>=1001 && t<=1850) {
        alert(`su tarifa es de 1.0`)
    } else {
        if (t>=1851) {
            alert(`su tarifa es de 0.9`)
        }
    }
}

