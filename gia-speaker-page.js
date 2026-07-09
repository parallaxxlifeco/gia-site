/* GIVE IT ALL — Speaker page, Wix Custom Element. Tag: <gia-speaker-page> */
(function(){
  if (customElements.get('gia-speaker-page')) return;
  var CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :host{
      --navy:#061938; --navy-deep:#04122A; --navy-abyss:#030C1E; --navy-card:#0D2350;
      --gold:#E8C65F; --gold-deep:#C9A646;
      --ink:#F4F6FB; --body:#E2E7F1; --steel:#B1BFD7; --cream:#F2EBD9;
      --maxw:1240px; --maxw-read:760px; --gutter:clamp(20px,5vw,64px);
      --r-card:18px; --r-pill:999px; --ease:cubic-bezier(.22,.61,.36,1);
    }

    html{ scroll-behavior:smooth; }
    :host{ display:block;
      background:var(--navy-deep); color:var(--body);
      font-family:'Montserrat',sans-serif; font-size:16px; font-weight:400; line-height:1.55; overflow-x:hidden;
      -webkit-font-smoothing:antialiased;
    }
    .prose p{ font-size:1em; }
    a{ color:inherit; text-decoration:none; }
    img{ display:block; max-width:100%; }
    h1,h2,h3{ color:var(--ink); font-weight:800; line-height:1.04; letter-spacing:-.018em; text-wrap:balance; }
    .accent{ color:var(--gold); }

    /* ── shared primitives ── */
    .wrap{ max-width:var(--maxw); margin:0 auto; padding-inline:var(--gutter); }
    .read{ max-width:var(--maxw-read); margin-inline:auto; }
    .sec{ padding-block:clamp(50px,7vh,92px); }
    .sec-sm{ padding-block:clamp(38px,5vh,60px); }
    .band-navy{ background:var(--navy); }
    .band-deep{ background:var(--navy-deep); }
    .band-abyss{ background:var(--navy-abyss); }

    .label{ font-size:.72em; letter-spacing:.22em; text-transform:uppercase; color:var(--steel); font-weight:600; }
    .eyebrow{ font-family:'Caveat',cursive; font-weight:600; color:var(--gold); font-size:clamp(1.5em,3.4vw,2.05em); line-height:1; display:block; }
    .sec-head{ margin-bottom:clamp(28px,4vw,46px); }
    .sec-head h2{ font-size:clamp(1.55em,3vw,2.35em); margin-top:.35em; }
    .lead{ color:var(--body); }
    .muted{ color:var(--steel); }

    .logo{ display:flex; align-items:center; gap:.6em; font-weight:800; letter-spacing:-.02em; font-size:1.12em; color:var(--ink); }
    .logo .mark{ width:30px; height:30px; border-radius:8px; background:var(--gold); color:var(--navy); display:grid; place-items:center; font-size:.95em; font-weight:800; flex:0 0 auto; }

    .btn{ display:inline-flex; align-items:center; gap:.6em; font-family:inherit; font-weight:700; font-size:1em; border-radius:var(--r-pill); padding:1.05em 1.9em; cursor:pointer; border:none; transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease); white-space:nowrap; }
    .btn .arrow{ transition:transform .25s var(--ease); }
    .btn:hover .arrow{ transform:translateX(4px); }
    .btn-gold{ background:var(--gold); color:var(--navy); box-shadow:0 10px 30px -8px rgba(232,198,95,.5); animation:btnPulse 2.8s ease-out infinite; }
    .btn-gold:hover{ transform:translateY(-2px); box-shadow:0 16px 40px -10px rgba(232,198,95,.6); animation:none; }
    .btn-ghost{ background:transparent; color:var(--ink); border:1px solid rgba(177,191,215,.35); }
    .btn-ghost:hover{ border-color:var(--gold); color:var(--gold); }
    @keyframes btnPulse{
      0%{ box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5); }
      70%{ box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0); }
      100%{ box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0); }
    }
    @media(prefers-reduced-motion:reduce){ .btn-gold{ animation:none; } html{scroll-behavior:auto;} }

    /* ── speckle texture ── */
    .speckle{ position:relative; }
    .speckle::before{
      content:""; position:absolute; inset:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
      opacity:.035; pointer-events:none; mix-blend-mode:screen; z-index:0;
    }
    .speckle > *{ position:relative; z-index:1; }

    /* ── NAV (shared) ── */
    header.nav{ position:fixed; top:0; left:0; right:0; z-index:100; transition:background .35s var(--ease),border-color .35s var(--ease),padding .35s var(--ease); border-bottom:1px solid transparent; }
    header.nav.scrolled{ background:transparent; backdrop-filter:none; -webkit-backdrop-filter:none; border-bottom-color:transparent; }
    .nav-minimal .logo{ text-shadow:0 1px 12px rgba(3,8,20,.7); }
    .nav-inner{ max-width:var(--maxw); margin:0 auto; padding:18px var(--gutter); display:flex; align-items:center; justify-content:space-between; gap:20px; }
    .nav-links{ display:flex; align-items:center; gap:30px; }
    .nav-links a{ font-size:.92em; font-weight:500; color:var(--steel); transition:color .2s; white-space:nowrap; }
    .nav-links a:hover,.nav-links a.active{ color:var(--ink); }
    .nav-item{ position:relative; display:flex; align-items:center; }
    .nav-drop-toggle{ background:none; border:none; font-family:inherit; font-size:.92em; font-weight:500; color:var(--steel); cursor:pointer; display:inline-flex; align-items:center; gap:.35em; transition:color .2s; white-space:nowrap; padding:0; }
    .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{ color:var(--ink); }
    .nav-drop-toggle .caret{ font-size:.7em; transition:transform .25s var(--ease); }
    .nav-item:hover .nav-drop-toggle .caret,.nav-item:focus-within .nav-drop-toggle .caret{ transform:rotate(180deg); }
    .nav-drop{ position:absolute; top:100%; left:50%; transform:translateX(-50%) translateY(8px); min-width:236px; display:flex; flex-direction:column; gap:2px; background:rgba(13,35,80,.97); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid rgba(177,191,215,.16); border-radius:14px; padding:10px; box-shadow:0 22px 54px -18px rgba(0,0,0,.65); opacity:0; visibility:hidden; pointer-events:none; transition:opacity .2s var(--ease),transform .2s var(--ease); z-index:95; }
    .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{ opacity:1; visibility:visible; pointer-events:auto; transform:translateX(-50%) translateY(0); }
    .nav-drop a{ display:flex; justify-content:space-between; align-items:center; gap:14px; padding:9px 12px; border-radius:9px; font-size:.9em; font-weight:500; color:var(--body); white-space:nowrap; transition:background .2s,color .2s; }
    .nav-drop a:hover{ background:rgba(232,198,95,.1); color:var(--gold); }
    .nav-drop a.is-soon{ color:var(--steel); }
    .nav-drop a.is-soon span{ font-size:.6em; letter-spacing:.12em; text-transform:uppercase; border:1px solid rgba(177,191,215,.35); border-radius:999px; padding:.15em .6em; font-weight:700; }
    .nav-cta{ display:flex; align-items:center; gap:18px; }
    .nav-cta .btn{ padding:.7em 1.3em; font-size:.9em; }
    .menu-btn{ display:none; background:none; border:none; color:var(--body); cursor:pointer; flex-direction:column; gap:5px; padding:6px; }
    .menu-btn span{ display:block; width:24px; height:2px; background:var(--body); border-radius:2px; }
    @media(max-width:880px){
      header.nav{ background:transparent; backdrop-filter:none; -webkit-backdrop-filter:none; border-bottom:none; }
      .nav-inner{ padding:10px var(--gutter); }
      .logo{ font-size:1em; }
      .logo .mark{ width:26px; height:26px; font-size:.85em; }
      .nav-cta .btn{ padding:.62em 1.05em; font-size:.82em; }
      .nav-links{ display:none; position:absolute; top:100%; left:0; right:0; flex-direction:column; align-items:stretch; gap:2px; background:rgba(6,25,56,.98); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-bottom:1px solid rgba(177,191,215,.14); padding:12px var(--gutter) 22px; }
      .nav.menu-open .nav-links{ display:flex; }
      .nav-links > a{ padding:13px 4px; font-size:1.05em; border-bottom:1px solid rgba(177,191,215,.08); }
      .nav-item{ flex-direction:column; align-items:stretch; }
      .nav-drop-toggle{ padding:13px 4px; font-size:1.05em; justify-content:space-between; width:100%; }
      .nav-item .nav-drop{ position:static; transform:none; opacity:1; visibility:visible; pointer-events:auto; background:transparent; border:none; box-shadow:none; backdrop-filter:none; min-width:0; padding:2px 0 10px 12px; margin:0; }
      .nav-item .nav-drop a{ font-size:.98em; padding:9px 8px; }
      .nav-drop-toggle .caret{ display:none; }
      .menu-btn{ display:flex; }
    }

    /* ── HERO ── */
    .hero{ position:relative; min-height:clamp(560px,90vh,860px); display:flex; align-items:flex-end; overflow:hidden; }
    .hero-bg{ position:absolute; inset:0; }
    .hero-bg img{ width:100%; height:100%; object-fit:cover; object-position:center 38%; }
    .hero-bg::after{ content:""; position:absolute; inset:0; background:
      linear-gradient(180deg, rgba(4,18,42,.5) 0%, rgba(4,18,42,.26) 30%, rgba(4,18,42,.54) 72%, rgba(4,18,42,.84) 100%),
      linear-gradient(95deg, rgba(4,18,42,.86) 0%, rgba(4,18,42,.5) 38%, rgba(4,18,42,.14) 68%, rgba(4,18,42,0) 100%),
      radial-gradient(120% 90% at 12% 92%, rgba(3,10,26,.6) 0%, rgba(3,10,26,0) 55%); }
    .hero-inner{ position:relative; z-index:2; width:100%; padding-bottom:clamp(48px,8vh,96px); padding-top:140px; }
    .hero h1{ font-size:clamp(2.05em,4.7vw,3.8em); margin:.28em 0 .5em; max-width:none; text-shadow:0 2px 28px rgba(3,8,20,.5); }
    .hero h1 .accent{ text-shadow:0 1px 3px rgba(3,8,20,.55), 0 2px 18px rgba(3,8,20,.85); }
    .hero h1 br{ display:none; }
    @media(min-width:760px){ .hero h1{ max-width:none; } .hero h1 br{ display:inline; } }
    .hero .hero-lead{ font-size:clamp(1.02em,1.5vw,1.18em); color:var(--ink); max-width:50ch; margin-bottom:1.8em; text-shadow:0 1px 14px rgba(3,8,20,.7); }
    .hero-cta-row{ display:flex; flex-wrap:wrap; gap:16px; align-items:center; }
    .hero-fact{ margin-top:clamp(22px,3vw,34px); font-size:.84em; letter-spacing:.14em; text-transform:uppercase; color:var(--steel); text-shadow:0 1px 12px rgba(3,8,20,.7); }
    .hero .eyebrow{ text-shadow:0 1px 16px rgba(3,8,20,.55); }
    .hero-fact b{ color:var(--ink); font-weight:700; }

    /* ── manifesto / reading sections ── */
    .stmt{ font-size:clamp(1.5em,3.6vw,2.5em); font-weight:700; line-height:1.18; color:var(--ink); letter-spacing:-.01em; }
    .prose p{ margin-bottom:1.15em; }
    .prose p:last-child{ margin-bottom:0; }
    .prose .accent{ font-weight:600; }

    /* ── "regular gig" editorial section ── */
    .gig-grid{ display:grid; grid-template-columns:.82fr 1.18fr; gap:clamp(30px,5vw,72px); align-items:stretch; }
    .gig-head{ display:flex; flex-direction:column; }
    .gig-head .sec-head{ margin-bottom:0; }
    .gig-reel{ margin-top:clamp(26px,3.5vw,40px); width:100%; max-width:300px; flex:1 1 auto; display:flex; min-height:340px; }
    .gig-reel .reel-thumb{ width:100%; height:100%; aspect-ratio:auto; }
    @media(max-width:820px){ .gig-reel{ margin-inline:auto; display:block; flex:0 0 auto; min-height:0; } .gig-reel .reel-thumb{ aspect-ratio:9/16; height:auto; } }
    .gig-body > p{ margin-bottom:1.2em; color:var(--body); font-size:1.02em; line-height:1.7; }
    .gig-intro{ color:var(--ink); }
    .gig-stmt{ color:var(--body); border-left:2px solid var(--gold); padding-left:clamp(16px,1.6vw,22px); margin:1.6em 0; }
    .gig-stmt .accent{ color:var(--gold); }
    .gig-caveat{ border:1px solid rgba(232,198,95,.28); background:rgba(232,198,95,.045); border-radius:var(--r-card); padding:clamp(20px,2.6vw,28px); margin:1.7em 0 0; }
    .gig-caveat .label{ color:var(--gold); display:block; margin-bottom:.7em; }
    .gig-caveat p{ color:var(--body); margin:0; font-size:1.02em; line-height:1.7; }
    .gig-caveat .accent{ color:var(--gold); font-weight:600; }
    @media(max-width:820px){ .gig-grid{ grid-template-columns:1fr; } .gig-head{ position:static; } }

    /* ── reasons ── */
    .img-pair{ display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:clamp(34px,4.5vw,54px); }
    .img-pair img{ width:100%; aspect-ratio:3/2; object-fit:cover; border-radius:var(--r-card); }
    .reasons-layout{ display:grid; grid-template-columns:1.3fr .7fr; gap:clamp(32px,5vw,72px); align-items:stretch; }
    .reasons-media{ display:flex; flex-direction:column; gap:clamp(16px,2vw,24px); }
    .reasons-media img{ width:100%; flex:1 1 0; min-height:0; object-fit:cover; border-radius:var(--r-card); border:1px solid rgba(177,191,215,.12); cursor:pointer; transition:transform .4s var(--ease); }
    .reasons-media img:hover{ transform:translateY(-3px); }
    @media(max-width:860px){
      .reasons-layout{ grid-template-columns:1fr; }
      .reasons-media{ flex-direction:row; overflow-x:auto; scroll-snap-type:x mandatory; gap:12px; margin-top:6px; scrollbar-width:none; }
      .reasons-media::-webkit-scrollbar{ display:none; }
      .reasons-media img{ flex:0 0 72%; min-height:0; scroll-snap-align:center; aspect-ratio:4/5; }
    }
    .reasons{ display:block; max-width:none; }
    .reason{ position:relative; display:grid; grid-template-columns:auto 1fr; column-gap:clamp(18px,2.4vw,28px); padding-bottom:clamp(26px,3.6vw,42px); }
    .reason:last-child{ padding-bottom:0; }
    .reason:not(:last-child)::before{ content:""; position:absolute; left:22px; top:54px; bottom:-2px; width:2px; transform:translateX(-50%); background:linear-gradient(180deg, rgba(232,198,95,.85), rgba(232,198,95,.16)); }
    .reason .num{ grid-column:1; grid-row:1 / span 2; align-self:start; width:44px; height:44px; border-radius:50%; background:var(--gold); color:var(--navy); font-weight:800; font-size:1.05em; display:grid; place-items:center; position:relative; z-index:1; box-shadow:0 6px 18px -6px rgba(232,198,95,.6); }
    .reason h3{ grid-column:2; grid-row:1; font-size:1.2em; letter-spacing:-.01em; min-height:44px; display:flex; align-items:center; }
    .reason p{ grid-column:2; grid-row:2; color:var(--steel); font-size:.97em; line-height:1.64; margin:6px 0 0; max-width:60ch; }
    @media(max-width:560px){ .reason h3{ min-height:0; } .reason:not(:last-child)::before{ top:50px; } }

    /* ── value / no-brainer ── */
    .split{ display:grid; grid-template-columns:1.05fr .95fr; gap:clamp(30px,5vw,64px); align-items:center; }
    .split img{ width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:var(--r-card); }
    .value-box{ border:1px solid rgba(232,198,95,.28); background:rgba(232,198,95,.05); border-radius:var(--r-card); padding:clamp(22px,3vw,32px); }
    .value-box .label{ color:var(--gold); }

    /* ── love / not-love ── */
    .fit-grid{ display:grid; grid-template-columns:1fr 1fr; gap:clamp(18px,3vw,28px); }
    .fit-col{ border:1px solid rgba(177,191,215,.16); border-radius:var(--r-card); padding:clamp(22px,3vw,30px); background:rgba(255,255,255,.02); }
    .fit-col h3{ font-size:1.05em; letter-spacing:.04em; text-transform:uppercase; margin-bottom:18px; }
    .fit-col.love h3{ color:var(--gold); }
    .fit-col ul{ list-style:none; display:grid; gap:11px; }
    .fit-col li{ display:flex; gap:11px; align-items:flex-start; font-size:.96em; color:var(--body); }
    .fit-col li .ic{ flex:0 0 auto; font-weight:800; }
    .fit-col.love li .ic{ color:var(--gold); }
    .fit-col.nope li .ic{ color:var(--steel); }
    .fit-col.nope li{ color:var(--steel); }

    /* ── full-bleed "we select" section ── */
    .select-sec{ position:relative; overflow:hidden; }
    .select-bg{ position:absolute; inset:0; z-index:0; }
    .select-bg img{ width:100%; height:100%; object-fit:cover; object-position:center; }
    .select-bg::after{ content:""; position:absolute; inset:0; background:
      linear-gradient(180deg, rgba(4,18,42,.86) 0%, rgba(4,18,42,.74) 42%, rgba(4,18,42,.9) 100%),
      radial-gradient(120% 80% at 50% 50%, rgba(3,12,30,0) 30%, rgba(3,12,30,.55) 100%); }
    .select-sec > .wrap{ position:relative; z-index:1; }
    .select-sec .fit-col{ background:rgba(6,18,42,.62); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); border-color:rgba(232,198,95,.2); box-shadow:0 24px 60px -28px rgba(0,0,0,.7); }
    .select-sec .sec-head .label{ color:var(--gold); }

    /* ── full-bleed copy section (no-brainer) ── */
    .bleed-sec{ position:relative; overflow:hidden; }
    .bleed-bg{ position:absolute; inset:0; z-index:0; }
    .bleed-bg img{ width:100%; height:100%; object-fit:cover; object-position:center; }
    .bleed-bg::after{ content:""; position:absolute; inset:0; background:
      linear-gradient(180deg, rgba(4,18,42,.7) 0%, rgba(4,18,42,.55) 50%, rgba(4,18,42,.8) 100%),
      radial-gradient(95% 85% at 50% 50%, rgba(3,10,26,0) 35%, rgba(3,10,26,.55) 100%); }
    .bleed-sec > .wrap{ position:relative; z-index:1; }
    .bleed-copy{ max-width:660px; margin-inline:auto; text-align:center; background:rgba(6,18,42,.6); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(232,198,95,.18); border-radius:var(--r-card); padding:clamp(30px,4vw,52px); box-shadow:0 30px 70px -30px rgba(0,0,0,.72); }
    .bleed-copy h2{ margin-inline:auto; max-width:20ch; }
    .bleed-copy .prose p{ color:var(--body); max-width:56ch; margin-inline:auto; }

    /* ── pricing ── */
    .price-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(18px,2.4vw,26px); align-items:stretch; }
    .price-card{ position:relative; display:flex; flex-direction:column; border:1px solid rgba(177,191,215,.16); border-radius:var(--r-card); background:var(--navy-card); padding:clamp(24px,2.6vw,32px); }
    .price-card.featured{ border-color:var(--gold); box-shadow:0 18px 50px -22px rgba(232,198,95,.5); }
    .price-badge{ position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:var(--gold); color:var(--navy); font-size:.64em; font-weight:800; letter-spacing:.14em; text-transform:uppercase; padding:.5em 1.1em; border-radius:var(--r-pill); white-space:nowrap; }
    .price-name{ font-size:.78em; letter-spacing:.2em; text-transform:uppercase; color:var(--steel); font-weight:700; }
    .price-amt{ font-size:clamp(2.1em,3.4vw,2.7em); font-weight:800; color:var(--gold); margin:.18em 0 .1em; letter-spacing:-.02em; }
    .price-sub{ font-size:.9em; color:var(--body); min-height:2.6em; margin-bottom:18px; }
    .price-incl{ font-size:.7em; letter-spacing:.14em; text-transform:uppercase; color:var(--steel); font-weight:700; margin-bottom:12px; }
    .price-card ul{ list-style:none; display:grid; gap:10px; margin-bottom:24px; }
    .price-card li{ display:flex; gap:10px; align-items:flex-start; font-size:.92em; color:var(--body); }
    .price-card li .ic{ color:var(--gold); font-weight:800; flex:0 0 auto; }
    .price-card li a{ color:var(--gold); text-decoration:underline; text-underline-offset:2px; }
    .price-card .btn{ margin-top:auto; justify-content:center; width:100%; font-size:.92em; padding:.95em 1.4em; }
    .price-note{ text-align:center; color:var(--steel); font-size:.95em; max-width:60ch; margin:clamp(26px,3vw,38px) auto 0; }

    /* ── testimonial ── */
    .testi{ display:grid; grid-template-columns:auto 1fr; gap:clamp(26px,4vw,48px); align-items:center; }
    .testi img{ width:clamp(150px,18vw,220px); aspect-ratio:1; object-fit:cover; border-radius:50%; border:2px solid rgba(232,198,95,.4); }
    .testi blockquote{ font-size:clamp(1.05em,1.7vw,1.32em); line-height:1.5; color:var(--ink); font-weight:500; font-style:italic; }
    .testi cite{ display:block; margin-top:1em; font-style:normal; font-weight:700; color:var(--gold); letter-spacing:.04em; }

    /* ── speaker video reels ── */
    .vid-reels{ display:flex; justify-content:center; flex-wrap:wrap; gap:clamp(20px,3vw,44px); }
    .reel-card{ width:clamp(240px,24vw,300px); }
    .reel-thumb{ position:relative; aspect-ratio:9/16; border-radius:var(--r-card); overflow:hidden; cursor:pointer; background:var(--navy-card); border:1px solid rgba(177,191,215,.14); }
    .reel-thumb img,.reel-thumb video{ width:100%; height:100%; object-fit:cover; transition:transform .5s var(--ease); }
    .reel-card:hover .reel-thumb img,.reel-card:hover .reel-thumb video{ transform:scale(1.04); }
    .reel-thumb iframe{ position:absolute; inset:0; width:100%; height:100%; border:0; }
    .reel-thumb.is-playing{ cursor:default; }
    .reel-thumb.is-playing::after{ display:none; }
    .reel-card:hover .reel-thumb.is-playing video{ transform:none; }
    .reel-thumb::after{ content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(3,12,30,.12) 0%, rgba(3,12,30,0) 38%, rgba(3,12,30,.72) 100%); }
    .reel-play{ position:absolute; inset:0; margin:auto; width:56px; height:56px; border-radius:50%; background:var(--gold); display:grid; place-items:center; z-index:2; box-shadow:0 0 0 8px rgba(232,198,95,.1),0 0 34px 6px rgba(232,198,95,.28); transition:transform .25s var(--ease); }
    .reel-card:hover .reel-play{ transform:scale(1.09); }
    .reel-play::before{ content:""; width:0; height:0; border-style:solid; border-width:9px 0 9px 15px; border-color:transparent transparent transparent var(--navy); margin-left:3px; }
    .dur-chip{ position:absolute; left:12px; bottom:12px; z-index:2; font-size:.72em; font-weight:600; color:var(--ink); background:rgba(3,12,30,.6); padding:.3em .7em; border-radius:var(--r-pill); }
    .reel-below{ text-align:center; margin-top:15px; }
    .reel-below .stars{ color:var(--gold); font-size:.85em; letter-spacing:2px; }
    .reel-below .nm{ font-weight:700; color:var(--ink); margin-top:5px; }
    .reel-below .role{ font-size:.85em; color:var(--steel); margin-top:2px; }
    .vid-quote{ max-width:var(--maxw-read); margin:clamp(34px,5vw,56px) auto 0; text-align:center; }
    .vid-quote blockquote{ font-size:clamp(1.02em,1.6vw,1.25em); line-height:1.55; color:var(--ink); font-style:italic; font-weight:500; }
    .vid-quote cite{ display:block; margin-top:1em; font-style:normal; font-weight:700; color:var(--gold); letter-spacing:.04em; }

    /* ── reel modal ── */
    #reelModal{ position:fixed; inset:0; z-index:200; display:none; align-items:center; justify-content:center; background:rgba(3,8,20,.88); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); padding:24px; }
    #reelModal.open{ display:flex; }
    .reel-frame{ position:relative; width:min(92vw,calc(82vh*9/16)); aspect-ratio:9/16; max-height:86vh; background:#000; border-radius:16px; overflow:hidden; box-shadow:0 30px 80px -20px rgba(0,0,0,.7); }
    .reel-frame iframe,.reel-frame video{ position:absolute; inset:0; width:100%; height:100%; border:0; object-fit:contain; background:#000; }
    .reel-frame .placeholder{ position:absolute; inset:0; display:grid; place-items:center; text-align:center; color:var(--steel); padding:30px; font-size:.95em; line-height:1.6; }
    .reel-close{ position:absolute; top:16px; right:22px; z-index:210; background:none; border:none; color:var(--ink); font-size:2.2em; cursor:pointer; line-height:1; }

    /* ── gallery slider ── */
    .gal-wrap{ position:relative; margin-top:clamp(30px,4vw,46px); }
    .gal-strip{ display:flex; gap:clamp(12px,1.4vw,18px); overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; padding:4px clamp(20px,5vw,64px); scrollbar-width:none; }
    .gal-strip::-webkit-scrollbar{ display:none; }
    .shot{ flex:0 0 auto; width:clamp(258px,32vw,420px); aspect-ratio:3/2; border-radius:var(--r-card); overflow:hidden; scroll-snap-align:center; cursor:pointer; border:1px solid rgba(177,191,215,.14); padding:0; background:none; position:relative; }
    .shot img{ width:100%; height:100%; object-fit:cover; transition:transform .5s var(--ease); }
    .shot:hover img{ transform:scale(1.05); }
    .shot .cap{ position:absolute; left:12px; bottom:12px; z-index:2; font-size:.72em; font-weight:600; letter-spacing:.04em; color:var(--ink); background:rgba(3,12,30,.6); padding:.3em .75em; border-radius:var(--r-pill); opacity:0; transition:opacity .25s; }
    .shot:hover .cap{ opacity:1; }
    .gal-arrow{ position:absolute; top:50%; transform:translateY(-50%); z-index:5; width:52px; height:52px; border-radius:50%; border:1px solid rgba(177,191,215,.2); background:rgba(6,25,56,.82); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); color:var(--ink); font-size:1.7em; line-height:1; cursor:pointer; display:grid; place-items:center; transition:background .2s,border-color .2s,color .2s; }
    .gal-arrow:hover{ border-color:var(--gold); color:var(--gold); }
    .gal-prev{ left:clamp(8px,2vw,26px); }
    .gal-next{ right:clamp(8px,2vw,26px); }
    @media(max-width:620px){ .gal-arrow{ display:none; } }

    /* ── image lightbox ── */
    #lightbox{ position:fixed; inset:0; z-index:200; display:none; align-items:center; justify-content:center; background:rgba(3,8,20,.92); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); padding:24px; }
    #lightbox.open{ display:flex; }
    #lightbox img{ max-width:92vw; max-height:86vh; border-radius:12px; object-fit:contain; box-shadow:0 30px 80px -20px rgba(0,0,0,.7); }
    .lb-close{ position:absolute; top:16px; right:24px; font-size:2.3em; color:var(--ink); background:none; border:none; cursor:pointer; line-height:1; z-index:6; }
    .lb-nav{ position:absolute; top:50%; transform:translateY(-50%); width:54px; height:54px; border-radius:50%; border:1px solid rgba(177,191,215,.25); background:rgba(6,25,56,.7); color:var(--ink); font-size:1.9em; line-height:1; cursor:pointer; display:grid; place-items:center; transition:border-color .2s,color .2s; }
    .lb-nav:hover{ border-color:var(--gold); color:var(--gold); }
    .lb-prev{ left:clamp(10px,3vw,28px); } .lb-next{ right:clamp(10px,3vw,28px); }

    /* ── mini image slider (no-brainer) ── */
    .mini-gal{ position:relative; border-radius:var(--r-card); overflow:hidden; border:1px solid rgba(177,191,215,.12); }
    .mini-strip{ display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; scrollbar-width:none; aspect-ratio:4/5; }
    .mini-strip::-webkit-scrollbar{ display:none; }
    .mini-strip img{ flex:0 0 100%; width:100%; height:100%; object-fit:cover; scroll-snap-align:center; border-radius:0; aspect-ratio:auto; }
    .mini-arrow{ width:42px; height:42px; font-size:1.4em; }

    /* ── FAQ ── */
    .faq-list{ max-width:var(--maxw-read); margin-inline:auto; }
    .qa{ border-bottom:1px solid rgba(177,191,215,.14); }
    .qa button{ width:100%; background:none; border:none; cursor:pointer; font-family:inherit; color:var(--ink); font-size:1.04em; font-weight:600; text-align:left; padding:22px 40px 22px 0; position:relative; }
    .qa button::after{ content:"+"; position:absolute; right:4px; top:50%; transform:translateY(-50%); font-size:1.4em; color:var(--gold); font-weight:400; transition:transform .3s var(--ease); }
    .qa.open button::after{ transform:translateY(-50%) rotate(45deg); }
    .qa .ans{ max-height:0; overflow:hidden; transition:max-height .35s var(--ease); }
    .qa .ans p{ padding:0 0 22px; color:var(--steel); font-size:.97em; line-height:1.7; }

    /* ── final CTA ── */
    .final{ position:relative; overflow:hidden; text-align:center; }
    .final-bg{ position:absolute; inset:0; }
    .final-bg img{ width:100%; height:100%; object-fit:cover; object-position:center 42%; }
    .final-bg::after{ content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(3,12,30,.78), rgba(3,12,30,.9)); }
    .final-inner{ position:relative; z-index:2; }
    .final h2{ font-size:clamp(1.8em,4vw,2.9em); margin:.3em auto .7em; max-width:18ch; }
    .final p{ color:var(--body); max-width:50ch; margin:0 auto 1.8em; }

    /* ── FOOTER (shared) ── */
    footer.site{ background:var(--navy-deep); border-top:1px solid rgba(177,191,215,.12); padding-block:64px 40px; }
    footer.site .foot-top{ display:flex; justify-content:space-between; gap:40px; flex-wrap:wrap; margin-bottom:48px; }
    footer.site .foot-cols{ display:flex; gap:clamp(40px,8vw,100px); flex-wrap:wrap; }
    footer.site .foot-col h4{ font-size:.64em; letter-spacing:.16em; text-transform:uppercase; color:var(--steel); margin-bottom:18px; font-weight:700; }
    footer.site .foot-col a{ display:block; color:var(--body); opacity:.82; font-size:.8em; margin-bottom:12px; transition:opacity .2s,color .2s; }
    footer.site .foot-col a:hover{ opacity:1; color:var(--gold); }
    footer.site .foot-brand{ max-width:30ch; }
    footer.site .foot-brand .lead{ font-size:.78em; margin-top:16px; color:var(--steel); line-height:1.6; }
    footer.site .foot-social{ display:flex; gap:18px; margin-top:20px; }
    footer.site .foot-social a{ color:var(--body); opacity:.82; font-size:.78em; font-weight:600; transition:opacity .2s,color .2s; }
    footer.site .foot-social a:hover{ opacity:1; color:var(--gold); }
    footer.site .foot-bottom{ display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; padding-top:28px; border-top:1px solid rgba(177,191,215,.12); color:var(--steel); font-size:.72em; }
    footer.site .foot-col a.is-soon{ color:var(--steel); cursor:default; opacity:.75; }
    footer.site .foot-col a.is-soon:hover{ color:var(--steel); opacity:.75; }
    .soon-tag{ font-size:.56em; letter-spacing:.12em; text-transform:uppercase; border:1px solid rgba(177,191,215,.35); border-radius:999px; padding:.12em .55em; font-weight:700; margin-left:6px; color:var(--steel); vertical-align:middle; white-space:nowrap; }

    /* ── responsive ── */
    @media(max-width:820px){
      .split{ grid-template-columns:1fr; }
      .split.rev .split-media{ order:-1; }
      .price-grid{ grid-template-columns:1fr; max-width:440px; margin-inline:auto; }
      .price-card.featured{ margin-top:8px; }
      .testi{ grid-template-columns:1fr; text-align:center; justify-items:center; }
    }
    @media(max-width:620px){
      .img-pair{ grid-template-columns:1fr; }
      .fit-grid{ grid-template-columns:1fr; }
      .hero{ min-height:clamp(520px,84vh,720px); }
      .hero-inner{ padding-top:104px; }
    }
    @media(max-width:820px){ :host{ display:block; font-size:13px; width:100vw; } }
  
/* tighter mobile section spacing */
@media(max-width:820px){ .sec{ padding-block:34px; } .sec-sm{ padding-block:24px; } }
`;
  var HTML = `<!-- ─── NAV (shared site header) ─── -->
<header class="nav nav-minimal" id="nav">
  <div class="nav-inner">
    <a href="https://www.giveitallevent.com" class="logo" aria-label="GIVE IT ALL home"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
    <div class="nav-cta">
      <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-page" target="_blank" rel="noopener" class="btn btn-gold">Apply now <span class="arrow">→</span></a>
    </div>
  </div>
</header>

<!-- ─── HERO ─── -->
<section class="hero" id="top">
  <div class="hero-bg">
    <img src="https://static.wixstatic.com/media/111174_76a1bbdd7dcc431db4a397684439f3ff~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,enc_auto/111174_76a1bbdd7dcc431db4a397684439f3ff~mv2.jpg" alt="Speaker on stage at Give It All networking event in Bali">
  </div>
  <div class="hero-inner wrap">
    <span class="eyebrow">voted #1 networking event · Bali</span>
    <h1>You have a voice.<br>You're being called to <span class="accent">use it.</span></h1>
    <p class="hero-lead">Everyone has an insight, value, knowledge or wisdom to share. Most have not given themselves permission to share it, or had a stage to share it from. <strong class="accent">That changes here.</strong></p>
    <div class="hero-cta-row">
      <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-page" target="_blank" rel="noopener" class="btn btn-gold">Apply now <span class="arrow">→</span></a>
      <a href="#packages" class="btn btn-ghost">See packages</a>
    </div>
    <p class="hero-fact"><b>5-minute talks</b> &nbsp;·&nbsp; Raw &amp; real &nbsp;·&nbsp; Pro content captured for you</p>
  </div>
</section>

<!-- ─── THIS ISN'T A REGULAR GIG ─── -->
<section class="sec band-deep speckle">
  <div class="wrap">
    <div class="gig-grid">
      <div class="gig-head">
        <div class="sec-head">
          <span class="label">This isn't your regular "speaking gig"</span>
          <h2>We never aimed for polished <span class="accent">perfection.</span></h2>
        </div>
        <div class="gig-reel">
          <div class="reel-thumb" data-embed="https://video.wixstatic.com/video/111174_fa9b3c9d820046f390f945d6572e35b6/720p/mp4/file.mp4" data-name="the speaker highlight" tabindex="0" role="button" aria-label="Play the speaker highlight reel">
            <img src="https://static.wixstatic.com/media/111174_2961bd41e9a047ce897168604a02a0e6~mv2.jpg/v1/fill/w_720,h_1280,al_c,q_85,enc_auto/111174_2961bd41e9a047ce897168604a02a0e6~mv2.jpg" alt="Step up, not another networking event">
            <span class="reel-play"></span>
            <span class="dur-chip">▶ Watch the highlight</span>
          </div>
        </div>
      </div>
      <div class="gig-body">
        <p class="gig-intro">And it's not what you connected with, right? My guess is that you also loved the depth, presence, and connection within the experience we have curated together.</p>
        <p>We are not going for a professional, overly rehearsed keynote with robotic lines and slides to read from. Isn't there enough of that already?</p>
        <p class="gig-stmt">What we love is the messy, raw emotion of what connects us as heart felt humans. We want to hear your story, to be within the depths of pain, and celebrate the <span class="accent">ecstasy</span> on the other side of it. We want to feel your <span class="accent">courage</span> in being seen on stage, sharing your deepest experienced wisdom.</p>
        <div class="gig-caveat">
          <span class="label">The only caveat</span>
          <p>What can the audience take away that can be immediately implementable to improve their life, relationship, business, themselves? Oh, and <span class="accent">five minutes is more than enough</span> when the message is alive in you.</p>
        </div>
        <div style="margin-top:30px">
          <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-page" target="_blank" rel="noopener" class="btn btn-gold">Apply now <span class="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── 5 REASONS TO SPEAK ─── -->
<section class="sec band-navy speckle">
  <div class="wrap">
    <div class="sec-head">
      <span class="label">Elevate your networking experience</span>
      <h2>Speaking from stage is the fastest way to elevate your <span class="accent">authority.</span></h2>
      <p class="lead" style="max-width:54ch; margin-top:1em">GIVE IT ALL is a premium networking event with every kind of collaboration connection happening at every event. Here are five reasons to speak.</p>
    </div>

    <div class="reasons-layout">
    <div class="reasons">
      <div class="reason">
        <span class="num">1</span>
        <h3>Authority, made human</h3>
        <p>We care less about your experience, and more about how much we feel that you understand our pain and challenge. Having the courage to be seen through the vulnerabilities of your lived human experience is super attractive. Be the demonstration of pain we've all felt, and the proof that it's possible to come out the other side. That is credibility, trust, and authority.</p>
      </div>
      <div class="reason">
        <span class="num">2</span>
        <h3>Ease of connection</h3>
        <p>Networking can make it hard to find the right people to speak with. When you speak from stage, you become a magnet for honesty, resonance, and connection that says "wow, that really landed for me." These are the highest quality connections.</p>
      </div>
      <div class="reason">
        <span class="num">3</span>
        <h3>Emotionally intelligent audience</h3>
        <p>This isn't a surface level 'hype crowd'. Our community connects and feels deeply. They're here, available, and willing to go deep with you, to care about what you care about.</p>
      </div>
      <div class="reason">
        <span class="num">4</span>
        <h3>Premium content you own</h3>
        <p>Most speakers leave events with a selfie and a LinkedIn post. You'll walk away with professionally shot, edited content; reels, B-roll, photos, that you can use for years. Think of it as a content day with a live audience, all captured and delivered to you.</p>
      </div>
      <div class="reason">
        <span class="num">5</span>
        <h3>Share what matters</h3>
        <p>Drop the performance and actually 'give it all' in a way that matters, creates change, and leaves a ripple of impact. Where other events are simply inspiring, we're about creating transformation, and would love for you to be part of this through what means the most to you.</p>
      </div>
    </div>
      <aside class="reasons-media">
        <img src="https://static.wixstatic.com/media/111174_642948f6185542b7b66b4839bcd5c0bf~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,enc_auto/111174_642948f6185542b7b66b4839bcd5c0bf~mv2.jpg" alt="Speaker sharing on stage at Give It All">
        <img src="https://static.wixstatic.com/media/111174_f5bbf12c3c9946dc885e073f9a3e121a~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,enc_auto/111174_f5bbf12c3c9946dc885e073f9a3e121a~mv2.jpg" alt="The room and audience at Give It All">
      </aside>
    </div>
  </div>
</section>

<!-- ─── NO-BRAINER INVESTMENT (full-bleed) ─── -->
<section class="sec speckle bleed-sec">
  <div class="bleed-bg">
    <img src="https://static.wixstatic.com/media/111174_fbc42cc3a8f34a1ab3c4295de42d5480~mv2.jpg/v1/fill/w_1920,h_1100,al_c,q_85,enc_auto/111174_fbc42cc3a8f34a1ab3c4295de42d5480~mv2.jpg" alt="The Give It All venue and stage">
  </div>
  <div class="wrap">
    <div class="bleed-copy">
      <div class="sec-head">
        <span class="label">A no-brainer investment</span>
        <h2>This isn't about paying for a <span class="accent">speaking slot.</span></h2>
      </div>
      <div class="prose lead">
        <p>Consider this: hiring a videographer, editor, and photographer for a half-day would cost you $1,500 to $3,000+. Then, let's hope you already have the nuanced skill set to bring it all together.</p>
        <p>Here, you get all of that, plus a curated room of founders who actually want to hear from you, and a speaking experience that will stretch and refine you.</p>
        <p>You're investing in a rare opportunity that fuels your own media engine. You walk away with an all-in-one, done-for-you package of content, connections, and confidence you didn't have before.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── WHO WE SELECT / LOVE vs DON'T ─── -->
<section class="sec band-abyss speckle">
  <div class="wrap">
    <div class="sec-head" style="text-align:center; max-width:none">
      <span class="label">We select our speakers based on one thing</span>
      <h2 style="margin-inline:auto; max-width:18ch">What it feels like to <span class="accent">listen to you.</span></h2>
    </div>
    <div class="fit-grid">
      <div class="fit-col love">
        <h3>What we love</h3>
        <ul>
          <li><span class="ic">✓</span> Have attended GIA previously</li>
          <li><span class="ic">✓</span> Shares from live experience</li>
          <li><span class="ic">✓</span> Offers a felt experience</li>
          <li><span class="ic">✓</span> Speaking from the heart</li>
          <li><span class="ic">✓</span> One clear, actionable insight</li>
          <li><span class="ic">✓</span> Will land within the assigned 5 min</li>
          <li><span class="ic">✓</span> Seeking to GIVE IT ALL</li>
        </ul>
      </div>
      <div class="fit-col nope">
        <h3>What we don't love</h3>
        <ul>
          <li><span class="ic">✕</span> Sales pitches</li>
          <li><span class="ic">✕</span> Long personal introductions</li>
          <li><span class="ic">✕</span> Speaking from the head</li>
          <li><span class="ic">✕</span> Generic / surface level advice</li>
          <li><span class="ic">✕</span> Ego / self-centred teachings</li>
          <li><span class="ic">✕</span> Reliance on slides / notes</li>
          <li><span class="ic">✕</span> Seeking to get something</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ─── SPEAKER VIDEO TESTIMONIALS ─── -->
<section class="sec band-deep speckle">
  <div class="wrap">
    <div class="sec-head" style="text-align:center; max-width:none">
      <span class="label">Hear from past speakers</span>
      <h2 style="margin-inline:auto; max-width:20ch">Their words. Their <span class="accent">experience.</span></h2>
    </div>

    <div class="vid-reels">
      <!-- VIDEO 1 — Jody Dontje -->
      <div class="reel-card">
        <div class="reel-thumb" data-embed="https://video.wixstatic.com/video/111174_f2cb64711ff64a55ba8c3814930f66ba/1080p/mp4/file.mp4" data-name="Jody Dontje" tabindex="0" role="button" aria-label="Play Jody Dontje's speaker testimonial">
          <img src="https://static.wixstatic.com/media/111174_4cf1e0ae2c0c419282e34ee3c06acb49~mv2.jpg/v1/fill/w_720,h_1280,al_c,q_85,enc_auto/111174_4cf1e0ae2c0c419282e34ee3c06acb49~mv2.jpg" alt="Jody Dontje, is speaking worth it?">
          <span class="reel-play"></span>
          <span class="dur-chip">▶ Reel</span>
        </div>
        <div class="reel-below">
          <div class="stars">★★★★★</div>
        </div>
      </div>

      <!-- VIDEO 2 — speaker montage -->
      <div class="reel-card">
        <div class="reel-thumb" data-embed="https://video.wixstatic.com/video/111174_3cd52353365e4fcab8dae6c01d43d88a/1080p/mp4/file.mp4" data-name="the speaker montage" tabindex="0" role="button" aria-label="Play the speaker highlights montage">
          <img src="https://static.wixstatic.com/media/111174_37e49d961f434367879c1f21f84cb539~mv2.jpg/v1/fill/w_720,h_1280,al_c,q_85,enc_auto/111174_37e49d961f434367879c1f21f84cb539~mv2.jpg" alt="Why speak at Give It All, 5 speaker stories">
          <span class="reel-play"></span>
          <span class="dur-chip">▶ Reel</span>
        </div>
        <div class="reel-below">
          <div class="stars">★★★★★</div>
        </div>
      </div>

      <!-- VIDEO 3 — Mij Bakhti -->
      <div class="reel-card">
        <div class="reel-thumb" data-embed="https://video.wixstatic.com/video/111174_5fc46dea91844f35b65fca2f5e1e4442/1080p/mp4/file.mp4" data-name="Mij Bakhti" tabindex="0" role="button" aria-label="Play Mij Bakhti's speaker testimonial">
          <img src="https://static.wixstatic.com/media/111174_d1efb101bb0f4c1f9595b9c5ca6ae314~mv2.jpg/v1/fill/w_720,h_1280,al_c,q_85,enc_auto/111174_d1efb101bb0f4c1f9595b9c5ca6ae314~mv2.jpg" alt="Mij Bakhti, terrified to speak on stage?">
          <span class="reel-play"></span>
          <span class="dur-chip">▶ Reel</span>
        </div>
        <div class="reel-below">
          <div class="stars">★★★★★</div>
        </div>
      </div>
    </div>

    <div class="vid-quote">
      <blockquote>
        "It pushed me in all the right ways. First time speaking on a real stage, big audience, and honestly one of the most rewarding experiences ever, especially hearing people stand and clap after my talk. I learned that fear is just trying to 'protect' us, but the real expansion is on the other side. After this experience, I've changed a lot. I walk with my chin up now, proud of myself, and ready for the next speaking step."
        <cite>Jordi</cite>
      </blockquote>
    </div>
  </div>
</section>

<!-- ─── PRICING / PACKAGES ─── -->
<section class="sec band-navy speckle" id="packages">
  <div class="wrap">
    <div class="sec-head" style="text-align:center; max-width:none">
      <span class="label">Choose your speaker package</span>
      <h2 style="margin-inline:auto; max-width:22ch">We take care of the logistics. You take care of the <span class="accent">message.</span></h2>
    </div>

    <div class="price-grid">
      <!-- STANDARD -->
      <div class="price-card">
        <div class="price-name">Standard</div>
        <div class="price-amt">$79</div>
        <p class="price-sub">For speakers who want authority through content.</p>
        <div class="price-incl">Package includes</div>
        <ul>
          <li><span class="ic">✓</span> Event ticket + drink</li>
          <li><span class="ic">✓</span> 5-minute speaking slot</li><li><span class="ic">✓</span> 5-Part Stage Prep Video Series</li>
          <li><span class="ic">✓</span> Pro photos &amp; B-roll</li>
          <li><span class="ic">✓</span> Full editing of your talk</li>
          <li><span class="ic">✓</span> 4 speaking shorts reels</li>
          <li><span class="ic">✓</span> Clipped raw footage</li>
          <li><span class="ic">✓</span> <a href="https://docs.google.com/document/d/1L8VEc95z6oOnUmcdrCfnB4R5Z_aoKufBSf_YPkIz_f8/edit?usp=sharing" target="_blank" rel="noopener">Examples here</a></li>
        </ul>
        <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-standard" target="_blank" rel="noopener" class="btn btn-ghost">Select Standard</a>
      </div>

      <!-- PRO -->
      <div class="price-card featured">
        <span class="price-badge">★ Most Popular</span>
        <div class="price-name">Pro</div>
        <div class="price-amt">$179</div>
        <p class="price-sub">For a full content package + elevated visibility.</p>
        <div class="price-incl">Everything in Standard, plus</div>
        <ul>
          <li><span class="ic">✓</span> Fast track selection</li>
          <li><span class="ic">✓</span> Speaker Authority Reel</li>
          <li><span class="ic">✓</span> <a href="https://docs.google.com/document/d/1j6JRrq3jji2HEsnSuYeYKy80mXLc23V9xmJDsbM4XKA/edit?usp=sharing" target="_blank" rel="noopener">Examples here</a></li>
        </ul>
        <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-pro-speaker" target="_blank" rel="noopener" class="btn btn-gold">Select Pro <span class="arrow">→</span></a>
      </div>

      <!-- FEATURED -->
      <div class="price-card">
        <div class="price-name">Featured</div>
        <div class="price-amt">$299</div>
        <p class="price-sub">For extended stage time + event-wide promotion.</p>
        <div class="price-incl">Everything in Pro, plus</div>
        <ul>
          <li><span class="ic">✓</span> 10-minute speaker slot</li>
          <li><span class="ic">✓</span> Pre-event promo reel</li>
          <li><span class="ic">✓</span> Shoutout links in pre &amp; post emails</li>
          <li><span class="ic">✓</span> <a href="https://docs.google.com/document/d/1ELzkr4CLrhSgW5Vsj0PhvVf4iMk1UYfavlIEJsGqsv4/edit?usp=sharing" target="_blank" rel="noopener">Examples here</a></li>
          <li style="color:var(--gold); font-weight:600"><span class="ic">★</span> Limited Spots · Curated</li>
        </ul>
        <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-sub-headliner" target="_blank" rel="noopener" class="btn btn-ghost">Apply here</a>
      </div>
    </div>

    <p class="price-note">Not quite ready? That's okay.<br>5-part video series to prep you for the stage. <a href="https://www.giveitallevent.com/talk-series" target="_blank" rel="noopener" style="color:var(--gold);font-weight:600;border-bottom:1px solid rgba(232,198,95,.45)">Access Free Now</a></p>
  </div>
</section>

<!-- ─── FAQ ─── -->
<section class="sec band-deep speckle">
  <div class="wrap">
    <div class="sec-head" style="text-align:center; max-width:none">
      <span class="label">Questions</span>
      <h2 style="margin-inline:auto">Before you <span class="accent">apply</span></h2>
    </div>
    <div class="faq-list">
      <div class="qa">
        <button>Do I need to have spoken before?</button>
        <div class="ans"><p>Not at all. Some of our most powerful speakers were first-timers. What matters isn't experience, it's authenticity speaking about what is most true for you. If you have a story, insight, or lesson that's alive in you, you're ready. We'll guide you through the rest.</p></div>
      </div>
      <div class="qa">
        <button>What if I'm nervous about speaking?</button>
        <div class="ans"><p>Great. That means it matters to you. Nervousness is just energy waiting to be channeled. Our community is here to support you and champion you. You'll feel it even more the moment you step on stage. Our audience wants you to succeed.</p></div>
      </div>
      <div class="qa">
        <button>How do I know if my topic is a good fit?</button>
        <div class="ans"><p>If it's something you've lived, learned from, and can share in a way that enables others to make an impact in their lives, it fits. We're not looking for overly rehearsed or polished keynotes. We're looking for real humans sharing a real felt wisdom. When in doubt, apply and let us help you dial in the approach.</p></div>
      </div>
      <div class="qa">
        <button>Can I mention my business or offer?</button>
        <div class="ans"><p>You can reference what you do and use it as part of your story and the value you share, just don't make it a sales pitch. The goal is to provide a felt experience that leaves the right people wanting to come and connect and learn more from you. This makes the best and easiest networking. Trust the process.</p></div>
      </div>
      <div class="qa">
        <button>When will I get my content?</button>
        <div class="ans"><p>The photos and B-roll are usually within a few days. The exporting of the stage cameras, edited talk, and basic reels are usually a week. The pro speaker reels require more time and, depending on the editing queue, can take a couple of weeks. You'll be notified at each milestone with everything in a ready-to-use format. No project management, no back-and-forth. Just download and post.</p></div>
      </div>
      <div class="qa">
        <button>What if I can't make it after I've paid?</button>
        <div class="ans"><p>Payment doesn't automatically mean a guaranteed queue for the next event. We will notify you of the next available space and try to work with you on your availability. We hold your registration until you're ready to go. If no date will work, a refund will be offered, however you will not be able to apply again.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ─── FINAL CTA ─── -->
<section class="sec final speckle">
  <div class="final-bg">
    <img src="https://static.wixstatic.com/media/111174_2ba0e8f810114e89b020ac5046bcc9c6~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_auto/111174_2ba0e8f810114e89b020ac5046bcc9c6~mv2.jpg" alt="The Give It All speaker lineup celebrating on stage">
  </div>
  <div class="final-inner wrap">
    <span class="eyebrow">the permission is yours</span>
    <h2>Your voice. Your <span class="accent">expression.</span></h2>
    <p>Share your unique lived experience and wisdom. Leave with content, connections, and elevated authority.</p>
    <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap">
      <a href="https://reconnect.parallaxxtransformations.com/choose-your-speaker-experience-page" target="_blank" rel="noopener" class="btn btn-gold">Apply now <span class="arrow">→</span></a>
      <a href="https://www.giveitallevent.com" target="_blank" rel="noopener" class="btn btn-ghost">Want to attend instead?</a>
    </div>
  </div>
</section>

<!-- ─── IMAGE LIGHTBOX ─── -->
<div id="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image">
  <button class="lb-close" aria-label="Close">&times;</button>
  <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-nav lb-next" aria-label="Next">›</button>
</div>

<!-- ─── FOOTER (shared site footer) ─── -->
<footer class="site speckle">
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="https://www.giveitallevent.com" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
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
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener">Next event</a>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
          <a class="is-soon" aria-disabled="true">Virtual Membership <span class="soon-tag">soon</span></a>
          <a href="https://www.giveitallevent.com/events">Events calendar</a>
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
      <span>© 2026 GIVE IT ALL. All rights reserved.</span>
      <span class="foot-legal" style="display:inline-flex;gap:18px;flex-wrap:wrap">
        <a href="https://www.giveitallevent.com/privacy-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Privacy Policy</a>
        <a href="https://www.giveitallevent.com/refund-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Refund Policy</a>
      </span>
    </div>
  </div>
</footer>`;
  if (!document.getElementById('gia-fonts')) { var l=document.createElement('link'); l.id='gia-fonts'; l.rel='stylesheet'; l.href='https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap'; document.head.appendChild(l); }
  class GIASpeakerPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var host=this; var shadow=this.attachShadow({mode:'open'}); shadow.innerHTML='<style>'+CSS+'</style>'+HTML; var root=shadow;
      root.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var id=a.getAttribute('href'); if(id&&id.length>1){var t=root.querySelector(id); if(t){e.preventDefault(); t.scrollIntoView({behavior:'smooth'});}} }); });
      var collapseAncestors=function(){ try{ var hostH=host.getBoundingClientRect().height; if(hostH<50)return; var n=host.parentElement,guard=0; while(n&&n!==document.body&&guard++<14){ if(n.getBoundingClientRect().height>hostH+400){ n.style.height='auto'; n.style.minHeight='0px'; } n=n.parentElement; } }catch(e){} };
      requestAnimationFrame(collapseAncestors); [400,1200,2500].forEach(function(t){ setTimeout(collapseAncestors,t); }); window.addEventListener('resize',collapseAncestors,{passive:true});

  // nav scrolled state
  const nav = root.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // mobile menu toggle
  const menuBtn = root.querySelector('.menu-btn');
  if(menuBtn){
    menuBtn.addEventListener('click', () => nav.classList.toggle('menu-open'));
    root.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('menu-open')));
  }

  // FAQ accordion
  const qas = root.querySelectorAll('.qa');
  const setH = (qa) => { const a = qa.querySelector('.ans'); a.style.maxHeight = qa.classList.contains('open') ? a.scrollHeight + 'px' : null; };
  qas.forEach(qa => {
    qa.querySelector('button').addEventListener('click', () => {
      const isOpen = qa.classList.contains('open');
      qas.forEach(o => { o.classList.remove('open'); setH(o); });
      if(!isOpen){ qa.classList.add('open'); setH(qa); }
    });
  });
  window.addEventListener('resize', () => qas.forEach(qa => { if(qa.classList.contains('open')) setH(qa); }));

  // sliders (gallery, reasons, mini no-brainer)
  const $ = id => root.getElementById(id);
  const wireSlider = (strip, prev, next, full) => {
    if(!strip) return;
    const step = () => full ? strip.clientWidth : Math.min(strip.clientWidth * 0.85, 460);
    prev && prev.addEventListener('click', () => strip.scrollBy({left:-step(), behavior:'smooth'}));
    next && next.addEventListener('click', () => strip.scrollBy({left: step(), behavior:'smooth'}));
  };
  // image lightbox (reasons column images)
  const shots = [...root.querySelectorAll('.reasons-media img')];
  const lb = root.getElementById('lightbox');
  const lbImg = root.getElementById('lbImg');
  let lbIdx = 0;
  const showLb = (i) => { lbIdx = (i + shots.length) % shots.length; lbImg.src = shots[lbIdx].src; lbImg.alt = shots[lbIdx].alt; };
  const openLb = (i) => { showLb(i); lb.classList.add('open'); document.body.style.overflow='hidden'; };
  const closeLb = () => { lb.classList.remove('open'); lbImg.src=''; document.body.style.overflow=''; };
  shots.forEach((img, i) => img.addEventListener('click', () => openLb(i)));
  if(lb){
    lb.querySelector('.lb-close').addEventListener('click', closeLb);
    lb.querySelector('.lb-prev').addEventListener('click', e => { e.stopPropagation(); showLb(lbIdx-1); });
    lb.querySelector('.lb-next').addEventListener('click', e => { e.stopPropagation(); showLb(lbIdx+1); });
    lb.addEventListener('click', e => { if(e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') closeLb();
      if(e.key==='ArrowLeft') showLb(lbIdx-1);
      if(e.key==='ArrowRight') showLb(lbIdx+1);
    });
  }

  // speaker reels — play inline inside the card (no popup)
  const playReelInline = (thumb) => {
    const embed = thumb.getAttribute('data-embed');
    if(!embed || thumb.classList.contains('is-playing')) return;
    // pause any reel that's already playing
    root.querySelectorAll('.reel-thumb video').forEach(v => { try { v.pause(); } catch(e){} });
    let el;
    if(/\.(mp4|webm|mov)(\?|$)/i.test(embed)){
      el = document.createElement('video');
      el.src = embed; el.controls = true; el.autoplay = true; el.setAttribute('playsinline','');
    } else {
      el = document.createElement('iframe');
      el.src = embed + (embed.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
      el.setAttribute('allow', 'autoplay; fullscreen; encrypted-media; picture-in-picture');
      el.setAttribute('allowfullscreen', '');
    }
    thumb.innerHTML = '';
    thumb.classList.add('is-playing');
    thumb.appendChild(el);
    if(el.play){ el.play().catch(()=>{}); }
  };
  root.querySelectorAll('.reel-thumb').forEach(t => {
    t.addEventListener('click', () => playReelInline(t));
    t.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); playReelInline(t); } });
  });

    }
  }
  customElements.define('gia-speaker-page', GIASpeakerPage);
})();
