/* GIVE IT ALL — Events Calendar page, packaged as a Wix Custom Element.
   Generated from events.html. Tag name to set in Wix: <gia-events-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site.

   A pageable month-grid calendar (desktop) with an agenda fallback (mobile),
   reading live from the public GIVE IT ALL calendar.

   ONE SETUP STEP: paste your domain-restricted Google Calendar API key into
   CONFIG.apiKey below, then re-deploy. The nav + footer "Events calendar"
   links are Wix-global elements (see NAV-FOOTER-SPEC.md). */
(function(){
  if (customElements.get('gia-events-page')) return;

  /* ============================================================
     CONFIG - paste your API key, then re-deploy.
     ============================================================ */
  var CONFIG = {
    apiKey: "AIzaSyAaCeJZl6AbDzqTJUlpS9fx_I_C1OYbXlE",
    calendarId: "8767808db148650b514aacbce41e3630e22b851dc24910653153370adec3b08c@group.calendar.google.com",
    tz: "Asia/Makassar",
    subscribeWebcal: "webcal://calendar.google.com/calendar/ical/8767808db148650b514aacbce41e3630e22b851dc24910653153370adec3b08c%40group.calendar.google.com/public/basic.ics",
    addToGoogle: "https://calendar.google.com/calendar/u/0/r?cid=ODc2NzgwOGRiMTQ4NjUwYjUxNGFhY2JjZTQxZTM2MzBlMjJiODUxZGMyNDkxMDY1MzE1MzM3MGFkZWMzYjA4Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
    links: {
      tickets: "https://www.giveitallevent.com/bali-speaker-networking-event",
      breakfast: "https://www.giveitallevent.com/founders-breakfast-bali",
      reconnect: "https://www.parallaxxtransformations.com/the-reconnected-man"
    }
  };

  var CSS = `
  :host{
    --navy:#061938; --navy-card:#0D2350; --navy-deep:#04122B;
    --gold:#E8C65F; --gold-soft:rgba(232,198,95,.14); --gold-line:rgba(232,198,95,.45);
    --fb:#EFB25A; --rm:#6F9BD8;
    --ink-hi:#F4F6FB; --ink:#E2E7F1; --ink-2:#B1BFD7;
    --rule:rgba(177,191,215,.22);
    --maxw:1120px; --r:18px;
    --gutter:clamp(20px,5vw,64px); --ease:cubic-bezier(.22,.61,.36,1);
  }
  *,*::before,*::after{box-sizing:border-box;}
  :host{display:block;margin:0;background:var(--navy);color:var(--ink);
    font-family:'Montserrat',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
    font-weight:400;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
  a{color:inherit;text-decoration:none;}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px;}
  section{position:relative;}
  .band{padding:56px 0;}
  .band-head{padding:96px 0 20px;}
  .head-row{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;}
  .deep{background:var(--navy-deep);}
  .script{font-family:'Caveat',cursive;color:var(--gold);font-weight:600;font-size:clamp(1.25rem,3.4vw,1.7rem);line-height:1;}
  h1,h2{color:var(--ink-hi);font-weight:800;line-height:1.08;margin:0;letter-spacing:-.02em;}
  .h-hero{font-size:clamp(1.85rem,5.2vw,3.2rem);}
  .h-2{font-size:clamp(1.4rem,3vw,1.9rem);}
  .lede{font-size:clamp(1.02rem,1.7vw,1.15rem);color:var(--ink-2);max-width:60ch;}

  .btn{display:inline-flex;align-items:center;gap:.45em;border-radius:999px;font-weight:700;font-size:.94rem;
    padding:13px 24px;cursor:pointer;border:1.5px solid transparent;transition:transform .15s ease,box-shadow .2s ease,background .2s ease;white-space:nowrap;}
  .btn .arrow{transition:transform .2s ease;}
  .btn:hover .arrow{transform:translateX(4px);}
  .btn-gold{background:var(--gold);color:#1A1306;box-shadow:0 10px 30px -10px rgba(232,198,95,.5);animation:btnPulse 2.8s ease-out infinite;}
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 34px -10px rgba(232,198,95,.6);animation:none;}
  @keyframes btnPulse{0%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5);}70%{box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0);}100%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0);}}
  @media(prefers-reduced-motion:reduce){.btn-gold{animation:none;}}
  .btn-ghost{background:transparent;color:var(--ink-hi);border-color:var(--gold-line);}
  .btn-ghost:hover{background:var(--gold-soft);border-color:var(--gold);}
  .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:24px;}

  /* toolbar */
  .cal-tools{display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap;}
  .cal-tools .mlabel{font-size:1.25rem;font-weight:700;color:var(--ink-hi);min-width:190px;}
  .cal-nav{background:transparent;border:1px solid var(--rule);color:var(--ink);width:38px;height:38px;border-radius:10px;cursor:pointer;font-size:1.1rem;line-height:1;transition:all .2s ease;}
  .cal-nav:hover{border-color:var(--gold);color:var(--gold);}
  .cal-today{background:transparent;border:1px solid var(--rule);color:var(--ink-2);font-family:inherit;font-size:.82rem;font-weight:600;padding:9px 16px;border-radius:999px;cursor:pointer;transition:all .2s ease;}
  .cal-today:hover{border-color:var(--gold);color:var(--gold);}
  .cal-spacer{flex:1;}

  /* month grid (desktop) */
  .cal-dow-row{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-bottom:8px;}
  .cal-dow{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2);text-align:center;font-weight:700;}
  .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;}
  .cal-cell{min-height:104px;background:var(--navy-card);border-radius:12px;padding:8px;display:flex;flex-direction:column;gap:4px;}
  .cal-cell.empty{background:transparent;}
  .cal-cell .dnum{font-size:.8rem;color:var(--ink-2);font-weight:600;align-self:flex-start;}
  .cal-cell.today .dnum{color:var(--navy);background:var(--gold);border-radius:50%;width:23px;height:23px;display:grid;place-items:center;}
  .chip-ev{display:block;font-size:.68rem;font-weight:700;padding:3px 7px;border-radius:6px;color:#0b1a33;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;}
  .chip-ev.gia{background:var(--gold);}
  .chip-ev.fb{background:var(--fb);}
  .chip-ev.rm{background:var(--rm);}
  .chip-ev.other{background:var(--ink-2);}

  .legend{display:flex;gap:18px;flex-wrap:wrap;margin-top:18px;font-size:.82rem;color:var(--ink-2);}
  .legend span{display:inline-flex;align-items:center;}
  .legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:7px;}

  /* agenda (mobile) */
  .cal-agenda{display:none;flex-direction:column;gap:10px;}
  .ev{display:flex;align-items:center;gap:14px;background:var(--navy-card);border-left:3px solid var(--gold);border-radius:0 12px 12px 0;padding:13px 15px;}
  .ev.fb{border-left-color:var(--fb);}
  .ev.rm{border-left-color:var(--rm);}
  .ev-date{text-align:center;min-width:44px;flex:0 0 auto;}
  .ev-date .wd{color:var(--gold);font-size:.66rem;font-weight:700;}
  .ev-date .dd{color:var(--ink-hi);font-size:1.3rem;font-weight:800;line-height:1;}
  .ev-date .mo{color:var(--ink-2);font-size:.6rem;}
  .ev-body{flex:1;min-width:0;}
  .ev-body .t{color:var(--ink-hi);font-size:.98rem;font-weight:600;}
  .ev-body .m{color:var(--ink-2);font-size:.82rem;margin-top:2px;}
  .ev-cta{flex:0 0 auto;font-size:.78rem;font-weight:700;padding:.55em 1em;border-radius:9px;white-space:nowrap;background:var(--gold);color:var(--navy);}
  .cal-state{text-align:center;padding:36px 20px;color:var(--ink-2);font-size:.95rem;}

  .subband{margin-top:8px;background:var(--navy-deep);border:1px dashed var(--rule);border-radius:var(--r);padding:36px 26px;text-align:center;}
  .subband .ic{color:var(--gold);font-size:1.9rem;margin-bottom:8px;}
  .subband p{color:var(--ink-2);font-size:.95rem;max-width:none;margin:6px auto 18px;}
  .subband .fine{font-size:.76rem;opacity:.8;margin-top:14px;}

  /* ===== standard nav ===== */
  header.nav{position:fixed;top:0;left:0;right:0;z-index:90;transition:background .35s var(--ease),border-color .35s var(--ease);border-bottom:1px solid transparent;}
  header.nav.scrolled{background:rgba(6,25,56,.82);backdrop-filter:blur(14px);border-bottom-color:rgba(177,191,215,.14);}
  .nav-inner{max-width:var(--maxw);margin:0 auto;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:20px;}
  .logo{display:flex;align-items:center;gap:.6em;font-weight:800;letter-spacing:-.02em;font-size:1.12rem;color:var(--ink-hi);}
  .logo .mark{width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);display:grid;place-items:center;font-size:.95rem;font-weight:800;flex:0 0 auto;}
  .nav-links{display:flex;align-items:center;gap:30px}
  .nav-links a{font-size:.92rem;font-weight:500;color:var(--ink-2);transition:color .2s;white-space:nowrap}
  .nav-links a:hover{color:var(--ink-hi)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-drop-toggle{background:none;border:none;font-family:inherit;font-size:.92rem;font-weight:500;color:var(--ink-2);cursor:pointer;display:inline-flex;align-items:center;gap:.35em;transition:color .2s;white-space:nowrap;padding:0}
  .nav-item:hover .nav-drop-toggle,.nav-item:focus-within .nav-drop-toggle{color:var(--ink-hi)}
  .nav-drop-toggle .caret{font-size:.7em;transition:transform .25s var(--ease)}
  .nav-item:hover .nav-drop-toggle .caret,.nav-item:focus-within .nav-drop-toggle .caret{transform:rotate(180deg)}
  .nav-drop{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);min-width:236px;display:flex;flex-direction:column;gap:2px;background:rgba(13,35,80,.97);backdrop-filter:blur(14px);border:1px solid rgba(177,191,215,.16);border-radius:14px;padding:10px;box-shadow:0 22px 54px -18px rgba(0,0,0,.65);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s var(--ease),transform .2s var(--ease);z-index:95;}
  .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
  .nav-drop a{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:9px 12px;border-radius:9px;font-size:.9rem;font-weight:500;color:var(--ink);white-space:nowrap;transition:background .2s,color .2s}
  .nav-drop a:hover{background:rgba(232,198,95,.1);color:var(--gold)}
  .nav-drop a.is-soon{color:var(--ink-2)}
  .nav-drop a.is-soon span{font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(177,191,215,.35);border-radius:999px;padding:.15em .6em;font-weight:700}
  .nav-cta{display:flex;align-items:center;gap:18px}
  .nav-cta .btn{padding:.7em 1.3em;font-size:.9rem}
  .nav-mobile-cta{display:none}
  .menu-btn{display:none;background:none;border:none;color:var(--ink);cursor:pointer;flex-direction:column;gap:5px;padding:6px}
  .menu-btn span{display:block;width:24px;height:2px;background:var(--ink);border-radius:2px}
  @media(max-width:880px){
    header.nav{background:rgba(6,25,56,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(177,191,215,.12)}
    .nav-inner{padding:10px var(--gutter)}
    .logo{font-size:1rem}.logo .mark{width:26px;height:26px;font-size:.85rem}
    .nav-cta .btn{display:none}
    .nav-links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;background:rgba(6,25,56,.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(177,191,215,.14);padding:12px var(--gutter) 22px;}
    .nav.menu-open .nav-links{display:flex}
    .nav-links > a:not(.btn){padding:13px 4px;font-size:1.05rem;border-bottom:1px solid rgba(177,191,215,.08)}
    .nav-mobile-cta{display:inline-flex;align-self:flex-start;margin:14px 4px 2px;padding:.8em 1.6em;font-size:.95rem}
    .nav-item{flex-direction:column;align-items:stretch}
    .nav-drop-toggle{padding:13px 4px;font-size:1.05rem;justify-content:space-between;width:100%}
    .nav-item .nav-drop{position:static;transform:none;opacity:1;visibility:visible;pointer-events:auto;background:transparent;border:none;box-shadow:none;backdrop-filter:none;min-width:0;padding:2px 0 10px 12px;margin:0;}
    .nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{transform:none}
    .nav-item .nav-drop a{font-size:.98rem;padding:9px 8px}
    .nav-drop-toggle .caret{display:none}
    .menu-btn{display:flex}
  }

  /* ===== standard footer ===== */
  footer{display:block;background:var(--navy-deep);border-top:1px solid rgba(177,191,215,.12);padding:56px 0 34px;margin-top:24px;}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:40px}
  .foot-cols{display:flex;gap:clamp(36px,7vw,88px);flex-wrap:wrap}
  .foot-col h4{font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);margin-bottom:16px;font-weight:700}
  .foot-col a{display:block;color:var(--ink);opacity:.82;font-size:.8rem;margin-bottom:10px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:30ch}
  .foot-brand .lead{font-size:.78rem;margin-top:14px;line-height:1.5}
  .foot-social{display:flex;gap:16px;margin-top:16px}
  .foot-social a{color:var(--ink);opacity:.82;font-size:.78rem;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding-top:24px;border-top:1px solid rgba(177,191,215,.1);color:var(--ink-2);font-size:.72rem}

  @media(max-width:640px){
    .cal-desktop{display:none;}
    .cal-agenda{display:flex;}
    .band{padding:30px 0;}
    .band-head{padding:74px 0 12px;}
    .head-row{gap:14px;}
    .script{font-size:1.35rem;}
    .h-hero{font-size:clamp(1.7rem,7.6vw,2.3rem);}
    .hero-cta{margin-top:16px;gap:10px;}
    .hero-cta .btn{padding:11px 18px;font-size:.85rem;}
    .cal-tools{gap:8px;margin-bottom:14px;}
    .cal-tools .mlabel{min-width:0;font-size:1.05rem;}
    .cal-today{padding:8px 13px;font-size:.78rem;}
    .cal-nav{width:34px;height:34px;}
    .legend{gap:12px 14px;font-size:.74rem;margin-top:14px;}
    .subband{padding:26px 18px;}
    .subband .h-2{font-size:1.35rem;}
    .ev{gap:11px;padding:12px 13px;}
    .ev-date{min-width:40px;}
    .ev-date .dd{font-size:1.2rem;}
    .ev-body .t{font-size:.92rem;}
    .ev-body .m{font-size:.78rem;}
    .ev-cta{padding:.5em .85em;font-size:.74rem;}
    .foot-top{gap:26px;margin-bottom:28px}
    .foot-col a{font-size:.76rem;margin-bottom:8px}
    footer{padding:40px 0 26px;margin-top:16px;}
  }
  `;

  var HTML = `
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
            <a href="https://www.giveitallevent.com/events-calendar" style="color:var(--gold)">Events calendar</a>
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

  <section class="band-head">
    <div class="wrap head-row">
      <div>
        <p class="script">the world of</p>
        <h1 class="h-hero">The GIVE IT ALL calendar</h1>
      </div>
      <div class="hero-cta">
        <a class="btn btn-gold" id="subBtn" href="#" target="_blank" rel="noopener">Subscribe <span class="arrow">→</span></a>
        <a class="btn btn-ghost" id="googleBtn" href="#" target="_blank" rel="noopener">Add to Google</a>
      </div>
    </div>
  </section>

  <section class="band deep">
    <div class="wrap">
      <div class="cal-tools">
        <button class="cal-nav" id="prevM" aria-label="Previous month">‹</button>
        <span class="mlabel" id="mLabel">—</span>
        <button class="cal-nav" id="nextM" aria-label="Next month">›</button>
        <button class="cal-today" id="todayBtn">Today</button>
        <span class="cal-spacer"></span>
      </div>

      <div class="cal-desktop">
        <div class="cal-dow-row">
          <div class="cal-dow">Mon</div><div class="cal-dow">Tue</div><div class="cal-dow">Wed</div>
          <div class="cal-dow">Thu</div><div class="cal-dow">Fri</div><div class="cal-dow">Sat</div><div class="cal-dow">Sun</div>
        </div>
        <div class="cal-grid" id="calGrid"></div>
      </div>

      <div class="cal-agenda" id="calAgenda"></div>

      <div class="legend">
        <span><i style="background:var(--gold)"></i> Speaker Night</span>
        <span><i style="background:var(--fb)"></i> Founders Breakfast</span>
        <span><i style="background:var(--rm)"></i> Reconnected Man</span>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap">
      <div class="subband">
        <div class="ic">🔔</div>
        <h2 class="h-2">Never miss a date</h2>
        <p>Add the whole GIVE IT ALL calendar to your phone in one tap.</p>
        <a class="btn btn-gold" id="subBtn2" href="#" target="_blank" rel="noopener">Subscribe to the calendar <span class="arrow">→</span></a>
        <p class="fine">Works with Apple Calendar, Google Calendar and Outlook.</p>
      </div>
    </div>
  </section>

  <footer>
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
            <a href="https://www.giveitallevent.com/events-calendar">Events calendar</a>
          </div>
          <div class="foot-col">
            <h4>Our deeper world</h4>
            <a href="https://www.parallaxxtransformations.com/the-reconnected-man" target="_blank" rel="noopener">Reconnected Man</a>
            <a href="https://www.parallaxxtransformations.com/the-reconnected-woman" target="_blank" rel="noopener">Reconnected Woman</a>
            <a href="https://www.giveitallevent.com/reconnect" target="_blank" rel="noopener">Reconnect</a>
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
        <span style="display:inline-flex;gap:18px;flex-wrap:wrap">
          <a href="https://www.giveitallevent.com/privacy-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Privacy Policy</a>
          <a href="https://www.giveitallevent.com/refund-policy" style="color:inherit;border-bottom:1px solid rgba(232,198,95,.4)">Refund Policy</a>
        </span>
      </div>
    </div>
  </footer>
  `;

  class GIAEventsPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;

      /* standard nav: scrolled state + mobile menu toggle */
      var navEl = root.getElementById('nav');
      if (navEl){
        var onNavScroll = function(){ navEl.classList.toggle('scrolled', window.scrollY > 40); };
        window.addEventListener('scroll', onNavScroll, {passive:true}); onNavScroll();
        var mBtn = root.querySelector('.menu-btn');
        if (mBtn){
          mBtn.addEventListener('click', function(){ navEl.classList.toggle('menu-open'); });
          root.querySelectorAll('.nav-links a').forEach(function(a){ a.addEventListener('click', function(){ navEl.classList.remove('menu-open'); }); });
        }
      }

      root.getElementById('subBtn').href = CONFIG.subscribeWebcal;
      root.getElementById('subBtn2').href = CONFIG.subscribeWebcal;
      root.getElementById('googleBtn').href = CONFIG.addToGoogle;

      var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var clean = function(s){ return (s||'').replace(/\s[—–]\s/g,' · '); };
      var fmt = function(d,o){ return new Intl.DateTimeFormat('en-GB', Object.assign({timeZone:CONFIG.tz}, o)).format(d); };
      var pad = function(n){ return (n<10?'0':'')+n; };

      function typeOf(title){
        var t = (title||'').toLowerCase();
        if (t.indexOf('founders breakfast') > -1) return {cls:'fb', short:'Breakfast', label:'Book seat', url:CONFIG.links.breakfast};
        if (t.indexOf('reconnected man') > -1)    return {cls:'rm', short:'Reconnected', label:'Apply', url:CONFIG.links.reconnect};
        if (t.indexOf('give it all') > -1)        return {cls:'gia', short:'GIVE IT ALL', label:'Get tickets', url:CONFIG.links.tickets};
        return {cls:'other', short:'Event', label:'Details', url:'#'};
      }
      var timePart = function(d){ return fmt(d,{hour:'numeric',minute:'2-digit',hour12:true}).replace(':00','').toLowerCase().replace(' ',''); };

      var today = new Date();
      var todayKey = fmt(today,{year:'numeric'})+'-'+fmt(today,{month:'2-digit'})+'-'+fmt(today,{day:'2-digit'});
      var view = { y: parseInt(fmt(today,{year:'numeric'}),10), m: parseInt(fmt(today,{month:'numeric'}),10)-1 };
      var cache = {};

      function monthEvents(y,m){
        var key = y+'-'+m;
        if (cache[key]) return Promise.resolve(cache[key]);
        if (CONFIG.apiKey.indexOf('PASTE') === 0) return Promise.reject('nokey');
        var timeMin = y+'-'+pad(m+1)+'-01T00:00:00+08:00';
        var lastDay = new Date(y, m+1, 0).getDate();
        var timeMax = y+'-'+pad(m+1)+'-'+pad(lastDay)+'T23:59:59+08:00';
        var url = 'https://www.googleapis.com/calendar/v3/calendars/'+encodeURIComponent(CONFIG.calendarId)+'/events'
          +'?key='+CONFIG.apiKey+'&timeMin='+encodeURIComponent(timeMin)+'&timeMax='+encodeURIComponent(timeMax)
          +'&singleEvents=true&orderBy=startTime&maxResults=60';
        return fetch(url).then(function(r){ if(!r.ok) throw new Error('HTTP '+r.status); return r.json(); }).then(function(data){
          var items = (data.items||[]).map(function(e){
            var start = e.start.dateTime || e.start.date;
            var d = new Date(start);
            return { title:e.summary||'Event', start:start, end:e.end?(e.end.dateTime||e.end.date):null,
                     location:e.location||'', day:parseInt(fmt(d,{day:'numeric'}),10), dateObj:d };
          });
          cache[key] = items; return items;
        });
      }

      function draw(){
        var y = view.y, m = view.m;
        root.getElementById('mLabel').textContent = MONTHS[m]+' '+y;
        var grid = root.getElementById('calGrid');
        var agenda = root.getElementById('calAgenda');
        grid.innerHTML = '<div class="cal-state" style="grid-column:1/-1">Loading…</div>';
        agenda.innerHTML = '<div class="cal-state">Loading…</div>';

        monthEvents(y,m).then(function(items){
          /* grid */
          var firstDow = (new Date(y,m,1).getDay()+6)%7;   /* Mon-first offset */
          var days = new Date(y, m+1, 0).getDate();
          var cells = '';
          for (var i=0;i<firstDow;i++) cells += '<div class="cal-cell empty"></div>';
          for (var d=1; d<=days; d++){
            var key = y+'-'+pad(m+1)+'-'+pad(d);
            var isToday = key===todayKey ? ' today' : '';
            var chips = items.filter(function(e){ return e.day===d; }).map(function(e){
              var ty = typeOf(e.title);
              return '<a class="chip-ev '+ty.cls+'" href="'+ty.url+'" target="_blank" rel="noopener" title="'+clean(e.title)+'">'+timePart(e.dateObj)+' '+ty.short+'</a>';
            }).join('');
            cells += '<div class="cal-cell'+isToday+'"><span class="dnum">'+d+'</span>'+chips+'</div>';
          }
          grid.innerHTML = cells;

          /* agenda (mobile) */
          if (!items.length){ agenda.innerHTML = '<div class="cal-state">No events this month. Subscribe above to catch new dates.</div>'; return; }
          agenda.innerHTML = items.map(function(e){
            var ty = typeOf(e.title);
            var wd = fmt(e.dateObj,{weekday:'short'}).toUpperCase();
            var dd = fmt(e.dateObj,{day:'numeric'});
            var mo = fmt(e.dateObj,{month:'short'}).toUpperCase();
            var t1 = timePart(e.dateObj);
            var t2 = e.end ? timePart(new Date(e.end)) : '';
            var loc = (e.location||'').split(',')[0];
            var meta = [t2?(t1+' – '+t2):t1, loc].filter(Boolean).join(' · ');
            return '<div class="ev '+ty.cls+'"><div class="ev-date"><div class="wd">'+wd+'</div><div class="dd">'+dd+'</div><div class="mo">'+mo+'</div></div>'
              +'<div class="ev-body"><div class="t">'+clean(e.title)+'</div><div class="m">'+meta+'</div></div>'
              +'<a class="ev-cta" href="'+ty.url+'" target="_blank" rel="noopener">'+ty.label+'</a></div>';
          }).join('');
        }).catch(function(){
          var msg = CONFIG.apiKey.indexOf('PASTE')===0
            ? 'Add your Google Calendar API key in CONFIG to show the live schedule. The Subscribe buttons already work.'
            : 'Could not load the schedule right now. You can still subscribe above to get every date.';
          grid.innerHTML = '<div class="cal-state" style="grid-column:1/-1">'+msg+'</div>';
          agenda.innerHTML = '<div class="cal-state">'+msg+'</div>';
        });
      }

      root.getElementById('prevM').addEventListener('click', function(){ view.m--; if(view.m<0){view.m=11;view.y--;} draw(); });
      root.getElementById('nextM').addEventListener('click', function(){ view.m++; if(view.m>11){view.m=0;view.y++;} draw(); });
      root.getElementById('todayBtn').addEventListener('click', function(){
        view.y = parseInt(fmt(new Date(),{year:'numeric'}),10); view.m = parseInt(fmt(new Date(),{month:'numeric'}),10)-1; draw();
      });

      draw();
    }
  }
  customElements.define('gia-events-page', GIAEventsPage);
})();
