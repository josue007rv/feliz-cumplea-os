/* =========================================================
   ELEMENTOS DE LA PÁGINA
========================================================= */

// Pantalla inicial
const inicio = document.getElementById("inicio");

// Tarjeta principal
const tarjeta = document.getElementById("tarjeta");

// Botón para abrir la sorpresa
const abrirBtn = document.getElementById("abrirBtn");

// Botón para celebrar
const celebrarBtn = document.getElementById("celebrarBtn");


/* =========================================================
   ABRIR LA TARJETA
========================================================= */

abrirBtn.addEventListener("click", () => {

    // Ocultamos la pantalla inicial
    inicio.classList.add("ocultar");

    // Mostramos la tarjeta
    tarjeta.classList.add("mostrar");

    // Desplazamos la página al inicio
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   CELEBRACIÓN
========================================================= */

celebrarBtn.addEventListener("click", () => {

    // Creamos varias flores
    // que aparecerán desde abajo.

    for (let i = 0; i < 25; i++) {

        crearFlor();

    }

});


/* =========================================================
   FUNCIÓN PARA CREAR FLORES
========================================================= */

function crearFlor() {

    // Creamos un nuevo elemento
    const flor = document.createElement("div");

    // Elegimos aleatoriamente entre dos flores
    const flores = ["🌻", "🌼"];

    flor.textContent =
        flores[Math.floor(Math.random() * flores.length)];


    // Clase para aplicar estilos
    flor.classList.add("flor-celebracion");


    // Posición horizontal aleatoria
    flor.style.left =
        Math.random() * 100 + "vw";


    // Tamaño aleatorio
    flor.style.fontSize =
        20 + Math.random() * 35 + "px";


    // Velocidad aleatoria
    flor.style.animationDuration =
        3 + Math.random() * 3 + "s";


    // Agregamos la flor a la página
    document.body.appendChild(flor);


    // Eliminamos la flor después de terminar
    // la animación para no acumular elementos.
    setTimeout(() => {

        flor.remove();

    }, 6000);

}


/* =========================================================
   ESTILOS DINÁMICOS PARA LAS FLORES DE CELEBRACIÓN
========================================================= */

const estilosCelebracion = document.createElement("style");

estilosCelebracion.textContent = `

    .flor-celebracion {

        position: fixed;

        bottom: -60px;

        z-index: 9999;

        pointer-events: none;

        animation:
            florCelebracion 4s linear forwards;

    }

    @keyframes florCelebracion {

        0% {

            transform:
                translateY(0)
                rotate(0deg);

            opacity: 0;

        }

        15% {

            opacity: 1;

        }

        50% {

            transform:
                translateY(-50vh)
                rotate(180deg);

        }

        100% {

            transform:
                translateY(-110vh)
                rotate(360deg);

            opacity: 0;

        }

    }

`;


// Agregamos los estilos al documento
document.head.appendChild(estilosCelebracion);
