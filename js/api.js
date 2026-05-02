const contenedor = document.getElementById("contenedor");
const estado = document.getElementById("estado");

const obtenerPersonajes = async () => {
    try {
        estado.textContent = "Cargando...";

        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data = await response.json();

        estado.textContent = "";

        mostrarPersonajes(data.results);

    } catch (error) {
        estado.textContent = "Error al cargar los datos";
        console.error(error);
    }
};

const mostrarPersonajes = (lista) => {
    contenedor.innerHTML = lista.map(personaje => `
        <div class="card">
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
            <p>${personaje.status}</p>
        </div>
    `).join("");
};

obtenerPersonajes();