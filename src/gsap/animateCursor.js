/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import gsap from 'gsap';

export default function animateCursor() {
  let posX = 0;
  let posY = 0;

  let mouseX = 0;
  let mouseY = 0;

  gsap.to('.cursor', {
    duration: 0.018,
    repeat: -1,
    onRepeat() {
      posX += (mouseX - posX) / 8;
      posY += (mouseY - posY) / 8;

      gsap.set('.cursor', {
        css: {
          left: posX + 5,
          top: posY - 5,
        },
      });
    },
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
}
