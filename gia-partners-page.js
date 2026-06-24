/* GIVE IT ALL — Partners page, packaged as a Wix Custom Element.
   Generated from partners.html. Tag name to set in Wix: <gia-partners-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site.
   NOTE: the Wix global header/footer are turned OFF for this page, so the
   element keeps its own nav + footer. Place it as the only/top element on the page. */
(function(){
  if (customElements.get('gia-partners-page')) return;

  var CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :host {
      /* ── shared site tokens (match NAV-FOOTER-SPEC.md / about-us / event) ── */
      --navy:       #061938;
      --navy-deep:  #04122A;
      --navy-card:  #0D2350;
      --ink:        #F4F6FB;
      --body:       #E2E7F1;
      --steel:      #B1BFD7;
      --maxw:       1240px;
      --gutter:     clamp(20px,5vw,64px);
      --r-pill:     999px;
      --r-card:     18px;
      --ease:       cubic-bezier(.22,.61,.36,1);

      /* ── partners-page accents (now aligned to the site palette) ── */
      --gold:       #E8C65F;
      --gold-light: #F2D98C;
      --gold-dim:   rgba(232, 198, 95, 0.25);
      --white:      #F5F0E8;
      --muted:      rgba(245, 240, 232, 0.55);
      --bg:         #061938;
      --card-bg:    rgba(255,255,255,0.035);
      --border:     rgba(232, 198, 95, 0.22);
      --dash:       rgba(232, 198, 95, 0.32);
      --nav-h:      68px;
    }

    :host {
      display: block;
      background-color: var(--bg);
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; }
    img { display: block; max-width: 100%; }

    /* ── shared layout + button primitives (used by nav/footer) ── */
    .wrap { max-width: var(--maxw); margin: 0 auto; padding-inline: var(--gutter); }
    .logo { display:flex; align-items:center; gap:.6em; font-weight:800; letter-spacing:-.02em; font-size:1.12rem; color:var(--ink); text-decoration:none; }
    .logo .mark { width:30px; height:30px; border-radius:8px; background:var(--gold); color:var(--navy); display:grid; place-items:center; font-size:.95rem; font-weight:800; flex:0 0 auto; }
    .btn { display:inline-flex; align-items:center; gap:.6em; font-family:inherit; font-weight:700; font-size:1rem; border-radius:var(--r-pill); padding:1.05em 1.9em; cursor:pointer; border:none; text-decoration:none; transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease); white-space:nowrap; }
    .btn .arrow { transition:transform .25s var(--ease); }
    .btn:hover .arrow { transform:translateX(4px); }
    .btn-gold { background:var(--gold); color:var(--navy); box-shadow:0 10px 30px -8px rgba(232,198,95,.5); animation:btnPulse 2.8s ease-out infinite; }
    .btn-gold:hover { transform:translateY(-2px); box-shadow:0 16px 40px -10px rgba(232,198,95,.6); animation:none; }
    @keyframes btnPulse {
      0%   { box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5); }
      70%  { box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0); }
      100% { box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0); }
    }
    @media(prefers-reduced-motion:reduce){ .btn-gold{ animation:none; } }

    /* ── speckle texture (matches site footer/sections) ── */
    .speckle { position:relative; }
    .speckle::before {
      content:""; position:absolute; inset:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
      opacity:.035; pointer-events:none; mix-blend-mode:screen; z-index:0;
    }
    .speckle > * { position:relative; z-index:1; }

    /* ── NAV (shared site header — matches NAV-FOOTER-SPEC.md) ── */
    header.nav{ position:fixed; top:0; left:0; right:0; z-index:100; transition:background .35s var(--ease),border-color .35s var(--ease),padding .35s var(--ease); border-bottom:1px solid transparent; }
    header.nav.scrolled{ background:rgba(6,25,56,.82); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-bottom-color:rgba(177,191,215,.14); }
    .nav-inner{ max-width:var(--maxw); margin:0 auto; padding:18px var(--gutter); display:flex; align-items:center; justify-content:space-between; gap:20px; }
    .nav-links{ display:flex; align-items:center; gap:30px; }
    .nav-links a{ font-size:.92rem; font-weight:500; color:var(--steel); transition:color .2s; white-space:nowrap; text-decoration:none; }
    .nav-links a:hover,.nav-links a.active{ color:var(--ink); }
    .nav-item{ position:relative; display:flex; align-items:center; }
    .nav-drop-toggle{ background:none; border:none; font-family:inherit; font-size:.92rem; font-weight:500; color:var(--steel); cursor:pointer; display:inline-flex; align-items:center; gap:.35em; transition:color .2s; white-space:nowrap; padding:0; }
    .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{ color:var(--ink); }
    .nav-drop-toggle .caret{ font-size:.7em; transition:transform .25s var(--ease); }
    .nav-item:hover .nav-drop-toggle .caret,.nav-item:focus-within .nav-drop-toggle .caret{ transform:rotate(180deg); }
    .nav-drop{ position:absolute; top:100%; left:50%; transform:translateX(-50%) translateY(8px); min-width:236px; display:flex; flex-direction:column; gap:2px; background:rgba(13,35,80,.97); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid rgba(177,191,215,.16); border-radius:14px; padding:10px; box-shadow:0 22px 54px -18px rgba(0,0,0,.65); opacity:0; visibility:hidden; pointer-events:none; transition:opacity .2s var(--ease),transform .2s var(--ease); z-index:95; }
    .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{ opacity:1; visibility:visible; pointer-events:auto; transform:translateX(-50%) translateY(0); }
    .nav-drop a{ display:flex; justify-content:space-between; align-items:center; gap:14px; padding:9px 12px; border-radius:9px; font-size:.9rem; font-weight:500; color:var(--body); white-space:nowrap; text-decoration:none; transition:background .2s,color .2s; }
    .nav-drop a:hover{ background:rgba(232,198,95,.1); color:var(--gold); }
    .nav-drop a.is-soon{ color:var(--steel); }
    .nav-drop a.is-soon span{ font-size:.6rem; letter-spacing:.12em; text-transform:uppercase; border:1px solid rgba(177,191,215,.35); border-radius:999px; padding:.15em .6em; font-weight:700; }
    .nav-cta{ display:flex; align-items:center; gap:18px; }
    .nav-cta .btn{ padding:.7em 1.3em; font-size:.9rem; }
    .menu-btn{ display:none; background:none; border:none; color:var(--body); cursor:pointer; flex-direction:column; gap:5px; padding:6px; }
    .menu-btn span{ display:block; width:24px; height:2px; background:var(--body); border-radius:2px; }
    @media(max-width:880px){
      header.nav{ background:rgba(6,25,56,.94); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-bottom:1px solid rgba(177,191,215,.12); }
      .nav-inner{ padding:10px var(--gutter); }
      .logo{ font-size:1rem; }
      .logo .mark{ width:26px; height:26px; font-size:.85rem; }
      .nav-cta .btn{ padding:.62em 1.05em; font-size:.82rem; }
      .nav-links{ display:none; position:absolute; top:100%; left:0; right:0; flex-direction:column; align-items:stretch; gap:2px; background:rgba(6,25,56,.98); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-bottom:1px solid rgba(177,191,215,.14); padding:12px var(--gutter) 22px; }
      .nav.menu-open .nav-links{ display:flex; }
      .nav-links > a{ padding:13px 4px; font-size:1.05rem; border-bottom:1px solid rgba(177,191,215,.08); }
      .nav-item{ flex-direction:column; align-items:stretch; }
      .nav-drop-toggle{ padding:13px 4px; font-size:1.05rem; justify-content:space-between; width:100%; }
      .nav-item .nav-drop{ position:static; transform:none; opacity:1; visibility:visible; pointer-events:auto; background:transparent; border:none; box-shadow:none; backdrop-filter:none; min-width:0; padding:2px 0 10px 12px; margin:0; }
      .nav-item .nav-drop a{ font-size:.98rem; padding:9px 8px; }
      .nav-drop-toggle .caret{ display:none; }
      .menu-btn{ display:flex; }
    }

    /* ── PAGE WRAPPER ─────────────────────────────────── */
    .partners-page {
      background: linear-gradient(160deg, #061938 0%, #0A1E40 35%, #0D2350 65%, #061938 100%);
      padding: calc(var(--nav-h) + 56px) 24px 100px;
    }

    /* ── DASHED SIDE BORDERS ──────────────────────────── */
    .partners-inner {
      max-width: 960px;
      margin: 0 auto;
      border-left:  1px dashed var(--dash);
      border-right: 1px dashed var(--dash);
      padding: 0 48px;
    }

    /* ── HEADER ───────────────────────────────────────── */
    .partners-header {
      text-align: center;
      padding: 40px 0 48px;
      border-bottom: 1px dashed var(--dash);
    }

    .script-tag {
      font-family: 'Caveat', cursive;
      font-weight: 600;
      font-size: clamp(1.5rem, 3.2vw, 2rem);
      color: var(--gold);
      letter-spacing: 0.01em;
      line-height: 1;
      display: block;
      margin-bottom: 12px;
    }

    .partners-header h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(2.2rem, 6vw, 3.8rem);
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--gold);
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 28px;
    }

    .manifesto {
      max-width: 660px;
      margin: 0 auto;
    }

    .manifesto blockquote {
      font-family: 'Montserrat', sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--white);
      margin-bottom: 20px;
    }

    .manifesto p {
      font-size: 0.875rem;
      line-height: 1.9;
      color: var(--muted);
      margin-bottom: 6px;
    }

    /* ── GRID ─────────────────────────────────────────── */
    .partners-grid {
      padding: 48px 0 40px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 28px;
    }

    .partners-grid:has(.partner-card:only-child) {
      grid-template-columns: minmax(280px, 500px);
      justify-content: center;
    }

    /* ── PARTNER CARD ─────────────────────────────────── */
    .partner-card {
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      transition: border-color 0.3s ease, transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .partner-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(232, 198, 95,0.06) 0%, transparent 60%);
      pointer-events: none;
      z-index: 1;
    }

    .partner-card:hover {
      border-color: rgba(232, 198, 95, 0.5);
      transform: translateY(-3px);
    }

    .card-body {
      padding: 24px 28px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex: 1;
      position: relative;
      z-index: 2;
    }

    /* ── PHOTO PANEL ──────────────────────────────────── */
    .partner-photo {
      height: 200px;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
    }

    .partner-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 30%;
      display: block;
      transition: transform 0.6s ease;
    }

    .partner-card:hover .partner-photo img {
      transform: scale(1.03);
    }

    .partner-photo::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 45%, var(--bg) 100%);
      pointer-events: none;
    }

    /* ── LOGO ─────────────────────────────────────────── */
    .partner-logo-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
    }

    .partner-logo-wrap img {
      max-height: 60px;
      max-width: 100%;
      object-fit: contain;
    }

    .partner-logo-wrap .inverted {
      filter: brightness(0) invert(1);
    }

    .partner-logo-wrap .inverted.logo-crop {
      -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 72%);
      mask-image: linear-gradient(to bottom, black 50%, transparent 72%);
    }

    .partner-logo-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--white);
      text-align: center;
      line-height: 1.15;
    }

    /* ── CARD CONTENT ─────────────────────────────────── */
    .partner-tagline {
      font-family: 'Montserrat', sans-serif;
      font-style: italic;
      font-weight: 500;
      font-size: 0.98rem;
      color: var(--gold-light);
      line-height: 1.45;
    }

    .partner-divider {
      width: 36px;
      height: 1px;
      background: var(--border);
    }

    .partner-description {
      font-size: 0.82rem;
      line-height: 1.8;
      color: var(--muted);
    }

    /* ── OFFER STRIP ──────────────────────────────────── */
    .partner-offer {
      border-left: 2px solid var(--gold);
      padding: 9px 12px;
      background: rgba(232, 198, 95, 0.06);
    }

    .partner-offer-label {
      display: block;
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 4px;
    }

    .partner-offer-text {
      font-size: 0.8rem;
      color: var(--muted);
      line-height: 1.4;
    }

    .partner-offer-text strong {
      color: var(--white);
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    /* ── CTA BUTTON ───────────────────────────────────── */
    .partner-cta {
      margin-top: auto;
      display: inline-block;
      align-self: flex-start;
      padding: 10px 24px;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--bg);
      background: var(--gold);
      border: 1px solid var(--gold);
      transition: background 0.25s ease, color 0.25s ease;
    }

    .partner-cta:hover {
      background: transparent;
      color: var(--gold);
    }

    /* ── BECOME A PARTNER ─────────────────────────────── */
    .become-partner {
      margin-top: 16px;
      padding: 44px 32px;
      border-top: 1px dashed var(--dash);
      text-align: center;
    }

    .become-partner .script-tag {
      font-size: clamp(1.4rem, 2.8vw, 1.75rem);
      margin-bottom: 10px;
    }

    .become-partner h2 {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--white);
      margin-bottom: 20px;
    }

    .become-partner-lead {
      font-size: 0.875rem;
      color: var(--muted);
      line-height: 1.8;
      max-width: 500px;
      margin: 0 auto 32px;
    }

    .become-partner-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 32px;
    }

    .bp-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding: 0 28px;
    }

    .bp-stat-num {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.9rem;
      font-weight: 700;
      color: var(--gold);
      line-height: 1;
    }

    .bp-stat-label {
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.11em;
      text-transform: uppercase;
      color: var(--muted);
      text-align: center;
    }

    .bp-stat-divider {
      width: 1px;
      height: 36px;
      background: var(--border);
      flex-shrink: 0;
    }

    .founding-offer {
      border: 1px solid var(--gold-dim);
      background: rgba(232, 198, 95,0.06);
      padding: 16px 28px;
      max-width: 420px;
      margin: 0 auto 28px;
    }

    .founding-tag {
      display: block;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 8px;
    }

    .founding-offer p {
      font-size: 0.8rem;
      color: var(--muted);
      line-height: 1.7;
      margin: 0;
    }

    .partner-cta-link {
      display: inline-block;
      padding: 12px 32px;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--bg);
      background: var(--gold);
      border: 1px solid var(--gold);
      transition: background 0.25s ease, color 0.25s ease;
    }

    .partner-cta-link:hover {
      background: transparent;
      color: var(--gold);
    }

    /* ── RESPONSIVE ───────────────────────────────────── */
    @media (max-width: 640px) {

      .partners-page {
        padding: 72px 8px 56px;
      }

      .partners-inner {
        padding: 0 8px;
        border-left: none;
        border-right: none;
      }

      .partners-header {
        padding: 24px 0 26px;
      }

      .partners-header h1 {
        font-size: 2rem;
        letter-spacing: 0.08em;
      }

      .manifesto blockquote {
        font-size: 0.95rem;
      }

      .partners-grid {
        grid-template-columns: 1fr;
        padding: 24px 0 24px;
        gap: 20px;
      }

      .partner-photo {
        height: 180px;
      }

      .card-body {
        padding: 20px 20px 24px;
        gap: 12px;
      }

      .partner-logo-wrap {
        height: 60px;
      }

      .partner-logo-wrap img {
        max-height: 50px;
      }

      .become-partner {
        padding: 28px 16px;
        margin-top: 0;
      }

      .script-tag { font-size: 1.4rem; }
      .partner-logo-wrap { height: auto; min-height: 50px; margin-bottom: 6px; }
      .bp-stat-divider { display: none; }
      .bp-stat { padding: 10px 20px; }
      .founding-offer { padding: 14px 18px; }
    }
    /* ── FOOTER (shared site footer — matches NAV-FOOTER-SPEC.md) ── */
    footer{ background:var(--navy-deep); border-top:1px solid rgba(177,191,215,.12); padding-block:64px 40px; font-family:'Montserrat',sans-serif; }
    footer .foot-top{ display:flex; justify-content:space-between; gap:40px; flex-wrap:wrap; margin-bottom:48px; }
    footer .foot-cols{ display:flex; gap:clamp(40px,8vw,100px); flex-wrap:wrap; }
    footer .foot-col h4{ font-size:.74rem; letter-spacing:.16em; text-transform:uppercase; color:var(--steel); margin-bottom:18px; font-weight:700; }
    footer .foot-col a{ display:block; color:var(--body); opacity:.82; font-size:.95rem; margin-bottom:12px; text-decoration:none; transition:opacity .2s,color .2s; }
    footer .foot-col a:hover{ opacity:1; color:var(--gold); }
    footer .foot-brand{ max-width:30ch; }
    footer .foot-brand .lead{ font-size:.95rem; margin-top:16px; color:var(--steel); line-height:1.6; font-weight:400; }
    footer .foot-social{ display:flex; gap:18px; margin-top:20px; }
    footer .foot-social a{ color:var(--body); opacity:.82; font-size:.9rem; font-weight:600; text-decoration:none; transition:opacity .2s,color .2s; }
    footer .foot-social a:hover{ opacity:1; color:var(--gold); }
    footer .foot-bottom{ display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; padding-top:28px; border-top:1px solid rgba(177,191,215,.12); color:var(--steel); font-size:.84rem; }
@media(max-width:880px){.nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{transform:none !important}}

@media(max-width:600px){
  .foot-col h4{font-size:.62rem;margin-bottom:12px}
  .foot-col a{font-size:.76rem;margin-bottom:9px}
  .foot-brand .lead{font-size:.76rem}
  .foot-social a{font-size:.76rem}
  .foot-bottom{font-size:.7rem}
}

  `;

  var HTML = `<!-- ─── NAV (shared site header) ───────────────────── -->
<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="https://www.giveitallevent.com" class="logo"><span class="mark">G</span> GIVE&nbsp;IT&nbsp;ALL</a>
    <nav class="nav-links">
      <div class="nav-item">
        <button class="nav-drop-toggle" aria-haspopup="true" aria-expanded="false">Experiences <span class="caret">▾</span></button>
        <div class="nav-drop">
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener">Speaker &amp; Networking Event</a>
          <a href="https://www.giveitallevent.com/founders-breakfast-bali" target="_blank" rel="noopener">Founders Breakfast</a>
          <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak on Stage</a>
          <a href="https://www.parallaxxtransformations.com/the-reconnected-man" target="_blank" rel="noopener">Reconnected Man</a>
          <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
          <a href="#" class="is-soon">Virtual Membership <span>soon</span></a>
        </div>
      </div>
      <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak</a>
      <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
      <a href="https://www.giveitallevent.com/partners" class="active">Partners</a>
      <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">About</a>
    </nav>
    <div class="nav-cta">
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener" class="btn btn-gold">Get tickets <span class="arrow">→</span></a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<section class="partners-page">
  <div class="partners-inner">

    <!-- ─── HEADER ──────────────────────────────────── -->
    <header class="partners-header">
      <span class="script-tag">Trusted by Us. Recommended to You.</span>
      <h1>Official Partners</h1>

      <div class="manifesto">
        <blockquote>&ldquo;Daniel, it truly feels like you really care&rdquo;. And that&rsquo;s exactly the point.</blockquote>
        <p>The difference that makes the difference at GIVE IT ALL is an experience curated on connection and collaboration, as real human beings.</p>
        <p>We are proud of this difference. It is the foundation of everything we have built, together. And we are fiercely protective of it.</p>
        <p>Our integrity is at stake in our promise to lead with these values, always. Which is why we turn down sponsorship deals often. Because this has never been about the money.</p>
        <p>Our partners are an extension of our community. They are here because we love what they do, what they stand for, and who they are. We recommend them because we believe in them. And our hope is that you will too.</p>
      </div>
    </header>

    <!-- ─── PARTNER CARDS GRID ──────────────────────── -->
    <!--
      TO ADD A PARTNER: copy one .partner-card block and paste inside .partners-grid.
      The grid reflows to 2-col then 3-col automatically as cards are added.
    -->
    <div class="partners-grid">

      <!-- PARTNER: House of Yoreh -->
      <article class="partner-card">
        <div class="partner-photo">
          <img src="https://static.wixstatic.com/media/111174_a473d7660b9145b6a41b98424ef8526e~mv2.webp" alt="House of Yoreh podcast studio">
        </div>
        <div class="card-body">
          <div class="partner-logo-wrap">
            <!--
              Replace with real logo when available:
              <img class="inverted" src="path/to/yoreh-logo.png" alt="House of Yoreh logo">
            -->
            <div class="partner-logo-text">house<br><span style="font-size:0.78em; letter-spacing:0.2em;">of</span><br>yoreh.</div>
          </div>
          <p class="partner-tagline">A Creative Studio Above the Bar.</p>
          <div class="partner-divider"></div>
          <p class="partner-description">
            A podcast recording, photography, and content creation studio in the heart of Canggu, built for founders, creatives, and storytellers who refuse to blend in. Yoreh brings the same obsession with authenticity to their craft that we bring to ours. They are our trusted space for capturing the stories shared at GIVE IT ALL.
          </p>
          <div class="partner-offer">
            <span class="partner-offer-label">Exclusive Community Offer</span>
            <p class="partner-offer-text">20% off, use code <strong>GIVEITALL26</strong> at booking</p>
          </div>
          <a class="partner-cta" href="https://houseofyoreh.com/studio" target="_blank" rel="noopener">
            Visit Studio &rarr;
          </a>
        </div>
      </article>

      <!-- PARTNER: Amavi Canggu -->
      <article class="partner-card">
        <div class="partner-photo">
          <img src="https://static.wixstatic.com/media/111174_f9fa03fc608f4efbbca474cb609763d9~mv2.png" alt="Amavi venue">
        </div>
        <div class="card-body">
          <div class="partner-logo-wrap">
            <img class="inverted logo-crop" src="https://amavicanggu.grandcentralgroup.co.id/assets/img/logo_amavicanggu.png" alt="Amavi logo">
          </div>
          <p class="partner-tagline">Where GIVE IT ALL comes to life.</p>
          <div class="partner-divider"></div>
          <p class="partner-description">
            A Mediterranean kitchen, lounge, and pool venue in the heart of Canggu, with rice field views, premium ingredients, and a setting built for real conversation. Amavi is more than our venue. It is the room where the connections made at GIVE IT ALL begin.
          </p>
          <a class="partner-cta" href="https://amavicanggu.grandcentralgroup.co.id/" target="_blank" rel="noopener">
            Visit Amavi &rarr;
          </a>
        </div>
      </article>

      <!--
        ── COPY FROM HERE TO ADD A NEW PARTNER ──────────
        <article class="partner-card">
          <div class="partner-photo">
            <img src="path/to/image.jpg" alt="Partner photo">
          </div>
          <div class="card-body">
            <div class="partner-logo-wrap">
              <img class="inverted" src="path/to/logo.png" alt="Partner logo">
            </div>
            <p class="partner-tagline">Their tagline goes here.</p>
            <div class="partner-divider"></div>
            <p class="partner-description">Two to three sentences.</p>
            <a class="partner-cta" href="https://theirwebsite.com" target="_blank" rel="noopener">
              Learn More &rarr;
            </a>
          </div>
        </article>
        ── END PARTNER CARD ──────────────────────────────
      -->

    </div>

    <!-- ─── BECOME A PARTNER ─────────────────────────── -->
    <div class="become-partner">
      <span class="script-tag">Interested in joining us?</span>
      <h2>Partner With Us</h2>

      <p class="become-partner-lead">
        Where your brand connects with business professionals &amp; lifestyle creators investing in relationships, and seeking brands they can trust.
      </p>

      <div class="become-partner-stats">
        <div class="bp-stat">
          <span class="bp-stat-num">50-80</span>
          <span class="bp-stat-label">Curated attendees per event</span>
        </div>
        <div class="bp-stat-divider"></div>
        <div class="bp-stat">
          <span class="bp-stat-num">66%</span>
          <span class="bp-stat-label">Repeat attendance rate</span>
        </div>
        <div class="bp-stat-divider"></div>
        <div class="bp-stat">
          <span class="bp-stat-num">160K</span>
          <span class="bp-stat-label">Monthly Instagram reach</span>
        </div>
      </div>

      <div class="founding-offer">
        <span class="founding-tag">Founding Partner, Limited Offer</span>
        <p>Only 3 spots remaining at 50% off monthly rates with locked-in pricing. Once filled, this offer closes permanently.</p>
      </div>

      <a class="partner-cta-link" href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">
        View Partner Packages &rarr;
      </a>
    </div>

  </div>
</section>

<!-- ─── FOOTER (shared site footer) ─────────────────── -->
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
          <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener">Next event</a>
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
          <a href="https://www.giveitallevent.com/members" target="_blank" rel="noopener">Members</a>
          <a href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">Partner with us</a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 GIVE IT ALL. All rights reserved.</span>
    </div>
  </div>
</footer>`;

  // load the brand fonts once (document-level so the shadow content can use them)
  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap';
    document.head.appendChild(l);
  }

  class GIAPartnersPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow; var host = this;

      // smooth-scroll for in-page anchors (#id) across the shadow boundary
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      // ---- collapse any oversized Wix ancestor (stale runaway section height -> flashing) ----
      var collapseAncestors = function(){
        try{
          var hostH = host.getBoundingClientRect().height;
          if(hostH < 50) return;
          var n = host.parentElement, guard = 0;
          while(n && n !== document.body && guard++ < 14){
            if(n.getBoundingClientRect().height > hostH + 400){
              n.style.height = 'auto'; n.style.minHeight = '0px';
            }
            n = n.parentElement;
          }
        }catch(e){}
      };
      requestAnimationFrame(collapseAncestors);
      [400,1200,2500].forEach(function(t){ setTimeout(collapseAncestors, t); });
      window.addEventListener('resize', collapseAncestors, {passive:true});

      // nav scrolled state (scoped to shadow root)
      var nav = root.getElementById('nav');
      var onScroll = function(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 40); };
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();

      // mobile menu toggle
      var menuBtn = root.querySelector('.menu-btn');
      if(menuBtn){
        menuBtn.addEventListener('click', function(){ nav.classList.toggle('menu-open'); });
        root.querySelectorAll('.nav-links a').forEach(function(a){
          a.addEventListener('click', function(){ nav.classList.remove('menu-open'); });
        });
      }
    }
  }
  customElements.define('gia-partners-page', GIAPartnersPage);
})();
