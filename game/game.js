
(function(){
  const qText = document.getElementById('qText');
  const optionsEl = document.getElementById('options');
  const qProgress = document.getElementById('qProgress');
  const feedback = document.getElementById('feedback');
  const submitBtn = document.getElementById('submitBtn');
  const nextBtn = document.getElementById('nextBtn');
  const media = document.getElementById('media');
  const scoreBadge = document.getElementById('scoreBadge');
 // Remove live score from the header to declutter on mobile
 if (scoreBadge) { try { scoreBadge.remove(); } catch(e) { scoreBadge.style.display = 'none'; } }
  const resultPanel = document.getElementById('resultPanel');
  const quizPanel = document.getElementById('quizPanel');
  const scoreLine = document.getElementById('scoreLine');
  const funTitle = document.getElementById('funTitle');
  const funComment = document.getElementById('funComment');
  const playAgainBtn = document.getElementById('playAgainBtn');

  let i = 0, score = 0;
  const NEED_MSG_ID = 'needSelectionMsg';

  // Announce validation and results to assistive tech
  try { feedback.setAttribute('aria-live','polite'); feedback.setAttribute('role','status'); } catch(e){}

  function updateScoreBadge(){ /* live score removed */ } / ${QUESTIONS.length}`;
  }

  function renderQuestion(){
    const q = QUESTIONS[i];

    // Core text & chrome
    qText.textContent = (q && (q.text || q.question)) || '';
    qProgress.textContent = `Question ${i+1} of ${QUESTIONS.length}`;
    feedback.innerHTML = '';

    // Enforce screen state
    resultPanel.hidden = true;
    quizPanel.hidden = false;
    nextBtn.hidden = true;        // only appears after submit
    submitBtn.disabled = false;   // ready for this question

    // Media
    media.innerHTML = '';
    if (q.image) {
      const img = new Image();
      img.src = q.image;
      img.alt = '';
      img.className = 'media-img';
      media.appendChild(img);
    }
    if (q.video) {
      const v = document.createElement('video');
      // clean, background-style playback
      v.muted = true;                 // required for reliable autoplay
      v.autoplay = true;              // start automatically
      v.loop = true;                  // repeat forever
      v.playsInline = true;           // JS property
      v.setAttribute('playsinline','');
      v.setAttribute('muted','');
      v.preload = 'auto';
      v.controls = false;             // hide native UI
      v.disablePictureInPicture = true;
      v.setAttribute('disablepictureinpicture','');
      v.setAttribute('aria-hidden','true');
      v.tabIndex = -1;

      const src = document.createElement('source');
      src.src = q.video;              // e.g., "../assets/videos/airbag.mp4"
      src.type = 'video/mp4';
      v.appendChild(src);

      v.className = 'media-video';
      media.appendChild(v);

      v.load();
      const start = () => v.play().catch(()=>{});
      if (document.visibilityState === 'visible') start();
      else {
        const onVis = () => {
          if (document.visibilityState === 'visible') { start(); document.removeEventListener('visibilitychange', onVis); }
        };
        document.addEventListener('visibilitychange', onVis);
      }
    }

    // Options
    optionsEl.innerHTML = '';
    const opts = q.options && q.options.length ? q.options : [
      'Direct Control','Engineering Control','Administrative Control','Better Than Nothing'
    ];
    opts.forEach((opt, idx) => {
      const id = `opt_${i}_${idx}`;
      const wrap = document.createElement('label');
      wrap.className = 'option';
      wrap.innerHTML = `<input type="checkbox" id="${id}" value="${opt}"><div><strong>${opt}</strong></div>`;
      optionsEl.appendChild(wrap);
    });

    // Clear any previous validation animation/message
    const msg = document.getElementById(NEED_MSG_ID);
    if (msg) msg.remove();
    submitBtn.classList.remove('btn-shake');
  }

  function arraysEqual(a,b){ if(a.length!==b.length) return false; return [...a].sort().join('\n') === [...b].sort().join('\n'); }

  function evaluate(){
    const q = QUESTIONS[i];
    const chosen = Array.from(optionsEl.querySelectorAll('input:checked')).map(el=>el.value);

    // Guard: must select at least one
    if (chosen.length === 0) {
      feedback.innerHTML = `<span id='${NEED_MSG_ID}' class='tag bad' role='alert'>Please select at least one option before submitting.</span>`;
      // subtle shake on the button
      submitBtn.classList.remove('btn-shake');
      void submitBtn.offsetWidth; // restart animation
      submitBtn.classList.add('btn-shake');
      setTimeout(()=>submitBtn.classList.remove('btn-shake'), 300);
      return;
    }

    const correct = q.correct || [];
    const isRight = arraysEqual(chosen, correct); // all-or-nothing
    if (isRight) score++;
    updateScoreBadge();

    // Lock current question and reveal Next
    optionsEl.querySelectorAll('input').forEach(el=>el.disabled = true);
    submitBtn.disabled = true;
    nextBtn.hidden = false;

    const goodTag = `<span class='tag good'>Correct</span>`;
    const badTag  = `<span class='tag bad'>Not quite</span>`;
    const missed = correct.filter(c => !chosen.includes(c));
    const extra  = chosen.filter(c => !correct.includes(c));
    let detail = q.explanation || '';
    if (missed.length) detail += `${detail?' ':''}Missing: ${missed.join(', ')}.`;
    if (extra.length)  detail += `${detail?' ':''}Not required: ${extra.join(', ')}.`;
    feedback.innerHTML = `${isRight?goodTag:badTag} <div class='p' style='margin-top:6px'>${detail}</div>`;
  }

  function getGradingComment(score, total){
    const percent = (score/total)*100;
    let comments = [];
    if (percent === 100) {
      comments = ["Wow, you did it!","I'm so proud of you!","A perfect score?! You're amazing!"]
    } else if (percent >= 80) {
      comments = ["Almost! Try again!!","You're getting there!!","I know you can get a perfect score... keep trying!"]
    } else {
      comments = ["Aw man! I know you can do better than that!","Oh no! Let's try again...","I think it might be time to review our definitions...let's try again!"]
    }
    return comments[Math.floor(Math.random()*comments.length)];
  }

  function pickTitle(pct){
    if (pct>=90) return 'Control Captain';
    if (pct>=75) return 'Safety Navigator';
    if (pct>=60) return 'Cautious Co‑Pilot';
    return 'Trainee';
  }

  function showResults(){
    quizPanel.hidden = true; resultPanel.hidden = false;
    const pct = Math.round((score/QUESTIONS.length)*100);
    scoreLine.textContent = `Score ${score}/${QUESTIONS.length} (${pct}%)`;
    funTitle.textContent = pickTitle(pct);
    funComment.textContent = getGradingComment(score, QUESTIONS.length);
  }

  // Events
  optionsEl.addEventListener('change', () => {
    const msg = document.getElementById(NEED_MSG_ID);
    if (msg) msg.remove();
  });

  submitBtn.addEventListener('click', evaluate);

  nextBtn.addEventListener('click', () => {
    if (i < QUESTIONS.length - 1) { i++; renderQuestion(); }
    else { showResults(); }
  });

  playAgainBtn.addEventListener('click', () => {
    i = 0; score = 0; updateScoreBadge();
    resultPanel.hidden = true; quizPanel.hidden = false;
    renderQuestion();
  });

  updateScoreBadge();
  renderQuestion();
})();
