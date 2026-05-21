// ================================================================
//   КИРИЛЛ СИМУКОВ · script.js
// ================================================================

// ─── ДАННЫЕ ПРОЕКТОВ ────────────────────────────────────────────
// Замените url:'#' на реальные ссылки на сайты клиентов
const PROJECTS = [
  {
    label: 'ПОДТАПОЧКИ',
    grad: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)',
    coverImg: 'projects/tapochki-real.png',
    meta: 'Лендинг · 2025',
    name: 'Подтапочки — ремонт под ключ',
    url: 'https://pod-tapochki.ru/',
    desc: 'Лендинг для компании по ремонту квартир и домов в Сочи. Задача — выстроить доверие с первого экрана и привести клиента к заявке. Структура с акцентом на личный бренд владельца, соцдоказательство и оффер «замер за свой счёт».',
    tags: ['Tilda', 'Лендинг', 'Конверсионный дизайн', 'Личный бренд'],
    result: '↑ Ремонт квартир и домов «под ключ» в Сочи. Действующий сайт pod-tapochki.ru'
  },
  {
    label: 'BOXING',
    grad: 'linear-gradient(135deg,#1a0505,#8b1a1a)',
    coverImg: 'projects/star-boxing-real.jpg',
    meta: 'Лендинг · 2024',
    name: 'Star Boxing',
    url: 'https://star-boxing.ru/',
    desc: 'Сайт боксёрского клуба Star Boxing. Онлайн-запись на тренировки, представление тренерского состава, расписание и фотогалерея. Акцент на мотивирующей атмосфере и быстром захвате контакта.',
    tags: ['Tilda', 'Спорт', 'Лендинг', 'Онлайн-запись'],
    result: '↑ Рост записей на пробную тренировку через сайт. Сайт доступен на star-boxing.ru'
  },
  {
    label: 'CAPITAL',
    grad: 'linear-gradient(135deg,#05163a,#1a5fa6)',
    coverImg: 'projects/capital-modal.png',
    meta: 'Многостраничный сайт · 2024',
    name: 'Capital Tour',
    url: 'https://capitaltour.ru/',
    desc: 'Сайт туристического агентства Capital Tour. Каталог туров, онлайн-заявка, блок горящих предложений, отзывы туристов. Удобная фильтрация по направлениям и бюджету.',
    tags: ['Tilda', 'Туризм', 'Каталог', 'Заявки'],
    result: '↑ Рост онлайн-заявок на подбор туров. Сайт доступен на capitaltour.ru'
  },
  {
    label: 'TRAVEL',
    grad: 'linear-gradient(135deg,#054030,#1a8a65)',
    coverImg: 'projects/neturist-real.jpg',
    meta: 'Лендинг · 2024',
    name: 'Neturist',
    url: 'https://neturist.com/',
    desc: 'Туристический сервис для самостоятельных путешественников. Поиск туров и отелей, блог о путешествиях, удобная форма подбора маршрута.',
    tags: ['HTML/CSS', 'UX/UI', 'Туризм', 'Адаптив'],
    result: '↑ Улучшение конверсии в заявку на подбор тура. Сайт доступен на neturist.com'
  },
  {
    label: 'RENT',
    grad: 'linear-gradient(135deg,#1a0538,#7a2aac)',
    coverImg: 'projects/vivarent-modal.png',
    meta: 'Лендинг · 2024',
    name: 'Viva Rent',
    url: 'https://www.vivarent.ru/',
    desc: 'Сайт сервиса аренды с удобным каталогом, онлайн-бронированием и личным кабинетом клиента. Продуманный путь от выбора до оформления заявки.',
    tags: ['Tilda', 'Аренда', 'Каталог', 'Бронирование'],
    result: '↑ Рост онлайн-броней. Сайт доступен на vivarent.ru'
  },
  {
    label: 'DONLES',
    grad: 'linear-gradient(135deg,#051a0a,#1a6b2a)',
    coverImg: 'projects/donles-real.png',
    meta: 'Корпоративный сайт · 2024',
    name: 'Donles NN',
    url: 'https://donles-nn.ru/',
    desc: 'Корпоративный сайт компании по продаже пиломатериалов в Нижнем Новгороде. Каталог продукции, расчёт стоимости, форма заявки на доставку.',
    tags: ['Tilda', 'B2B', 'Каталог', 'Строительство'],
    result: '↑ Увеличение входящих заявок с сайта. Сайт доступен на donles-nn.ru'
  },
  {
    label: 'SCHOOL',
    grad: 'linear-gradient(135deg,#051038,#1a3aac)',
    coverImg: 'projects/saveschool-real.jpg',
    meta: 'Онлайн-школа · 2024',
    name: 'Save School',
    url: 'https://saveschool.online/',
    desc: 'Платформа онлайн-школы с описанием программ, расписанием занятий, блоком отзывов и онлайн-оплатой курсов.',
    tags: ['Tilda', 'EdTech', 'Онлайн-школа', 'Оплата'],
    result: '↑ Рост продаж курсов через сайт. Сайт доступен на saveschool.online'
  },
  {
    label: 'PRINT',
    grad: 'linear-gradient(135deg,#2a1005,#c85a10)',
    coverImg: 'projects/technoprint-real.jpg',
    meta: 'Корпоративный сайт · 2023',
    name: 'Techno Print',
    url: 'https://techno-print.su/',
    desc: 'Сайт типографии с каталогом услуг полиграфии, онлайн-калькулятором стоимости печати и формой заявки на заказ.',
    tags: ['Tilda', 'B2B', 'Полиграфия', 'Калькулятор'],
    result: '↑ Рост входящих заявок на полиграфические услуги. Сайт доступен на techno-print.su'
  },
  {
    label: 'SGFAM',
    grad: 'linear-gradient(135deg,#0a1528,#1a3a6b)',
    coverImg: 'projects/sgfam-real.png',
    meta: 'Taplink · 2024',
    name: 'SG Family',
    url: 'https://sgfam.taplink.ws/',
    desc: 'Taplink-страница для продвижения семейного бизнеса в соцсетях. Ссылки на соцсети, мессенджеры и каталог услуг — всё в одном месте.',
    tags: ['Taplink', 'SMM', 'Мультиссылка', 'Бизнес'],
    result: '↑ Рост переходов в мессенджеры и соцсети. Страница доступна на sgfam.taplink.ws'
  },
  {
    label: 'DOOR',
    grad: 'linear-gradient(135deg,#2a1505,#8b5520)',
    coverImg: 'projects/door-real.png',
    meta: 'Taplink · 2024',
    name: 'Door — двери и перегородки',
    url: 'https://door.taplink.ws/',
    desc: 'Taplink-страница для магазина дверей и перегородок. Каталог, прайс, кнопки быстрой связи через WhatsApp и Telegram.',
    tags: ['Taplink', 'Мультиссылка', 'Двери', 'Каталог'],
    result: '↑ Рост обращений через мессенджеры. Страница доступна на door.taplink.ws'
  },
  {
    label: 'EGB',
    grad: 'linear-gradient(135deg,#1a0538,#5a1a8a)',
    coverImg: 'projects/egb-real.png',
    meta: 'Taplink · 2024',
    name: 'EG Bredihin — личный бренд',
    url: 'https://taplink.cc/egbredihin',
    desc: 'Личная Taplink-страница специалиста — портфолио, контакты, ссылки на профессиональные профили и соцсети в одной точке.',
    tags: ['Taplink', 'Личный бренд', 'Портфолио', 'SMM'],
    result: '↑ Единая точка входа для контактов и портфолио. Страница доступна на taplink.cc/egbredihin'
  }
];

// ─── ПЛАВНЫЙ СКРОЛЛ ─────────────────────────────────────────────
function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 80,
    behavior: 'smooth'
  });
}

// ─── ПРЕЛОАДЕР ──────────────────────────────────────────────────
const _t0 = Date.now();
let _preHidden = false;

function hidePreloader() {
  if (_preHidden) return;
  _preHidden = true;
  const wait = Math.max(0, 1800 - (Date.now() - _t0));
  setTimeout(() => {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    pre.classList.add('hide');
    setTimeout(() => { if (pre.parentNode) pre.remove(); }, 700);
    animateHero();
  }, wait);
}
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 4000); // запасной вариант

// ─── АНИМАЦИЯ ГЕРОЯ ─────────────────────────────────────────────
const _mob = () => window.innerWidth <= 768;

function animateHero() {
  document.querySelectorAll('.hero-title span').forEach((el, i) =>
    setTimeout(() => el.classList.add('in'), 100 + i * (_mob() ? 100 : 130))
  );
  document.querySelectorAll('.scatter').forEach((el, i) =>
    setTimeout(() => el.classList.add('in'), (_mob() ? 500 : 700) + i * (_mob() ? 120 : 170))
  );
}

// ─── КАСТОМНЫЙ КУРСОР ───────────────────────────────────────────
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

// Скрываем на тач-устройствах
window.addEventListener('touchstart', () => {
  dot.style.display = 'none';
  ring.style.display = 'none';
}, { once: true });

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
}, { passive: true });

// Плавное следование кольца (lerp)
(function lerpRing() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(lerpRing);
})();

document.addEventListener('mouseover', e => {
  const over = !!e.target.closest('a, button, .card, .skill, .service, .review');
  ring.classList.toggle('big',  over);
  dot.classList.toggle('hide', over);
});

// ─── ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ──────────────────────────────────────────
document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  document.getElementById('themeToggle').textContent = next === 'dark' ? '☀' : '☾';
});

// ─── ПРОГРЕСС + ХЕДЕР ───────────────────────────────────────────
const prog = document.getElementById('scrollProg');
const hdr  = document.getElementById('hdr');

window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  prog.style.width = Math.min(pct, 100) + '%';
  hdr.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ─── INTERSECTION OBSERVER (анимации при скролле) ───────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el    = e.target;
    const items = el.querySelectorAll('.card, .principle, .service, .stage, .review');
    if (items.length) {
      items.forEach((c, i) => setTimeout(() => c.classList.add('in'), i * 75));
    } else {
      el.classList.add('in');
    }
    io.unobserve(el);
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.grid-3, .principles, .services, .stages, .reviews, .about-photo, .about-right, .reveal'
).forEach(el => io.observe(el));

// ─── МОДАЛЬНОЕ ОКНО ─────────────────────────────────────────────
const modal = document.getElementById('projectModal');

function openModal(idx) {
  const p = PROJECTS[idx];
  const cover = document.getElementById('mCover');
  if (p.coverImg) {
    cover.style.background = '#1a1a1a';
    cover.innerHTML = `<img src="${p.coverImg}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;border-radius:22px">`;
  } else {
    cover.style.background = p.grad;
    cover.textContent = p.label;
  }
  document.getElementById('mMeta').textContent       = p.meta;
  document.getElementById('mName').textContent       = p.name;
  document.getElementById('mDesc').textContent       = p.desc;
  document.getElementById('mTags').innerHTML         = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('mResult').textContent     = p.result;
  const mLink = document.getElementById('mLink');
  mLink.href           = p.url || '#';
  mLink.style.display  = '';
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('mClose').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Открытие по клику на карточку
document.querySelectorAll('.card[data-p]').forEach(card =>
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.97)';
    setTimeout(() => { card.style.transform = ''; }, 160);
    openModal(+card.dataset.p);
  })
);

// ─── ПАРАЛЛАКС ЗАГОЛОВКА ────────────────────────────────────────
const ht = document.querySelector('.hero-title');
if (!_mob() && ht) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - .5) * 10;
    const y = (e.clientY / window.innerHeight - .5) * 8;
    ht.style.transform = `translate(${x}px, ${y}px)`;
  }, { passive: true });
}
