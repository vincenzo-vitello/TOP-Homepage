/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateName() {
  function splitLetters(element) {
    const text = element.innerText;
    const splitText = text.split('').map((char) => `<span class="distorted-letter">${char}</span>`).join('');
    element.innerHTML = splitText;
  }

  document.querySelectorAll('.name, .surname').forEach((element) => {
    splitLetters(element);
  });

  const nameDistortedLetters = document.querySelectorAll('.name .distorted-letter');
  const surnameDistortedLetters = document.querySelectorAll('.surname .distorted-letter');

  function animateLetters(letters) {
    const randomLetterIndex = Math.floor(Math.random() * letters.length);
    const randomScaleX = Math.random() * (1.5 - 0.8) + 0.8;
    const randomScaleY = Math.random() * (1.5 - 0.8) + 0.8;

    gsap.to(letters[randomLetterIndex], {
      scaleX: randomScaleX,
      scaleY: randomScaleY,
      duration: 0.2,
      ease: 'power2.out',
    });
  }

  document.querySelector('.name').addEventListener('mouseenter', () => {
    nameDistortedLetters.forEach(() => animateLetters(nameDistortedLetters));
  });

  document.querySelector('.surname').addEventListener('mouseenter', () => {
    surnameDistortedLetters.forEach(() => animateLetters(surnameDistortedLetters));
  });

  document.querySelector('.name').addEventListener('mouseleave', () => {
    gsap.to(nameDistortedLetters, { scaleX: 1, scaleY: 1, duration: 0.2 });
  });

  document.querySelector('.surname').addEventListener('mouseleave', () => {
    gsap.to(surnameDistortedLetters, { scaleX: 1, scaleY: 1, duration: 0.2 });
  });
}
