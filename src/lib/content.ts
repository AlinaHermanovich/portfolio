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
    category: "Образовательный продукт",
    year: "2024",
    blurb:
      "Сайт, презентации, учебные материалы и реклама в одном визуальном языке — от педагогов до родителей и набора в лагерь.",
    tags: ["Сайт", "Презентации", "Упаковка"],
    cta: "Смотреть кейс",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-1-preview.png",
  },
  {
    slug: "meridian-finance",
    client: "Meridian Finance",
    title: "How I halved load time and doubled demo sign-ups",
    category: "Product Site",
    year: "2025",
    blurb:
      "Rebuilt a fintech marketing site around a single idea: clarity.",
    tags: ["UX", "Design System", "Framer"],
    cta: "See the numbers",
    video: "/19800595-hd_1920_1080_25fps.mp4",
  },
  {
    slug: "atlas-editorial",
    client: "Atlas Editorial",
    title: "How I turned long-reads into an experience",
    category: "Digital Magazine",
    year: "2024",
    blurb:
      "Immersive parallax spreads, kinetic pull-quotes, and a custom CMS.",
    tags: ["Editorial", "Next.js", "GSAP"],
    cta: "Start reading",
    video: "/19457509-uhd_3840_2160_30fps.mp4",
  },
  {
    slug: "bloom-skincare",
    client: "Bloom Skincare",
    title: "How I made a storefront feel touchable and lifted sales 38%",
    category: "E-commerce",
    year: "2024",
    blurb:
      "3D bottles, buttery transitions, and a tactile buy flow.",
    tags: ["Shopify", "3D", "Interaction"],
    cta: "Get a feel",
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
  { value: "8+", label: "Years designing" },
  { value: "60+", label: "Projects shipped" },
  { value: "20+", label: "Studios & brands" },
  { value: "12", label: "Awards & features" },
];

export type Experience = {
  period: string;
  title: string;
  company?: string;
  url?: string;
};

export const experience: Experience[] = [
  { period: "2022 – Now", title: "Independent Designer & Front-end" },
  {
    period: "2019 – 2022",
    title: "Senior Designer",
    company: "Field Studio",
    url: "https://field.studio",
  },
  {
    period: "2016 – 2019",
    title: "Product Designer",
    company: "Northbound",
    url: "https://northbound.co",
  },
];

/* ---------------------------------------------------------------
   Case-study (inner page) content — shared structure per case
   --------------------------------------------------------------- */
export type CaseSection = { body: string; captions: string[] };

export type CaseDetail = {
  summary: string;
  liveUrl: string;
  results: { value: string; label: string }[];
  timeline: string;
  stack: string[];
  responsibilities: string[];
  collaborators: string[];
  overview: string;
  heroCaption: string;
  duo: [string, string];
  process: CaseSection;
  outcome: CaseSection;
  resultsImage: string;
  anatomy: CaseSection;
  reflection: {
    body: string;
    notes: { title: string; body: string }[];
  };
};

export const caseDetails: Record<string, CaseDetail> = {
    "smartbook": {
    summary:
      "Полное дизайн-сопровождение детской школы финансовой грамотности: сайт, обучение, реклама.",
    liveUrl: "#",
    results: [
      { value: "—", label: "Сайт" },
      { value: "—", label: "КП" },
      { value: "—", label: "Презентации" },
      { value: "—", label: "Реклама" },
    ],
    timeline: "2024",
    stack: ["Figma", "PowerPoint"],
    responsibilities: ["Дизайн", "Упаковка"],
    collaborators: ["Алина"],
    overview:
      "Адаптировала сайт под аудиторию родителей и педагогов: усилила смыслы, убрала «детский» визуальный шум, выстроила читаемую структуру и единый стиль. Старый сайт выглядел как развивающий кружок из 2010-х — новый отражает серьёзность образовательной программы.",
    heroCaption: "Редизайн главной страницы сайта школы",
    duo: [
      "Сравнение блоков до и после",
      "Мобильная версия и ключевые экраны",
    ],
    process: {
      body: "Полностью переработала коммерческое предложение: текст, воронку и акценты. Презентация отвечает на вопросы родителя ещё до созвона и продаёт идею школы, а не просто перечисляет услуги.",
      captions: [
        "Структура и слайды КП",
        "Акценты и визуальная иерархия",
      ],
    },
    outcome: {
      body: "Разработала презентации для педагогов и родительских встреч. Для родителей — просто и спокойно, для педагогов — структурно и по делу. Один визуальный язык, разная плотность смысла.",
      captions: [
        "Презентация для родительских встреч",
        "Материалы для педагогов",
      ],
    },
    resultsImage: "Единый стиль обучающих материалов",
    anatomy: {
      body: "Перевела рукописные черновики эксперта в дизайн рабочей тетради. Сложные финансовые темы стали понятной игрой с иллюстрациями-подсказками — детям проще учиться, педагогу проще вести занятие.",
      captions: [
        "От наброска эксперта к развороту тетради",
        "Иллюстрации и подсказки в материале",
        "Готовая тетрадь в контексте занятия",
      ],
    },
    reflection: {
      body: "Закрыла офлайн и продвижение в том же стиле: ролл-ап для мероприятий, серию креативов для таргета и шаблоны Instagram, которыми школа может пользоваться сама.",
      notes: [
        {
          title: "Ролл-ап и офлайн",
          body: "Яркий и структурный баннер: и навигация на площадке, и точка узнавания бренда школы.",
        },
        {
          title: "Таргет и Instagram",
          body: "Серия креативов под разные УТП для тестов в рекламе и шаблоны постов, чтобы команда школы могла вести визуал без дизайнера.",
        },
      ],
    },
  },

  "meridian-finance": {
    summary:
      "A rebuilt marketing site for a fintech, designed around one idea: clarity.",
    liveUrl: "https://meridianfinance.com",
    results: [
      { value: "-52%", label: "Load time" },
      { value: "2x", label: "Demo sign-ups" },
      { value: "+31%", label: "Conversion" },
      { value: "4.9", label: "Design score" },
    ],
    timeline: "8 weeks, 2025",
    stack: ["Framer", "React", "TypeScript", "Figma"],
    responsibilities: ["UX", "Design system", "Motion"],
    collaborators: ["Jonas Pike", "Ada Okafor", "Nova Reyes", "Sam Ortiz"],
    overview:
      "Meridian's product was clear; their site wasn't. We stripped the marketing site back to essentials, rebuilt the design system, and halved load time so the message landed before anyone had a chance to bounce.",
    heroCaption: "The redesigned homepage, above the fold.",
    duo: ["Component library and tokens.", "The interactive pricing calculator."],
    process: {
      body: "We audited every page for friction, cut the component count in half, and rebuilt the system around a strict type and spacing scale, so the team could ship consistent pages without a designer in the loop.",
      captions: ["Friction audit of the old flow.", "The new component system."],
    },
    outcome: {
      body: "Load time dropped by half and demo sign-ups doubled within a quarter. The design system now powers every new page the team ships.",
      captions: ["Before and after performance."],
    },
    resultsImage: "The new homepage, live.",
    anatomy: {
      body: "The debate was how much to explain. We chose to say less: one clear value line, one demo CTA, and let the product speak. Removing copy raised conversion more than adding it ever did.",
      captions: [
        "The messaging decision.",
        "Primary button and its states.",
        "The pricing card component.",
      ],
    },
    reflection: {
      body: "Clarity is a feature. The bravest edits were deletions, and they moved the numbers most.",
      notes: [
        {
          title: "Tech",
          body: "Rebuilding on a strict token system in Framer cut the component count in half and made the site measurably faster. Performance was a design decision, not an afterthought.",
        },
        {
          title: "Collaboration",
          body: "Working directly with the founders to cut copy was uncomfortable and essential. Shared metrics kept those conversations about the user, not opinions.",
        },
      ],
    },
  },

  "atlas-editorial": {
    summary: "An immersive reading experience for a digital magazine.",
    liveUrl: "https://atlaseditorial.com",
    results: [
      { value: "+68%", label: "Read time" },
      { value: "2.4x", label: "Return visits" },
      { value: "90+", label: "Lighthouse" },
      { value: "12k", label: "Subscribers" },
    ],
    timeline: "10 weeks, 2024",
    stack: ["Next.js", "GSAP", "Sanity", "TypeScript"],
    responsibilities: ["Editorial design", "Motion", "Front-end build"],
    collaborators: ["Iris Wen", "Cal Roman", "Nova Reyes"],
    overview:
      "Atlas wanted long-form to feel like an event again. We built parallax spreads, kinetic pull-quotes, and a custom CMS so editors could art-direct each story without touching a line of code.",
    heroCaption: "A feature story with scroll-driven spreads.",
    duo: ["The editorial layout system.", "The custom CMS editor."],
    process: {
      body: "We designed the reading rhythm first, pacing image and text like a print spread, then built CMS blocks that let editors compose that rhythm themselves.",
      captions: ["Reading-rhythm studies.", "The CMS block library."],
    },
    outcome: {
      body: "Average read time rose 68% and return visits more than doubled. Editors now ship art-directed stories in hours, not days.",
      captions: ["Engagement over the launch quarter."],
    },
    resultsImage: "A published feature in context.",
    anatomy: {
      body: "We nearly cut parallax for performance. Instead we rebuilt it to be GPU-cheap and reduced-motion aware, keeping the feel without the cost.",
      captions: [
        "Performance versus feel.",
        "Pull-quote button controls.",
        "The article card component.",
      ],
    },
    reflection: {
      body: "Give editors real tools and they'll surprise you. The system mattered more than any single layout.",
      notes: [
        {
          title: "Tech",
          body: "GPU-cheap parallax and a reduced-motion path let us keep the feel without tanking Lighthouse. The custom CMS blocks were the real engineering win.",
        },
        {
          title: "Collaboration",
          body: "Pairing with the editorial team on the CMS meant we designed for how they actually work, not how we imagined they did.",
        },
      ],
    },
  },

  "bloom-skincare": {
    summary: "A tactile storefront that made products feel touchable.",
    liveUrl: "https://bloom.co",
    results: [
      { value: "+38%", label: "Conversion" },
      { value: "-24%", label: "Bounce rate" },
      { value: "3D", label: "Product views" },
      { value: "22k", label: "Orders" },
    ],
    timeline: "7 weeks, 2024",
    stack: ["Shopify", "Three.js", "React", "GSAP"],
    responsibilities: ["Interaction", "3D", "Front-end build"],
    collaborators: ["Lena Ross", "Priya Nair", "Omar Diaz", "Nova Reyes"],
    overview:
      "Bloom sells feel, not just formulas. We built a storefront with 3D bottles you can spin, buttery transitions, and a buy flow that stays out of the way, so the product does the selling.",
    heroCaption: "The product page with a spinnable 3D bottle.",
    duo: ["3D bottle materials study.", "The streamlined checkout."],
    process: {
      body: "We prototyped the 3D interaction first to prove it felt good on a phone, then designed the rest of the store around that centerpiece.",
      captions: ["The 3D interaction prototype.", "Mobile buy-flow tests."],
    },
    outcome: {
      body: "Conversion rose 38% and bounce fell, with the 3D product view becoming the most-used feature on the whole site.",
      captions: ["Conversion lift after launch."],
    },
    resultsImage: "The storefront on launch day.",
    anatomy: {
      body: "3D risked being slow and gimmicky. We capped it to a single hero interaction, lazy-loaded and reduced-motion aware, so it delighted without dragging the page down.",
      captions: [
        "Scoping the 3D decision.",
        "Add-to-cart button states.",
        "The product card component.",
      ],
    },
    reflection: {
      body: "Tactility sells. One well-made interaction beat a page full of features.",
      notes: [
        {
          title: "Tech",
          body: "Lazy-loading the 3D and capping it to one hero moment kept the store fast. Three.js earned its weight only because we scoped it ruthlessly.",
        },
        {
          title: "Collaboration",
          body: "Close work with the Bloom team on materials and lighting made the bottles feel real. Their product knowledge shaped the 3D more than any spec could.",
        },
      ],
    },
  },
};
