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
  }
  *,*::before,*::after{box-sizing:border-box;}
  :host{display:block;margin:0;background:var(--navy);color:var(--ink);
    font-family:'Montserrat',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
    font-weight:400;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
  a{color:inherit;text-decoration:none;}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px;}
  section{position:relative;}
  .band{padding:56px 0;}
  .band-head{padding:40px 0 22px;}
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

  @media(max-width:640px){
    .cal-desktop{display:none;}
    .cal-agenda{display:flex;}
    .cal-tools .mlabel{min-width:0;font-size:1.1rem;}
  }
  `;

  var HTML = `
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
  `;

  class GIAEventsPage extends HTMLElement {
    connectedCallback(){
      if (this._mounted) return; this._mounted = true;
      var shadow = this.attachShadow({mode:'open'});
      shadow.innerHTML = '<style>'+CSS+'</style>'+HTML;
      var root = shadow;

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
