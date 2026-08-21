/* ============================================================================
   👋 THIS IS THE FILE YOU EDIT MOST — your name, projects, and text live here.
   Only change the words INSIDE the "quotes". Keep the quotes, commas and { }.
   Your project videos are set on the `video:` lines below (files live in public/).
   New here? Read README.md first.  |  Новичок? Сначала прочитай README.md.
   ============================================================================ */

export const site = {
  name: "Алина Германович",
  role: "UI/UX Designer",
  location: "Могилев, Беларусь",
  email: "hello@novareyes.design",
  cvUrl: "/nova-reyes-cv.pdf",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
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
};

export const projects: Project[] = [
    {
    slug: "smartbook",
    client: "Смартбук",
    title: "Полное дизайн-сопровождение детской школы финансовой грамотности",
    headline:
      ". Упаковала школу фин.грамоты — от\u00A0сайта до\u00A0рекламы и\u00A0учебных материалов.",
    category: "Образовательный продукт",
    year: "2025",
    blurb:
      "Сайт, презентации, учебные материалы и реклама в одном визуальном языке — от педагогов до родителей и набора в лагерь.",
    tags: ["Сайт", "Презентации", "Упаковка"],
    cta: "Смотреть кейс",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-1-preview.png",
  },
    {
    slug: "ipk-bru",
    client: "ИПК Белорусско-Российского университета",
    title: "Визуальный стиль и оформление соцсетей в единой концепции",
    headline:
      ". Собрала визуальную систему соцсетей для\u00A0ИПК БРУ: от\u00A0концепции до\u00A0шаблонов и\u00A0таргета.",
    category: "Соцсети и реклама",
    year: "2024",
    blurb:
      "От анализа конкурентов до шаблонов Reels и баннеров таргета — система, с которой команда ведёт соцсети без дизайнера.",
    tags: ["Соцсети", "Фирменный стиль", "Таргет"],
    cta: "Смотреть кейс",
    video: "/19800595-hd_1920_1080_25fps.mp4",
  },
    {
    slug: "confucius-bntu",
    client: "Институт Конфуция по науке и технике БНТУ",
    title: "Сайт и презентация: структура, которая не теряет суть",
    headline:
      ". Спроектировала сайт и\u00A0презентацию для\u00A0БНТУ — структура и\u00A0визуал для\u00A0вуза и\u00A0партнёров.",
    category: "Сайт и презентация",
    year: "2026",
    blurb:
      "Визуал и структура для университета — уместно для госструктуры и партнёров, понятно студентам и преподавателям.",
    tags: ["Сайт", "Прототип", "Презентация"],
    cta: "Смотреть кейс",
    video: "/uhd_30fps.mp4",
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
  { value: "9+", label: "лет в дизайне" },
  { value: "5", label: "лет в маркетинге" },
  { value: "12+", label: "доп. обучений" },
  { value: "3", label: "проекта в НКО" },
];

export const aboutLead =
  "Перевожу сложные смыслы на понятный визуальный язык.";

export const aboutIntro =
  "Беру голосовые, заметки и черновики и превращаю в рабочие инструменты: презентации, сайты, материалы и креативы.";

export const aboutServices = [
  "Сайты и лендинги",
  "Презентации и КП",
  "Материалы для обучения и запусков",
  "Соцсети, баннеры, полиграфия",
];

export const aboutPoints = [
  {
    title: "Сырой материал",
    body: "Часто приходят не с брифом, а с голосовыми, заметками и «вот тут ещё файл». Это ок. Из этого собираю рабочую структуру и визуал.",
  },
  {
    title: "Не только «красиво»",
    body: "Картинка, с которой непонятно выступать или продавать, мало кому нужна. Смотрю на аудиторию и задачу — и под это собираю подачу.",
  },
  {
    title: "Эксперты и школы",
    body: "Педагогика и маркетинг в бэкграунде: запуски, модули, разные аудитории. Контекст объяснять с нуля не нужно.",
  },
  {
    title: "Несколько задач",
    body: "В одном проекте часто закрываю сразу несколько направлений. Если задача не моя — скажу честно и подскажу, к кому обратиться.",
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
};

export type CaseDetail = {
  summary: string;
  sections: CaseBlock[];
};

export const caseDetails: Record<string, CaseDetail> = {
  smartbook: {
    summary:
      "Полное дизайн-сопровождение детской школы финансовой грамотности.",
    sections: [
      {
        id: "site",
        navLabel: "Сайт",
        title: "Редизайн сайта",
        body: "Адаптировала сайт под аудиторию родителей и педагогов: усилила смыслы, убрала «детский» визуальный шум, выстроила читаемую структуру и единый стиль. Старый сайт выглядел как развивающий кружок из 2010-х — новый отражает серьёзность образовательной программы.",
        captions: [
          "Редизайн главной страницы сайта школы",
          "Сравнение блоков до и после",
          "Мобильная версия и ключевые экраны",
        ],
      },
      {
        id: "proposal",
        navLabel: "КП",
        title: "Коммерческое предложение",
        body: "Полностью переработала коммерческое предложение: текст, воронку и акценты. Презентация отвечает на вопросы родителя ещё до созвона и продаёт идею школы, а не просто перечисляет услуги.",
        captions: [
          "Структура и слайды КП",
          "Акценты и визуальная иерархия",
        ],
      },
      {
        id: "decks",
        navLabel: "Презентации",
        title: "Презентации",
        body: "Разработала презентации для педагогов и родительских встреч. Для родителей — просто и спокойно, для педагогов — структурно и по делу. Один визуальный язык, разная плотность смысла.",
        captions: [
          "Презентация для родительских встреч",
          "Материалы для педагогов",
        ],
      },
      {
        id: "workbook",
        navLabel: "Тетрадь",
        title: "Рабочая тетрадь",
        body: "Перевела рукописные черновики эксперта в дизайн рабочей тетради. Сложные финансовые темы стали понятной игрой с иллюстрациями-подсказками — детям проще учиться, педагогу проще вести занятие.",
        captions: [
          "От наброска эксперта к развороту тетради",
          "Иллюстрации и подсказки в материале",
          "Готовая тетрадь в контексте занятия",
        ],
      },
      {
        id: "promo",
        navLabel: "Реклама",
        title: "Офлайн, реклама и Instagram",
        body: "Закрыла офлайн и продвижение в том же стиле: ролл-ап для мероприятий, серию креативов для таргета и шаблоны Instagram, которыми школа может пользоваться сама.",
        captions: [
          "Ролл-ап для офлайн-мероприятий",
          "Креативы для таргета и шаблоны Instagram",
        ],
      },
    ],
  },

  "ipk-bru": {
    summary:
      "Визуальный стиль и оформление соцсетей для ИПК Белорусско-Российского университета.",
    sections: [
      {
        id: "analysis",
        navLabel: "Анализ",
        title: "Анализ конкурентов",
        body: "Проанализировала аккаунты вузов и ИПК: где сильный контент, но слабая подача, где нет единой системы. Цель — узнаваемый визуал, аккуратные шаблоны и простой формат, с которым команда работает без дизайнера.",
        captions: ["Подборка конкурентов и выводы"],
      },
      {
        id: "concept",
        navLabel: "Концепция",
        title: "Визуальная концепция",
        body: "По запросу клиента разработала текстовый знак и палитру: строго, современно, читаемо. Подготовила варианты для тёмного и светлого фона — чтобы система работала в ленте, сторис и рекламе.",
        captions: [
          "Знак ИПБ БРУ на тёмном и светлом фоне",
          "Палитра и базовые правила",
        ],
      },
      {
        id: "icons",
        navLabel: "Иконки",
        title: "Знак и иконки",
        body: "Текстовый знак сделала лаконичным для мобильного считывания. Набор иконок — в одном стиле с концепцией, чтобы рубрики и навигация в соцсетях выглядели цельно.",
        captions: ["Набор иконок в фирменном стиле"],
      },
      {
        id: "reels",
        navLabel: "Reels",
        title: "Обложки для Reels",
        body: "Продумала сетку и шаблоны обложек так, чтобы ролики смотрелись единой серией. Шаблоны собраны в удобном формате — команда ИПК может вести публикации без постоянного участия дизайнера.",
        captions: [
          "Серия обложек Reels",
          "Шаблон в работе",
        ],
      },
      {
        id: "stories",
        navLabel: "Сторис",
        title: "Сторис «Актуальные»",
        body: "Подготовила оформление сторис для ключевых рубрик: один стиль, без лишнего, с упором на читаемость и структуру. Актуальные выглядят аккуратно и узнаваемо.",
        captions: [
          "Оформление сторис по рубрикам",
          "Примеры в ленте",
        ],
      },
      {
        id: "ads",
        navLabel: "Таргет",
        title: "Баннеры для таргета",
        body: "Собрала серии визуальных креативов для проверки гипотез: разные УТП, акценты и аудитории. Форматы готовы к запуску в таргете и согласованы с общей визуальной системой.",
        captions: [
          "Креативы для таргета",
          "Вариации под разные УТП",
        ],
      },
    ],
  },

    "confucius-bntu": {
    summary:
      "Сайт и презентация для Института Конфуция БНТУ.",
    sections: [
      {
        id: "concept",
        navLabel: "Концепция",
        title: "Визуальная концепция",
        body: "Предложила заказчику два варианта: более официальный и более дружелюбный. Выбрали межкультурное направление — академичность и отсылки к китайской культуре без перегруза. Так институт выглядит серьёзно для партнёров и тепло для студентов.",
        captions: [
          "Варианты визуальной концепции",
          "Выбранное направление и акценты",
        ],
      },
      {
        id: "structure",
        navLabel: "Структура",
        title: "Структура сайта",
        body: "Собрала схему сайта под задачи вуза: отдельные сценарии для студентов, преподавателей и партнёров. Структура держит смысл — пользователь быстро находит своё, без лишних уровней меню.",
        captions: ["Карта сайта и основные разделы"],
      },
      {
        id: "prototype",
        navLabel: "Прототип",
        title: "Прототип",
        body: "Сделала кликабельный прототип для согласования логики до финальной отрисовки. На этом этапе проверили переходы, приоритеты блоков и наполнение ключевых страниц.",
        captions: ["Прототип основных экранов"],
      },
      {
        id: "design",
        navLabel: "Дизайн",
        title: "Финальный дизайн",
        body: "На основе утверждённой концепции оформила ключевые экраны и адаптивы. Сохранила структуру, усилила иерархию и собрала спокойный академический визуал в выбранной палитре.",
        captions: [
          "Ключевые экраны сайта",
          "Адаптив на планшете и телефоне",
        ],
      },
      {
        id: "deck",
        navLabel: "Презентация",
        title: "Презентация для студентов",
        body: "Собрала презентацию в том же визуальном языке, что и сайт: фирменный стиль, китайский и академический контекст, понятная структура. Презентация усиливает коммуникацию института и выглядит частью одной системы.",
        captions: [
          "Слайды презентации",
          "Единый стиль с сайтом",
        ],
      },
    ],
  },
  "bloom-skincare": {
    summary: "Кейс в работе.",
    sections: [
      {
        id: "overview",
        navLabel: "Обзор",
        title: "Обзор",
        body: "Кейс будет добавлен позже.",
      },
    ],
  },
};
/** Скрытые кейсы — не показываются на сайте, можно вернуть позже */
export const projectsDraft: Project[] = [
  {
    slug: "bloom-skincare",
    client: "Bloom Skincare",
    title: "How I made a storefront feel touchable and lifted sales 38%",
    category: "E-commerce",
    year: "2025",
    blurb:
      "3D bottles, buttery transitions, and a tactile buy flow.",
    tags: ["Shopify", "3D", "Interaction"],
    cta: "Get a feel",
    video: "/uhd_30fps.mp4",
  },
];
