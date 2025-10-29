(function(){
  const qText = document.getElementById('qText')
  const optionsEl = document.getElementById('options')
  const qProgress = document.getElementById('qProgress')
  const feedback = document.getElementById('feedback')
  const submitBtn = document.getElementById('submitBtn')
  const nextBtn = document.getElementById('nextBtn')
  const restartBtn = document.getElementById('restartBtn')
  const media = document.getElementById('media')
  const scoreBadge = document.getElementById('scoreBadge')
  const resultPanel = document.getElementById('resultPanel')
  const quizPanel = document.getElementById('quizPanel')
  const finalScore = document.getElementById('finalScore')
  const title = document.getElementById('title')
  const summary = document.getElementById('summary')
  const playAgainBtn = document.getElementById('playAgainBtn')

  let i=0, score=0

  function updateScoreBadge(){
    scoreBadge.textContent = `Score ${score} / ${QUESTIONS.length}`
  }

  function renderQuestion(){
    const q = QUESTIONS[i]
    qText.textContent = q.text || q.question || ''
    qProgress.textContent = `Question ${i+1} of ${QUESTIONS.length}`
    feedback.innerHTML = ''
    nextBtn.hidden = true
    restartBtn.hidden = true

    media.innerHTML = ''
    if(q.image){
      const img = new Image(); img.src = q.image; img.alt = ''
      img.style.maxWidth = '100%'; img.style.borderRadius='12px'; img.style.border='1px solid rgba(255,255,255,.08)'
      media.appendChild(img)
    }
    if(q.video){
      const v = document.createElement('video'); v.src = q.video; v.controls = true; v.style.width='100%'; v.style.borderRadius='12px'; v.style.border='1px solid rgba(255,255,255,.08)'
      media.appendChild(v)
    }

    optionsEl.innerHTML = ''
    const opts = q.options && q.options.length ? q.options : ["Direct Control","Engineering Control","Administrative Control","Better Than Nothing"]
    opts.forEach((opt,idx)=>{
      const id = `opt_${i}_${idx}`
      const wrap = document.createElement('label')
      wrap.className = 'option'
      wrap.innerHTML = `<input type="checkbox" id="${id}" value="${opt}"><div><strong>${opt}</strong><div class='p' style='margin-top:4px'>${(q.hints && q.hints[opt])||''}</div></div>`
      optionsEl.appendChild(wrap)
    })

    submitBtn.disabled = false
  }

  function arraysEqual(a,b){
    if(a.length!==b.length) return false
    const s1 = [...a].sort().join('|')
    const s2 = [...b].sort().join('|')
    return s1===s2
  }

  function evaluate(){
    const q = QUESTIONS[i]
    const chosen = Array.from(optionsEl.querySelectorAll('input:checked')).map(el=>el.value)
    const correct = q.correct || []
    const isRight = arraysEqual(chosen, correct)

    if(isRight) score++
    updateScoreBadge()

    optionsEl.querySelectorAll('input').forEach(el=>el.disabled=true)
    submitBtn.disabled = true

    const goodTag = `<span class='tag good'>Correct</span>`
    const badTag = `<span class='tag bad'>Not quite</span>`
    const expl = q.explanation || ''
    feedback.innerHTML = `${isRight?goodTag:badTag} ${expl?`<div class='p' style='margin-top:8px'>${expl}</div>`:''}`

    const quip = isRight ? q.onCorrect : q.onIncorrect
    if(quip){
      const p = document.createElement('div'); p.className = 'p'; p.style.marginTop = '6px'; p.textContent = quip; feedback.appendChild(p)
    }

    nextBtn.hidden = false
    if(i===QUESTIONS.length-1){ restartBtn.hidden = false }
  }

  function getGradingComment(score, total){
    const percent = (score/total)*100
    let comments = []
    if(percent === 100){
      comments = ["Wow, you did it!", "I'm so proud of you!", "A perfect score?! You're amazing!"]
    } else if(percent >= 80){
      comments = ["Almost! Try again!!", "You're getting there!!", "I know you can get a perfect score... keep trying!"]
    } else {
      comments = ["Aw man! I know you can do better than that!", "Oh no! Let's try again...", "I think it might be time to review our definitions...let's try again!"]
    }
    return comments[Math.floor(Math.random()*comments.length)]
  }

  function showResults(){
    quizPanel.hidden = true
    resultPanel.hidden = false
    const pct = Math.round((score/QUESTIONS.length)*100)
    finalScore.textContent = pct+'%'

    let t, s
    if(pct>=90){ t='Control Captain'; s='Outstanding! Your control choices are spot‑on. Consider mentoring others.' }
    else if(pct>=75){ t='Safety Navigator'; s='Great work! You read scenarios well. A quick review will push you to 90%+.' }
    else if(pct>=60){ t='Cautious Co‑Pilot'; s='Good start. Revisit the learning pages and focus on the key differences.' }
    else { t='Trainee'; s='No worries—review the learning module, then try again. Practice makes confident.' }

    const fun = getGradingComment(score, QUESTIONS.length)
    title.textContent = t
    summary.textContent = fun + ' ' + s
  }

  submitBtn.addEventListener('click', evaluate)
  nextBtn.addEventListener('click', ()=>{ if(i<QUESTIONS.length-1){ i++; renderQuestion() } else { showResults() } })
  restartBtn.addEventListener('click', ()=>{ i=0; score=0; updateScoreBadge(); quizPanel.hidden=false; resultPanel.hidden=true; renderQuestion() })
  playAgainBtn.addEventListener('click', ()=>{ i=0; score=0; updateScoreBadge(); quizPanel.hidden=false; resultPanel.hidden=true; renderQuestion() })

  updateScoreBadge();
  renderQuestion();
})();
