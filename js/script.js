/* =========================================================
   ELEMENTOS DE LAS TRES PÁGINAS
========================================================= */

// Página de bienvenida, tarjeta original y página final.
const inicio = document.getElementById("inicio");
const tarjeta = document.getElementById("tarjeta");
const paginaFinal = document.getElementById("final");

// Botones de navegación y celebración.
const abrirBtn = document.getElementById("abrirBtn");
const celebrarBtn = document.getElementById("celebrarBtn");
const siguienteBtn = document.getElementById("siguienteBtn");

/* =========================================================
   PÁGINA 1 -> PÁGINA 2
========================================================= */

abrirBtn.addEventListener("click", () => {
    // Ocultamos la bienvenida y revelamos la tarjeta original.
    inicio.classList.add("ocultar");
    tarjeta.classList.add("mostrar");

    // Llevamos la vista al comienzo de la tarjeta.
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================
   CELEBRACIÓN CON FLORES
========================================================= */

celebrarBtn.addEventListener("click", () => {
    // Lanzamos flores decorativas sin bloquear la navegación.
    for (let i = 0; i < 25; i++) {
        crearFlor();
    }
});

/* =========================================================
   PÁGINA 2 -> PÁGINA 3
========================================================= */

siguienteBtn.addEventListener("click", () => {
    // Ocultamos la tarjeta y mostramos el mensaje de aliento.
    tarjeta.style.display = "none";
    paginaFinal.classList.add("mostrar-final");

    // Subimos suavemente al inicio de la última página.
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================
   FUNCIÓN PARA CREAR FLORES ANIMADAS
========================================================= */

function crearFlor() {
    // Creamos un elemento nuevo y elegimos una flor al azar.
    const flor = document.createElement("div");
    const flores = ["🌻", "🌼"];
    flor.textContent = flores[Math.floor(Math.random() * flores.length)];
    flor.classList.add("flor-celebracion");

    // Asignamos posición, tamaño y duración aleatorios.
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.fontSize = 20 + Math.random() * 35 + "px";
    flor.style.animationDuration = 3 + Math.random() * 3 + "s";

    // Añadimos la flor y la retiramos al terminar su animación.
    document.body.appendChild(flor);
    setTimeout(() => flor.remove(), 6000);
}

/* =========================================================
   ESTILOS DINÁMICOS DE LAS FLORES
========================================================= */

const estilosCelebracion = document.createElement("style");
estilosCelebracion.textContent = `
    .flor-celebracion {
        position: fixed;
        bottom: -60px;
        z-index: 9999;
        pointer-events: none;
        animation: florCelebracion 4s linear forwards;
    }

    @keyframes florCelebracion {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        15% { opacity: 1; }
        50% {
            transform: translateY(-50vh) rotate(180deg);
        }
        100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

// Incorporamos los estilos al documento una sola vez.
document.head.appendChild(estilosCelebracion);
