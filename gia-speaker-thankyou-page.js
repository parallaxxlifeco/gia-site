/* GIVE IT ALL - Speaker Thank-you page, packaged as a Wix Custom Element.
   Generated from thankyou-speaker.html. Tag name to set in Wix: <gia-speaker-thankyou-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site. */
(function(){
  if (customElements.get('gia-speaker-thankyou-page')) return;

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
    :host{display:block;
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
    .sec{ padding-block:clamp(30px,4vh,52px); }
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
    .nav-mobile-cta{ display:none; }
    .menu-btn{ display:none; background:none; border:none; color:var(--body); cursor:pointer; flex-direction:column; gap:5px; padding:6px; }
    .menu-btn span{ display:block; width:24px; height:2px; background:var(--body); border-radius:2px; }
    @media(max-width:880px){
      header.nav{ background:transparent; backdrop-filter:none; -webkit-backdrop-filter:none; border-bottom:none; }
      .nav-inner{ padding:10px var(--gutter); }
      .logo{ font-size:1em; }
      .logo .mark{ width:26px; height:26px; font-size:.85em; }
      .nav-cta .btn{ display:none; }
      .nav-mobile-cta{ display:inline-flex; align-self:flex-start; margin:14px 4px 2px; padding:.8em 1.6em; font-size:.95em; }
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

    /* ── thank-you page bits ── */
    .ty-hero{ padding-top:clamp(92px,12vh,120px); }
    .ty-hero .eyebrow{ text-shadow:0 1px 16px rgba(3,8,20,.55); }
    .ty-hero h1{ font-size:clamp(2em,4.4vw,3.4em); margin:.28em auto .5em; max-width:20ch; }
    .ty-lead{ font-size:clamp(1.02em,1.5vw,1.18em); color:var(--ink); max-width:52ch; margin-inline:auto; }
    .ty-h2{ font-size:clamp(1.55em,3vw,2.35em); margin-top:.35em; margin-inline:auto; max-width:22ch; }
    .ty-copy{ margin-inline:auto; }
    .ty-next{ display:grid; grid-template-columns:1fr 1fr; gap:clamp(16px,2.5vw,24px); max-width:900px; margin:clamp(30px,4vw,44px) auto 0; text-align:left; }
    .ty-point{ border:1px solid rgba(177,191,215,.16); border-radius:var(--r-card); background:rgba(255,255,255,.02); padding:clamp(22px,3vw,30px); }
    .ty-point .label{ color:var(--gold); display:block; margin-bottom:.7em; }
    .ty-point p{ color:var(--body); font-size:.98em; line-height:1.7; }
    @media(max-width:640px){ .ty-next{ grid-template-columns:1fr; } }
    .ty-socials{ display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center; gap:14px 28px; margin-top:clamp(18px,3vw,26px); }
    .ty-socials a{ color:var(--gold); font-weight:600; font-size:1.05em; border-bottom:1px solid rgba(232,198,95,.35); transition:border-color .2s,color .2s; }
    .ty-socials a:hover{ color:var(--gold-deep); border-color:var(--gold); }

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
    @media(max-width:820px){ body{ font-size:13px; width:100vw; } }
    /* tighter mobile section spacing */
    @media(max-width:820px){ .sec{ padding-block:22px; } .sec-sm{ padding-block:18px; } }
  `;
  var HTML = `


<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="https://www.giveitallevent.com" class="logo" aria-label="GIVE IT ALL home"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
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
      <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">About</a>
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold nav-mobile-cta">Get tickets <span class="arrow">→</span></a>
    </nav>
    <div class="nav-cta">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" class="btn btn-gold">Get tickets <span class="arrow">→</span></a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>


<section class="sec band-navy speckle ty-hero">
  <div class="wrap" style="text-align:center">
    <span class="eyebrow">you're in</span>
    <h1>Thank you. We've got your <span class="accent">application</span>.</h1>
  </div>
</section>


<section class="sec band-deep speckle">
  <div class="wrap" style="text-align:center">
    <span class="eyebrow">your head start</span>
    <h2 class="ty-h2">Your free 5 part Stage Prep series is on its <span class="accent">way</span>.</h2>
    <p class="lead ty-copy" style="max-width:52ch; margin-top:1em">Check your inbox now, and your spam / promotions folder, for your access link and your registration confirmation.</p>
  </div>
</section>


<section class="sec band-abyss speckle">
  <div class="wrap" style="text-align:center">
    <p class="lead" style="max-width:52ch; margin-inline:auto">You'll also get a WhatsApp confirmation. If it doesn't arrive, message <strong class="accent">+64 22 415 0389</strong>. We'll be in touch soon with your next event slot.</p>
  </div>
</section>


<section class="sec band-navy speckle">
  <div class="wrap" style="text-align:center">
    <p class="lead" style="max-width:44ch; margin-inline:auto">Follow and tag us, we love to share your moment.</p>
    <div class="ty-socials">
      <a href="https://www.instagram.com/giveitall_event" target="_blank" rel="noopener">@giveitall_event</a>
      <a href="https://www.instagram.com/daniel.lawson" target="_blank" rel="noopener">@daniel.lawson</a>
      <a href="https://www.instagram.com/samarova" target="_blank" rel="noopener">@samarova</a>
    </div>
  </div>
</section>


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
</footer>

`;

  // load the brand fonts once (document-level so the shadow content can use them)
  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIASpeakerThankyouPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;
      var host = this;

      // smooth-scroll for in-page anchors across the shadow boundary
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      // ---- page logic (scoped to the shadow root) ----
      
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

    }
  }
  customElements.define('gia-speaker-thankyou-page', GIASpeakerThankyouPage);
})();
