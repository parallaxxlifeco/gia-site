/* GIVE IT ALL — About page, packaged as a Wix Custom Element.
   Generated from about-us.html. Tag name to set in Wix: <gia-about-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site.
   Keeps its own nav + footer (turn Wix's global header/footer OFF on this page).

   TO SWAP THE FULL-STORY VIDEO: change data-yt="..." in the story section
   (and the poster src just above it). Currently set to L6UciqWU5eI. */
(function(){
  if (customElements.get('gia-about-page')) return;

  var CSS = `
  :host{
    --navy:#061938;
    --navy-card:#0D2350;
    --navy-deep:#04122A;
    --gold:#E8C65F;
    --ink:#F4F6FB;
    --body:#E2E7F1;
    --steel:#B1BFD7;
    --white:#FFFFFF;
    --cream:#F2EBD9;
    --cream-deep:#EAE0C7;
    --maxw:1240px;
    --gutter:clamp(20px,5vw,64px);
    --r-pill:999px;
    --r-card:18px;
    --ease:cubic-bezier(.22,.61,.36,1);
  }
  :host{
    display:block;
    font-family:'Montserrat',system-ui,sans-serif;
    background:var(--navy);
    color:var(--body);
    -webkit-font-smoothing:antialiased;
    line-height:1.5;
    overflow-x:clip;
  }
  *{box-sizing:border-box;margin:0;padding:0}
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
    font-size:clamp(1.5em,3.4vw,2.1em);
    color:var(--gold);
    line-height:1;
  }
  .label{
    font-size:.72em;
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
  h1{font-size:clamp(2.6em,7.2vw,5.1em)}
  h2{font-size:clamp(2em,5vw,3.5em)}
  h3{font-size:clamp(1.3em,2.6vw,1.7em);letter-spacing:-.01em}
  .gold{color:var(--gold)}
  .steel{color:var(--steel)}
  .lead{
    font-size:clamp(1.05em,1.6vw,1.3em);
    color:var(--steel);
    font-weight:400;
    max-width:46ch;
    line-height:1.6;
  }

  /* ---------- buttons ---------- */
  .btn{
    display:inline-flex;align-items:center;gap:.6em;
    font-family:inherit;font-weight:700;font-size:1em;
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
    color:var(--steel);font-weight:600;font-size:.98em;
    border-bottom:1px solid transparent;transition:color .2s,border-color .2s;white-space:nowrap;
  }
  .link-quiet:hover{color:var(--gold);border-color:var(--gold)}
  .band-cream .link-quiet{color:#5b5440}
  .band-cream .link-quiet:hover{color:var(--navy)}
  .gold-link{color:var(--gold);font-weight:700;font-size:.95em;display:inline-flex;gap:.4em;align-items:center}
  .gold-link .arrow{transition:transform .25s var(--ease)}
  .gold-link:hover .arrow{transform:translateX(4px)}

  /* ---------- pills ---------- */
  .pill{
    display:inline-flex;align-items:center;gap:.45em;
    border-radius:var(--r-pill);
    padding:.5em 1.05em;
    font-size:.78em;font-weight:700;letter-spacing:.04em;
    background:rgba(232,198,95,.1);
    color:var(--gold);
    border:1px solid rgba(232,198,95,.55);
    white-space:nowrap;
  }

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
  .logo{display:flex;align-items:center;gap:.6em;font-weight:800;letter-spacing:-.02em;font-size:1.12em}
  .logo .mark{
    width:30px;height:30px;border-radius:8px;
    background:var(--gold);color:var(--navy);
    display:grid;place-items:center;font-size:.95em;font-weight:800;
    flex:0 0 auto;
  }
  .nav-links{display:flex;align-items:center;gap:30px}
  .nav-links a{font-size:.92em;font-weight:500;color:var(--steel);transition:color .2s;white-space:nowrap}
  .nav-links a:hover,.nav-links a.active{color:var(--ink)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-drop-toggle{background:none;border:none;font-family:inherit;font-size:.92em;font-weight:500;color:var(--steel);cursor:pointer;display:inline-flex;align-items:center;gap:.35em;transition:color .2s;white-space:nowrap;padding:0}
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
  .nav-drop a{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:9px 12px;border-radius:9px;font-size:.9em;font-weight:500;color:var(--body);white-space:nowrap;transition:background .2s,color .2s}
  .nav-drop a:hover{background:rgba(232,198,95,.1);color:var(--gold)}
  .nav-drop a.is-soon{color:var(--steel)}
  .nav-drop a.is-soon span{font-size:.6em;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(177,191,215,.35);border-radius:999px;padding:.15em .6em;font-weight:700}
  .nav-cta{display:flex;align-items:center;gap:18px}
  .nav-cta .btn{padding:.7em 1.3em;font-size:.9em}
  .menu-btn{display:none;background:none;border:none;color:var(--body);cursor:pointer;flex-direction:column;gap:5px;padding:6px}
  .menu-btn span{display:block;width:24px;height:2px;background:var(--body);border-radius:2px}
  @media(max-width:880px){
    header.nav{background:rgba(6,25,56,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(177,191,215,.12)}
    .nav-inner{padding:10px 16px;gap:10px;min-width:0}
    .logo{font-size:1em;min-width:0;flex-shrink:1}
    .logo .mark{width:26px;height:26px;font-size:.85em}
    .nav-cta{gap:10px;flex-shrink:0}
    .nav-cta .btn{padding:.6em .95em;font-size:.8em}
    .nav-links{
      display:none;
      position:absolute;top:100%;left:0;right:0;
      flex-direction:column;align-items:stretch;gap:2px;
      background:rgba(6,25,56,.98);backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(177,191,215,.14);
      padding:12px var(--gutter) 22px;
    }
    .nav.menu-open .nav-links{display:flex}
    .nav-links > a{padding:13px 4px;font-size:1.05em;border-bottom:1px solid rgba(177,191,215,.08)}
    .nav-item{flex-direction:column;align-items:stretch}
    .nav-drop-toggle{padding:13px 4px;font-size:1.05em;justify-content:space-between;width:100%}
    .nav-item .nav-drop{
      position:static;transform:none;opacity:1;visibility:visible;pointer-events:auto;
      background:transparent;border:none;box-shadow:none;backdrop-filter:none;
      min-width:0;padding:2px 0 10px 12px;margin:0;
    }
    .nav-item .nav-drop a{font-size:.98em;padding:9px 8px}
    .nav-drop-toggle .caret{display:none}
    .menu-btn{display:flex;padding:6px 2px}
  }
  /* very small phones: shrink the bar so the hamburger never runs off-screen */
  @media(max-width:380px){
    .nav-inner{padding:10px 12px;gap:8px}
    .logo{font-size:.9em;gap:.45em}
    .logo .mark{width:24px;height:24px;font-size:.78em}
    .nav-cta{gap:8px}
    .nav-cta .btn{padding:.55em .8em;font-size:.74em}
  }

  /* ---------- HERO (about) ---------- */
  .hero{
    min-height:clamp(540px,78vh,760px);
    display:flex;align-items:flex-end;
    position:relative;overflow:hidden;
    padding-bottom:clamp(48px,8vh,90px);
  }
  .hero-bg{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center 32%}
  .hero-scrim{
    position:absolute;inset:0;z-index:1;
    background:
      linear-gradient(to top,rgba(6,25,56,.97) 0%,rgba(6,25,56,.66) 40%,rgba(6,25,56,.34) 70%,rgba(6,25,56,.6) 100%),
      linear-gradient(105deg,rgba(6,25,56,.72) 0%,rgba(6,25,56,0) 58%);
  }
  .hero-content{position:relative;z-index:3;width:100%}
  .hero h1{max-width:14ch;margin:.28em 0 .42em}
  .hero .lead{max-width:50ch;font-size:clamp(1.08em,1.7vw,1.35em)}

  /* ---------- generic section spacing ---------- */
  .sec{padding-block:clamp(80px,12vh,150px)}
  .sec-sm{padding-block:clamp(56px,8vh,90px)}

  /* ---------- MESSAGE FROM US ---------- */
  .message{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(36px,6vw,76px);align-items:center}
  @media(max-width:820px){.message{grid-template-columns:1fr;gap:clamp(30px,5vh,48px)}}
  .message h2{max-width:18ch;margin-bottom:26px}
  .message p{font-size:clamp(1.05em,1.5vw,1.22em);color:var(--body);max-width:54ch;margin-bottom:20px;line-height:1.65}
  .message p:last-of-type{margin-bottom:0}
  .message .mark-q{font-family:'Caveat',cursive;color:var(--gold);font-weight:700;font-size:clamp(1.4em,2.6vw,1.9em);margin-bottom:10px;display:block}
  .message-photo{position:relative;border-radius:var(--r-card);overflow:hidden;border:1px solid rgba(177,191,215,.16);box-shadow:0 30px 70px -36px rgba(0,0,0,.8)}
  .message-photo img{width:100%;height:100%;min-height:clamp(380px,52vh,560px);object-fit:cover;object-position:center 24%}

  /* ---------- WATCH FULL STORY (video) ---------- */
  .story-head{text-align:center;max-width:54ch;margin:0 auto clamp(34px,5vh,52px)}
  .story-head .label{display:block;margin-bottom:14px}
  .story-head p{margin-top:16px}
  .story-head .lead{margin-inline:auto;text-align:center}
  .story-title{white-space:nowrap;font-size:clamp(1.15em,4.7vw,3em)}
  .video-frame{
    position:relative;max-width:980px;margin:0 auto;
    aspect-ratio:16/9;border-radius:var(--r-card);overflow:hidden;
    border:1px solid rgba(232,198,95,.4);
    box-shadow:0 40px 90px -40px rgba(0,0,0,.85);
    cursor:pointer;background:#000;
  }
  .video-frame img.poster{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s var(--ease)}
  .video-frame:hover img.poster{transform:scale(1.04)}
  .video-frame .v-scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,18,42,.18),rgba(4,18,42,.62))}
  .video-frame .v-play{
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:84px;height:84px;border-radius:50%;background:rgba(232,198,95,.94);
    display:grid;place-items:center;z-index:3;transition:transform .2s var(--ease);
    animation:vpulse 2.6s ease-out infinite;
  }
  .video-frame:hover .v-play{transform:translate(-50%,-50%) scale(1.07);animation:none}
  .video-frame .v-play svg{width:30px;height:30px;margin-left:4px;fill:var(--navy)}
  .video-frame .v-cap{position:absolute;left:0;right:0;bottom:20px;z-index:3;text-align:center;color:var(--ink);font-weight:600;font-size:.95em;letter-spacing:.02em;text-shadow:0 2px 14px rgba(2,7,18,.6)}
  .video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0;z-index:5}
  @keyframes vpulse{0%{box-shadow:0 0 0 0 rgba(232,198,95,.55)}70%{box-shadow:0 0 0 22px rgba(232,198,95,0)}100%{box-shadow:0 0 0 0 rgba(232,198,95,0)}}
  @media(prefers-reduced-motion:reduce){.video-frame .v-play{animation:none}}

  /* ---------- FOUNDERS (alternating rows) ---------- */
  .founder{display:flex;align-items:center;gap:clamp(34px,5vw,64px)}
  .founder.flip{flex-direction:row-reverse}
  .founder + .founder{margin-top:clamp(64px,9vh,120px)}
  .founder-body{flex:1 1 auto;max-width:600px}
  @media(max-width:820px){
    .founder,.founder.flip{flex-direction:column;align-items:flex-start;gap:clamp(26px,5vh,42px)}
    .founder-photo{flex-basis:auto}
    .founder-body{max-width:100%}
  }
  .founder-photo{position:relative;flex:0 0 288px;width:288px;max-width:288px;border-radius:var(--r-card);overflow:hidden;border:1px solid rgba(177,191,215,.16);box-shadow:0 30px 70px -38px rgba(0,0,0,.8)}
  .founder-photo img{width:100%;aspect-ratio:1/1;object-fit:cover}
  .founder .role{margin-bottom:16px}
  .founder h3{font-size:clamp(1.5em,3vw,2.1em);margin-bottom:6px}
  .founder .kicker{font-family:'Caveat',cursive;color:var(--gold);font-weight:700;font-size:clamp(1.25em,2.2vw,1.6em);line-height:1;margin-bottom:18px}
  .founder p{color:var(--steel);font-size:clamp(1.02em,1.4vw,1.15em);line-height:1.65;max-width:50ch;margin-bottom:18px}
  .founder p:last-of-type{margin-bottom:24px}
  .founder p .ink{color:var(--ink);font-weight:600}

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
  .foot-col h4{font-size:.64em;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);margin-bottom:18px;font-weight:700}
  .foot-col a{display:block;color:var(--body);opacity:.82;font-size:.8em;margin-bottom:12px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:30ch}
  .foot-brand .lead{font-size:.78em;margin-top:16px}
  .foot-social{display:flex;gap:18px;margin-top:20px}
  .foot-social a{color:var(--body);opacity:.82;font-size:.78em;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid rgba(177,191,215,.12);color:var(--steel);font-size:.72em}
@media(max-width:880px){.nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{transform:none !important}}

@media(max-width:600px){
  .foot-col h4{font-size:.62em;margin-bottom:12px}
  .foot-col a{font-size:.76em;margin-bottom:9px}
  .foot-brand .lead{font-size:.76em}
  .foot-social a{font-size:.76em}
  .foot-bottom{font-size:.7em}
}


  /* ---------- reveal (kept visible by default for reliable Wix render) ---------- */
  .reveal{opacity:0;transform:translateY(20px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
  .reveal.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){
    .reveal{opacity:1;transform:none;transition:none}
    .btn-gold{animation:none}
  }
  
/* site-wide type scale fix */
:host{ font-size:16px; overflow-x:hidden; }
@media(max-width:820px){ :host{ font-size:13px; } }

/* tighter mobile section spacing */
@media(max-width:820px){ .sec{ padding-block:34px; } .sec-sm{ padding-block:24px; } }
`;

  var HTML = `
<!-- ============ NAV ============ -->
<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="https://www.giveitallevent.com" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
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
          <div style="height:1px;background:rgba(177,191,215,.16);margin:6px 4px"></div>
          <a href="https://www.giveitallevent.com/events" style="color:var(--gold)">Events calendar</a>
        </div>
      </div>
      <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak</a>
      <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
      <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
      <a href="https://www.giveitallevent.com/about-us" class="active">About</a>
    </nav>
    <div class="nav-cta">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">Get tickets <span class="arrow">→</span></a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="hero-bg" aria-hidden="true" style="background-image:url('https://static.wixstatic.com/media/111174_85dc1010f46c4919b825227bd9ec2ffc~mv2.jpg')"></div>
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="hero-content">
    <div class="wrap">
      <p class="eyebrow reveal">this is how we got here</p>
      <h1 class="reveal" style="transition-delay:.08s">About <span class="gold">us</span>.</h1>
      <p class="lead reveal" style="transition-delay:.16s">We just craved real connection with other raw, real, vulnerable humans. So we built it.</p>
    </div>
  </div>
</section>

<!-- ============ A MESSAGE FROM US ============ -->
<section class="band-navy sec speckle" id="message">
  <div class="wrap">
    <div class="message">
      <div>
        <p class="label reveal">A message from us</p>
        <div class="rule reveal" style="max-width:340px"></div>
        <h2 class="reveal">We thought we could do <span class="gold">better</span>.</h2>
        <span class="mark-q reveal">"</span>
        <p class="reveal" style="transition-delay:.04s">For years, our experience of networking events felt the same. People jamming business cards down each other's throats. Stuck in conversations they didn't want to be in. Everyone trying to sell something to someone who didn't ask. Speaking events weren't too different, someone on stage making it all about themselves, getting you into whatever funnel they were running.</p>
        <p class="reveal" style="transition-delay:.06s">We just craved real connection. Real collaboration. With other raw, real, vulnerable human beings. So I thought I could do better. And I believe if you think you can do better, it's your responsibility to do so. That's where GIVE IT ALL was born.</p>
        <p class="reveal" style="transition-delay:.08s">The fundamentals are simple: connect as humans again. Because isn't that what we crave the most?</p>
      </div>
      <div class="message-photo reveal" style="transition-delay:.06s">
        <img src="https://static.wixstatic.com/media/111174_a5bbc41e3042428886e615762972c810~mv2.jpg" alt="A real moment at GIVE IT ALL">
      </div>
    </div>
  </div>
</section>

<!-- ============ WATCH THE FULL STORY (video) ============ -->
<section class="band-deep sec speckle" id="story">
  <div class="wrap">
    <div class="story-head">
      <span class="label reveal">Watch Now</span>
      <h2 class="reveal story-title">GIVE IT ALL - <span class="gold">The full story</span></h2>
    </div>

    <div class="video-frame reveal" data-yt="L6UciqWU5eI" role="button" tabindex="0" aria-label="Play the GIVE IT ALL story">
      <img class="poster" src="https://img.youtube.com/vi/L6UciqWU5eI/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/L6UciqWU5eI/hqdefault.jpg'" alt="The GIVE IT ALL story">
      <div class="v-scrim"></div>
      <div class="v-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      <div class="v-cap">The story of GIVE IT ALL</div>
    </div>
  </div>
</section>

<!-- ============ THE FOUNDERS (alternating rows) ============ -->
<section class="band-navy sec speckle" id="founders">
  <div class="wrap">
    <p class="label reveal">The founders</p>
    <div class="rule reveal" style="max-width:340px;margin-bottom:clamp(44px,6vh,72px)"></div>

    <article class="founder">
      <div class="founder-photo reveal">
        <img src="https://static.wixstatic.com/media/111174_d24b72a4efbe4b2cb9e6be67a3885a31~mv2.png" alt="Daniel Lawson, founder and host of GIVE IT ALL">
      </div>
      <div class="founder-body">
        <span class="pill role reveal">Founder &amp; Host</span>
        <h3 class="reveal" style="transition-delay:.04s">Daniel Lawson</h3>
        <p class="kicker reveal" style="transition-delay:.06s">shining the light on others</p>
        <p class="reveal" style="transition-delay:.08s">Daniel has a deep craving for connecting and collaborating as humans again. His superpower is creating <span class="ink">transformation through experience</span>, bringing people together in a raw, real, vulnerable way.</p>
        <p class="reveal" style="transition-delay:.1s">He loves to shine the light on others so they become the heroes in their own reality. Oftentimes you'll find him forgetting to introduce himself, or even mention what he does. That's just Daniel.</p>
        <a class="gold-link reveal" style="transition-delay:.12s" href="https://www.parallaxxtransformations.com/testimonials-daniel-lawson" target="_blank" rel="noopener">More about Daniel's work <span class="arrow">→</span></a>
      </div>
    </article>

    <article class="founder flip">
      <div class="founder-photo reveal">
        <img src="https://static.wixstatic.com/media/111174_9328f5903974498e825fcc4bff052194~mv2.png" alt="Luiza Samarova, co-host of GIVE IT ALL">
      </div>
      <div class="founder-body">
        <span class="pill role reveal">Co-Host</span>
        <h3 class="reveal" style="transition-delay:.04s">Luiza Samarova</h3>
        <p class="kicker reveal" style="transition-delay:.06s">the glue that holds it together</p>
        <p class="reveal" style="transition-delay:.08s">Luiza has been the glue that keeps GIVE IT ALL together. She is the reason we still show up through the hardships, the trials and the tribulations. When Daniel couldn't give it all, <span class="ink">Luiza did</span>. A professional in PR and communications working with a number of high-end clients, she is also a strong, independent woman who knows she was meant for more.</p>
        <p class="reveal" style="transition-delay:.1s">Attending networking events, she kept noticing something that frustrated her, the majority of women in the room were merely plus ones to the men beside them. Where are all the inspiring women who are also building, she'd ask. So she did something about it, launching her podcast Not Just His Plus One to attract other women who know they're meant for more, and to have the conversations that matter.</p>
        <a class="gold-link reveal" style="transition-delay:.12s" href="https://www.youtube.com/@NotJustHisPlusOne" target="_blank" rel="noopener">Explore the podcast <span class="arrow">→</span></a>
      </div>
    </article>
  </div>
</section>

<!-- ============ CLOSING CALL ============ -->
<section class="closing sec speckle">
  <div class="closing-bg" aria-hidden="true"></div>
  <div class="wrap">
    <p class="eyebrow reveal">come find out for yourself</p>
    <h2 class="reveal" style="transition-delay:.06s">Connect as <span class="gold">humans</span> again.</h2>
    <p class="lead reveal" style="transition-delay:.12s">The simplest idea we know, and the whole reason we built this. See it for yourself at the next event.</p>
    <div class="closing-actions reveal" style="transition-delay:.18s">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">See the next event <span class="arrow">→</span></a>
      <a href="https://www.youtube.com/@giveitall-speakerandnetworking" target="_blank" rel="noopener" class="link-quiet">Watch more on YouTube →</a>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="speckle">
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
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event">Next event</a>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
          <a href="https://www.giveitallevent.com/events">Events calendar</a>
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
          <a href="https://www.giveitallevent.com/about-us">Our story</a>
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
</footer>
  `;

  // load the brand fonts once (document-level so the shadow content can use them)
  if (!document.getElementById('gia-about-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-about-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIAAboutPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;

      // smooth-scroll for in-page anchors across the shadow boundary
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      // nav scrolled state
      var nav = root.getElementById('nav');
      var onScroll = function(){ if (nav) nav.classList.toggle('scrolled', window.scrollY > 40); };
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();

      // mobile menu toggle
      var menuBtn = root.querySelector('.menu-btn');
      if (menuBtn){
        menuBtn.addEventListener('click', function(){ nav.classList.toggle('menu-open'); });
        root.querySelectorAll('.nav-links a').forEach(function(a){
          a.addEventListener('click', function(){ nav.classList.remove('menu-open'); });
        });
      }

      // reveal on scroll (with a safety net so content is never left hidden)
      var reveals = root.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window){
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
        }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
        reveals.forEach(function(el){ io.observe(el); });
        setTimeout(function(){ reveals.forEach(function(el){ el.classList.add('in'); }); }, 2500);
      } else {
        reveals.forEach(function(el){ el.classList.add('in'); });
      }

      // click-to-load YouTube (keeps the page fast until the user wants the story)
      function loadStory(el){
        var id = el.getAttribute('data-yt');
        if (!id || id === 'VIDEO_ID'){ window.open('https://www.youtube.com/@giveitall-speakerandnetworking','_blank','noopener'); return; }
        el.innerHTML = '<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0" title="The story of GIVE IT ALL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      }
      root.querySelectorAll('.video-frame').forEach(function(v){
        v.addEventListener('click', function(){ loadStory(v); });
        v.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); loadStory(v); } });
      });
    }
  }
  customElements.define('gia-about-page', GIAAboutPage);
})();
