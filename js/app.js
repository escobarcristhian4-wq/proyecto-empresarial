/*==================================================
    ENTORNO VIRTUAL DE ORIENTACIÓN PEDAGÓGICA
    Instituto Superior Tecnológico Tsáchila
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarNavbar();
    contadorAnimado();
    scrollReveal();
    botonSubir();
    efectoTyping();
    efectoCards();

});

/*==========================================
NAVBAR
==========================================*/

function iniciarNavbar(){

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("shadow");
        navbar.style.background="#004B8D";

    }else{

        navbar.style.background="transparent";
        navbar.classList.remove("shadow");

    }

});

}

/*==========================================
BOTÓN VOLVER ARRIBA
==========================================*/

function botonSubir(){

const boton=document.createElement("button");

boton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

boton.id="btnTop";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.right="25px";
boton.style.bottom="25px";
boton.style.width="55px";
boton.style.height="55px";
boton.style.borderRadius="50%";
boton.style.border="none";
boton.style.background="#005BAC";
boton.style.color="white";
boton.style.fontSize="22px";
boton.style.cursor="pointer";
boton.style.display="none";
boton.style.zIndex="9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

boton.style.display="block";

}else{

boton.style.display="none";

}

});

boton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

/*==========================================
CONTADORES
==========================================*/

function contadorAnimado(){

const numeros=document.querySelectorAll(".display-4");

numeros.forEach(numero=>{

let inicio=0;

const objetivo=parseInt(numero.innerText);

const velocidad=40;

const actualizar=()=>{

inicio+=1;

numero.innerText=inicio+"+";

if(inicio<objetivo){

setTimeout(actualizar,velocidad);

}else{

numero.innerText=objetivo+"+";

}

}

actualizar();

});

}

/*==========================================
SCROLL REVEAL
==========================================*/

function scrollReveal(){

const elementos=document.querySelectorAll(".card,section,h2");

const mostrar=()=>{

elementos.forEach(el=>{

const top=el.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

el.style.opacity=1;
el.style.transform="translateY(0)";

}

});

}

elementos.forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(50px)";
el.style.transition="1s";

});

window.addEventListener("scroll",mostrar);

mostrar();

}

/*==========================================
EFECTO ESCRITURA
==========================================*/

function efectoTyping(){

const titulo=document.querySelector(".hero h1");

if(!titulo) return;

const texto=titulo.innerText;

titulo.innerHTML="";

let i=0;

const escribir=()=>{

if(i<texto.length){

titulo.innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,60);

}

}

escribir();

}

/*==========================================
EFECTO TARJETAS
==========================================*/

function efectoCards(){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#ffffff,#f3f8ff)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="white";

});

});

}

/*==========================================
MENSAJE BIENVENIDA
==========================================*/

setTimeout(()=>{

console.log("Bienvenido al Entorno Virtual de Orientación Pedagógica");

},1500);

/*==========================================
LOADER
==========================================*/

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.id="loader";

loader.style.position="fixed";
loader.style.top="0";
loader.style.left="0";
loader.style.width="100%";
loader.style.height="100%";
loader.style.background="white";
loader.style.zIndex="99999";
loader.style.display="flex";
loader.style.alignItems="center";
loader.style.justifyContent="center";
loader.style.fontSize="25px";
loader.style.fontWeight="bold";
loader.style.color="#005BAC";
loader.innerHTML="Cargando...";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="1s";

setTimeout(()=>{

loader.remove();

},1000);

},700);

});

/*==========================================
MODO OSCURO
==========================================*/

const modo=document.createElement("button");

modo.innerHTML='<i class="fa-solid fa-moon"></i>';

modo.style.position="fixed";
modo.style.left="25px";
modo.style.bottom="25px";
modo.style.width="55px";
modo.style.height="55px";
modo.style.borderRadius="50%";
modo.style.background="#222";
modo.style.color="white";
modo.style.border="none";
modo.style.cursor="pointer";
modo.style.zIndex="9999";

document.body.appendChild(modo);

let oscuro=false;

modo.onclick=()=>{

oscuro=!oscuro;

if(oscuro){

document.body.style.background="#1d1d1d";
document.body.style.color="white";

}else{

document.body.style.background="#f5f8fc";
document.body.style.color="#333";

}

}

/*==========================================
AÑO AUTOMÁTICO
==========================================*/

const footer=document.querySelector("footer .text-center");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Instituto Superior Tecnológico Tsáchila - Todos los derechos reservados.`;

}

// ==========================================
// 1. LÓGICA DEL JUEGO INTERACTIVO
// ==========================================
function validarJuego() {
    // El orden correcto de las filas en la tabla (1 al 7)
    const ordenCorrecto = [1, 2, 3, 4, 5, 6, 7];
    let esCorrecto = true;
    let incompleto = false;

    // Evaluamos los 7 casilleros
    for (let i = 1; i <= 7; i++) {
        const input = document.getElementById(`paso${i}`);
        
        if (!input) continue; // Por si algún ID no existe en el DOM

        const valor = parseInt(input.value);

        if (isNaN(valor)) {
            incompleto = true;
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        } else if (valor !== ordenCorrecto[i - 1]) {
            esCorrecto = false;
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    }

    const divResultado = document.getElementById("resultado");

    if (incompleto) {
        divResultado.innerHTML = `
            <div class="alert alert-warning text-center shadow-sm">
                <i class="fa-solid fa-triangle-exclamation me-2"></i>Por favor, completa todos los casilleros antes de comprobar.
            </div>`;
    } else if (esCorrecto) {
        divResultado.innerHTML = `
            <div class="alert alert-success text-center fw-bold shadow-sm">
                <i class="fa-solid fa-circle-check me-2"></i>¡Excelente trabajo! Has ordenado los pasos correctamente. 🎉
            </div>`;
    } else {
        divResultado.innerHTML = `
            <div class="alert alert-danger text-center shadow-sm">
                <i class="fa-solid fa-circle-xmark me-2"></i>Algunos pasos no están en el orden correcto. Revisa los casilleros en rojo e inténtalo de nuevo.
            </div>`;
    }
}

// ==========================================
// 2. FUNCIÓN DE AUDIO SÍNTESIS DE VOZ (BOTONES ESCUCHAR)
// ==========================================
function reproducirAudio(texto) {
    if ('speechSynthesis' in window) {
        // Cancelar lecturas anteriores si las hay
        window.speechSynthesis.cancel();

        const locucion = new SpeechSynthesisUtterance(texto);
        locucion.lang = 'es-ES'; // Idioma español
        locucion.rate = 0.9;     // Velocidad ligeramente más lenta para niños

        window.speechSynthesis.speak(locucion);
    } else {
        alert("Tu navegador no soporta la función de lectura de voz.");
    }
}

// Vincula automáticamente la lectura de voz a los botones "Escuchar" de los pasos
document.addEventListener("DOMContentLoaded", () => {
    const botonesEscuchar = document.querySelectorAll("#lavado .card");

    botonesEscuchar.forEach((card) => {
        const titulo = card.querySelector("h5")?.innerText || "";
        const descripcion = card.querySelector("p")?.innerText || "";
        const boton = card.querySelector("button");

        if (boton && (titulo || descripcion)) {
            boton.addEventListener("click", () => {
                reproducirAudio(`${titulo}. ${descripcion}`);
            });
        }
    });
});

// ==========================================
// JUEGO INTERACTIVO: ALIMENTACIÓN SALUDABLE
// ==========================================
function validarJuegoAlimentacion() {
    // Respuestas correctas esperadas para los 4 alimentos
    const respuestasCorrectas = {
        alim1: "saludable",     // Manzana
        alim2: "no_saludable",  // Paleta
        alim3: "saludable",     // Brócoli
        alim4: "no_saludable"   // Gaseosa
    };

    let aciertos = 0;
    let incompleto = false;

    // Evaluamos cada uno de los 4 alimentos
    for (let i = 1; i <= 4; i++) {
        const opciones = document.getElementsByName(`alim${i}`);
        const card = document.getElementById(`card-alim-${i}`);
        let seleccion = "";

        for (const opcion of opciones) {
            if (opcion.checked) {
                seleccion = opcion.value;
                break;
            }
        }

        if (seleccion === "") {
            incompleto = true;
            if (card) {
                card.classList.remove("border-success", "border-danger");
                card.classList.add("border", "border-warning");
            }
        } else if (seleccion === respuestasCorrectas[`alim${i}`]) {
            aciertos++;
            if (card) {
                card.classList.remove("border-warning", "border-danger");
                card.classList.add("border", "border-success", "border-3");
            }
        } else {
            if (card) {
                card.classList.remove("border-warning", "border-success");
                card.classList.add("border", "border-danger", "border-3");
            }
        }
    }

    const divResultado = document.getElementById("resultado-juego");

    if (incompleto) {
        divResultado.innerHTML = `
            <div class="alert alert-warning text-center shadow-sm fw-bold">
                <i class="fa-solid fa-triangle-exclamation me-2"></i>Por favor, responde todas las preguntas antes de comprobar.
            </div>`;
    } else if (aciertos === 4) {
        divResultado.innerHTML = `
            <div class="alert alert-success text-center shadow-sm fw-bold fs-5">
                <i class="fa-solid fa-circle-check me-2"></i>¡Excelente trabajo! Has identificado correctamente todos los alimentos. 🎉
            </div>`;
    } else {
        divResultado.innerHTML = `
            <div class="alert alert-danger text-center shadow-sm fw-bold">
                <i class="fa-solid fa-circle-xmark me-2"></i>Obtuviste ${aciertos} de 4 aciertos. Revisa las tarjetas marcadas en rojo e inténtalo de nuevo.
            </div>`;
    }
}


function calcularListaObservacion() {
    let puntajeTotal = 0;
    let marcados = 0;
    const totalIndicadores = 7;

    for (let i = 1; i <= totalIndicadores; i++) {
        const opciones = document.getElementsByName("obs" + i);
        for (let j = 0; j < opciones.length; j++) {
            if (opciones[j].checked) {
                puntajeTotal += parseInt(opciones[j].value);
                marcados++;
                break;
            }
        }
    }

    const divResultado = document.getElementById("resultado-observacion");

    if (!divResultado) return;

    if (marcados < totalIndicadores) {
        divResultado.className = "alert alert-warning text-center shadow-sm mb-4 fw-bold";
        divResultado.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Faltan indicadores por responder. Ha evaluado <strong>' + marcados + ' de ' + totalIndicadores + '</strong>. Complete la tabla y vuelva a presionar Evaluar.';
    } else {
        let nivel = "";
        let claseColor = "";

        if (puntajeTotal >= 11) {
            nivel = "Autonomía Consolidada";
            claseColor = "alert-success";
        } else if (puntajeTotal >= 6) {
            nivel = "En Proceso de Desarrollo";
            claseColor = "alert-info";
        } else {
            nivel = "Requiere Acompañamiento Prioritario";
            claseColor = "alert-danger";
        }

        divResultado.className = "alert " + claseColor + " text-center shadow-sm mb-4 fw-bold fs-5";
        divResultado.innerHTML = '<i class="fa-solid fa-square-poll-vertical me-2"></i> Puntaje Final: ' + puntajeTotal + ' / 14 pts — Nivel: <u>' + nivel + '</u>';
    }
}

function reiniciarListaObservacion() {
    for (let i = 1; i <= 7; i++) {
        const opciones = document.getElementsByName("obs" + i);
        for (let j = 0; j < opciones.length; j++) {
            opciones[j].checked = false;
        }
    }
    const divResultado = document.getElementById("resultado-observacion");
    if (divResultado) {
        divResultado.className = "alert alert-secondary text-center shadow-sm mb-4";
        divResultado.innerHTML = '<i class="fa-solid fa-info-circle me-2"></i> Seleccione las opciones en la tabla y presione el botón <strong>Evaluar Lista de Observación</strong>.';
    }
}