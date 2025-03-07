/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateNavElements() {
  function splitLetters(element) {
    const text = element.innerText;
    const splitText = text.split('').map((char) => `<span class="distorted-letter">${char}</span>`).join('');
    element.innerHTML = splitText;
  }

  document.querySelectorAll('.menu-item').forEach((element) => {
    splitLetters(element);
  });

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((menuItem) => {
    const letters = menuItem.querySelectorAll('.distorted-letter');

    menuItem.addEventListener('mouseenter', () => {
      gsap.to(letters, {
        color: 'var(--accent)',
        scaleX: 0.8,
        scaleY: 0.8,
        duration: 0.3,
        stagger: 0.02,
        ease: 'power1.out',
      });

      menuItem.addEventListener('mouseleave', () => {
        gsap.to(letters, {
          color: 'var(--base)',
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: 'power1.out',
        });
      });
    });
  });
}
