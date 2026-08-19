/* ══════════════════════════════════════════════════════════
   animations.js — الجسيمات · الكشف · المؤشر · المغناطيس
══════════════════════════════════════════════════════════ */
'use strict';

window.REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.FINE_POINTER  = window.matchMedia('(pointer: fine)').matches;

/* ───────── بديل أنيق للصور المفقودة (قبل استبدالها بصوركم) ───────── */
window.__hbFallback = function (img) {
  if (!img || img.dataset.fb === '1') return;
  img.dataset.fb = '1';
  const name = String(img.getAttribute('src') || 'photo.jpg').split('/').pop().replace(/[<>&"']/g, '');
  const svg =
`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1125" viewBox="0 0 900 1125">
  <rect width="900" height="1125" fill="#151009"/>
  <rect x="26" y="26" width="848" height="1073" fill="none" stroke="#c8a15e" stroke-opacity=".38"/>
  <rect x="40" y="40" width="820" height="1045" fill="none" stroke="#c8a15e" stroke-opacity=".13"/>
  <path d="M450 452 l16 26 -16 26 -16 -26 z" fill="#c8a15e" opacity=".85"/>
  <text x="450" y="596" text-anchor="middle" font-size="46" fill="#e8dcc2" font-family="Amiri, serif">ضع صورتك هنا</text>
  <text x="450" y="652" text-anchor="middle" font-size="24" fill="#8d7c58" font-family="monospace">${name}</text>
</svg>`;
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

/* ═════════════════════ FX — وحدة المؤثرات ═════════════════════ */
const FX = (() => {

  /* ───────── نظام الجسيمات: غبار ضوء + نجوم + قلب نادر ───────── */
  let canvas, ctx, W, H, DPR, parts = [], mood = 'dust', t = 0, heartTimer = 0, running = false;

  const MOODS = {
    dust:   { density: 1 / 24000, speed: .55, alpha: .34, heartEvery: 14 },
    stars:  { density: 1 / 15000, speed: .30, alpha: .55, heartEvery: 22 },
    finale: { density: 1 / 18000, speed: .45, alpha: .45, heartEvery: 4.5 }
  };

  function targetCount() {
    return Math.min(85, Math.max(18, Math.round(W * H * MOODS[mood].density)));
  }

  function spawn(anywhere) {
    return {
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : H + 12,
      r: .6 + Math.random() * 1.9,
      sp: (.14 + Math.random() * .5) * MOODS[mood].speed,
      sway: .25 + Math.random() * .65,
      ph: Math.random() * 6.283,
      a: (.12 + Math.random() * .5) * MOODS[mood].alpha,
      heart: false
    };
  }

  function spawnHeart() {
    parts.push({
      x: W * (.2 + Math.random() * .6), y: H + 16,
      r: 2.6 + Math.random() * 2, sp: .34, sway: .4,
      ph: Math.random() * 6.283, a: .5, heart: true
    });
  }

  function drawHeart(p, alpha) {
    ctx.save();
    ctx.translate(p.x, p.y); ctx.scale(p.r / 4, p.r / 4);
    ctx.beginPath();
    ctx.moveTo(0, -2);
    ctx.bezierCurveTo(-3, -7, -10, -3, -10, 2);
    ctx.bezierCurveTo(-10, 7, -4, 9, 0, 13);
    ctx.bezierCurveTo(4, 9, 10, 7, 10, 2);
    ctx.bezierCurveTo(10, -3, 3, -7, 0, -2);
    ctx.fillStyle = 'rgba(196,110,110,' + alpha + ')';
    ctx.fill();
    ctx.restore();
  }

  let last = 0;
  function loop(ts) {
    if (!running) return;
    requestAnimationFrame(loop);
    const dt = Math.min(40, ts - last || 16); last = ts;
    t += dt / 1000;
    ctx.clearRect(0, 0, W, H);

    const need = targetCount();
    while (parts.filter(p => !p.heart).length < need) parts.push(spawn(true));

    heartTimer += dt / 1000;
    if (heartTimer > MOODS[mood].heartEvery && !REDUCED_MOTION) { heartTimer = 0; spawnHeart(); }

    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.y -= p.sp * dt * .06;
      p.x += Math.sin(t * .6 + p.ph) * p.sway * dt * .02;
      const tw = .6 + .4 * Math.sin(t * 1.4 + p.ph);
      const alpha = p.a * tw;
      if (p.y < -20 || alpha <= .004) {
        if (p.heart) { parts.splice(i, 1); continue; }
        Object.assign(p, spawn(false));
      }
      if (p.heart) drawHeart(p, alpha * .8);
      else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = 'rgba(226,192,136,' + alpha + ')';
        ctx.fill();
      }
    }
  }

  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function initParticles(el) {
    if (REDUCED_MOTION || !el) return;
    canvas = el; ctx = canvas.getContext('2d');
    resize(); window.addEventListener('resize', resize);
    running = true; requestAnimationFrame(loop);
    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running) { last = 0; requestAnimationFrame(loop); }
    });
  }

  function setMood(m) { if (MOODS[m]) { mood = m; heartTimer = MOODS[m].heartEvery - 2; } }

  /* ───────── نظام الكشف عند الظهور ───────── */
  function initReveals() {
    const items = document.querySelectorAll('[data-reveal]');
    if (REDUCED_MOTION) { items.forEach(el => el.classList.add('in')); return; }

    // تأخير تلقائي متدرّج داخل كل مشهد
    document.querySelectorAll('.scene').forEach(scene => {
      scene.querySelectorAll('[data-reveal]').forEach((el, i) => {
        if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', Math.min(i * 110, 660) + 'ms');
      });
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .16, rootMargin: '0px 0px -5% 0px' });
    items.forEach(el => io.observe(el));
  }

  /* ───────── توهج يتبع المؤشر (سطح المكتب فقط) ───────── */
  function initCursor() {
    if (!FINE_POINTER || REDUCED_MOTION) return;
    const dot = document.getElementById('cursorDot');
    const glow = document.getElementById('cursorGlow');
    if (!dot || !glow) return;
    let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      document.body.classList.add('cursor-on');
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
    }, { passive: true });

    document.addEventListener('mouseover', e => {
      document.body.classList.toggle('cursor-big', !!e.target.closest('button, a, .mem-card, .envelope'));
    });

    (function track() {
      gx += (mx - gx) * .09; gy += (my - gy) * .09;
      glow.style.transform = 'translate(' + gx + 'px,' + gy + 'px)';
      requestAnimationFrame(track);
    })();
  }

  /* ───────── أزرار مغناطيسية ───────── */
  function initMagnetic() {
    if (!FINE_POINTER || REDUCED_MOTION) return;
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = 'translate(' + x * 14 + 'px,' + y * 10 + 'px)';
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  return { initParticles, setMood, initReveals, initCursor, initMagnetic };
})();