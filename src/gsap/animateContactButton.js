/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateContactButton() {
  const button = document.querySelector('.contact-btn');
  let boundingRect = button.getBoundingClientRect();

  window.addEventListener('resize', () => {
    boundingRect = button.getBoundingClientRect();
  });

  button.addEventListener('mousemove', (e) => {
    const mousePosX = e.clientX - boundingRect.left;
    const mousePosY = e.clientY - boundingRect.top;

    const moveX = (mousePosX - boundingRect.width / 2) * 0.6;
    const moveY = (mousePosY - boundingRect.height / 2) * 0.6;

    const maxMove = 40;
    const limitedMoveX = Math.min(Math.max(moveX, -maxMove), maxMove);
    const limitedMoveY = Math.min(Math.max(moveY, -maxMove), maxMove);

    gsap.to(button, {
      x: limitedMoveX,
      y: limitedMoveY,
      duration: 0.4,
      ease: 'power2.out',
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 1.2,
      ease: 'elastic.out(1.2, 0.4)',
    });
  });
}
