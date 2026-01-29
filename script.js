// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Skill animation on scroll
const skills = document.querySelectorAll('.fill');
const skillSection = document.querySelector('#skills');

function animateSkills() {
  const scrollPos = window.scrollY + window.innerHeight;
  if(scrollPos > skillSection.offsetTop + 100){
    skills.forEach(skill => {
      skill.style.width = skill.dataset.percent + '%';
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);

