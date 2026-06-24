/* GIVE IT ALL — Members page, packaged as a Wix Custom Element.
   Generated from members.html. Tag name to set in Wix: <gia-members-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site.
   NOTE: turn the Wix global header + footer OFF — this page carries its own nav + footer. */
(function(){
  if (customElements.get('gia-members-page')) return;

  var CSS = `
  :host {
    --navy: #061938;
    --navy-deep: #04122a;
    --navy-card: #0d2350;
    --black: #02080f;
    --white: #ffffff;
    --gold: #e8c65f;
    --gold-soft: #f0d98a;
    --gold-deep: #c9a646;
    --ink: #f4f6fb;
    --body: #e2e7f1;
    --muted: #b1bfd7;
    --line: rgba(177, 191, 215, 0.16);
    --steel: #b1bfd7;
    --maxw: 1240px;
    --gutter: clamp(20px, 5vw, 64px);
    --r-pill: 999px;
    --r-card: 18px;
    --ease: cubic-bezier(.22,.61,.36,1);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :host {
    display: block;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(120% 70% at 50% 0%, #0c2a52 0%, var(--navy-deep) 48%, var(--black) 100%);
    color: var(--white);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3 { font-family: 'Montserrat', sans-serif; line-height: 1.1; letter-spacing: -0.015em; text-wrap: balance; }
  a { color: inherit; text-decoration: none; }

  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 28px; }

  /* ---------- NAV (shared system) ---------- */
  header.nav{position:fixed;top:0;left:0;right:0;z-index:90;font-family:'Montserrat',sans-serif;transition:background .35s var(--ease),border-color .35s var(--ease),padding .35s var(--ease);border-bottom:1px solid transparent}
  header.nav.scrolled{background:rgba(6,25,56,.82);backdrop-filter:blur(14px);border-bottom-color:rgba(177,191,215,.14)}
  .nav-inner{max-width:var(--maxw);margin:0 auto;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:20px}
  .logo{display:flex;align-items:center;gap:.6em;font-weight:800;letter-spacing:-.02em;font-size:1.12rem;color:var(--ink)}
  .logo .mark{width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);display:grid;place-items:center;font-size:.95rem;font-weight:800;flex:0 0 auto}
  .nav-links{display:flex;align-items:center;gap:30px}
  .nav-links a{font-size:.92rem;font-weight:500;color:var(--steel);transition:color .2s;white-space:nowrap}
  .nav-links a:hover{color:var(--ink)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-drop-toggle{background:none;border:none;font-family:inherit;font-size:.92rem;font-weight:500;color:var(--steel);cursor:pointer;display:inline-flex;align-items:center;gap:.35em;transition:color .2s;white-space:nowrap;padding:0}
  .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{color:var(--ink)}
  .nav-drop-toggle .caret{font-size:.7em;transition:transform .25s var(--ease)}
  .nav-item:hover .nav-drop-toggle .caret,.nav-item:focus-within .nav-drop-toggle .caret{transform:rotate(180deg)}
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

  /* shared button */
  .btn{display:inline-flex;align-items:center;gap:.6em;font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;border-radius:var(--r-pill);padding:1.05em 1.9em;cursor:pointer;border:none;transition:transform .25s var(--ease),box-shadow .25s var(--ease),background .25s var(--ease);white-space:nowrap}
  .btn .arrow{transition:transform .25s var(--ease)}
  .btn:hover .arrow{transform:translateX(4px)}
  .btn-gold{background:var(--gold);color:var(--navy);box-shadow:0 10px 30px -8px rgba(232,198,95,.5);animation:btnPulse 2.8s ease-out infinite}
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 40px -10px rgba(232,198,95,.6);animation:none}

  @media(max-width:880px){
    header.nav{background:rgba(6,25,56,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(177,191,215,.12)}
    .nav-inner{padding:10px var(--gutter)}
    .logo{font-size:1rem}
    .logo .mark{width:26px;height:26px;font-size:.85rem}
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

  /* ---------- Hero ---------- */
  .hero {
    text-align: center;
    padding: 132px 28px 16px;
    max-width: 760px;
    margin: 0 auto;
  }
  .eyebrow {
    font-family: 'Caveat', cursive;
    font-size: 1.7rem;
    color: var(--gold);
    margin-bottom: 4px;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(2rem, 5.4vw, 3.4rem);
    margin-bottom: 18px;
  }
  h1 .gold { color: var(--gold); }
  .hero .sub {
    max-width: 620px;
    margin: 0 auto 14px;
    color: var(--body);
    font-weight: 300;
    font-size: clamp(1.02rem, 1.7vw, 1.18rem);
  }
  .hero .belong {
    max-width: 600px;
    margin: 0 auto 30px;
    color: var(--muted);
    font-weight: 300;
    font-size: 0.96rem;
  }
  .hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    flex-wrap: wrap;
  }

  /* ---------- Buttons ---------- */
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.02rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--navy-deep);
    background: linear-gradient(180deg, var(--gold-soft) 0%, var(--gold) 100%);
    padding: 19px 52px;
    border-radius: 999px;
    box-shadow: 0 14px 38px rgba(232, 198, 95, 0.32);
    transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
    animation: btnPulse 2.8s ease-out infinite;
  }
  .cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 48px rgba(232, 198, 95, 0.46);
    animation: none;
  }
  @keyframes btnPulse {
    0% { box-shadow: 0 14px 34px -8px rgba(232,198,95,.5), 0 0 0 0 rgba(232,198,95,.45); }
    70% { box-shadow: 0 14px 34px -8px rgba(232,198,95,.4), 0 0 0 14px rgba(232,198,95,0); }
    100% { box-shadow: 0 14px 34px -8px rgba(232,198,95,.5), 0 0 0 0 rgba(232,198,95,0); }
  }
  @media (prefers-reduced-motion: reduce) { .cta, .btn-gold { animation: none; } }
  .text-link {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--muted);
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    border-bottom: 1px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .text-link:hover { color: var(--ink); border-bottom-color: rgba(232,198,95,.5); }

  /* ---------- Section frame ---------- */
  section { padding: 26px 0; }
  .section-head { text-align: center; max-width: 640px; margin: 0 auto 30px; }
  .section-head .label {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }
  .section-head h2 { font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.1rem); }
  .section-head h2 .gold { color: var(--gold); }

  /* ---------- Benefits ---------- */
  .benefits {
    list-style: none;
    max-width: 680px;
    margin: 0 auto;
  }
  .benefits li {
    display: flex;
    gap: 16px;
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
  }
  .benefits li:last-child { border-bottom: none; }
  .benefits .mark { color: var(--gold); font-size: 1.05rem; line-height: 1.6; flex-shrink: 0; }
  .benefits b {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.04rem;
  }
  .benefits b .new {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--navy-deep);
    background: var(--gold);
    border-radius: 999px;
    padding: 0.2em 0.7em;
    margin-left: 10px;
    vertical-align: middle;
  }
  .benefits b .soon {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.58rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    border: 1px solid rgba(177, 191, 215, 0.4);
    border-radius: 999px;
    padding: 0.18em 0.7em;
    margin-left: 10px;
    vertical-align: middle;
  }
  .benefits .desc {
    display: block;
    color: var(--muted);
    font-weight: 300;
    font-size: 0.95rem;
    margin-top: 3px;
  }
  .proof-line {
    max-width: 680px;
    margin: 26px auto 0;
    text-align: center;
    font-size: 0.82rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ---------- Who it's for ---------- */
  .for {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    color: var(--body);
    font-weight: 300;
    font-size: 1.02rem;
  }
  .for b { font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--ink); }

  /* ---------- Join / form ---------- */
  .join { text-align: center; }
  .steps {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px 18px;
    max-width: 560px;
    margin: 0 auto 24px;
  }
  .steps .step {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.86rem;
    color: var(--body);
  }
  .steps .step .n {
    width: 22px;
    height: 22px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: var(--gold);
    color: var(--navy);
    font-size: 0.74rem;
    font-weight: 800;
  }
  .steps .arr { color: var(--gold); font-size: 0.9rem; }
  @media (max-width: 480px) {
    .steps { flex-direction: column; gap: 12px; }
    .steps .arr { transform: rotate(90deg); }
  }
  .form-card {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    background: var(--navy-card);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 12px;
    box-shadow: 0 22px 54px -18px rgba(0, 0, 0, 0.6);
  }
  .form-card iframe {
    width: 100%;
    border: none;
    border-radius: 10px;
    display: block;
    background: var(--navy-card);
  }
  .free {
    margin-top: 20px;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .free .dot { color: var(--gold); margin: 0 8px; }
  .login-row {
    margin-top: 22px;
    font-size: 0.92rem;
    color: var(--muted);
  }
  .login-row a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--gold);
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }
  .login-row a:hover { border-bottom-color: var(--gold); }

  /* ---------- FOOTER (shared system) ---------- */
  footer.site{background:var(--navy-deep);border-top:1px solid rgba(177,191,215,.12);padding-block:64px 40px;font-family:'Montserrat',sans-serif}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:48px}
  .foot-cols{display:flex;gap:clamp(40px,8vw,100px);flex-wrap:wrap}
  .foot-col h4{font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);margin-bottom:18px;font-weight:700}
  .foot-col a{display:block;color:var(--body);opacity:.82;font-size:.95rem;margin-bottom:12px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:32ch}
  .foot-brand .lead{font-size:.95rem;margin-top:16px;color:var(--body);font-weight:300}
  .foot-social{display:flex;gap:18px;margin-top:20px}
  .foot-social a{color:var(--body);opacity:.82;font-size:.9rem;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid rgba(177,191,215,.12);color:var(--steel);font-size:.84rem}
@media(max-width:880px){.nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{transform:none !important}}


  @media (max-width: 600px){
    footer.site{padding-block:44px 28px}
    .foot-top{gap:30px;margin-bottom:34px}
    .foot-col h4{font-size:.62rem;margin-bottom:12px}
    .foot-col a{font-size:.76rem;margin-bottom:9px}
    .foot-brand .lead{font-size:.76rem}
    .foot-social a{font-size:.76rem}
    .foot-bottom{font-size:.7rem}
  }

  @media (max-width: 560px) {
    .hero { padding-top: 104px; }
    .cta { padding: 17px 40px; font-size: 0.95rem; width: 100%; max-width: 320px; justify-content: center; }
    .hero-actions { gap: 18px; }
    .benefits b .new, .benefits b .soon { display: inline-block; margin: 5px 0 0; }
  }
  `;

  var HTML = `
  <!-- ============ NAV ============ -->
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
            <a href="https://www.parallaxxtransformations.com" target="_blank" rel="noopener">Parallaxx Transformations</a>
            <a href="#" class="is-soon">Virtual Membership <span>soon</span></a>
          </div>
        </div>
        <a href="https://www.giveitallevent.com/speak-at-give-it-all" target="_blank" rel="noopener">Speak</a>
        <a href="https://www.giveitallevent.com/members">Members</a>
        <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
        <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener">About</a>
      </nav>
      <div class="nav-cta">
        <a href="https://login.giveitallevent.com/communities/groups/give-it-all-international/home" class="btn btn-gold">Log in <span class="arrow">&rarr;</span></a>
        <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <!-- ============ HERO ============ -->
  <div class="hero">
    <p class="eyebrow">become a member</p>
    <h1>Unlock exclusive<br /><span class="gold">member-only features</span></h1>
    <p class="sub">Free to join, and built to enhance your entire world of GIVE IT ALL experiences.</p>
    <div class="hero-actions">
      <a class="cta" href="#join">Join free <span aria-hidden="true">&darr;</span></a>
      <a class="text-link" href="https://login.giveitallevent.com/communities/groups/give-it-all-international/home">Already a member? Log in</a>
    </div>
  </div>

  <!-- ============ BENEFITS ============ -->
  <section>
    <div class="wrap">
      <ul class="benefits">
        <li>
          <span class="mark">&#9670;</span>
          <span>
            <b>Personalised introductions<span class="new">New</span></b>
            <span class="desc">We take the guesswork and luck out of meeting the people you actually want to know, live and virtually.</span>
          </span>
        </li>
        <li>
          <span class="mark">&#9670;</span>
          <span>
            <b>Exclusive member directory</b>
            <span class="desc">Direct access to people and skills of every kind, with your own complimentary listing included.</span>
          </span>
        </li>
        <li>
          <span class="mark">&#9670;</span>
          <span>
            <b>Members-only events and workshops<span class="soon">Coming soon</span></b>
            <span class="desc">Where our in-person and virtual communities come together, live.</span>
          </span>
        </li>
        <li>
          <span class="mark">&#9670;</span>
          <span>
            <b>Global community reach<span class="soon">Coming soon</span></b>
            <span class="desc">Tap into and connect with members across our global network.</span>
          </span>
        </li>
        <li>
          <span class="mark">&#9670;</span>
          <span>
            <b>All-access membership pass<span class="soon">Coming soon</span></b>
            <span class="desc">Unlock everything in one pass, at our best price.</span>
          </span>
        </li>
      </ul>
      <p class="proof-line">Trusted by 1,000+ humans across 30+ events worldwide.</p>
    </div>
  </section>

  <!-- ============ JOIN (form route) ============ -->
  <section class="join" id="join">
    <div class="wrap">
      <div class="section-head">
        <p class="label">free membership</p>
        <h2>Join the <span class="gold">GIVE IT ALL</span> community</h2>
      </div>
      <div class="steps">
        <span class="step"><span class="n">1</span> Sign up</span>
        <span class="arr">&rarr;</span>
        <span class="step"><span class="n">2</span> Check your inbox</span>
        <span class="arr">&rarr;</span>
        <span class="step"><span class="n">3</span> You're in</span>
      </div>

      <div class="form-card">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/h9evo9TIXoDjXJ8lGOkd"
          style="width:100%;height:300px;border:none;border-radius:10px"
          id="inline-h9evo9TIXoDjXJ8lGOkd"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form - Community SignUp"
          data-height="300"
          data-layout-iframe-id="inline-h9evo9TIXoDjXJ8lGOkd"
          data-form-id="h9evo9TIXoDjXJ8lGOkd"
          title="Form - Community SignUp">
        </iframe>
      </div>

      <p class="free">Free to join <span class="dot">&#9670;</span> No spam <span class="dot">&#9670;</span> Leave any time</p>

      <p class="login-row">
        Already have an account?
        <a href="https://login.giveitallevent.com/communities/groups/give-it-all-international/home">Log in to the community &rarr;</a>
      </p>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="site">
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
            <a href="#" class="is-soon-link">Virtual Membership</a>
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
            <a href="https://www.giveitallevent.com/members">Members</a>
            <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
            <a href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">Partner with us</a>
          </div>
        </div>
      </div>
      <div class="foot-bottom">
        <span>&copy; 2026 GIVE IT ALL. All rights reserved.</span>
      </div>
    </div>
  </footer>
  `;

  // load the brand fonts once (document-level so the shadow content can use them)
  if (!document.getElementById('gia-fonts-members')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts-members'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500&family=Poppins:wght@300;400;500&family=Caveat:wght@600;700&display=swap';
    document.head.appendChild(l);
  }

  // load the GoHighLevel form-embed helper once (document-level)
  if (!document.getElementById('gia-ghl-embed')) {
    var s = document.createElement('script');
    s.id = 'gia-ghl-embed'; s.src = 'https://link.msgsndr.com/js/form_embed.js'; s.async = true;
    document.body.appendChild(s);
  }

  class GIAMembersPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow; var host = this;

      // nav: scrolled state + mobile menu (scoped to the shadow root)
      var nav = root.querySelector('#nav');
      if (nav) {
        var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 40); };
        window.addEventListener('scroll', onScroll, {passive:true});
        onScroll();
        var menuBtn = nav.querySelector('.menu-btn');
        if (menuBtn) {
          menuBtn.addEventListener('click', function(){ nav.classList.toggle('menu-open'); });
          nav.querySelectorAll('.nav-links a').forEach(function(a){
            a.addEventListener('click', function(){ nav.classList.remove('menu-open'); });
          });
        }
      }

      // smooth-scroll for in-page anchors (#join) across the shadow boundary
      root.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length > 1) { var t = root.querySelector(id); if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
        });
      });

      // auto-fit the GoHighLevel form iframe if it reports its height.
      // form_embed.js can't see the shadowed iframe, so we listen for its height
      // messages directly and resize. Falls back to the fixed height otherwise.
      var ghForm = root.querySelector('#inline-h9evo9TIXoDjXJ8lGOkd');
      if (ghForm) {
        window.addEventListener('message', function(e){
          if (e.source !== ghForm.contentWindow) return;
          var d = e.data, h = null;
          if (typeof d === 'string') { try { d = JSON.parse(d); } catch(_) {} }
          if (typeof d === 'number') h = d;
          else if (d && typeof d === 'object') h = d.height || (d.payload && d.payload.height) || (d.data && d.data.height);
          if (h && h > 150 && h < 1200) ghForm.style.height = h + 'px';
        });
      }
    }
  }
  customElements.define('gia-members-page', GIAMembersPage);
})();
