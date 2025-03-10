/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function animateCta() {
  gsap.registerPlugin(ScrollTrigger);

  const callToAction = document.querySelector('.call-to-action');

  const scrollWidth = callToAction.scrollWidth - window.innerWidth;

  gsap.to(callToAction, {
    x: -scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.call-to-action',
      pin: true,
      scrub: 1,
      snap: 1 / (scrollWidth / window.innerWidth),
      end: () => `+=${scrollWidth}`,
    },
  });
}
