class Cuenta {
    constructor(numeroCuenta,nombre) {
        this.numeroCuenta=numeroCuenta;
        this.nombre=nombre;
        this.saldo = 0; // Inicializamos el saldo en cero
    }

    // Métodos para operaciones bancarias
    ingreso(monto) {
        this.saldo += monto;
    }

    reintegro(monto) {
        this.saldo -= monto;
    }

    transferencia(cuentaDestino, monto) {
        this.saldo -= monto;
        cuentaDestino.saldo += monto;
    }
}

// Ejemplo de uso
const cuenta1 = new Cuenta('3013334445','Sebastian');
const cuenta2 = new Cuenta('3013334446','Anderson');

cuenta1.ingreso(1000); // Depositar 1000 en cuenta1
cuenta1.transferencia(cuenta2, 500); // Transferir 500 de cuenta1 a cuenta2

console.log("Saldo cuenta1:", cuenta1.saldo, cuenta1.nombre); // Saldo cuenta1: 500
console.log("Saldo cuenta2:", cuenta2.saldo, cuenta2.nombre); // Saldo cuenta2: 500
