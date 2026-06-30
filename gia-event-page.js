/* GIVE IT ALL — Event page, packaged as a Wix Custom Element.
   Generated from event.html. Tag name to set in Wix: <gia-event-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site. */
(function(){
  if (customElements.get('gia-event-page')) return;

  var CSS = `
  /* ===================== BRAND TOKENS ===================== */
  :host{
    --navy:#061938;
    --navy-card:#0D2350;
    --navy-deep:#04122B;
    --gold:#E8C65F;
    --gold-soft:rgba(232,198,95,.14);
    --gold-line:rgba(232,198,95,.45);
    --ink-hi:#F4F6FB;
    --ink:#E2E7F1;
    --ink-2:#B1BFD7;
    --rule:rgba(177,191,215,.22);
    --rule-2:rgba(177,191,215,.14);
    --maxw:1120px;
    --r:18px;
    --shadow:0 24px 60px -28px rgba(0,0,0,.75);
  }
  *,*::before,*::after{box-sizing:border-box;}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;}
  :host{display:block;
    margin:0;background:var(--navy);color:var(--ink);
    font-family:'Montserrat',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
    font-weight:400;line-height:1.6;letter-spacing:.005em;
    -webkit-font-smoothing:antialiased;overflow-x:hidden;
  }
  img{max-width:100%;display:block;}
  a{color:inherit;text-decoration:none;}

  .speckle{position:relative;}
  .speckle::before{
    content:"";position:absolute;inset:0;pointer-events:none;opacity:.5;
    background-image:radial-gradient(rgba(0,0,0,.5) .6px,transparent .7px);
    background-size:7px 7px;mix-blend-mode:overlay;
  }

  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px;}
  section{position:relative;}
  .band{padding:62px 0;}
  .band-tight{padding:42px 0;}
  .deep{background:var(--navy-deep);}

  .script{font-family:'Caveat',cursive;color:var(--gold);font-weight:600;
    font-size:clamp(1.25rem,3.4vw,1.7rem);line-height:1;letter-spacing:.01em;}
  h1,h2,h3,h4{color:var(--ink-hi);font-weight:700;line-height:1.08;margin:0;letter-spacing:-.01em;}
  .h-hero{font-size:clamp(1.85rem,5.2vw,3.5rem);font-weight:800;letter-spacing:-.02em;line-height:1.08;}
  .h-1{font-size:clamp(1.8rem,4vw,2.7rem);}
  .h-2{font-size:clamp(1.4rem,3vw,2rem);}
  .h-3{font-size:clamp(1.15rem,2.2vw,1.4rem);}
  .lede{font-size:clamp(1.05rem,1.7vw,1.22rem);color:var(--ink);}
  .gold{color:var(--gold);}
  .steel{color:var(--ink-2);}
  p{margin:0 0 1em;}
  p:last-child{margin-bottom:0;}

  .eyebrow{display:flex;flex-direction:column;gap:10px;margin-bottom:26px;}
  .eyebrow .label{font-size:.74rem;font-weight:700;letter-spacing:.22em;
    text-transform:uppercase;color:var(--ink-2);}
  .eyebrow .rule{height:1px;background:var(--rule);width:100%;}
  .eyebrow.center{align-items:center;text-align:center;}

  .btn{display:inline-flex;align-items:center;gap:.45em;border-radius:999px;
    font-weight:700;font-size:.96rem;letter-spacing:.01em;padding:14px 26px;
    cursor:pointer;border:1.5px solid transparent;transition:transform .15s ease,
    box-shadow .2s ease,background .2s ease;white-space:nowrap;}
  .btn-gold{background:var(--gold);color:#1A1306;box-shadow:0 10px 30px -10px rgba(232,198,95,.5);
    animation:btnPulse 2.8s ease-out infinite;}
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 34px -10px rgba(232,198,95,.6);animation:none;}
  @keyframes btnPulse{
    0%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5);}
    70%{box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0);}
    100%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0);}}
  @media(prefers-reduced-motion:reduce){.btn-gold,.reel .play{animation:none;}}
  .btn-ghost{background:transparent;color:var(--ink-hi);border-color:var(--gold-line);}
  .btn-ghost:hover{background:var(--gold-soft);border-color:var(--gold);}
  .btn-sm{padding:10px 18px;font-size:.86rem;}

  .pill{display:inline-flex;align-items:center;gap:.45em;border-radius:999px;
    font-size:.74rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
    padding:6px 13px;border:1px solid var(--gold-line);color:var(--gold);background:var(--gold-soft);}
  .chip{display:inline-flex;align-items:center;gap:.45em;border-radius:999px;
    font-size:.8rem;font-weight:500;padding:7px 14px;color:var(--ink);
    border:1px solid var(--rule);background:rgba(255,255,255,.02);}
  .chip .dot{width:5px;height:5px;border-radius:50%;background:var(--gold);}
  .chip .stars{color:var(--gold);letter-spacing:.1em;}
  .chip b{color:var(--gold);font-weight:800;}
  .chips{display:flex;flex-wrap:wrap;gap:10px;}

  .nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(10px);
    background:linear-gradient(180deg,rgba(6,25,56,.94),rgba(6,25,56,.7));
    border-bottom:1px solid var(--rule-2);}
  .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px;}
  .logo{font-weight:800;letter-spacing:.08em;color:var(--gold);font-size:1.02rem;
    display:flex;align-items:center;gap:9px;text-transform:uppercase;}
  .logo .mark{width:24px;height:24px;border-radius:7px;border:1.5px solid var(--gold);
    display:grid;place-items:center;font-size:.7rem;}
  /* Fixed home button (top-right) — mirrors the header logo mark; used in the Wix embed where the nav is stripped */
  .home-mark{position:fixed;top:18px;left:18px;z-index:200;width:42px;height:42px;
    border-radius:11px;border:1.5px solid var(--gold);color:var(--gold);
    font-weight:800;font-size:1.05rem;letter-spacing:.02em;text-decoration:none;
    display:grid;place-items:center;background:rgba(6,25,56,.55);
    backdrop-filter:blur(6px);transition:background .2s ease,transform .2s ease;}
  .home-mark:hover{background:rgba(6,25,56,.9);transform:translateY(-1px);}

  .hero{min-height:clamp(560px,88vh,820px);display:flex;align-items:flex-end;
    position:relative;overflow:hidden;}
  .hero .bg{position:absolute;inset:0;z-index:0;}
  .photo{background:linear-gradient(135deg,#0A2244,#061938 60%,#02060F);position:relative;}
  .photo::after{content:attr(data-asset);position:absolute;inset:0;display:grid;place-items:center;
    color:rgba(177,191,215,.4);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;
    font-weight:600;text-align:center;padding:14px;pointer-events:none;}
  .hero .scrim{position:absolute;inset:0;z-index:1;
    background:
      linear-gradient(180deg,rgba(6,25,56,.42) 0%,rgba(4,15,40,.50) 42%,rgba(4,15,40,.90) 80%,rgba(4,15,40,.98) 100%),
      linear-gradient(90deg,rgba(4,15,40,.88) 0%,rgba(4,15,40,.55) 32%,rgba(4,15,40,.10) 62%,rgba(4,15,40,0) 80%);}
  .hero .content{position:relative;z-index:2;width:100%;padding-bottom:54px;padding-top:90px;}
  .hero .h-hero{max-width:30ch;margin-bottom:18px;text-shadow:0 2px 22px rgba(2,7,18,.55);}
  .hero .script,.hero .sub,.hero .facts{text-shadow:0 1px 14px rgba(2,7,18,.5);}
  .hero .sub{max-width:48ch;margin-bottom:22px;}
  .facts{display:flex;flex-wrap:wrap;gap:8px 22px;color:var(--ink-hi);font-weight:600;
    margin-bottom:24px;font-size:1.02rem;}
  .facts .sep{color:var(--gold);}
  .hero-cta{display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin-bottom:18px;}
  .seatline{font-size:.92rem;color:var(--ink-2);}
  .seatline b{color:var(--ink-hi);font-weight:700;}

  .router-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .router-card{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:var(--r);
    padding:26px;display:flex;flex-direction:column;gap:14px;transition:border-color .2s,transform .2s;}
  .router-card:hover{border-color:var(--gold-line);transform:translateY(-2px);}
  .router-card .k{font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);font-weight:700;}
  .router-card h3{font-size:1.25rem;}
  .router-card .btn{align-self:flex-start;}

  .pull{font-size:clamp(1.4rem,3vw,2rem);line-height:1.28;color:var(--ink-hi);font-weight:700;max-width:22ch;}
  .pull .em{color:var(--gold);}
  .tension-body{max-width:52ch;margin-top:22px;color:var(--ink-2);font-size:1.05rem;line-height:1.6;}
  .turn{margin-top:20px;color:var(--ink-hi);font-style:italic;font-size:1.12rem;font-weight:600;}
  .tension-grid{display:grid;grid-template-columns:1fr 320px;gap:44px;align-items:center;}
  .tension-reel{width:100%;}
  @media(max-width:820px){.tension-grid{grid-template-columns:1fr;}.tension-reel{max-width:300px;margin-top:8px;}}

  .flow{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;}
  .beat{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:14px;
    overflow:hidden;display:flex;flex-direction:column;}
  .beat .still{aspect-ratio:4/5;height:auto;}
  .beat .n{min-height:1.2em;}
  .beat .meta{padding:13px 13px 16px;}
  .beat .t{font-weight:800;color:var(--gold);font-size:.92rem;letter-spacing:.02em;}
  .beat .n{font-weight:700;color:var(--ink-hi);font-size:.9rem;margin:3px 0 5px;}
  .beat .s{font-size:.8rem;color:var(--ink-2);line-height:1.45;}
  .flow-close{margin-top:24px;text-align:center;color:var(--ink-hi);font-style:italic;font-weight:600;}

  .spk-reels{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
  .spk-reels .reel{width:300px;max-width:44vw;}
  .spk-note{margin:24px auto 0;max-width:64ch;text-align:center;color:var(--ink-2);font-size:.9rem;line-height:1.55;}
  .reel{position:relative;border-radius:16px;overflow:hidden;cursor:pointer;border:1.5px solid var(--rule-2);}
  .reel-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:5;background:#000;}
  @keyframes reelPulse{0%{box-shadow:0 0 0 0 rgba(232,198,95,.55);}70%{box-shadow:0 0 0 20px rgba(232,198,95,0);}100%{box-shadow:0 0 0 0 rgba(232,198,95,0);}}
  .reel img.still{transition:transform .6s ease;}
  .reel:hover img.still{transform:scale(1.05);}
  .reel:hover .grad{background:linear-gradient(180deg,rgba(4,15,40,.05),rgba(4,15,40,.7));}
  .reel .still{aspect-ratio:9/16;}
  .reel .tba{width:100%;aspect-ratio:9/16;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#0D2350,#061938 72%);}
  .reel .tba svg{width:30%;height:30%;fill:var(--gold);opacity:.30;}
  .reel.is-soon{cursor:default;}
  .reel.headline{border:1.5px solid var(--gold-line);box-shadow:var(--shadow);}
  .reel .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:54px;height:54px;border-radius:50%;background:rgba(232,198,95,.92);
    display:grid;place-items:center;z-index:3;transition:transform .15s;
    animation:reelPulse 2.4s ease-out infinite;}
  .reel:hover .play{animation:none;}
  .reel:hover .play{transform:translate(-50%,-50%) scale(1.08);}
  .reel .play.sm{width:40px;height:40px;}
  .reel .play svg{width:18px;height:18px;margin-left:2px;fill:#1A1306;}
  .reel .grad{position:absolute;inset:0;z-index:2;
    background:linear-gradient(180deg,rgba(4,15,40,.12),rgba(4,15,40,.8));}
  .reel .toptag{position:absolute;top:11px;left:11px;z-index:3;}
  .reel .dur{position:absolute;top:11px;right:11px;z-index:3;font-size:.68rem;font-weight:600;
    color:var(--ink-hi);background:rgba(4,15,40,.6);border:1px solid var(--rule);padding:3px 8px;border-radius:999px;}
  .reel .taste{position:absolute;left:0;right:0;top:52%;z-index:3;text-align:center;
    color:var(--ink-hi);font-style:italic;font-size:.82rem;opacity:.85;}
  .reel .cap{position:absolute;left:12px;right:12px;bottom:12px;z-index:3;}
  .reel .cap .nm{font-weight:700;color:var(--ink-hi);font-size:.92rem;}
  .reel .cap .cr{font-size:.74rem;color:var(--ink-2);}
  .reel .cap .cr a{color:var(--gold);font-weight:600;}

  .spk-curation .ttl{font-weight:700;color:var(--ink-hi);font-size:1.1rem;margin-bottom:10px;}
  .spk-curation p{color:var(--ink);font-size:1.02rem;line-height:1.6;max-width:40ch;}
  .spk-meta{margin-top:16px;color:var(--gold);font-weight:600;font-size:.95rem;}

  .lineup-h{margin:42px 0 18px;font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);font-weight:700;}
  .lineup{display:grid;grid-template-columns:repeat(6,1fr);gap:20px;}
  .person{text-align:center;}
  .person .ph{position:relative;width:100%;aspect-ratio:1/1;border-radius:50%;overflow:hidden;margin:0 auto 12px;
    box-shadow:0 0 0 3px var(--navy),0 0 0 6px var(--gold-line);}
  .person .ph img,.person .ph .still{width:100%;height:100%;object-fit:cover;object-position:center 28%;
    filter:saturate(.9) contrast(1.04);}
  .person .ph::after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;
    background:linear-gradient(180deg,rgba(6,25,56,.08),rgba(4,15,40,.40));}
  .person .ph .tba{width:100%;height:100%;display:grid;place-items:center;background:radial-gradient(circle at 50% 38%,#0D2350,#061938 72%);}
  .person .ph .tba svg{width:42%;height:42%;fill:var(--gold);opacity:.38;}
  .person .nm{font-weight:700;color:var(--ink-hi);font-size:.88rem;}
  .person .tp{font-size:.78rem;color:var(--ink-2);line-height:1.4;}

  .intro-head{font-size:clamp(1.6rem,3.4vw,2.3rem);font-weight:800;color:var(--ink-hi);
    line-height:1.12;max-width:18ch;margin-bottom:30px;}
  .intro-sub{font-size:clamp(1.05rem,1.8vw,1.2rem);color:var(--ink-hi);font-weight:600;margin-bottom:28px;}
  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
  .step{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:var(--r);padding:24px;}
  .step .num{font-weight:800;color:var(--gold);font-size:1.1rem;letter-spacing:.1em;margin-bottom:12px;}
  .step h4{font-size:1.06rem;margin-bottom:7px;}
  .step p{color:var(--ink-2);font-size:.92rem;}

  .gal-top{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;}
  .gal-arrows{display:flex;gap:8px;}
  .arrow{width:42px;height:42px;border-radius:50%;border:1px solid var(--gold-line);
    background:transparent;color:var(--gold);cursor:pointer;display:grid;place-items:center;
    transition:background .2s;font-size:1.2rem;}
  .arrow:hover{background:var(--gold-soft);}
  .strip{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding:22px 0 8px;scrollbar-width:none;}
  .strip::-webkit-scrollbar{display:none;}
  .shot{flex:0 0 clamp(240px,30%,320px);scroll-snap-align:start;border-radius:14px;
    overflow:hidden;cursor:pointer;border:1px solid var(--rule-2);}
  .shot .still{aspect-ratio:4/3;transition:transform .4s;}
  .shot:hover .still{transform:scale(1.04);}

  .proof-reels{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
  .proof-grid{display:grid;grid-template-columns:300px 1fr;gap:24px;align-items:stretch;max-width:900px;margin:0 auto;}
  .proof-grid .reel{width:100%;}
  .written-col{display:flex;flex-direction:column;gap:18px;}
  .quote-card{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:var(--r);padding:26px;flex:1;display:flex;flex-direction:column;justify-content:center;}
  .quote-card .qm{font-family:'Caveat',cursive;color:var(--gold);font-size:2.6rem;line-height:.5;height:.55em;}
  .quote-card .q{color:var(--ink-hi);font-size:1.12rem;line-height:1.45;font-weight:600;margin:8px 0 0;}
  .quote-card .stars{color:var(--gold);letter-spacing:.1em;font-size:.85rem;margin-top:10px;}
  .quote-card .who{margin-top:4px;font-size:.86rem;color:var(--ink-2);}
  .quote-card .who b{color:var(--ink-hi);}
  @media(max-width:620px){.proof-grid{grid-template-columns:1fr;}.proof-grid .reel{max-width:300px;margin:0 auto;}}
  .testi .reel .still{aspect-ratio:9/16;}
  .testi .quote{margin-top:14px;color:var(--ink-hi);font-size:1rem;line-height:1.5;font-weight:600;}
  .testi .stars{color:var(--gold);letter-spacing:.1em;font-size:.85rem;margin-top:8px;}
  .testi .who{margin-top:4px;font-size:.86rem;color:var(--ink-2);}
  .testi .who b{color:var(--ink-hi);}
  .stat-strip{display:flex;flex-wrap:wrap;justify-content:center;gap:14px 30px;margin:42px auto 0;
    padding:22px;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);max-width:880px;text-align:center;}
  .stat{display:flex;flex-direction:column;}
  .stat .big{font-size:1.5rem;font-weight:800;color:var(--gold);line-height:1;}
  .stat .lbl{font-size:.78rem;color:var(--ink-2);letter-spacing:.04em;margin-top:5px;}

  .forwho{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .forcol{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:var(--r);padding:26px;}
  .forcol h4{font-size:1.1rem;margin-bottom:14px;}
  .forcol ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}
  .forcol li{display:flex;gap:10px;color:var(--ink);font-size:.95rem;line-height:1.45;}
  .forcol .ic{color:var(--gold);font-weight:800;flex:0 0 auto;}
  .forcol.no li .ic{color:var(--ink-2);}

  .host{display:grid;grid-template-columns:340px 1fr;gap:38px;align-items:center;}
  .host .portrait{aspect-ratio:4/5;border-radius:var(--r);overflow:hidden;border:1px solid var(--rule-2);}
  .host blockquote{margin:20px 0 0;padding-left:18px;border-left:2px solid var(--gold-line);
    color:var(--ink-hi);font-weight:600;font-size:1.12rem;line-height:1.4;}
  .host .sig{margin-top:14px;color:var(--ink-2);font-style:italic;}

  .money{background:linear-gradient(160deg,#0E2858,#0A1E45 55%,#071734);
    border:1px solid var(--gold-line);border-radius:24px;padding:40px;
    box-shadow:0 40px 90px -40px rgba(0,0,0,.8),inset 0 1px 0 rgba(232,198,95,.12);}
  .money-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px;margin-bottom:34px;}
  .stack h4{font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
  .stack h4 span{color:var(--ink-2);font-weight:600;letter-spacing:.04em;text-transform:none;margin-left:6px;font-size:.78rem;}
  .stack ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;}
  .stack li{display:flex;gap:11px;color:var(--ink);font-size:.97rem;line-height:1.45;}
  .stack .ic{color:var(--gold);flex:0 0 auto;font-weight:800;}
  .price-row{display:flex;flex-wrap:wrap;align-items:center;gap:24px;padding-top:30px;border-top:1px solid var(--gold-line);}
  .price{display:flex;align-items:baseline;gap:14px;}
  .price .now{font-size:clamp(2.6rem,6vw,3.6rem);font-weight:800;color:var(--ink-hi);line-height:1;}
  .price .was{font-size:1.4rem;color:var(--ink-2);text-decoration:line-through;font-weight:600;}
  .eb-tag{font-size:.78rem;color:var(--gold);font-weight:700;letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:6px;}
  .price-cta{display:flex;flex-direction:column;gap:10px;margin-left:auto;align-items:flex-end;text-align:right;}
  .incl{color:var(--ink-2);font-size:.9rem;max-width:42ch;margin-top:14px;}
  .timer-mini{font-size:.86rem;color:var(--ink-2);}
  .timer-mini b{color:var(--ink-hi);}

  .faq{max-width:760px;margin:0 auto;}
  .qa{border-bottom:1px solid var(--rule-2);}
  .qa button{width:100%;background:none;border:0;color:var(--ink-hi);font-family:inherit;
    font-size:1.05rem;font-weight:600;text-align:left;padding:20px 44px 20px 0;cursor:pointer;position:relative;}
  .qa button::after{content:"+";position:absolute;right:6px;top:50%;transform:translateY(-50%);
    color:var(--gold);font-size:1.5rem;font-weight:400;transition:transform .25s;}
  .qa.open button::after{content:"\\2013";}
  .qa .a{max-height:0;overflow:hidden;transition:max-height .3s ease;color:var(--ink-2);font-size:.96rem;line-height:1.6;}
  .qa .a p{padding:0 0 22px;}

  .urgency{text-align:center;}
  .countdown{display:flex;justify-content:center;gap:14px;margin-top:22px;}
  .cd{background:var(--navy-card);border:1px solid var(--gold-line);border-radius:14px;min-width:84px;padding:16px 10px;}
  .cd .v{font-size:2rem;font-weight:800;color:var(--gold);line-height:1;}
  .cd .l{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);margin-top:7px;}
  .cd-cap{margin-top:14px;color:var(--ink-2);font-size:.86rem;letter-spacing:.06em;}

  .final{position:relative;overflow:hidden;text-align:center;}
  .final .bg{position:absolute;inset:0;z-index:0;}
  .final .scrim{position:absolute;inset:0;z-index:1;
    background:linear-gradient(180deg,rgba(4,15,40,.55),rgba(4,15,40,.70) 50%,rgba(4,15,40,.85));}
  .final .content{position:relative;z-index:2;text-shadow:0 2px 18px rgba(2,7,18,.65);}
  .final .btn{text-shadow:none;}
  .final .facts{justify-content:center;}
  .quiet{margin-top:18px;color:var(--ink-2);font-size:.95rem;}
  .quiet a{color:var(--gold);font-weight:600;}

  footer{background:var(--navy-deep);border-top:1px solid var(--rule-2);padding:64px 0 40px;}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:48px;}
  .foot-brand{max-width:32ch;}
  .foot-brand .logo{margin-bottom:0;}
  .foot-brand .lead{color:var(--ink-2);font-size:.95rem;margin-top:16px;}
  .foot-social{display:flex;gap:18px;margin-top:20px;}
  .foot-social a{color:var(--ink);opacity:.82;font-size:.9rem;font-weight:600;transition:opacity .2s,color .2s;}
  .foot-social a:hover{opacity:1;color:var(--gold);}
  .foot-cols{display:flex;gap:clamp(36px,6vw,80px);flex-wrap:wrap;}
  .foot-col h4{font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);margin:0 0 18px;font-weight:700;}
  .foot-col a{display:block;color:var(--ink);opacity:.82;font-size:.95rem;margin-bottom:12px;transition:opacity .2s,color .2s;}
  .foot-col a:hover{opacity:1;color:var(--gold);}
  .foot-col a.is-soon{cursor:default;}
  .foot-col a.is-soon:hover{opacity:.82;color:var(--ink);}
  .soon{font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid var(--rule);border-radius:999px;padding:.15em .55em;font-weight:700;color:var(--ink-2);margin-left:.5em;}
  .foot-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid var(--rule-2);color:var(--ink-2);font-size:.84rem;}

  .lb{position:fixed;inset:0;z-index:200;background:rgba(2,7,18,.93);display:none;
    align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(6px);}
  .lb.on{display:flex;}
  .lb .box{max-width:min(92vw,900px);max-height:88vh;position:relative;}
  .lb img,.lb .ph{width:100%;border-radius:14px;}
  .lb .reelbox{width:min(86vw,400px);aspect-ratio:9/16;}
  .lb .close{position:absolute;top:-16px;right:-16px;width:42px;height:42px;border-radius:50%;
    background:var(--gold);color:#1A1306;border:0;cursor:pointer;font-size:1.3rem;display:grid;place-items:center;}
  .lb .ph{height:100%;display:grid;place-items:center;color:var(--ink-2);
    background:linear-gradient(135deg,#0A2244,#02060F);border:1px solid var(--rule);
    text-align:center;padding:20px;font-size:.8rem;letter-spacing:.08em;}

  .still{width:100%;height:100%;background:linear-gradient(135deg,#0A2447,#071A3A 55%,#03060F);position:relative;}
  img.still,video.still{object-fit:cover;display:block;}
  .still::after{content:attr(data-asset);position:absolute;inset:0;display:grid;place-items:center;
    color:rgba(177,191,215,.42);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;
    font-weight:600;text-align:center;padding:8px;line-height:1.4;}

  @media(max-width:980px){
    .spk-reels .reel{width:280px;}
  }
  @media(max-width:900px){
    .featured{grid-template-columns:repeat(2,1fr);}
    .lineup{grid-template-columns:repeat(3,1fr);}
    .flow{grid-template-columns:repeat(2,1fr);}
    .host{grid-template-columns:1fr;gap:22px;}
    .host .portrait{max-width:320px;}
    .money-grid{grid-template-columns:1fr;gap:26px;}
    .proof-reels{grid-template-columns:1fr 1fr;}
    .foot-top{gap:32px;}
  }
  @media(max-width:620px){
    .band{padding:38px 0;}
    .band-tight{padding:30px 0;}
    .price-cta{margin-left:0;align-items:flex-start;text-align:left;}
    .eyebrow{margin-bottom:20px;}
    .router-grid,.steps,.forwho,.proof-reels{grid-template-columns:1fr;}
    .spk-reels{gap:18px;}
    .spk-reels .reel{width:min(82vw,340px);}
    .flow{grid-template-columns:1fr 1fr;}
    .lineup{grid-template-columns:repeat(2,1fr);}
    .money{padding:26px 20px;}
    .price-row{gap:18px;}
    .countdown{gap:9px;}
    .cd{min-width:62px;padding:13px 6px;}
    .cd .v{font-size:1.4rem;}
    .hero .content{padding-bottom:38px;}
    .foot-cols{gap:32px;}
    .nav .logo span.full{display:none;}
  }
`;
  var HTML = `

<!-- ============ NAV ============ -->


<!-- ============ HOME MARK (kept when nav is stripped for the Wix embed) ============ -->
<a class="home-mark" href="https://www.giveitallevent.com" aria-label="Back to home">G</a>

<!-- ============ 1 · HERO ============ -->
<section class="hero" id="top">
  <div class="bg" style="background-image:url('https://static.wixstatic.com/media/111174_f33e9e5c81cf40b4ac5f3d14d8c3aa0f~mv2.jpg');background-size:cover;background-position:center 38%;"></div>
  <div class="scrim"></div>
  <div class="content">
    <div class="wrap">
      <div class="script" style="margin-bottom:14px;">voted #1 networking event</div>
      <h1 class="h-hero">The networking experience<br>you've been <span class="gold">seeking</span></h1>
      <p class="lede sub">For ambitious creators who build from connection and shared value first. Relationships happen as a result.</p>
      <div class="facts"><span>23 July</span><span class="sep">·</span><span>6:00pm</span><span class="sep">·</span><span>Amavi, Canggu</span></div>
      <div class="hero-cta">
        <a class="btn btn-gold" href="https://checkout.giveitallevent.com/give-it-all-bali-booking" target="_blank" rel="noopener">Get tickets now →</a>
        <span class="seatline" id="heroTimer">Early-bird ends in <b>2d 07h 56m</b></span>
      </div>
      <div class="chip" style="margin-top:6px;">
        <span class="dot"></span> Colombia · Bulgaria · Bali <span class="stars">★★★★★</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ 2 · ROUTER ============ -->
<section class="band-tight deep speckle" id="virtual" style="scroll-margin-top:74px;">
  <div class="wrap">
    <div class="router-grid">
      <div class="router-card">
        <span class="k">In Bali?</span>
        <h3>Join us in person on 23 July.</h3>
        <p class="steel">A speaking &amp; networking experience beyond the superficial.</p>
        <a class="btn btn-gold btn-sm" href="https://checkout.giveitallevent.com/give-it-all-bali-booking" target="_blank" rel="noopener">Get tickets →</a>
      </div>
      <div class="router-card">
        <span class="k">Anywhere else?</span>
        <h3>The live virtual experience</h3>
        <p class="steel">Step into our vibe with others from all around the world.</p>
        <a class="btn btn-ghost btn-sm" href="#" onclick="return false;" style="opacity:.7;cursor:default;">Virtual Launching Soon</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ 3 · THE TENSION ============ -->
<section class="band">
  <div class="wrap tension-grid">
    <div class="tension-copy">
      <div class="eyebrow"><span class="label">Connecting as Humans</span><span class="rule"></span></div>
      <p class="pull">It's a lonely world when <span class="em">you're driven.</span></p>
      <p class="tension-body">Our dreams are big, but the price we pay is real. Usually misunderstood by the 'normies'. Often coming at the cost of the relationships with others, and ourselves.</p>
      <p class="tension-body">Traditional networking failed us somewhere between superficial drinks with strangers and a desperately awkward pitch exchange.</p>
      <p class="turn">So here's where we promise to do better.</p>
    </div>
    <div class="reel tension-reel" data-reel="The why · founder reel" data-video="https://video.wixstatic.com/video/111174_7d1c4ed6ad6543f990962674be4401a3/1080p/mp4/file.mp4">
      <img class="still" src="https://static.wixstatic.com/media/111174_75ea73f06b7843dca2f44c3ea1f3c3f5~mv2.jpg" alt="The why">
      <div class="grad"></div>
      <span class="dur">Reel · 1:00</span>
      <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
    </div>
  </div>
</section>

<!-- ============ 4 · WHAT THIS IS ============ -->
<section class="band-tight deep speckle">
  <div class="wrap">
    <div class="eyebrow"><span class="label">What this is</span><span class="rule"></span></div>
    <h2 class="h-3" style="margin-top:4px;">Raw human talks create real human <span class="gold">connection</span>.</h2>
    <p class="lede steel" style="max-width:56ch;margin-top:14px;">Speakers that you related with, lived wisdom that transforms, and vulnerability that connects the room for a networking experience you crave. That's the whole thing.</p>
  </div>
</section>

<!-- ============ 5 · HOW THE NIGHT FLOWS ============ -->
<section class="band" id="flow">
  <div class="wrap">
    <div class="eyebrow"><span class="label">How the night flows</span><span class="rule"></span></div>
    <div class="flow">
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_11fe299f7f674fac97e4bb46e11181a5~mv2.jpg" alt="Sunset meet & greet"><div class="meta"><div class="t">6:00</div><div class="n">Meet &amp; Greet</div><div class="s">Arrive, get a portrait, settle in.</div></div></div>
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_4974361c34ca4f90aab24256d097a25b~mv2.jpg" alt="Speakers first half"><div class="meta"><div class="t">6:45</div><div class="n">Speakers</div><div class="s">Shared human experiences &amp; hardships</div></div></div>
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_3193ea48dde34e56b1c01a86e045c87b~mv2.jpg" alt="Connections"><div class="meta"><div class="t">7:30</div><div class="n">Connections</div><div class="s">Personalised Introductions Exchanges</div></div></div>
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_283ec04798ad4997a30686e9cff3c4fd~mv2.jpg" alt="Speakers second half"><div class="meta"><div class="t">8:15</div><div class="n">Speakers</div><div class="s">Trials, tribulations, and setbacks</div></div></div>
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_da1ae5e78d98484fb39aa50c843ab59b~mv2.jpg" alt="Headline speaker"><div class="meta"><div class="t">9:00</div><div class="n">Headline Speaker</div><div class="s">Professional tangible insights</div></div></div>
      <div class="beat"><img class="still" src="https://static.wixstatic.com/media/111174_2ba0e8f810114e89b020ac5046bcc9c6~mv2.jpg" alt="DJ set"><div class="meta"><div class="t">9:30</div><div class="n">Music &amp; Drinks</div><div class="s">Stay as long as it's good</div></div></div>
    </div>
    <p class="flow-close">Perfectionism and self-judgment stay at the door.</p>
  </div>
</section>

<!-- ============ 6 · SPEAKERS ============ -->
<section class="band deep speckle">
  <div class="wrap">
    <div class="eyebrow"><span class="label">Human Experience Shared</span><span class="rule"></span></div>

    <div class="spk-reels">
      <div class="reel headline is-soon">
        <div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div>
        <div class="grad"></div>
        <span class="toptag pill">Headline</span>
        <div class="taste">Reel revealed soon</div>
        <div class="cap"><div class="nm">Announcing soon</div></div>
      </div>
      <div class="reel is-soon">
        <div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div>
        <div class="grad"></div>
        <span class="toptag pill">Featured</span>
        <div class="taste">Reel revealed soon</div>
        <div class="cap"><div class="nm">Announcing soon</div></div>
      </div>
    </div>
    <p class="spk-note">We reveal the lineup closer to event night. Every speaker is intentionally selected. Come for the speakers, return because of the full experience.</p>

    <div class="lineup-h">And the rest of the lineup</div>
    <div class="lineup">
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
      <div class="person"><div class="ph"><div class="tba"><svg viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg></div></div><div class="nm">Announcing soon</div><div class="tp">&nbsp;</div></div>
    </div>
  </div>
</section>

<!-- ============ 7 · PERSONALISED INTRODUCTIONS ============ -->
<section class="band">
  <div class="wrap">
    <div class="eyebrow"><span class="label">Personalised Introductions</span><span class="rule"></span></div>
    <p class="intro-sub">Remove the guess work and luck of your networking success.</p>
    <div class="steps">
      <div class="step"><div class="num">01</div><h4>You tell us</h4><p>Who you are, how you best serve, and what your core challenge is, as a human being.</p></div>
      <div class="step"><div class="num">02</div><h4>We match</h4><p>We send you personalised suggestions for who to connect with before arrival and why.</p></div>
      <div class="step"><div class="num">03</div><h4>You meet</h4><p>Initiate conversations and book meetings with intention, no guessing required.</p></div>
    </div>
    <p class="lede gold" style="margin-top:24px;font-weight:600;">Matched on <span style="color:var(--ink-hi);">who you are</span>, not what you sell.</p>
  </div>
</section>

<!-- ============ 8 · THE EXPERIENCE (gallery) ============ -->
<section class="band-tight deep speckle">
  <div class="wrap">
    <div class="gal-top">
      <div class="eyebrow" style="margin-bottom:0;"><span class="label">The experience</span><span class="rule" style="width:120px;"></span></div>
      <div class="gal-arrows">
        <button class="arrow" data-scroll="-1" aria-label="Previous">‹</button>
        <button class="arrow" data-scroll="1" aria-label="Next">›</button>
      </div>
    </div>
    <h2 class="h-2" style="margin-top:14px;">Last month at GIVE IT ALL.</h2>
    <div class="strip" id="gallery">
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_4a59829e1eaf45fcb04859524d2f9e48~mv2.jpg" alt="Arrivals and mingling"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_85dc1010f46c4919b825227bd9ec2ffc~mv2.jpg" alt="The full room"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_7b0f8cbd57fd44fdaf8d9c6e05cad969~mv2.jpg" alt="On stage"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_d16c55ea687d4d0785a1f3ca2cefda56~mv2.jpg" alt="An attendee sharing"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_1cb8d1c1148c49fd99a384954abc839f~mv2.jpg" alt="Real conversation"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_566cc6ef79eb4234ba9be08e0391c3fb~mv2.jpg" alt="Connecting"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_7e9d01dc29bd49bb943f4bceae879d61~mv2.jpg" alt="A moment of giving"></div>
      <div class="shot"><img class="still" src="https://static.wixstatic.com/media/111174_b513232ca5e847d381bba7f1fbb9bb41~mv2.jpg" alt="The room, alive"></div>
    </div>
    <a class="btn btn-ghost btn-sm" href="https://1drv.ms/f/c/b2b7d4f15ca7f66b/IgA1H1ikkocFQp_vjCuO9yEEAW0RDs__JW-g7eMpi7rbME0?e=ayAoSb" target="_blank" rel="noopener" style="margin-top:8px;">See the full gallery →</a>
  </div>
</section>

<!-- ============ 9 · SOCIAL PROOF ============ -->
<section class="band">
  <div class="wrap">
    <div class="eyebrow center"><span class="label">What people leave saying</span><span class="rule" style="max-width:200px;"></span></div>
    <div class="proof-grid">
      <div class="reel" data-reel="Attendee testimonials" data-video="https://video.wixstatic.com/video/111174_2e811377751843e3a811894669d1d958/1080p/mp4/file.mp4">
        <img class="still" src="https://static.wixstatic.com/media/111174_e5e5ddd61aa24416a50183c9c71a6b01~mv2.jpg" alt="Attendee testimonials"><div class="grad"></div>
        <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      </div>
      <div class="written-col">
        <div class="quote-card">
          <div class="qm">"</div>
          <p class="q">I'd given up on Bali. I felt like there was no opportunity to connect. Then I showed up and was surrounded by visionary entrepreneurs. Now it's something I want to do every month.</p>
          <div class="stars">★★★★★</div>
          <p class="who"><b>Mij</b> · Personal Branding Expert</p>
        </div>
        <div class="quote-card">
          <div class="qm">"</div>
          <p class="q">A lot of people talk about connection. Here, there are enough small nudges and rituals that actually make it happen. That's special.</p>
          <div class="stars">★★★★★</div>
          <p class="who"><b>Matthew</b> · Tech Founder</p>
        </div>
      </div>
    </div>
    <div class="stat-strip">
      <div class="stat"><span class="big">25+</span><span class="lbl">Events</span></div>
      <div class="stat"><span class="big">200+</span><span class="lbl">Speakers</span></div>
      <div class="stat"><span class="big">1,250+</span><span class="lbl">Attendees</span></div>
    </div>
    <div style="text-align:center;margin-top:30px;"><a class="btn btn-gold" href="https://checkout.giveitallevent.com/give-it-all-bali-booking" target="_blank" rel="noopener">Get tickets now →</a></div>
  </div>
</section>

<!-- ============ 10 · WHO IT'S FOR ============ -->
<section class="band-tight deep speckle">
  <div class="wrap">
    <div class="eyebrow"><span class="label">We're not for everyone</span><span class="rule"></span></div>
    <div class="forwho">
      <div class="forcol">
        <h4><span class="gold">This is for you if…</span></h4>
        <ul>
          <li><span class="ic">✓</span> You crave depth and connection in networking</li>
          <li><span class="ic">✓</span> You appreciate relationships beyond a transaction</li>
          <li><span class="ic">✓</span> You trust real &amp; raw before performance in relationships</li>
          <li><span class="ic">✓</span> You contribute through curiosity, vulnerability, and presence</li>
        </ul>
      </div>
      <div class="forcol no">
        <h4><span class="steel">This isn't for you if…</span></h4>
        <ul>
          <li><span class="ic">✕</span> You're planning to work the room to collect leads.</li>
          <li><span class="ic">✕</span> Vulnerability scares you and small talk is enough.</li>
          <li><span class="ic">✕</span> You try harder to impress than to be real</li>
          <li><span class="ic">✕</span> You want a platform to pitch from</li>
        </ul>
      </div>
    </div>
    <div class="chips" style="margin-top:22px;justify-content:center;">
      <span class="chip"><span class="dot"></span>Be human</span>
      <span class="chip"><span class="dot"></span>Give generously</span>
      <span class="chip"><span class="dot"></span>No pitches</span>
      <span class="chip"><span class="dot"></span>Start on time</span>
    </div>
  </div>
</section>

<!-- ============ 11 · YOUR HOST ============ -->
<section class="band">
  <div class="wrap">
    <div class="eyebrow"><span class="label">Your host</span><span class="rule"></span></div>
    <div class="host">
      <div class="portrait"><img class="still" src="https://static.wixstatic.com/media/111174_ca7594f5ff61480f9843d177e9f2a8ac~mv2.jpg" alt="Daniel Lawson"></div>
      <div>
        <h2 class="h-2">Daniel Lawson.</h2>
        <p class="steel" style="margin-top:12px;">The corporate world left scars within me around how to network, connect, generate leads, and develop great relationships that felt real. But 4 years on, building alone and traveling the world, I felt isolated so I returned to entrepreneurial and nomad events in hopes of connecting again. It was worse than I remembered.</p>
        <p class="steel">GIVE IT ALL is my attempt to do better. An experience designed to fill that which I craved. A place to put the performance down and reconnect, as a human again.</p>
        <div class="sig">Daniel</div>
        <blockquote>Expect honesty. Expect resonance. Expect to be seen.</blockquote>
        <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener" style="display:inline-block;margin-top:18px;color:var(--gold);font-weight:600;font-size:.95rem;">More about the founders →</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ 12 · VALUE STACK + PRICE ============ -->
<section class="band deep speckle" id="tickets">
  <div class="wrap">
    <div class="eyebrow center"><span class="label">Included in the Experience</span><span class="rule" style="max-width:160px;"></span></div>
    <div class="money">
      <div class="money-grid">
        <div class="stack">
          <h4>In the room <span>tangible</span></h4>
          <ul>
            <li><span class="ic">✦</span> Real experiences from real people for real impact.</li>
            <li><span class="ic">✦</span> Professional photography &amp; B-roll with full usage rights</li>
            <li><span class="ic">✦</span> Curated personal introduction suggestions on the night</li>
            <li><span class="ic">✦</span> Canapés, a cocktail, and a venue with a vibe</li>
          </ul>
        </div>
        <div class="stack">
          <h4>What you leave with <span>intangible</span></h4>
          <ul>
            <li><span class="ic">✦</span> 2 or 3 quality booked meetings in the calendar</li>
            <li><span class="ic">✦</span> Takeaways for your life, business, and relationships</li>
            <li><span class="ic">✦</span> Leave feeling elevated as a highlight of your month</li>
            <li><span class="ic">✦</span> The feeling that, finally, you've found your people</li>
          </ul>
        </div>
      </div>
      <div class="price-row">
        <div>
          <span class="eb-tag">Early-bird</span>
          <div class="price"><span class="now">$20</span></div>
          <p class="incl" id="priceNote" style="margin-top:10px;">Goes to <b style="color:var(--ink-hi);">$25</b> after the early-bird closes. Includes the talks, introductions, portrait, canapés &amp; a cocktail.</p>
        </div>
        <div class="price-cta">
          <a class="btn btn-gold" href="https://checkout.giveitallevent.com/give-it-all-bali-booking" target="_blank" rel="noopener">Get tickets now →</a>
          <span class="timer-mini" id="ebPriceWrap">Early-bird ends in <b>02d : 07h : 56m : 44s</b></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 13 · FAQ ============ -->
<section class="band" id="faq">
  <div class="wrap">
    <div class="eyebrow center"><span class="label">Good questions</span><span class="rule" style="max-width:160px;"></span></div>
    <div class="faq">
      <div class="qa"><button>Not in Bali? What are my options?</button><div class="a"><p>Join the virtual experience, the talks and the connection, and a unique experience. You'll find the link at the top of the page.</p></div></div>
      <div class="qa"><button>I don't know anyone. Will I feel out of place?</button><div class="a"><p>It's normal. This is the courage it takes to go somewhere new. Most attendees say that they forgot about this after the first hello. Our community is very welcoming, and we even give you personalised introductions to get you started.</p></div></div>
      <div class="qa"><button>Is this a pitch / sales event?</button><div class="a"><p>We are a connection first event. We never pitch from stage or in conversation, however business is still exchanged, and invitations are made because we then trust each other to go further together.</p></div></div>
      <div class="qa"><button>What's actually included in the ticket?</button><div class="a"><p>The talks, personalised introductions, professional photos and video, entry drink and canapés through the night, plus an experience that will be the highlight of your month.</p></div></div>
      <div class="qa"><button>What should I wear / when should I arrive?</button><div class="a"><p>Smart casual, but full permission to glam up! There are few opportunities in Bali to put on the suit or wear the red cocktail dress. Full permission to do you. We open the doors at 6pm and our community arrives on time.</p></div></div>
      <div class="qa"><button>Can I get a refund if plans change?</button><div class="a"><p>Your ticket is transferable before 4pm on Thursday - pass it to a friend or roll it to a future night. Reach out and we'll sort it.</p></div></div>
    </div>
  </div>
</section>

<!-- ============ 14 · URGENCY (sales close) ============ -->
<section class="band-tight deep speckle">
  <div class="wrap urgency">
    <div class="eyebrow center"><span class="label">Before they're gone</span><span class="rule" style="max-width:160px;"></span></div>
    <div class="countdown" id="salesCountdown">
      <div class="cd"><div class="v">14</div><div class="l">days</div></div>
      <div class="cd"><div class="v">12</div><div class="l">hrs</div></div>
      <div class="cd"><div class="v">44</div><div class="l">min</div></div>
      <div class="cd"><div class="v">44</div><div class="l">sec</div></div>
    </div>
    <div class="cd-cap">until sales close</div>
  </div>
</section>

<!-- ============ 15 · FINAL CTA ============ -->
<section class="final band">
  <div class="bg" style="background-image:url('https://static.wixstatic.com/media/111174_7b0f8cbd57fd44fdaf8d9c6e05cad969~mv2.jpg');background-size:cover;background-position:center;"></div>
  <div class="scrim"></div>
  <div class="content">
    <div class="wrap">
      <h2 class="h-1" style="max-width:22ch;margin:0 auto;text-align:center;">The event you've been looking for. <span class="gold">The experience where you belong.</span></h2>
      <div class="facts" style="margin-top:22px;"><span>23 July</span><span class="sep">·</span><span>6:00pm</span><span class="sep">·</span><span>Amavi, Canggu</span></div>
      <div style="display:flex;justify-content:center;margin-top:6px;"><span class="timer-mini" id="finalTimer">Sales close in 14d 12h 44m</span></div>
      <div style="display:flex;justify-content:center;margin-top:22px;"><a class="btn btn-gold" href="https://checkout.giveitallevent.com/give-it-all-bali-booking" target="_blank" rel="noopener">Get tickets now →</a></div>
      <p class="quiet">Not in Bali? Virtual experience launching soon.</p>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->


<!-- ============ LIGHTBOX ============ -->
<div class="lb" id="lightbox" role="dialog" aria-modal="true">
  <div class="box">
    <button class="close" id="lbClose" aria-label="Close">×</button>
    <div id="lbContent"></div>
  </div>
</div>

`;

  // load the brand fonts once (document-level so the shadow content can use them)
  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIAEventPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;
      var host = this;

      // smooth-scroll for in-page anchors (#top etc.) across the shadow boundary
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      // ---- page logic (scoped to the shadow root) ----
      
/* ============================================================
   CONFIG - edit per event, then re-deploy.
   ============================================================ */
const CONFIG = {
  event: { date:"23 July", time:"6:00pm", venue:"Amavi, Canggu" },
  price: { early:20, full:25, currency:"$" },
  reveal:"Jul 22",
  links: { tickets:"#", virtual:"#", drive:"#", members:"#" },

  /* ===== TIMERS — the ONLY two dates you change each event =====
     Keep the +08:00 so the deadline is read in Bali time for every visitor.
     Format: YYYY-MM-DDTHH:MM:SS+08:00

     earlyBirdEnds  When the $20 early-bird ends (usually ~2 weeks out).
                    On its own, when this passes: price flips to $25, the
                    early-bird lines disappear, the hero switches to a
                    "Tickets close in…" line, and sales keep running.
     salesClose     When ticket sales close (e.g. event start). When this
                    passes: countdowns read "Sales are now closed" and the
                    gold buttons disable.                                    */
  earlyBirdEnds: "2026-07-12T23:59:00+08:00",
  salesClose:   "2026-07-23T16:00:00+08:00"
};

/* ---- FAQ accordion ---- */
root.querySelectorAll('.qa button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const qa=btn.parentElement;
    const open=qa.classList.contains('open');
    root.querySelectorAll('.qa').forEach(x=>{x.classList.remove('open');x.querySelector('.a').style.maxHeight=null;});
    if(!open){qa.classList.add('open');const a=qa.querySelector('.a');a.style.maxHeight=a.scrollHeight+'px';}
  });
});

/* ---- Gallery horizontal scroll ---- */
const gallery=root.getElementById('gallery');
root.querySelectorAll('[data-scroll]').forEach(b=>{
  b.addEventListener('click',()=>{
    const dir=+b.dataset.scroll;
    gallery.scrollBy({left:dir*Math.min(gallery.clientWidth*0.8,360),behavior:'smooth'});
  });
});

/* ---- Lightbox: gallery shots + reels ---- */
const lb=root.getElementById('lightbox');
const lbContent=root.getElementById('lbContent');
function openLB(html){lbContent.innerHTML=html;lb.classList.add('on');document.body.style.overflow='hidden';}
function closeLB(){lb.classList.remove('on');lbContent.innerHTML='';document.body.style.overflow='';}
root.getElementById('lbClose').addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB();});

root.querySelectorAll('.shot').forEach(s=>{
  s.addEventListener('click',()=>{
    const img=s.querySelector('img');
    if(img){ openLB('<img src="'+img.getAttribute('src')+'" alt="">'); return; }
    const label=s.querySelector('.still').dataset.asset||'Photo';
    openLB('<div class="ph">'+label+'<br><span style="opacity:.6">swap with full-resolution image</span></div>');
  });
});
root.querySelectorAll('.reel').forEach(r=>{
  r.addEventListener('click',()=>{
    const vid=r.getAttribute('data-video');
    if(!vid || r.classList.contains('playing')) return;   // placeholders (no video) stay inert
    root.querySelectorAll('.reel-video').forEach(x=>x.pause());  // pause any other playing reel
    r.classList.add('playing');
    const v=document.createElement('video');
    v.src=vid; v.controls=true; v.autoplay=true; v.playsInline=true;
    v.setAttribute('playsinline',''); v.className='reel-video';
    r.appendChild(v); v.play().catch(()=>{});
  });
});

/* ============================================================
   LIVE TIMERS — fully date-driven from CONFIG. Two phases handled
   automatically, no manual edits between events:
     1) early-bird live   -> $20, both countdowns running
     2) early-bird passed  -> $25, early-bird lines gone, sales-close
                              countdown still running (hero shows it)
     3) sales closed       -> "Sales are now closed", CTAs disabled
   ============================================================ */
(function timers(){
  const EB = new Date(CONFIG.earlyBirdEnds).getTime();
  const SC = new Date(CONFIG.salesClose).getTime();
  const two = n => String(n).padStart(2,'0');

  function rem(target){
    const s = Math.floor((target - Date.now())/1000);
    if (s <= 0) return {d:0,h:0,m:0,s:0,done:true};
    return {d:Math.floor(s/86400), h:Math.floor(s%86400/3600), m:Math.floor(s%3600/60), s:s%60, done:false};
  }
  const compact = t => t.d + 'd ' + two(t.h) + 'h ' + two(t.m) + 'm';                   // hero / final
  const full    = t => two(t.d)+'d : '+two(t.h)+'h : '+two(t.m)+'m : '+two(t.s)+'s';    // price line

  const heroLine   = root.getElementById('heroTimer');
  const ebPriceWrap= root.getElementById('ebPriceWrap');
  const priceNow   = root.querySelector('.price .now');
  const ebTag      = root.querySelector('.eb-tag');
  const priceNote  = root.getElementById('priceNote');
  const salesCd    = root.getElementById('salesCountdown');
  const salesCap   = root.querySelector('.cd-cap');
  const finalTimer = root.getElementById('finalTimer');
  const goldCtas   = root.querySelectorAll('a.btn-gold');

  function paint(el, t){
    if(!el) return;
    const cells = el.querySelectorAll('.v');
    [t.d,t.h,t.m,t.s].forEach((v,i)=>{ if(cells[i]) cells[i].textContent = two(v); });
  }

  function tick(){
    const eb = rem(EB), sc = rem(SC);

    /* ---- Phase 3: sales closed ---- */
    if (sc.done){
      if(salesCd)  salesCd.style.display = 'none';
      if(salesCap) salesCap.textContent  = 'Sales are now closed';
      if(finalTimer) finalTimer.textContent = 'Sales are now closed';
      if(heroLine) heroLine.textContent = 'Sales are now closed';
      if(ebPriceWrap) ebPriceWrap.style.display = 'none';
      goldCtas.forEach(b=>{ b.textContent='Sales closed'; b.style.opacity='.55'; b.style.pointerEvents='none'; });
      return false; // signal: stop ticking
    }

    /* ---- sales-close countdown always runs until closed ---- */
    paint(salesCd, sc);
    if(finalTimer) finalTimer.textContent = 'Sales close in ' + compact(sc);

    /* ---- Phase 1 vs 2: early-bird ---- */
    if (!eb.done){
      if(heroLine)    heroLine.innerHTML = 'Early-bird ends in <b>' + compact(eb) + '</b>';
      if(ebPriceWrap){ ebPriceWrap.style.display=''; ebPriceWrap.innerHTML = 'Early-bird ends in <b>' + full(eb) + '</b>'; }
    } else {
      if(priceNow) priceNow.textContent = CONFIG.price.currency + CONFIG.price.full;   // $25
      if(ebTag)    ebTag.textContent    = 'Standard';
      if(priceNote)priceNote.innerHTML  = 'Includes the talks, introductions, portrait, canapés &amp; a cocktail.';
      if(ebPriceWrap) ebPriceWrap.style.display = 'none';
      if(heroLine) heroLine.innerHTML = 'Tickets close in <b>' + compact(sc) + '</b>';
    }
    return true;
  }

  if (tick() !== false){
    const id = setInterval(()=>{ if (tick() === false) clearInterval(id); }, 1000);
  }
})();

    }
  }
  customElements.define('gia-event-page', GIAEventPage);
})();
