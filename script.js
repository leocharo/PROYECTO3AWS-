// Función para actualizar los campos de resultado
function actualizarResultado(raza) {
    document.getElementById("Raza").textContent = raza.name;
    document.getElementById("Temperamento").textContent = raza.temperament;
    document.getElementById("Vida").textContent = raza.life_span;
}

// Función para buscar información de una raza de perro, usamos 
//el metodo .trim para eliminar los espacion en blanco al inicio y final
async function buscarPerro() {
    const perroBuscar = document.getElementById("Perro").value.trim();
    const endpoint1 = `https://api.thedogapi.com/v1/breeds/search?q=${perroBuscar}`;  
    const respuesta = await fetch(endpoint1);
    const datos = await respuesta.json();

    // Actualizar el resultado con la raza encontrada
    actualizarResultado(datos[0]);
}

// Función para buscar información de una raza de gato
async function buscarGato() {
    const gatoBuscar = document.getElementById("Gato").value.trim();
    const endpoint2 = `https://api.thecatapi.com/v1/breeds/search?q=${gatoBuscar}`;  
    const respuesta = await fetch(endpoint2);
    const datos = await respuesta.json();

    // Actualizar el resultado con la raza encontrada
    actualizarResultado(datos[0]);
}

// Asociar eventos a los botones
document.getElementById("btnBuscarPerro").addEventListener("click", buscarPerro);
document.getElementById("btnBuscarGato").addEventListener("click", buscarGato);
