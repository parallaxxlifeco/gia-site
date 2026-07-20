/* ============================================================
   GIVE IT ALL — The Founders Wheel
   Wix Custom Element  ·  tag: gia-founders-wheel-page
   ------------------------------------------------------------
   Shadow-DOM build of gia-founders-wheel.html, per the
   WIX-CUSTOM-ELEMENT-GUIDE:
     1. tokens on :host (not :root)
     2. body styles on :host{display:block}
     3. all DOM queries scoped to the shadow root
     4. Google Fonts <link> appended to document.head
   TO CUSTOMISE: edit the CONFIG block inside initWheel().
   ============================================================ */
(function () {

  var CSS = `
  *{box-sizing:border-box;}
  :host{
    --navy:#061938;
    --navy-deep:#04122A;
    --navy-abyss:#030C1E;
    --navy-card:#0D2350;
    --gold:#E8C65F;
    --gold-deep:#C9A646;
    --ink:#F4F6FB;
    --body:#E2E7F1;
    --steel:#B1BFD7;
    --cream:#F2EBD9;
    --line:rgba(255,255,255,.10);
    --line-soft:rgba(255,255,255,.06);
    --card-line:rgba(255,255,255,.08);
    --shadow:0 30px 80px -30px rgba(0,0,0,.7);
    --radius:18px;
    --pill:999px;
    --ease:cubic-bezier(.22,.61,.36,1);

    display:block;
    font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
    background:
      radial-gradient(1200px 700px at 50% -10%, rgba(232,198,95,.10), transparent 60%),
      radial-gradient(900px 600px at 50% 110%, rgba(13,35,80,.7), transparent 60%),
      var(--navy-deep);
    color:var(--body);
    -webkit-font-smoothing:antialiased;
    line-height:1.55;
    padding:44px 16px;
  }

  .app{width:100%; max-width:600px; margin:0 auto;}

  .card{
    background:linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%);
    border:1px solid var(--card-line);
    border-radius:var(--radius);
    box-shadow:var(--shadow);
    padding:38px 34px 32px;
    position:relative;
    overflow:hidden;
  }
  .card::before{
    content:""; position:absolute; inset:0; pointer-events:none;
    background:radial-gradient(600px 240px at 50% -40px, rgba(232,198,95,.09), transparent 70%);
  }

  /* ---------- Screens ---------- */
  .screen{display:none; animation:fade .5s var(--ease) both; position:relative; z-index:1;}
  .screen.active{display:block;}
  @keyframes fade{from{opacity:0; transform:translateY(10px);} to{opacity:1; transform:translateY(0);}}

  /* ---------- Intro ---------- */
  .eyebrow{
    font-family:'Caveat',cursive;
    font-weight:600;
    font-size:clamp(1.5rem,3.4vw,1.9rem);
    color:var(--gold);
    margin:0 0 4px;
    line-height:1;
  }
  h1{
    font-size:clamp(2rem,5.2vw,2.7rem);
    line-height:1.05;
    margin:0 0 16px;
    font-weight:800;
    letter-spacing:-.018em;
    color:var(--ink);
    text-wrap:balance;
  }
  h1 .accent{color:var(--gold);}
  .lead{color:var(--steel); font-size:16px; margin:0 0 28px; max-width:44ch;}

  .btn{
    appearance:none; border:none; cursor:pointer;
    font-family:inherit; font-weight:700; font-size:15px;
    padding:15px 30px; border-radius:var(--pill);
    background:var(--gold); color:#1A1306;
    transition:transform .12s var(--ease), filter .12s var(--ease), opacity .2s;
    box-shadow:0 10px 30px -10px rgba(232,198,95,.55);
    letter-spacing:.005em;
  }
  .btn:hover{filter:brightness(1.06); transform:translateY(-1px);}
  .btn:active{transform:translateY(0);}
  .btn:disabled{opacity:.35; cursor:not-allowed; box-shadow:none;}
  .btn.secondary{
    background:transparent; color:var(--gold);
    box-shadow:none; border:1.5px solid rgba(232,198,95,.4);
  }
  .btn.ghost{background:transparent; color:var(--steel); box-shadow:none; padding-left:6px; padding-right:6px;}
  .btn.ghost:hover{color:var(--ink); filter:none;}
  .btn-row{display:flex; gap:12px; align-items:center; flex-wrap:wrap;}

  /* ---------- Progress ---------- */
  .progress-wrap{margin:0 0 24px;}
  .progress-meta{
    display:flex; justify-content:space-between;
    font-size:12px; color:var(--steel); margin-bottom:8px; font-weight:600;
    letter-spacing:.04em; text-transform:uppercase;
  }
  .progress-track{height:5px; background:var(--line-soft); border-radius:var(--pill); overflow:hidden;}
  .progress-bar{height:100%; width:0; background:linear-gradient(90deg,var(--gold-deep),var(--gold)); border-radius:var(--pill); transition:width .4s var(--ease);}

  /* ---------- Segment rating ---------- */
  .seg-dot{
    width:44px; height:44px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    color:#0A1020; font-weight:800; font-size:18px; margin-bottom:16px;
    box-shadow:0 8px 24px -8px rgba(0,0,0,.6);
  }
  .seg-pillar{
    text-transform:uppercase; letter-spacing:.18em; font-size:11px;
    font-weight:700; margin:0 0 5px;
  }
  .seg-title{font-size:23px; font-weight:800; margin:0 0 6px; letter-spacing:-.01em; color:var(--ink);}
  .seg-desc{color:var(--steel); font-size:15px; margin:0 0 24px; max-width:46ch;}

  /* Tap-to-fill blocks */
  .levels{
    display:flex; gap:6px; align-items:flex-end;
    height:132px; margin:0 0 10px; justify-content:center;
  }
  .level{
    flex:1; max-width:44px; height:100%;
    border-radius:10px;
    border:1.5px solid var(--line);
    background:rgba(255,255,255,.02);
    cursor:pointer; position:relative;
    transition:transform .1s var(--ease), border-color .15s;
    display:flex; align-items:flex-end; justify-content:center;
    padding-bottom:6px;
    color:var(--steel); font-weight:700; font-size:12px;
    overflow:hidden;
  }
  .level:hover{transform:translateY(-3px); border-color:rgba(232,198,95,.5);}
  .level .fill{
    position:absolute; left:0; right:0; bottom:0; top:0;
    background:var(--seg-color, var(--gold));
    transform:scaleY(0); transform-origin:bottom;
    transition:transform .25s cubic-bezier(.34,1.3,.5,1);
    border-radius:8px; opacity:.92;
  }
  .level.filled .fill{transform:scaleY(1);}
  .level .num{position:relative; z-index:2; transition:color .2s;}
  .level.filled .num{color:#0A1020;}
  .scale-labels{
    display:flex; justify-content:space-between;
    font-size:12px; color:var(--steel); margin:0 0 22px; font-weight:600;
  }

  .note-field{
    width:100%; border:1.5px solid var(--line); border-radius:12px;
    padding:12px 14px; font-family:inherit; font-size:15px; color:var(--ink);
    resize:none; background:rgba(255,255,255,.03); margin:0 0 24px;
  }
  .note-field::placeholder{color:rgba(177,191,215,.55);}
  .note-field:focus{outline:none; border-color:rgba(232,198,95,.5);}
  .note-label{font-size:12px; font-weight:700; color:var(--steel); margin:0 0 8px; display:block; text-transform:uppercase; letter-spacing:.04em;}

  .nav-row{display:flex; justify-content:space-between; align-items:center; gap:12px;}

  /* ---------- Reveal ---------- */
  .reveal-head{text-align:center; margin-bottom:10px;}
  .reveal-head .eyebrow{margin-bottom:2px;}
  .reveal-head h2{font-size:24px; margin:0 0 6px; font-weight:800; color:var(--ink); letter-spacing:-.01em;}
  .reveal-head p{color:var(--steel); margin:0; font-size:14px; max-width:42ch; margin-inline:auto;}
  .canvas-wrap{display:flex; justify-content:center; align-items:center; margin:6px 0 14px;}
  canvas{display:block; width:100%; max-width:540px; height:auto; margin:0 auto;}

  .avg-pill{
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(232,198,95,.12); color:var(--gold); font-weight:700;
    padding:8px 18px; border-radius:var(--pill); font-size:14px;
    border:1px solid rgba(232,198,95,.3);
  }

  /* give / support callouts */
  .insight{
    display:grid; grid-template-columns:1fr 1fr; gap:14px;
    margin:22px 0 6px;
  }
  .insight-col{
    border:1px solid var(--card-line); border-radius:14px;
    padding:16px 16px 14px; background:rgba(255,255,255,.02);
  }
  .insight-col h3{
    font-size:12px; text-transform:uppercase; letter-spacing:.1em;
    margin:0 0 12px; font-weight:700;
  }
  .insight-col.give h3{color:var(--gold);}
  .insight-col.support h3{color:#8CB6E0;}
  .chip{display:flex; align-items:center; gap:9px; font-size:14px; margin:0 0 9px; color:var(--body);}
  .chip:last-child{margin-bottom:0;}
  .chip .sw{width:11px; height:11px; border-radius:3px; flex:none;}
  .match-note{
    text-align:center; color:var(--steel); font-size:13.5px;
    margin:18px auto 0; max-width:44ch; line-height:1.5;
  }
  .match-note b{color:var(--ink); font-weight:700;}

  /* full breakdown grouped by pillar */
  .summary{border-top:1px solid var(--card-line); margin-top:20px; padding-top:18px;}
  .pillar-group{margin-bottom:16px;}
  .pillar-group:last-child{margin-bottom:0;}
  .pillar-head{
    font-size:11px; text-transform:uppercase; letter-spacing:.16em;
    font-weight:700; margin:0 0 10px;
  }
  .summary-item{display:flex; align-items:center; gap:10px; font-size:14px; margin-bottom:8px;}
  .summary-swatch{width:11px; height:11px; border-radius:3px; flex:none;}
  .summary-name{flex:1; color:var(--body);}
  .summary-bar{width:64px; height:6px; border-radius:999px; background:rgba(255,255,255,.08); overflow:hidden; flex:none;}
  .summary-bar span{display:block; height:100%; border-radius:999px;}
  .summary-score{font-weight:800; color:var(--ink); width:34px; text-align:right; font-size:13px;}

  .reflection{border-top:1px solid var(--card-line); margin-top:18px; padding-top:18px;}
  .reflect-item{display:flex; gap:10px; align-items:flex-start; margin-bottom:13px;}
  .reflect-item:last-child{margin-bottom:0;}
  .reflect-item .summary-swatch{margin-top:5px;}
  .reflect-name{display:block; font-size:13px; font-weight:700; color:var(--ink);}
  .reflect-note{display:block; font-size:14px; color:var(--steel); font-style:italic; margin-top:2px; line-height:1.45;}

  .footer-note{text-align:center; color:var(--steel); font-size:12px; margin-top:22px; opacity:.85;}

  @media (max-width:440px){
    .card{padding:28px 20px 24px;}
    .levels{height:118px; gap:4px;}
    .level{border-radius:8px;}
    .insight{grid-template-columns:1fr;}
  }
  `;

  var HTML = `
  <div class="app">
    <div class="card">

      <!-- INTRO -->
      <section class="screen active" id="screen-intro">
        <p class="eyebrow" id="introEyebrow">Founders Breakfast</p>
        <h1 id="introTitle"></h1>
        <p class="lead" id="introLead"></p>
        <div class="btn-row">
          <button class="btn" id="startBtn">Begin →</button>
        </div>
        <p class="footer-note" id="introFoot"></p>
      </section>

      <!-- RATING -->
      <section class="screen" id="screen-rate">
        <div class="progress-wrap">
          <div class="progress-meta">
            <span id="progLabel">Dimension 1 of 12</span>
            <span id="progPct">0%</span>
          </div>
          <div class="progress-track"><div class="progress-bar" id="progBar"></div></div>
        </div>

        <div class="seg-dot" id="segDot">1</div>
        <p class="seg-pillar" id="segPillar"></p>
        <h2 class="seg-title" id="segTitle">Dimension</h2>
        <p class="seg-desc" id="segDesc"></p>

        <div class="levels" id="levels"></div>
        <div class="scale-labels"><span id="scaleLo">1 · Not yet</span><span id="scaleHi">10 · Dialed in</span></div>

        <div class="nav-row">
          <button class="btn ghost" id="backBtn">← Back</button>
          <button class="btn" id="nextBtn" disabled>Next →</button>
        </div>
      </section>

      <!-- REVEAL -->
      <section class="screen" id="screen-reveal">
        <div class="reveal-head">
          <p class="eyebrow">Your wheel</p>
          <h2 id="revealTitle">Here's where you're really at.</h2>
          <p id="revealSub">The rounder the wheel, the smoother the ride. And those flat spots? They're just your next conversations in this room.</p>
        </div>
        <div class="canvas-wrap"><canvas id="wheel" width="820" height="820"></canvas></div>
        <div style="text-align:center;"><span class="avg-pill" id="avgPill"></span></div>

        <div class="insight">
          <div class="insight-col give">
            <h3>Where you can give to the room</h3>
            <div id="giveList"></div>
          </div>
          <div class="insight-col support">
            <h3>Where you'd love a hand</h3>
            <div id="supportList"></div>
          </div>
        </div>
        <p class="match-note">Find the founder whose strengths meet your flat spots. <b>That's your first conversation this morning.</b> Give before you get.</p>

        <div class="summary" id="summary"></div>

        <div class="btn-row" style="justify-content:center; margin-top:24px;">
          <button class="btn" id="downloadBtn">Download my wheel</button>
          <button class="btn secondary" id="restartBtn">Start over</button>
        </div>
        <p class="footer-note" id="revealFoot"></p>
      </section>

    </div>
  </div>
  `;

  /* ---- Fonts load at document level (shared with other GIA pages) ---- */
  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIAFoundersWheelPage extends HTMLElement {
    connectedCallback() {
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<style>' + CSS + '</style>' + HTML;
      initWheel(shadow, this);
    }
  }
  customElements.define('gia-founders-wheel-page', GIAFoundersWheelPage);

  /* ============================================================
     initWheel — all logic, scoped to the shadow root (`root`)
     ============================================================ */
  function initWheel(root, host) {

    /* ---------------- CONFIG (edit here) ---------------- */
    const CONFIG = {
      title:      "The Founders Wheel",
      titleAccentWord: "Founders",           // this word is rendered in gold
      eyebrow:    "Founders Breakfast",
      intro:      "Twelve dimensions. Honesty with yourself. Your first thought is the right one.",
      introFoot:  "Nothing you put in leaves this screen",
      revealFoot: "Screenshot it, download it, then go find your opposite in the room and give first.",
      maxScore:   10,
      scaleLow:   "1 · Not yet",
      scaleHigh:  "10 · Right where I want it",

      pillars: {
        "Inner Game": { color:"#EE9E6A", sub:"The personal that shows up in business" },
        "The Craft":  { color:"#4FC3B0", sub:"The value you create and sell" },
        "The Engine": { color:"#7E8FE0", sub:"Money, systems and growth" }
      },

      segments: [
        // ---- Inner Game (warm) ----
        { name:"Mindset & Resilience", pillar:"Inner Game", color:"#F0B45E",
          desc:"How you meet pressure, fear, failure and self-doubt. Your inner steadiness when it gets hard." },
        { name:"Energy & Health", pillar:"Inner Game", color:"#EE9E6A",
          desc:"The physical fuel you run on: sleep, movement, vitality. Building from full, not from empty." },
        { name:"Purpose & Alignment", pillar:"Inner Game", color:"#E8896E",
          desc:"Clarity on your why, and whether the work you do actually means something to you." },
        { name:"Support & Connection", pillar:"Inner Game", color:"#E0787E",
          desc:"The people in your corner. Building alone, or backed by community, mentors and peers?" },

        // ---- The Craft (teal/green) ----
        { name:"Offer & Positioning", pillar:"The Craft", color:"#4FC3B0",
          desc:"How clear, distinct and compelling what you sell is, and how obvious it is who it’s for." },
        { name:"Sales & Conversion", pillar:"The Craft", color:"#46B39A",
          desc:"Turning conversations into clients. Confidence with your pricing, your ask, and the close." },
        { name:"Delivery & Client Results", pillar:"The Craft", color:"#5FC57E",
          desc:"The quality of what clients actually get, and the results and reputation you create." },
        { name:"Marketing & Visibility", pillar:"The Craft", color:"#84CA66",
          desc:"How consistently the right people discover you: audience, content, brand and reach." },

        // ---- The Engine (blue/violet) ----
        { name:"Systems & AI", pillar:"The Engine", color:"#59A6E0",
          desc:"The processes, tools and automation that do the heavy lifting, instead of you doing it all by hand." },
        { name:"Finance & Cashflow", pillar:"The Engine", color:"#6E8FE0",
          desc:"Clarity and control over the money: margins, runway, and actually paying yourself." },
        { name:"Team & Delegation", pillar:"The Engine", color:"#8C7FE0",
          desc:"Building beyond yourself. Are you the bottleneck, or do you have real support around you?" },
        { name:"Vision & Strategy", pillar:"The Engine", color:"#A87BD6",
          desc:"Knowing where you’re going and the plan to get there. Leading, not just reacting." }
      ]
    };
    /* -------------- END CONFIG -------------- */

    const BRAND = {
      navy:"#04122A", navyCard:"#0D2350", gold:"#E8C65F", goldDeep:"#C9A646",
      ink:"#F4F6FB", body:"#E2E7F1", steel:"#B1BFD7"
    };

    const segs = CONFIG.segments;
    const MAX = CONFIG.maxScore;
    const scores = new Array(segs.length).fill(0);
    let current = 0;
    const $ = id => root.getElementById(id);

    // ---- Apply intro text ----
    (function applyText(){
      const t = CONFIG.title, aw = CONFIG.titleAccentWord;
      $('introTitle').innerHTML = (aw && t.includes(aw)) ? t.replace(aw, `<span class="accent">${aw}</span>`) : t;
      $('introEyebrow').textContent = CONFIG.eyebrow;
      $('introLead').textContent = CONFIG.intro;
      $('introFoot').textContent = CONFIG.introFoot;
      $('revealFoot').textContent = CONFIG.revealFoot;
      $('scaleLo').textContent = CONFIG.scaleLow;
      $('scaleHi').textContent = CONFIG.scaleHigh;
    })();

    function show(screen){
      root.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
      $(screen).classList.add('active');
      if (host && host.scrollIntoView) host.scrollIntoView({behavior:'smooth', block:'nearest'});
    }

    // ---- Build level blocks ----
    function renderLevels(){
      const wrap = $('levels'); wrap.innerHTML = '';
      const seg = segs[current];
      for(let i=1;i<=MAX;i++){
        const b = document.createElement('div');
        b.className = 'level';
        b.style.setProperty('--seg-color', seg.color);
        b.innerHTML = `<span class="fill"></span><span class="num">${i}</span>`;
        b.addEventListener('click', ()=>setScore(i));
        wrap.appendChild(b);
      }
      paintLevels();
    }
    function paintLevels(){
      const blocks = root.querySelectorAll('#levels .level');
      const val = scores[current];
      blocks.forEach((b,idx)=>{ b.classList.toggle('filled', idx < val); });
      $('nextBtn').disabled = val === 0;
    }
    function setScore(v){ scores[current] = v; paintLevels(); }

    function renderSegment(){
      const seg = segs[current];
      $('segDot').textContent = current+1;
      $('segDot').style.background = seg.color;
      $('segPillar').textContent = seg.pillar || '';
      $('segPillar').style.color = seg.color;
      $('segTitle').textContent = seg.name;
      $('segDesc').textContent = seg.desc;
      $('progLabel').textContent = `Dimension ${current+1} of ${segs.length}`;
      const pct = Math.round((current)/segs.length*100);
      $('progPct').textContent = pct + '%';
      $('progBar').style.width = pct + '%';
      $('backBtn').style.visibility = current === 0 ? 'hidden' : 'visible';
      $('nextBtn').textContent = current === segs.length-1 ? 'Reveal my wheel ✦' : 'Next →';
      renderLevels();
    }

    // ---- Navigation ----
    $('startBtn').addEventListener('click', ()=>{ current=0; renderSegment(); show('screen-rate'); });
    $('backBtn').addEventListener('click', ()=>{
      if(current>0){ current--; renderSegment(); }
    });
    $('nextBtn').addEventListener('click', ()=>{
      if(scores[current]===0) return;
      if(current < segs.length-1){ current++; renderSegment(); }
      else { $('progBar').style.width='100%'; $('progPct').textContent='100%'; goReveal(); }
    });
    $('restartBtn').addEventListener('click', ()=>{
      scores.fill(0); current=0; show('screen-intro');
    });

    // ---- Reveal ----
    function goReveal(){
      buildInsights();
      buildSummary();
      show('screen-reveal');
      const avg = (scores.reduce((a,b)=>a+b,0)/segs.length).toFixed(1);
      $('avgPill').textContent = `Overall balance: ${avg} / ${MAX}`;
      if(document.fonts && document.fonts.ready){
        document.fonts.ready.then(()=> setTimeout(animateWheel, 200));
      } else { setTimeout(animateWheel, 300); }
    }

    function orderedIndices(){
      return segs.map((s,i)=>i).sort((a,b)=> scores[b]-scores[a]);
    }
    function buildInsights(){
      const ord = orderedIndices();
      const top = ord.slice(0,3);
      const bottom = ord.slice(-3).reverse(); // lowest first
      const chip = i => `<div class="chip"><span class="sw" style="background:${segs[i].color}"></span>${segs[i].name} <span style="margin-left:auto;color:${BRAND.steel};font-weight:700">${scores[i]}</span></div>`;
      $('giveList').innerHTML = top.map(chip).join('');
      $('supportList').innerHTML = bottom.map(chip).join('');
    }

    function buildSummary(){
      const sum = $('summary'); sum.innerHTML = '';
      const order = Object.keys(CONFIG.pillars);
      order.forEach(pillarName=>{
        const meta = CONFIG.pillars[pillarName];
        const group = document.createElement('div');
        group.className = 'pillar-group';
        let rows = `<p class="pillar-head" style="color:${meta.color}">${pillarName} <span style="color:${BRAND.steel};font-weight:600;text-transform:none;letter-spacing:0"> · ${meta.sub}</span></p>`;
        segs.forEach((s,i)=>{
          if(s.pillar !== pillarName) return;
          const w = Math.round(scores[i]/MAX*100);
          rows += `<div class="summary-item">
            <span class="summary-swatch" style="background:${s.color}"></span>
            <span class="summary-name">${s.name}</span>
            <span class="summary-bar"><span style="width:${w}%;background:${s.color}"></span></span>
            <span class="summary-score">${scores[i]}</span>
          </div>`;
        });
        group.innerHTML = rows;
        sum.appendChild(group);
      });
    }

    // ---- Canvas wheel ----
    const canvas = $('wheel');
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio||1, 2);
    const W = 820, H = 820;                 // square canvas: the wheel stays perfectly round
    canvas.width = W*DPR; canvas.height = H*DPR;
    canvas.style.width = '100%'; canvas.style.height = 'auto';   // square backing store keeps the wheel round at any width
    ctx.scale(DPR,DPR);

    const CX = W/2, CY = H/2;
    const R  = 250;
    const N  = segs.length;
    const START = -Math.PI/2;

    function hexToRgba(hex, a){
      const h = hex.replace('#','');
      const n = parseInt(h.length===3 ? h.split('').map(x=>x+x).join('') : h, 16);
      return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;
    }

    function drawGrid(){
      ctx.lineWidth = 1;
      for(let ring=1; ring<=MAX; ring++){
        ctx.beginPath();
        ctx.strokeStyle = ring===MAX ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.06)';
        ctx.arc(CX,CY, R*ring/MAX, 0, Math.PI*2);
        ctx.stroke();
      }
      ctx.font = '600 14px Montserrat, -apple-system, Segoe UI, Roboto, sans-serif';
      for(let i=0;i<N;i++){
        const a = START + i*2*Math.PI/N;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,.06)';
        ctx.moveTo(CX,CY);
        ctx.lineTo(CX+Math.cos(a)*R, CY+Math.sin(a)*R);
        ctx.stroke();
        const la = START + (i+0.5)*2*Math.PI/N;
        let lx = CX+Math.cos(la)*(R+26);
        const ly = CY+Math.sin(la)*(R+26);
        lx = Math.max(96, Math.min(W-96, lx));
        ctx.fillStyle = segs[i].color;
        ctx.textAlign = Math.abs(Math.cos(la))<0.30 ? 'center' : (Math.cos(la)>0?'left':'right');
        ctx.textBaseline = 'middle';
        wrapLabel(segs[i].name, lx, ly);
      }
    }
    function wrapLabel(text, x, y){
      const words = text.split(' ');
      if(text.includes('&')){
        const parts = text.split('&');
        ctx.fillText(parts[0].trim(), x, y-9);
        ctx.fillText('& '+parts[1].trim(), x, y+9);
        return;
      }
      if(words.length<=1 || text.length<=12){ ctx.fillText(text,x,y); return; }
      const mid = Math.ceil(words.length/2);
      ctx.fillText(words.slice(0,mid).join(' '), x, y-9);
      ctx.fillText(words.slice(mid).join(' '), x, y+9);
    }

    function drawWheel(t){
      ctx.clearRect(0,0,W,H);
      drawGrid();
      const sliceA = 2*Math.PI/N;

      for(let i=0;i<N;i++){
        const a0 = START + i*sliceA, a1 = a0 + sliceA;
        const rad = R * (scores[i]/MAX) * t;
        ctx.beginPath();
        ctx.moveTo(CX,CY);
        ctx.arc(CX,CY, rad, a0, a1);
        ctx.closePath();
        const grad = ctx.createRadialGradient(CX,CY,0,CX,CY,Math.max(rad,1));
        grad.addColorStop(0, hexToRgba(segs[i].color, 0.28));
        grad.addColorStop(1, hexToRgba(segs[i].color, 0.62));
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(4,18,42,.85)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      for(let i=0;i<N;i++){
        const ac = START + (i+0.5)*sliceA;
        const rad = R*(scores[i]/MAX)*t;
        const px = CX+Math.cos(ac)*rad, py = CY+Math.sin(ac)*rad;
        if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
      }
      ctx.closePath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = BRAND.gold;
      ctx.stroke();
      ctx.fillStyle = hexToRgba(BRAND.gold, 0.06);
      ctx.fill();

      for(let i=0;i<N;i++){
        const ac = START + (i+0.5)*sliceA;
        const rad = R*(scores[i]/MAX)*t;
        const px = CX+Math.cos(ac)*rad, py = CY+Math.sin(ac)*rad;
        ctx.beginPath();
        ctx.arc(px,py,5.5,0,Math.PI*2);
        ctx.fillStyle = segs[i].color;
        ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = BRAND.navy; ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(CX,CY,4,0,Math.PI*2);
      ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.fill();
    }

    function animateWheel(){
      const dur = 1200; let startTs = null;
      function frame(ts){
        if(!startTs) startTs = ts;
        let p = Math.min((ts-startTs)/dur, 1);
        const eased = 1 - Math.pow(1-p, 3);
        drawWheel(eased);
        if(p<1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    // ---- Download PNG (navy branded portrait, sized for phones) ----
    $('downloadBtn').addEventListener('click', ()=>{
      const OW = 1080, OH = 1350;
      const out = document.createElement('canvas');
      out.width = OW; out.height = OH;
      const o = out.getContext('2d');
      o.fillStyle = BRAND.navy; o.fillRect(0,0,OW,OH);
      const g = o.createRadialGradient(OW/2, 40, 0, OW/2, 40, OW);
      g.addColorStop(0, 'rgba(232,198,95,.12)'); g.addColorStop(1, 'rgba(232,198,95,0)');
      o.fillStyle = g; o.fillRect(0,0,OW,OH);
      o.textAlign = 'center';
      o.fillStyle = BRAND.gold;
      o.font = '600 44px Caveat, cursive';
      o.fillText(CONFIG.eyebrow, OW/2, 118);
      o.fillStyle = BRAND.ink;
      o.font = '800 58px Montserrat, sans-serif';
      o.fillText(CONFIG.title, OW/2, 188);
      const size = 900, wx = (OW - size)/2, wy = 236;
      o.drawImage(canvas, wx, wy, size, size);
      const avg = (scores.reduce((a,b)=>a+b,0)/segs.length).toFixed(1);
      o.fillStyle = BRAND.gold;
      o.font = '700 34px Montserrat, sans-serif';
      o.fillText(`Overall balance  ${avg} / ${MAX}`, OW/2, wy + size + 60);
      o.fillStyle = BRAND.steel;
      o.font = '600 26px Montserrat, sans-serif';
      o.fillText('GIVE IT ALL  ·  Founders Breakfast', OW/2, OH - 46);
      const link = document.createElement('a');
      link.download = 'my-founders-wheel.png';
      link.href = out.toDataURL('image/png');
      link.click();
    });
  }
})();
