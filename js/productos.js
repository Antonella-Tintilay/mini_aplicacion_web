const productos = [
    { id: 1, nombre: "Laptop Pro", precio: 899999, categoria: "electronica", enStock: true },
    { id: 2, nombre: "Smartphone X", precio: 450000, categoria: "electronica", enStock: true },
    { id: 3, nombre: "Audífonos Bluetooth", precio: 25900, categoria: "electronica", enStock: false },
    { id: 4, nombre: "Camiseta Deportiva", precio: 12900, categoria: "ropa", enStock: true },
    { id: 5, nombre: "Jeans Premium", precio: 28900, categoria: "ropa", enStock: true },
    { id: 6, nombre: "Lámpara LED", precio: 15900, categoria: "hogar", enStock: true },
    { id: 7, nombre: "Cafetera Eléctrica", precio: 34900, categoria: "hogar", enStock: false },
    { id: 8, nombre: "Balón de Fútbol", precio: 9900, categoria: "deportes", enStock: true },
    { id: 9, nombre: "Raqueta de Tenis", precio: 45900, categoria: "deportes", enStock: true },
    { id: 10, nombre: "Tablet 10 pulgadas", precio: 199000, categoria: "electronica", enStock: true }
];
const mostrarProductos=(lista)=>{
    const contenedor=document.getElementById("productos");
    contenedor.innerHTML= lista.map(producto => `
        <div class="producto-card">
            <h3>${producto.nombre}</h3>
            <span class="categoria">${producto.categoria}</span>
            <p class="precio">$${producto.precio}</p>
            <p class="stock"> ${producto.enStock ?"En stock" : "Sin stock"}</p>
        </div>
    `).join("")
}

const filtrarProductos=() =>{
    const categoriaSeleccionada= document.getElementById("categoria").value;
    const precioMaximo= parseInt(document.getElementById("precio").value);
    const soloEnStock= document.getElementById("enStock").checked;
    const busqueda = document.getElementById("busqueda").value.toLowerCase();

    const productoFiltrados=productos
    .filter(producto=>{
        if (categoriaSeleccionada ==="todas") return true;
        return producto.categoria === categoriaSeleccionada;
    })
    .filter(producto=>{
        return producto.precio <= precioMaximo;
    })
    .filter(producto=>{
        if (!soloEnStock) return true;
        return producto.enStock;
    })
    .filter(producto=>{
        if (busqueda ==="") return true;
        return producto.nombre.toLocaleLowerCase().includes(busqueda);
    });

    mostrarProductos(productoFiltrados);
};
const configurarEventos = () => {
    const precioInput = document.getElementById("precio");
    const precioValor = document.getElementById("precioValor");
    
    precioInput.addEventListener('input', () => {
        precioValor.textContent = precioInput.value;
        filtrarProductos();
    });
    document.getElementById("categoria").addEventListener("change", filtrarProductos);
    document.getElementById("enStock").addEventListener("change", filtrarProductos);
    document.getElementById("busqueda").addEventListener("input", filtrarProductos);
};
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    configurarEventos();
});