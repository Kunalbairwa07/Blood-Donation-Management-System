// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in effect for the about section
window.addEventListener('load', () => {
  const aboutSection = document.querySelector('.about .container');
  aboutSection.style.opacity = '1';
  aboutSection.style.transform = 'translateY(0)';
});
