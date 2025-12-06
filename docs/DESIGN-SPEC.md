Especificacion de diseno - ANIMA PRIMA
======================================

Concepto central
----------------
ANIMA PRIMA es una experiencia minimalista basada en cuerpo-mente-energia-creacion, vinculada a un manifiesto personal. Creada por IAQUIZU - IA-Extended Visual Systems Architect, es la obra de origen que antecede a piezas como Verum Motus y Umbral. Se busca transmitir calma, profundidad y foco, eliminando ruido visual y priorizando la intencion en cada seccion.

La sensacion deseada es de respiracion y recogimiento: pocos elementos, silencios visuales y ritmo controlado para que cada transicion se sienta deliberada.

Paleta de colores
-----------------
- Fondo principal oscuro mapeado a `--color-bg`.
- Texto claro mapeado a `--color-text`.
- Acento energetico mapeado a `--color-accent-1`.
- Acento calmado mapeado a `--color-accent-2`.
- Los valores exactos viven en `src/styles/tokens.css` y actuan como unico origen de verdad.

Tipografia
----------
- Fuente principal: Space Grotesk (definida en `typography.css`).
- Jerarquia: `h1` para el titulo principal de Intro; `h2` para las secciones Cuerpo, Mente, Energia, Creacion, Manifiesto, Origen y Contacto.
- Manifiesto: texto mas denso y continuo, con interlineado comodo para legibilidad sostenida.

Principios de animacion y movimiento
------------------------------------
- Animaciones suaves con easings fluidos; evitar parpadeos o cambios bruscos.
- Pocos elementos animados simultaneamente para preservar foco.
- Movimiento que sugiera respiracion y transito interno entre estados.
- GSAP es el motor principal; ScrollTrigger se integrara mas adelante para sincronizar con scroll manteniendo estos principios.

### Lenguaje de movimiento — Sistema de Ritmo Interno
- Intencion: representar la respiracion interna de ANIMA PRIMA. Movimiento lento, continuo y sutil; no decorativo. La obra debe sentirse como una presencia viva, no como un conjunto de efectos.
- Parametros de ritmo: duraciones largas (aprox. 12s / 14s / 18s) con `sine.inOut`; amplitudes reducidas (core: opacidad/escala ligera, texto: micro-flotacion vertical, atmósfera (`data-ritmo="atmosfera"`): variaciones minimas de opacidad/brightness).
- Estados: atencion acelera ligeramente el tempo en hover/focus sobre core/texto; reposo es el estado base; transicion queda disponible para matizar tempos futuros. Siempre sutil, sin convertirlo en interaccion UI.
- Coherencia por seccion: todas las secciones comparten el mismo lenguaje de respiracion; solo respira la seccion visible. Bloques como Origen pueden permanecer quietos de forma deliberada.
- Accesibilidad: si `prefers-reduced-motion: reduce`, el Sistema de Ritmo Interno no se inicializa. La obra sigue siendo contemplativa desde composicion y texto sin movimiento. Posibles extensiones futuras pueden contemplar un tempo ultra lento, manteniendo el confort del usuario.

Capas futuras: audio, 3D, sincronia
-----------------------------------
- Audio: ambiente o susurro que acompaña el pulso, sin protagonismo ni efectos bruscos.
- 3D: prolongar silencio y ritmo; sin espectaculo ni sobresaltos de luz.
- Obras hermanas (Naturaleza Argentina, Verum Motus, UMBRAL): continuidad del ritmo interno, no collage.
- Accesibilidad: toda capa futura respeta `prefers-reduced-motion`, evita cambios abruptos de luz/sonido y mantiene la legibilidad solo con texto + composicion.

Layout y composicion
--------------------
- Uso deliberado de espacio negativo como parte de la atmósfera.
- Pocos elementos por pantalla, priorizando jerarquia y aire.
- Centrados o alineados de forma que transmitan calma y precision.
- Pensado desktop-first sin excluir ajustes responsive en tickets futuros.

