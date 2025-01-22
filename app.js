const inputNombre = document.getElementById("amigo");
const botonAgregar = document.getElementById("button-add");
const listaAmigos = document.getElementById("listaAmigos");
const botonSortear = document.getElementById("button-draw");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  const nombre = inputNombre.value.trim();
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  amigos.push(nombre);

  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });

  inputNombre.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debes agregar al menos un nombre para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  resultado.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
}

botonAgregar.addEventListener("click", agregarAmigo);
botonSortear.addEventListener("click", sortearAmigo);
