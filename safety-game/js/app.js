
(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Simple persistent progress using localStorage
  const SG_KEY = 'sg_progress_v1';
  function load(){ try { return JSON.parse(localStorage.getItem(SG_KEY)) || {completed:{}, total:0, perfect:0}; } catch { return {completed:{}, total:0, perfect:0}; } }
  function save(d){ localStorage.setItem(SG_KEY, JSON.stringify(d)); }

  const api = {
    recordResult: function(id, perfect){
      const d = load();
      if(!d.completed[id]){ d.total += 1; }
      d.completed[id] = {perfect: !!perfect, at: Date.now()};
      d.perfect = Object.values(d.completed).filter(x=>x.perfect).length;
      save(d);
      renderProgress();
    },
    reset: function(){ localStorage.removeItem(SG_KEY); renderProgress(); }
  };
  window.SG = api;

  function renderProgress(){
    const box = document.getElementById('progress');
    if(!box) return;
    const d = load();
    const done = Object.keys(d.completed).length;
    const perfect = d.perfect || 0;
    box.innerHTML = done === 0
      ? '<span class="muted">No scenarios completed yet.</span>'
      : `<strong>${perfect}</strong> perfect out of <strong>${done}</strong> completed scenario(s).`;
  }
  renderProgress();

  const resetBtn = document.getElementById('resetProgressBtn');
  if(resetBtn){ resetBtn.addEventListener('click', ()=>{ if(confirm('Reset progress on this device?')) api.reset(); }); }
})();
