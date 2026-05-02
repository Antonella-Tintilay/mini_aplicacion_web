const form = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

const actualizarContador = () => {
    const pendientes = document.querySelectorAll("li:not(.completada)");
    contador.textContent = pendientes.length;
};
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    if (texto === "") return;

    const li = document.createElement("li");
    const span= document.createElement("span");
    span.textContent=texto;
    const btn= document.createElement("button");
    btn.textContent="X"
    li.appendChild(span);
    li.appendChild(btn);
    li.addEventListener("click", () => {
        li.classList.toggle("completada");
        actualizarContador();
    });
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        actualizarContador();
    });
    lista.appendChild(li);

    input.value = "";
    actualizarContador();
});