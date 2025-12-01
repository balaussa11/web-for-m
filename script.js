document.addEventListener('DOMContentLoaded', function () {
  // YEAR
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

  // NAV TOGGLE
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle && navToggle.addEventListener('click', ()=>{ navLinks.classList.toggle('show'); });

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      if(this.getAttribute('href')==='#') return;
      e.preventDefault();
      const target=document.querySelector(this.getAttribute('href'));
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); navLinks.classList.remove('show'); }
    });
  });

  // FORM
  const form=document.getElementById('contact-form');
  const feedback=document.getElementById('form-feedback');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name=form.name.value.trim();
      const email=form.email.value.trim();
      const message=form.message.value.trim();
      if(!name || !email || !message){ feedback.textContent='Барлық өрістерді толтырыңыз, өтінеміз.'; return; }
      feedback.textContent='Хабарлама сәтті жіберілді. Біздің маман сізбен байланысады.';
      form.reset(); setTimeout(()=>feedback.textContent='',6000);
    });
  }

  // REVEAL
  function revealOnScroll(){
    document.querySelectorAll('.reveal').forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 80){ el.classList.add('active'); }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
