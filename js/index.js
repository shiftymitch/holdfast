document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const carousel = document.querySelector('#carousel');
  const images = [...carousel.querySelectorAll('img')];
  const current = document.querySelector('#slideCurrent');
  const total = document.querySelector('#slideTotal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let slideIndex = 0;
  let timer;

  total.textContent = String(images.length).padStart(2, '0');
  const showSlide = (nextIndex) => {
    images[slideIndex].classList.remove('is-active');
    slideIndex = (nextIndex + images.length) % images.length;
    images[slideIndex].classList.add('is-active');
    current.textContent = String(slideIndex + 1).padStart(2, '0');
  };
  const restartCarousel = () => {
    window.clearInterval(timer);
    if (!reduceMotion) timer = window.setInterval(() => showSlide(slideIndex + 1), 5000);
  };
  document.querySelector('#prevBtn').addEventListener('click', () => { showSlide(slideIndex - 1); restartCarousel(); });
  document.querySelector('#nextBtn').addEventListener('click', () => { showSlide(slideIndex + 1); restartCarousel(); });
  carousel.addEventListener('mouseenter', () => window.clearInterval(timer));
  carousel.addEventListener('mouseleave', restartCarousel);
  restartCarousel();

  window.addEventListener('scroll', () => header.classList.toggle('is-sticky', window.scrollY > 120), { passive: true });
  document.querySelectorAll('.service-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.service-item');
      const willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.service-item.is-open').forEach((openItem) => {
        openItem.classList.remove('is-open');
        openItem.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
});
