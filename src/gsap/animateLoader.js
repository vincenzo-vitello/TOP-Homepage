import gsap from 'gsap';

export default function animateLoader() {
  /** @format */
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflowY = 'visible'; // Assicura che lo scroll sia visibile dopo il caricamento
    },
  });

  // Animazione della barra di caricamento
  tl.to('.loader-bar', {
    width: '100%',
    borderRadius: '0 20px 20px 0',
    duration: 3, // Durata per far crescere la barra (modifica se necessario)
    ease: 'power2.easeInOut', // Easing per un effetto più fluido
  });

  // Rimuove il loader e mostra il contenuto
  tl.to('.loader-wrap', {
    y: -1500,
    duration: 1,
  });

  tl.to('.loader-wrap', {
    zIndex: -1,
    display: 'none',
    duration: 0.1,
  });

  tl.from('.container', {
    y: 100,
    opacity: 0,
    duration: 1.5,
  }, '-=1');

  tl.from('nav', {
    duration: 1,
    y: -100,
    delay: 0.5,
  }, '-=1.2');

  tl.from('.greetings', {
    duration: 1,
    opacity: 0,
  });
}
