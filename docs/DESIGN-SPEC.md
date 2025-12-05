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

Layout y composicion
--------------------
- Uso deliberado de espacio negativo como parte de la atmosfera.
- Pocos elementos por pantalla, priorizando jerarquia y aire.
- Centrados o alineados de forma que transmitan calma y precision.
- Pensado desktop-first sin excluir ajustes responsive en tickets futuros.
