/*Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además, deberá mostrar un menú con las siguientes opciones:

Añadir contacto
Lista de contactos
Buscar contacto
Editar contacto
Cerrar agenda*/

class Agenda {
    constructor() {
        this._contactos = [];
    }

    añadirContacto() {
        let nombre = prompt("Ingrese el nombre del contacto:");
        let email = prompt("Ingrese el email del contacto:");
        let numero = prompt("Ingrese el número del contacto:");

        let contacto = {
            nombre: nombre,
            email: email,
            numero: numero
        };

        this._contactos.push(contacto);
    }

    listaDeContactos() {
        return this._contactos;
    }

    buscarContactos() {
        let buscarNombre = prompt("Ingrese el nombre del contacto a buscar:");
        let resultado = this._contactos.filter(contacto => contacto.nombre === buscarNombre);
        return resultado;
    }

    editarContacto() {
        let nombreAEditar = prompt("Ingrese el nombre del contacto a editar:");
        let contacto = this._contactos.find(contacto => contacto.nombre === nombreAEditar);

        if (contacto) {
            let nuevoNombre = prompt("Ingrese el nuevo nombre:");
            let nuevoEmail = prompt("Ingrese el nuevo email:");
            let nuevoNumero = prompt("Ingrese el nuevo número:");

            contacto.nombre = nuevoNombre;
            contacto.email = nuevoEmail;
            contacto.numero = nuevoNumero;

            console.log("Contacto editado correctamente.");
        } else {
            console.log("Contacto no encontrado.");
        }
    }

    iniciar() {
        while (true) {
            let opcion = prompt("Ingrese la opción deseada: 1 para añadir un contacto, 2 para acceder a la lista de contactos, 3 para buscar un contacto, 4 para editar un contacto, o * para terminar.");

            switch (opcion) {
                case "1":
                    this.añadirContacto();
                    break;
                case "2":
                    console.log(this.listaDeContactos());
                    break;
                case "3":
                    console.log(this.buscarContactos());
                    break;
                case "4":
                    this.editarContacto();
                    break;
                case "*":
                    return;
                default:
                    console.log("Opción no válida.");
            }
        }
    }
}

let agenda = new Agenda();
agenda.iniciar();
