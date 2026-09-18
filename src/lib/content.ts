/* =============================================================================
   THIS IS THE FILE YOU EDIT MOST — your name, projects, and text live here.
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
    title: "Дизайн и маркетинг АДЦ с 2019г",
    headline:
      "Веду маркетинг и дизайн АДЦ «Атриум» с 2019 года — сайт, навигация, реклама, всё визуальное сопровождение.",
    category: "Площадка",
    year: "2019 – н.в.",
    blurb:
      "Сайт, карты этажей и реклама торгового центра — от структуры до согласования с подрядчиками.",
    tags: ["Сайт", "Навигация", "Реклама"],
    cta: "Смотреть кейс",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/atrium-preview.png",
    previewMobile: "/atrium-preview-mobile.png",
  },
    {
    slug: "prometei",
    client: "Прометей",
    title: "Сайт строительной компании: услуги, квартиры и партнёры",
    headline:
     "Разработала сайт многопрофильной строительной компании — разделила потоки B2B,\u00A0\u00A0B2C\u00A0\u00A0и\u00A0\u00A0партнеров.",
    category: "Производство",
    year: "производство",
    blurb: "Услуги, квартиры и сотрудничество — разные входы на одном сайте.",
    tags: ["Сайт", "Прототип", "Мобилка"],
    cta: "Смотреть сайт",
    video: "/19800595-hd_1920_1080_25fps.mp4",
    preview: "/prometei-home-1.png",
  },
  {
    slug: "4u",
    client: "4U",
    title: "Платформа для застройщика: витрина, кабинет и CRM",
    headline:
      "Спроектировала платформу 4U с нуля — поиск квартир, кабинеты и CRM для застройщика, продаж и покупателя.",
    category: "Цифровой продукт",
    year: "Грузия",
    blurb:
      "Не лендинг ЖК. Три роли на одном продукте — сайт, кабинет застройщика, CRM.",
    tags: ["Сайт", "Кабинет", "CRM"],
    cta: "Смотреть платформу",
    video: "/uhd_30fps.mp4",
    preview: "/4u-home.png",
  },
    {
    slug: "vcc",
    client: "Venture Capital Club",
    title: "Айдентика и упаковка точек касания венчурного клуба",
    headline:
      "Упаковала запуск венчурного клуба VCC — от материалов питч-сессий до визуальной базы для сайта.",
    category: "Событие и стиль",
    year: "запуск",
    blurb:
      "Строгая технологичная айдентика с нуля: логотип, соцсети, презентация, офлайн. На сайте — арт-дирекшн сторонней команды.",
    tags: ["Логотип", "Носители", "Ивент"],
    cta: "Смотреть оформление",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/vcc-preview.png",
    previewMobile: "/vcc-preview-mobile.png",
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
    body: "Motion is a material, not a decoration.",
  },
  {
    title: "Art direction",
    body: "Design that communicates without words.",
  },
  {
    title: "Design systems",
    body: "Visual and interaction principles early.",
  },
  {
    title: "Front-end build",
    body: "Design and code are one craft.",
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
  "Забираю на себя всё\u00A0визуальное оформление. Создаю структуру и\u00A0дизайн, которые транслируют вашу надёжность и\u00A0помогают бизнесу продавать.";

export const aboutServices = [
  "Сайты, лендинги, кабинеты",
  "Презентации и КП",
  "Реклама и материалы для продаж",
  "Полиграфия и офлайн-носители",
];

export const aboutPoints = [
  {
  title: "Превращаю хаос в систему",
  body: "Часто ко мне приходят с\u00A0разрозненными файлами, схемами и\u00A0обрывками заметок. Это\u00A0ок. Я\u00A0умею работать с\u00A0«сырым» материалом: сама вытаскиваю коммерческую суть и\u00A0собираю из\u00A0нее структуру.",
},
   {
    title: "Дизайн, который продает",
    body: "Картинка ради картинки бизнесу не\u00A0нужна. Я\u00A0создаю логичную графику, которая помогает уверенно продавать, а\u00A0клиентам и\u00A0партнёрам — сразу видеть ценность продукта.",
  },
  {
    title: "Говорим на одном языке",
    body: "Работала с производством и сложными нишами: от оборудования до офлайн-продаж. Понимаю жёсткие сроки, согласования и то, что дизайн здесь должен выдерживать реальный коммерческий контекст.",
  },
  {
    title: "Работа в команде",
    body: "Дизайн редко существует в\u00A0вакууме. Если для проекта понадобятся узкие специалисты (например, таргет или\u00A0видео), я\u00A0порекомендую контакты или легко сработаюсь с\u00A0вашим подрядчиком.",
  },
];
export const concepts = {
  title: "Концепты",
  lead: "Некоммерческие проекты. Исследование ниши, работа с формой и анимацией",
    slides: [
    {
      title: "Акт",
      body: "Учебная анимированная презентация. Проверяла, как слайд держит ритм без лишней графики: сначала смысл, потом движение. Не коммерческий заказ — разбор подачи для выступления.",
       image: "/act-preview.png",
      youtube: "sSszvPIyVeM",
    },
       {
      title: "DataWeave",
      body: "Учебный интерфейс на Framer: как данные выглядят на экране и как страница отвечает на скролл. Не заказ клиента — разбор продукта и анимации. Смотреть макет: dataweave.framer.website",
      image: "/dataweave-preview.png",
      href: "https://dataweave.framer.website/",
    },
    {
      title: "Porsche",
      body: "Учебная анимация с 3D-моделью машины. Нужно было собрать кадр, который читается с первого взгляда и не спорит с формой. Не заказ клиента — проба движения и ритма.",
      image: "/porsche-preview.png",
      youtube: "037BoLKsdSg",
    },
  ],
};
export type { CaseSection, CaseBlock, CaseDetail } from "./cases";
export { caseDetails, projectsDraft } from "./cases";
