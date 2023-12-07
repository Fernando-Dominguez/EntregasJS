// Constructor

const Productos = function (nom, titulo, img, cat, precio, stock) {
    this.nombre = nom
    this.titulo = titulo
    this.imagen = img
    this.categoria = cat
    this.precio = precio
    this.stock = stock
}

// Array de Productos

let productos = [
    {
        nombre: "boligrafo_01",
        titulo: "BOLIGRAFO DENVER",
        imagen: "./image/productos/boligrafos/boligrafo_01.jpg",
        categoria: "boligrafos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "boligrafo_02",
        titulo: "BOLIGRAFO DOT",
        imagen: "./image/productos/boligrafos/boligrafo_02.jpg",
        categoria: "boligrafos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "boligrafo_03",
        titulo: "BOLIGRAFO DUBLIN",
        imagen: "./image/productos/boligrafos/boligrafo_03.jpg",
        categoria: "boligrafos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "boligrafo_04",
        titulo: "BOLIGRAFO MALIBU",
        imagen: "./image/productos/boligrafos/boligrafo_04.jpg",
        categoria: "boligrafos",
        precio: 828.50,
        stock: 200
    },
    {
        nombre: "boligrafo_05",
        titulo: "BOLIGRAFO MERIT",
        imagen: "./image/productos/boligrafos/boligrafo_05.jpg",
        categoria: "boligrafos",
        precio: 1267.20,
        stock: 200
    },
    {
        nombre: "boligrafo_06",
        titulo: "BOLIGRAFO MONTANA",
        imagen: "./image/productos/boligrafos/boligrafo_06.jpg",
        categoria: "boligrafos",
        precio: 395.50,
        stock: 200
    },

    {
        nombre: "ecobolsas_01",
        titulo: "BOLIGRAFO DENVER",
        imagen: "./image/productos/bolsas/ecobolsas_01.jpg",
        categoria: "bolsas",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "ecobolsas_02",
        titulo: "BOLIGRAFO DOT",
        imagen: "./image/productos/bolsas/ecobolsas_02.jpg",
        categoria: "bolsas",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "ecobolsas_03",
        titulo: "BOLIGRAFO DUBLIN",
        imagen: "./image/productos/bolsas/ecobolsas_03.jpg",
        categoria: "bolsas",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "ecobolsas_04",
        titulo: "BOLIGRAFO MALIBU",
        imagen: "./image/productos/bolsas/ecobolsas_04.jpg",
        categoria: "bolsas",
        precio: 828.50,
        stock: 200
    },
    {
        nombre: "ecobolsas_05",
        titulo: "BOLIGRAFO MERIT",
        imagen: "./image/productos/bolsas/ecobolsas_05.jpg",
        categoria: "bolsas",
        precio: 1267.20,
        stock: 200
    },
    {
        nombre: "ecobolsas_06",
        titulo: "BOLIGRAFO MONTANA",
        imagen: "./image/productos/bolsas/ecobolsas_06.jpg",
        categoria: "bolsas",
        precio: 395.50,
        stock: 200
    },

    {
        nombre: "bolso_01",
        titulo: "BOLIGRAFO DENVER",
        imagen: "./image/productos/bolsos/bolsos_01.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "bolso_02",
        titulo: "BOLIGRAFO DOT",
        imagen: "./image/productos/bolsos/bolsos_02.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "bolso_03",
        titulo: "BOLIGRAFO DUBLIN",
        imagen: "./image/productos/bolsos/bolsos_03.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "bolso_04",
        titulo: "BOLIGRAFO MALIBU",
        imagen: "./image/productos/bolsos/bolsos_04.jpg",
        categoria: "bolsos",
        precio: 828.50,
        stock: 200
    },
    {
        nombre: "bolso_05",
        titulo: "BOLIGRAFO MERIT",
        imagen: "./image/productos/bolsos/bolsos_05.jpg",
        categoria: "bolsos",
        precio: 1267.20,
        stock: 200
    },
    {
        nombre: "bolso_06",
        titulo: "BOLIGRAFO MONTANA",
        imagen: "./image/productos/bolsos/bolsos_06.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "bolso_07",
        titulo: "BOLIGRAFO MONTANA",
        imagen: "./image/productos/bolsos/bolsos_07.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "bolso_08",
        titulo: "BOLIGRAFO MONTANA",
        imagen: "./image/productos/bolsos/bolsos_08.jpg",
        categoria: "bolsos",
        precio: 395.50,
        stock: 200
    },

    {
        nombre: "calendario_01",
        titulo: "CARPA CON PORTA LAPIZ",
        imagen: "./image/productos/calendarios/calendario_01.jpg",
        categoria: "calendarios",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "calendario_02",
        titulo: "CARPA MEDIANA",
        imagen: "./image/productos/calendarios/calendario_02.jpg",
        categoria: "calendarios",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "calendario_03",
        titulo: "CARPA MINI",
        imagen: "./image/productos/calendarios/calendario_03.jpg",
        categoria: "calendarios",
        precio: 395.50,
        stock: 200
    },
    {
        nombre: "calendario_04",
        titulo: "PORTARRETRATO CALENDARIO",
        imagen: "./image/productos/calendarios/calendario_04.jpg",
        categoria: "calendarios",
        precio: 828.50,
        stock: 200
    },
    {
        nombre: "calendario_05",
        titulo: "PORTA SOBRES",
        imagen: "./image/productos/calendarios/calendario_05.jpg",
        categoria: "calendarios",
        precio: 1267.20,
        stock: 200
    }
]

// Chequeando el localStorage

if(localStorage.getItem("prod")){
    productos = JSON.parse(localStorage.getItem("prod"))
    console.log(productos)
}else{
    productos = productos
}

// Captura de contenedor en DOM

const contenedorProductos = document.querySelector("#contenedorPruductos");

// Carga de Producto

function cargarProductos(productosSeleccionados = productos) {

    contenedorProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">$${producto.precio}</p>
                <p class="productoStock">Cantidad: ${producto.stock}</p>
            </div>
        `;
        contenedorProductos.append(div);
    })
}

// Carga de todos los producto

cargarProductos()


// Buscar productos por nombre

function buscarProductos() {
    const input = document.getElementById("buscarProd").value
    const palabraClv = input.trim().toUpperCase()
    const resultado = productos.filter((producto) => producto.nombre.toUpperCase().includes(palabraClv)
    )
    if (resultado.length > 0) {
        cargarProductos(resultado)
    } else {
        alert("no hay coincidencias")
    }
}

// Agregar Producto

function agregarProducto() {
    const formulario = document.getElementById("formAgregar")
    formulario.innerHTML = `
            <label for="inputNombre">Nombre:</label>
            <input id="inputNombre" type="text" required>

            <label for="inputTitulo">Titulo:</label>
            <input id="inputTitulo" type="text" required>

            <label for="inputCategoria">Categoria:</label>
            <input id="inputCategoria" type="text" required>

            <label for="inputPrecio">Precio:</label>
            <input id="inputPrecio" type="number" required>

            <label for="inputStock">Stock:</label>
            <input id="inputStock" type="number" required>

            <button type="submit">Agregar</button>
    `
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputNombre = document.getElementById("inputNombre").value.trim()
        const inputTitulo = document.getElementById("inputTitulo").value.trim()
        const inputCategoria = document.getElementById("inputCategoria").value.trim()
        const urlImage = "./image/productos/sin_image.jpg"
        const inputPrecio = parseFloat(document.getElementById("inputPrecio").value)
        const inputStock = parseInt(document.getElementById("inputStock").value)

        if (isNaN(inputPrecio) || isNaN(inputStock) || inputNombre === "" || inputTitulo === "" || inputCategoria === "") {
            alert("No se han ingresado valores validos.")
            return
        }

        const producto = new Productos(inputNombre, inputTitulo, urlImage, inputCategoria, inputPrecio, inputStock)
        
        if (productos.some((elemento) => elemento.nombre === producto.nombre)) { 
            alert("el producto ya existe")
            return
        }

        productos.push(producto)

        localStorage.setItem("prod", JSON.stringify(productos))
        alert(`se agrego el producto ${producto.nombre} a la lista`)

        console.log(productos)
        formulario.reset()
        cargarProductos(productos)

    })
}

// Captura de botones y asignacion de evento

const botonBuscar = document.getElementById("buscar")
botonBuscar.classList.add("button")
botonBuscar.addEventListener("click", buscarProductos)

const agregarProd = document.getElementById("agregarProd")
agregarProd.addEventListener("click", agregarProducto)