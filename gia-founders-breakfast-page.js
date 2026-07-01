/* GIVE IT ALL — Founders Breakfast page, packaged as a Wix Custom Element.
   Generated from founders-breakfast.html. Tag name to set in Wix: <gia-founders-breakfast-page>
   Renders in Shadow DOM so its styles never touch the rest of your Wix site. */
(function(){
  if (customElements.get('gia-founders-breakfast-page')) return;

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
  @media(prefers-reduced-motion:reduce){.btn-gold{animation:none;}}
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
  .chips{display:flex;flex-wrap:wrap;gap:10px;}

  .nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(10px);
    background:linear-gradient(180deg,rgba(6,25,56,.94),rgba(6,25,56,.7));
    border-bottom:1px solid var(--rule-2);}
  .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px;}
  .logo{font-weight:800;letter-spacing:.08em;color:var(--gold);font-size:1.02rem;
    display:flex;align-items:center;gap:9px;text-transform:uppercase;}
  .logo .mark{width:24px;height:24px;border-radius:7px;border:1.5px solid var(--gold);
    display:grid;place-items:center;font-size:.7rem;}
  .home-mark{position:fixed;top:18px;left:18px;z-index:200;width:42px;height:42px;
    border-radius:11px;border:1.5px solid var(--gold);color:var(--gold);
    font-weight:800;font-size:1.05rem;letter-spacing:.02em;text-decoration:none;
    display:grid;place-items:center;background:rgba(6,25,56,.55);
    backdrop-filter:blur(6px);transition:background .2s ease,transform .2s ease;}
  .home-mark:hover{background:rgba(6,25,56,.9);transform:translateY(-1px);}

  .hero{min-height:clamp(560px,88vh,820px);display:flex;align-items:flex-end;
    position:relative;overflow:hidden;}
  .hero .bg{position:absolute;inset:0;z-index:0;}
  .hero .scrim{position:absolute;inset:0;z-index:1;
    background:
      linear-gradient(180deg,rgba(6,25,56,.30) 0%,rgba(4,15,40,.28) 45%,rgba(4,15,40,.58) 82%,rgba(4,15,40,.80) 100%),
      linear-gradient(90deg,rgba(4,15,40,.82) 0%,rgba(4,15,40,.46) 34%,rgba(4,15,40,.08) 64%,rgba(4,15,40,0) 82%);}
  .hero .content{position:relative;z-index:2;width:100%;padding-bottom:54px;padding-top:90px;}
  .hero .h-hero{max-width:18ch;margin-bottom:18px;text-shadow:0 2px 22px rgba(2,7,18,.55);}
  .hero .script,.hero .sub,.hero .facts{text-shadow:0 1px 14px rgba(2,7,18,.5);}
  .hero .sub{max-width:42ch;margin-bottom:22px;}
  .facts{display:flex;flex-wrap:wrap;gap:8px 22px;color:var(--ink-hi);font-weight:600;
    margin-bottom:24px;font-size:1.02rem;}
  .facts .sep{color:var(--gold);}
  .hero-cta{display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin-bottom:18px;}
  .seatline{font-size:.92rem;color:var(--ink-2);}
  .seatline b{color:var(--ink-hi);font-weight:700;}

  .pull{font-size:clamp(1.4rem,3vw,2rem);line-height:1.28;color:var(--ink-hi);font-weight:700;max-width:22ch;}
  .pull .em{color:var(--gold);}
  .tension-body{max-width:52ch;margin-top:22px;color:var(--ink-2);font-size:1.05rem;line-height:1.6;}
  .turn{margin-top:20px;color:var(--ink-hi);font-style:italic;font-size:1.12rem;font-weight:600;}
  .tension-grid{display:grid;grid-template-columns:1fr minmax(260px,360px);gap:44px;align-items:center;}
  .tension-photo{width:100%;aspect-ratio:4/5;border-radius:16px;overflow:hidden;border:1.5px solid var(--rule-2);box-shadow:var(--shadow);align-self:center;}
  .tension-photo img{width:100%;height:100%;object-fit:cover;}
  @media(max-width:820px){.tension-grid{grid-template-columns:1fr;}.tension-photo{max-width:360px;margin:10px auto 0;}}

  /* split: copy + image */
  .split{display:grid;grid-template-columns:1fr minmax(260px,360px);gap:44px;align-items:center;}
  .split.rev{grid-template-columns:minmax(260px,360px) 1fr;}
  .split.rev .col-photo{order:-1;}
  .col-photo{width:100%;aspect-ratio:4/5;border-radius:16px;overflow:hidden;border:1px solid var(--rule-2);box-shadow:var(--shadow);align-self:center;}
  .col-photo img{width:100%;height:100%;object-fit:cover;}
  @media(max-width:820px){.split,.split.rev{grid-template-columns:1fr;gap:28px;}.split.rev .col-photo{order:0;}.col-photo{max-width:360px;margin-left:auto;margin-right:auto;}}

  .diff-line{display:flex;flex-direction:column;gap:14px;margin:22px 0 4px;}
  .diff-line .d{display:flex;gap:12px;color:var(--ink);font-size:1.04rem;line-height:1.5;}
  .diff-line .d .ic{color:var(--gold);font-weight:800;flex:0 0 auto;}
  .diff-close{margin-top:22px;color:var(--ink-hi);font-style:italic;font-weight:600;font-size:1.12rem;}

  /* entry requirements */
  .forcol{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:var(--r);padding:26px;}
  .forcol h4{font-size:1.1rem;margin-bottom:14px;}
  .forcol ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}
  .forcol li{display:flex;gap:10px;color:var(--ink);font-size:.98rem;line-height:1.45;}
  .forcol .ic{color:var(--gold);font-weight:800;flex:0 0 auto;}

  /* schedule */
  .sched{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
  .slot{background:var(--navy-card);border:1px solid var(--rule-2);border-radius:14px;padding:22px 20px;
    display:flex;flex-direction:column;gap:8px;transition:border-color .2s,transform .2s;}
  .slot:hover{border-color:var(--gold-line);transform:translateY(-2px);}
  .slot .t{font-weight:800;color:var(--gold);font-size:.92rem;letter-spacing:.04em;}
  .slot .n{font-weight:700;color:var(--ink-hi);font-size:1rem;}
  .sched-notes{display:flex;flex-wrap:wrap;gap:14px 30px;margin-top:26px;color:var(--ink-2);font-size:.95rem;}
  .sched-notes .nt{display:flex;gap:9px;}
  .sched-notes .nt .ic{color:var(--gold);flex:0 0 auto;}
  @media(max-width:820px){.sched{grid-template-columns:1fr 1fr;}}
  @media(max-width:480px){.sched{grid-template-columns:1fr;}}

  .host{display:grid;grid-template-columns:340px 1fr;gap:38px;align-items:center;}
  .host .portrait{aspect-ratio:4/5;border-radius:var(--r);overflow:hidden;border:1px solid var(--rule-2);}
  .host .portrait img{width:100%;height:100%;object-fit:cover;}
  .host blockquote{margin:20px 0 0;padding-left:18px;border-left:2px solid var(--gold-line);
    color:var(--ink-hi);font-weight:600;font-size:1.12rem;line-height:1.4;}
  .host .sig{margin-top:14px;color:var(--ink-2);font-style:italic;}
  @media(max-width:900px){.host{grid-template-columns:1fr;gap:22px;}.host .portrait{max-width:320px;margin-left:auto;margin-right:auto;}}

  /* value stack + price */
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
  .price-tag{font-size:.78rem;color:var(--gold);font-weight:700;letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:6px;}
  .price-cta{display:flex;flex-direction:column;gap:10px;margin-left:auto;align-items:flex-end;text-align:right;}
  .incl{color:var(--ink-2);font-size:.9rem;max-width:42ch;margin-top:14px;}
  .seat-mini{font-size:.86rem;color:var(--ink-2);}
  .seat-mini b{color:var(--ink-hi);}
  @media(max-width:900px){.money-grid{grid-template-columns:1fr;gap:26px;}}
  @media(max-width:620px){.money{padding:26px 20px;}.price-row{gap:18px;}.price-cta{margin-left:0;align-items:flex-start;text-align:left;}}

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

  @media(max-width:620px){
    .band{padding:38px 0;}
    .band-tight{padding:30px 0;}
    .eyebrow{margin-bottom:20px;}
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
  <div class="bg" style="background-image:url('https://static.wixstatic.com/media/111174_90cbc4d3fbcc4cdca95337a5b9cf088b~mv2.jpg');background-size:cover;background-position:center 30%;"></div>
  <div class="scrim"></div>
  <div class="content">
    <div class="wrap">
      <div class="script" style="margin-bottom:14px;">by GIVE IT ALL</div>
      <h1 class="h-hero">FOUNDERS <span class="gold">BREAKFAST</span></h1>
      <p class="lede sub">Connect as humans. Curate your business network.</p>
      <div class="facts"><span>28 July</span><span class="sep">·</span><span>Amavi, Canggu</span></div>
      <div class="hero-cta">
        <a class="btn btn-gold" href="https://checkout.giveitallevent.com/founders-breakfast-checkout" target="_blank" rel="noopener">Reserve now →</a>
        <span class="pill">Strictly limited to 20 seats</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ 2 · THE TENSION ============ -->
<section class="band">
  <div class="wrap tension-grid">
    <div class="tension-copy">
      <div class="eyebrow"><span class="label">Connecting as Humans</span><span class="rule"></span></div>
      <p class="pull">Networking is too often <span class="em">hit or miss</span> in who you meet.</p>
      <p class="tension-body">Torn between working the room and staying present in a flowing conversation. Finding it difficult to contribute and to receive value in equal measure.</p>
      <p class="tension-body">Or maybe you just value your time, and want every minute in the room to count.</p>
      <p class="turn">Founders Breakfast is designed to do the heavy lifting for you.</p>
    </div>
    <div class="tension-photo">
      <img src="https://static.wixstatic.com/media/111174_58955f5d085c4fad9dbbbd0d92beb879~mv2.jpg" alt="Founders Breakfast in Canggu" />
    </div>
  </div>
</section>

<!-- ============ 3 · THE GIVE IT ALL DIFFERENCE ============ -->
<section class="band deep speckle">
  <div class="wrap split rev">
    <div class="diff-copy">
      <div class="eyebrow"><span class="label">The GIVE IT ALL difference</span><span class="rule"></span></div>
      <h2 class="h-2">Our business networking designed for two things.</h2>
      <div class="diff-line">
        <div class="d"><span class="ic">✦</span> A room that learns how to recommend you out in their world.</div>
        <div class="d"><span class="ic">✦</span> And one that helps you solve the challenge you bring to the table.</div>
      </div>
      <p class="diff-close">This is intimate, connected, and real. Everyone gets the spotlight.</p>
      <a class="btn btn-gold" style="margin-top:24px;" href="https://checkout.giveitallevent.com/founders-breakfast-checkout" target="_blank" rel="noopener">Reserve now →</a>
    </div>
    <div class="col-photo">
      <img src="https://static.wixstatic.com/media/111174_9ac5813abc194563bf23e6bfcd6dc220~mv2.jpg" alt="A guest sharing with the room at Founders Breakfast" />
    </div>
  </div>
</section>

<!-- ============ 4 · FOUNDERS OF LIFE ============ -->
<section class="band">
  <div class="wrap split">
    <div class="founders-copy">
      <div class="eyebrow"><span class="label">Founders of life</span><span class="rule"></span></div>
      <h2 class="h-2">You are the <span class="gold">founder</span> of your world.</h2>
      <p class="lede steel" style="max-width:46ch;margin-top:14px;">Your offer, your path, your direction — even when others never understood why.</p>
      <div class="forcol" style="margin-top:24px;">
        <h4><span class="gold">Entry requirements</span></h4>
        <ul>
          <li><span class="ic">✓</span> You have an offer, service, or product</li>
          <li><span class="ic">✓</span> You generate a consistent income</li>
          <li><span class="ic">✓</span> You work for yourself</li>
          <li><span class="ic">✓</span> You have challenges you know you can't solve alone</li>
        </ul>
      </div>
    </div>
    <div class="col-photo">
      <img src="https://static.wixstatic.com/media/111174_d9b8647f47b84db6a919f7c781eec614~mv2.png" alt="Founders in conversation over coconuts by the Bali rice fields" />
    </div>
  </div>
</section>

<!-- ============ 5 · THE MORNING FLOW ============ -->
<section class="band deep speckle" id="flow">
  <div class="wrap">
    <div class="eyebrow"><span class="label">Tuesday 28th July · how the morning flows</span><span class="rule"></span></div>
    <div class="sched">
      <div class="slot"><div class="t">8:00 – 8:30 am</div><div class="n">Social Coffee</div></div>
      <div class="slot"><div class="t">8:30 – 10:00 am</div><div class="n">Facilitated Networking</div></div>
      <div class="slot"><div class="t">10:30 – 11:00 am</div><div class="n">Social Networking</div></div>
      <div class="slot"><div class="t">11:00 am</div><div class="n">Optional Co-working</div></div>
    </div>
    <div class="sched-notes">
      <span class="nt"><span class="ic">✦</span> Coffee, coconut &amp; smoothie included</span>
      <span class="nt"><span class="ic">✦</span> Breakfast available to order</span>
      <span class="nt"><span class="ic">✦</span> Punctuality expected</span>
      <span class="nt"><span class="ic">✦</span> Limited to 20 seats only</span>
    </div>
    <div style="margin-top:30px;">
      <a class="btn btn-gold" href="https://checkout.giveitallevent.com/founders-breakfast-checkout" target="_blank" rel="noopener">Reserve now →</a>
      <span class="seatline" style="margin-left:14px;">(limited seats available)</span>
    </div>
  </div>
</section>

<!-- ============ 6 · YOUR HOST ============ -->
<section class="band">
  <div class="wrap">
    <div class="eyebrow"><span class="label">Your host — Daniel Lawson</span><span class="rule"></span></div>
    <div class="host">
      <div class="portrait"><img src="https://static.wixstatic.com/media/111174_ca7594f5ff61480f9843d177e9f2a8ac~mv2.jpg" alt="Daniel Lawson" /></div>
      <div>
        <h2 class="h-2">Daniel Lawson.</h2>
        <p class="steel" style="margin-top:12px;">Accredited coach through the International Coach Guild at The Coaching Institute, Melbourne, with 6 years coaching personal connections and relationships.</p>
        <p class="steel">Creator of the Relational Connection System Framework™, serving dozens of graduates and hundreds more through global retreats and facilitations.</p>
        <p class="steel">Founder and host of GIVE IT ALL — voted #1 best networking event in Medellín, and widely recognised in Bulgaria and Bali.</p>
        <div class="sig">Daniel</div>
        <blockquote>You're in good hands for intentional, valued, guided business networking.</blockquote>
        <a href="https://www.giveitallevent.com/about-us" target="_blank" rel="noopener" style="display:inline-block;margin-top:18px;color:var(--gold);font-weight:600;font-size:.95rem;">More about the founders →</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ 7 · VALUE STACK + PRICE ============ -->
<section class="band deep speckle" id="tickets">
  <div class="wrap">
    <div class="eyebrow center"><span class="label">Included in the morning</span><span class="rule" style="max-width:160px;"></span></div>
    <div class="money">
      <div class="money-grid">
        <div class="stack">
          <h4>In the room <span>the experience</span></h4>
          <ul>
            <li><span class="ic">✦</span> Facilitated networking that makes the introductions for you</li>
            <li><span class="ic">✦</span> A room that learns how to recommend you out in their world</li>
            <li><span class="ic">✦</span> Coffee, coconut &amp; smoothie included (breakfast available to order)</li>
            <li><span class="ic">✦</span> An intimate table, strictly limited to 20 seats</li>
          </ul>
        </div>
        <div class="stack">
          <h4>What you leave with <span>the value</span></h4>
          <ul>
            <li><span class="ic">✦</span> Quality connections with founders who get it</li>
            <li><span class="ic">✦</span> Help solving the challenge you brought to the table</li>
            <li><span class="ic">✦</span> Recommendations into rooms you're not in yet</li>
            <li><span class="ic">✦</span> The feeling of finally being seen as a founder</li>
          </ul>
        </div>
      </div>
      <div class="price-row">
        <div>
          <span class="price-tag">Your seat</span>
          <div class="price"><span class="now">$35</span></div>
          <p class="incl">Includes facilitated networking, curated introductions, and coffee, coconut &amp; smoothie. Breakfast available to order.</p>
        </div>
        <div class="price-cta">
          <a class="btn btn-gold" href="https://checkout.giveitallevent.com/founders-breakfast-checkout" target="_blank" rel="noopener">Reserve now →</a>
          <span class="seat-mini">Strictly limited to <b>20 seats</b></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 8 · FINAL CTA ============ -->
<section class="final band">
  <div class="bg" style="background-image:url('https://static.wixstatic.com/media/111174_fefdc7d2dfdd4633ae6905809eecacf8~mv2.jpg');background-size:cover;background-position:center 35%;"></div>
  <div class="scrim"></div>
  <div class="content">
    <div class="wrap">
      <div class="script" style="margin-bottom:10px;">part of the GIVE IT ALL world of experiences</div>
      <h2 class="h-1" style="max-width:24ch;margin:0 auto;text-align:center;">Founders Breakfast. <span class="gold">Where your network curates itself.</span></h2>
      <div class="facts" style="margin-top:22px;"><span>28 July</span><span class="sep">·</span><span>Amavi, Canggu</span><span class="sep">·</span><span>20 seats</span></div>
      <div style="display:flex;justify-content:center;margin-top:22px;"><a class="btn btn-gold" href="https://checkout.giveitallevent.com/founders-breakfast-checkout" target="_blank" rel="noopener">Reserve now →</a></div>
      <p class="quiet">Strictly limited to 20 seats. Punctuality expected.</p>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<div style="text-align:center;padding:28px 20px 32px;font-size:.72rem;letter-spacing:.02em;opacity:.5;">
  <a href="https://www.giveitallevent.com/privacy-policy" style="color:var(--ink-2);border-bottom:1px solid rgba(232,198,95,.3);padding-bottom:1px;">Privacy Policy</a>
  <span style="margin:0 10px;">&middot;</span>
  <a href="https://www.giveitallevent.com/refund-policy" style="color:var(--ink-2);border-bottom:1px solid rgba(232,198,95,.3);padding-bottom:1px;">Refund Policy</a>
</div>
`;

  if (!document.getElementById('gia-fonts')) {
    var l = document.createElement('link');
    l.id = 'gia-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Caveat:wght@500;600;700&display=swap';
    document.head.appendChild(l);
  }

  class GIAFoundersBreakfastPage extends HTMLElement {
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
    }
  }
  customElements.define('gia-founders-breakfast-page', GIAFoundersBreakfastPage);
})();
