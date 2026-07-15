// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainnav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.navlinks a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .15 });
  revealEls.forEach(el => io.observe(el));
}
