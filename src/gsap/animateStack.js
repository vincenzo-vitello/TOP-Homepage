import gsap from 'gsap';

export default function animateStack() {
  const stackImages = document.querySelectorAll('.stack-container img');

  stackImages.forEach((img) => {
    img.addEventListener('mouseenter', (event) => {
      const bounds = img.getBoundingClientRect();
      const mouseX = (event.clientX - bounds.left) - bounds.width / 2;
      const mouseY = (event.clientY - bounds.top) - bounds.height / 2;

      gsap.to(img, {
        duration: 0.5,
        x: -mouseX / 3,
        y: -mouseY / 3,
        ease: 'power2.out',
      });
    });

    img.addEventListener('mousemove', (event) => {
      const bounds = img.getBoundingClientRect();
      const mouseX = (event.clientX - bounds.left) - bounds.width / 2;
      const mouseY = (event.clientY - bounds.top) - bounds.height / 2;

      gsap.to(img, {
        x: -mouseX / 3,
        y: -mouseY / 3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });

    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'power2.out',
      });
    });
  });
}
