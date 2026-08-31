/* ============================================================================
   👋 THIS IS THE FILE YOU EDIT MOST — your name, projects, and text live here.
   Only change the words INSIDE the "quotes". Keep the quotes, commas and { }.
   Your project videos are set on the `video:` lines below (files live in public/).
   New here? Read README.md first.  |  Новичок? Сначала прочитай README.md.
   ============================================================================ */

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
    slug: "smartbook",
    client: "Смартбук",
    title: "Полное дизайн-сопровождение детской школы финансовой грамотности",
    headline:
    "Упаковала школу финансовой грамотности — от\u00A0сайта до\u00A0рекламы и\u00A0учебных материалов.",
    category: "Образовательный продукт",
    year: "2025",
    blurb:
      "Сайт, презентации, учебные материалы и реклама в одном визуальном языке — от педагогов до родителей и набора в лагерь.",
    tags: ["Сайт", "Презентации", "Упаковка"],
    cta: "Смотреть школу",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-1-preview.png",
    previewMobile: "/case-1-preview-mobile.png",
  },
    {
    slug: "ipk-bru",
    client: "ИПК Белорусско-Российского университета",
    title: "Визуальный стиль и оформление соцсетей в единой концепции",
    headline:
      "Собрала визуальную систему соцсетей для\u00A0ИПК БРУ: от\u00A0концепции до\u00A0шаблонов и\u00A0таргета.",
    category: "Соцсети и реклама",
    year: "2024",
    blurb:
      "От анализа конкурентов до шаблонов Reels и баннеров таргета — система, с которой команда ведёт соцсети без дизайнера.",
    tags: ["Соцсети", "Фирменный стиль", "Таргет"],
    cta: "Смотреть стиль",
    video: "/19800595-hd_1920_1080_25fps.mp4",
    preview: "/case-2-preview.png",
  },
    {
    slug: "confucius-bntu",
    client: "Институт Конфуция по науке и технике БНТУ",
    title: "Сайт и презентация: структура, которая не теряет суть",
    headline:
      "Спроектировала сайт и\u00A0презентацию для\u00A0БНТУ — структура и\u00A0визуал для\u00A0вуза и\u00A0партнёров.",
    category: "Сайт и презентация",
    year: "2026",
    blurb:
      "Визуал и структура для университета — уместно для госструктуры и партнёров, понятно студентам и преподавателям.",
    tags: ["Сайт", "Прототип", "Презентация"],
    cta: "Смотреть сайт",
    video: "/uhd_30fps.mp4",
    preview: "/case-3-preview.png",
    previewMobile: "/case-3-preview-mobile.png",
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
  "Забираю на себя всё визуальное оформление. Создаю структуру и\u00A0дизайн, которые доказывают вашу экспертность и\u00A0помогают бизнесу продавать.";

export const aboutServices = [
  "Сайты и\u00A0лендинги",
  "Презентации и\u00A0КП",
  "Материалы для\u00A0обучения и\u00A0запусков",
  "Соцсети, баннеры, полиграфия",
];

export const aboutPoints = [
  {
    title: "Работаю без\u00A0брифа",
    body: "Часто ко мне приходят с\u00A0голосовыми сообщениями и\u00A0обрывками заметок. Это\u00A0ок. Я\u00A0умею работать с\u00A0«сырым» материалом: сама вытаскиваю суть и\u00A0собираю из\u00A0нее структуру.",
  },
  {
    title: "Дизайн, который продает",
    body: "Картинка ради картинки бизнесу не\u00A0нужна. Я\u00A0создаю логичную графику, которая помогает вам уверенно продавать, а\u00A0аудитории — легко усваивать информацию.",
  },
  {
    title: "Говорим на одном языке",
    body: "Педагогика и\u00A0маркетинг в\u00A0бэкграунде: запуски, модули, разные аудитории. Контекст объяснять с\u00A0нуля не\u00A0нужно.",
  },
  {
    title: "Работа в команде",
    body: "Дизайн редко существует в\u00A0вакууме. Если для проекта понадобятся узкие специалисты (например, таргет или\u00A0видео), я\u00A0порекомендую контакты или легко сработаюсь с\u00A0вашим подрядчиком.",
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
          "Как было",
          "Как стало",
          "Так выглядит на телефоне",
        ],
        images: [
          "/smartbook-old.png",
          "/smartbook-new.png",
          "/smartbook-mobile.png",
        ],
      },
            {
        id: "proposal",
        navLabel: "КП",
        title: "Коммерческое предложение",
        body: "Полностью переработала коммерческое предложение: текст, воронку и акценты. Презентация отвечает на вопросы родителя ещё до созвона и продаёт идею школы, а не просто перечисляет услуги.",
        captions: ["Коммерческое предложение"],
        carousel: true,
         images: [
          "/smartbook-kp-1.png",
          "/smartbook-kp-2.png",
          "/smartbook-kp-3.png",
          "/smartbook-kp-4.png",
          "/smartbook-kp-5.png",
          "/smartbook-kp-6.png",
          "/smartbook-kp-7.png",
          "/smartbook-kp-8.png",
          "/smartbook-kp-9.png",
          "/smartbook-kp-10.png",
        ],
      },
            {
        id: "decks",
        navLabel: "Презентации",
        title: "Презентации",
        body: "Разработала презентации для педагогов и родительских встреч. Для родителей — просто и спокойно, для педагогов — структурно и по делу. Один визуальный язык, разная плотность смысла.",
        carousels: [
          {
            caption: "Презентация для родительских встреч",
            images: [
              "/smartbook-parents-1.png",
              "/smartbook-parents-2.png",
              "/smartbook-parents-3.png",
            ],
          },
          {
            caption: "Материалы для педагогов",
            images: [
              "/smartbook-teachers-1.png",
              "/smartbook-teachers-2.png",
              "/smartbook-teachers-3.png",
            ],
          },
        ],
      },
      {
        id: "workbook",
        navLabel: "Тетрадь",
        title: "Рабочая тетрадь",
        body: "Перевела рукописные черновики эксперта в дизайн рабочей тетради. Сложные финансовые темы стали понятной игрой с иллюстрациями-подсказками — детям проще учиться, педагогу проще вести занятие.",
        captions: [
          "Набросок эксперта",
          "Иллюстрация в тетради",
          "Готовая тетрадь",
        ],
        images: [
          "/smartbook-workbook-1.png",
          "/smartbook-workbook-2.png",
          "/smartbook-workbook-3.png",
        ],
      },
             {
        id: "promo",
        navLabel: "Реклама",
        title: "Офлайн и реклама",
        body: "Собрала офлайн и продвижение в том же стиле, что сайт и материалы школы: ролл-ап для мероприятий и серию креативов для набора в летний лагерь. Креативы делали вместе с таргетологом — под разные УТП и аудитории.",
          captions: [
          "Ролл-ап для мероприятий",
          "Креативы для летнего лагеря",
        ],
        images: [
          "/smartbook-rollup.png",
          "/smartbook-ads.png",
        ],
      },
      {
        id: "instagram",
        navLabel: "Instagram",
        title: "Оформление Instagram",
        body: "Оформила ленту и сторис в одном стиле со школой. Часть макетов собрала шаблонами, чтобы администратор мог обновлять расписания на день самостоятельно. Ведение ленты осталось за дизайнером.",
        captions: [
          "Посты о наборе в группы",
          "Сторис",
        ],
        images: [
          "/smartbook-ig-1.png",
          "/smartbook-ig-2.png",
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
        captions: ["Подборка конкурентов"],
        images: ["/ipk-analysis.png"],
      },
            {
        id: "concept",
        navLabel: "Концепция",
        title: "Визуальная концепция",
        body: "По запросу клиента разработала текстовый знак и палитру: строго, современно, читаемо. Подготовила варианты для тёмного и светлого фона — чтобы система работала в ленте, сторис и рекламе.",
        captions: [
          "Знак на тёмном и светлом фоне",
          "Логотип на носителе",
        ],
        images: [
          "/ipk-sign.png",
          "/ipk-palette.png",
        ],
      },
      {
        id: "icons",
        navLabel: "Иконки",
        title: "Иконки",
        body: "Набор иконок — в одном стиле с концепцией, чтобы рубрики и навигация в соцсетях выглядели цельно.",
        captions: ["Набор иконок в фирменном стиле"],
        images: ["/ipk-icons.png"],
      },
           {
        id: "reels",
        navLabel: "Reels",
        title: "Обложки для Reels",
        body: "Продумала сетку и шаблоны обложек так, чтобы ролики смотрелись единой серией. Шаблоны собраны в Canva — команда ИПК может вести публикации без постоянного участия дизайнера.",
        carousel: true,
        carouselPerView: 1,
        captions: [
          "Серия обложек Reels",
          "Шаблон в Canva",
        ],
        images: [
          "/ipk-reels-1.png",
          "/ipk-reels-2.png",
        ],
      },
       {
        id: "stories",
        navLabel: "Сторис",
        title: "Сторис «Актуальные»",
        body: "Подготовила оформление сторис для ключевых рубрик: один стиль, без лишнего, с упором на читаемость и структуру. Актуальные выглядят аккуратно и узнаваемо.",
        carousel: true,
        carouselPerView: 1,
        captions: [
          "Оформление сторис по рубрикам",
          "Примеры в ленте",
        ],
        images: [
          "/ipk-stories-1.png",
          "/ipk-stories-2.png",
        ],
      },
            {
        id: "ads",
        navLabel: "Таргет",
        title: "Баннеры для таргета",
        body: "Собрала серии визуальных креативов для проверки гипотез: разные УТП, акценты и аудитории. Форматы готовы к запуску в таргете и согласованы с общей визуальной системой.",
        captions: [
          "Тесты под разные аудитории",
          "Тот же запуск, другие связки",
          "Тот же запуск, олимпиада",
          "Отзыв таргетолога",
        ],
        images: [
          "/ipk-ads-1.png",
          "/ipk-ads-2.png",
          "/ipk-ads-3.png",
          "/ipk-ads-4.png",
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
        carousel: true,
        carouselPerView: 1,
        captions: [
          "Первый вариант",
          "Первый вариант",
          "Выбранный вариант",
          "Выбранный вариант",
        ],
        images: [
          "/bntu-concept-1.png",
          "/bntu-concept-2.png",
          "/bntu-concept-3.png",
          "/bntu-concept-4.png",
        ],
      },
            {
        id: "structure",
        navLabel: "Структура",
        title: "Структура сайта",
        body: "Собрала схему сайта под задачи вуза: отдельные сценарии для студентов, преподавателей и партнёров. Структура держит смысл — пользователь быстро находит своё, без лишних уровней меню.",
        captions: ["Карта сайта"],
        images: ["/bntu-structure.png"],
      },
        {
        id: "prototype",
        navLabel: "Прототип",
        title: "Прототип",
        body: "Сделала кликабельный прототип для согласования логики до финальной отрисовки. На этом этапе проверили переходы, приоритеты блоков и наполнение ключевых страниц.",
        captions: ["Прототип основных экранов"],
        images: ["/bntu-prototype.png"],
      },
      {
        id: "design",
        navLabel: "Дизайн",
        title: "Финальный дизайн",
        body: "На основе утверждённой концепции оформила ключевые экраны и адаптивы. Сохранила структуру, усилила иерархию и собрала спокойный академический визуал в выбранной палитре.",
        carousel: true,
        carouselPerView: 1,
        captions: [
          "Макет главной",
          "Макет внутренней страницы",
          "Ещё экран",
          "Мобильная версия",
        ],
        images: [
          "/bntu-design-1.png",
          "/bntu-design-2.png",
          "/bntu-design-3.png",
          "/bntu-design-4.png",
        ],
      },
      {
        id: "deck",
        navLabel: "Презентация",
        title: "Презентация для студентов",
        body: "Собрала презентацию в том же визуальном языке, что и сайт: фирменный стиль, китайский и академический контекст, понятная структура. Презентация усиливает коммуникацию института и выглядит частью одной системы.",
        carousel: true,
        carouselPerView: 1,
        captions: [
          "Слайд 1",
          "Слайд 2",
          "Слайд 3",
        ],
        images: [
          "/bntu-deck-1.png",
          "/bntu-deck-2.png",
          "/bntu-deck-3.png",
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
