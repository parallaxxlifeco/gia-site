/* GIVE IT ALL — Privacy Policy page, packaged as a Wix Custom Element.
   Generated from privacy-policy.html. Tag name to set in Wix: <gia-privacy-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site.
   NOTE: turn the Wix global header + footer OFF — this page carries its own nav + footer. */
(function(){
  if (customElements.get('gia-privacy-page')) return;

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
    --maxw-read: 800px;
    --gutter: clamp(20px, 5vw, 64px);
    --r-pill: 999px;
    --r-card: 18px;
    --ease: cubic-bezier(.22,.61,.36,1);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  :host {
    display: block;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(120% 70% at 50% 0%, #0c2a52 0%, var(--navy-deep) 48%, var(--black) 100%);
    color: var(--body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3 { font-family: 'Montserrat', sans-serif; line-height: 1.15; letter-spacing: -0.015em; text-wrap: balance; color: var(--ink); }
  a { color: inherit; text-decoration: none; }

  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--gutter); }

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
  @keyframes btnPulse{0%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,.5)}70%{box-shadow:0 10px 30px -10px rgba(232,198,95,.45),0 0 0 14px rgba(232,198,95,0)}100%{box-shadow:0 10px 30px -10px rgba(232,198,95,.5),0 0 0 0 rgba(232,198,95,0)}}
  @media(prefers-reduced-motion:reduce){.btn-gold{animation:none}}

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

  /* ---------- Legal page ---------- */
  .legal-hero{max-width:var(--maxw-read);margin:0 auto;padding:132px var(--gutter) 8px;text-align:center}
  .legal-hero .eyebrow{font-family:'Caveat',cursive;font-size:1.7rem;color:var(--gold);margin-bottom:2px}
  .legal-hero h1{font-weight:800;font-size:clamp(2rem,5.4vw,3.2rem);margin-bottom:14px}
  .legal-hero .updated{color:var(--steel);font-size:.9rem;letter-spacing:.02em}

  .legal{max-width:var(--maxw-read);margin:0 auto;padding:28px var(--gutter) 84px}
  .legal .intro{color:var(--body);font-size:1.02rem;margin-bottom:8px}
  .legal .intro strong{color:var(--ink);font-weight:600}
  .legal h2{font-size:clamp(1.2rem,2.4vw,1.5rem);font-weight:700;margin:38px 0 12px;padding-top:22px;border-top:1px solid var(--line)}
  .legal h2:first-of-type{border-top:none;padding-top:0;margin-top:26px}
  .legal p{color:var(--body);margin-bottom:14px;font-weight:300}
  .legal p strong,.legal li strong{color:var(--ink);font-weight:600}
  .legal ul{list-style:none;margin:0 0 16px;padding:0}
  .legal li{position:relative;padding-left:26px;margin-bottom:11px;color:var(--body);font-weight:300}
  .legal li::before{content:"\\25C6";position:absolute;left:0;top:.05em;color:var(--gold);font-size:.7em}
  .legal a{color:var(--gold);border-bottom:1px solid rgba(232,198,95,.35);transition:color .2s,border-color .2s}
  .legal a:hover{color:var(--gold-soft);border-color:var(--gold-soft)}
  .legal em{color:var(--muted);font-style:italic}
  .legal .contact-card{margin-top:14px;background:var(--navy-card);border:1px solid var(--line);border-radius:var(--r-card);padding:24px 26px;font-weight:300;color:var(--body);line-height:1.75}
  .legal .contact-card strong{color:var(--ink)}

  @media(max-width:600px){
    .legal-hero{padding-top:112px}
    .legal{padding-bottom:60px}
  }

  /* ---------- FOOTER (shared) ---------- */
  footer.site{background:var(--navy-deep);border-top:1px solid rgba(177,191,215,.12);padding-block:64px 40px;margin-top:20px}
  .foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;margin-bottom:48px}
  .foot-cols{display:flex;gap:clamp(40px,8vw,100px);flex-wrap:wrap}
  .foot-col h4{font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);margin-bottom:18px;font-weight:700}
  .foot-col a{display:block;color:var(--body);opacity:.82;font-size:.8rem;margin-bottom:12px;transition:opacity .2s,color .2s}
  .foot-col a:hover{opacity:1;color:var(--gold)}
  .foot-brand{max-width:30ch}
  .foot-brand .lead{font-size:.78rem;margin-top:16px;font-weight:300}
  .foot-social{display:flex;gap:18px;margin-top:20px}
  .foot-social a{color:var(--body);opacity:.82;font-size:.78rem;font-weight:600;transition:opacity .2s,color .2s}
  .foot-social a:hover{opacity:1;color:var(--gold)}
  .foot-bottom{display:flex;justify-content:space-between;gap:14px 20px;flex-wrap:wrap;padding-top:28px;border-top:1px solid rgba(177,191,215,.12);color:var(--steel);font-size:.72rem}
  .foot-bottom a{color:var(--steel);transition:color .2s}
  .foot-bottom a:hover{color:var(--gold)}
  .foot-legal{display:flex;gap:18px;flex-wrap:wrap}

  @media(max-width:600px){
    footer.site{padding-block:44px 28px}
    .foot-top{gap:30px;margin-bottom:34px}
    .foot-col h4{font-size:.62rem;margin-bottom:12px}
    .foot-col a{font-size:.76rem;margin-bottom:9px}
    .foot-brand .lead{font-size:.76rem}
    .foot-social a{font-size:.76rem}
    .foot-bottom{font-size:.7rem}
  }
`;

  var HTML = `<!-- ============ NAV ============ -->
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
      <a href="https://www.giveitallevent.com/bali-speaker-networking-event" target="_blank" rel="noopener" class="btn btn-gold">Get tickets <span class="arrow">&rarr;</span></a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="legal-hero">
  <p class="eyebrow">the small print</p>
  <h1>Privacy Policy</h1>
  <p class="updated">Last updated: 1 July 2026</p>
</section>

<!-- ============ CONTENT ============ -->
<main class="legal">

  <p class="intro">This Privacy Policy explains how <strong>Parallaxx Life Co Pty Ltd</strong> (ABN 66 631 353 752), trading as <strong>GIVE IT ALL Experiences</strong> ("we", "us", "our"), collects, uses, stores and discloses your personal information. We are committed to protecting your privacy and handling your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>

  <p class="intro">By using our website giveitallevent.com, purchasing a ticket, registering for an event, or otherwise providing us with your information, you agree to the collection and use of information in accordance with this policy.</p>

  <h2>1. Information we collect</h2>
  <p>We may collect the following types of personal information:</p>
  <ul>
    <li><strong>Identity and contact details</strong> &mdash; your name, email address, phone number, and postal or billing address.</li>
    <li><strong>Booking and transaction information</strong> &mdash; the experiences or events you book, ticket details, attendee information, and records of your purchases and communications with us.</li>
    <li><strong>Payment information</strong> &mdash; payment card or transaction details, which are processed securely by our third-party payment provider, Stripe. We do not store full card numbers on our systems. Stripe handles your payment information in accordance with its own privacy policy.</li>
    <li><strong>Application information</strong> &mdash; where you apply to speak, present or participate at an event, any information you provide as part of that application.</li>
    <li><strong>Technical and usage information</strong> &mdash; your IP address, browser type, device information, pages visited, and other analytics data collected automatically when you use our website (including via cookies).</li>
    <li><strong>Marketing preferences</strong> &mdash; your preferences for receiving communications from us.</li>
  </ul>

  <h2>2. How we collect your information</h2>
  <p>We collect personal information directly from you when you fill in a form, make a booking or purchase, register or apply for an event, contact us, or subscribe to our communications. We may also collect information automatically through cookies and analytics tools, and occasionally from third parties such as our booking, ticketing and payment providers.</p>

  <h2>3. Why we collect and use your information</h2>
  <p>We collect and use your personal information to:</p>
  <ul>
    <li>process and manage your bookings, tickets, payments, transfers and credits;</li>
    <li>deliver the experiences and events you have booked and communicate with you about them;</li>
    <li>assess and manage speaker, presenter or participant applications;</li>
    <li>respond to your enquiries and provide customer support;</li>
    <li>send you administrative information, such as confirmations, changes and reminders;</li>
    <li>send you marketing and promotional communications where you have consented (you can opt out at any time);</li>
    <li>improve our website, services and experiences; and</li>
    <li>comply with our legal obligations.</li>
  </ul>

  <h2>4. Disclosure of your information</h2>
  <p>We may disclose your personal information to:</p>
  <ul>
    <li>third-party service providers who help us operate our business, including payment processors, booking and ticketing platforms, email and marketing providers, IT and hosting providers, and analytics providers;</li>
    <li>event partners, venues or presenters where necessary to deliver an experience you have booked;</li>
    <li>professional advisers such as accountants and lawyers; and</li>
    <li>government, regulatory or law enforcement bodies where required or authorised by law.</li>
  </ul>
  <p>We do not sell your personal information. We take reasonable steps to ensure that any third party who receives your information is required to protect it.</p>

  <h2>5. Overseas disclosure</h2>
  <p>Parallaxx Life Co Pty Ltd is registered in Australia and operates experiences and events in Indonesia. As a result, your personal information may be collected, stored, processed or accessed in Australia, Indonesia, and other countries where our service providers (for example, cloud hosting, payment and email providers) operate. Where your information is disclosed or processed overseas, we take reasonable steps to ensure it is handled consistently with the Australian Privacy Principles.</p>

  <h2>6. Cookies</h2>
  <p>Our website uses cookies and similar technologies to help it function, remember your preferences, and understand how visitors use the site. You can set your browser to refuse cookies or alert you when cookies are being sent, though some parts of the website may not function properly as a result.</p>

  <h2>7. Security</h2>
  <p>We take reasonable steps to protect your personal information from misuse, interference and loss, and from unauthorised access, modification or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

  <h2>8. Retention</h2>
  <p>We keep your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to meet legal, accounting or reporting requirements. When it is no longer needed, we take reasonable steps to securely destroy or de-identify it.</p>

  <h2>9. Accessing and correcting your information</h2>
  <p>You may request access to the personal information we hold about you, and ask us to correct it if it is inaccurate, out of date or incomplete. To do so, please contact us using the details below. We may need to verify your identity before actioning your request.</p>

  <h2>10. Marketing and opting out</h2>
  <p>If you no longer wish to receive marketing communications from us, you can opt out at any time by using the unsubscribe link in our emails or by contacting us directly.</p>

  <h2>11. Complaints</h2>
  <p>If you believe we have breached the Australian Privacy Principles or mishandled your personal information, please contact us using the details below. We will respond to your complaint within a reasonable time. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">www.oaic.gov.au</a>.</p>

  <h2>12. Changes to this policy</h2>
  <p>We may update this Privacy Policy from time to time. The current version will always be available on our website, with the "Last updated" date shown at the top.</p>

  <h2>13. Contact us</h2>
  <div class="contact-card">
    <strong>Parallaxx Life Co Pty Ltd</strong> trading as GIVE IT ALL Experiences<br>
    ABN: 66 631 353 752<br>
    Email: <a href="mailto:dan@parallaxxtransformations.com">dan@parallaxxtransformations.com</a><br>
    Melbourne, Australia
  </div>

</main>

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
          <a href="https://www.parallaxxtransformations.com/coaching-experiences" target="_blank" rel="noopener">Parallaxx Transformations</a>
          <a href="#" class="is-soon-link">Virtual Membership</a>
          <a href="https://www.giveitallevent.com/events-calendar">Events calendar</a>
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
          <a href="https://www.giveitallevent.com/partners" target="_blank" rel="noopener">Partners</a>
          <a href="https://www.giveitallevent.com/partner-packages" target="_blank" rel="noopener">Partner with us</a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>&copy; 2026 GIVE IT ALL. All rights reserved.</span>
      <span class="foot-legal">
        <a href="https://www.giveitallevent.com/privacy-policy">Privacy Policy</a>
        <a href="https://www.giveitallevent.com/refund-policy">Refund Policy</a>
      </span>
    </div>
  </div>
</footer>`;

  if (!document.getElementById('gia-fonts-privacy')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts-privacy'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500&family=Poppins:wght@300;400;500&family=Caveat:wght@600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIAPrivacyPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;

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
    }
  }
  customElements.define('gia-privacy-page', GIAPrivacyPage);
})();
