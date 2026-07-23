/*
 * render.js — turns window.PORTFOLIO (data.js) into DOM.
 *
 * Each page includes empty mount points (<div id="...">) and calls the
 * matching render function. Adding content = editing data.js, never this file.
 */
(function () {
  const P = window.PORTFOLIO;
  if (!P) return;

  /* Escape user-facing text so stray "<" (e.g. "<canvas>") renders literally. */
  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const el = (id) => document.getElementById(id);
  const set = (id, html) => { const n = el(id); if (n) n.innerHTML = html; };
  const pad = (n) => String(n).padStart(2, "0");

  const tags = (arr) =>
    `<div class="tag-row">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  /* ---- HERO ---------------------------------------------------------- */
  function hero() {
    const p = P.profile;
    set(
      "hero",
      `
      <div class="hero-text">
        <p class="hero-kicker">${esc(p.kicker)}</p>
        <h1 class="hero-name">${p.heroLines
          .map((l) => `<span class="line">${esc(l)}</span>`)
          .join("")}<span class="caret" aria-hidden="true"></span></h1>
        <p class="hero-role">${esc(p.role)}</p>
        <p class="hero-pitch">${esc(p.pitch)}</p>
        <p class="hero-stack">${p.stack.map(esc).join(" · ")}</p>
        <div class="btn-row">
          <a href="${p.resume}" class="btn" download>resume.pdf ↓</a>
          <a href="mailto:${p.email}" class="btn secondary">email_me →</a>
          <a href="${p.links.github}" class="btn secondary" target="_blank" rel="noopener noreferrer">github ↗</a>
        </div>
      </div>`
    );
  }

  /* ---- ABOUT + STATS ------------------------------------------------- */
  function about() {
    set("about-body", P.about.paragraphs.map((t) => `<p>${esc(t)}</p>`).join(""));
    set(
      "stat-grid",
      P.stats
        .map(
          (s) =>
            `<div class="stat"><div class="num">${esc(s.value)}</div><div class="label">${esc(s.label)}</div></div>`
        )
        .join("")
    );
  }

  /* ---- SKILLS -------------------------------------------------------- */
  function skills() {
    set(
      "skills",
      P.skills
        .map(
          (g) =>
            `<div class="skill-group"><p class="skill-label">${esc(g.label)}</p>${tags(g.items)}</div>`
        )
        .join("")
    );
  }

  /* ---- PROJECT / SHOWCASE CARDS -------------------------------------- */
  function cardHTML(item, i) {
    const flag = item.flag ? `<span class="flag">${item.flag}</span>` : "";
    const badge = item.badge ? `<span class="badge">${esc(item.badge)}</span>` : "";
    const links = [];
    if (item.detail)
      links.push(`<a class="arrow-link" href="${item.detail}">learn_more →</a>`);
    if (item.live)
      links.push(
        `<a class="arrow-link" href="${item.live}" target="_blank" rel="noopener noreferrer">view_live ↗</a>`
      );
    if (item.source)
      links.push(
        `<a class="muted" href="${item.source}" target="_blank" rel="noopener noreferrer">view_source ↗</a>`
      );
    return `
      <article class="card">
        <div class="card-index">_${pad(i + 1)}</div>
        <h3>${esc(item.name)}${flag}${badge}</h3>
        <p>${esc(item.description)}</p>
        ${tags(item.tags)}
        <div class="card-links">${links.join("")}</div>
      </article>`;
  }

  function projects() {
    set("projects", P.projects.map(cardHTML).join(""));
  }
  function showcase() {
    set("showcase", P.showcase.map(cardHTML).join(""));
  }

  /* ---- EXPERIENCE ---------------------------------------------------- */
  function expHTML(e, opts) {
    const loc = e.location ? ` <span class="loc">· ${esc(e.location)}</span>` : "";
    const body =
      opts && opts.full && e.bullets
        ? `<ul class="exp-bullets">${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
        : `<p class="exp-summary">${esc(e.summary)}</p>`;
    return `
      <div class="exp">
        <div class="exp-date">${esc(e.date)}</div>
        <div>
          <div class="exp-role">${esc(e.role)}</div>
          <div class="exp-org">${esc(e.org)}${loc}</div>
          ${body}
        </div>
      </div>`;
  }

  function experience(opts) {
    opts = opts || {};
    const mount = opts.mount || "experience";
    const items = P.experience.filter((e) => {
      if (opts.only === "education") return e.isEducation;
      if (opts.excludeEducation) return !e.isEducation;
      return true;
    });
    set(mount, items.map((e) => expHTML(e, opts)).join(""));
  }

  /* ---- CERTIFICATIONS ------------------------------------------------ */
  function certifications() {
    set(
      "certifications",
      P.certifications
        .map((c) => {
          const verify = c.verify
            ? `<a class="cert-verify arrow-link" href="${c.verify}" target="_blank" rel="noopener noreferrer">verify_credential →</a>`
            : "";
          return `
        <div class="cert">
          <div class="cert-issuer">${esc(c.issuer)}</div>
          <div class="cert-head">
            <span class="cert-name">${esc(c.name)}</span>
            <span class="cert-date">${esc(c.date)}</span>
          </div>
          <p>${esc(c.description)}</p>
          ${tags(c.tags)}
          ${verify}
        </div>`;
        })
        .join("")
    );
  }

  /* ---- CONTACT ------------------------------------------------------- */
  function contact() {
    const p = P.profile;
    set(
      "contact-mount",
      `
      <h2 class="contact-headline">${P.contact.headlineLines
        .map((l) => `<span class="line">${esc(l)}</span>`)
        .join("")}</h2>
      <p class="contact-blurb">${esc(P.contact.blurb)}</p>
      <div class="btn-row">
        <a href="mailto:${p.email}" class="btn">say_hello →</a>
        ${p.phone ? `<a href="tel:${p.phone.replace(/\s+/g, "")}" class="btn secondary">call ↗</a>` : ""}
        <a href="${p.links.linkedin}" class="btn secondary" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
        <a href="${p.links.github}" class="btn secondary" target="_blank" rel="noopener noreferrer">github ↗</a>
      </div>`
    );
  }

  /* ---- LIST BLOCKS (about page) -------------------------------------- */
  function bulletList(id, arr) {
    // arr items may contain intentional inline HTML (<strong>) — not escaped.
    set(id, `<ul class="feature-list">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`);
  }

  /* ---- WORDMARK + FOOTER (shared) ------------------------------------ */
  function chrome() {
    document.querySelectorAll("[data-wordmark]").forEach((n) => {
      n.textContent = P.profile.wordmark;
    });
    const p = P.profile;
    set(
      "footer-mount",
      `
      <span>© ${new Date().getFullYear()} ${esc(p.name)} · built with precision</span>
      <div class="footer-links">
        <a href="mailto:${p.email}">email</a>
        <a href="${p.links.github}" target="_blank" rel="noopener noreferrer">github</a>
        <a href="${p.links.linkedin}" target="_blank" rel="noopener noreferrer">linkedin</a>
      </div>`
    );
  }

  /* ---- expose -------------------------------------------------------- */
  window.RENDER = {
    hero, about, skills, projects, showcase, experience,
    certifications, contact, bulletList, chrome,
  };
})();
