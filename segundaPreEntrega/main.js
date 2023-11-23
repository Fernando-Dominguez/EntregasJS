/* 
//AGENDA TELEFÓNICA


/* 

Agenda
menú
clientes  (nombre, apellido, celular, email)
ver lista de clientes
buscar de clientes por nombre y si no esta agendado lo agrego
agregar clientes
salir

*/

// Constructor ded clientes

const Clientes = function (nombre, apellido, celular, email) {
    this.nombre = nombre
    this.apellido = apellido
    this.celular = celular
    this.email = email
}

// Instastancias de Clientes

let cliente1 = new Clientes("Mariano", "Gonzalez", 1154368776, "mariano@gonzalez.com")
let cliente2 = new Clientes("Cecilia", "Suarez", 1157645950, "cecilia@suarez.com")
let cliente3 = new Clientes("Leonardo", "Garcia", 1148769706, "leonardo@garcia.com")
let cliente4 = new Clientes("Cecilia", "Parra", 1153628564, "cecilia@parra.com")

// Declaración de Agenda (Array) con clientes instanciados anteriormente (Objetos)

let agenda = [cliente1, cliente2, cliente3, cliente4] // Agenda con clientes preexistente


// Menú Principal

function menuAgenda() {
    let opcionMenu = parseInt(prompt('AGENDA TELEFÓNICA V1.0 | Elija una opción\n1-Ver Clientes | 2-Buscar Cliente | 3-Agendar Cliente  || 4-SALIR'))
    if (isNaN(opcionMenu)) {
        if (confirm('Ingresó una opcion incorrecta, desea volver a intentar') === false) {
            return alert('¡Gracias por usar la Agenda Telefónica V1.0!')
        } else {
            menuAgenda()
        }
    } else if (opcionMenu === 1) {
        verClientes()
    } else if (opcionMenu === 2) {
        buscarCliente()
    } else if (opcionMenu === 3) {
        agendarCliente()
    } else if (opcionMenu === 4) {
        return alert('¡Gracias por usar la Agenda Telefónica V1.0!')
    }
}

menuAgenda()  // INICIANDO APP

// Function para listar los crlientes ya registrados

function verClientes() {
    console.table(agenda)
    alert('La lista de clientes se vera por consola')
    menuAgenda()
}

// Function de buesqueda de clientes por nombre y opción de agenadar si no existe

function buscarCliente() {
    let palabraClave = prompt("Ingresa el nombre del cliente que buscas").toUpperCase().trim() // Captura de keyWord convertida a mayuscula y eliminando espacios bacios
    let busqueda = agenda.filter((x) => x.nombre.toUpperCase().includes(palabraClave)) // Capturando resultado de busqueda loego de usar filter()

    // Condicional para mostrar resultado o ofrecer posibilidad de agendar de no existir cliente

    if (busqueda.length > 0) {
        console.table(busqueda)
        alert('Se han encontrado ' + busqueda.length + ' resultados que se muestran por consola')
        menuAgenda()
    } else {
        let busqueda = confirm("No existe ningun cliente que se llame " + palabraClave + "\n¿Lo queres agendar?")
        if (busqueda == true) {
            agendarCliente(palabraClave)
        }
    }
}

// Function para agendar clientes directamente, con parametro x para valor predeterminado de prompt nombre

function agendarCliente(x) {
    let nombre = prompt("ingresa el nombre del cliente", x).trim()
    let apellido = prompt("ingresa el apellido del cliente").trim()
    let celular = parseInt(prompt("ingresa el celular del cliente"))
    let email = prompt("ingresa el email del cliente").trim()
    if (nombre === "" || apellido === "" || isNaN(celular) || email === "" || email.indexOf("@") < 3 || email.indexOf("@") === -1) { // Validación de datos ingresados por el usuario
        if (confirm("Ha ingresado valores no válidos.\n¿Desea volver a ingresar los datos?") === false) {
            return alert('¡Gracias por usar la Agenda Telefónica V1.0!')
        } else {
            agendarCliente()
        }
    }

    // Creando instacias de Cliente nuevo y agregandolo al array agenda

    let cliente = new Clientes(nombre, apellido, celular, email)
    agenda.push(cliente)
    console.table(agenda)
    alert('¡El cliente ' + cliente.nombre + ' ha sido agregado con exito!\nPodrá verlo por consola')
    menuAgenda()
}