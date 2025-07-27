const productos = [
    {
        nombre: "Sahumerio",
        precio: 2000,
        imagen: "../img/sahumerio.jpg", 
    },
    {
        nombre: "Porta sahumerios",
        precio:  1000,
        imagen: "../img/portasahumerios.jfif",
    },
    {
        nombre: "Cascada de humo",
        precio: 4000,
        imagen: "../img/cascadadehumo.jfif",
    },
    {
        nombre: "Sahumerios para cascadas de humo",
        precio: 1000,
        imagen: "../img/sahumerioparacascadadehumo.jfif",
    },
    {
        nombre: "7 Energias",
        precio: 10000,
        imagen: "../img/7energias.jfif", 
    },
]

let carrito = JSON.parse(localStorage.getItem('carrito')) || []

function imprimirProductosEnHTML(productos) {

    const contenedor = document.getElementById("cards-container")
    contenedor.innerHTML = ""

    productos.forEach((producto, i) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML =`
        <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button id="btn-${i}">Comprar</button>
        `
        contenedor.appendChild(card)
        
        const boton = document.getElementById(`btn-${i}`)
        
        boton.addEventListener("click", () => agregarAlCarrito(producto) )
    })
}

function agregarAlCarrito(producto) {
    carrito.push(producto)
    guardarCarrito()
    mostrarCarrito()
}

function eliminarDelCarrito(i) {
    carrito.splice(i, 1)
    guardarCarrito()
    mostrarCarrito()
}

function mostrarCarrito() {
    const lista = document.getElementById("carrito-lista")
    const total = document.getElementById("carrito-total")

    lista.innerHTML = ""

    let totalCompra = 0

    carrito.forEach((item, index) => {
        const li = document.createElement("li")
        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `

    lista.appendChild(li)
    totalCompra += item.precio
});

total.textContent = totalCompra
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito = []
    guardarCarrito()
    mostrarCarrito()
})

imprimirProductosEnHTML(productos)
mostrarCarrito()