/* ==========================================================================
   SéGa Nails — comportements & mouvement
   Lenis (défilement doux) + GSAP/ScrollTrigger. Tout reste lisible sans JS.
   ========================================================================== */
(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const $ = (s, c = doc) => c.querySelector(s);
  const $$ = (s, c = doc) => Array.from(c.querySelectorAll(s));
  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const canGSAP = !!(window.gsap && window.ScrollTrigger);
  const reduce = reduceMQ.matches;

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  /* ------------------------------------------------------------------
     Horaires (fuseau de Brest) : statut d’ouverture, jour courant
     ------------------------------------------------------------------ */
  const HOURS = { 1: [13.5, 17.5], 2: [13.5, 19], 3: [10, 17.5], 4: [10, 18], 5: [10, 19], 6: null, 0: null };
  const DAY_NAMES = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const fmtH = (h) => {
    const H = Math.floor(h);
    const M = Math.round((h - H) * 60);
    return M ? `${H}h${String(M).padStart(2, '0')}` : `${H}h00`;
  };
  function parisNow() {
    try {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
      }).formatToParts(new Date());
      const get = (t) => parts.find((p) => p.type === t).value;
      const day = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[get('weekday')];
      return { day, t: Number(get('hour')) + Number(get('minute')) / 60 };
    } catch (e) {
      const d = new Date();
      return { day: d.getDay(), t: d.getHours() + d.getMinutes() / 60 };
    }
  }
  function openStatus() {
    const { day, t } = parisNow();
    const today = HOURS[day];
    if (today && t >= today[0] && t < today[1]) {
      return { day, open: true, short: `Ouvert maintenant · jusqu’à ${fmtH(today[1])}`, long: `Aujourd’hui, ${DAY_NAMES[day]} : ${fmtH(today[0])} – ${fmtH(today[1])}. Un message sur Instagram fonctionne aussi.` };
    }
    if (today && t < today[0]) {
      return { day, open: false, short: `Fermé · ouvre à ${fmtH(today[0])}`, long: `Aujourd’hui, ${DAY_NAMES[day]} : ouvert à partir de ${fmtH(today[0])}. Un message sur Instagram fonctionne aussi.` };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7;
      if (HOURS[d]) {
        const when = i === 1 ? 'demain' : DAY_NAMES[d];
        return { day, open: false, short: `Fermé · rouvre ${when} à ${fmtH(HOURS[d][0])}`, long: `Le salon rouvre ${when} à ${fmtH(HOURS[d][0])}. Un message sur Instagram fonctionne aussi.` };
      }
    }
    return { day, open: false, short: 'Du lundi au vendredi', long: 'Du lundi au vendredi.' };
  }
  function initStatus() {
    const s = openStatus();
    const el = $('[data-status]');
    if (el) {
      el.textContent = s.short;
      el.parentElement.classList.add(s.open ? 'is-open' : 'is-closed');
    }
    const long = $('[data-status-long]');
    if (long) long.textContent = s.long;
    $$(`[data-day="${s.day}"]`).forEach((n) => {
      if (n.matches('tr')) n.setAttribute('aria-current', 'date');
      if (n.matches('tr, .day')) n.classList.add('is-today');
    });
    const y = $('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
    return s;
  }

  /* ------------------------------------------------------------------
     Utilitaires de découpe du texte (mots / lettres)
     ------------------------------------------------------------------ */
  function splitWords(el) {
    if (!el || el.dataset.splitDone) return [];
    el.dataset.splitDone = '1';
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    const walk = (node) => {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          const frag = doc.createDocumentFragment();
          n.textContent.split(/( +)/).forEach((tok) => {
            if (!tok) return;
            if (/^ +$/.test(tok)) { frag.appendChild(doc.createTextNode(' ')); return; }
            const w = doc.createElement('span');
            w.className = 'w'; w.setAttribute('aria-hidden', 'true');
            const wi = doc.createElement('span');
            wi.className = 'wi'; wi.textContent = tok;
            w.appendChild(wi); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) { walk(n); }
      });
    };
    walk(el);
    return $$('.wi', el);
  }
  function splitChars(el) {
    if (!el || el.dataset.splitDone) return [];
    el.dataset.splitDone = '1';
    const text = el.textContent;
    if (!el.getAttribute('aria-label') && !el.closest('[aria-label]')) el.setAttribute('aria-label', text);
    el.textContent = '';
    Array.from(text).forEach((c) => {
      if (c === ' ') { el.appendChild(doc.createTextNode(' ')); return; }
      const m = doc.createElement('span'); m.className = 'chm'; m.setAttribute('aria-hidden', 'true');
      const ch = doc.createElement('span'); ch.className = 'ch'; ch.textContent = c;
      m.appendChild(ch); el.appendChild(m);
    });
    return $$('.ch', el);
  }

  /* Filet doré qui suit la forme d’amande */
  const ALMOND = 'M0.5 0C0.68 0 0.82 0.18 0.92 0.4C0.98 0.54 1 0.64 1 0.76C1 0.92 0.84 1 0.5 1C0.16 1 0 0.92 0 0.76C0 0.64 0.02 0.54 0.08 0.4C0.18 0.18 0.32 0 0.5 0Z';
  function addOutline(el) {
    if (!el || el.querySelector(':scope > .arch__line')) return;
    const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'arch__line'); svg.setAttribute('viewBox', '0 0 1 1');
    svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('aria-hidden', 'true');
    const p = doc.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', ALMOND);
    svg.appendChild(p); el.appendChild(svg);
  }

  /* ------------------------------------------------------------------
     Éléments qui fonctionnent sans GSAP
     ------------------------------------------------------------------ */
  let lenis = null;

  function initNav() {
    const nav = $('#nav');
    const ribbon = $('.ribbon i');
    const fab = $('.fab');
    let lastY = window.scrollY, ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = Math.max(1, doc.documentElement.scrollHeight - window.innerHeight);
      if (ribbon) ribbon.style.transform = `translateY(${(Math.min(1, y / max) - 1) * 100}%)`;
      if (nav && !nav.classList.contains('is-menu')) {
        nav.classList.toggle('is-solid', y > 40);
        if (y > 160 && y > lastY + 4) nav.classList.add('is-hidden');
        else if (y < lastY - 4 || y <= 160) nav.classList.remove('is-hidden');
      }
      if (fab) fab.classList.toggle('is-visible', y > window.innerHeight * 0.75 && !fabHidden);
      lastY = y;
    };
    let fabHidden = false;
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();

    if (fab && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        fabHidden = entries.some((e) => e.isIntersecting) ? true : false;
        update();
      }, { rootMargin: '0px 0px -20% 0px' });
      ['#rendez-vous', '#contact'].forEach((s) => { const n = $(s); if (n) io.observe(n); });
    }
  }

  function initMenu() {
    const btn = $('.nav__toggle');
    const menu = $('#menu');
    const nav = $('#nav');
    if (!btn || !menu) return;
    const links = $$('.menu__links a', menu);
    links.forEach((a, i) => a.style.setProperty('--i', i));

    const setOpen = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('.nav__toggle-label').textContent = open ? 'Fermer' : 'Menu';
      menu.classList.toggle('is-open', open);
      menu.inert = !open;
      nav.classList.toggle('is-menu', open);
      if (open) nav.classList.remove('is-hidden');
      root.classList.toggle('menu-open', open);
      if (lenis) open ? lenis.stop() : lenis.start();
      else doc.body.style.overflow = open ? 'hidden' : '';
      if (open) links[0] && links[0].focus({ preventScroll: true });
    };
    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    doc.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); btn.focus(); } });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  }

  function initFaq() {
    $$('.qa').forEach((d) => {
      const sum = $('summary', d);
      const body = $('.qa__body', d);
      sum.addEventListener('click', (e) => {
        if (!canGSAP || reduce) return;
        e.preventDefault();
        if (d.open) {
          gsap.to(body, { height: 0, duration: 0.6, ease: 'expo.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'height' }); } });
        } else {
          $$('.qa[open]').forEach((o) => { if (o !== d) { const b = $('.qa__body', o); gsap.to(b, { height: 0, duration: 0.5, ease: 'expo.inOut', onComplete: () => { o.open = false; gsap.set(b, { clearProps: 'height' }); } }); } });
          d.open = true;
          gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: 0.8, ease: 'expo.out' });
          if (window.ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 900);
        }
      });
    });
  }

  function initLightbox() {
    const dlg = $('#lightbox');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    const img = $('img', dlg), cap = $('figcaption', dlg);
    const shots = $$('[data-lightbox]');
    const data = shots.map((b) => ({ src: $('img', b).currentSrc || $('img', b).src, alt: $('img', b).alt, cap: $('figcaption span', b.closest('.shot')).textContent, btn: b }));
    let cur = 0, opener = null;
    const show = (i) => {
      cur = (i + data.length) % data.length;
      img.src = data[cur].src; img.alt = data[cur].alt; cap.textContent = data[cur].cap;
      if (canGSAP && !reduce) gsap.fromTo(img, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out' });
    };
    const open = (i, btn) => { opener = btn; show(i); dlg.showModal(); if (lenis) lenis.stop(); };
    const close = () => dlg.close();
    shots.forEach((b, i) => b.addEventListener('click', () => open(i, b)));
    $('.lightbox__close', dlg).addEventListener('click', close);
    $('.lightbox__nav--prev', dlg).addEventListener('click', () => show(cur - 1));
    $('.lightbox__nav--next', dlg).addEventListener('click', () => show(cur + 1));
    dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
    dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
    dlg.addEventListener('close', () => { if (lenis) lenis.start(); if (opener) opener.focus({ preventScroll: true }); });
  }

  /* Carrousel d’avis : pile de feuillets */
  function initReviews() {
    const stack = $('[data-reviews]');
    if (!stack) return;
    const notes = $$('.note', stack);
    const n = notes.length;
    const cur = $('[data-cur]');
    const btnPrev = $('[data-prev]'), btnNext = $('[data-next]'), btnPause = $('[data-pause]');
    let i = 0, timer = null, paused = reduce, hover = false, busy = false;

    const pose = (k) => {
      const s = stack.offsetWidth < 480 ? 0.5 : 1;
      if (k === 0) return { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 50 };
      if (k === 1) return { x: 28 * s, y: 20, rotation: 2.2, scale: 0.965, opacity: 1, zIndex: 40 };
      if (k === 2) return { x: 54 * s, y: 38, rotation: 4.4, scale: 0.93, opacity: 0.92, zIndex: 30 };
      return { x: 64 * s, y: 48, rotation: 5.4, scale: 0.9, opacity: 0, zIndex: 20 };
    };
    const measure = () => {
      let h = 0;
      notes.forEach((nt) => { nt.style.height = ''; });
      notes.forEach((nt) => { h = Math.max(h, nt.offsetHeight); });
      notes.forEach((nt) => { nt.style.height = `${h}px`; });
      stack.style.height = `${h + 54}px`;
      if (rendered) render(false, true);
    };
    let rendered = false;
    const render = (animate, dirNext) => {
      notes.forEach((nt, idx) => {
        const k = (idx - i + n) % n;
        const p = pose(k);
        nt.setAttribute('aria-hidden', k === 0 ? 'false' : 'true');
        nt.style.pointerEvents = k === 0 ? 'auto' : 'none';
        if (!canGSAP || !animate) { gsap_set(nt, p); return; }
        const wasFront = nt.dataset.k === '0';
        const goingBack = dirNext && wasFront;
        const comingFront = !dirNext && k === 0;
        if (goingBack) {
          gsap.timeline()
            .to(nt, { x: -90, y: -20, rotation: -9, opacity: 0, duration: 0.55, ease: 'power3.in' })
            .set(nt, { ...p, opacity: 0 })
            .to(nt, { opacity: p.opacity, duration: 0.6, ease: 'power2.out' });
          gsap.set(nt, { zIndex: p.zIndex, delay: 0.55 });
        } else if (comingFront) {
          gsap.fromTo(nt, { x: -90, y: -20, rotation: -9, opacity: 0, zIndex: 60 }, { ...p, duration: 0.9, ease: 'expo.out' });
        } else {
          gsap.to(nt, { ...p, duration: 0.9, ease: 'expo.out', overwrite: 'auto' });
        }
      });
      notes.forEach((nt, idx) => { nt.dataset.k = String((idx - i + n) % n); });
      if (cur) cur.textContent = String(i + 1);
    };
    const gsap_set = (el, p) => {
      if (canGSAP) gsap.set(el, p);
      else el.style.transform = `translate(${p.x}px,${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`;
      if (!canGSAP) { el.style.opacity = p.opacity; el.style.zIndex = p.zIndex; }
    };
    const go = (d) => {
      if (busy) return;
      busy = true; i = (i + d + n) % n; render(true, d > 0);
      setTimeout(() => { busy = false; }, 600);
      restart();
    };
    const restart = () => {
      clearInterval(timer);
      if (!paused && !hover) timer = setInterval(() => { if (!doc.hidden) go(1); }, 7500);
    };

    btnPrev.addEventListener('click', () => go(-1));
    btnNext.addEventListener('click', () => go(1));
    const syncPause = () => {
      btnPause.setAttribute('aria-pressed', String(paused));
      btnPause.firstElementChild.textContent = paused ? 'Lecture' : 'Pause';
    };
    btnPause.addEventListener('click', () => { paused = !paused; syncPause(); restart(); });
    stack.addEventListener('mouseenter', () => { hover = true; clearInterval(timer); });
    stack.addEventListener('mouseleave', () => { hover = false; restart(); });
    stack.addEventListener('focusin', () => { hover = true; clearInterval(timer); });
    stack.addEventListener('focusout', () => { hover = false; restart(); });
    stack.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); });

    let sx = null;
    stack.addEventListener('pointerdown', (e) => { sx = e.clientX; });
    stack.addEventListener('pointerup', (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    });
    stack.addEventListener('pointercancel', () => { sx = null; });

    measure(); render(false, true); rendered = true; syncPause(); restart();
    window.addEventListener('resize', measure);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(measure);
    window.addEventListener('load', measure);
  }

  /* Cercle manuscrit autour du jour courant */
  function placeCircle() {
    const svg = $('.hours__circle');
    const row = $('.hours tr.is-today');
    const info = $('.find__info');
    if (!svg || !row || !info) return null;
    const ir = info.getBoundingClientRect(), rr = row.getBoundingClientRect();
    const tw = $('.hours').getBoundingClientRect().width;
    svg.style.left = '-22px';
    svg.style.width = `${tw + 56}px`;
    svg.style.top = `${rr.top - ir.top - 9}px`;
    svg.style.height = `${rr.height + 18}px`;
    const p = $('path', svg); p.setAttribute('pathLength', '1');
    p.style.strokeDasharray = '1'; p.style.strokeDashoffset = canGSAP && !reduce ? '1' : '0';
    svg.style.opacity = '1';
    return p;
  }

  /* ------------------------------------------------------------------
     Mouvement
     ------------------------------------------------------------------ */
  function waitImage(img) {
    return new Promise((res) => {
      if (!img || (img.complete && img.naturalWidth)) return res();
      img.addEventListener('load', res, { once: true });
      img.addEventListener('error', res, { once: true });
    });
  }

  function prepHero() {
    const words = splitWords($('[data-hero-title]'));
    gsap.set(words, { yPercent: 118 });
    gsap.set('[data-hero-fade]', { y: 30, opacity: 0 });
    gsap.set('.hero .arch', { yPercent: 14, opacity: 0 });
    gsap.set('.hero .arch>img', { scale: 1.5 });
    gsap.set('.petal', { opacity: 0, scale: 0.3 });
    gsap.set('.hero__scroll', { opacity: 0 });
    gsap.set('.nav', { yPercent: -100 });
    gsap.set('.fl-p', { strokeDasharray: 700, strokeDashoffset: 700 });
    gsap.set('.fl-v path, .fl-s', { opacity: 0 });
    return words;
  }
  function introHero() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('[data-hero-title] .wi', { yPercent: 0, duration: 1.7, stagger: 0.09 }, 0)
      .to('[data-hero-fade]', { y: 0, opacity: 1, duration: 1.3, stagger: 0.12 }, 0.55)
      .to('.hero .arch', { yPercent: 0, opacity: 1, duration: 1.8, stagger: 0.16 }, 0.2)
      .to('.hero .arch>img', { scale: 1.14, duration: 2.4, stagger: 0.16 }, 0.2)
      .to('.fl-p', { strokeDashoffset: 0, duration: 3.2, stagger: 0.22, ease: 'power2.inOut' }, 0.1)
      .to('.fl-v path, .fl-s', { opacity: 0.7, duration: 1.6, stagger: 0.03, ease: 'power2.out' }, 1.6)
      .to('.petal', { opacity: 0.9, scale: 1, duration: 1.2, stagger: 0.15 }, 1.2)
      .to('.hero__scroll', { opacity: 1, duration: 1 }, 1.6)
      .to('.nav', { yPercent: 0, duration: 1.2 }, 0.7);
    return tl;
  }

  function runCover() {
    return new Promise((resolve) => {
      const cover = $('#cover');
      if (!cover) { root.classList.remove('is-loading'); return resolve(); }
      const book = $('.cover__book', cover), shade = $('.cover__shade', cover);
      const bar = $('.cover__bar i', cover), mark = $('.cover__mark', cover), sub = $('.cover__sub', cover);
      const chars = splitChars($('[data-cover-name]', cover));
      const ready = Promise.all([
        doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve(),
        waitImage($('.hero .arch--a img'))
      ]);
      let introDone = false;
      const minTime = new Promise((r) => {
        gsap.timeline({ onComplete: r })
          .from(mark, { scale: 0.55, rotation: -50, opacity: 0, duration: 1.4, ease: 'expo.out' }, 0)
          .from(chars, { yPercent: 115, duration: 1.2, stagger: 0.055, ease: 'expo.out' }, 0.15)
          .from(sub, { opacity: 0, y: 14, duration: 1, ease: 'expo.out' }, 0.55)
          .to(bar, { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, 0.15);
      });
      Promise.all([ready, minTime]).then(() => {
        const open = gsap.timeline({
          onComplete: () => { cover.remove(); root.classList.remove('is-loading'); }
        });
        open.to([mark, sub, bar.parentElement], { opacity: 0, duration: 0.35, ease: 'power2.in' }, 0)
          .to(chars, { yPercent: -115, duration: 0.5, stagger: 0.02, ease: 'power3.in' }, 0)
          .to(book, { rotationY: -106, duration: 1.7, ease: 'expo.inOut' }, 0.25)
          .to(shade, { opacity: 0.6, duration: 1.7, ease: 'power2.in' }, 0.25)
          .add(() => { if (!introDone) { introDone = true; resolve(); } }, 0.85);
      });
    });
  }

  function initMotion() {
    gsap.registerPlugin(ScrollTrigger);
    const ST = ScrollTrigger;

    /* Défilement doux */
    if (!reduce && window.Lenis) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      lenis.on('scroll', ST.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }

    /* Ancres */
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = $(id);
        if (!target) return;
        e.preventDefault();
        const to = id === '#accueil' ? 0 : target;
        if (lenis) lenis.scrollTo(to, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
        else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
        history.replaceState(null, '', id);
      });
    });

    /* Découpes de texte */
    const headings = $$('[data-split="words"]');
    headings.forEach((h) => splitWords(h));
    const chars = {
      phone: splitChars($('.book__digits')),
      foot: splitChars($('.foot__word [data-chars]'))
    };

    $$('.arch, .shot--4, .shot--5').forEach(addOutline);

    const heroWords = prepHero();

    /* — Préchargeur, puis intro du hero — */
    runCover().then(() => {
      introHero();
      if (lenis) lenis.start();
      ST.refresh();
    });

    const mm = gsap.matchMedia();

    /* ====== Éléments communs ====== */
    /* Titres : mots qui montent derrière un masque */
    headings.forEach((h) => {
      gsap.from($$('.wi', h), {
        yPercent: 118, duration: 1.4, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: h, start: 'top 88%', once: true }
      });
    });
    const fadeUp = (sel, delay = 0) => $$(sel).forEach((el) => gsap.from(el, {
      y: 34, opacity: 0, duration: 1.3, delay, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    }));
    fadeUp('.rail__intro > p, .rail__intro > .hand');
    fadeUp('.gallery__head p');
    fadeUp('.reviews__copy > p, .reviews__ctrl, .reviews__copy .link');
    fadeUp('.faq__head .hand');
    fadeUp('.find__addr, .find__note, .find__links');
    fadeUp('.book__note');

    /* Parallax du hero (plusieurs plans) */
    if (!reduce) {
      $$('.hero [data-speed]').forEach((el) => {
        gsap.to(el, {
          yPercent: parseFloat(el.dataset.speed) * 100, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
        });
      });
      gsap.to('.hero__flower', { rotation: 70, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero__inner', { y: -70, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero .arch--a>img', { scale: 1.24, duration: 14, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 3 });
      $$('.petal').forEach((p, k) => gsap.to(p, { yPercent: k % 2 ? -160 : 160, rotation: k % 2 ? -40 : 50, duration: 4.5 + k, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
    }

    /* Parallaxe à la souris (hero) */
    if (!reduce && finePointer.matches) {
      const hero = $('.hero');
      const layers = $$('.hero [data-depth], .hero .petal').map((el) => ({
        qx: gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3.out' }),
        qy: gsap.quickTo(el, 'y', { duration: 1.1, ease: 'power3.out' }),
        d: parseFloat(el.dataset.depth || 2.4)
      }));
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width - 0.5, my = (e.clientY - r.top) / r.height - 0.5;
        layers.forEach((l) => { l.qx(-mx * l.d * 30); l.qy(-my * l.d * 22); });
      });
    }

    /* Marquee : vitesse et sens liés au défilement */
    (function marquee() {
      const track = $('[data-marquee]');
      if (!track || reduce) return;
      const group = track.firstElementChild;
      for (let k = 0; k < 2; k++) { const c = group.cloneNode(true); track.appendChild(c); }
      let W = group.getBoundingClientRect().width, x = 0, dir = 1, dirT = 1, vel = 0;
      ST.addEventListener('refreshInit', () => { W = group.getBoundingClientRect().width; });
      ST.create({ start: 0, end: 'max', onUpdate: (self) => { vel = self.getVelocity(); if (vel > 40) dirT = 1; else if (vel < -40) dirT = -1; } });
      gsap.ticker.add((time, dt) => {
        const s = dt / 1000;
        dir += (dirT - dir) * Math.min(1, s * 5);
        vel *= 0.94;
        x -= dir * (70 + Math.min(Math.abs(vel), 2600) * 0.22) * s;
        if (x <= -W) x += W; if (x >= 0) x -= W;
        track.style.transform = `translate3d(${x}px,0,0)`;
      });
    })();

    /* ====== 3. Savoir-faire : pinné sur grand écran ====== */
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const pin = $('[data-story]');
      const frames = $$('.frame', pin), steps = $$('.step', pin);
      gsap.set(frames.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(frames, { scale: 1.12 });
      gsap.set(steps.slice(1), { autoAlpha: 0, y: 60 });
      const D = 1.6; /* durée d’une étape : ~1,1 de lecture + ~0,5 de transition */
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: pin, start: 'top top', end: '+=430%', scrub: 0.7, pin: true, anticipatePin: 1 }
      });
      tl.to(frames[0], { scale: 1.02, duration: 1.1 }, 0);
      steps.forEach((s, i) => {
        if (!i) return;
        const t = i * D - 0.5;
        tl.to(steps[i - 1], { autoAlpha: 0, y: -50, duration: 0.2, ease: 'power2.in' }, t)
          .to(frames[i], { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.4, ease: 'power2.inOut' }, t + 0.05)
          .fromTo(frames[i], { scale: 1.3 }, { scale: 1.02, duration: 0.9, ease: 'power1.out' }, t + 0.05)
          .to(steps[i], { autoAlpha: 1, y: 0, duration: 0.22, ease: 'power2.out' }, t + 0.28);
      });
      tl.to({}, { duration: 0.9 }, '>');
      tl.to('.story__rail i', { scaleY: 1, duration: tl.duration(), ease: 'none' }, 0);
    });

    /* Version empilée : mobile ou mouvement réduit */
    mm.add('(max-width: 899px), (prefers-reduced-motion: reduce)', () => {
      const sec = $('.story');
      const frames = $$('.frame', sec), steps = $$('.step', sec);
      sec.classList.add('is-stacked');
      const clones = steps.map((s, i) => {
        const fig = doc.createElement('figure');
        fig.className = 'step__img arch';
        const img = frames[i].cloneNode();
        img.removeAttribute('class'); img.removeAttribute('loading');
        fig.appendChild(img); s.prepend(fig); addOutline(fig);
        return fig;
      });
      if (!reduceMQ.matches) {
        steps.forEach((s) => gsap.from(s, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 85%', once: true } }));
      }
      return () => { clones.forEach((c) => c.remove()); sec.classList.remove('is-stacked'); };
    });

    /* ====== 4. Prestations : défilement horizontal ====== */
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const rail = $('[data-rail]'), track = $('.rail__track');
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const tween = gsap.to(track, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: rail, pin: true, start: 'top top', end: () => `+=${dist()}`, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 }
      });
      $$('.card', track).forEach((card, k) => {
        const img = $('.card__media > img', card);
        if (img) gsap.fromTo(img, { xPercent: -7 }, { xPercent: 7, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
        gsap.from(card, { yPercent: 8, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 96%', once: true } });
      });
    });

    /* ====== 5. Semaine : barres + compteurs ====== */
    (function week() {
      const chart = $('[data-chart]');
      if (!chart) return;
      gsap.set('.bar', { scaleY: 0 });
      gsap.set('.chart__ticks span', { scaleX: 0, transformOrigin: '0 50%' });
      gsap.set('.day__n, .day__h', { opacity: 0, y: 14 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: chart, start: 'top 72%', once: true } });
      tl.to('.chart__ticks span', { scaleX: 1, duration: 1.4, stagger: 0.08, ease: 'expo.out' }, 0)
        .to('.bar', { scaleY: 1, duration: 1.7, stagger: 0.11, ease: 'expo.out' }, 0.2)
        .to('.day__n, .day__h', { opacity: 1, y: 0, duration: 1, stagger: 0.04, ease: 'expo.out' }, 0.5);
      $$('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count); const o = { v: 0 };
        el.textContent = '0';
        ST.create({
          trigger: el, start: 'top 86%', once: true,
          onEnter: () => gsap.to(o, { v: target, duration: 2.4, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v); } })
        });
      });
    })();

    /* ====== 6. Galerie : masques différents par photo ====== */
    $$('.shot').forEach((shot) => {
      const type = shot.dataset.reveal, img = $('img', shot);
      const st = { trigger: shot, start: 'top 88%', once: true };
      const clear = () => gsap.set(shot, { clearProps: 'clipPath' });
      if (type === 'circle') gsap.fromTo(shot, { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(78% at 50% 50%)', duration: 1.9, ease: 'expo.out', scrollTrigger: st, onComplete: clear });
      else if (type === 'curtain') gsap.fromTo(shot, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: st, onComplete: clear });
      else if (type === 'diagonal') gsap.fromTo(shot, { clipPath: 'polygon(0 0,0 0,0 0,0 0)' }, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)', duration: 1.8, ease: 'expo.inOut', scrollTrigger: st, onComplete: clear });
      else if (type === 'almond') {
        gsap.from(shot, { opacity: 0, duration: 0.6, scrollTrigger: st });
        gsap.fromTo(img, { yPercent: 60, scale: 1.5 }, { yPercent: 0, scale: 1.1, duration: 1.9, ease: 'expo.out', scrollTrigger: st });
      }
      if (!reduce && type !== 'almond' && img) {
        gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: shot, start: 'top bottom', end: 'bottom top', scrub: true } });
      }
      if (!reduce && shot.dataset.speed) {
        const sp = parseFloat(shot.dataset.speed) * 520;
        gsap.fromTo(shot, { y: -sp }, { y: sp, ease: 'none', scrollTrigger: { trigger: shot, start: 'top bottom', end: 'bottom top', scrub: true } });
      }
    });
    if (!reduce) {
      gsap.to('.shot--3 img', { scale: 1.2, duration: 16, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.shot--1 img', { scale: 1.16, duration: 18, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    }
    gsap.from('.gallery__more', { y: 30, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.gallery__more', start: 'top 94%', once: true } });

    /* ====== 8. Questions ====== */
    gsap.from('.qa', { y: 44, opacity: 0, duration: 1.2, stagger: 0.09, ease: 'expo.out', scrollTrigger: { trigger: '.faq__list', start: 'top 82%', once: true } });
    gsap.from('.faq__list', { clipPath: 'inset(0 0 0 100%)', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.faq__list', start: 'top 85%', once: true }, onComplete: () => gsap.set('.faq__list', { clearProps: 'clipPath' }) });

    /* ====== 9. Rendez-vous ====== */
    gsap.from(chars.phone, { yPercent: 118, duration: 1.5, stagger: 0.06, ease: 'expo.out', scrollTrigger: { trigger: '.book__phone', start: 'top 88%', once: true } });
    gsap.from('.book__cta .btn', { y: 40, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.book__cta', start: 'top 94%', once: true } });
    if (!reduce) gsap.to('.book__flower', { rotation: 120, ease: 'none', scrollTrigger: { trigger: '.book', start: 'top bottom', end: 'bottom top', scrub: true } });

    /* ====== 10. Nous trouver ====== */
    gsap.from('.hours tr', { x: -40, opacity: 0, duration: 1.1, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: '.hours', start: 'top 85%', once: true } });
    const circle = placeCircle();
    if (circle) {
      gsap.to(circle, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', scrollTrigger: { trigger: '.hours', start: 'top 70%', once: true }, delay: 0.9 });
      ST.addEventListener('refresh', placeCircle);
    }
    gsap.from('.find__map', { yPercent: 10, opacity: 0, duration: 1.7, ease: 'expo.out', scrollTrigger: { trigger: '.find__map', start: 'top 90%', once: true } });
    gsap.from('.find__map iframe', { scale: 1.25, duration: 2.2, ease: 'expo.out', scrollTrigger: { trigger: '.find__map', start: 'top 90%', once: true } });
    addOutline($('.find__map'));

    /* ====== 11. Pied de page ====== */
    gsap.from(chars.foot, { yPercent: 112, duration: 1.6, stagger: 0.05, ease: 'expo.out', scrollTrigger: { trigger: '.foot__word', start: 'top 94%', once: true } });
    gsap.from('.foot__mark', { rotation: -140, scale: 0.3, opacity: 0, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: '.foot__word', start: 'top 94%', once: true } });
    if (!reduce) gsap.to('.foot__mark', { rotation: 360, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });

    /* ====== Boutons magnétiques ====== */
    if (!reduce && finePointer.matches) {
      $$('.magnetic').forEach((el) => {
        const qx = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3.out' });
        const qy = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3.out' });
        const inner = $$(':scope > span, :scope > .ico', el);
        const iq = inner.map((n) => [gsap.quickTo(n, 'x', { duration: 0.8, ease: 'power3.out' }), gsap.quickTo(n, 'y', { duration: 0.8, ease: 'power3.out' })]);
        const big = el.classList.contains('book__phone') ? 0.1 : 0.22;
        const cl = (v) => Math.max(-16, Math.min(16, v));
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
          qx(cl(dx * big)); qy(cl(dy * big));
          iq.forEach(([ix, iy]) => { ix(dx * 0.12); iy(dy * 0.18); });
        });
        el.addEventListener('pointerleave', () => { qx(0); qy(0); iq.forEach(([ix, iy]) => { ix(0); iy(0); }); });
      });
    }

    /* ====== Inclinaison 3D + reflet ====== */
    if (!reduce && finePointer.matches) {
      $$('.tilt').forEach((el) => {
        const glare = $('.glare', el);
        const strength = el.classList.contains('shot') ? 7 : 9;
        gsap.set(el, { transformPerspective: 1000 });
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          gsap.to(el, { rotationY: (px - 0.5) * strength * 2, rotationX: -(py - 0.5) * strength * 2, duration: 0.7, ease: 'power3.out', overwrite: 'auto' });
          el.classList.add('is-tilting');
          if (glare) { glare.style.setProperty('--gx', `${px * 100}%`); glare.style.setProperty('--gy', `${py * 100}%`); }
        });
        el.addEventListener('pointerleave', () => {
          gsap.to(el, { rotationX: 0, rotationY: 0, duration: 1.1, ease: 'expo.out', overwrite: 'auto' });
          el.classList.remove('is-tilting');
        });
      });
    }

    window.addEventListener('load', () => ST.refresh());
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(() => ST.refresh());
  }

  /* Secours : si le mouvement échoue, tout reste visible */
  function rescue(err) {
    if (window.console) console.warn('Animations désactivées :', err);
    try {
      if (window.ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill(true));
      if (window.gsap) {
        gsap.globalTimeline.clear();
        gsap.set('[data-hero-title] .wi, .w .wi, .ch, [data-hero-fade], .hero .arch, .hero .arch>img, .petal, .hero__scroll, .nav, .bar, .chart__ticks span, .day__n, .day__h, .qa, .shot, .shot img, .card, .hours tr, .find__map, .find__map iframe, .foot__mark, .fl-p, .fl-v path, .fl-s', { clearProps: 'all' });
      }
    } catch (e) { /* rien */ }
    const c = $('#cover'); if (c) c.remove();
    root.classList.remove('is-loading');
    if (lenis) { lenis.destroy(); lenis = null; }
  }

  /* ------------------------------------------------------------------
     Démarrage
     ------------------------------------------------------------------ */
  function boot() {
    initStatus();
    initNav();
    initMenu();
    initFaq();
    initLightbox();
    $$('.arch, .shot--4, .shot--5').forEach(addOutline);

    if (canGSAP && !reduce) {
      try {
        initMotion();
        initReviews();
      } catch (err) {
        rescue(err);
        initReviews();
      }
    } else {
      const c = $('#cover'); if (c) c.remove();
      root.classList.remove('is-loading');
      if (canGSAP) {
        try { gsap.registerPlugin(ScrollTrigger); } catch (e) { /* ok */ }
      }
      // Sans mouvement : disposition empilée du savoir-faire
      const sec = $('.story');
      if (sec) {
        sec.classList.add('is-stacked');
        const frames = $$('.frame', sec);
        $$('.step', sec).forEach((s, i) => {
          const fig = doc.createElement('figure'); fig.className = 'step__img arch';
          const img = frames[i].cloneNode(); img.removeAttribute('class'); img.removeAttribute('loading');
          fig.appendChild(img); s.prepend(fig); addOutline(fig);
        });
      }
      placeCircle();
      window.addEventListener('resize', placeCircle);
      initReviews();
      const phone = $('.book__digits'); if (phone) phone.setAttribute('aria-hidden', 'true');
    }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
