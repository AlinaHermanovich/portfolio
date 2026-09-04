/* ============================================================================
   👋 THIS IS THE FILE YOU EDIT MOST — your name, projects, and text live here.
   Only change the words INSIDE the "quotes". Keep the quotes, commas and { }.
   Your project videos are set on the `video:` lines below (files live in public/).
   New here? Read README.md first.  |  Новичок? Сначала прочитай README.md.
   =========================================================================== */

export const site = {
  name: "Алина Германович",
  role: "UI/UX Designer, маркетолог",
  location: "Могилев, Беларусь",
  email: "box.lid@mail.ru",
  cvUrl: "/nova-reyes-cv.pdf",
  socials: [
    { label: "Канал", href: "https://t.me/zovite_designera" },
    { label: "Telegram", href: "https://t.me/zovite_alinu" },
    { label: "WhatsApp", href: "https://wa.me/375291022956" },
    { label: "Viber", href: "viber://chat?number=%2B375291022956" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  slug: string;
  client: string;
  title: string;
  headline?: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  cta: string;
  video?: string;
  preview?: string;
  previewMobile?: string;
};

export const projects: Project[] = [
  {
    slug: "atrium",
    client: "ТЦ Атриум",
    title: "Сайт, карты этажей и визуал торговой площадки с нуля",
    headline:
      "Собрала сайт Атриума с\u00A0нуля: карты этажей, навигация и\u00A0язык площадки.",
    category: "Площадка",
    year: "in-house",
    blurb:
      "Сайт, карты этажей и реклама торгового центра — от структуры до согласования с подрядчиками.",
    tags: ["Сайт", "Карты", "Наружка"],
    cta: "Смотреть площадку",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-1-preview.png",
    previewMobile: "/case-1-preview-mobile.png",
  },
  {
    slug: "klimat365",
    client: "Климат365",
    title: "Интернет-магазин климатической техники: каталог и внутренние страницы",
    headline:
      "Спроектировала магазин климата: каталог, карточки и\u00A0путь к\u00A0заявке.",
    category: "Интернет-магазин",
    year: "студия",
    blurb:
      "Утверждённый макет витрины: главная, каталог, карточка товара и мобилка. Живой сайт после запуска изменили.",
    tags: ["Каталог", "UX", "Мобилка"],
    cta: "Смотреть магазин",
    video: "/19800595-hd_1920_1080_25fps.mp4",
    preview: "/case-2-preview.png",
  },
  {
    slug: "4u",
    client: "4U",
    title: "Платформа для застройщика: сайт, кабинеты и логотип",
    headline:
      "Спроектировала платформу для\u00A0застройщика: публичный сайт, админка и\u00A0кабинет.",
    category: "Цифровой продукт",
    year: "Грузия",
    blurb:
      "Логотип, сайт объектов, админка и кабинет застройщика — роли, статусы и заявки, а не одна главная.",
    tags: ["Сайт", "Кабинеты", "Логотип"],
    cta: "Смотреть кабинеты",
    video: "/uhd_30fps.mp4",
    preview: "/case-3-preview.png",
    previewMobile: "/case-3-preview-mobile.png",
  },
  {
    slug: "vcc",
    client: "Venture Capital Club",
    title: "Знак и оформление первой питч-сессии клуба",
    headline:
      "Собрала визуал первой питч-сессии VCC: знак, афиша, бейджи и\u00A0ролл-ап.",
    category: "Событие и стиль",
    year: "2026",
    blurb:
      "Логотип, баннеры, бейджи, ролл-ап, посты и структура питч-дека. Сайт клуба в кейс не входит — его верстала другая команда.",
    tags: ["Логотип", "Носители", "Ивент"],
    cta: "Смотреть оформление",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-2-preview.png",
  },
];

export const approachLead = {
  solid:
    "I build websites that move. From first idea to shipped code. An innate drive to make work that feels alive.",
  dim: "Sharp. Considered. Unforgettable.",
};

export const capabilities = [
  {
    title: "Interaction design",
    body: "Motion is a material, not a decoration. I define how a site moves, responds, and feels: transitions, scroll choreography, and micro-interactions that behave with intent across the whole journey and inside the product. Static is never the default.",
  },
  {
    title: "Art direction",
    body: "Design that communicates without words. However complex your product or market may be, my job is to express the personality of your brand on screen in a way that is distinctive, confident, and impossible to ignore.",
  },
  {
    title: "Design systems",
    body: "What should the experience feel like, now and as you grow? I set the visual and interaction principles early, free from jargon and bloated component libraries, so every future decision has a clear compass.",
  },
  {
    title: "Front-end build",
    body: "Design and code are one craft, not a handoff. I build pixel-faithful, accessible, and fast front-ends in React, Framer, and Webflow, so what gets designed is exactly what ships, down to the last transition.",
  },
];

export const stats = [
  { value: "9+", label: "лет в\u00A0дизайне" },
  { value: "5", label: "лет в\u00A0маркетинге" },
  { value: "12+", label: "доп. обучений" },
  { value: "15+", label: "запусков с\u00A0нуля" },
];

export const aboutLead =
  "Перевожу сложные смыслы на понятный визуальный язык.";

export const aboutIntro =
  "Забираю на себя всё визуальное оформление. Создаю структуру и\u00A0дизайн, которые помогают бизнесу продавать и\u00A0не путать клиента.";

export const aboutServices = [
  "Сайты, каталоги, кабинеты",
  "Карты, навигация, полиграфия",
  "Фирменный стиль и\u00A0носители событий",
  "Презентации, КП, реклама",
];

export const aboutPoints = [
  {
    title: "Сначала смысл, потом картинка",
    body: "Структура, текстовый прототип, вайрфрейм, мудборд — и только потом макет. Так сайт и каталог не рассыпаются на красивые, но бесполезные экраны.",
  },
  {
    title: "Дизайн, который продаёт",
    body: "Картинка ради картинки бизнесу не\u00A0нужна. Я\u00A0собираю логичную графику, которая ведёт к\u00A0заявке: каталог, роли, носители, реклама.",
  },
  {
    title: "Говорим на одном языке",
    body: "Шесть лет замом по\u00A0маркетингу в\u00A0ТЦ. Знаю, как согласовывают макет с\u00A0подрядчиком, арендатором и\u00A0собственником. Контекст цеха и\u00A0площадки объяснять с\u00A0нуля не\u00A0нужно.",
  },
  {
    title: "Работа в команде",
    body: "Дизайн редко существует в\u00A0вакууме. Если нужны вёрстка, таргет или\u00A0печать, порекомендую контакты или легко сработаюсь с\u00A0вашим подрядчиком.",
  },
];

/* ---------------------------------------------------------------
   Case-study (inner page) content — shared structure per case
   --------------------------------------------------------------- */
export type CaseSection = { body: string; captions: string[] };

export type CaseBlock = {
  id: string;
  navLabel: string;
  title: string;
  body: string;
  captions?: string[];
  images?: string[];
  carousel?: boolean;
  carouselPerView?: 1 | 2;
  carousels?: { images: string[]; caption?: string }[];
};

export type CaseDetail = {
  summary: string;
  sections: CaseBlock[];
};

export const caseDetails: Record<string, CaseDetail> = {
  atrium: {
    summary:
      "Сайт торгового центра с нуля: карты этажей, навигация и визуал площадки.",
    sections: [
      {
        id: "task",
        navLabel: "Задача",
        title: "Задача",
        body: "У площадки не было сайта. Нужно было собрать точку входа для посетителей и арендаторов: кто где сидит, как доехать, что происходит, куда писать. Плюс один визуальный язык для рекламы и навигации внутри ТЦ.",
      },
      {
        id: "process",
        navLabel: "Процесс",
        title: "Как собирала",
        body: "Начала со структуры и текстового прототипа: какие сценарии у гостя, у родителя с детьми, у арендатора. Потом вайрфрейм и мудборд — и только после этого экраны. Карты этажей рисовала с нуля, не по готовому шаблону.",
      },
      {
        id: "maps",
        navLabel: "Карты",
        title: "Карты этажей",
        body: "Карта — не картинка «для красоты». Нужно быстро найти магазин, лифт, вход, еду. Собрала схему всех этажей так, чтобы её можно было читать на сайте и печатать для навигации в холле.",
      },
      {
        id: "site",
        navLabel: "Сайт",
        title: "Сайт",
        body: "Главная, магазины, события, карты, контакты. Без полотен текста и без «о нас с 1990 года» в первый экран. Человек должен понять, зачем ехать в ТЦ сейчас — и куда идти на месте.",
      },
      {
        id: "offline",
        navLabel: "Офлайн",
        title: "Реклама и носители",
        body: "Баннеры, наружка, внутренняя навигация, работа с подрядчиками печати. То, что висит в лифте, не копирует биллборд у трассы: разная дистанция — разный рисунок и объём текста.",
      },
    ],
  },

  klimat365: {
    summary:
      "Интернет-магазин климатической техники. Дизайн и проектирование — мои, проект студии АльтерВеб.",
    sections: [
      {
        id: "role",
        navLabel: "Роль",
        title: "Роль",
        body: "Структура, текстовый прототип, вайрфрейм, мудборд, дизайн. Проект студии АльтерВеб. Показываю утверждённый макет: после запуска живой сайт изменили.",
      },
      {
        id: "site",
        navLabel: "Витрина",
        title: "Витрина и каталог",
        body: "Нужно было не «красивую главную про кондиционеры», а магазин: категории, фильтры, карточка, заявка на подбор и монтаж. Собрала все внутренние страницы, а не только обложку.",
      },
      {
        id: "mobile",
        navLabel: "Мобилка",
        title: "Мобильная версия",
        body: "Каталог климата часто открывают с телефона, чтобы быстро написать или позвонить. Мобилку собирала отдельно: крупные цены, короткие характеристики, заявка под рукой.",
      },
      {
        id: "mirclime",
        navLabel: "MirClime",
        title: "Та же ниша, другой запуск",
        body: "Для другого климат-магазина, MirClime, сделала логотип и главную. Это не второй большой кейс, а кадр в той же теме: знак и витрина. Живой сайт позже ушёл к другому заказчику и поменял лого.",
      },
    ],
  },

  "4u": {
    summary:
      "Платформа для застройщика: логотип, сайт, админка и кабинет разработчика.",
    sections: [
      {
        id: "product",
        navLabel: "Продукт",
        title: "Что это",
        body: "Не лендинг ЖК, а система: публичный сайт объектов, админка и кабинет застройщика. Разные роли видят разное — заявки, статусы объектов, контент для покупателя.",
      },
      {
        id: "logo",
        navLabel: "Знак",
        title: "Логотип",
        body: "Знак собирала так, чтобы он держался в шапке сайта, в кабинете и на документах. Без декора, который теряется в мелком размере.",
      },
      {
        id: "site",
        navLabel: "Сайт",
        title: "Публичный сайт",
        body: "Каталог объектов, карточка комплекса, заявка. Текст и структура — под человека, который ищет квартиру, а не под «премиальность жизни» без фактов.",
      },
      {
        id: "cabinets",
        navLabel: "Кабинеты",
        title: "Админка и кабинет застройщика",
        body: "Здесь главное — роли и состояния, а не декор. Разработчик видит свои объекты и заявки, админ — всю систему. На экранах кейса — тестовые данные, без живых клиентов.",
      },
    ],
  },

  vcc: {
    summary:
      "Знак и оформление First Pitch Session Venture Capital Club.",
    sections: [
      {
        id: "brief",
        navLabel: "Задача",
        title: "Задача",
        body: "Срочно нужно было собрать визуал первой питч-сессии клуба: телеграм, сторис, инстаграм, экран на площадке. Стилистика — на моё усмотрение, с опорой на знак клуба.",
      },
      {
        id: "logo",
        navLabel: "Знак",
        title: "Логотип",
        body: "Сначала собрала знак клуба, потом от него — все носители. Так афиша, бейдж и обложка Facebook не спорят друг с другом.",
      },
      {
        id: "event",
        navLabel: "Носители",
        title: "Афиша, бейджи, ролл-ап",
        body: "Баннеры для телеграм и сторис, экран 16:9, бейджи с полем имени, ролл-ап 850×2000. Логотипы партнёров — монохромом, чтобы не спорили с главным макетом.",
      },
      {
        id: "social",
        navLabel: "Сети",
        title: "Посты и сторис",
        body: "Серия для набора стартапов и анонса сессии. Один рисунок, разные форматы. Фото с мероприятия — только из открытых постов клуба: мероприятие было закрытым, фотоотчёт не публиковали.",
      },
      {
        id: "deck",
        navLabel: "Дек",
        title: "Структура питч-дека",
        body: "Помогла собрать каркас и переписать тексты под формат 3 минуты питч + 7 минут Q&A. Сайт клуба в этот кейс не ставлю: его верстала другая команда.",
      },
    ],
  },
};

/** Образовательная сторона сайта — не показываем на этой ветке */
export const projectsDraft: Project[] = [
  {
    slug: "smartbook",
    client: "Смартбук",
    title: "Полное дизайн-сопровождение детской школы финансовой грамотности",
    category: "Образовательный продукт",
    year: "2025",
    blurb: "Сайт, презентации, учебные материалы и реклама.",
    tags: ["Сайт", "Презентации", "Упаковка"],
    cta: "Смотреть школу",
  },
];
