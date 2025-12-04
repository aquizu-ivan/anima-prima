Arquitectura tecnica - ANIMA PRIMA
==================================

Resumen del proyecto
--------------------
ANIMA PRIMA es una Single Page Experience creada con Vite y JavaScript ES Modules, pensada como un recorrido conceptual por secciones (Intro, Cuerpo, Mente, Energia, Creacion, Manifiesto, Origen y Contacto). No es una app de formularios ni CRUD, sino una pieza digital que guia al usuario a traves de estados e ideas.

GSAP actua como motor de animacion para transiciones fluidas y microinteracciones discretas. El foco esta en la narrativa visual y el ritmo, manteniendo el DOM ligero y la logica acotada a lo esencial.

La arquitectura separa entry point, capa core, animaciones por seccion y estilos modulados. Esto permite evolucionar cada capa sin acoplar la experiencia completa.

Stack y herramientas
--------------------
- Vite (dev/build/preview).
- JavaScript ES Modules (vanilla).
- GSAP (motor de animacion).
- CSS modular con variables.
- ScrollTrigger se incorporara mas adelante como parte de la capa de animaciones.

Estructura de carpetas (vision de destino)
------------------------------------------
- `src/main.js`
- `src/core/`
  - `domReady.js` (existente).
  - `experienceController.js` (a crear en tickets futuros).
  - `gsapConfig.js` (a crear en tickets futuros).
- `src/animations/`
  - `introAnimation.js`
  - `bodyMindFlow.js`
  - `manifestoAnimation.js`
  - `originContactAnimation.js`
  - `scrollScenes.js`
- `src/styles/`
  - `tokens.css`
  - `base.css`
  - `layout.css`
  - `typography.css`
  - `components.css`
  - `sections/` (intro.css, cuerpo.css, mente.css, energia.css, creacion.css, manifiesto.css, origen.css, contacto.css) a medida que se necesiten.
- `docs/` (documentacion de arquitectura, diseno y planificacion de tickets).

Responsabilidades por modulo
----------------------------
- `main.js`: entry point que inicializa la experiencia y coordina la carga de estilos y animaciones.
- `core/domReady.js`: helper para ejecutar callbacks al terminar `DOMContentLoaded`.
- `core/experienceController.js`: futuro orquestador de escenas y estados, gestionando la activacion de animaciones por seccion.
- `core/gsapConfig.js`: futuro punto unico para registrar GSAP/ScrollTrigger, defaults de easing y utilidades compartidas.
- `animations/*`: modulos independientes por seccion o flujo que encapsulan timelines y efectos sin filtrar detalles al entry point.
- `styles/tokens.css`: variables de color, espaciado y motion.
- `styles/base.css`, `layout.css`, `typography.css`, `components.css`: capas globales que definen reset, grillas, jerarquias tipograficas y componentes minimos.
- `styles/sections/*`: estilos especificos de cada seccion, cargados de forma modular para mantener la coherencia y el aislamiento visual.
