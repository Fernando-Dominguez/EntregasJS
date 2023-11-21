/* 
//AGENDA TELEFÓNICA


/* 

Agenda
clientes  (nombre, apellido, celular, email)
ver lista de clientes
buscar de clientes por nombre y si no esta agendado lo agrego
agregar clientes
salir

*/

const Clientes = function (nombre, apellido, celular, email) {
    this.nombre = nombre
    this.apellido = apellido
    this.celular = celular
    this.email = email
}

let cliente1 = new Clientes("Mariano", "Gonzalez", 1154368776, "mariano@gonzalez.com")
let cliente2 = new Clientes("Cecilia", "Suarez", 1157645950, "cecilia@suarez.com")
let cliente3 = new Clientes("Leonardo", "Garcia", 1148769706, "leonardo@garcia.com")
let cliente4 = new Clientes("Cecilia", "Parra", 1153628564, "cecilia@parra.com")



let agenda = [cliente1, cliente2, cliente3, cliente4]

function menuAgenda() {
    let opcionMenu = parseInt(prompt('¿Qué decea hacer?\n1-Ver Clientes | 2-Buscar Cliente | 3-Agendar Cliente  || 4-SALIR'))
    if (isNaN(opcionMenu)) {
        if (confirm('Ingresó una opcion incorrecta, desea volver a intentar') === false) {
            return alert('¡Gracias por usar la Agenda Telefónica V1.0!')
        } else {
            menuAgenda
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
menuAgenda()
function verClientes() {
    console.table(agenda)
    menuAgenda()
}

function buscarCliente() {
    let palabraClave = prompt("ingresa el nombre del cliente que buscas").toUpperCase().trim()
    let busqueda = agenda.filter((x) => x.nombre.toUpperCase().includes(palabraClave))


    if (busqueda != "") {
        console.table(busqueda)
    } else {
        alert("No existe ningun cliente que se llame " + palabraClave)
        let busqueda = confirm("¿Lo queres agendar?")

        if (busqueda == true) {
            agendarCliente()
        }
    }
}

function agendarCliente() {

    let nombre = prompt("ingresa el nombre del cliente").trim()
    let apellido = prompt("ingresa el apellido del cliente").trim()
    let celular = parseInt(prompt("ingresa el celular del cliente"))
    let email = prompt("ingresa el email del cliente").trim()
    if (nombre === "" || apellido === "" || isNaN(celular) || email === "") {
        alert("por favor ingresa valores validos")
        return
    }

    let cliente = new Clientes(nombre, apellido, celular, email)

    agenda.push(cliente)
    
    console.table(agenda)
    alert('¡el cliente ' + cliente.nombre + ' ha sido agregado con exito!')
    menuAgenda()


}