/* GIVE IT ALL - Speaker Series page Wix Custom Element. Tag: gia-speaker-series-page. Turn Wix header+footer OFF. */
(function(){
  if (customElements.get('gia-speaker-series-page')) return;
  var CSS = `
  :host{
    --navy:#061938; --navy-deep:#04122A; --navy-card:#0D2350;
    --gold:#E8C65F; --ink:#F4F6FB; --body:#E2E7F1; --steel:#B1BFD7;
    --cream:#F2EBD9;
    --maxw:1240px; --gutter:clamp(20px,5vw,64px);
    --r-pill:999px; --r-card:18px; --ease:cubic-bezier(.22,.61,.36,1);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  :host{display:block;font-family:'Montserrat',system-ui,sans-serif;background:var(--navy);color:var(--body);-webkit-font-smoothing:antialiased;line-height:1.5;overflow-x:clip}
  img{display:block;max-width:100%}
  a{color:inherit;text-decoration:none}
  .wrap{max-width:var(--maxw);margin:0 auto;padding-inline:var(--gutter)}
  section{position:relative}

  .speckle{position:relative}
  .speckle::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");opacity:.035;pointer-events:none;mix-blend-mode:screen;z-index:0}
  .speckle > *{position:relative;z-index:1}

  .eyebrow{font-family:'Caveat',cursive;font-weight:600;font-size:clamp(1.5rem,3.4vw,2.1rem);color:var(--gold);line-height:1}
  .label{font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--steel);font-weight:700}

  .btn{display:inline-flex;align-items:center;gap:.6em;font-family:inherit;font-weight:700;font-size:1rem;border-radius:var(--r-pill);padding:1.05em 1.9em;cursor:pointer;border:none;transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease);white-space:nowrap}
  .btn .arrow{transition:transform .25s var(--ease)}
  .btn:hover .arrow{transform:translateX(4px)}
  .btn-gold{background:var(--gold);color:var(--navy);box-shadow:0 10px 30px -8px rgba(232,198,95,.5);animation:btnPulse 2.8s ease-out infinite}
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 40px -10px rgba(232,198,95,.6);animation:none}
  @keyframes btnPulse{0%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5)}70%{box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0)}100%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0)}}
  @media(prefers-reduced-motion:reduce){.btn-gold{animation:none}}

  /* NAV */
  header.nav{position:sticky;top:0;left:0;right:0;z-index:90;transition:background .35s var(--ease),border-color .35s var(--ease);border-bottom:1px solid transparent}
  header.nav.scrolled{background:rgba(6,25,56,.9);backdrop-filter:blur(14px);border-bottom-color:rgba(177,191,215,.14)}
  .nav-inner{max-width:var(--maxw);margin:0 auto;padding:16px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:20px}
  .logo{display:flex;align-items:center;gap:.6em;font-weight:800;letter-spacing:-.02em;font-size:1.12rem}
  .logo .mark{width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);display:grid;place-items:center;font-size:.95rem;font-weight:800;flex:0 0 auto}
  .nav-links{display:flex;align-items:center;gap:30px}
  .nav-links a{font-size:.92rem;font-weight:500;color:var(--steel);transition:color .2s;white-space:nowrap}
  .nav-links a:hover{color:var(--ink)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-drop-toggle{background:none;border:none;font-family:inherit;font-size:.92rem;font-weight:500;color:var(--steel);cursor:pointer;display:inline-flex;align-items:center;gap:.35em;transition:color .2s;white-space:nowrap;padding:0}
  .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{color:var(--ink)}
  .nav-drop-toggle .caret{font-size:.7em;transition:transform .25s var(--ease)}
  .nav-item:hover .nav-drop-toggle .caret{transform:rotate(180deg)}
  .nav-drop{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);min-width:236px;display:flex;flex-direction:column;gap:2px;background:rgba(13,35,80,.97);backdrop-filter:blur(14px);border:1px solid rgba(177,191,215,.16);border-radius:14px;padding:10px;box-shadow:0 22px 54px -18px rgba(0,0,0,.65);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s var(--ease),transform .2s var(--ease);z-index:95}
  .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
  .nav-drop a{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:9px 12px;border-radius:9px;font-size:.9rem;font-weight:500;color:var(--body);white-space:nowrap;transition:background .2s,color .2s}
  .nav-drop a:hover{background:rgba(232,198,95,.1);color:var(--gold)}
  .nav-drop a.is-soon{color:var(--steel)}
  .nav-drop a.is-soon span{font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(177,191,215,.35);border-radius:999px;padding:.15em .6em;font-weight:700}
  .nav-cta{display:flex;align-items:center;gap:18px}
  .nav-cta .btn{padding:.7em 1.3em;font-size:.9rem}
  .menu-btn{display:none;background:none;border:none;color:var(--body);cursor:pointer;flex-direction:column;gap:5px;padding:6px}
  .menu-btn span{display:block;width:24px;height:2px;background:var(--body);border-radius:2px}
  @media(max-width:880px){
    header.nav{background:rgba(6,25,56,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(177,191,215,.12)}
    .nav-inner{padding:10px var(--gutter);gap:12px}
    .nav-cta{gap:12px}
    .nav-cta .btn{padding:.62em 1.05em;font-size:.82rem}
    .nav-links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;background:rgba(6,25,56,.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(177,191,215,.14);padding:12px var(--gutter) 22px}
    .nav.menu-open .nav-links{display:flex}
    .nav-links > a{padding:13px 4px;font-size:1.05rem;border-bottom:1px solid rgba(177,191,215,.08)}
    .nav-item{flex-direction:column;align-items:stretch}
    .nav-drop-toggle{padding:13px 4px;font-size:1.05rem;justify-content:space-between;width:100%}
    .nav-item .nav-drop{position:static;transform:none;opacity:1;visibility:visible;pointer-events:auto;background:transparent;border:none;box-shadow:none;backdrop-filter:none;min-width:0;padding:2px 0 10px 12px;margin:0}
    .nav-item .nav-drop a{font-size:.98rem;padding:9px 8px}
    .nav-drop-toggle .caret{display:none}
    .menu-btn{display:flex}
  }

  /* SERIES */
  .series{padding:56px 0 72px;background:radial-gradient(1200px 620px at 78% -8%,rgba(232,198,95,.10),transparent 60%),var(--navy)}
  .series-head{max-width:760px;margin-bottom:clamp(30px,4vw,46px)}
  .series-head .eyebrow{margin-bottom:14px;display:block}
  .series-head h1{font-size:clamp(2rem,4.6vw,3.2rem);line-height:1.08;letter-spacing:-.02em;color:var(--ink);font-weight:800}
  .series-head h1 .hl{color:var(--gold)}
  .series-head p{margin-top:16px;font-size:clamp(1rem,1.5vw,1.15rem);color:var(--steel);max-width:60ch}
  .series-grid{display:grid;grid-template-columns:360px 1fr;gap:clamp(20px,2.4vw,34px);align-items:start}
  .series-grid>*{min-width:0}
  @media(max-width:940px){.series-grid{grid-template-columns:1fr}}

  .rail{background:var(--navy-card);border:1px solid rgba(177,191,215,.14);border-radius:var(--r-card);padding:18px;position:sticky;top:92px}
  @media(max-width:940px){.rail{position:static;order:2}}
  .rail-top{display:flex;align-items:center;justify-content:space-between;margin:2px 4px 14px}
  .rail-top .label{font-size:.66rem}
  .rail-progress{display:flex;align-items:center;gap:8px;font-size:.72rem;color:var(--steel);font-weight:600}
  .rail-progress .dots{display:flex;gap:4px}
  .rail-progress .dots i{width:7px;height:7px;border-radius:50%;background:rgba(177,191,215,.3)}
  .rail-progress .dots i.on{background:var(--gold)}
  .plist{display:flex;flex-direction:column;gap:8px}
  .pitem{display:flex;gap:12px;align-items:center;padding:9px;border-radius:13px;border:1px solid transparent;background:rgba(255,255,255,.02);cursor:pointer;transition:background .2s,border-color .2s}
  .pitem:hover{background:rgba(255,255,255,.05)}
  .pitem.active{border-color:rgba(232,198,95,.55);background:rgba(232,198,95,.08)}
  .pthumb{position:relative;width:96px;height:60px;border-radius:9px;overflow:hidden;flex:0 0 auto;background:linear-gradient(135deg,#12294f,#0a1c3c)}
  .pthumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .pthumb .ph-fallback{position:absolute;inset:0;display:grid;place-items:center;color:rgba(232,198,95,.6);font-family:'Caveat',cursive;font-size:1.6rem}
  .pthumb .glass{position:absolute;inset:0;background:rgba(4,18,42,.5);display:grid;place-items:center}
  .pthumb .lockico{width:22px;height:22px;color:var(--ink);opacity:.9}
  .pthumb .playico{position:absolute;inset:0;display:grid;place-items:center}
  .pthumb .playico svg{width:26px;height:26px;filter:drop-shadow(0 3px 8px rgba(0,0,0,.5))}
  .pmeta{min-width:0;flex:1}
  .pmeta .pnum{font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);font-weight:700}
  .pmeta .ptitle{font-size:.92rem;color:var(--ink);font-weight:600;line-height:1.25;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .pmeta .pdur{font-size:.74rem;color:var(--steel);margin-top:3px;display:flex;align-items:center;gap:6px}
  .pitem.active .pnum{color:var(--gold)}
  .pitem.locked .ptitle{color:var(--body);opacity:.85}
  .now{display:inline-flex;align-items:center;gap:5px;color:var(--gold);font-weight:700}
  .now .eq{display:inline-flex;gap:2px;align-items:flex-end;height:11px}
  .now .eq span{width:2.5px;background:var(--gold);border-radius:2px;animation:eq 1s ease-in-out infinite}
  .now .eq span:nth-child(1){height:5px}.now .eq span:nth-child(2){height:11px;animation-delay:.2s}.now .eq span:nth-child(3){height:7px;animation-delay:.4s}
  @keyframes eq{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}
  .rail-cta{margin-top:14px;padding:14px;border-radius:13px;background:linear-gradient(160deg,rgba(232,198,95,.14),rgba(232,198,95,.04));border:1px solid rgba(232,198,95,.25);text-align:center}
  .rail-cta p{font-size:.82rem;color:var(--body);margin-bottom:10px}
  .rail-cta p b{color:var(--ink)}
  .rail-cta .btn{width:100%;justify-content:center;padding:.85em 1em;font-size:.86rem}

  .player-card{background:var(--navy-card);border:1px solid rgba(177,191,215,.14);border-radius:var(--r-card);overflow:hidden}
  .player{position:relative;aspect-ratio:16/9;background:#04122A}
  @media(max-width:600px){.player.locked-tall{min-height:420px}}
  .player video,.player iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}
  .player .poster{position:absolute;inset:0;cursor:pointer}
  .player .poster img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .player .poster::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,18,42,.15),rgba(4,18,42,.55));pointer-events:none}
  .player .free-tag{position:absolute;left:16px;top:16px;z-index:3;font-size:.66rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;background:var(--gold);color:var(--navy);padding:5px 12px;border-radius:999px}
  .player .playbtn{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;width:88px;height:88px;border-radius:50%;background:rgba(232,198,95,.95);display:grid;place-items:center;cursor:pointer;box-shadow:0 14px 40px -8px rgba(0,0,0,.6);transition:transform .25s var(--ease)}
  .player .playbtn:hover{transform:translate(-50%,-50%) scale(1.06)}
  .player .playbtn svg{width:34px;height:34px;margin-left:5px;fill:var(--navy)}
  .player .ph-empty{position:absolute;inset:0;display:grid;place-items:center;color:rgba(232,198,95,.5);font-family:'Caveat',cursive;font-size:2.2rem;text-align:center;padding:20px}
  .player-body{padding:22px clamp(18px,2.4vw,28px)}
  .player-body .pb-num{font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);font-weight:700}
  .player-body h2{font-size:clamp(1.3rem,2.2vw,1.7rem);color:var(--ink);font-weight:800;line-height:1.15;margin-top:6px}
  .player-body p{margin-top:10px;color:var(--steel);font-size:.98rem;max-width:64ch}
  .pb-actions{margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;align-items:center}
  .pb-note{font-size:.8rem;color:var(--steel);opacity:.85}
  .lockwrap{position:absolute;inset:0;z-index:4;display:none;place-items:center;text-align:center;padding:24px;background:rgba(4,18,42,.86);backdrop-filter:blur(6px)}
  .lockwrap.on{display:grid}
  .lockwrap .lk-ico{width:52px;height:52px;color:var(--gold);margin:0 auto 14px}
  .lockwrap h3{font-size:clamp(1.2rem,2.2vw,1.6rem);color:var(--ink);font-weight:800;max-width:24ch;margin:0 auto}
  .lockwrap p{color:var(--steel);margin:10px auto 20px;max-width:42ch;font-size:.95rem}

  .learn{padding:64px 0 88px;background:var(--navy-deep)}
  .learn h2{font-size:clamp(1.5rem,3vw,2.1rem);color:var(--ink);font-weight:800;letter-spacing:-.01em;max-width:22ch}
  .learn h2 .hl{color:var(--gold)}
  .learn .sub{color:var(--steel);margin-top:12px;max-width:56ch}
  .learn-grid{margin-top:34px;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  @media(max-width:900px){.learn-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:520px){.learn-grid{grid-template-columns:1fr}}
  .lcard{background:var(--navy-card);border:1px solid rgba(177,191,215,.14);border-radius:var(--r-card);padding:22px}
  .lcard .n{font-family:'Caveat',cursive;font-size:2rem;color:var(--gold);line-height:1}
  .lcard h4{color:var(--ink);font-size:1.02rem;font-weight:700;margin-top:8px}
  .lcard p{color:var(--steel);font-size:.9rem;margin-top:8px}

  .finalcta{padding:72px 0;background:radial-gradient(900px 460px at 50% 0%,rgba(232,198,95,.12),transparent 62%),var(--navy)}
  .finalcta .inner{max-width:720px;margin:0 auto;text-align:center}
  .finalcta .eyebrow{display:block;margin-bottom:12px}
  .finalcta h2{font-size:clamp(1.7rem,3.4vw,2.6rem);color:var(--ink);font-weight:800;line-height:1.1}
  .finalcta h2 .hl{color:var(--gold)}
  .finalcta p{color:var(--steel);margin:16px auto 26px;max-width:48ch}
  .finalcta .btn{font-size:1.05rem}

  footer{background:var(--navy-deep);border-top:1px solid rgba(177,191,215,.12);padding-block:64px 40px}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:48px}
  .foot-cols{display:flex;gap:clamp(40px,8vw,100px);flex-wrap:wrap}
  .foot-col h4{font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);margin-bottom:18px;font-weight:700}
  .foot-col a{display:block;color:var(--body);opacity:.82;font-size:.8rem;margin-bottom:12px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:30ch}
  .foot-brand .lead{font-size:.78rem;margin-top:16px}
  .foot-social{display:flex;gap:18px;margin-top:20px}
  .foot-social a{color:var(--body);opacity:.82;font-size:.78rem;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid rgba(177,191,215,.12);color:var(--steel);font-size:.72rem}
  /* mobile type scale (tighter, matches the other pages) */
  @media(max-width:600px){
    .series{padding-top:44px}
    .eyebrow{font-size:1.35rem}
    .series-head h1{font-size:1.8rem;line-height:1.12}
    .series-head p{font-size:.94rem}
    .player-body h2{font-size:1.18rem}
    .player-body p{font-size:.9rem}
    .lockwrap h3{font-size:1.12rem}
    .lockwrap p{font-size:.86rem}
    .rail-cta p{font-size:.8rem}
    .learn h2{font-size:1.35rem}
    .learn .sub{font-size:.88rem}
    .lcard h4{font-size:.94rem}
    .lcard p{font-size:.84rem}
    .finalcta h2{font-size:1.55rem}
    .finalcta p{font-size:.9rem}
    .pmeta .ptitle{font-size:.85rem}
  }
  @media(max-width:600px){footer{padding-block:44px 28px}.foot-top{gap:30px;margin-bottom:34px}.foot-col h4{font-size:.62rem;margin-bottom:12px}.foot-col a{font-size:.76rem;margin-bottom:9px}.foot-brand .lead{font-size:.76rem}.foot-social a{font-size:.76rem}.foot-bottom{font-size:.7rem}}
  `;

  var HTML = `
  <header class="nav" id="nav">
    <div class="nav-inner">
      <a href="https://www.giveitallevent.com" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
      <nav class="nav-links">
        <div class="nav-item">
          <button class="nav-drop-toggle" aria-haspopup="true" aria-expanded="false">Experiences <span class="caret">&#9662;</span></button>
          <div class="nav-drop">
            <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener">Speaker &amp; Networking Event</a>
            <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
            <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
            <a href="https://www.parallaxxtransformations.com/the-reconnected-man" target="_blank" rel="noopener">Reconnected Man</a>
            <a href="https://www.parallaxxtransformations.com/coaching-experiences" target="_blank" rel="noopener">Parallaxx Transformations</a>
            <a href="#" class="is-soon">Virtual Membership <span>soon</span></a>
          <div style="height:1px;background:rgba(177,191,215,.16);margin:6px 4px"></div>
          <a href="https://www.giveitallevent.com/events-calendar" style="color:var(--gold)">Events calendar</a>
          </div>
        </div>
        <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak</a>
        <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
        <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
        <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">About</a>
      </nav>
      <div class="nav-cta">
        <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener" class="btn btn-gold">Get tickets <span class="arrow">&#8594;</span></a>
        <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <section class="series speckle">
    <div class="wrap">
      <div class="series-head">
        <span class="eyebrow">The Speaker Series</span>
        <h1>You've got a story <span class="hl">worth sharing</span></h1>
        <p>Watch the free intro and discover why you're more ready to take the stage than you think. No experience needed, just press play.</p>
      </div>

      <div class="series-grid">
        <aside class="rail">
          <div class="rail-top">
            <span class="label">The series</span>
            <span class="rail-progress">1 of 5 unlocked
              <span class="dots"><i class="on"></i><i></i><i></i><i></i><i></i></span>
            </span>
          </div>

          <div class="plist" id="plist">
            <div class="pitem active" data-key="intro">
              <div class="pthumb">
                <img src="https://static.wixstatic.com/media/111174_d9640c4c66904567a634f847ec653bb1~mv2.png" alt="Your Story Matters" onerror="this.style.display='none'">
                <div class="ph-fallback">Intro</div>
                <div class="playico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="rgba(232,198,95,.95)"/><path d="M10 8l6 4-6 4z" fill="#061938"/></svg></div>
              </div>
              <div class="pmeta">
                <div class="pnum">Module 0 &middot; Introduction</div>
                <div class="ptitle">Your Story Matters</div>
                <div class="pdur"><span class="now"><span class="eq"><span></span><span></span><span></span></span> Now playing</span></div>
              </div>
            </div>

            <div class="pitem locked" data-key="m1">
              <div class="pthumb"><img src="https://static.wixstatic.com/media/111174_c3e3358498474b94b0e0d60e648b5400~mv2.png" alt="Find Your Story" onerror="this.style.display='none'"><div class="ph-fallback">1</div><div class="glass"><svg class="lockico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div></div>
              <div class="pmeta"><div class="pnum">Module 1 &middot; The Shape of Your Talk</div><div class="ptitle">Find Your Story</div><div class="pdur">Locked</div></div>
            </div>

            <div class="pitem locked" data-key="m2">
              <div class="pthumb"><img src="https://static.wixstatic.com/media/111174_8e28c45a6418440dbadfa11a0381be40~mv2.png" alt="Don't Memorise It" onerror="this.style.display='none'"><div class="ph-fallback">2</div><div class="glass"><svg class="lockico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div></div>
              <div class="pmeta"><div class="pnum">Module 2 &middot; How to Actually Deliver It</div><div class="ptitle">Don't Memorise It</div><div class="pdur">Locked</div></div>
            </div>

            <div class="pitem locked" data-key="m3">
              <div class="pthumb"><img src="https://static.wixstatic.com/media/111174_0611f88a378048bca5fb9faa9db85b4a~mv2.png" alt="Getting Out of Your Head" onerror="this.style.display='none'"><div class="ph-fallback">3</div><div class="glass"><svg class="lockico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div></div>
              <div class="pmeta"><div class="pnum">Module 3 &middot; What to Do With the Nerves</div><div class="ptitle">Getting Out of Your Head</div><div class="pdur">Locked</div></div>
            </div>

            <div class="pitem locked" data-key="final">
              <div class="pthumb"><img src="https://static.wixstatic.com/media/111174_dfeaac73286341ddbb051d729434f7c2~mv2.png" alt="One Last Thing" onerror="this.style.display='none'"><div class="ph-fallback">Final</div><div class="glass"><svg class="lockico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div></div>
              <div class="pmeta"><div class="pnum">Closing &middot; Go Even Further</div><div class="ptitle">One Last Thing</div><div class="pdur">Locked</div></div>
            </div>
          </div>

          <div class="rail-cta">
            <p><b>4 modules locked.</b> Register as a speaker to unlock the full series.</p>
            <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener" class="btn btn-gold">Register as a speaker <span class="arrow">&#8594;</span></a>
          </div>
        </aside>

        <div class="player-card">
          <div class="player" id="player">
            <span class="free-tag">Free intro</span>
            <div class="poster" id="poster">
              <img class="thumb" src="https://static.wixstatic.com/media/111174_d9640c4c66904567a634f847ec653bb1~mv2.png" alt="Your Story Matters">
              <video class="still" muted playsinline preload="none" style="display:none"
                     src="https://video.wixstatic.com/video/111174_45b314fe6ec14e7cb883c5fc72b2c304/1080p/mp4/file.mp4"></video>
            </div>
            <div class="playbtn" id="playbtn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
            <div class="lockwrap" id="lockwrap">
              <div>
                <svg class="lk-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
                <h3 id="lockTitle">This module is locked</h3>
                <p>Register as a GIVE IT ALL speaker to unlock all four modules and the final talk.</p>
                <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener" class="btn btn-gold">Register as a speaker <span class="arrow">&#8594;</span></a>
              </div>
            </div>
          </div>
          <div class="player-body">
            <div class="pb-num" id="pbNum">Intro &middot; Free preview</div>
            <h2 id="pbTitle">Welcome to the Series</h2>
            <p id="pbDesc">All you need is to be willing. Register now and everything that gets you ready opens up. The story, the delivery, the mindset, all before you set foot on the GIVE IT ALL stage.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="learn speckle">
    <div class="wrap">
      <h2>Feel the full GIVE IT ALL <span class="hl">Experience</span></h2>
      <p class="sub">A talk you will rock on stage!</p>
      <div class="learn-grid">
        <div class="lcard"><div class="n">1</div><h4>Find Your Story</h4><p>Find your seed, shape it through the hero's journey, and walk away with the bones of your five-minute talk.</p></div>
        <div class="lcard"><div class="n">2</div><h4>Don't Memorise It</h4><p>How to practise your talk so it stays alive, chunked, felt, and never scripted.</p></div>
        <div class="lcard"><div class="n">3</div><h4>Getting Out of Your Head</h4><p>What to do with the nerves, and the one reframe that makes them disappear.</p></div>
        <div class="lcard"><div class="n">&#9733;</div><h4>One Last Thing</h4><p>You're ready. If you want to take it even further, here's what's available to you.</p></div>
      </div>
    </div>
  </section>

  <section class="finalcta speckle">
    <div class="wrap">
      <div class="inner">
        <span class="eyebrow">Your stage is waiting</span>
        <h2>Ready to unlock the <span class="hl">full series?</span></h2>
        <p>Register as a speaker for GIVE IT ALL and get instant access to all four modules and the final talk.</p>
        <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener" class="btn btn-gold">Register as a speaker <span class="arrow">&#8594;</span></a>
      </div>
    </div>
  </section>

  <footer class="speckle">
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">
          <a href="https://www.giveitallevent.com" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
          <p class="lead">Connect as humans again to improve all relationships with each other.</p>
          <div class="foot-social">
            <a href="https://www.instagram.com/giveitall_event" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/giveitallevent" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.youtube.com/@giveitall-speakerandnetworking" target="_blank" rel="noopener">YouTube</a>
            <a href="https://www.linkedin.com/in/daniel-reconnect-you/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div class="foot-cols">
          <div class="foot-col">
            <h4>Experiences</h4>
            <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener">Next event</a>
            <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
            <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
            <a href="https://www.parallaxxtransformations.com/coaching-experiences" target="_blank" rel="noopener">Parallaxx Transformations</a>
            <a href="https://www.giveitallevent.com/events-calendar">Events calendar</a>
          <a href="#">Virtual Membership</a>
          </div>
          <div class="foot-col">
            <h4>Our deeper world</h4>
            <a href="https://www.parallaxxtransformations.com/the-reconnected-man" target="_blank" rel="noopener">Reconnected Man</a>
            <a href="https://www.parallaxxtransformations.com/the-reconnected-woman" target="_blank" rel="noopener">Reconnected Woman</a>
            <a href="https://www.giveitallevent.com/reconnect" target="_blank" rel="noopener">Reconnect</a>
            <a href="https://www.parallaxxtransformations.com/reconnect-you-podcast-with-daniel-lawson" target="_blank" rel="noopener">Reconnect You (Podcast)</a>
            <a href="https://www.youtube.com/@NotJustHisPlusOne" target="_blank" rel="noopener">Not Just His Plus One</a>
          </div>
          <div class="foot-col">
            <h4>About</h4>
            <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">Our story</a>
            <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
            <a href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">Partner with us</a>
          </div>
        </div>
      </div>
      <div class="foot-bottom">
        <span>&copy; 2026 GIVE IT ALL. All rights reserved.</span>
        <span class="foot-legal" style="display:inline-flex;gap:18px;flex-wrap:wrap">
          <a href="https://www.giveitallevent.com/privacy-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Privacy Policy</a>
          <a href="https://www.giveitallevent.com/refund-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Refund Policy</a>
        </span>
      </div>
    </div>
  </footer>
  `;

  if (!document.getElementById('gia-fonts')) { var l=document.createElement('link'); l.id='gia-fonts'; l.rel='stylesheet'; l.href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Caveat:wght@500;600;700&display=swap'; document.head.appendChild(l); }

  class GIASpeakerSeriesPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;

      // ---- access gate: require email registration (soft gate) ----
      // FLIP GATE_ENABLED to true once the teaser page at OPTIN_URL is live on Wix.
      // While false, the page is open to everyone (video plays, modules still behind speaker registration).
      var GATE_ENABLED=false;
      var OPTIN_URL='https://www.giveitallevent.com/talk-series-locked';
      try{
        var _p=new URLSearchParams(location.search);
        var _live=/giveitallevent\.com/.test(location.hostname); // only enforce on the live domain (keeps previews open)
        if(_p.get('access')==='granted'){ try{localStorage.setItem('gia_series_access','1');}catch(e){} }
        var _ok=(_p.get('access')==='granted')||(function(){try{return localStorage.getItem('gia_series_access')==='1';}catch(e){return false;}})();
        if(GATE_ENABLED && _live && !_ok){ location.replace(OPTIN_URL); return; }
      }catch(e){}

      var shadow=this.attachShadow({mode:'open'}); shadow.innerHTML='<style>'+CSS+'</style>'+HTML;
      var root=shadow; var host=this;

      // collapse oversized Wix ancestor wrappers
      var collapseAncestors = function(){
        try{ var hostH=host.getBoundingClientRect().height; if(hostH<50) return;
          var n=host.parentElement,guard=0;
          while(n&&n!==document.body&&guard++<14){ if(n.getBoundingClientRect().height>hostH+400){n.style.height='auto';n.style.minHeight='0px';} n=n.parentElement; }
        }catch(e){}
      };
      requestAnimationFrame(collapseAncestors);
      [400,1200,2500].forEach(function(t){ setTimeout(collapseAncestors,t); });
      window.addEventListener('resize', collapseAncestors, {passive:true});

      // nav scrolled state
      var nav=root.getElementById('nav');
      var onScroll=function(){ nav.classList.toggle('scrolled', window.scrollY>40); };
      window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

      // mobile menu
      var menuBtn=root.querySelector('.menu-btn');
      if(menuBtn){ menuBtn.addEventListener('click',function(){ nav.classList.toggle('menu-open'); });
        root.querySelectorAll('.nav-links a').forEach(function(a){ a.addEventListener('click',function(){ nav.classList.remove('menu-open'); }); }); }

      // series player + playlist
      var modules={
        intro:{num:'Intro &middot; Free preview',title:'Welcome to the Series',desc:"All you need is to be willing. Register now and everything that gets you ready opens up. The story, the delivery, the mindset, all before you set foot on the GIVE IT ALL stage.",locked:false},
        m1:{num:'Module 1 &middot; The Shape of Your Talk',title:'Find Your Story',summary:'Find your seed, shape it through the hero\'s journey, and walk away with the bones of your five-minute talk.',locked:true},
        m2:{num:'Module 2 &middot; How to Actually Deliver It',title:'Don\'t Memorise It',summary:'How to practise your talk so it stays alive, chunked, felt, and never scripted.',locked:true},
        m3:{num:'Module 3 &middot; What to Do With the Nerves',title:'Getting Out of Your Head',summary:'What to do with the nerves, and the one reframe that makes them disappear.',locked:true},
        final:{num:'Closing &middot; Go Even Further',title:'One Last Thing',summary:'You\'re ready. If you want to take it even further, here\'s what\'s available to you.',locked:true}
      };
      var player=root.getElementById('player'), poster=root.getElementById('poster'), playbtn=root.getElementById('playbtn');
      var lockwrap=root.getElementById('lockwrap'), lockTitle=root.getElementById('lockTitle');
      var pbNum=root.getElementById('pbNum'), pbTitle=root.getElementById('pbTitle'), pbDesc=root.getElementById('pbDesc');

      function playIntro(){
        lockwrap.classList.remove('on');
        var v=poster.querySelector('video'); var img=poster.querySelector('img');
        if(v){ if(img) img.style.display='none'; v.style.display='block'; v.muted=false; v.controls=true; v.currentTime=0; v.play(); playbtn.style.display='none'; }
      }
      playbtn.addEventListener('click',playIntro);
      poster.addEventListener('click',function(e){ if(e.target.tagName!=='VIDEO') playIntro(); });

      root.querySelectorAll('.pitem').forEach(function(item){
        item.addEventListener('click',function(){
          var key=item.getAttribute('data-key'); var m=modules[key];
          root.querySelectorAll('.pitem').forEach(function(i){ i.classList.remove('active'); });
          item.classList.add('active');
          pbNum.innerHTML=m.num; pbTitle.innerHTML=m.title;
          if(m.locked){
            lockwrap.classList.add('on'); playbtn.style.display='none';
            player.classList.add('locked-tall');
            lockTitle.textContent=m.title;
            pbDesc.textContent=m.summary;
          }else{
            lockwrap.classList.remove('on'); playbtn.style.display='grid';
            player.classList.remove('locked-tall');
            pbDesc.textContent=m.desc;
          }
          player.scrollIntoView({behavior:'smooth',block:'center'});
        });
      });
    }
  }
  customElements.define('gia-speaker-series-page', GIASpeakerSeriesPage);
})();
