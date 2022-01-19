const vh = window.innerHeight * 0.01;

export const init = () => {
  document.documentElement.style.setProperty('--vh', `${vh}px`);


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      console.log('changed size');
    }
  });

};
