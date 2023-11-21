// Calculadora de areas V 2.0

/*
let areasCalculadas = []
let condicion
let pregunta = confirm("¿Desea usar la calculadora de áreas?")

while (condicion != 5) {
    if (pregunta == true) {
        menuTiposDeAreas()
    }else{
        condicion = 5
    }
    function menuTiposDeAreas() {
        let tipoDeArea = parseInt(prompt('Qué tipo de área desea calcular?\n1-Cuadrilatera | 2-Circular | 3-Eliptica | 4-Triangular'))
        if (tipoDeArea == 1) {
            areaCuadrilatera()
        } else if (tipoDeArea == 2) {
            areaCircular()
        } else if (tipoDeArea == 3) {
            areaEliptica()
        } else if (tipoDeArea == 4) {
            areaTriangular()
        }
    }
    function areaCuadrilatera() {
        let ancho = parseFloat(prompt('Ingrese ancho de área en metros'))
        let largo = parseFloat(prompt('Ingrese largo de área en metros'))
        let resultado = ancho * largo
        console.log(resultado)
        return listaDeAreas(resultado)
    }
    function areaCircular() {
        let radio = parseFloat(prompt('Ingrese el radio de la circunferencia en metros'))
        let resultado = Math.PI * Math.pow(radio, 2)
        console.log(resultado)
    }
    function areaEliptica() {
        let radioLargo = parseFloat(prompt('Ingrese el radio largo de la elipse en metros'))
        let radioCorto = parseFloat(prompt('Ingrese el radio corto de la elipse en metros'))
        let resultado = Math.PI * (radioLargo * radioCorto)
        console.log(resultado)
    }
    function areaTriangular() {
        alert('Se calculara el area ingresando los 3 lados del triangulo')
        let ladoUno = parseFloat(prompt('Ingrese primer lado del triangulo en metros'))
        let ladoDos = parseFloat(prompt('Ingrese segundo lado del triangulo en metros'))
        let ladoTres = parseFloat(prompt('Ingrese tercer lado del triangulo en metros'))
        let s = (ladoUno + ladoDos + ladoTres) / 2
        let resultado = Math.sqrt(s * (s - ladoUno) * (s - ladoDos) * (s - ladoTres))
        console.log(resultado)
    }
    function listaDeAreas(res) {
        if (confirm('El área es de ' + res + ' m2\n ¿Desea calculara otra área?') == true) {
            areasCalculadas.push(res)
            console.log(areasCalculadas)
            menuTiposDeAreas()
        } else {
            return condicion = 5
        }
    }

} */







/* 
    .:: INTERPRETACION DE PARAMETROS ::.

    cuadrilateros | ancho * largo
        a -> ancho
        b -> largo
    Circular | radio * PI
        a -> radio
    Eliplica | radio largo * radio corto * PI
        a -> radio largo
        b -> radio corto
    Triangular | Formula de Herón | Raíz[semiperimetro * (semi - lado1) * (semi - lado2) * (semi - lado3)]
        a -> lado1
        b -> lado2
        c -> lado3
*/
// Preguntar al usuario si desea calcular áreas
// Calcular áreas de cuadrilateros | circunferencias | elípses | triángulos
// Cargar datos dinamicamente
// Validar datos
/* */
/* function Areas(a, b, c) {
    this.dato1 = a,
        this.dato2 = b,
        this.dato3 = c,
        this.areaCuad = (a, b) => this.dato1 * this.dato2,
        this.areaCirc = (a) => Math.pow(this.dato1, 2) * Math.PI,
        this.areaOval = (a, b) => (this.dato1 * this.dato2) * Math.PI,
        this.areaTria = function (a, b, c) {
            let s = (this.dato1 + this.dato2 + this.dato3) / 2
            return Math.sqrt(s * (s - this.dato1) * (s - this.dato2) * (s - this.dato3))
        }
}
let tipoDeArea
let listaDeAreas = []

let consulta = confirm('¿Desea usar la calculadora de áreas V2.0?')

if (consulta === true) {
    menuTiposDeAreas()
}
function menuTiposDeAreas() {
    tipoDeArea = parseInt(prompt('Qué tipo de área desea calcular?\n1-Cuadrilatera | 2-Circular | 3-Eliptica | 4-Triangular || 5-SALIR'))
    if (isNaN(tipoDeArea)) {
        confirm('¿No ha ingresado un número desea volver a intentarlo?')
        menuTiposDeAreas()
    } else {
        return alert('Gracias por usar la Calculadora de áreas V2.0')
    }
    console.log('pedir datos')
    pedirDatos(tipoDeArea)
}

function pedirDatos(x) {
    if (tipoDeArea === 1) {
        let ancho = parseFloat(prompt('Ingrese ancho de área en metros'))
        let largo = parseFloat(prompt('Ingrese largo de área en metros'))
        let area = new Areas(ancho, largo)
        listaDeAreas.push(area)//{ AreaCuad: area.areaCuad() }
        console.log(listaDeAreas)
        if (confirm('¿Desea calcular otra área?') === true) {
            menuTiposDeAreas()
        } else {
            return
        }

    } else if (tipoDeArea === 2) {
        let radioCorto = parseFloat(prompt('Ingrese el radio de la circunsferencia en metros'))
        let area = new Areas(radio)
        listaDeAreas.push({ AreaCirc: area.areaCirc() })
        console.log(listaDeAreas)
        if (confirm('¿Desea calcular otra área?') === true) {
            menuTiposDeAreas()
        } else {
            return
        }

    } else if (tipoDeArea === 3) {
        let radioLargo = parseFloat(prompt('Ingrese el radio largo del óvalo en metros'))
        let radioCorto = parseFloat(prompt('Ingrese el radio corto del óvalo en metros'))
        let area = new Areas(radioLargo, radioLargo)
        listaDeAreas.push({ AreaOval: area.areaOval() })
        console.log(listaDeAreas)
        if (confirm('¿Desea calcular otra área?') === true) {
            menuTiposDeAreas()
        } else {
            return
        }

    } else if (tipoDeArea === 4) {
        alert('Se calculara el area ingresando los 3 lados del triangulo')
        let lado1 = parseFloat(prompt('Ingrese lado 1 del triángulo en metros'))
        let lado2 = parseFloat(prompt('Ingrese lado 2 del triángulo en metros'))
        let lado3 = parseFloat(prompt('Ingrese lado 3 del triángulo en metros'))
        let area = new Areas(lado1, lado2, lado3)
        listaDeAreas.push({ AreaTria: area.areaTria() })
        console.log(listaDeAreas)
        if (confirm('¿Desea calcular otra área?') === true) {
            menuTiposDeAreas()
        } else {
            return
        }
    }
} */


// CALCULADORA DE AREAS V2.0
/* 
    > SE PUEDEN CALCULAR AREAS DE CUADRILATEROS, CIRCUNFERENCIAS, ELIPSES Y TRIANGULOS.
    > ESTAS SE REGISTRAN BAJO EL NOMBRE DEL USUARIO, EL TIPO DE AREA, LOS DATOS REQUERIDOS Y EL RESULTADO DE LO CALCULADO.
    ESTARÁ LA OPCIÓN DE FILTRAR CALCULOS POR NOMBRE DE USUARIO
    LISTADO[    USUARIO={           
                    NOMBRE:
                    TIPODEAREA:
                    DATO1:
                    DATO2:
                    DATO3:
                    AREATOTAL:
                },
                USUARIO={
                    NOMBRE:
                    TIPODEAREA:
                    DATO1:
                    DATO2:
                    DATO3:
                    AREATOTAL:
                }
    ]
    */
// ELIJA TIPO DE ÁREA
// RECIBE DATOS DINAMICAMENTE
// REGISTRA DATOS: MEDIDAS, AREAS, TIPO DE AREAS
// ALMACENA DATOS: MEDIDAS, AREAS, TIPO DE AREAS
// FILTRADO POR TIPO DE AREAS
// 


/* function menuTiposDeAreas() {
    tipoDeArea = parseInt(prompt('Qué tipo de área desea calcular?\n1-Cuadrilatera | 2-Circular | 3-Eliptica | 4-Triangular'))
    if (ValidarNumero(tipoDeArea) === true) {
        console.log('Valido')
    } else {
        console.log('invalido')

        menuTiposDeAreas()
    }
} 



function ValidarNumero(x) {
    if (isNaN(x)) {
        return false
    } else {
        return true
    }
}
*/

/* 
//AGENDA TELEFÓNICA


/* 

Agenda
los clientes  (nombre, apellido, telefono, dirección)   funcion constructora => array  *
buscar de clientes por nombre
mostrarlo en orden alfabético
si no esta agendado lo agrego

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
    switch(opcionMenu){
        case 1:
            verClientes()
            menuAgenda()
            break
        case 2:
            buscarCliente()
            menuAgenda()
            break
        case 3:
            agendarCliente()
            menuAgenda()
            break
        case 4:
            return alert('¡Gracias por usar la Agenda Telefónica V1.0!')
    }
}

function verClientes() {
    console.table(agenda)
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


}

menuAgenda()