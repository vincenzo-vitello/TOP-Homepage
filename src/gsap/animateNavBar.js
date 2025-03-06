import gsap from 'gsap';

export default function animateNavElements() {
  // Funzione per suddividere ogni lettera in un `span` dinamicamente
  function splitLetters(element) {
    const text = element.innerText;
    const splitText = text.split('').map((char) => `<span class="distorted-letter">${char}</span>`).join('');
    element.innerHTML = splitText;
  }

  // Suddividi ogni lettera in `span` per ogni elemento .menu-item
  document.querySelectorAll('.menu-item').forEach((element) => {
    splitLetters(element); // Suddividi il testo dell'elemento
  });

  // Seleziona tutte le lettere degli elementi .menu-item
  const menuItems = document.querySelectorAll('.menu-item');

  // Aggiungi l'animazione al passaggio del mouse
  menuItems.forEach((menuItem) => {
    const letters = menuItem.querySelectorAll('.distorted-letter');

    menuItem.addEventListener('mouseenter', () => {
      gsap.to(letters, {
        color: 'var(--orange)', // Cambia il colore delle lettere
        duration: 0.3, // Accorcia la durata per una risposta più rapida
        stagger: 0.02, // Riduci il stagger per un effetto immediato
        ease: 'power1.out', // Usa un easing più veloce
      });
    });

    menuItem.addEventListener('mouseleave', () => {
      gsap.to(letters, {
        color: 'var(--white)', // Ripristina il colore originale
        duration: 0.3, // Durata rapida
        stagger: 0.02, // Riduci il stagger
        ease: 'power1.out', // Usa un easing veloce
      });
    });
  });
}
