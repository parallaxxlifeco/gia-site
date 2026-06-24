/* GIVE IT ALL - Home page Wix Custom Element. Tag: gia-home-page. Turn Wix header+footer OFF. */
(function(){
  if (customElements.get('gia-home-page')) return;
  var CSS = `
  :host{
    --navy:#061938;
    --navy-card:#0D2350;
    --navy-deep:#04122A;
    --gold:#E8C65F;
    --ink:#F4F6FB;     /* headlines / high-emphasis */
    --body:#E2E7F1;    /* body / primary text */
    --steel:#B1BFD7;   /* secondary / supporting */
    --white:#FFFFFF;   /* rare tiny accents only */
    --cream:#F2EBD9;
    --cream-deep:#EAE0C7;

    --maxw:1240px;
    --gutter:clamp(20px,5vw,64px);

    --r-pill:999px;
    --r-card:18px;

    --ease:cubic-bezier(.22,.61,.36,1);
  }

  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;overflow-x:clip}
  :host{display:block;
    font-family:'Montserrat',system-ui,sans-serif;
    background:var(--navy);
    color:var(--body);
    -webkit-font-smoothing:antialiased;
    line-height:1.5;
    overflow-x:clip;
  }
  img{display:block;max-width:100%}
  a{color:inherit;text-decoration:none}

  /* ---------- speckled texture (barely-there) ---------- */
  .speckle{position:relative}
  .speckle::before{
    content:"";
    position:absolute;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
    opacity:.035;
    pointer-events:none;
    mix-blend-mode:screen;
    z-index:0;
  }
  .speckle > *{position:relative;z-index:1}

  /* ---------- layout primitives ---------- */
  .wrap{max-width:var(--maxw);margin:0 auto;padding-inline:var(--gutter)}
  section{position:relative}
  .band-navy{background:var(--navy)}
  .band-deep{background:var(--navy-deep)}
  .band-cream{background:var(--cream);color:var(--navy)}

  /* ---------- type ---------- */
  .eyebrow{
    font-family:'Caveat',cursive;
    font-weight:600;
    font-size:clamp(1.5rem,3.4vw,2.1rem);
    color:var(--gold);
    line-height:1;
  }
  .label{
    font-size:.72rem;
    letter-spacing:.22em;
    text-transform:uppercase;
    font-weight:600;
    color:var(--steel);
  }
  .band-cream .label{color:#6c6450}
  .rule{
    height:1px;background:var(--steel);opacity:.32;
    margin-top:14px;margin-bottom:38px;
  }
  .band-cream .rule{background:#b8ac8c;opacity:.6}
  h1,h2,h3{font-weight:800;line-height:1.05;letter-spacing:-.018em;text-wrap:balance;color:var(--ink)}
  h1{font-size:clamp(2.6rem,7.2vw,5.1rem)}
  h2{font-size:clamp(2rem,5vw,3.5rem)}
  h3{font-size:clamp(1.3rem,2.6vw,1.7rem);letter-spacing:-.01em}
  .gold{color:var(--gold)}
  .steel{color:var(--steel)}
  .lead{
    font-size:clamp(1.05rem,1.6vw,1.3rem);
    color:var(--steel);
    font-weight:400;
    max-width:46ch;
    line-height:1.6;
  }

  /* ---------- buttons ---------- */
  .btn{
    display:inline-flex;align-items:center;gap:.6em;
    font-family:inherit;font-weight:700;font-size:1rem;
    border-radius:var(--r-pill);
    padding:1.05em 1.9em;
    cursor:pointer;border:none;
    transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease);
    white-space:nowrap;
  }
  .btn .arrow{transition:transform .25s var(--ease)}
  .btn:hover .arrow{transform:translateX(4px)}
  .btn-gold{
    background:var(--gold);color:var(--navy);
    box-shadow:0 10px 30px -8px rgba(232,198,95,.5);
    animation:btnPulse 2.8s ease-out infinite;
  }
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 40px -10px rgba(232,198,95,.6);animation:none}
  @keyframes btnPulse{
    0%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5)}
    70%{box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0)}
    100%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0)}
  }
  .btn-ghost{
    background:transparent;color:var(--body);
    border:1.5px solid rgba(177,191,215,.42);font-weight:600;
  }
  .btn-ghost:hover{border-color:var(--gold);color:var(--gold)}
  .band-cream .btn-ghost{color:var(--navy);border-color:rgba(6,25,56,.28)}
  .band-cream .btn-ghost:hover{border-color:var(--navy)}

  .link-quiet{
    display:inline-flex;align-items:center;gap:.5em;
    color:var(--steel);font-weight:600;font-size:.98rem;
    border-bottom:1px solid transparent;transition:color .2s,border-color .2s;white-space:nowrap;
  }
  .link-quiet:hover{color:var(--gold);border-color:var(--gold)}
  .band-cream .link-quiet{color:#5b5440}
  .band-cream .link-quiet:hover{color:var(--navy)}

  /* ---------- pills / chips ---------- */
  .pill{
    display:inline-flex;align-items:center;gap:.45em;
    border-radius:var(--r-pill);
    padding:.5em 1.05em;
    font-size:.78rem;font-weight:700;letter-spacing:.04em;
    background:rgba(232,198,95,.1);
    color:var(--gold);
    border:1px solid rgba(232,198,95,.55);
    white-space:nowrap;
  }
  .pill-solid{background:var(--gold);color:var(--navy);border-color:var(--gold)}
  .chips{display:flex;flex-wrap:wrap;gap:.7em}

  .trust{
    display:inline-flex;align-items:center;gap:.6em;
    background:rgba(13,35,80,.7);
    border:1px solid rgba(177,191,215,.25);
    color:var(--steel);
    border-radius:var(--r-pill);
    padding:.55em 1.1em;
    font-size:.76rem;font-weight:600;letter-spacing:.02em;
    backdrop-filter:blur(8px);
    white-space:nowrap;
  }
  .trust b{color:var(--gold);font-weight:700}
  .trust .stars{color:var(--gold);letter-spacing:.08em}

  /* persistent trust chip */
  .trust-fixed{
    position:fixed;left:50%;transform:translateX(-50%);
    bottom:18px;z-index:80;
    box-shadow:0 12px 36px -12px rgba(0,0,0,.6);
    opacity:0;transition:opacity .5s var(--ease),transform .5s var(--ease);
    pointer-events:none;
    font-size:.72rem;padding:.5em 1em;
  }
  .trust-fixed.show{opacity:1}
  @media(max-width:600px){.trust-fixed{font-size:.64rem;padding:.45em .8em;bottom:12px}}

  /* ---------- placeholders ---------- */
  .ph{
    position:relative;overflow:hidden;
    background:
      repeating-linear-gradient(135deg,rgba(255,255,255,.022) 0 2px,transparent 2px 11px),
      linear-gradient(160deg,#13294e,#0a1c3c);
    border:1px solid rgba(177,191,215,.16);
    display:flex;align-items:flex-end;
    color:var(--steel);
  }
  .ph.warm{
    background:
      repeating-linear-gradient(135deg,rgba(232,198,95,.05) 0 2px,transparent 2px 11px),
      linear-gradient(160deg,#26324a,#1a2640);
  }
  .ph .ph-tag{
    font-family:ui-monospace,'SFMono-Regular',Menlo,monospace;
    font-size:.66rem;letter-spacing:.06em;
    color:rgba(177,191,215,.78);
    background:rgba(4,18,42,.55);
    border:1px solid rgba(177,191,215,.2);
    border-radius:7px;
    padding:.4em .65em;
    margin:14px;
    line-height:1.3;
    backdrop-filter:blur(2px);
  }
  .ph .ph-tag::before{content:"◳  ";opacity:.6}

  /* ---------- NAV ---------- */
  header.nav{
    position:fixed;top:0;left:0;right:0;z-index:90;
    transition:background .35s var(--ease),border-color .35s var(--ease),padding .35s var(--ease);
    border-bottom:1px solid transparent;
  }
  header.nav.scrolled{
    background:rgba(6,25,56,.82);
    backdrop-filter:blur(14px);
    border-bottom-color:rgba(177,191,215,.14);
  }
  .nav-inner{
    max-width:var(--maxw);margin:0 auto;
    padding:18px var(--gutter);
    display:flex;align-items:center;justify-content:space-between;gap:20px;
  }
  .logo{display:flex;align-items:center;gap:.6em;font-weight:800;letter-spacing:-.02em;font-size:1.12rem}
  .logo .mark{
    width:30px;height:30px;border-radius:8px;
    background:var(--gold);color:var(--navy);
    display:grid;place-items:center;font-size:.95rem;font-weight:800;
    flex:0 0 auto;
  }
  .nav-links{display:flex;align-items:center;gap:30px}
  .nav-links a{font-size:.92rem;font-weight:500;color:var(--steel);transition:color .2s;white-space:nowrap}
  .nav-links a:hover{color:var(--ink)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-drop-toggle{background:none;border:none;font-family:inherit;font-size:.92rem;font-weight:500;color:var(--steel);cursor:pointer;display:inline-flex;align-items:center;gap:.35em;transition:color .2s;white-space:nowrap;padding:0}
  .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{color:var(--ink)}
  .nav-drop-toggle .caret{font-size:.7em;transition:transform .25s var(--ease)}
  .nav-item:hover .nav-drop-toggle .caret,.nav-item:focus-within .nav-drop-toggle .caret{transform:rotate(180deg)}
  .nav-drop{
    position:absolute;top:100%;left:50%;
    transform:translateX(-50%) translateY(8px);
    min-width:236px;display:flex;flex-direction:column;gap:2px;
    background:rgba(13,35,80,.97);backdrop-filter:blur(14px);
    border:1px solid rgba(177,191,215,.16);border-radius:14px;padding:10px;
    box-shadow:0 22px 54px -18px rgba(0,0,0,.65);
    opacity:0;visibility:hidden;pointer-events:none;
    transition:opacity .2s var(--ease),transform .2s var(--ease);z-index:95;
  }
  .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
  .nav-drop a{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:9px 12px;border-radius:9px;font-size:.9rem;font-weight:500;color:var(--body);white-space:nowrap;transition:background .2s,color .2s}
  .nav-drop a:hover{background:rgba(232,198,95,.1);color:var(--gold)}
  .nav-drop a.is-soon{color:var(--steel)}
  .nav-drop a.is-soon span{font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(177,191,215,.35);border-radius:999px;padding:.15em .6em;font-weight:700}
  .nav-cta{display:flex;align-items:center;gap:18px}
  .nav-cta .btn{padding:.7em 1.3em;font-size:.9rem}
  .nav-mobile-cta{display:none}
  .menu-btn{display:none;background:none;border:none;color:var(--body);cursor:pointer;flex-direction:column;gap:5px;padding:6px}
  .menu-btn span{display:block;width:24px;height:2px;background:var(--body);border-radius:2px}
  @media(max-width:880px){
    header.nav{background:rgba(6,25,56,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(177,191,215,.12)}
    .nav-inner{padding:10px var(--gutter)}
    .logo{font-size:1rem}
    .logo .mark{width:26px;height:26px;font-size:.85rem}
    .nav-cta .btn{display:none}
    .nav-links{
      display:none;
      position:absolute;top:100%;left:0;right:0;
      flex-direction:column;align-items:stretch;gap:2px;
      background:rgba(6,25,56,.98);backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(177,191,215,.14);
      padding:12px var(--gutter) 22px;
    }
    .nav.menu-open .nav-links{display:flex}
    .nav-links > a:not(.btn){padding:13px 4px;font-size:1.05rem;border-bottom:1px solid rgba(177,191,215,.08)}
    .nav-mobile-cta{display:inline-flex;align-self:flex-start;margin:14px 4px 2px;padding:.8em 1.6em;font-size:.95rem}
    .nav-item{flex-direction:column;align-items:stretch}
    .nav-drop-toggle{padding:13px 4px;font-size:1.05rem;justify-content:space-between;width:100%}
    .nav-item .nav-drop{
      position:static;transform:none;opacity:1;visibility:visible;pointer-events:auto;
      background:transparent;border:none;box-shadow:none;backdrop-filter:none;
      min-width:0;padding:2px 0 10px 12px;margin:0;
    }
    .nav-item .nav-drop a{font-size:.98rem;padding:9px 8px}
    .nav-drop-toggle .caret{display:none}
    .menu-btn{display:flex}
  }

  /* ---------- HERO ---------- */
  .hero{
    min-height:clamp(560px,88vh,820px);
    display:flex;align-items:flex-end;
    position:relative;overflow:hidden;
    padding-bottom:clamp(40px,7vh,80px);
  }
  .hero-bg{
    position:absolute;inset:0;z-index:0;border:none;
    background:
      repeating-linear-gradient(135deg,rgba(255,255,255,.02) 0 2px,transparent 2px 13px),
      radial-gradient(120% 80% at 70% 10%,#2b3a55 0%,#15264a 38%,#0a1a3a 70%,#061938 100%);
  }
  .hero-scrim{
    position:absolute;inset:0;z-index:1;
    background:
      linear-gradient(to top,rgba(6,25,56,.97) 0%,rgba(6,25,56,.62) 38%,rgba(6,25,56,.28) 66%,rgba(6,25,56,.55) 100%),
      linear-gradient(105deg,rgba(6,25,56,.7) 0%,rgba(6,25,56,0) 55%);
  }
  .hero-photo-tag{
    position:absolute;top:96px;right:var(--gutter);z-index:2;
    font-family:ui-monospace,monospace;font-size:.66rem;letter-spacing:.06em;
    color:rgba(177,191,215,.6);
    background:rgba(4,18,42,.45);border:1px solid rgba(177,191,215,.18);
    border-radius:7px;padding:.4em .65em;
  }
  .hero-content{position:relative;z-index:3;width:100%}
  .hero h1{max-width:16ch;margin:.32em 0 .5em}
  .hero .lead{max-width:52ch;font-size:clamp(1.08rem,1.7vw,1.35rem)}
  .hero-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:38px}
  .hero-trust{margin-top:44px}
  .scrollcue{
    display:inline-flex;align-items:center;gap:.6em;
    color:var(--steel);font-weight:600;font-size:.92rem;
    margin-top:10px;
  }
  .scrollcue .dot{
    width:30px;height:30px;border:1px solid rgba(177,191,215,.4);border-radius:50%;
    display:grid;place-items:center;animation:bob 1.8s var(--ease) infinite;
  }
  @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}

  /* ---------- generic section spacing ---------- */
  .sec{padding-block:clamp(48px,7vh,84px)}
  .sec-sm{padding-block:clamp(36px,5vh,56px)}

  /* ---------- THE FEELING (manifesto) ---------- */
  .manifesto{max-width:18ch}
  .beats{
    margin-top:clamp(48px,6vh,80px);
    display:grid;gap:clamp(28px,3vw,48px);
    grid-template-columns:repeat(3,1fr);
  }
  .beat{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
  .beat-num{
    font-family:'Caveat',cursive;font-size:2.2rem;color:var(--gold);
    line-height:1;opacity:.85;
  }
  .beat p{font-size:clamp(1.15rem,1.7vw,1.5rem);font-weight:600;line-height:1.25;letter-spacing:-.01em;color:var(--ink);max-width:22ch;text-wrap:pretty}
  .beat .sub{font-size:clamp(.95rem,1.2vw,1.05rem);font-weight:400;color:var(--steel);margin-top:4px;max-width:36ch}
  @media(max-width:760px){.beats{grid-template-columns:1fr;gap:clamp(32px,5vh,48px)}}
  .beat em{font-style:normal;color:var(--gold)}
  .values{margin-top:clamp(44px,6vh,72px)}

  /* ---------- NEXT EXPERIENCE ---------- */
  .next-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;margin-bottom:46px}
  .next-meta{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin:18px 0 30px;color:var(--steel);font-weight:600;font-size:1.02rem}
  .next-meta > span:not(.sep){white-space:nowrap}
  .next-meta .sep{width:5px;height:5px;border-radius:50%;background:var(--gold)}
  .next-grid{
    display:grid;gap:14px;
    grid-template-columns:2fr 1fr 1fr;
    grid-template-rows:230px 230px;
  }
  .next-grid .ph:nth-child(1){grid-row:span 2;min-height:474px}
  .next-grid .ph:nth-child(4){grid-column:span 2}
  .next-grid .ph{border-radius:var(--r-card)}
  @media(max-width:760px){
    .next-grid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
    .next-grid .ph:nth-child(1){grid-row:auto;grid-column:span 2;min-height:300px}
    .next-grid .ph:nth-child(4){grid-column:span 2}
    .next-grid .ph{min-height:170px}
  }

  /* ---------- WORLD CAROUSEL ---------- */
  .carousel-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
  .carousel-nav{display:flex;gap:10px}
  .cbtn{
    width:46px;height:46px;border-radius:50%;
    border:1px solid rgba(177,191,215,.32);background:transparent;color:var(--body);
    cursor:pointer;display:grid;place-items:center;transition:all .2s var(--ease);font-size:1.1rem;
  }
  .cbtn:hover{border-color:var(--gold);color:var(--gold)}
  .carousel{
    margin-top:40px;
    display:flex;gap:22px;
    overflow-x:auto;scroll-snap-type:x mandatory;
    padding-bottom:18px;
    scrollbar-width:none;
    margin-inline:calc(-1 * var(--gutter));
    padding-inline:var(--gutter);
  }
  .carousel::-webkit-scrollbar{display:none}
  .card{
    flex:0 0 clamp(280px,80vw,340px);
    scroll-snap-align:start;
    background:var(--navy-card);
    border:1px solid rgba(177,191,215,.14);
    border-radius:var(--r-card);
    overflow:hidden;
    display:flex;flex-direction:column;
    transition:transform .3s var(--ease),border-color .3s var(--ease);
  }
  .card:hover{transform:translateY(-6px);border-color:rgba(232,198,95,.45)}
  .card .ph{height:200px;align-items:flex-start}
  .card-body{padding:24px 24px 28px;display:flex;flex-direction:column;gap:12px;flex:1}
  .card-body .pill{align-self:flex-start}
  .card h3{font-size:1.3rem}
  .card p{color:var(--steel);font-size:.96rem;font-weight:400;line-height:1.5;flex:1}
  .card .card-link{margin-top:4px;color:var(--gold);font-weight:700;font-size:.92rem;display:inline-flex;gap:.4em;align-items:center}
  .card.quiet{background:transparent;border-style:dashed;border-color:rgba(177,191,215,.28)}
  .card.quiet .pill{background:transparent;color:var(--steel);border-color:rgba(177,191,215,.4)}
  .card.quiet h3{color:var(--steel)}
  .card.quiet .card-link{color:var(--steel)}

  /* ---------- PROOF ---------- */
  .stats{
    display:grid;grid-template-columns:repeat(5,1fr);
    gap:0;border:1px solid rgba(177,191,215,.16);border-radius:var(--r-card);
    overflow:hidden;
  }
  .stat{padding:30px 22px;text-align:center;border-right:1px solid rgba(177,191,215,.12)}
  .stat:last-child{border-right:none}
  .stat .n{font-size:clamp(1.7rem,3vw,2.6rem);font-weight:800;color:var(--gold);letter-spacing:-.02em;line-height:1}
  .stat .l{font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--steel);margin-top:10px;font-weight:600}
  @media(max-width:760px){
    .stats{grid-template-columns:repeat(2,1fr)}
    .stat{border-bottom:1px solid rgba(177,191,215,.12)}
    .stat:nth-child(5){grid-column:span 2;border-right:none}
  }
  .proof-grid{
    margin-top:30px;
    display:grid;gap:22px;
    grid-template-columns:1fr 1fr;
    align-items:stretch;
  }
  @media(max-width:860px){.proof-grid{grid-template-columns:1fr}}
  .quote{
    background:var(--navy-card);border:1px solid rgba(177,191,215,.14);
    border-radius:var(--r-card);padding:34px 34px 30px;
    display:flex;flex-direction:column;gap:22px;
  }
  .quote .stars{color:var(--gold);letter-spacing:.12em;font-size:.95rem}
  .quote blockquote{font-size:clamp(1.15rem,1.8vw,1.4rem);font-weight:600;line-height:1.4;letter-spacing:-.01em;color:var(--ink)}
  .quote .by{display:flex;align-items:center;gap:14px;margin-top:auto}
  .quote .avatar{width:46px;height:46px;border-radius:50%;flex:0 0 auto}
  .quote .avatar .ph-tag{display:none}
  .quote .by .name{font-weight:700;font-size:.95rem}
  .quote .by .role{color:var(--steel);font-size:.82rem;font-weight:500}
  .proof-photos{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:14px}
  .proof-photos .ph{border-radius:14px;min-height:130px}

  /* ---------- JOIN (parallel route) ---------- */
  .join-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(36px,6vw,76px);align-items:center}
  @media(max-width:820px){.join-grid{grid-template-columns:1fr}}
  .join-grid > .ph{border-radius:var(--r-card);min-height:420px}
  .join-points{display:flex;flex-direction:column;gap:18px;margin:28px 0 34px}
  .join-point{display:flex;gap:15px;align-items:flex-start}
  .join-point .dot{flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:var(--gold);margin-top:11px}
  .join-point p{font-size:1.05rem;line-height:1.5;color:var(--steel);max-width:46ch}
  .join-point b{color:var(--ink);font-weight:700}

  /* ---------- FOUNDERS (warm band) ---------- */
  .founders{display:grid;grid-template-columns:0.9fr 1.1fr;gap:clamp(36px,6vw,80px);align-items:center}
  @media(max-width:820px){.founders{grid-template-columns:1fr}}
  .founders .ph{border-radius:var(--r-card);min-height:380px}
  .founders .ph .ph-tag{background:rgba(255,255,255,.6);color:#6c6450;border-color:rgba(108,100,80,.3)}
  .founders h2{max-width:20ch;font-size:clamp(1.7rem,3.4vw,2.6rem);color:var(--navy)}
  .founders p{font-size:clamp(1.05rem,1.5vw,1.2rem);color:#46402f;max-width:42ch;margin:22px 0 28px;line-height:1.6}
  .founders .names{font-family:'Caveat',cursive;font-size:1.8rem;color:var(--navy);font-weight:700;margin-top:24px}

  /* ---------- CLOSING ---------- */
  .closing{text-align:center;overflow:hidden}
  .closing-bg{
    position:absolute;inset:0;z-index:0;border:none;
    background:
      repeating-linear-gradient(135deg,rgba(232,198,95,.03) 0 2px,transparent 2px 13px),
      radial-gradient(90% 120% at 50% 120%,#1b2c4d 0%,#0a1a3a 55%,#04122A 100%);
  }
  .closing .wrap{position:relative;z-index:2}
  .closing h2{max-width:18ch;margin:.4em auto .1em}
  .closing .lead{margin:0 auto;text-align:center}
  .closing-actions{display:flex;gap:22px;justify-content:center;align-items:center;flex-wrap:wrap;margin-top:42px}

  /* ---------- FOOTER ---------- */
  footer{background:var(--navy-deep);border-top:1px solid rgba(177,191,215,.12);padding-block:64px 40px}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:48px}
  .foot-cols{display:flex;gap:clamp(40px,8vw,100px);flex-wrap:wrap}
  .foot-col h4{font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);margin-bottom:18px;font-weight:700}
  .foot-col a{display:block;color:var(--body);opacity:.82;font-size:.95rem;margin-bottom:12px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:30ch}
  .foot-brand .lead{font-size:.95rem;margin-top:16px}
  .foot-social{display:flex;gap:18px;margin-top:20px}
  .foot-social a{color:var(--body);opacity:.82;font-size:.9rem;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid rgba(177,191,215,.12);color:var(--steel);font-size:.84rem}

  /* ---------- reveal (kept visible; subtle entrance only where frames advance) ---------- */
  .reveal{opacity:1;transform:none}
  /* ---------- phone tightening (smaller gaps + headings) ---------- */
  @media(max-width:600px){
    .sec{padding-block:clamp(46px,9vh,62px)}
    .sec-sm{padding-block:clamp(38px,7vh,50px)}
    .hero h1{font-size:clamp(2.1rem,8.5vw,2.9rem)}
    .hero .lead{font-size:1.02rem}
    .beats{margin-top:30px;gap:26px}
    .rule{margin-bottom:24px}
    .next-head{margin-bottom:26px}
    .carousel{margin-top:24px}
    .proof-grid{margin-top:22px}
    .founders p{margin:18px 0 22px}
    footer{padding-block:44px 28px}
    .foot-top{gap:30px;margin-bottom:34px}
    .foot-col h4{font-size:.66rem;margin-bottom:12px}
    .foot-col a{font-size:.82rem;margin-bottom:9px}
    .foot-brand .lead{font-size:.82rem}
    .foot-social a{font-size:.8rem}
    .foot-bottom{font-size:.74rem}
  }

  @media(prefers-reduced-motion:reduce){
    .scrollcue .dot{animation:none}
    .btn-gold{animation:none}
  }
`;
  var HTML = `

<!-- ============ NAV ============ -->
<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="#top" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
    <nav class="nav-links">
      <div class="nav-item">
        <button class="nav-drop-toggle" aria-haspopup="true" aria-expanded="false">Experiences <span class="caret">▾</span></button>
        <div class="nav-drop">
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event">Speaker &amp; Networking Event</a>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
          <a href="https://www.parallaxxtransformations.com/the-reconnected-man" target="_blank" rel="noopener">Reconnected Man</a>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
          <a href="#" class="is-soon">Virtual Membership <span>soon</span></a>
        </div>
      </div>
      <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak</a>
      <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
      <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
      <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">About</a>
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold nav-mobile-cta">Get tickets <span class="arrow">→</span></a>
    </nav>
    <div class="nav-cta">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">Get tickets <span class="arrow">→</span></a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="hero-bg" aria-hidden="true" style="background-image:url('https://static.wixstatic.com/media/111174_d4e1fe01eb324968a1705eaee370ad86~mv2.jpg');background-size:cover;background-position:center"></div>
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="hero-content">
    <div class="wrap">
      <p class="eyebrow reveal">you've found your community</p>
      <h1 class="reveal" style="transition-delay:.08s">Connect as <span class="gold">humans</span> again.</h1>
      <p class="lead reveal" style="transition-delay:.16s">Driven to create, connected to collaborate. In life and in business.</p>
      <div class="hero-actions reveal" style="transition-delay:.24s">
        <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">See the next event <span class="arrow">→</span></a>
      </div>
      <a href="#feeling" class="link-quiet reveal" style="transition-delay:.3s;margin-top:20px">Explore the world of GIVE IT ALL ↓</a>
    </div>
  </div>
</section>

<!-- ============ THE FEELING / WHY ============ -->
<section class="band-navy sec speckle" id="feeling">
  <div class="wrap">
    <p class="label reveal">Welcome</p>
    <div class="rule reveal"></div>
    <h2 class="manifesto reveal" style="font-size:clamp(1.5rem,3vw,2.3rem);max-width:30ch">The price of growth? You outgrow your <span class="gold">environment</span>.</h2>

    <div class="beats">
      <div class="beat reveal">
        <span class="beat-num">01</span>
        <div>
          <p>You've grown, now what?</p>
          <p class="sub">More success, but less excitement. Craving depth, curiosity, and connection with others who get it too.</p>
        </div>
      </div>
      <div class="beat reveal">
        <span class="beat-num">02</span>
        <div>
          <p>More, from where?</p>
          <p class="sub">We bring what we wish to experience. Be the demonstration of more, and together we rise. Connection by design.</p>
        </div>
      </div>
      <div class="beat reveal">
        <span class="beat-num">03</span>
        <div>
          <p>Your purpose?</p>
          <p class="sub">We're wired to connect. Connect as a human again. Without performance or trying to impress.</p>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ============ WORLD OF GIVE IT ALL (the heart) ============ -->
<section class="band-deep sec speckle" id="world">
  <div class="wrap">
    <div class="carousel-head">
      <div>
        <p class="label reveal">Explore</p>
        <div class="rule reveal" style="margin-bottom:18px;max-width:320px"></div>
        <h2 class="reveal">A world of <span class="gold">experience</span></h2>
      </div>
      <div class="carousel-nav reveal">
        <button class="cbtn" id="prevBtn" aria-label="Previous">←</button>
        <button class="cbtn" id="nextBtn" aria-label="Next">→</button>
      </div>
    </div>
  </div>

  <div class="wrap" style="overflow:visible">
    <div class="carousel reveal" id="carousel">
      <article class="card">
        <img src="https://static.wixstatic.com/media/111174_1cb8d1c1148c49fd99a384954abc839f~mv2.jpg" alt="People in conversation at GIVE IT ALL" style="width:100%;height:200px;object-fit:cover;display:block">
        <div class="card-body">
          <span class="pill">Monthly</span>
          <h3>Speaker &amp; Networking</h3>
          <p>Our flagship connection event. Real talks meet the kind of networking you seek. Top rated.</p>
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="card-link">Find out more →</a>
        </div>
      </article>

      <article class="card">
        <img src="https://static.wixstatic.com/media/111174_031169f246ea4ac599065b6f80db32bf~mv2.jpg" alt="Founders Breakfast around the table" style="width:100%;height:200px;object-fit:cover;display:block">
        <div class="card-body">
          <span class="pill">20 seats</span>
          <h3>Founders Breakfast</h3>
          <p>Curated business conversations between connected humans. A trusted network of clients, referrals and support you'd never reach alone.</p>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener" class="card-link">Find out more →</a>
        </div>
      </article>

      <article class="card">
        <img src="https://static.wixstatic.com/media/111174_fc9a98b613674a09833b2f4158fabc56~mv2.jpg" alt="A speaker taking the floor at GIVE IT ALL" style="width:100%;height:200px;object-fit:cover;display:block">
        <div class="card-body">
          <span class="pill">Open call</span>
          <h3>Speak on Stage</h3>
          <p>Everyone has unique lived experience to share. All you need is an opportunity and personal permission.</p>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener" class="card-link">Your opportunity →</a>
        </div>
      </article>

      <article class="card">
        <img src="https://static.wixstatic.com/media/111174_d9b8647f47b84db6a919f7c781eec614~mv2.png" alt="Parallaxx Transformations" style="width:100%;height:200px;object-fit:cover;display:block">
        <div class="card-body">
          <span class="pill">The deeper work</span>
          <h3>Parallaxx Transformations</h3>
          <p>For deeper more personal development experiences, when you want to go beyond that which you can alone.</p>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener" class="card-link">Learn more →</a>
        </div>
      </article>

      <article class="card quiet">
        <img src="https://static.wixstatic.com/media/111174_dbad337bc86a4b009f447c8f56a1bda9~mv2.jpg" alt="Filming a GIVE IT ALL talk on a phone" style="width:100%;height:200px;object-fit:cover;display:block">
        <div class="card-body">
          <span class="pill">Virtual</span>
          <h3>Virtual Membership</h3>
          <p>Plug into our global community and join our live virtual experiences from home or while traveling.</p>
          <span class="card-link">Coming soon</span>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============ NEXT EXPERIENCE (the front door) ============ -->
<section class="band-navy sec speckle" id="next">
  <div class="wrap">
    <div class="next-head">
      <div>
        <p class="label reveal">Flagship Experience</p>
        <div class="rule reveal" style="margin-bottom:22px;max-width:420px"></div>
        <h2 class="reveal">Your people are <span class="gold">here</span></h2>
        <p class="lead reveal" style="transition-delay:.06s;margin-top:20px">Speakers to bring you in, networking to make you stay, a full experience that will be the highlight of your month.</p>
        <div class="next-meta reveal" style="transition-delay:.1s">
          <span><b style="color:var(--ink)">4th Thurs Monthly</b> · Canggu, Bali</span>
          <span class="sep"></span>
          <span class="gold" style="font-weight:700">Limited seats</span>
        </div>
        <div class="reveal" style="transition-delay:.14s">
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">See the next event <span class="arrow">→</span></a>
        </div>
      </div>
    </div>

    <div class="next-teaser reveal" style="transition-delay:.1s;position:relative;border-radius:var(--r-card);overflow:hidden">
      <img src="https://static.wixstatic.com/media/111174_95d86747071d4675995ab2c0baa92e60~mv2.jpg" alt="The GIVE IT ALL community on stage, voted #1 best networking event" style="width:100%;min-height:clamp(300px,46vh,460px);max-height:460px;object-fit:cover;display:block">
      <div aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(4,18,42,.5) 0%,rgba(4,18,42,.22) 42%,rgba(4,18,42,.62) 100%)"></div>
    </div>
  </div>
</section>

<!-- ============ JOIN THE COMMUNITY - HIDDEN until membership/virtual is live. Restore by removing the comment wrappers. ============ -->
<!--
<section class="band-deep sec speckle" id="join">
  <div class="wrap">
    <div class="join-grid">
      <div>
        <p class="label reveal">Join from anywhere</p>
        <div class="rule reveal" style="margin-bottom:24px;max-width:340px"></div>
        <h2 class="reveal">Not in Bali? You're still <span class="gold">one of us.</span></h2>
        <p class="lead reveal" style="transition-delay:.06s;margin-top:18px">The room is the most tangible way in, but the world doesn't wait for a flight. Join free and you're part of it from anywhere.</p>
        <div class="join-points reveal" style="transition-delay:.1s">
          <div class="join-point"><span class="dot"></span><p><b>The community.</b> <span>Honest people across Medellín, Sofia and Bali, and everywhere in between.</span></p></div>
          <div class="join-point"><span class="dot"></span><p><b>The directory.</b> <span>Find the people worth knowing, by what they're building, not their job title.</span></p></div>
          <div class="join-point"><span class="dot"></span><p><b>Personal introductions.</b> <span>We connect you to the handful of members you'd actually want to meet.</span></p></div>
        </div>
        <div class="reveal" style="transition-delay:.14s">
          <a href="#" class="btn btn-gold">Join the Members Area <span class="arrow">→</span></a>
        </div>
      </div>
      <div class="ph reveal" style="transition-delay:.08s"><span class="ph-tag">community · faces across cities, candid, warm</span></div>
    </div>
  </div>
</section>
-->

<!-- ============ PROOF / COMMUNITY ============ -->
<section class="band-navy sec speckle" id="proof">
  <div class="wrap">
    <p class="label reveal">The community</p>
    <div class="rule reveal" style="margin-bottom:30px"></div>

    <div class="proof-grid">
      <div class="quote reveal">
        <span class="stars">★★★★★</span>
        <blockquote>"It's not about ego or selling yourself. It's about connection, personal stories, authenticity, being perfectly imperfect."</blockquote>
        <div class="by">
          <img class="avatar" src="https://static.wixstatic.com/media/111174_ec3b1cbc67db434880e712659695a72a~mv2.jpg" alt="Elena" style="object-fit:cover;border:1px solid rgba(232,198,95,.4)">
          <div>
            <div class="name">Elena</div>
            <div class="role">Reiki Master · Coach</div>
          </div>
        </div>
      </div>

      <div class="quote reveal" style="transition-delay:.06s">
        <span class="stars">★★★★★</span>
        <blockquote>"Just showing up, I met incredible people, new friends, and real business opportunities. These are my people."</blockquote>
        <div class="by">
          <img class="avatar" src="https://static.wixstatic.com/media/111174_d281997d88bd4e2780bfc7cc53ac633d~mv2.jpg" alt="Jody" style="object-fit:cover;border:1px solid rgba(232,198,95,.4)">
          <div>
            <div class="name">Jody</div>
            <div class="role">Speaker Trainer</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ============ FOUNDERS (warm light band) ============ -->
<section class="band-cream sec-sm speckle">
  <div class="wrap">
    <div class="founders">
      <img class="reveal" src="https://static.wixstatic.com/media/111174_ecc8b5e7cf974bc8972722de234b06b7~mv2.jpg" alt="Daniel and Luiza, founders of GIVE IT ALL" style="width:100%;border-radius:var(--r-card);min-height:380px;object-fit:cover;display:block">
      <div>
        <h2 class="reveal">We craved other humans to connect with.</h2>
        <p class="reveal" style="transition-delay:.06s">For years, networking felt the same. Business cards shoved down your throat, conversations you didn't want to be in, everyone selling something to someone who never asked. We wanted real connection and real collaboration, with other raw, real, vulnerable humans.</p>
        <p class="reveal" style="transition-delay:.08s">And for Luiza, the women in the room were most often 'just his plus one'. She asked, where are the others who also know they're meant for more?</p>
        <p class="reveal" style="transition-delay:.1s">We believe that if you think you can do better, it's your responsibility to. So we did. The fundamentals are simple: connect as humans again. Because isn't that what we crave the most?</p>
        <p class="names reveal" style="transition-delay:.1s">Daniel &amp; Luiza</p>
        <div class="reveal" style="transition-delay:.14s;margin-top:8px">
          <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener" class="link-quiet">Our story →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CLOSING CALL ============ -->
<section class="closing sec speckle">
  <div class="closing-bg" aria-hidden="true" style="background:linear-gradient(rgba(4,18,42,.84),rgba(4,18,42,.9)),url('https://static.wixstatic.com/media/111174_85dc1010f46c4919b825227bd9ec2ffc~mv2.jpg') center/cover no-repeat"></div>
  <div class="wrap">
    <p class="eyebrow reveal">Your invitation</p>
    <h2 class="reveal" style="transition-delay:.06s">Your people, your room, <span class="gold">your experience.</span></h2>
    <p class="lead reveal" style="transition-delay:.12s">Real human experience, real vulnerability, real connection that goes beyond the room.</p>
    <div class="closing-actions reveal" style="transition-delay:.18s">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">See the next event <span class="arrow">→</span></a>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="speckle">
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="#top" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
        <p class="lead">Connect as humans again to improve all relationships with each other.</p>
      </div>
      <div class="foot-social">
        <a href="https://www.instagram.com/giveitall_event" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/giveitallevent" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.youtube.com/@giveitall-speakerandnetworking" target="_blank" rel="noopener">YouTube</a>
        <a href="https://www.linkedin.com/in/daniel-reconnect-you/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h4>Experiences</h4>
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event">Next event</a>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
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
          <a href="#proof">Community</a>
          <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
          <a href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">Partner with us</a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 GIVE IT ALL. All rights reserved.</span>
    </div>
  </div>
</footer>

`;
  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link'); l.id='gia-fonts'; l.rel='stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }
  class GIAHomePage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow; var host = this;
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      var collapseAncestors = function(){
        try{
          var hostH = host.getBoundingClientRect().height;
          if(hostH < 50) return;
          var n = host.parentElement, guard = 0;
          while(n && n !== document.body && guard++ < 14){
            if(n.getBoundingClientRect().height > hostH + 400){ n.style.height='auto'; n.style.minHeight='0px'; }
            n = n.parentElement;
          }
        }catch(e){}
      };
      requestAnimationFrame(collapseAncestors);
      [400,1200,2500].forEach(function(t){ setTimeout(collapseAncestors, t); });
      window.addEventListener('resize', collapseAncestors, {passive:true});


  // nav scrolled state + persistent trust chip
  const nav = root.getElementById('nav');
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // mobile menu toggle
  const menuBtn = root.querySelector('.menu-btn');
  if(menuBtn){
    menuBtn.addEventListener('click', () => nav.classList.toggle('menu-open'));
    root.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('menu-open')));
  }

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  root.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // carousel controls
  const carousel = root.getElementById('carousel');
  const step = () => Math.min(carousel.clientWidth * 0.85, 380);
  root.getElementById('prevBtn').addEventListener('click', () => carousel.scrollBy({left:-step(),behavior:'smooth'}));
  root.getElementById('nextBtn').addEventListener('click', () => carousel.scrollBy({left:step(),behavior:'smooth'}));
    }
  }
  customElements.define('gia-home-page', GIAHomePage);
})();
