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
    slug: "prometei",
    client: "Прометей",
    title: "Сайт строительной компании: услуги, квартиры и партнёры",
    headline:
     "Разработала сайт многопрофильной строительной компании — разделила потоки B2B,\u00A0\u00A0B2C\u00A0\u00A0и\u00A0\u00A0партнеров.",
    category: "Производство",
    year: "студия",
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
      "Спроектировала с\u00A0нуля логику и\u00A0экраны: покупатель ищет квартиру, застройщик включает акцию, продажи ведут сделку.",
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
      "Собрала знак, носители первой питч-сессии и визуальные правила для сайта клуба.",
    category: "Событие и стиль",
    year: "2026",
    blurb:
      "Строгая технологичная айдентика с нуля: логотип, соцсети, презентация, офлайн. На сайте — арт-дирекшн сторонней команды.",
    tags: ["Логотип", "Носители", "Ивент"],
    cta: "Смотреть оформление",
    video: "/9150545-hd_1920_1080_24fps.mp4",
    preview: "/case-2-preview.png",
  },
];
