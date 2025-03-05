import './styles/style.css';

console.log('Frontend Boilerplate Ready!');
document.addEventListener('DOMContentLoaded', () => {
  const letter = document.querySelectorAll('.distorted-letter');
  const name = document.querySelector('.fullname');

  name.addEventListener('mouseenter', () => {
    gsap.to(letter, {
      scaleX: 1.3,
      scaleY: 0.85,
      duration: 0.2,
      ease: 'power2.out',
    });
  });

  name.addEventListener('mouseleave', () => {
    gsap.to(letter, { scaleX: 1, scaleY: 1, duration: 0.2 });
  });
});
