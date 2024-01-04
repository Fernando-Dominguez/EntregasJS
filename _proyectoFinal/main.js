// Constructor

const Productos = function (nom, titulo, img, cat, precio, stock) {
    this.nombre = nom
    this.titulo = titulo
    this.imagen = img
    this.categoria = cat
    this.precio = precio
    this.stock = stock
}

// Variables

let productos

// SuiteAlert

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

// Capturas de contenedores en DOM

const contenedorProductos = document.querySelector("#contenedorPruductos");
const tituloPrincipal = document.querySelector("#tituloProductos");
const contDolar = document.querySelector("#contenedorDolar")

// Api dolar para cotización

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then(data => {
        const table = document.createElement("table")
        table.classList.add("dolarHoy")
        const fecha = new Date()
        table.innerHTML = `
            <tr>
              <td>${fecha.toLocaleDateString()}</td><td>COMPRA</td><td>VENTA</td>
            </tr>
            <tr>
              <td>OFICIAL</td><td>${data.oficial.value_buy.toFixed(2)}</td><td>${data.oficial.value_sell.toFixed(2)}</td>
            </tr>
            `
        // Agregando el producto al DOM
        contDolar.append(table)
    })
    .catch(error => { console.error("Ha ocurrido un error en la url " + error.message) })

// Carga de archivo json de Productos

fetch("./data/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data
    // Cargando el localStorage con la última data como backup, ante posibles problemas con la API o archivo JSON
        localStorage.setItem("prod", JSON.stringify(productos))
        // Carga de productos obtenidos de la API o archivo JSON
        cargarProductos(productos)
    })
    .catch(function (error){ 
        // Ante un error con la o archivo JSON se cargan los ultimos datos guardados en el localStorage
        productos = JSON.parse(localStorage.getItem("prod"))
        // Carga de productos obtenidos del localStorage
        cargarProductos(productos);
        console.error("Ha ocurrido un error en la url y los productos se cargaran desde el localStorage")
    })

// Carga de Producto

function cargarProductos(productosSeleccionados = productos) {
    tituloPrincipal.innerHTML = "CATALOGO DE PRODUCTOS"
    contenedorProductos.innerHTML = "";
    // Iterando produtos para mostrar en DOM
    productosSeleccionados.forEach(producto => {
        // Creando Producto para insertar en DOM
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">Por unidad USD ${producto.precio}</p>
                <p class="productoStock">Cantidad mín.: ${producto.stock}</p>
            </div>
        `
        // Agregando el producto al DOM
        contenedorProductos.append(div)
    })
}

// Buscar productos por nombre

function buscarProductos() {
    const input = document.getElementById("buscarProd").value
    const palabraClv = input.trim().toUpperCase()
    const resultado = productos.filter((producto) => producto.titulo.toUpperCase().includes(palabraClv)
    )
    resultado.length > 0 ? cargarProductos(resultado) : Swal.fire("No hay coincidencias")
}

// Buscar productos por categoria

function filtrarXCategoria(cat) {
    const palabraClv = cat.trim().toUpperCase()
    const resultado = productos.filter((producto) => producto.categoria.toUpperCase().includes(palabraClv)
    )
    if (resultado.length > 0) {
        cargarProductos(resultado)
        tituloPrincipal.innerHTML = palabraClv
    } else {
        Swal.fire("no hay coincidencias")
    }
}

// Agregar Producto

function agregarProducto() {

    // Insertando Formulario en el DOM

    const formulario = document.getElementById("formAgregar")
    formulario.innerHTML = `
            <label for="inputNombre">Nombre:</label>
            <input class="campo" id="inputNombre" type="text" required>

            <label for="inputTitulo">Titulo:</label>
            <input class="campo" id="inputTitulo" type="text" required>
            
            <label for="inputCategoria">Categoria:</label>
            <select name="pets" class="campo" id="pet-select">
                <option value="boligrafos">Boligrafos</option>
                <option value="bolsas">Bolsas</option>
                <option value="bolsos">Bolsos</option>
                <option value="calendarios">Calendarios</option>
            </select>       
            </br>
            <label for="inputPrecio">Precio:</label>
            <input class="campo" id="inputPrecio" type="number" required>

            <label for="inputStock">Stock:</label>
            <input class="campo" id="inputStock" type="number" required>

            <button class="btn" type="submit">Agregar</button>
    `
    // Pausando envio

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validando los inputs cargados por el usuario

        const inputNombre = document.getElementById("inputNombre").value.trim()
        const inputTitulo = document.getElementById("inputTitulo").value.trim()
        const inputCategoria = document.getElementById("pet-select").value.trim()
        const urlImage = "./image/productos/sin_image.jpg"
        const inputPrecio = parseFloat(document.getElementById("inputPrecio").value)
        const inputStock = parseInt(document.getElementById("inputStock").value)

        if (isNaN(inputPrecio) || isNaN(inputStock) || inputNombre === "" || inputTitulo === "" || inputCategoria === "") {
            Swal.fire("No se han ingresado valores validos.")
            return
        }

        // Instanciando nuevo producto

        const producto = new Productos(inputNombre, inputTitulo, urlImage, inputCategoria, inputPrecio, inputStock)

        // Chequeando que no exista previamente elproducto

        if (productos.some((elemento) => elemento.nombre === producto.nombre)) {
            Swal.fire("el producto ya existe")
            return
        }

        // Agregando el producto al Array

        if (productos.push(producto)) {
            Toast.fire({
                icon: "success",
                title: `El producto ${producto.nombre} fue agregado a la lista`
            })
        }

        // Reseteando Formulario

        formulario.reset()

        // Actualizando el catalogo con el nuevo producto

        cargarProductos(productos)

    })
}

// Captura de botones y asignacion de evento

const botonBuscar = document.getElementById("buscar")
botonBuscar.classList.add("button")
botonBuscar.addEventListener("click", buscarProductos)

const agregarProd = document.getElementById("agregarProd")
agregarProd.addEventListener("click", agregarProducto)

const catTodo = document.getElementById("todos")
catTodo.addEventListener("click", x => cargarProductos())

const catBolsas = document.getElementById("bolsas")
catBolsas.addEventListener("click", x => filtrarXCategoria("bolsas"))

const catBoligrafos = document.getElementById("boligrafos")
catBoligrafos.addEventListener("click", x => filtrarXCategoria(catBoligrafos.id))

const catBolsos = document.getElementById("bolsos")
catBolsos.addEventListener("click", x => filtrarXCategoria(catBolsos.id))

const catCalendarios = document.getElementById("calendarios")
catCalendarios.addEventListener("click", x => filtrarXCategoria(catCalendarios.id))