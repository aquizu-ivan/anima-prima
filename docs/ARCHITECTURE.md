Arquitectura tecnica - ANIMA PRIMA
==================================

Resumen del proyecto
--------------------
ANIMA PRIMA es una Single Page Experience creada con Vite y JavaScript ES Modules, pensada como un recorrido conceptual por secciones (Intro, Cuerpo, Mente, Energia, Creacion, Manifiesto, Origen y Contacto). No es una app de formularios ni CRUD, sino una pieza digital que guia al usuario a traves de estados e ideas.

Obra digital contemplativa de IAQUIZU — Origin Architect of the Eighth Art; pulso inicial del conjunto de obras que se expandira en Verum Motus y UMBRAL.

GSAP actua como motor de animacion para transiciones fluidas y microinteracciones discretas. El foco esta en la narrativa visual y el ritmo, manteniendo el DOM ligero y la logica acotada a lo esencial.

La arquitectura separa entry point, capa core, animaciones por seccion y estilos modulados. Esto permite evolucionar cada capa sin acoplar la experiencia completa.

### Sistema de Ritmo Interno (`src/animation/ritmoInterno.js`)
- Rol: motor central de presencia que registra GSAP + ScrollTrigger, crea tweens por elemento y los vincula a su seccion con ScrollTrigger. Gestiona estado global de ritmo (reposo, atencion, transicion) y respeta `prefers-reduced-motion: reduce` (no inicializa si aplica).
- Relacion con otros modulos: `src/main.js` orquesta el arranque y llama a `initRitmoInterno()` tras el DOM listo; `animations/introAnimation.js` mantiene la animacion especifica de intro mientras `ritmoInterno.js` maneja la respiracion continua de la obra.
- Data-atributos consumidos: `data-ritmo="core"` (nodos nucleares como contenedores/titulos principales), `data-ritmo="texto"` (frases lead, manifiesto, contacto), `data-ritmo="atmosfera"` (contenedores que construyen atmósfera) y `data-ritmo-seccion="..."` (intro, cuerpo, mente, energia, creacion, manifiesto/origen, contacto).
- Comportamiento: tweens creados pausados; ScrollTrigger activa/pausa segun seccion visible (`start: top 80%`, `end: bottom 20%`). Estados modifican `timeScale` global (reposo base, atencion ligeramente mas vivo, transicion ligeramente mas lento para usos futuros).

Stack y herramientas
--------------------
- Vite (dev/build/preview).
- JavaScript ES Modules (vanilla).
- GSAP (motor de animacion).
- CSS modular con variables.
- ScrollTrigger ya opera junto a GSAP en el Sistema de Ritmo Interno; se expandira en escenas de scroll dedicadas.

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

Extensión a audio / 3D / otras capas
------------------------------------
Ánima Prima puede extenderse con audio ambiental, capas 3D u obras hermanas del Octavo Arte (Verum Motus, UMBRAL) siempre que se anclen al mismo pulso del Sistema de Ritmo Interno. Evitar múltiples fuentes de tiempo desincronizadas: un único clock conceptual debe regir visual, audio y 3D.

Lineamientos técnicos:
- Toda capa nueva debe leer el tempo/factores por sección (RITMO_BASE / RITMO_SECCION) o un derivado simple para sostener coherencia.
- Respetar `prefers-reduced-motion: reduce`: apagar la capa o moverla a un modo ultra suave; nunca ignorar la preferencia del usuario.
- No introducir motores de animación paralelos que compitan con GSAP/ScrollTrigger sin un plan de sincronía explícito.
- Un eventual “modo ultra lento” es optativo pero no reemplaza el respeto a reduce motion: no se fuerza movimiento si el usuario lo desactiva.
