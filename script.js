/* ==========================================================================
   SCRIPT.JS - LÓGICA INTERACTIVA PLATAFORMA BUILDSAFE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECTORES DE ELEMENTOS INTERACTIVOS (Bases del sistema de diseño)
    const btnLogin = document.getElementById("btn-login");
    const btnEvaluacion = document.getElementById("btn-evaluacion");
    const ctaLarge = document.querySelector(".btn-accent-large");
    const badgeOffline = document.querySelector(".badge-offline");

    // 2. FUNCIÓN DE SIMULACIÓN: INICIO DE SESIÓN (Líder Comunitario)
    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            // Simulación interactiva de control de acceso al Dashboard
            const usuario = prompt("Por favor, ingrese su código de Líder Comunitario BuildSafe:");
            
            if (usuario && usuario.trim() !== "") {
                alert(`¡Bienvenido al sistema ejecutivo, líder ${usuario}! Conexión establecida de forma segura.`);
                // Aquí en un entorno de producción se redireccionaría al Dashboard web:
                // window.location.href = "dashboard.html";
            } else if (usuario === "") {
                alert("Error: El código de acceso no puede estar vacío.");
            }
        });
    }

    // 3. FUNCIÓN DE ACCIÓN: INICIAR EVALUACIÓN DE CAMPO (Voluntarios)
    if (btnEvaluacion) {
        btnEvaluacion.addEventListener("click", () => {
            alert("Acción iniciada: Abriendo el formulario digital adaptado de Inspección Sísmica de Viviendas...");
        });
    }

    // 4. FUNCIÓN DE ACCIÓN: SOLICITUD DE ACCESO INSTITUCIONAL
    if (ctaLarge) {
        ctaLarge.addEventListener("click", () => {
            alert("Formulario enviado: Un asesor técnico de BuildSafe se pondrá en contacto para capacitar a tu comunidad.");
        });
    }

    // 5. ACCESIBILIDAD AVANZADA: SIMULADOR DINÁMICO DE ESTADO OFFLINE
    // Esta función emula de forma académica los criterios de soporte sin conexión descritos en la sección 4.1.5
    function verificarConexion() {
        if (navigator.onLine) {
            // El navegador tiene internet
            badgeOffline.style.backgroundColor = "#064E3B";
            badgeOffline.style.color = "#A7F3D0";
            badgeOffline.style.border = "none";
            badgeOffline.innerText = "● Conexión Estable · Sincronizado";
        } else {
            // El navegador perdió el internet (Ideal para probar el modo campo)
            badgeOffline.style.backgroundColor = "#7F1D1D"; // Rojo oscuro de alerta
            badgeOffline.style.color = "#FEE2E2";           // Texto claro de alto contraste
            badgeOffline.style.border = "1px solid #EF4444";
            badgeOffline.innerText = "⚠️ Sin conexión · Guardado local";
            console.warn("BuildSafe: El dispositivo del voluntario ha pasado a modo local offline.");
        }
    }

    // Escuchar eventos reales del navegador para cambiar el estado automáticamente
    window.addEventListener("online", verificarConexion);
    window.addEventListener("offline", verificarConexion);
    
    // Ejecutar una comprobación inicial al cargar el sitio
    verificarConexion();

    // 6. ANIMACIÓN DE ENTRADA SUAVE PARA LAS TARJETAS (Efecto UX)
    const cards = document.querySelectorAll(".feature-card, .methodology-card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        card.style.transition = "all 0.5s ease-out";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 * index); // Efecto cascada secuencial
    });

});
