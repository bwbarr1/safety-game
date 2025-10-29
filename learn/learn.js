
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  let i = 0;
  const bar = document.getElementById('bar');
  const badge = document.getElementById('progressBadge');
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const start = document.getElementById('startGameBtn');
  const ack = document.getElementById('ack');

  function render(){
    slides.forEach((s,idx)=> s.hidden = idx !== i);
    const pct = Math.round(((i+1)/total)*100);
    // Guard for minimal markup: if no bar/badge elements exist, skip
    const barEl = document.getElementById('bar');
    if(barEl) barEl.style.width = pct + '%';
    const badgeEl = document.getElementById('progressBadge');
    if(badgeEl) badgeEl.textContent = `${i+1} / ${total}`;
    if(prev) prev.disabled = (i === 0);
    if(next) next.hidden = (i === total - 1);
    const ready = (i === total - 1) && ack && ack.checked;
    if(start) start.hidden = !ready;
  }

  prev && prev.addEventListener('click',()=>{ if(i>0){ i--; render(); } });
  next && next.addEventListener('click',()=>{ if(i<total-1){ i++; render(); } });
  ack && ack.addEventListener('change',()=>{
    if(ack.checked){ localStorage.setItem('learningCompleted', String(Date.now())); }
    else { localStorage.removeItem('learningCompleted'); }
    render();
  });

  if(localStorage.getItem('learningCompleted')){ if(ack) ack.checked = true; }
  render();
})();
