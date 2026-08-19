/* ══════════════════════════════════════════════════════════
   main.js — حكايتنا
   ▸ عدّل قسم CONFIG أدناه فقط لتخصيص الحكاية كاملة.
   ▸ الصور: assets/images/photo-1.jpg … photo-5.jpg
   ▸ الأغنية: assets/music/love-song.mp3
══════════════════════════════════════════════════════════ */
'use strict';

/* ╔══════════════════════════════════════════╗
   ║            ⬇  التخصيص من هنا  ⬇           ║
   ╚══════════════════════════════════════════╝ */
const CONFIG = {

  person1: "يوسف",            // الاسم الأول (صاحب الإهداء)
  person2: "ليلى",            // الاسم الثاني (إلى من تُروى الحكاية)

  recipientGender: "f",       // "f" لمخاطبة أنثى (إليكِ) أو "m" لمخاطبة ذكر (إليك)

  firstMeeting: "2023-03-12",           // تاريخ أول لقاء (لحساب عدد الأيام)
  firstMeetingLabel: "١٢ آذار ٢٠٢٣",    // التاريخ كما سيظهر نصًا

  music: "assets/music/love-song.mp3",

  photos: [
    "assets/images/photo-1.jpg",
    "assets/images/photo-2.jpg",
    "assets/images/photo-3.jpg",
    "assets/images/photo-4.jpg",
    "assets/images/photo-5.jpg"
  ],

  openingParagraph: "لم تكن ليان تعلم أن ذلك اليوم العادي سيصبح بداية أجمل حكاية في حياتها... ولم يكن يوسف يعلم أن لقاءً واحدًا سيغيّر معنى الحب بالنسبة له. ومنذ تلك اللحظة، بدأت حكايتهما تتكتب بين ضحكة وذكرى ووعدٍ لا ينتهي.",

  /* الفصل ٠٢ — رحلتنا (أضف image: "assets/images/photo-2.jpg" لأي محطة إن أردت صورة) */
  timeline: [
    { date: "حيث بدأ كل شيء",    title: "أول لقاء",             text: "نظرةٌ عابرة لم تكن لتعني شيئًا... لكنها عنت كل شيء." },
    { date: "بعد اللقاء بقليل",  title: "أول حديث",             text: "تكلّمنا كثيرًا تلك الليلة، وكان الصمت أجمل ما في الكلام." },
    { date: "في لحظةٍ لا تُنسى", title: "أول ضحكة",             text: "ضحكنا حتى نسينا الوقت، ومن يومها صرت أضحك معك بلا سبب." },
    { date: "حين تأكد قلبي",     title: "أول ذكرى لا تُنسى",    text: "في ذلك اليوم فهمتُ معنى أن يكون لشخصٍ واحد كل هذا الأثر." },
    { date: "اليوم",             title: "وما زلنا نكتب",        text: "كل يومٍ نمضيه معًا سطرٌ جديد في أجمل حكاية." }
  ],

  /* الفصل ٠٣ — عناوين الذكريات الخمس (بالترتيب مع الصور) */
  memories: [
    "أول ذكرى",
    "ضحكة لن أنساها",
    "ذلك اليوم...",
    "أجمل لحظاتنا",
    "وأجملها أنك معي"
  ],

  /* الفصل ٠٤ — لماذا أحبك؟ (نسختان حسب جنس المخاطَب) */
  reasons: {
    f: [
      "لأنّ وجودك يجعل الأشياءَ العادية… أجمل.",
      "لأنّ ضحكتك قادرة على إصلاح يومٍ كامل.",
      "لأنّ معك أستطيع أن أكون أنا، بلا أقنعة.",
      "لأنّ قلبي يهدأ كلما كنتِ قريبة.",
      "ولأنّكِ أنتِ."
    ],
    m: [
      "لأنّ وجودك يجعل الأشياءَ العادية… أجمل.",
      "لأنّ ضحكتك قادرة على إصلاح يومٍ كامل.",
      "لأنّ معك أستطيع أن أكون أنا، بلا أقنعة.",
      "لأنّ قلبي يهدأ كلما كنتَ قريبًا.",
      "ولأنّكَ أنتَ."
    ]
  },

  /* الفصل ٠٥ — الرسالة */
  letters: {
    f: {
      opening: "إليكِ...",
      greeting: "إلى التي صارت تفاصيلها جزءًا من يومي،",
      lines: [
        "لا أعرف متى بدأتُ أقيس أيامي بوجودك،",
        "ولا كيف أصبح صوتك أول ما أبحث عنه في كل صباح.",
        "",
        "أعرف فقط أنّ العالم بجانبك أبسط، وأجمل، وأدفأ،",
        "وأنّ دخولك إلى حياتي كان أجمل ما حدث لي.",
        "",
        "أحبّك اليوم،",
        "وسأحبّك في كل يومٍ يأتي بعده."
      ]
    },
    m: {
      opening: "إليكَ...",
      greeting: "إلى الذي صار وجوده أمانَ أيامي،",
      lines: [
        "لا أعرف متى بدأتُ أقيس أيامي بوجودك،",
        "ولا كيف أصبح صوتك أول ما أبحث عنه في كل صباح.",
        "",
        "أعرف فقط أنّ العالم بصحبتك أبسط، وأجمل، وأدفأ،",
        "وأنّ دخولك إلى حياتي كان أجمل ما حدث لي.",
        "",
        "أحبّك اليوم،",
        "وسأحبّك في كل يومٍ يأتي بعده."
      ]
    }
  },

  /* الفصل ٠٦ — أمنيات الآتي */
  wishes: ["أحلامنا", "بيتنا", "رحلاتنا", "ضحكاتنا", "كل الأيام التي سنعيشها معًا"],

  /* الفصل ٠٧ — السرّ الأخير */
  secret: {
    lines: [
      "لو كان بإمكاني أن أختار شخصًا واحدًا",
      "أعيش معه ما تبقّى من عمري...",
      "فسأختارك أنت."
    ],
    punch: ["كل مرة.", "وفي كل حياة."]
  }
};
/* ╔══════════════════════════════════════════╗
   ║            ⬆  نهاية التخصيص  ⬆            ║
   ╚══════════════════════════════════════════╝ */

/* ───────── أدوات عامة ───────── */
const $  = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const AR = '٠١٢٣٤٥٦٧٨٩';
const toAr = n => String(n).replace(/\d/g, d => AR[d]);
const wait = ms => new Promise(r => setTimeout(r, ms));
const REDUCED = window.REDUCED_MOTION;
const G = CONFIG.recipientGender === 'm' ? 'm' : 'f';

const CHAPTERS = ['الافتتاح','البداية','رحلتنا','ذكرياتنا','لماذا أحبّك؟','الرسالة','الآتي','السرّ الأخير','الختام'];
const HEART_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C6 15.6 2 12 2 7.6A4.6 4.6 0 0 1 12 5a4.6 4.6 0 0 1 10 2.6C22 12 18 15.6 12 21z"/></svg>';

function daysSince(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return null;
  return Math.max(0, Math.floor((Date.now() - d.getTime()) / 864e5));
}
function arDays(n) {
  if (n === 0) return 'اليوم بالذات';
  if (n === 1) return 'يوم واحد';
  if (n === 2) return 'يومين';
  if (n <= 10) return toAr(n) + ' أيام';
  return toAr(n) + ' يومًا';
}

/* ═══════════════ بناء المحتوى من CONFIG ═══════════════ */
function renderAll() {
  /* الأسماء في كل مكان */
  $$('[data-name1]').forEach(el => el.textContent = CONFIG.person1);
  $$('[data-name2]').forEach(el => el.textContent = CONFIG.person2);

  /* الفصل ٠١ — البداية */
  $('#openingText').textContent = CONFIG.openingParagraph;
  $('#dateChip').textContent = CONFIG.firstMeetingLabel;
  const days = daysSince(CONFIG.firstMeeting);
  $('#daysLine').textContent = days !== null
    ? 'مضت ' + arDays(days) + ' على أول لقاء… وما زلت أختارك كل يوم.'
    : '';
  const beginImg = $('#beginImg');
  beginImg.src = CONFIG.photos[0];
  beginImg.addEventListener('error', () => window.__hbFallback(beginImg));

  /* الفصل ٠٢ — الخط الزمني */
  const list = $('#tlList');
  CONFIG.timeline.forEach((ev, i) => {
    const li = document.createElement('li');
    li.className = 'tl-item';
    li.setAttribute('data-reveal', i % 2 === 0 ? 'start' : 'end');
    let thumb = '';
    if (ev.image) {
      thumb = '<span class="tl-thumb"><img loading="lazy" decoding="async" src="' + ev.image +
              '" alt="" onerror="window.__hbFallback(this)"></span>';
    }
    li.innerHTML =
      '<span class="tl-dot" aria-hidden="true"><i></i></span>' +
      '<article class="tl-card">' +
        '<span class="tl-date">' + ev.date + '</span>' +
        '<h3 class="tl-title serif">' + ev.title + '</h3>' +
        '<p class="tl-text">' + ev.text + '</p>' + thumb +
      '</article>';
    list.appendChild(li);
  });

  /* الفصل ٠٤ — سبب واحد في كل مرة */
  const dots = $('#reasonDots');
  Reasons.list.forEach(() => dots.appendChild(document.createElement('span')));

  /* الفصل ٠٥ — الرسالة */
  const L = CONFIG.letters[G];
  $('#letterOpening').textContent = L.opening;
  const body = $('#letterBody');
  let li = 0;
  [L.greeting, ...L.lines].forEach(line => {
    const w = document.createElement('span');
    if (line === '') { w.className = 'w-line gap'; body.appendChild(w); return; }
    w.className = 'w-line';
    w.setAttribute('data-reveal', '');
    w.style.setProperty('--d', (li++ * 150) + 'ms');
    const inner = document.createElement('span');
    inner.className = 'w-inner';
    inner.textContent = line;
    w.appendChild(inner);
    body.appendChild(w);
  });
  $('#letterSign').textContent = '— ' + CONFIG.person1;
  try {
    $('#letterDate').textContent =
      new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) { /* تجاهل بصمت */ }

  /* الفصل ٠٦ — كوكبة الأمنيات */
  const stage = $('#wishStage');
  const POSW = [[10,24],[30,50],[50,14],[70,48],[88,24]];
  CONFIG.wishes.forEach((w, i) => {
    const el = document.createElement('div');
    el.className = 'wish';
    const p = POSW[i] || POSW[0];
    el.style.cssText = '--wx:' + p[0] + '%;--wy:' + p[1] + '%;--tw:' + (i * .7) + 's';
    el.innerHTML = '<i aria-hidden="true"></i><span>' + w + '</span>';
    stage.appendChild(el);
  });
  $('#wishSvg').innerHTML =
    '<polyline points="' + POSW.map(p => p.join(',')).join(' ') + '"></polyline>';

  /* الفصل ٠٧ — رسالة السر */
  const sec = $('#secretLines');
  CONFIG.secret.lines.forEach(t => {
    const s = document.createElement('p');
    s.className = 's-line'; s.textContent = t; sec.appendChild(s);
  });
  CONFIG.secret.punch.forEach(t => {
    const s = document.createElement('p');
    s.className = 's-line punch'; s.textContent = t; sec.appendChild(s);
  });

  /* الفصل ٠٨ — الختام */
  const finImg = $('#finImg');
  finImg.src = CONFIG.photos[4];
  finImg.addEventListener('error', () => window.__hbFallback(finImg));
  $('#dedication').textContent =
    'صُنعت هذه الحكاية بحبّ — من ' + CONFIG.person1 + ' إلى ' + CONFIG.person2;
}

/* ═══════════════ مشغّل الأسباب (الفصل ٠٤) ═══════════════ */
const Reasons = {
  list: CONFIG.reasons[G],
  i: 0, timer: null, playing: false,

  play() {
    if (this.playing) return;
    this.playing = true;
    if (REDUCED) { this.show(this.list.length - 1, true); return; }
    this.show(this.i);
  },
  show(i, instant) {
    this.i = i;
    const el = $('#reasonLine');
    const dots = $$('#reasonDots span');
    const apply = () => {
      el.textContent = this.list[i];
      el.classList.toggle('final', i === this.list.length - 1);
      el.classList.add('show');
      dots.forEach((d, k) => d.classList.toggle('on', k <= i));
      if (i < this.list.length - 1) {
        this.timer = setTimeout(() => this.show(i + 1), 2800);
      } else { this.playing = false; }
    };
    if (instant) { el.classList.remove('show'); apply(); return; }
    el.classList.remove('show');
    this.timer = setTimeout(apply, 420);
  },
  advance() {
    if (!this.playing) return;
    clearTimeout(this.timer);
    if (this.i < this.list.length - 1) this.show(this.i + 1);
  },
  stop() { clearTimeout(this.timer); this.playing = false; },
  reset() {
    this.stop(); this.i = 0;
    const el = $('#reasonLine');
    el.textContent = ''; el.classList.remove('show', 'final');
    $$('#reasonDots span').forEach(d => d.classList.remove('on'));
  }
};

/* ═══════════════ تدفق السرّ (الفصل ٠٧) ═══════════════ */
const Secret = {
  done: false, timers: [],
  clear() { this.timers.forEach(clearTimeout); this.timers = []; },
  later(fn, ms) { this.timers.push(setTimeout(fn, ms)); },

  reveal() {
    $('#scene-secret').dataset.stage = '2';
  },
  openEnvelope() {
    const env = $('#envelope');
    if (env.classList.contains('open')) return;
    env.classList.add('open');
    this.later(() => {
      $('#scene-secret').dataset.stage = '3';
      const lines = $$('#secretLines .s-line');
      lines.forEach((l, i) => this.later(() => l.classList.add('in'), 500 + i * 1050));
      this.later(() => {
        this.done = true;
        updateChrome();
      }, 500 + lines.length * 1050 + 400);
    }, 1000);
  },
  restore() { /* عند العودة للفصل بعد إنجازه */
    if (!this.done) return;
    $('#scene-secret').dataset.stage = '3';
    $('#envelope').classList.add('open');
    $$('#secretLines .s-line').forEach(l => l.classList.add('in'));
  },
  reset() {
    this.clear(); this.done = false;
    $('#scene-secret').dataset.stage = '1';
    $('#envelope').classList.remove('open');
    $$('#secretLines .s-line').forEach(l => l.classList.remove('in'));
  }
};

/* ═══════════════ مشهد الختام (الفصل ٠٨) ═══════════════ */
const Finale = {
  timers: [],
  clear() { this.timers.forEach(clearTimeout); this.timers = []; },
  later(fn, ms) { this.timers.push(setTimeout(fn, ms)); },

  set(html) {
    const wrap = $('#finLine');
    const old = wrap.firstElementChild;
    if (old) old.classList.add('swap');
    this.later(() => { wrap.innerHTML = html; }, old ? 480 : 0);
  },

  play() {
    this.clear();
    $('#finFade').classList.remove('on');
    $('#finOutro').classList.remove('on');
    $('#finLine').innerHTML = '';

    const names =
      '<div class="fin-names"><span>' + CONFIG.person1 + '</span>' + HEART_SVG +
      '<span>' + CONFIG.person2 + '</span></div>';

    const steps = [
      [0,     '<p class="fin-line">قصتنا...</p>'],
      [2300,  '<p class="fin-line">ما زالت تُكتب.</p>'],
      [4900,  names],
      [7600,  '<p class="fin-line gold">إلى الأبد.</p>'],
      [10000, '<p class="fin-line dim">نهاية؟</p>'],
      [12000, '<p class="fin-line">لا...</p>'],
      [14000, '<p class="fin-line gold">هذه مجرد البداية.</p><span class="fin-heart">' + HEART_SVG + '</span>']
    ];
    steps.forEach(([t, html]) => this.later(() => this.set(html), t));

    if (REDUCED) { $('#finFade').classList.add('on'); $('#finOutro').classList.add('on'); return; }
    this.later(() => $('#finFade').classList.add('on'), 18500);
    this.later(() => $('#finOutro').classList.add('on'), 21500);
  },

  stop() { this.clear(); },
  reset() {
    this.stop();
    $('#finFade').classList.remove('on');
    $('#finOutro').classList.remove('on');
    $('#finLine').innerHTML = '';
  }
};

/* ═══════════════ منصّة الفصول (Deck) ═══════════════ */
const Deck = {
  els: [], cur: -1, busy: false, started: false,

  init() {
    this.els = $$('.scene');
    this.els[0].classList.add('is-active');
    this.cur = 0;
    this.buildRail();
    this.bindInput();
    $('#nextBtn').addEventListener('click', () => this.next());
    $('#wordmark').addEventListener('click', () => this.go(0));
  },

  buildRail() {
    const rail = $('#rail');
    CHAPTERS.forEach((c, i) => {
      const b = document.createElement('button');
      b.className = 'rail-item';
      b.setAttribute('aria-label', 'الفصل ' + toAr(i + 1) + ' — ' + c);
      b.innerHTML = '<span class="rail-num">' + toAr(String(i + 1).padStart(2, '0')) + '</span>' +
                    '<span class="rail-tip">' + c + '</span>';
      b.addEventListener('click', () => this.go(i));
      rail.appendChild(b);
    });
  },

  bindInput() {
    /* عجلة الفأرة — مع احترام التمرير الداخلي للمشاهد الطويلة */
    let lock = false;
    window.addEventListener('wheel', e => {
      if (!this.started || this.busy || lock || Gallery.isOpen()) return;
      const sc = this.els[this.cur] && this.els[this.cur].querySelector('.scene-scroll');
      const dir = e.deltaY > 0 ? 1 : -1;
      if (sc && sc.scrollHeight > sc.clientHeight + 4) {
        const atTop = sc.scrollTop <= 2;
        const atBottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 2;
        if ((dir > 0 && !atBottom) || (dir < 0 && !atTop)) return; // تمرير داخلي
      }
      lock = true; setTimeout(() => lock = false, 1150);
      e.preventDefault();
      dir > 0 ? this.next() : this.prev();
    }, { passive: false });

    /* لوحة المفاتيح */
    document.addEventListener('keydown', e => {
      if (!this.started || Gallery.isOpen()) return;
      if (e.target.closest('button, a, input, textarea')) return;
      const k = e.key;
      if (k === 'ArrowDown' || k === 'PageDown' || k === 'ArrowLeft' || k === ' ') { e.preventDefault(); this.next(); }
      else if (k === 'ArrowUp' || k === 'PageUp' || k === 'ArrowRight') { e.preventDefault(); this.prev(); }
      else if (k === 'Home') this.go(0);
      else if (k === 'End') this.go(this.els.length - 1);
    });
  },

  go(i) {
    if (!this.started && i !== 0) return;
    i = Math.max(0, Math.min(this.els.length - 1, i));
    if (i === this.cur || this.busy) return;
    this.busy = true;

    const dir = i > this.cur ? 1 : -1;
    const from = this.els[this.cur];
    const to = this.els[i];
    const fromId = from.id, toId = to.id;

    Hooks.leave(fromId);
    if (dir < 0) to.classList.add('from-top');
    void to.offsetWidth;                       // إعادة تدفق لبدء الانتقال من الموضع الصحيح
    from.classList.add('is-leaving');
    if (dir < 0) from.classList.add('is-back');
    to.classList.add('is-active');
    this.cur = i;
    updateChrome();
    setTimeout(() => Hooks.enter(toId), 260);

    setTimeout(() => {
      from.classList.remove('is-leaving', 'is-back', 'is-active');
      to.classList.remove('from-top');
      this.busy = false;
    }, 980);
  },

  next() { this.go(this.cur + 1); },
  prev() { this.go(this.cur - 1); }
};

/* خط التوهج في الخط الزمني يتبع التمرير */
function bindTimelineGlow() {
  const sc = $('#journeyScroll');
  const glow = $('#tlGlow');
  if (!sc || !glow) return;
  sc.addEventListener('scroll', () => {
    const max = sc.scrollHeight - sc.clientHeight;
    glow.style.height = (max > 0 ? (sc.scrollTop / max) * 100 : 100) + '%';
  }, { passive: true });
}

/* أجواء الجسيمات لكل فصل */
const MOOD_BY_SCENE = {
  'scene-future': 'stars',
  'scene-finale': 'finale'
};

const Hooks = {
  enter(id) {
    FX.setMood(MOOD_BY_SCENE[id] || 'dust');
    if (id === 'scene-reasons') Reasons.play();
    if (id === 'scene-secret') Secret.restore();
    if (id === 'scene-finale') Finale.play();
    if (id === 'scene-beginning' && !Hooks._hinted) {
      Hooks._hinted = true;
      const h = $('#hint');
      h.textContent = FINE_POINTER
        ? 'مرّر للأسفل، أو استخدم الأسهم، لمتابعة الفصول'
        : 'اضغط الزر أسفل الشاشة لمتابعة الفصول';
      h.classList.add('show');
      setTimeout(() => h.classList.remove('show'), 4500);
    }
  },
  leave(id) {
    if (id === 'scene-reasons') Reasons.stop();
    if (id === 'scene-finale') Finale.stop();
  },
  _hinted: false
};

/* شريط التقدم + سكة الفصول + زر المتابعة */
function updateChrome() {
  const i = Deck.cur;
  $$('.rail-item').forEach((b, k) => b.classList.toggle('active', k === i));
  $('#topProgress').style.transform = 'scaleX(' + (i / (CHAPTERS.length - 1)) + ')';

  const showNext = Deck.started &&
    ((i >= 1 && i <= 6) || (i === 7 && Secret.done));
  const nb = $('#nextBtn');
  nb.classList.toggle('show', showNext);
  if (showNext) $('#nextLabel').textContent = CHAPTERS[i + 1] || '';
}

/* ═══════════════ شاشة التحميل ═══════════════ */
function runLoader() {
  const loader = $('#loader');
  const fill = $('#loadFill');
  const total = CONFIG.photos.length;
  let done = 0, finished = false;
  const t0 = Date.now();

  const finish = () => {
    if (finished) return;
    finished = true;
    const remain = Math.max(0, 700 - (Date.now() - t0));
    setTimeout(() => {
      loader.classList.add('done');
      document.body.classList.add('loaded');
    }, remain);
  };

  const tick = () => {
    done++;
    fill.style.width = Math.round(done / total * 100) + '%';
    if (done >= total) finish();
  };
  CONFIG.photos.forEach(src => {
    const im = new Image();
    im.onload = tick; im.onerror = tick;
    im.src = src;
  });
  const fonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fonts, wait(3500)]).catch(() => {});
  setTimeout(finish, 5200); // أمان: لا انتظار بلا نهاية
}

/* ═══════════════ إعادة الحكاية من أولها ═══════════════ */
function restart() {
  Finale.reset();
  Secret.reset();
  Reasons.reset();
  Deck.started = Deck.started; // تبقى الموسيقى تعمل
  document.body.classList.remove('skipped', 'loaded');
  void document.body.offsetWidth;
  Deck.go(0);
  setTimeout(() => document.body.classList.add('loaded'), 80);
}

/* ═══════════════ الإقلاع ═══════════════ */
function init() {
  renderAll();
  Gallery.init(CONFIG.memories, CONFIG.photos);
  FX.initParticles($('#dust'));
  FX.initReveals();
  FX.initCursor();
  FX.initMagnetic();
  Music.init(CONFIG.music);
  Deck.init();
  bindTimelineGlow();

  /* زر البداية — إيماءة المستخدم التي تطلق الموسيقى والحكاية */
  $('#btnStart').addEventListener('click', () => {
    document.body.classList.add('started');
    Deck.started = true;
    Music.start();
    Deck.go(1);
    updateChrome();
  });

  $('#opSkip').addEventListener('click', () => document.body.classList.add('skipped'));

  /* الفصل ٠٧ */
  $('#secretBtn').addEventListener('click', () => Secret.reveal());
  $('#envelope').addEventListener('click', () => Secret.openEnvelope());

  /* الفصل ٠٤: اللمس يسرّع الإجابة */
  $('#reasonStage').addEventListener('click', () => Reasons.advance());

  $('#replayBtn').addEventListener('click', restart);

  runLoader();
}

document.addEventListener('DOMContentLoaded', init);