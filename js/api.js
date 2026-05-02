const contenedor = document.getElementById("contenedor");
const estado = document.getElementById("estado");
const input = document.getElementById("busqueda");

let timeout;
const mostrarPersonajes = (lista) => {
    contenedor.innerHTML = lista.map(personaje => `
        <div class="card">
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
            <p>${personaje.status}</p>
        </div>
    `).join("");
};
const obtenerPersonajes = async (url) => {
    try {
        estado.textContent = "Cargando...";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            estado.textContent = "No se encontraron resultados";
            contenedor.innerHTML = "";
            return;
        }

        estado.textContent = "";
        mostrarPersonajes(data.results);

    } catch (error) {
        estado.textContent = "Error de red o API";
        contenedor.innerHTML = "";
    }
};

input.addEventListener("input", (e) => {
    const valor = e.target.value.trim();

    clearTimeout(timeout);
    if (valor.length < 3) {
        estado.textContent = "Escribí al menos 3 caracteres";
        contenedor.innerHTML = "";
        return;
    }

    estado.textContent = "Buscando...";

    timeout = setTimeout(() => {
        obtenerPersonajes(
            `https://rickandmortyapi.com/api/character/?name=${valor}`
        );
    }, 500);
});
obtenerPersonajes("https://rickandmortyapi.com/api/character");