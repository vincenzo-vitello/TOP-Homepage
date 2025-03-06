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
      const projectImage = link.querySelector('.project-image');
      projectImage.classList.add('visible');
      gsap.to(projectImage, {
        y: -10,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    link.addEventListener('mouseleave', () => {
      const lastLetterSpan = link.querySelector('.animate-link');

      if (lastLetterSpan) {
        gsap.to(lastLetterSpan, {
          scaleX: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
      const projectImage = link.querySelector('.project-image');
      projectImage.classList.remove('visible');

      gsap.killTweensOf(projectImage);
      gsap.to(projectImage, {
        y: 0,
        duration: 1,
      });
    });
  });
}
