"use client";

export default function Gate() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
    :root { --bg:#0b0b0b; --text:#ededed; --muted:#8a8a8a; --line:#222; }
    .gate-page, .gate-page * { box-sizing:border-box; }
    .gate-page { min-height:100dvh; background:var(--bg); color:var(--text); font-family:Inter,system-ui,sans-serif; -webkit-font-smoothing:antialiased; }
    .gate-page a { color:inherit; text-decoration:none; }
    .gate-page .page { min-height:100dvh; display:grid; grid-template-columns:1fr 1fr; }
    .gate-page .col { position:relative; min-height:100vh; padding:40px 48px 48px; display:flex; flex-direction:column; justify-content:space-between; }
    .gate-page .left { border-right:1px solid var(--line); }
    .gate-page .identity { display:flex; flex-direction:column; gap:16px; max-width:280px; }
    .gate-page .avatar { width:44px; height:44px; border-radius:50%; background:radial-gradient(circle at 30% 20%, #d9b99b, #8a6a52 42%, #3d2c24 100%); }
    .gate-page .name { font-size:14px; font-weight:400; line-height:1.35; }
    .gate-page .role { margin-top:3px; font-size:14px; line-height:1.4; color:var(--muted); }
    .gate-page .doors { display:flex; flex-direction:column; gap:6px; max-width:340px; }
    .gate-page .door { display:block; padding:8px 0; cursor:pointer; color:inherit; }
    .gate-page .door-title { font-size:16px; font-weight:400; letter-spacing:-0.02em; line-height:1.25; color:var(--text); }
    .gate-page .door-sub { margin-top:3px; font-size:14px; line-height:1.35; color:var(--muted); }
    .gate-page .door-cta { margin-top:3px; font-size:14px; color:var(--muted); }
    .gate-page .door:hover .door-title, .gate-page .door.is-on .door-title { color:#fff; }
    .gate-page .right { overflow:hidden; }
    .gate-page .about-wrap { max-width:520px; }
    .gate-page .about { font-size:22px; line-height:1.35; letter-spacing:-0.03em; font-weight:400; }
    .gate-page .contacts { margin-top:28px; display:flex; flex-direction:column; gap:6px; font-size:22px; line-height:1.35; letter-spacing:-0.03em; }
    .gate-page .contacts a { width:fit-content; color:var(--text); }
    .gate-page .contacts a:hover { text-decoration:underline; text-underline-offset:4px; }
    .gate-page .preview { position:absolute; inset:0; opacity:0; pointer-events:none; transition:opacity .2s ease; background:#111; }
    .gate-page .preview.is-on { opacity:1; }
    .gate-page .preview-grid { height:100%; display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:16px; }
    .gate-page .shot { border-radius:6px; min-height:0; }
    .gate-page .shot.wide { grid-column:1 / -1; }
    .gate-page .edu .a { background:linear-gradient(160deg,#ead7c3,#c9a48a 40%,#8f6d55); }
    .gate-page .edu .b { background:linear-gradient(180deg,#f4efe8,#d8c4ae); }
    .gate-page .edu .c { background:linear-gradient(135deg,#d7e4d3,#9bb59a 50%,#5f7a5e); }
    .gate-page .biz .a { background:linear-gradient(160deg,#2c3138,#15181c 55%,#6b727a); }
    .gate-page .biz .b { background:linear-gradient(180deg,#3a3f36,#1c1e1a); }
    .gate-page .biz .c { background:linear-gradient(135deg,#2a3340,#0f141a 60%,#6e7c8a); }
    .gate-page .shot-label { height:100%; display:flex; align-items:flex-end; padding:18px; font-size:13px; color:rgba(255,255,255,.78); }
    @media (max-width:860px) {
      .gate-page .page { grid-template-columns:1fr; min-height:auto; }
      .gate-page .col { min-height:0; padding:28px 22px; justify-content:flex-start; }
      .gate-page .left { border-right:0; padding-bottom:36px; }
      .gate-page .right { padding-top:36px; border-top:1px solid var(--line); }
      .gate-page .identity { max-width:none; }
      .gate-page .doors { margin-top:48px; max-width:none; }
      .gate-page .about,.gate-page .contacts { font-size:18px; line-height:1.4; max-width:none; }
      .gate-page .contacts { margin-top:22px; }
      .gate-page .preview { display:none; }
    }
      `}</style>
      <div className="gate-page">
        <main className="page">
          <section className="col left">
            <div className="identity">
              <div className="avatar" aria-hidden="true" />
              <div>
                <div className="name">Алина Германович</div>
                <div className="role">
                  Визуальная упаковка для экспертов и предпринимателей.
                </div>
              </div>
            </div>
            <nav className="doors">
              <a
                className="door"
                href="https://zovite-designera.vercel.app/"
                data-preview="edu"
                onMouseEnter={(e) => {
                  document.querySelectorAll(".gate-page .preview, .gate-page .door").forEach((n) => n.classList.remove("is-on"));
                  document.getElementById("preview-edu")?.classList.add("is-on");
                  e.currentTarget.classList.add("is-on");
                }}
                onMouseLeave={() => {
                  document.querySelectorAll(".gate-page .preview, .gate-page .door").forEach((n) => n.classList.remove("is-on"));
                }}
              >
                <div className="door-title">Образование и эксперты</div>
                <div className="door-sub">Школы, курсы, инфопродукты</div>
                <div className="door-cta">→ Смотреть работы</div>
              </a>
              <a
                className="door"
                href="/biz"
                data-preview="biz"
                onMouseEnter={(e) => {
                  document.querySelectorAll(".gate-page .preview, .gate-page .door").forEach((n) => n.classList.remove("is-on"));
                  document.getElementById("preview-biz")?.classList.add("is-on");
                  e.currentTarget.classList.add("is-on");
                }}
                onMouseLeave={() => {
                  document.querySelectorAll(".gate-page .preview, .gate-page .door").forEach((n) => n.classList.remove("is-on"));
                }}
              >
                <div className="door-title">Компании и производство</div>
                <div className="door-sub">Стройка, заводы, торговля</div>
                <div className="door-cta">→ Смотреть работы</div>
              </a>
            </nav>
          </section>
          <section className="col right">
            <div className="about-wrap">
              <p className="about">
                Делаю визуальную упаковку для двух типов заказчиков: образование и эксперты — и компании в стройке, производстве, торговле. Сайт, презентации, соцсети.
              </p>
              <div className="contacts">
                <a href="mailto:box.lid@mail.ru">box.lid@mail.ru</a>
                <a href="https://t.me/zovite_alinu" target="_blank" rel="noreferrer">telegram</a>
                <a href="viber://chat?number=%2B375291022956">viber</a>
                <a href="https://wa.me/375291022956" target="_blank" rel="noreferrer">whatsapp</a>
                <a href="https://t.me/zovite_designera" target="_blank" rel="noreferrer">канал</a>
              </div>
            </div>
            <div className="preview edu" id="preview-edu">
              <div className="preview-grid">
                <div className="shot edu a wide"><div className="shot-label">Школа / курс</div></div>
                <div className="shot edu b"><div className="shot-label">Презентации</div></div>
                <div className="shot edu c"><div className="shot-label">Соцсети</div></div>
              </div>
            </div>
            <div className="preview biz" id="preview-biz">
              <div className="preview-grid">
                <div className="shot biz a wide"><div className="shot-label">Производство</div></div>
                <div className="shot biz b"><div className="shot-label">Цифры</div></div>
                <div className="shot biz c"><div className="shot-label">B2B</div></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
