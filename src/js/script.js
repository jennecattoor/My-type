import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.introduction-text', {
  scrollTrigger: '.introduction-text',
  color: 'var(--colorBlack)',
  duration: '.5'
});

const horizontal = document.querySelector('.paul_renner');

gsap.to(horizontal, {
  xPercent: - 100,
  x: () => innerWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: '.paul_renner',
    start: 'top top',
    end: () => innerWidth * 9,
    scrub: true,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  }
});


export const init = () => {

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    if (window.innerWidth >= 1024) {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  });
};
