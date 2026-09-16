/* =========================================================================
   STANY ART & ENJOY — app.js  (vanilla, nessuna dipendenza)
   ========================================================================= */
(function(){
  "use strict";
  const D = window.DATA;
  const $  = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  /* ---- Link contatti ---- */
  const c = D.contatti;
  const waHref = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.waMessage||"")}`;
  const telHref = `tel:${c.telefono}`;

  $$("[data-wa]").forEach(a=>a.href=waHref);
  $$("[data-tel]").forEach(a=>a.href=telHref);
  $$("[data-ig]").forEach(a=>a.href=c.instagram);
  $$("[data-fb]").forEach(a=>a.href=c.facebook);
  $$("[data-tel-txt]").forEach(el=>el.textContent=c.telefonoDisplay);

  /* ---- Brand testi ---- */
  $$("[data-brand-name]").forEach(el=>el.textContent=D.brand.name);
  $$("[data-brand-lockup]").forEach(el=>el.textContent=D.brand.lockup);
  $$("[data-brand-payoff]").forEach(el=>el.textContent=D.brand.payoff);
  $("[data-hero-line]") && ($("[data-hero-line]").textContent=D.brand.heroLine);
  $("[data-intro-lead]") && ($("[data-intro-lead]").textContent=`Il salone, la Hair Spa, il beauty. A ${D.brand.city}.`);
  $("[data-intro-body]") && ($("[data-intro-body]").textContent=D.brand.intro);

  /* ---- Indirizzo ---- */
  const addrFull = `${c.indirizzo} · ${c.cap} ${c.comune}`;
  $$("[data-addr]").forEach(el=>el.textContent=addrFull);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(D.geo.mapQuery)}`;
  $$("[data-map-link]").forEach(a=>a.href=mapsLink);
  const mapFrame = $("[data-map-frame]");
  if(mapFrame){ mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(D.geo.mapQuery)}&z=15&output=embed`; }

  /* ---- LISTINO ---- */
  const lst = $("[data-listino]");
  if(lst){
    lst.innerHTML = D.listino.categorie.map(cat=>`
      <div class="cat">
        <h3>${esc(cat.nome)}</h3>
        ${cat.voci.map(v=>`
          <div class="voce">
            <span class="voce__name">${esc(v.nome)}${v.durata?`<span class="voce__dur">${esc(v.durata)}</span>`:""}</span>
            <span class="voce__dot"></span>
            <span class="voce__price">${esc(v.prezzo)}</span>
          </div>`).join("")}
      </div>`).join("")
      + (D.listino.nota?`<p class="listino__nota">${esc(D.listino.nota)}</p>`:"");
  }

  /* ---- SPOSA ---- */
  const spTxt = $("[data-sposa-text]"); if(spTxt) spTxt.textContent = D.sposa.testo;
  const spTit = $("[data-sposa-title]"); if(spTit) spTit.textContent = D.sposa.titolo;
  const spPlus = $("[data-sposa-plus]");
  if(spPlus) spPlus.innerHTML = D.sposa.puntiForza.map(p=>`<li>${esc(p)}</li>`).join("");

  /* ---- HAIR SPA ---- */
  $("[data-spa-title]") && ($("[data-spa-title]").textContent=D.hairspa.titolo);
  $("[data-spa-text]")  && ($("[data-spa-text]").textContent=D.hairspa.testo);
  const giftWrap = $("[data-gift]");
  if(giftWrap){
    if(D.hairspa.giftLink){
      giftWrap.innerHTML = `<a class="btn btn--gold btn--lg" href="${esc(D.hairspa.giftLink)}" target="_blank" rel="noopener">${esc(D.hairspa.giftLabel)}</a>`;
    } else { giftWrap.remove(); }
  }

  /* ---- MASSAGGI ---- */
  D.massaggi && $("[data-massaggi-title]") && ($("[data-massaggi-title]").textContent=D.massaggi.titolo);
  D.massaggi && $("[data-massaggi-text]")  && ($("[data-massaggi-text]").textContent=D.massaggi.testo);

  /* ---- BEAUTY ---- */
  $("[data-beauty-text]") && ($("[data-beauty-text]").textContent=D.beauty.testo);
  const bList = $("[data-beauty-list]");
  if(bList){
    if(D.beauty.voci && D.beauty.voci.length){
      bList.innerHTML = D.beauty.voci.map(v=>`<li><span>${esc(v.nome)}</span>${v.prezzo?`<span class="p">${esc(v.prezzo)}</span>`:""}</li>`).join("");
    } else { bList.remove(); }
  }

  /* ---- TEAM ---- */
  const teamEl = $("[data-team]");
  if(teamEl){
    teamEl.innerHTML = D.team.map(m=>`
      <div class="member">
        ${m.foto
          ? `<div class="figure"><img src="${esc(m.foto)}" alt="${esc(m.nome||m.ruolo)}" loading="lazy"></div>`
          : `<div class="slot"><span>${esc(m.slotCaption||"foto: ritratto verticale")}</span></div>
             <!-- <img src="img/team-xxx.jpg" alt="${esc(m.nome||m.ruolo)}"> -->`}
        <div class="member__name ${m.nome?"":"empty"}">${m.nome?esc(m.nome):"Nome da inserire"}</div>
        <div class="member__role">${esc(m.ruolo)}</div>
      </div>`).join("");
  }

  /* ---- PORTFOLIO ---- */
  const pf = $("[data-portfolio]");
  if(pf){
    pf.innerHTML = D.portfolio.map(p=>{
      const cls = "figure" + (p.big?" figure--tall":"");
      return p.src
        ? `<figure class="${cls}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy"></figure>`
        : `<div class="slot" style="min-height:100%"><span>${esc(p.slotCaption||p.alt)}</span></div>
           <!-- <figure class="${cls}"><img src="img/…jpg" alt="${esc(p.alt)}"></figure> -->`;
    }).join("");
  }

  /* ---- RECENSIONI ---- */
  const rv = $("[data-reviews]");
  if(rv){
    if(D.recensioni && D.recensioni.length){
      rv.className = "reviews";
      rv.innerHTML = D.recensioni.map(r=>`
        <blockquote class="review">
          <p>“${esc(r.testo)}”</p>
          <footer class="review__by">${esc(r.autore)}${r.fonte?` · ${esc(r.fonte)}`:""}</footer>
        </blockquote>`).join("");
    } else {
      rv.className = "reviews-empty";
      rv.innerHTML = `
        <p>Le nostre clienti raccontano meglio di noi.</p>
        <div class="links">
          <a class="btn btn--ghost" data-fb href="${esc(c.facebook)}" target="_blank" rel="noopener">Recensioni su Facebook</a>
          <a class="btn btn--ghost" data-ig href="${esc(c.instagram)}" target="_blank" rel="noopener">Guarda i lavori su Instagram</a>
        </div>`;
    }
  }

  /* ============ ORARI + STATO APERTO/CHIUSO (Europe/Rome) ============ */
  const KEYS = ["dom","lun","mar","mer","gio","ven","sab"]; // getDay(): 0=dom
  const LABELS = { lun:"Lunedì",mar:"Martedì",mer:"Mercoledì",gio:"Giovedì",ven:"Venerdì",sab:"Sabato",dom:"Domenica" };
  const ORDER = ["lun","mar","mer","gio","ven","sab","dom"];
  const toMin = t => { const [h,m]=t.split(":").map(Number); return h*60+m; };
  const fmt = t => t;

  function romeNow(){
    const p = new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",
      weekday:"short",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(new Date());
    const wd = p.find(x=>x.type==="weekday").value.toLowerCase();
    const map = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
    const dow = map[wd.slice(0,3)];
    const hh = +p.find(x=>x.type==="hour").value;
    const mm = +p.find(x=>x.type==="minute").value;
    return { dow, min:hh*60+mm };
  }

  function computeStatus(){
    const {dow,min} = romeNow();
    const todayKey = KEYS[dow];
    const prevKey  = KEYS[(dow+6)%7];
    const today = D.orari[todayKey] || [];
    const prev  = D.orari[prevKey]  || [];

    // aperti ora? (gestisce intervalli che scavalcano la mezzanotte)
    for(const [s,e] of today){
      const S=toMin(s), E=toMin(e);
      if(S<=E){ if(min>=S && min<E) return {open:true, until:e}; }
      else    { if(min>=S)         return {open:true, until:e}; } // apre oggi, chiude dopo mezzanotte
    }
    for(const [s,e] of prev){ // intervallo di ieri che scavalca la mezzanotte
      const S=toMin(s), E=toMin(e);
      if(S>E && min<E) return {open:true, until:e};
    }
    // chiuso: prossima apertura oggi?
    let next=null;
    for(const [s] of today){ if(toMin(s)>min && (next===null || toMin(s)<toMin(next))) next=s; }
    if(next) return {open:false, next, sameDay:true};

    // prossima apertura nei giorni successivi
    for(let i=1;i<=7;i++){
      const k=KEYS[(dow+i)%7]; const iv=D.orari[k]||[];
      if(iv.length){ return {open:false, next:iv[0][0], day:LABELS[k], sameDay:false}; }
    }
    return {open:false};
  }

  function renderStatus(){
    const st = computeStatus();
    let label;
    if(st.open) label = `Aperto ora · fino alle ${fmt(st.until)}`;
    else if(st.sameDay) label = `Chiuso · apre alle ${fmt(st.next)}`;
    else if(st.day) label = `Chiuso · apre ${st.day} ${fmt(st.next)}`;
    else label = "Chiuso";

    $$("[data-status]").forEach(el=>{
      el.classList.toggle("is-open", !!st.open);
      el.classList.toggle("is-closed", !st.open);
      const txt = el.querySelector("[data-status-txt]") || el;
      const dot = el.querySelector(".dot");
      txt.textContent = label;
      if(dot && txt!==el) el.prepend(dot); // keep dot first
    });
  }

  // lista orari (oggi evidenziato) — su tutte le liste presenti
  const hoursLists = $$("[data-hours]");
  if(hoursLists.length){
    const {dow} = romeNow(); const todayKey = KEYS[dow];
    const html = ORDER.map(k=>{
      const iv = D.orari[k]||[];
      const h = iv.length ? iv.map(([s,e])=>`${s}–${e}`).join(" · ") : "Chiuso";
      return `<li class="${k===todayKey?"today":""}"><span class="d">${LABELS[k]}</span><span class="h">${h}</span></li>`;
    }).join("");
    hoursLists.forEach(el=>el.innerHTML=html);
  }
  renderStatus();
  setInterval(renderStatus, 60000);

  /* ---- Header scroll state ---- */
  const header = $(".site-header");
  const onScroll = ()=> header && header.classList.toggle("is-scrolled", window.scrollY>20);
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  /* ---- Nav mobile ---- */
  const nav = $(".nav"), toggle = $(".nav-toggle"), backdrop = $(".nav-backdrop");
  function closeNav(){ nav&&nav.classList.remove("open"); backdrop&&backdrop.classList.remove("show"); document.body.style.overflow=""; toggle&&toggle.setAttribute("aria-expanded","false"); }
  function openNav(){ nav&&nav.classList.add("open"); backdrop&&backdrop.classList.add("show"); document.body.style.overflow="hidden"; toggle&&toggle.setAttribute("aria-expanded","true"); }
  toggle && toggle.addEventListener("click",()=> nav.classList.contains("open")?closeNav():openNav());
  backdrop && backdrop.addEventListener("click",closeNav);
  nav && $$("a",nav).forEach(a=>a.addEventListener("click",closeNav));

  /* ---- anno footer ---- */
  $("[data-year]") && ($("[data-year]").textContent = new Date().getFullYear());

  /* ---- VIDEO: autoplay muto in loop, pausa fuori schermo, reduced-motion ---- */
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const vids = $$("[data-bgvideo]");
  const tryPlay = v => { try{ const p=v.play(); if(p&&p.catch) p.catch(()=>{}); }catch(e){} };
  if(reduceMotion){
    vids.forEach(v=>{ v.removeAttribute("autoplay"); try{v.pause();}catch(e){} });
  } else if("IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting) tryPlay(e.target); else { try{e.target.pause();}catch(err){} }
    }),{threshold:.15});
    vids.forEach(v=>io.observe(v));
  } else { vids.forEach(tryPlay); }

  /* tap-per-audio (hair spa) */
  $$(".video-card .unmute").forEach(btn=>{
    const v = btn.parentElement.querySelector("video");
    btn.addEventListener("click",()=>{
      v.muted = !v.muted;
      btn.classList.toggle("is-on", !v.muted);
      btn.setAttribute("aria-label", v.muted ? "Attiva audio" : "Disattiva audio");
      if(!v.muted) tryPlay(v);
    });
  });

  /* ============ PRENOTAZIONE — MODAL (trattamento / giorno / orario → WhatsApp) ============ */
  const modal=$("#bkModal");
  const bkServ=$("[data-bk-serv]"), bkDate=$("[data-bk-date]"), bkTime=$("[data-bk-time]"),
        bkName=$("[data-bk-name]"), bkMsg=$("[data-bk-msg]"), bkSubmit=$("[data-bk-submit]");
  if(modal && bkServ && bkDate && bkTime && bkSubmit){
    const viewForm=modal.querySelector('[data-bk-view="form"]');
    const viewDone=modal.querySelector('[data-bk-view="done"]');

    // Trattamenti dal listino (+ eventuali voci beauty) + voci esperienza
    let opts = '<option value="">Scegli un trattamento</option>';
    D.listino.categorie.forEach(cat=>{
      opts += `<optgroup label="${esc(cat.nome)}">`
        + cat.voci.map(v=>`<option>${esc(v.nome)} — ${esc(v.prezzo)}</option>`).join("")
        + `</optgroup>`;
    });
    if(D.beauty && D.beauty.voci && D.beauty.voci.length){
      opts += `<optgroup label="Beauty">`
        + D.beauty.voci.map(v=>`<option>${esc(v.nome)}${v.prezzo?` — ${esc(v.prezzo)}`:""}</option>`).join("")
        + `</optgroup>`;
    }
    opts += `<optgroup label="Esperienza & Eventi">`
      + ["Hair Spa","Massaggio","Acconciatura sposa / evento","Beauty / trucco","Consulenza"]
        .map(x=>`<option>${x}</option>`).join("")
      + `</optgroup>`;
    bkServ.innerHTML = opts;

    const todayISO = new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Rome",
      year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
    bkDate.min = todayISO;

    function slotsFor(dateStr){
      const [y,m,d]=dateStr.split("-").map(Number);
      const iv = D.orari[KEYS[new Date(y,m-1,d).getDay()]]||[];
      const slots=[];
      iv.forEach(([s,e])=>{ for(let t=toMin(s); t<=toMin(e)-30; t+=30){
        slots.push(String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")); } });
      return slots;
    }
    function fmtDateIt(dateStr){
      const [y,m,d]=dateStr.split("-").map(Number);
      return new Date(y,m-1,d).toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long"});
    }
    function setMsg(t,err){ bkMsg.textContent=t||""; bkMsg.classList.toggle("err",!!err); }

    // preseleziona un trattamento passato dal bottone (match per prefisso nome)
    function preselect(service){
      if(!service) return;
      const o=[...bkServ.options].find(x=>x.value===service
        || x.value.toLowerCase().startsWith(service.toLowerCase()));
      if(o) bkServ.value=o.value;
    }

    let lastFocus=null;
    function openModal(service){
      viewDone.hidden=true; viewForm.hidden=false; setMsg("");
      preselect(service);
      lastFocus=document.activeElement;
      modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
      document.body.style.overflow="hidden";
      setTimeout(()=>bkServ.focus(),60);
    }
    function closeModal(){
      modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
      document.body.style.overflow="";
      if(lastFocus && lastFocus.focus) lastFocus.focus();
    }

    // apertura da qualsiasi bottone [data-book]
    $$("[data-book]").forEach(btn=>btn.addEventListener("click",e=>{
      e.preventDefault();
      // se il menu mobile è aperto, chiudilo
      const navEl=$(".nav"); if(navEl) navEl.classList.remove("open");
      document.body.style.overflow="";
      openModal(btn.getAttribute("data-service"));
    }));
    // chiusura
    $$("[data-bk-close]").forEach(el=>el.addEventListener("click",closeModal));
    document.addEventListener("keydown",e=>{ if(e.key==="Escape" && modal.classList.contains("open")) closeModal(); });

    bkDate.addEventListener("change",()=>{
      setMsg("");
      if(!bkDate.value){ bkTime.disabled=true; bkTime.innerHTML='<option value="">Scegli prima il giorno</option>'; return; }
      const slots=slotsFor(bkDate.value);
      if(!slots.length){
        bkTime.disabled=true; bkTime.innerHTML='<option value="">—</option>';
        setMsg("Quel giorno siamo chiusi: scegli da martedì a sabato.",true); return;
      }
      bkTime.disabled=false;
      bkTime.innerHTML='<option value="">Scegli un orario</option>'+slots.map(s=>`<option>${s}</option>`).join("");
    });

    bkSubmit.addEventListener("click",()=>{
      if(!bkServ.value){ setMsg("Scegli un trattamento.",true); bkServ.focus(); return; }
      if(!bkDate.value){ setMsg("Scegli un giorno.",true); bkDate.focus(); return; }
      if(!bkTime.value){ setMsg("Scegli un orario.",true); bkTime.focus(); return; }
      const nome=(bkName.value||"").trim();
      let txt=`Ciao Stany! Vorrei prenotare:\n• Trattamento: ${bkServ.value}\n• Giorno: ${fmtDateIt(bkDate.value)}\n• Orario: ${bkTime.value}`;
      if(nome) txt+=`\n• Nome: ${nome}`;
      txt+=`\nResto in attesa della vostra conferma.`;
      window.open(`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(txt)}`,"_blank","noopener");
      viewForm.hidden=true; viewDone.hidden=false;
    });
  }

  /* ---- hero ring: imposta lunghezza tratto per il disegno ---- */
  $$(".hero__ring circle").forEach(cir=>{
    const r = +cir.getAttribute("r"); const len = 2*Math.PI*r;
    cir.style.setProperty("--len", len.toFixed(0));
  });
})();
