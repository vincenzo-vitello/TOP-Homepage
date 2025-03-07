/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';

export default function animateProjectLink() {
  const links = document.querySelectorAll('.project-card');

  links.forEach((link) => {
    const projectImage = link.querySelector('.project-image');

    link.addEventListener('mouseenter', () => {
      const scaleLetter = link.querySelector('.scale-link');
      const moveLetters = link.querySelector('.move-link');

      if (scaleLetter) {
        gsap.to(scaleLetter, {
          scaleX: 3,
          x: 50,
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      if (moveLetters) {
        gsap.to(moveLetters, {
          x: 100,
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      // Mostra e scala l'immagine
      gsap.to(projectImage, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      const moveImage = (event) => {
        const { clientX, clientY } = event;
        const rect = link.getBoundingClientRect();
        const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 150;
        const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 150;

        gsap.to(projectImage, {
          x: offsetX,
          y: offsetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      link.addEventListener('mousemove', moveImage);

      link.addEventListener('mouseleave', () => {
        if (scaleLetter) {
          gsap.to(scaleLetter, {
            scaleX: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        }

        if (moveLetters) {
          gsap.to(moveLetters, {
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        }

        link.removeEventListener('mousemove', moveImage);

        gsap.to(projectImage, {
          autoAlpha: 0,
          scale: 0.95,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  });
}
