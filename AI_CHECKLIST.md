# AI Checklist — Nova Reyes Template

**For AI assistants** (Claude Code, Cursor, Copilot, etc.) working on this template.
If you are a human: point your AI at this file and say *"Read AI_CHECKLIST.md before touching anything."*

**Pick your language / Выберите язык:**
👉 [🇬🇧 English](#-english)  ·  [🇷🇺 Русский](#-русский)

---

# 🇬🇧 English

## Before you start

- [ ] Read `AGENTS.md`. This project uses **Next.js 16** — it has breaking changes vs your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code.
- [ ] Read `DESIGN.md` — the visual rules. They are not suggestions.
- [ ] Understand the architecture: **all text and project data live in `src/lib/content.ts`**. Components are presentational. For content changes, edit the data — not the JSX.

## Hard rules (never break these)

- [ ] **No color. Ever.** This site is white / near-black / grey only. No accent colors, no gradients, no colored hover states. Emphasis comes from tone (darker vs lighter grey), spacing, and motion.
- [ ] **Type stays restrained:** only the 3 existing text styles (headings, body, small labels). `h1` ≤ 48px, `h2` ≤ 32px. Never add oversized display type.
- [ ] **No em dashes (`—`) in any user-facing copy.** Use an en dash (`–`) for ranges only. Rewrite sentences to avoid dash-as-pause.
- [ ] **No new dependencies** — no UI kits, icon packs, CSS frameworks, or fonts. The Pliant variable font is already wired via `next/font/local` in `src/app/layout.tsx` (files in `src/app/fonts/`, licensed under the SIL OFL — keep `OFL.txt` next to the font files).
- [ ] **Reuse the existing motion primitives** (`Reveal`, `Magnetic`, `TypewriterText`, `AnimatedWords`, `SmoothScroll`/Lenis). Match their durations and easings. Nothing flashy: no blinking, spinning, or bouncing.
- [ ] Don't edit the design tokens at the top of `src/app/globals.css` unless the user explicitly asks.

## Changing content

- [ ] Name, role, email, socials, about text → `src/lib/content.ts`.
- [ ] Home page cases and inner case pages are separate structures in `content.ts` (`cases` + `caseDetails`) — keep slugs in sync between them.
- [ ] **Adding a case:** copy an existing entry in both structures. Inner case pages follow one fixed section order (hero name → video-in-browser → result numbers → timeline / stack / responsibilities → overview → images → process → results → anatomy of a decision → reflection → prev/next). Replicate it; don't invent new sections.
- [ ] **Videos:** drop `.mp4` files into `public/`, reference as `"/file.mp4"` in `content.ts`. Short seamless loops (5–15 s), muted, landscape, ideally under ~15 MB. The dark outro background video is set via `<BgVideo>` in `src/app/page.tsx`.
- [ ] Missing images stay as **grey placeholder boxes with captions** — never substitute random stock imagery.

## Before you finish

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Check the site at mobile (~390 px) and desktop widths.
- [ ] Verify the home narrator still retypes per section and case pages open from the rail.
- [ ] Re-scan your diff: no color, no em dashes, no new fonts or dependencies.

---

# 🇷🇺 Русский

## Перед началом

- [ ] Прочитай `AGENTS.md`. Проект на **Next.js 16** — в нём есть breaking changes относительно твоих тренировочных данных. Перед кодом по фреймворку читай нужный гайд в `node_modules/next/dist/docs/`.
- [ ] Прочитай `DESIGN.md` — визуальные правила. Это не рекомендации, а правила.
- [ ] Пойми архитектуру: **весь текст и данные проектов лежат в `src/lib/content.ts`**. Компоненты — презентационные. Для правок контента меняй данные, а не JSX.

## Жёсткие правила (никогда не нарушать)

- [ ] **Никакого цвета.** Сайт только белый / почти чёрный / серый. Без акцентных цветов, градиентов, цветных hover-состояний. Акценты — тоном (темнее/светлее серый), воздухом и движением.
- [ ] **Типографика сдержанная:** только 3 существующих стиля текста (заголовки, основной текст, мелкие метки). `h1` ≤ 48px, `h2` ≤ 32px. Никакого гигантского дисплейного текста.
- [ ] **Никаких длинных тире (`—`) в текстах сайта.** Короткое тире (`–`) — только для диапазонов. Перестраивай фразы, чтобы не нужна была пауза-тире.
- [ ] **Никаких новых зависимостей** — ни UI-китов, ни иконок, ни CSS-фреймворков, ни шрифтов. Вариативный шрифт Pliant уже подключён через `next/font/local` в `src/app/layout.tsx` (файлы в `src/app/fonts/`, лицензия SIL OFL — `OFL.txt` должен лежать рядом со шрифтами).
- [ ] **Переиспользуй существующие моушен-примитивы** (`Reveal`, `Magnetic`, `TypewriterText`, `AnimatedWords`, `SmoothScroll`/Lenis). Совпадай по длительностям и изингам. Ничего кричащего: без мигания, вращения, прыжков.
- [ ] Не трогай дизайн-токены в начале `src/app/globals.css`, если пользователь прямо не попросил.

## Правки контента

- [ ] Имя, роль, почта, соцсети, «обо мне» → `src/lib/content.ts`.
- [ ] Кейсы на главной и внутренние страницы кейсов — отдельные структуры в `content.ts` (`cases` + `caseDetails`) — держи slug'и синхронными.
- [ ] **Добавление кейса:** копируй существующий объект в обеих структурах. Внутренние страницы идут по одному фиксированному порядку секций (имя-герой → видео-в-браузере → цифры результата → сроки / стек / роль → обзор → картинки → процесс → результаты → анатомия решения → рефлексия → prev/next). Повторяй его, не выдумывай новые секции.
- [ ] **Видео:** клади `.mp4` в `public/`, указывай как `"/file.mp4"` в `content.ts`. Короткие бесшовные лупы (5–15 с), без звука, горизонтальные, желательно до ~15 МБ. Фоновое видео тёмного финала задаётся через `<BgVideo>` в `src/app/page.tsx`.
- [ ] Отсутствующие картинки остаются **серыми заглушками с подписями** — не подставляй случайный сток.

## Перед завершением

- [ ] `npm run lint` проходит.
- [ ] `npm run build` проходит.
- [ ] Проверь сайт на мобильной (~390 px) и десктопной ширине.
- [ ] Убедись: наратор на главной перепечатывается по секциям, кейсы открываются из ленты.
- [ ] Перечитай свой diff: без цвета, без длинных тире, без новых шрифтов и зависимостей.
