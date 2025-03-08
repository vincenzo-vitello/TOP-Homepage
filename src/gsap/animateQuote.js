/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function animateQuote() {
  gsap.registerPlugin(ScrollTrigger);

  const textElement = document.querySelector('.quote p');

  const text = textElement.textContent;
  textElement.innerHTML = text.split('').map((letter) => `<span>${letter}</span>`).join('');

  const letters = textElement.querySelectorAll('span');

  gsap.set(letters, { opacity: 0.3 });

  gsap.to(letters, {
    opacity: 1,
    duration: 3,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.quote',
      start: 'top 50%',
      end: 'bottom 80%',
      scrub: true,
    },
  });
}
