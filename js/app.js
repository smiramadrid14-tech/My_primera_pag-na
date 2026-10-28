
const entradaNumero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");

const selector = document.getElementById("selector");
const tituloPasion = document.getElementById("titulopasion");
const imagen = document.getElementById("imagen");

const botonFrase = document.getElementById("botonFrase");

const numeroFavorito = 8;

// Juego para adivinar el número favorito
entradaNumero.addEventListener("input", function() {
    const numero = Number(entradaNumero.value);

    if (entradaNumero.value.trim() === "") {
        mensaje.textContent = "Escribe un número para comenzar.";
    } else if (numero === numeroFavorito) {
        mensaje.textContent = "¡Felicidades! 👏 ¡Ganaste!";
    } else if (numero < numeroFavorito) {
        mensaje.textContent = "Más arriba.";
    } else {
        mensaje.textContent = "Más abajo.";
    }
});

// Información de las pasiones
const pasiones = {
    atletismo: {
        titulo: "Atletismo",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3dSzXoNXGaSqJxnoRL7812Xck9D44uagAuI8w5wTOA&s=10"
    },

    futbol: {
        titulo: "Fútbol",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvgfjaB-Mn49vzKmb5wL1ueX3XN3c8vzl2CVSn8sElg&s=10"
    },

    natacion: {
        titulo: "Natación",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwZUmoLGGoDUz1CvkXyZ6GBIZF_qFIQCqM-BrgrF1lrUtF5ehyioFR5I&s=10"
    }
};

// Cambiar la imagen al seleccionar una pasión
selector.addEventListener("change", function() {
    const pasionElegida = selector.value;

    if (pasionElegida === "") {
        tituloPasion.textContent = "Mis pasiones deportivas";

        imagen.src = "https://www.centroeleia.edu.mx/hubfs/Imported_Blog_Media/slider_home_pasiones-1.jpg";
        imagen.alt = "Imagen inicial de mis pasiones";

    } else {
        const pasion = pasiones[pasionElegida];

        tituloPasion.textContent = pasion.titulo;

        imagen.src = pasion.imagen;
        imagen.alt = "Imagen de " + pasion.titulo;
    }
});

// Mensaje para el profesor
const frases = [
    "Eres un ídolo, máquina, crack, maestro en tu carrera."
];

botonFrase.addEventListener("click", function() {
    const posicion = Math.floor(Math.random() * frases.length);

    alert(frases[posicion]);
});
