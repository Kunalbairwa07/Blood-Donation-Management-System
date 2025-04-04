// Smooth scroll to sections
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

// Button click interaction
const donateButton = document.querySelector('button');

donateButton.addEventListener('click', () => {
  alert('Thank you for choosing to save lives! ❤️');
});

// Adding a little animation effect
window.addEventListener('scroll', () => {
  const quotesSection = document.querySelector('.quotes');
  const position = quotesSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    quotesSection.style.opacity = '1';
    quotesSection.style.transform = 'translateY(0)';
  }
});
