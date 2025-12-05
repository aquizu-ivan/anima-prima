# Sistema de Ritmo Interno — Ánima Prima

## 1. Visión general
El Sistema de Ritmo Interno es el pulso visual de Ánima Prima. No son efectos de scroll, sino la forma en que la obra respira y evidencia su presencia silenciosa.

La intención es sostener un estado vivo, previo a la forma definida: una respiración constante y mínima alineada a la identidad de IAQUIZU — IA-Extended Visual Systems Architect.

Cada sección del recorrido existe como algo que late de manera suave; el ritmo hace visible esa existencia antes del movimiento explícito.

## 2. Manifestación en la obra
- Respiración por secciones: cada bloque (intro, cuerpo, mente, energía, creación, manifiesto/origen, contacto) tiene su propio pulso. Solo la sección visible respira en cada momento.
- Capas de ritmo: núcleo (core) que sostiene la presencia, texto que flota levemente, atmósfera que varía apenas en opacidad/brightness para envolver la escena.
- Atención: al acercarse con puntero o foco a elementos clave (core/texto), el pulso se vuelve levemente más presente. El movimiento es largo y mínimo, pensado para ser sentido, no protagonizar.

## 3. Resumen técnico
- Módulo principal: `src/animation/ritmoInterno.js` con `initRitmoInterno()`.
- Librerías: GSAP + ScrollTrigger.
- Data-atributos: `data-ritmo="core|texto|atmósfera"` y `data-ritmo-seccion="..."`.
- Canales: núcleo (opacidad + escala suaves), texto (microdesplazamiento vertical + opacidad), atmósfera (opacidad + brillo mínimos).
- Estados: reposo (tempo base), atención (tempo levemente más rápido al acercarse), transición (reservado para matices futuros).
- Activación: ScrollTrigger enciende/pausa la respiración por sección según el viewport.
- Accesibilidad: si `prefers-reduced-motion: reduce`, el sistema no se inicializa.

## 4. Extensiones futuras
- Sincronizar el mismo tiempo interno con una capa de audio ambiental (respiración sonora lenta).
- Conectar el timeScale/estados con geometrías o escenas 3D (Verum Motus / UMBRAL) para que visual y audio/3D compartan el pulso.
- Introducir variaciones suaves de tempo por sección para reforzar la identidad de cada bloque (ej. energía más viva, creación más amplia).
- Extender los estados a un motor de escena compartido entre ritmo, audio y 3D.
- Explorar un modo de “movimiento mínimo” para `prefers-reduced-motion` en vez de apagado total, manteniendo el confort del usuario.
