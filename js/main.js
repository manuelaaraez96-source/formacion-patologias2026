/* =========================================================================
   MOTOR DE LA LANDING — renderiza la página a partir de config.js
   Normalmente no necesitas editar este archivo. Edita config.js.
   ========================================================================= */
(function () {
  "use strict";

  // Pequeños ayudantes
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  };

  // Iconos SVG de redes sociales (inline para no depender de librerías)
  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.43 8.85 3.42 9.2 3.42 12s0 3.15.07 4.39c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.07-1.24.07-1.59.07-4.39s0-3.15-.07-4.39c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-1.96a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"/></svg>',
    linkedin:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9V9Z"/></svg>',
    facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>',
    twitter:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.57L23 22h-6.84l-5.36-7-6.13 7H1.5l8.02-9.17L1 2h7l4.85 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z"/></svg>',
    youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.3-.42-4.88a2.55 2.55 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.78.32a2.55 2.55 0 0 0-1.8 1.8C1 8.7 1 12 1 12s0 3.3.42 4.88c.23.86.91 1.54 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.78-.32a2.55 2.55 0 0 0 1.8-1.8C23 15.3 23 12 23 12Zm-13 3.2V8.8l5.5 3.2-5.5 3.2Z"/></svg>',
    web:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  };

  // Iconos de línea (estilo eventos.jaldun.com) para tarjetas y datos del evento
  const UI_ICONS = {
    graduation:  '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>',
    users:       '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    puzzle:      '<path d="M9.5 3a1.8 1.8 0 0 1 3.5.6c0 .6.5 1 1 1h2.2c.6 0 1 .4 1 1V8c0 .6.4 1 1 1a1.8 1.8 0 0 1 .6 3.5c-.6.2-1.6 0-1.6.9V16a1 1 0 0 1-1 1h-2.4c-.9 0-1.1-1-.9-1.6a1.8 1.8 0 0 0-3.5-1c-.2.6.1 1.6-.8 1.6H6a1 1 0 0 1-1-1v-2.4c0-.9-1-.7-1.6-.5A1.8 1.8 0 0 1 2.8 8.5c.6-.2 1.6 0 1.6-.9V5a1 1 0 0 1 1-1h2.5c.6 0 .9-.5.9-1Z"/>',
    target:      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    calendar:    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    clock:       '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    pin:         '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    scissors:    '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.5 15.5M14.5 14.5 20 20M8.5 8.5 12 12"/>',
    food:        '<path d="M4 3v7a2 2 0 0 0 4 0V3M6 3v18"/><path d="M18 3a3 3 0 0 0-3 3v5h3"/><path d="M18 11v10"/>',
    award:       '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    ticket:      '<path d="M4 6a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4V8a2 2 0 0 0-2-2Z"/><path d="M13 6v12"/>',
    euro:        '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5A4 4 0 0 0 9 12a4 4 0 0 0 6.5 3.5M7.5 11h5M7.5 13h5"/>',
    search:      '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    stethoscope: '<path d="M4 3v6a5 5 0 0 0 10 0V3"/><path d="M3 3h2M13 3h2"/><path d="M9 18a4 4 0 0 0 8 0v-3"/><circle cx="20" cy="13" r="2"/>',
    heart:       '<path d="M12 21s-7.5-4.3-7.5-9.5A4.2 4.2 0 0 1 12 7.2 4.2 4.2 0 0 1 19.5 11.5C19.5 16.7 12 21 12 21Z"/>',
    growth:      '<path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/><path d="M19 7h-3M19 7v3"/>',
  };
  function iconHTML(name) {
    const p = UI_ICONS[name];
    if (!p) return name; // si no es un icono conocido, se muestra tal cual (emoji/texto)
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* ====================================================================
     RENDERIZADO POR SECCIONES
     ==================================================================== */

  function renderSEO(c) {
    const s = c.seo;
    document.title = s.titulo;
    const tituloCompartir = s.tituloCompartir || s.titulo;
    const setMeta = (sel, val) => { const m = $(sel); if (m && val != null) m.setAttribute("content", val); };
    setMeta('meta[name="description"]', s.descripcion);
    setMeta('meta[property="og:title"]', tituloCompartir);
    setMeta('meta[property="og:description"]', s.descripcion);
    setMeta('meta[property="og:image"]', s.imagenCompartir);
    setMeta('meta[property="og:url"]', s.url);
    setMeta('meta[name="twitter:title"]', tituloCompartir);
    setMeta('meta[name="twitter:description"]', s.descripcion);
    setMeta('meta[name="twitter:image"]', s.imagenCompartir);
  }

  function renderMarca(c) {
    const m = c.marca;
    const logoHTML = m.logoImagen
      ? `<img src="${m.logoImagen}" alt="${m.nombre}">`
      : m.logoTexto;
    const nav = $("#nav-logo"); if (nav) nav.innerHTML = logoHTML;
    const foot = document.getElementById("footer-logo");
    if (foot) foot.innerHTML = m.logoImagen ? `<img src="${m.logoImagen}" alt="${m.nombre}">` : (m.logoTexto || m.nombre);
  }

  function renderHero(c) {
    const h = c.hero;
    setText("hero-badge", h.etiqueta);
    // Título con resalte lavanda en la parte indicada (h.resalte)
    const titleEl = document.getElementById("hero-title");
    if (titleEl) {
      let t = h.titulo || "";
      if (h.resalte && t.indexOf(h.resalte) !== -1) {
        t = t.replace(h.resalte, `<mark class="hl">${h.resalte}</mark>`);
      }
      if (h.ligero && t.indexOf(h.ligero) !== -1) {
        t = t.replace(h.ligero, `<span class="hero__title-light">${h.ligero}</span>`);
      }
      titleEl.innerHTML = t;
    }
    setText("hero-subtitle", h.subtitulo);
    setText("hero-cta", h.textoBoton);
    // Botón secundario opcional (estilo "Ver temario" de eventos.jaldun.com)
    const cta2 = document.getElementById("hero-cta2");
    if (cta2) {
      if (h.textoBotonSecundario) cta2.textContent = h.textoBotonSecundario;
      else cta2.style.display = "none";
    }
    const img = $("#hero-image");
    if (img) { img.src = h.imagen; img.alt = h.imagenAlt || h.titulo; }

    // Datos clave como píldoras con icono (borde redondeado, sin separadores)
    const meta = $("#hero-meta");
    const metaItems = [
      { icono: "calendar", v: h.fecha },
      { icono: "clock",    v: h.hora },
      { icono: "users",    v: h.modalidad },
      { icono: "pin",      v: h.ciudad },
    ].filter(p => p.v);
    meta.innerHTML = "";
    metaItems.forEach(p => meta.appendChild(el("div", "hero__meta-item",
      `<span class="hero__meta-icon">${iconHTML(p.icono)}</span><span class="hero__meta-value">${p.v}</span>`)));
  }

  function renderTicker(c) {
    const t = $("#ticker");
    if (!t) return;
    const h = c.hero;
    const items = [h.modalidad, c.marca.nombre, h.ciudad, h.fecha].filter(Boolean);
    const oneSet = items.map(x => `<span class="ticker__item">${x}</span>`).join("");
    // Se repite para llenar el ancho y se duplica (mitad + mitad) para un bucle continuo sin huecos
    const half = oneSet.repeat(4);
    t.innerHTML = '<div class="ticker__track">' + half + half + '</div>';
  }

  function initCountdown(c) {
    const box = $("#countdown");
    if (!box || !c.hero.cuentaAtras) return;
    const target = new Date(c.hero.cuentaAtras).getTime();
    if (isNaN(target)) { box.style.display = "none"; return; }

    const units = [
      { k: "días",  ms: 86400000 },
      { k: "horas", ms: 3600000 },
      { k: "min",   ms: 60000 },
      { k: "seg",   ms: 1000 },
    ];
    box.innerHTML = units.map(u =>
      `<div class="cd"><span class="cd__num" data-k="${u.k}">--</span><span class="cd__lbl">${u.k}</span></div>`
    ).join("");

    const nums = {};
    box.querySelectorAll(".cd__num").forEach(n => { nums[n.dataset.k] = n; });

    let timer;
    function tick() {
      let diff = target - Date.now();
      if (diff <= 0) {
        box.innerHTML = '<div class="cd cd--done">¡La formación ya ha comenzado!</div>';
        if (timer) clearInterval(timer);
        return;
      }
      units.forEach(u => {
        const v = Math.floor(diff / u.ms);
        diff -= v * u.ms;
        if (nums[u.k]) nums[u.k].textContent = String(v).padStart(2, "0");
      });
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  function renderPatologiasGaleria(c) {
    const p = c.patologiasGaleria;
    if (!p) return;
    const eyebrow = document.getElementById("patologias-eyebrow");
    if (eyebrow) { if (p.etiqueta) eyebrow.textContent = p.etiqueta; else eyebrow.style.display = "none"; }
    setText("patologias-title", p.titulo);
    const subtitle = document.getElementById("patologias-subtitle");
    if (subtitle) { if (p.subtitulo) subtitle.textContent = p.subtitulo; else subtitle.style.display = "none"; }
    const grid = $("#patologias-grid");
    p.lista.forEach(item => {
      grid.appendChild(el("div", "patho-card reveal",
        `<img class="patho-card__img" src="${item.imagen}" alt="${item.titulo}" loading="lazy">
         <h3 class="patho-card__title">${item.titulo}</h3>`));
    });
  }

  function renderSobre(c) {
    const s = c.sobreCurso;
    setText("sobre-title", s.titulo);
    setText("sobre-desc", s.descripcion);
    const grid = $("#sobre-bloques");
    s.bloques.forEach(b => {
      grid.appendChild(el("div", "card reveal",
        `<div class="card__icon">${iconHTML(b.icono)}</div>
         <h3 class="card__title">${b.titulo}</h3>
         <p class="card__text">${b.texto}</p>`));
    });
  }

  function renderTemario(c) {
    const t = c.temario;
    const eyebrow = document.getElementById("temario-eyebrow");
    if (eyebrow) { if (t.etiqueta) eyebrow.textContent = t.etiqueta; else eyebrow.style.display = "none"; }
    setText("temario-title", t.titulo);
    setText("temario-subtitle", t.subtitulo);
    const grid = $("#temario-grid");
    t.temas.forEach(tema => {
      grid.appendChild(el("div", "topic",
        `<span class="topic__num">${tema.numero}</span>
         <h3 class="card__title">${tema.titulo}</h3>
         <p class="card__text">${tema.texto}</p>`));
    });
    const nota = document.getElementById("temario-nota");
    if (nota) { if (t.nota) nota.textContent = t.nota; else nota.style.display = "none"; }
  }

  function socialLinks(redes, baseClass) {
    if (!redes) return "";
    return Object.entries(redes)
      .filter(([k, url]) => url && ICONS[k])
      .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`)
      .join("");
  }

  function renderPonentes(c) {
    const p = c.ponentes;
    setText("ponentes-title", p.titulo);
    setText("ponentes-subtitle", p.subtitulo);
    const grid = $("#ponentes-grid");
    p.lista.forEach(po => {
      const redes = socialLinks(po.redes);
      grid.appendChild(el("div", "speaker reveal",
        `<img class="speaker__photo" src="${po.foto}" alt="${po.nombre}" loading="lazy"
              onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22116%22 height=%22116%22%3E%3Crect width=%22116%22 height=%22116%22 fill=%22%23eeeefe%22/%3E%3C/svg%3E'">
         <div class="speaker__eyebrow">${po.etiqueta || "Ponente"}</div>
         <h3 class="speaker__name">${po.nombre}</h3>
         ${po.bio ? `<p class="speaker__bio">${po.bio}</p>` : ""}
         ${redes ? `<div class="speaker__social">${redes}</div>` : ""}`));
    });
  }

  function renderEvento(c) {
    const e = c.evento;
    setText("evento-title", e.titulo);
    setText("evento-subtitle", e.subtitulo);
    const grid = $("#evento-grid");
    e.datos.forEach(d => {
      grid.appendChild(el("div", "fact",
        `<div class="fact__icon">${iconHTML(d.icono)}</div>
         <div class="fact__label">${d.etiqueta}</div>
         ${d.enlace
           ? `<a class="btn btn--ghost-light btn--sm fact__cta" href="${d.enlace.href}">${d.enlace.texto}</a>`
           : `<div class="fact__value">${d.valor}</div>`}`));
    });
  }

  function renderCondiciones(c) {
    const cd = c.condiciones;
    if (!cd) return;
    setText("condiciones-eyebrow", cd.etiqueta || "");
    setText("condiciones-title", cd.titulo);
    const subtitle = document.getElementById("condiciones-subtitle");
    if (subtitle) { if (cd.subtitulo) subtitle.textContent = cd.subtitulo; else subtitle.style.display = "none"; }
    const grid = $("#condiciones-grid");
    if (grid && Array.isArray(cd.opciones)) {
      grid.innerHTML = "";
      cd.opciones.forEach(o => {
        grid.appendChild(el("div", "price-card" + (o.featured ? " price-card--featured" : ""),
          `<span class="price-card__opt">${o.etiqueta}</span>
           <h3 class="price-card__title">${o.titulo}</h3>
           <div class="price-card__amount">${o.precio}</div>
           <p class="price-card__desc">${o.descripcion}</p>
           ${o.destacado ? `<div class="price-card__highlight">${o.destacado}</div>` : ""}`));
      });
    }
    const nota = document.getElementById("condiciones-nota");
    if (nota) { if (cd.nota) nota.textContent = cd.nota; else nota.style.display = "none"; }
  }

  function renderFormulario(c) {
    const f = c.formulario;
    setText("form-title", f.titulo);
    setText("form-subtitle", f.subtitulo);
    setText("hero-cta", c.hero.textoBoton);

    // Elementos de jerarquía del formulario (etiqueta, badge, beneficios, etiqueta del form)
    const hideIfEmpty = (id, val) => {
      const el2 = document.getElementById(id);
      if (!el2) return;
      if (val) el2.textContent = val; else el2.style.display = "none";
    };
    hideIfEmpty("form-eyebrow", f.etiqueta);
    hideIfEmpty("form-badge", f.badge);
    hideIfEmpty("form-embed-label", f.etiquetaForm);

    const benefitsEl = document.getElementById("form-benefits");
    if (benefitsEl) {
      if (Array.isArray(f.beneficios) && f.beneficios.length) {
        const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
        benefitsEl.innerHTML = f.beneficios.map(b => `<li>${check}<span>${b}</span></li>`).join("");
      } else {
        benefitsEl.style.display = "none";
      }
    }

    // Inyecta el formulario embebido (iframe del sistema de Jaldún)
    const mount = $("#form-embed");
    if (!mount || !f.iframeSrc) return;

    const id = f.iframeId || "jaldun-form";
    // Iframe SIMPLE, SIN el script form_embed.js de GoHighLevel.
    // Ese script forzaba el formulario a modo "popup" (con botón ✕) dentro de una
    // caja de ~500px con scroll interno (malo para conversión) y le ponía anchos en
    // píxeles que se salían de la tarjeta. Cargando el formulario directamente se
    // muestra como página completa (≈998px de alto) y el CSS le da una altura fija
    // que lo contiene SIN scroll interno. Si en el futuro cambias el formulario y su
    // alto varía, ajusta la altura en css/styles.css (#form-embed iframe).
    mount.innerHTML =
      `<iframe src="${f.iframeSrc}"
        style="width:100%;border:none;background:transparent;display:block"
        id="inline-${id}"
        title="${f.titulo}"
        loading="lazy"></iframe>`;
  }

  function renderFooter(c) {
    const f = c.footer;
    setText("footer-desc", f.descripcion);
    setText("footer-contacto", f.contacto);
    const email = $("#footer-email");
    if (email) { email.textContent = f.email; email.href = "mailto:" + f.email; }
    const phone = $("#footer-phone");
    if (phone) { phone.textContent = f.telefono; phone.href = "tel:" + f.telefono.replace(/\s/g, ""); }
    const web = $("#footer-web");
    if (web) { web.textContent = f.web; web.href = f.web.startsWith("http") ? f.web : "https://" + f.web; }
    $("#footer-social").innerHTML = socialLinks(f.redes);
    const links = $("#footer-links");
    f.enlaces.forEach(l => {
      const a = el("a", null, l.texto); a.href = l.url; links.appendChild(a);
    });
    setText("footer-copy", "© " + new Date().getFullYear() + " " + f.copyright);
  }

  function renderSchema(c) {
    const data = {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": c.hero.titulo,
      "description": c.seo.descripcion,
      "startDate": "",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": { "@type": "Place", "name": c.hero.ciudad },
      "image": [c.seo.imagenCompartir],
      "organizer": { "@type": "Organization", "name": c.marca.nombre, "url": c.seo.url }
    };
    const tag = $("#schema-event");
    if (tag) tag.textContent = JSON.stringify(data, null, 2);
  }

  /* ====================================================================
     INTERACCIONES GLOBALES
     ==================================================================== */

  function initScroll() {
    const nav = $("#navbar");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(i => io.observe(i));
  }

  /* ====================================================================
     ARRANQUE
     ==================================================================== */
  function init() {
    if (typeof CONFIG === "undefined") {
      console.error("No se ha cargado config.js");
      return;
    }
    renderSEO(CONFIG);
    renderMarca(CONFIG);
    renderHero(CONFIG);
    renderTicker(CONFIG);
    renderPatologiasGaleria(CONFIG);
    renderSobre(CONFIG);
    renderTemario(CONFIG);
    renderPonentes(CONFIG);
    renderEvento(CONFIG);
    renderCondiciones(CONFIG);
    renderFormulario(CONFIG);
    renderFooter(CONFIG);
    renderSchema(CONFIG);

    initScroll();
    initReveal();
    initCountdown(CONFIG);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
