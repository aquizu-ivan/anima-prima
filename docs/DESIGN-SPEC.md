Especificación de diseño - ANIMA PRIMA
======================================

Concepto central
----------------
ANIMA PRIMA es una experiencia minimalista basada en cuerpo-mente-energía-creación, vinculada a un manifiesto personal. Creada por IAQUIZU — IA-Extended Visual Systems Architect, es la obra de origen que antecede a piezas como Verum Motus y Umbral. Se busca transmitir calma, profundidad y foco, eliminando ruido visual y priorizando la intención en cada sección.

La sensación deseada es de respiración y recogimiento: pocos elementos, silencios visuales y ritmo controlado para que cada transición se sienta deliberada.

Paleta de colores
-----------------
- Fondo principal oscuro mapeado a `--color-bg`.
- Texto claro mapeado a `--color-text`.
- Acento energético mapeado a `--color-accent-1`.
- Acento calmado mapeado a `--color-accent-2`.
- Los valores exactos viven en `src/styles/tokens.css` y actúan como único origen de verdad.

Tipografía
----------
- Fuente principal: Space Grotesk (definida en `typography.css`).
- Jerarquía: `h1` para el título principal de Intro; `h2` para las secciones Cuerpo, Mente, Energía, Creación, Manifiesto, Origen y Contacto.
- Manifiesto: texto más denso y continuo, con interlineado cómodo para legibilidad sostenida.

Principios de animación y movimiento
------------------------------------
- Animaciones suaves con easings fluidos; evitar parpadeos o cambios bruscos.
- Pocos elementos animados simultáneamente para preservar foco.
- Movimiento que sugiera respiración y tránsito interno entre estados.
- GSAP es el motor principal; ScrollTrigger se integrará más adelante para sincronizar con scroll manteniendo estos principios.

### Lenguaje de movimiento — Sistema de Ritmo Interno
- Intención: representar la respiración interna de ANIMA PRIMA. Movimiento lento, continuo y sutil; no decorativo. La obra debe sentirse como una presencia viva, no como un conjunto de efectos.
- Parámetros de ritmo: duraciones largas (aprox. 12s / 14s / 18s) con `sine.inOut`; amplitudes reducidas (core: opacidad/escala ligera, texto: micro-flotación vertical, atmósfera: variaciones mínimas de opacidad/brightness).
- Estados: atención acelera ligeramente el tempo en hover/focus sobre core/texto; reposo es el estado base; transición queda disponible para matizar tempos futuros. Siempre sutil, sin convertirlo en interacción UI.
- Coherencia por sección: todas las secciones comparten el mismo lenguaje de respiración; solo respira la sección visible. Bloques como Origen pueden permanecer quietos de forma deliberada.
- Accesibilidad: si `prefers-reduced-motion: reduce`, el Sistema de Ritmo Interno no se inicializa. La obra sigue siendo contemplativa desde composición y texto sin movimiento. Posibles extensiones futuras pueden contemplar un tempo ultra lento, manteniendo el confort del usuario.

Layout y composición
--------------------
- Uso deliberado de espacio negativo como parte de la atmósfera.
- Pocos elementos por pantalla, priorizando jerarquía y aire.
- Centrados o alineados de forma que transmitan calma y precisión.
- Pensado desktop-first sin excluir ajustes responsive en tickets futuros.
