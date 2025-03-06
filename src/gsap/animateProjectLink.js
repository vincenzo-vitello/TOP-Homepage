/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateProjectLink() {
  const links = document.querySelectorAll('.project-card');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const lastLetterSpan = link.querySelector('.animate-link');
      if (lastLetterSpan) {
        gsap.to(lastLetterSpan, {
          scaleX: 3,
          x: 60,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    });

    link.addEventListener('mouseleave', () => {
      const lastLetterSpan = link.querySelector('.animate-link');

      if (lastLetterSpan) {
        gsap.to(lastLetterSpan, {
          scaleX: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    });
  });
}
