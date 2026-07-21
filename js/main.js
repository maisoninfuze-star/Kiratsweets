/* ===== Kirat — interactions ===== */
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Lenis smooth scroll (optional) ---- */
  let lenis = null;
  const noLenis = location.search.indexOf('nolenis')>-1;
  if(window.Lenis && !prefersReduced && !noLenis){
    lenis = new Lenis({ duration:1.1, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    window.__lenis = lenis;
  }

  /* ---- Anchor smooth scroll (works with or without Lenis) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length<2) return;
      const t = document.querySelector(id);
      if(!t) return;
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.scrollY - 64;
      if(lenis) lenis.scrollTo(y); else window.scrollTo({top:y, behavior:'smooth'});
      closeMenu();
    });
  });

  /* ---- Reveal on scroll ---- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay = (Math.min(i%6,4)*0.06)+'s';
    io.observe(el);
  });

  /* ---- Nav scrolled state + hero parallax ---- */
  const nav = document.getElementById('nav');
  const heroImg = document.querySelector('.hero__media img');
  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y>10);
    if(heroImg && !prefersReduced && y<900) heroImg.style.transform = 'scale(1.06) translateY('+(y*0.12)+'px)';
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---- Mobile menu ---- */
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  function closeMenu(){ links.classList.remove('open'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  burger.addEventListener('click', ()=>{
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open?'true':'false');
    document.body.style.overflow = open?'hidden':'';
  });

  /* ---- Menu tabs ---- */
  const tabs = document.querySelectorAll('.tab');
  const panes = document.querySelectorAll('.tabpane');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('is-active'));
      panes.forEach(p=>p.classList.remove('is-active'));
      tab.classList.add('is-active');
      const pane = document.querySelector('[data-pane="'+tab.dataset.tab+'"]');
      if(pane){ pane.classList.add('is-active'); pane.querySelectorAll('.reveal').forEach(el=>el.classList.add('in')); }
    });
  });

  /* ---- Year ---- */
  const yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();
})();
