// Scroll Fade & Slide-in Animation using IntersectionObserver
const fadeElems = document.querySelectorAll('.fade-slide');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.25 }
);
fadeElems.forEach(el => observer.observe(el));


// Animate skill bars when visible
const skillBars = document.querySelectorAll('.bar-fill');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.width = entry.target.style.getPropertyValue('--fill');
      }
    });
  },
  { threshold: 0.5 }
);
skillBars.forEach(bar => skillObserver.observe(bar));


// 3D Tilt effect for cards
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // max rotation 8 deg
    const rotateY = ((x - centerX) / centerX) * 8;

    card.children[0].style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.children[0].style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
  });
});
