/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateName() {
  function wrapLetters(element) {
    const text = element.textContent.trim();
    element.innerHTML = '';

    text.split('').forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.classList.add('letter');
      span.style.display = 'inline-block';
      span.addEventListener('mouseenter', () => {
        gsap.to(span, {
          scaleY: 1.5,
          y: -10,
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      span.addEventListener('mouseleave', () => {
        gsap.to(span, {
          scaleY: 1,
          y: 0,
          duration: 0.2,
        });
      });

      element.appendChild(span);
    });
  }
  const nameElement = document.querySelector('.name');
  const surnameElement = document.querySelector('.surname');

  wrapLetters(nameElement);
  wrapLetters(surnameElement);
}
