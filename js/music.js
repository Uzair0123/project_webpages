/* ══════════════════════════════════════════════════════════
   music.js — موسيقى الحكاية (تبدأ بعد ضغطة "ابدأ" فقط)
══════════════════════════════════════════════════════════ */
'use strict';

const Music = (() => {
  let audio = null;
  let playing = false;
  let unavailable = false;
  let rampRaf = null;

  const btn = () => document.getElementById('musicBtn');

  function markUnavailable() {
    unavailable = true;
    playing = false;
    document.body.classList.add('no-music');   // يُخفى الزر بهدوء دون أي خطأ ظاهر
    document.body.classList.remove('music-on');
  }

  function init(src) {
    audio = new Audio();
    audio.src = src;
    audio.loop = true;
    audio.preload = 'auto';
    audio.addEventListener('error', markUnavailable);
    audio.addEventListener('play',  sync);
    audio.addEventListener('pause', sync);
    const b = btn();
    if (b) b.addEventListener('click', toggle);
  }

  /* تُستدعى داخل إيماءة المستخدم (زر ابدأ) — آمن مع سياسات المتصفح */
  function start() {
    if (!audio || unavailable) return;
    audio.volume = 0;
    const p = audio.play();
    if (p) p.then(fadeIn).catch(markUnavailable);
    playing = true;
  }

  function fadeIn() {
    cancelAnimationFrame(rampRaf);
    const t0 = performance.now(), target = .85;
    (function step(now) {
      const k = Math.min(1, (now - t0) / 2200);
      if (audio) audio.volume = target * k * k;
      if (k < 1 && playing) rampRaf = requestAnimationFrame(step);
    })(t0);
  }

  function toggle() {
    if (!audio || unavailable) return;
    if (audio.paused) {
      audio.play().catch(markUnavailable);
      playing = true;
      if (audio.volume < .1) fadeIn();
    } else {
      audio.pause();
      playing = false;
    }
    sync();
  }

  function sync() {
    const on = !!(audio && !audio.paused && playing);
    document.body.classList.toggle('music-on', on);
    const b = btn();
    if (b) b.setAttribute('aria-pressed', String(on));
  }

  return { init, start, toggle };
})();