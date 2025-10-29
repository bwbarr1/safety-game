(function(){
  const slides = Array.from(document.querySelectorAll('.slide'))
  const total = slides.length
  let i = 0
  const bar = document.getElementById('bar')
  const badge = document.getElementById('progressBadge')
  const prev = document.getElementById('prevBtn')
  const next = document.getElementById('nextBtn')
  const start = document.getElementById('startGameBtn')
  const ack = document.getElementById('ack')

  function render(){
    slides.forEach((s,idx)=>s.hidden = idx!==i)
    const pct = ((i+1)/total)*100
    bar.style.width = pct+'%'
    badge.textContent = `Page ${i+1} of ${total}`
    prev.disabled = i===0
    next.hidden = i===total-1
    start.hidden = !(i===total-1)
    if(i===total-1){
      start.toggleAttribute('disabled', !ack || !ack.checked)
    }
  }

  prev.addEventListener('click',()=>{ if(i>0){ i--; render() } })
  next.addEventListener('click',()=>{ if(i<total-1){ i++; render() } })
  ack && ack.addEventListener('change',()=>{
    if(ack.checked){
      localStorage.setItem('learningCompleted', String(Date.now()))
    } else {
      localStorage.removeItem('learningCompleted')
    }
    render()
  })
  start.addEventListener('click', (e)=>{
    if(ack && !ack.checked){ e.preventDefault(); }
  })
  render()
})();
