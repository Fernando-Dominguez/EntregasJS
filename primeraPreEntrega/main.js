// Calculadora de areas

let pregunta = confirm("¿Desea usar la calculadora de áreas?")
if (pregunta == true) {
    calcularAreas()
}
function calcularAreas() {
    let cantidad = 1
    let areasTotales = 0
    let cantAreas = prompt('Cuantas áreas deseas calcular?')
    while (cantidad <= cantAreas) {
        let ancho = parseFloat(prompt('Ingrese ancho de área ' + cantidad + ' en metros'))
        let largo = parseFloat(prompt('Ingrese largo de área ' + cantidad + ' en metros'))
        let areaCalc = ancho * largo
        alert("Área " + cantidad + " tiene: " + areaCalc + " m2")
        console.log("Área " + cantidad + " tiene: " + areaCalc + " m2")
        areasTotales = areasTotales + areaCalc
        cantidad++
    }
    if (cantAreas > 1) {
        alert("Las " + cantAreas + " áreas suman " + areasTotales + " m2 en total")
        console.log("Las " + cantAreas + " áreas suman " + areasTotales + " m2 en total")
    }
    alert('¡Gracias por usar la calculadora de áreas!')
    return
}