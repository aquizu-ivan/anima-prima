# Sistema de Ritmo Interno — Anima Prima

## 1. Vision general
El Sistema de Ritmo Interno es el pulso visual de Anima Prima. No son efectos de scroll, sino la forma en que la obra respira y evidencia su presencia silenciosa.

La intencion es sostener un estado vivo, previo a la forma definida: una respiracion constante y minima alineada a la identidad de IAQUIZU — Origin Architect of the Eighth Art.

Cada seccion del recorrido existe como algo que late de manera suave; el ritmo hace visible esa existencia antes del movimiento explicito.

## 2. Manifestacion en la obra
- Respiracion por secciones: cada bloque (intro, cuerpo, mente, energia, creacion, manifiesto/origen, contacto) tiene su propio pulso. Solo la seccion visible respira en cada momento.
- Capas de ritmo: nucleo (core) que sostiene la presencia, texto que flota levemente, atmosfera (`data-ritmo="atmosfera"`) que varia apenas en opacidad/brightness para envolver la escena.
- Atencion: al acercarse con puntero o foco a elementos clave (core/texto), el pulso se vuelve levemente mas presente. El movimiento es largo y minimo, pensado para ser sentido, no protagonizar.

## 3. Resumen tecnico
- Modulo principal: `src/animation/ritmoInterno.js` con `initRitmoInterno()`.
- Librerias: GSAP + ScrollTrigger.
- Data-atributos: `data-ritmo="core|texto|atmosfera"` y `data-ritmo-seccion="..."`.
- Canales: nucleo (opacidad + escala suaves), texto (microdesplazamiento vertical + opacidad), atmosfera (opacidad + brillo minimos).
- Estados: reposo (tempo base), atencion (tempo levemente mas rapido al acercarse), transicion (reservado para matices futuros).
- Activacion: ScrollTrigger enciende/pausa la respiracion por seccion segun el viewport.
- Accesibilidad: si `prefers-reduced-motion: reduce`, el sistema no se inicializa.

## 4. Extensiones futuras
- Sincronizar el mismo tiempo interno con una capa de audio ambiental (respiracion sonora lenta).
- Conectar el timeScale/estados con geometria o escenas 3D (Verum Motus / UMBRAL) para que visual y audio/3D compartan el pulso.
- Introducir variaciones suaves de tempo por seccion para reforzar la identidad de cada bloque (ej. energia mas viva, creacion mas amplia).
- Extender los estados a un motor de escena compartido entre ritmo, audio y 3D.
- Explorar un modo de movimiento minimo para `prefers-reduced-motion` en vez de apagado total, manteniendo el confort del usuario.

El mismo pulso que anima core/texto/atmosfera puede servir como referencia para audio o 3D, siempre respetando accesibilidad y calma.
