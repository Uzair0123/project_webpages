/* ══════════════════════════════════════════════════════════
   gallery.js — ذكرياتنا: بطاقات عائمة + عارض كامل
══════════════════════════════════════════════════════════ */
'use strict';

const Gallery = (() => {
  let items = [];
  let current = 0;
  let openFlag = false;
  let lastFocus = null;

  /* مواضع البطاقات المشتتة على سطح المكتب (x, y, دوران, عمق, عرض) */
  const POS = [
    { x:  4, y:  6, r: -5,   d: .5,  w: 21, z: 1 },
    { x: 27, y: 38, r:  2.5, d: .8,  w: 24, z: 2 },
    { x: 48, y:  2, r:  5,   d: .6,  w: 22, z: 1 },
    { x: 72, y: 30, r: -3,   d: .9,  w: 23, z: 2 },
    { x: 50, y: 44, r: -1.5, d: 1.1, w: 26, z: 3 }   /* الذكرى الأقرب */
  ];

  const AR = '٠١٢٣٤٥٦٧٨٩';
  const toAr = n => String(n).replace(/\d/g, d => AR[d]);

  /* ───────── بناء البطاقات ───────── */
  function build(captions, photos) {
    const stage = document.getElementById('memStage');
    if (!stage) return;
    items = photos.map((src, i) => ({ src, cap: captions[i] || '' }));

    items.forEach((it, i) => {
      const p = POS[i] || POS[0];
      const card = document.createElement('figure');
      card.className = 'mem-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', it.cap + ' — عرض بحجم كامل');
      card.style.cssText =
        '--i:' + i + ';--x:' + p.x + '%;--y:' + p.y + '%;--r:' + p.r + 'deg;' +
        '--w:' + p.w + '%;--z:' + p.z + ';--depth:' + p.d;

      const num = document.createElement('span');
      num.className = 'mem-num';
      num.textContent = toAr(String(i + 1).padStart(2, '0'));

      const wrap = document.createElement('div');
      wrap.className = 'mem-img';
      const img = document.createElement('img');
      img.src = it.src;
      img.alt = it.cap;
      img.loading = i > 1 ? 'lazy' : 'eager';
      img.decoding = 'async';
      img.addEventListener('error', () => window.__hbFallback(img));
      wrap.appendChild(img);

      const cap = document.createElement('figcaption');
      cap.className = 'mem-cap serif';
      cap.textContent = it.cap;

      card.append(num, wrap, cap);
      card.addEventListener('animationend', () => card.classList.add('settled'), { once: true });
      card.addEventListener('click', () => open(i));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } });
      stage.appendChild(card);
    });

    initParallax(stage);
  }

  /* ───────── عمق بسيط مع حركة الفأرة ───────── */
  function initParallax(stage) {
    if (!window.FINE_POINTER || window.REDUCED_MOTION) return;
    stage.addEventListener('mousemove', e => {
      const r = stage.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - .5;
      const dy = (e.clientY - r.top) / r.height - .5;
      stage.querySelectorAll('.mem-card.settled').forEach(card => {
        const d = parseFloat(card.style.getPropertyValue('--depth')) || .6;
        card.style.translate = (-dx * d * 22) + 'px ' + (-dy * d * 16) + 'px';
      });
    });
    stage.addEventListener('mouseleave', () => {
      stage.querySelectorAll('.mem-card').forEach(c => { c.style.translate = '0px 0px'; });
    });
  }

  /* ───────── العارض الكامل ───────── */
  const $ = id => document.getElementById(id);

  function render() {
    const it = items[current];
    if (!it) return;
    const img = $('lbImg');
    img.src = it.src;
    img.alt = it.cap;
    img.onerror = () => window.__hbFallback(img);
    $('lbCap').textContent = it.cap;
    $('lbNum').textContent = toAr(current + 1) + ' / ' + toAr(items.length);
  }

  function open(i) {
    current = i;
    lastFocus = document.activeElement;
    render();
    $('lightbox').classList.add('open');
    document.body.classList.add('lb-open');
    openFlag = true;
    $('lbClose').focus();
  }

  function close() {
    $('lightbox').classList.remove('open');
    document.body.classList.remove('lb-open');
    openFlag = false;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function nav(dir) {
    current = (current + dir + items.length) % items.length;
    render();
  }

  function isOpen() { return openFlag; }

  function init(captions, photos) {
    build(captions, photos);

    $('lbClose').addEventListener('click', close);
    $('lbPrev').addEventListener('click', () => nav(-1));
    $('lbNext').addEventListener('click', () => nav(1));
    $('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') close(); });

    document.addEventListener('keydown', e => {
      if (!openFlag) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') nav(1);    /* في RTL: اليسار = التالي */
      if (e.key === 'ArrowRight') nav(-1);
    });

    /* سحب باللمس داخل العارض */
    let sx = null;
    const fig = $('lbFig');
    fig.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    fig.addEventListener('touchend', e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 45) nav(dx < 0 ? 1 : -1);
      sx = null;
    }, { passive: true });
  }

  return { init, isOpen };
})();