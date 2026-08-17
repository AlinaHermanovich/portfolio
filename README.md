# Nova Reyes — Portfolio Template

A light, black-and-white, interactive portfolio for web & interaction designers.

**Pick your language / Выберите язык:**
👉 [🇬🇧 English](#-english)  ·  [🇷🇺 Русский](#-русский)

---

# 🇬🇧 English

Hi! 👋 This is your new website. You don't need to be a programmer to use it.
Follow the steps below like a recipe. Take your time. You can't break anything that can't be undone.

## 1. What you need first

Two free things installed on your computer:

1. **Node.js** — download the "LTS" button from [nodejs.org](https://nodejs.org). Install it like any app.
2. **A code editor** — [Visual Studio Code](https://code.visualstudio.com) is free and easy.

That's it. 🎉

## 2. Turn the website on

1. Open the project folder in VS Code.
2. Open the **Terminal** (top menu → *Terminal* → *New Terminal*).
3. Type this and press Enter (do it **once**, ever):

   ```bash
   npm install
   ```

4. Now type this and press Enter (do it **every time** you want to work):

   ```bash
   npm run dev
   ```

5. Open your web browser and go to **http://localhost:3000**

You should see the website! To stop it, click the terminal and press `Ctrl + C`.

> 💡 The website updates **by itself** while you edit. Save a file → the browser refreshes. Keep it open next to your editor.

## 3. Change the words (your name, projects, links)

**Almost all the text lives in ONE file:**

```
src/lib/content.ts
```

Open it. You'll see things in "quotes". **Only change what's inside the quotes.** For example:

```ts
name: "Nova Reyes",       →   name: "Your Name",
role: "Web Designer & Interaction Designer",
email: "hello@novareyes.design",
location: "Lisbon, PT",
```

Same idea for your projects, your "about" text, and your social links — they're all in that one file. Change the words inside the quotes, save, and watch the browser update. ✅

> ⚠️ Don't delete the `"` quotes, the `,` commas, or the `{ }` brackets. Only change the words **between** the quotes.

## 4. Add YOUR videos 🎬 (the important part)

This template shows your work as **videos** (like little screen recordings of your websites). The videos live in this folder:

```
public/
```

Each project points to a video file in `content.ts`. Look for the `video:` line inside a project:

```ts
{
  slug: "halcyon-studio",
  client: "Halcyon Studio",
  ...
  video: "/9150545-hd_1920_1080_24fps.mp4",   ← this line
}
```

### The easy way (recommended)

1. Record or export **your** website as a short `.mp4` video.
2. Put your video file into the `public/` folder.
3. In `content.ts`, change the `video:` line to your file name, starting with a `/`. Example:

   ```ts
   video: "/my-project.mp4",
   ```

4. Save. Your video now plays in that project card. 🎉

> 🎥 **Video tips:** wide (landscape) `.mp4`, short and looping (5–15 seconds is perfect), no sound needed. Keep files light (under ~15 MB each) so the site stays fast. You can delete the old example videos from `public/` once you've replaced them.

## 5. The big background video 🌊

At the very bottom (the dark "contact" area) there's a soft background video. It's set in a different place:

```
src/app/page.tsx   →   <BgVideo src="/16453162_1920_1080_60fps.mp4" />
```

To change it: put your `.mp4` in `public/` and swap the file name inside the quotes there.

## 6. The grey boxes inside a project

When you open a project page, some images are soft **grey placeholder boxes** with captions. They're there so the layout looks finished before you add real screenshots. They won't look broken to visitors. Putting real pictures everywhere is a slightly more advanced step — ask your developer, or leave the tasteful placeholders. 😌

## 7. Fonts ✍️ (already done)

Good news: the font (**Pliant**) is **already set up** for you — you don't need to do anything. If you ever want a different font, the files live in `src/app/fonts/` and are wired in `src/app/layout.tsx`.

## 8. Put it on the internet 🌍 (publish)

The easiest free way:

1. Make a free account at [vercel.com](https://vercel.com).
2. Connect the project (Vercel has a simple "Import" button).
3. Press deploy. Vercel gives you a real web address you can share. ✨

## 9. Keep it looking beautiful

This template has a specific style (light, black & white, calm). Before you change colors or sizes, please read **[DESIGN.md](DESIGN.md)** — it lists the simple rules that keep it looking professional.

## Quick map of the project

| I want to change… | Open this |
| --- | --- |
| My name, text, projects, links | `src/lib/content.ts` |
| Project videos | `public/` + the `video:` line in `content.ts` |
| Big background video | `src/app/page.tsx` |
| Colors & sizes (advanced) | `src/app/globals.css` + read `DESIGN.md` |
| Fonts (already set up) | `src/app/fonts/` + `src/app/layout.tsx` |

---

# 🇷🇺 Русский

Привет! 👋 Это твой новый сайт. Не нужно быть программистом, чтобы им пользоваться.
Просто делай шаги по порядку, как рецепт. Не спеши. Ничего страшного сломать нельзя.

## 1. Что нужно сначала

Две бесплатные программы на компьютере:

1. **Node.js** — нажми большую кнопку «LTS» на [nodejs.org](https://nodejs.org) и установи, как обычную программу.
2. **Редактор кода** — [Visual Studio Code](https://code.visualstudio.com), он бесплатный и простой.

Всё. 🎉

## 2. Включаем сайт

1. Открой папку проекта в VS Code.
2. Открой **Терминал** (верхнее меню → *Terminal* → *New Terminal*).
3. Напиши это и нажми Enter (делается **один раз** за всё время):

   ```bash
   npm install
   ```

4. Теперь напиши это и нажми Enter (делай **каждый раз**, когда хочешь работать):

   ```bash
   npm run dev
   ```

5. Открой браузер и зайди на **http://localhost:3000**

Ты увидишь сайт! Чтобы выключить — нажми в терминале `Ctrl + C`.

> 💡 Сайт обновляется **сам**, пока ты редактируешь. Сохранил файл → браузер обновился. Держи его открытым рядом с редактором.

## 3. Меняем слова (имя, проекты, ссылки)

**Почти весь текст лежит в ОДНОМ файле:**

```
src/lib/content.ts
```

Открой его. Ты увидишь слова в «кавычках». **Меняй только то, что внутри кавычек.** Например:

```ts
name: "Nova Reyes",       →   name: "Твоё Имя",
role: "Web Designer & Interaction Designer",
email: "hello@novareyes.design",
location: "Lisbon, PT",
```

Так же меняются твои проекты, текст «обо мне» и ссылки на соцсети — всё в этом же файле. Меняй слова внутри кавычек, сохраняй — и смотри, как обновляется браузер. ✅

> ⚠️ Не удаляй кавычки `"`, запятые `,` и скобки `{ }`. Меняй только слова **между** кавычками.

## 4. Добавляем СВОИ видео 🎬 (самое важное)

Этот шаблон показывает твои работы как **видео** (маленькие записи экрана твоих сайтов). Видео лежат в этой папке:

```
public/
```

Каждый проект указывает на файл видео в `content.ts`. Найди строку `video:` внутри проекта:

```ts
{
  slug: "halcyon-studio",
  client: "Halcyon Studio",
  ...
  video: "/9150545-hd_1920_1080_24fps.mp4",   ← вот эта строка
}
```

### Лёгкий способ (советуем)

1. Запиши или экспортируй **свой** сайт как короткое видео `.mp4`.
2. Положи файл видео в папку `public/`.
3. В `content.ts` поменяй строку `video:` на имя своего файла, начиная с `/`. Например:

   ```ts
   video: "/my-project.mp4",
   ```

4. Сохрани. Твоё видео теперь играет в карточке этого проекта. 🎉

> 🎥 **Советы по видео:** широкое (горизонтальное) `.mp4`, короткое и зацикленное (5–15 секунд — идеально), звук не нужен. Держи файлы лёгкими (до ~15 МБ каждый), чтобы сайт был быстрым. Старые примеры видео из `public/` можно удалить после замены.

## 5. Большое фоновое видео 🌊

В самом низу (тёмная зона «контакты») есть мягкое фоновое видео. Оно задаётся в другом месте:

```
src/app/page.tsx   →   <BgVideo src="/16453162_1920_1080_60fps.mp4" />
```

Чтобы поменять: положи своё `.mp4` в `public/` и замени имя файла внутри кавычек здесь.

## 6. Серые квадраты внутри проекта

Когда открываешь страницу проекта, часть картинок — мягкие **серые квадраты-заглушки** с подписями. Они стоят, чтобы страница выглядела законченной, пока ты не добавил(а) настоящие скриншоты. Посетителям они не покажутся «поломкой». Поставить настоящие картинки везде — шаг чуть посложнее: попроси разработчика или оставь аккуратные заглушки. 😌

## 7. Шрифты ✍️ (уже сделано)

Хорошая новость: шрифт (**Pliant**) **уже настроен** — тебе ничего делать не нужно. Если когда-нибудь захочешь другой шрифт — файлы лежат в `src/app/fonts/` и подключаются в `src/app/layout.tsx`.

## 8. Публикуем сайт в интернете 🌍

Самый лёгкий бесплатный способ:

1. Заведи бесплатный аккаунт на [vercel.com](https://vercel.com).
2. Подключи проект (у Vercel есть простая кнопка «Import»).
3. Нажми deploy. Vercel даст тебе настоящий адрес сайта, которым можно делиться. ✨

## 9. Сохраняем красоту

У этого шаблона особый стиль (светлый, чёрно-белый, спокойный). Прежде чем менять цвета или размеры, прочитай **[DESIGN.md](DESIGN.md)** — там простые правила, которые сохраняют профессиональный вид.

## Быстрая карта проекта

| Хочу поменять… | Открой это |
| --- | --- |
| Имя, текст, проекты, ссылки | `src/lib/content.ts` |
| Видео проектов | `public/` + строка `video:` в `content.ts` |
| Большое фоновое видео | `src/app/page.tsx` |
| Цвета и размеры (сложно) | `src/app/globals.css` + читай `DESIGN.md` |
| Шрифты (уже настроены) | `src/app/fonts/` + `src/app/layout.tsx` |
