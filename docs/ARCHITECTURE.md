Arquitectura técnica - ANIMA PRIMA
==================================

Resumen del proyecto
--------------------
ANIMA PRIMA es una Single Page Experience creada con Vite y JavaScript ES Modules, pensada como un recorrido conceptual por secciones (Intro, Cuerpo, Mente, Energía, Creación, Manifiesto, Origen y Contacto). No es una app de formularios ni CRUD, sino una pieza digital que guía al usuario a través de estados e ideas.

Obra digital contemplativa de IAQUIZU — IA-Extended Visual Systems Architect; pieza de origen del conjunto de obras que se expandirá en Verum Motus y Umbral.

GSAP actúa como motor de animación para transiciones fluidas y microinteracciones discretas. El foco está en la narrativa visual y el ritmo, manteniendo el DOM ligero y la lógica acotada a lo esencial.

La arquitectura separa entry point, capa core, animaciones por sección y estilos modulados. Esto permite evolucionar cada capa sin acoplar la experiencia completa.

### Sistema de Ritmo Interno (src/animation/ritmoInterno.js)
- Rol: motor central de presencia que registra GSAP + ScrollTrigger, crea tweens por elemento y los vincula a su sección con ScrollTrigger. Gestiona estado global de ritmo (reposo, atención, transición) y respeta prefers-reduced-motion: reduce (no inicializa si aplica).
- Relación con otros módulos: src/main.js orquesta el arranque y llama a initRitmoInterno() tras el DOM listo; animations/introAnimation.js mantiene la animación específica de intro mientras ritmoInterno.js maneja la respiración continua de la obra.
- Data-atributos consumidos: data-ritmo="core" (nodos nucleares como contenedores/títulos principales), data-ritmo="texto" (frases lead, manifiesto, contacto), data-ritmo="atmósfera" (contenedores que construyen ambiente) y data-ritmo-seccion="..." (intro, cuerpo, mente, energía, creación, manifiesto/origen, contacto).
- Comportamiento: tweens creados pausados; ScrollTrigger activa/pausa según sección visible (start: top 80%, end: bottom 20%). Estados modifican timeScale global (reposo base, atención ligeramente más vivo, transición ligeramente más lento para usos futuros).

Stack y herramientas
--------------------
- Vite (dev/build/preview).
- JavaScript ES Modules (vanilla).
- GSAP (motor de animación) + ScrollTrigger (sincronización con scroll ya integrada en ritmoInterno.js).
- CSS modular con variables.

Estructura de carpetas (visión de destino)
------------------------------------------
- src/main.js
- src/core/
  - domReady.js (existente).
  - experienceController.js (a crear en tickets futuros).
  - gsapConfig.js (a crear en tickets futuros).
- src/animations/
  - introAnimation.js
  - bodyMindFlow.js
  - manifestoAnimation.js
  - originContactAnimation.js
  - scrollScenes.js
- src/styles/
  - tokens.css
  - base.css
  - layout.css
  - typography.css
  - components.css
  - sections/ (intro.css, cuerpo.css, mente.css, energía.css, creación.css, manifiesto.css, origen.css, contacto.css) a medida que se necesiten.
- docs/ (documentación de arquitectura, diseño y planificación de tickets).

Responsabilidades por módulo
----------------------------
- main.js: entry point que inicializa la experiencia y coordina la carga de estilos y animaciones.
- core/domReady.js: helper para ejecutar callbacks al terminar DOMContentLoaded.
- core/experienceController.js: futuro orquestador de escenas y estados, gestionando la activación de animaciones por sección.
- core/gsapConfig.js: futuro punto único para registrar GSAP/ScrollTrigger, defaults de easing y utilidades compartidas.
- animations/*: módulos independientes por sección o flujo que encapsulan timelines y efectos sin filtrar detalles al entry point.
- styles/tokens.css: variables de color, espaciado y motion.
- styles/base.css, layout.css, typography.css, components.css: capas globales que definen reset, grillas, jerarquías tipográficas y componentes mínimos.
- styles/sections/*: estilos específicos de cada sección, cargados de forma modular para mantener la coherencia y el aislamiento visual.