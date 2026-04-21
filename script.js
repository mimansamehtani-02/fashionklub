// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger && hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Simple slider: cycles slides by translating .slides
(function(){
  const slidesEl = document.getElementById('slides');
  if(!slidesEl) return;
  const slides = slidesEl.children;
  let idx = 0;

  function show(i){
    const width = slidesEl.clientWidth;
    slidesEl.style.transform = `translateX(-${i * width}px)`;
  }

  // prev/next buttons
  document.querySelectorAll('.arrow').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const dir = btn.dataset.target;
      if(dir === 'prev'){ idx = Math.max(0, idx - 1); }
      else { idx = Math.min(slides.length - 1, idx + 1); }
      show(idx);
    });
  });

  // resize handler to ensure correct translation
  window.addEventListener('resize', ()=> show(idx));
})();
