
(function(){
  const qText = document.getElementById('qText');
  const optionsEl = document.getElementById('options');
  const qProgress = document.getElementById('qProgress');
  const feedback = document.getElementById('feedback');
  const submitBtn = document.getElementById('submitBtn');
  const nextBtn = document.getElementById('nextBtn');
  const media = document.getElementById('media');
  const scoreBadge = document.getElementById('scoreBadge');
  const resultPanel= document.getElementById('resultPanel');
  const quizPanel = document.getElementById('quizPanel');
  const scoreLine = document.getElementById('scoreLine');
  const funTitle = document.getElementById('funTitle');
  const funComment = document.getElementById('funComment');
  const playAgainBtn = document.getElementById('playAgainBtn');

  let i = 0, score = 0;

  function updateScoreBadge(){
    scoreBadge.textContent = `${score} / ${QUESTIONS.length}`;
  }

  function renderQuestion(){
    const q = QUESTIONS[i];

    qText.textContent = q.text || '';
    qProgress.textContent = `Question ${i+1} of ${QUESTIONS.length}`;

    feedback.textContent = '';
    resultPanel.hidden = true;
    quizPanel.hidden = false;
    nextBtn.hidden = true;     // appears only after submit
    submitBtn.disabled = false;

    media.innerHTML = '';
    if(q.image){
      const img = new Image();
      img.src = q.image;
      img.alt = '';
      img.className = 'media-img';
      media.appendChild(img);
    }
    if(q.video){
      const v = document.createElement('video');
      v.src = q.video; v.controls = true; v.playsInline = true; v.preload = 'metadata';
      v.style.maxWidth = '100%';
      media.appendChild(v);
    }

    const opts = (q.options && q.options.length) ? q.options : [
      'Direct Control','Engineering Control','Administrative Control','Better Than Nothing'
    ];
    optionsEl.innerHTML = '';
    opts.forEach((opt, idx)=>{
      const id = `opt_${i}_${idx}`;
      const wrap = document.createElement('label');
      wrap.className = 'option';
      wrap.innerHTML = `
        <input type="checkbox" name="q${i}" value="${opt}" id="${id}">
        <span>${opt}</span>
      `;
      optionsEl.appendChild(wrap);
    });
  }

  function arraysEqual(a,b){
    if(!Array.isArray(a) || !Array.isArray(b)) return false;
    if(a.length !== b.length) return false;
    const A = [...a].sort();
    const B = [...b].sort();
    return A.every((v, idx)=> v === B[idx]);
  }

  function evaluate(){
    const q = QUESTIONS[i];
    const chosen = Array.from(optionsEl.querySelectorAll('input:checked')).map(el=>el.value);
    const correct = Array.isArray(q.correct) ? q.correct : [];

    const isRight = arraysEqual(chosen, correct); // all-or-nothing scoring
    if(isRight) score++;
    updateScoreBadge();

    optionsEl.querySelectorAll('input').forEach(el=> el.disabled = true);
    submitBtn.disabled = true;
    nextBtn.hidden = false;  // allow moving forward

    const missed = correct.filter(c => !chosen.includes(c));
    const extra  = chosen.filter(c => !correct.includes(c));

    let detail = q.explanation || '';
    if(missed.length) detail += `${detail? ' ' : ''}Missing: ${missed.join(', ')}.`;
    if(extra.length)  detail += `${detail? ' ' : ''}Not required: ${extra.join(', ')}.`;

    feedback.className = 'feedback ' + (isRight ? 'ok' : 'no');
    feedback.innerHTML = `<strong>${isRight ? 'Correct' : 'Not quite'}</strong><br>${detail}`;
  }

  function getGradingComment(score, total){
    const percent = (score/total)*100;
    let comments = [];
    if(percent === 100){
      comments = ["Wow, you did it!","I'm so proud of you!","A perfect score?! You're amazing!"]
    } else if(percent >= 80){
      comments = ["Almost! Try again!!","You're getting there!!","I know you can get a perfect score... keep trying!"]
    } else {
      comments = ["Aw man! I know you can do better than that!","Oh no! Let's try again...","I think it might be time to review our definitions...let's try again!"]
    }
    return comments[Math.floor(Math.random()*comments.length)];
  }

  function pickTitle(pct){
    if(pct>=90) return 'Control Captain';
    if(pct>=75) return 'Safety Navigator';
    if(pct>=60) return 'Cautious Co‑Pilot';
    return 'Trainee';
  }

  function showResults(){
    quizPanel.hidden = true;
    resultPanel.hidden = false;
    const pct = Math.round((score/QUESTIONS.length)*100);
    scoreLine.textContent = `Score ${score}/${QUESTIONS.length} (${pct}%)`;
    funTitle.textContent = pickTitle(pct);
    funComment.textContent = getGradingComment(score, QUESTIONS.length);
  }

  submitBtn.addEventListener('click', evaluate);

  nextBtn.addEventListener('click', ()=>{
    if(i < QUESTIONS.length - 1){
      i++;
      renderQuestion();
    } else {
      showResults();
    }
  });

  playAgainBtn.addEventListener('click', ()=>{
    i = 0; score = 0;
    updateScoreBadge();
    resultPanel.hidden = true;
    quizPanel.hidden = false;
    renderQuestion();
  });

  updateScoreBadge();
  renderQuestion();
})();
