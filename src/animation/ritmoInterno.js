import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let estadoRitmoGlobal = 'reposo';
const tweensRitmo = [];

export function initRitmoInterno() {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotionQuery.matches) {
    return;
  }

  const coreElements = document.querySelectorAll('[data-ritmo="core"]');
  const textElements = document.querySelectorAll('[data-ritmo="texto"]');
  const atmosphereElements = document.querySelectorAll('[data-ritmo="atmósfera"]');

  if (!coreElements.length && !textElements.length && !atmosphereElements.length) {
    return;
  }

  const setEstadoRitmo = (nuevoEstado) => {
    if (estadoRitmoGlobal === nuevoEstado) return;
    estadoRitmoGlobal = nuevoEstado;

    let targetTimeScale = 1;

    if (nuevoEstado === 'atencion') {
      targetTimeScale = 1.25;
    } else if (nuevoEstado === 'transicion') {
      targetTimeScale = 0.85;
    } else {
      targetTimeScale = 1;
    }

    if (!tweensRitmo.length) return;

    gsap.to(tweensRitmo, {
      timeScale: targetTimeScale,
      duration: 1.2,
      ease: 'sine.inOut',
    });
  };

  const createSectionTween = (element, fromVars, toVars) => {
    const section = element.closest('[data-ritmo-seccion]');
    const tween = gsap.fromTo(
      element,
      fromVars,
      {
        ...toVars,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        paused: true,
      },
    );
    tweensRitmo.push(tween);

    ScrollTrigger.create({
      trigger: section || element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => tween.play(),
      onEnterBack: () => tween.play(),
      onLeave: () => tween.pause(),
      onLeaveBack: () => tween.pause(),
    });
  };

  coreElements.forEach((el) => {
    createSectionTween(
      el,
      { opacity: 0.85, scale: 1 },
      { opacity: 1, scale: 1.03, duration: 12 },
    );
  });

  textElements.forEach((el, index) => {
    createSectionTween(
      el,
      { opacity: 0.9, y: 0 },
      { opacity: 1, y: -4, duration: 14, delay: index * 0.2 },
    );
  });

  atmosphereElements.forEach((el) => {
    createSectionTween(
      el,
      { opacity: 0.6, filter: 'brightness(0.95)' },
      { opacity: 0.8, filter: 'brightness(1)', duration: 18 },
    );
  });

  const nodosAtencion = document.querySelectorAll('[data-ritmo="core"], [data-ritmo="texto"]');

  nodosAtencion.forEach((el) => {
    el.addEventListener('mouseenter', () => setEstadoRitmo('atencion'));
    el.addEventListener('mouseleave', () => setEstadoRitmo('reposo'));
    el.addEventListener('focus', () => setEstadoRitmo('atencion'));
    el.addEventListener('blur', () => setEstadoRitmo('reposo'));
  });
}
