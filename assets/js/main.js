/* ================================================================
   Henry Corporation — Rendering & Interactions (ROEH-style)
   All content is read from HC in data.js — edit that file only.
   ================================================================ */

/* ── Icons ─────────────────────────────────────────────── */
const I = {
  arrow:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowDown: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  check:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  phone:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.03 1.22 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`,
  mail:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  wa:        `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  plus:      `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
};

function waHref(msg) {
  return `https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(msg)}`;
}

/* ── Meta / SEO ─────────────────────────────────────────── */
function renderMeta() {
  document.title = HC.meta.title;
  const setMeta = (name, content, prop) => {
    let el = document.querySelector(prop ? `meta[property="${name}"]` : `meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      prop ? el.setAttribute('property', name) : el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setMeta('description',   HC.meta.description);
  setMeta('keywords',      HC.meta.keywords);
  setMeta('og:title',      HC.meta.ogTitle,       true);
  setMeta('og:description',HC.meta.ogDescription, true);
  setMeta('og:type',       'website',             true);

  const schema = {
    '@context': 'https://schema.org',
    '@type':    'ProfessionalService',
    name:        HC.company.name,
    description: HC.meta.description,
    telephone:   HC.company.phoneTel,
    email:       HC.company.email,
    areaServed:  ['IN', 'AE'],
  };
  document.getElementById('schema-ld').textContent = JSON.stringify(schema);
}

/* ── Nav ────────────────────────────────────────────────── */
function renderNav() {
  document.getElementById('nav-root').innerHTML = `
    <a href="#" class="nav-logo" aria-label="${HC.company.name} home">
      <div class="nav-logo-mark">${HC.company.brandLetter}</div>
      <span class="nav-logo-text">${HC.company.shortName}</span>
    </a>
    <ul class="nav-links" role="list">
      ${HC.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
    </ul>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  `;
}

function renderMobileNav() {
  document.getElementById('mobile-nav').innerHTML = `
    ${HC.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
    <div class="mobile-nav-contact">
      <a href="${HC.company.phoneTel}">${HC.company.phone}</a>
      <a href="mailto:${HC.company.email}">${HC.company.email}</a>
    </div>
  `;
}

/* ── Hero ───────────────────────────────────────────────── */
function renderHero() {
  return `
    <section class="hero" id="home">
      <div class="hero-bg" id="hero-bg"></div>
      <div class="hero-headline-wrap">
        <h1 class="hero-headline">${HC.hero.title}</h1>
      </div>
      <div class="hero-bottom">
        <div class="reveal-left">
          <div class="hero-rule"></div>
          <p class="hero-sub">${HC.hero.sub}</p>
          <div class="hero-trust">
            ${HC.hero.trustItems.map(t => `<span class="hero-trust-item">${t.label}</span>`).join('')}
          </div>
        </div>
        <div class="reveal-right">
          <a href="${HC.hero.ctaHref}" class="btn-ghost">${HC.hero.ctaText} ${I.arrow}</a>
        </div>
      </div>
      <div class="hero-scroll" id="hero-scroll" aria-label="Scroll down">${I.arrowDown}</div>
    </section>
  `;
}

/* ── Marquee ────────────────────────────────────────────── */
function renderMarquee() {
  const items = [...HC.marquee, ...HC.marquee];
  return `
    <div class="trust-bar" aria-hidden="true">
      <div class="marquee-wrap">
        <div class="marquee-track">
          ${items.map(p => `
            <div class="m-pill">
              <span class="m-dot" style="background:${p.color}"></span>${p.name}
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── Stats ──────────────────────────────────────────────── */
function renderStats() {
  return `
    <div class="stats-section">
      <div class="container">
        <div class="stats-grid">
          ${HC.stats.map((s, i) => `
            <div class="stat-item reveal reveal-d${i + 1}">
              <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-lbl">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── Services Intro (top 3, white editorial) ────────────── */
function renderServicesIntro() {
  const featured = HC.serviceCategories[0].services.slice(0, 3);
  return `
    <section class="svc-intro section" id="services">
      <div class="container">
        <div class="svc-intro-header">
          <h2 class="section-title reveal-left">Specialized Services.<br>Unmatched Expertise.</h2>
          <div class="svc-intro-right reveal-right">
            <p class="section-sub">Henry Corporation delivers complete e-commerce and financial compliance — GST, accounting, marketplace management and business growth across India and the UAE.</p>
            <br>
            <a href="#platforms" class="link-text" style="color:var(--coral)">Explore All Services ${I.arrow}</a>
          </div>
        </div>
        <div class="svc-cols">
          ${featured.map((s, i) => `
            <div class="svc-col reveal reveal-d${i + 1}">
              <div class="svc-col-num">0${i + 1}</div>
              <h3 class="svc-col-title">${s.title}</h3>
              <p class="svc-col-desc">${s.desc}</p>
              <a href="${s.link}" class="link-text" style="color:var(--coral)">Learn More ${I.arrow}</a>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Full Tabbed Services (black section) ───────────────── */
function renderServices() {
  return `
    <section class="services-full" id="platforms">
      <div class="container">
        <div class="svc-tab-bar" role="tablist" aria-label="Service categories">
          ${HC.serviceCategories.map((c, i) => `
            <button class="svc-tab${i === 0 ? ' active' : ''}"
              role="tab" aria-selected="${i === 0}" data-tab="${c.id}">${c.label}</button>`).join('')}
        </div>
        ${HC.serviceCategories.map((c, i) => `
          <div class="svc-panel${i === 0 ? ' active' : ''}" role="tabpanel" id="panel-${c.id}">
            <div class="svc-panel-hdr">
              <h2 class="section-title reveal">${c.title}</h2>
              <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.52)">${c.sub}</p>
            </div>
            <div class="svc-grid-full">
              ${c.services.map((s, j) => `
                <div class="svc-card-full reveal reveal-d${j + 1}">
                  <div class="svc-card-n">0${j + 1}</div>
                  <h3 class="svc-card-title">${s.title}</h3>
                  <p class="svc-card-desc">${s.desc}</p>
                  <a href="${s.link}" class="svc-card-lnk">${s.linkText} ${I.arrow}</a>
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>
    </section>
  `;
}

/* ── Problems ───────────────────────────────────────────── */
function renderProblems() {
  return `
    <section class="problems-section">
      <div class="container">
        <div class="prob-hdr">
          <h2 class="section-title reveal">Struggling with these<br>common seller problems?</h2>
          <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.5)">Sound familiar? These are the exact challenges hundreds of Indian sellers face every month — until they find Henry Corporation.</p>
        </div>
        <div class="prob-grid">
          ${HC.problems.map((p, i) => `
            <div class="prob-card reveal reveal-d${(i % 4) + 1}">
              <div class="prob-emoji">${p.emoji}</div>
              <div class="prob-title">${p.title}</div>
            </div>`).join('')}
        </div>
        <div class="solution-block reveal">
          <div class="sol-content">
            <div class="sol-tag">The Henry Solution</div>
            <div class="sol-title">One team. Every problem. Solved.</div>
          </div>
          <div class="sol-actions">
            <a href="#contact" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
            <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Why Choose Us ──────────────────────────────────────── */
function renderWhyUs() {
  return `
    <section class="why-section" id="why-us">
      <div class="container">
        <div class="why-hdr">
          <h2 class="section-title reveal-left">Why 500+ Sellers<br>Choose Henry Corporation</h2>
          <p class="section-sub reveal-right" style="max-width:380px;margin-top:0">We're not just a compliance firm — we're your complete e-commerce operations partner.</p>
        </div>
        <div class="why-grid">
          ${HC.whyUs.map((w, i) => `
            <div class="why-card reveal reveal-d${(i % 4) + 1}">
              <div class="why-card-icon">${w.emoji}</div>
              <h3 class="why-card-title">${w.title}</h3>
              <p class="why-card-desc">${w.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Process ────────────────────────────────────────────── */
function renderProcess() {
  return `
    <section class="process-section">
      <div class="container">
        <div class="process-hdr">
          <h2 class="section-title reveal">From Sign-Up to Full<br>Management in Days</h2>
        </div>
        <div class="process-grid">
          ${HC.process.map((p, i) => `
            <div class="process-step reveal reveal-d${i + 1}">
              <div class="process-num">${p.num}</div>
              <h3 class="process-title">${p.title}</h3>
              <p class="process-desc">${p.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Testimonials ───────────────────────────────────────── */
function renderTestimonials() {
  return `
    <section class="testi-section">
      <div class="container">
        <div class="testi-hdr">
          <h2 class="section-title reveal">What Our Sellers Say</h2>
        </div>
        <div class="testi-grid">
          ${HC.testimonials.map((t, i) => `
            <div class="testi-card reveal reveal-d${(i % 3) + 1}">
              <div class="testi-stars">${'★'.repeat(t.stars).split('').map(s => `<span class="testi-star">${s}</span>`).join('')}</div>
              <p class="testi-quote">${t.quote}</p>
              <div class="testi-author">
                <div class="testi-avatar ${t.avatarClass}">${t.initials}</div>
                <div>
                  <div class="testi-name">${t.name}</div>
                  <div class="testi-role">${t.role}</div>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Pricing ────────────────────────────────────────────── */
function renderPricing() {
  return `
    <section class="pricing-section" id="pricing">
      <div class="container">
        <div class="pricing-hdr">
          <h2 class="section-title reveal">Simple, Transparent Pricing</h2>
          <p class="section-sub reveal reveal-d1">No hidden fees. No surprises. Choose a plan that fits your scale — upgrade anytime.</p>
        </div>
        <div class="pricing-grid">
          ${HC.pricing.map((p, i) => `
            <div class="price-card${p.popular ? ' popular' : ''} reveal reveal-d${i + 1}">
              ${p.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
              <div class="price-name">${p.name}</div>
              <div class="price-value">${p.price}</div>
              <div class="price-period">${p.period}</div>
              <p class="price-desc">${p.desc}</p>
              <ul class="plan-features">
                ${p.features.map(f => `
                  <li class="plan-feat">
                    <span class="plan-feat-chk">${I.check}</span>
                    <span>${f}</span>
                  </li>`).join('')}
              </ul>
              <a href="#contact" class="price-cta">Get Started ${I.arrow}</a>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── CTA Banner ─────────────────────────────────────────── */
function renderCTA() {
  return `
    <section class="cta-banner">
      <div class="container">
        <div class="cta-banner-inner">
          <h2 class="cta-banner-title reveal-left">Ready to take the complexity<br>out of your business?</h2>
          <div class="cta-banner-actions reveal-right">
            <a href="#contact" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
            <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── FAQ ────────────────────────────────────────────────── */
function renderFAQ() {
  return `
    <section class="faq-section section">
      <div class="container">
        <div class="faq-hdr">
          <h2 class="section-title reveal">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          ${HC.faqs.map(f => `
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                ${f.q}
                <span class="faq-icon">${I.plus}</span>
              </button>
              <div class="faq-a"><p>${f.a}</p></div>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Contact — ROEH 3-step slider ───────────────────────── */
function renderContact() {
  const steps = [
    { label: 'Step 1 of 3 — Your marketplace', title: 'Where do you sell?',            type: 'btns', key: 'marketplace', items: HC.contactForm.marketplaces },
    { label: 'Step 2 of 3 — Service needed',   title: 'What do you need help with?',   type: 'btns', key: 'service',     items: HC.contactForm.services },
    { label: 'Step 3 of 3 — Your details',     title: 'How should we reach you?',      type: 'form' },
  ];

  return `
    <section class="contact-section" id="contact">
      <div class="cs-left">
        <h2 class="cs-left-title reveal-left">Get in Touch<br>with Us</h2>
        <p class="cs-left-sub reveal-left reveal-d1">We're ready to handle your GST, accounts, marketplace management and growth — start with a free consultation.</p>
        <div class="cs-contact-info reveal-left reveal-d2">
          <div class="cs-info-item">
            <div class="cs-info-icon">${I.phone}</div>
            <div>
              <div class="cs-info-label">Phone / WhatsApp</div>
              <a class="cs-info-text" href="${HC.company.phoneTel}">${HC.company.phone}</a>
            </div>
          </div>
          <div class="cs-info-item">
            <div class="cs-info-icon">${I.mail}</div>
            <div>
              <div class="cs-info-label">Email</div>
              <a class="cs-info-text" href="mailto:${HC.company.email}">${HC.company.email}</a>
            </div>
          </div>
          <div class="cs-info-item">
            <div class="cs-info-icon">${I.clock}</div>
            <div>
              <div class="cs-info-label">Business Hours</div>
              <span class="cs-info-text">${HC.company.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="cs-right">
        <div class="cs-top">
          <span class="cs-counter" id="cs-counter">1 / 3</span>
        </div>
        <p class="cs-prompt" id="cs-prompt">${steps[0].label}</p>

        ${steps.map((step, idx) => `
          <div class="cs-slide${idx === 0 ? ' active' : ''}" data-step="${idx}">
            <h3 class="cs-slide-title">${step.title}</h3>
            ${step.type === 'btns' ? `
              <div class="cs-btn-list">
                ${step.items.map(item => `
                  <button class="cs-svc-btn" data-key="${step.key}" data-value="${item}">
                    ${item} ${I.arrow}
                  </button>`).join('')}
              </div>
            ` : `
              <div class="cs-form">
                <div class="cs-form-group">
                  <label class="cs-form-label" for="cs-name">Your Name</label>
                  <input class="cs-form-input" type="text" id="cs-name" placeholder="Rahul Sharma" />
                </div>
                <div class="cs-form-group">
                  <label class="cs-form-label" for="cs-phone">Phone / WhatsApp</label>
                  <input class="cs-form-input" type="tel" id="cs-phone" placeholder="+91 98765 43210" />
                </div>
                <div class="cs-form-group">
                  <label class="cs-form-label" for="cs-msg">Anything else?</label>
                  <input class="cs-form-input" type="text" id="cs-msg" placeholder="Monthly turnover, current issue..." />
                </div>
              </div>
            `}
          </div>`).join('')}

        <div class="cs-nav">
          <button class="cs-back-btn hidden" id="cs-back">← Back</button>
          <button class="cs-next-btn" id="cs-next">Next ${I.arrow}</button>
        </div>
      </div>
    </section>
  `;
}

/* ── Footer ─────────────────────────────────────────────── */
function renderFooter() {
  document.getElementById('footer-root').innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo-text">${HC.company.shortName}</div>
          <p class="footer-tagline">${HC.company.footerDesc.slice(0, 130)}…</p>
          <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener"
             style="font-size:0.7rem;padding:11px 20px">${I.wa} WhatsApp Us</a>
        </div>
        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            ${HC.footerLinks.services.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Platforms</div>
          <ul class="footer-links">
            ${HC.footerLinks.platforms.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            ${HC.footerLinks.company.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© <span id="footer-year"></span> ${HC.company.name}. All rights reserved.</div>
        <div class="footer-contact-links">
          <a href="${HC.company.phoneTel}">${HC.company.phone}</a>
          <a href="mailto:${HC.company.email}">${HC.company.email}</a>
        </div>
      </div>
    </div>
  `;
}

/* ── Floats ─────────────────────────────────────────────── */
function renderFloats() {
  document.getElementById('floats-root').innerHTML = `
    <a class="float-wa" href="${waHref(HC.hero.waMsg)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      ${I.wa}
    </a>
    <a class="mobile-sticky-cta" href="${HC.hero.ctaHref}">${HC.hero.ctaText} ${I.arrow}</a>
  `;
}

/* ── Page Assembly ──────────────────────────────────────── */
function renderPage() {
  document.getElementById('main-root').innerHTML = [
    renderHero(),
    renderMarquee(),
    renderStats(),
    renderServicesIntro(),
    renderServices(),
    renderProblems(),
    renderWhyUs(),
    renderProcess(),
    renderTestimonials(),
    renderPricing(),
    renderCTA(),
    renderFAQ(),
    renderContact(),
  ].join('');
}

/* ═══════════════════════════════════════════════
   INTERACTIONS
   ═══════════════════════════════════════════════ */

function initScrollNav() {
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initHeroHeadline() {
  const h = document.querySelector('.hero-headline');
  if (h) setTimeout(() => h.classList.add('in'), 180);
}

function initParallax() {
  const bg = document.getElementById('hero-bg');
  if (!bg) return;
  const onScroll = () => {
    if (window.scrollY < window.innerHeight * 1.5)
      bg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initHeroScroll() {
  const btn = document.getElementById('hero-scroll');
  if (btn) btn.addEventListener('click', () => {
    const target = document.querySelector('.trust-bar');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

function initServiceTabs() {
  document.querySelectorAll('.svc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      document.querySelectorAll('.svc-tab').forEach(t => {
        t.classList.remove('active'); t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`panel-${id}`);
      if (panel) {
        panel.classList.add('active');
        panel.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
          el.classList.remove('in');
          requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
        });
      }
    });
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
}

function initMobileMenu() {
  const btn = document.getElementById('nav-hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  const toggle = () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', toggle);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

function initStatCounters() {
  const items = document.querySelectorAll('.stat-num[data-target]');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const dur = 1800, step = 16;
      const inc = target / (dur / step);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + inc, target);
        el.textContent = Math.round(current).toLocaleString('en-IN') + suffix;
        if (current >= target) clearInterval(timer);
      }, step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  items.forEach(el => io.observe(el));
}

function initContactSlider() {
  let step = 0;
  const selections = {};
  const slides   = document.querySelectorAll('.cs-slide');
  const counter  = document.getElementById('cs-counter');
  const promptEl = document.getElementById('cs-prompt');
  const nextBtn  = document.getElementById('cs-next');
  const backBtn  = document.getElementById('cs-back');
  if (!nextBtn || !slides.length) return;

  const prompts = [
    'Step 1 of 3 — Your marketplace',
    'Step 2 of 3 — Service needed',
    'Step 3 of 3 — Your details',
  ];

  function goTo(n) {
    slides[step].classList.remove('active');
    step = n;
    slides[step].classList.add('active');
    counter.textContent  = `${step + 1} / 3`;
    promptEl.textContent = prompts[step];
    backBtn.classList.toggle('hidden', step === 0);
    nextBtn.innerHTML = step === 2
      ? `Send via WhatsApp ${I.wa}`
      : `Next ${I.arrow}`;
  }

  document.querySelectorAll('.cs-svc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      document.querySelectorAll(`.cs-svc-btn[data-key="${key}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selections[key] = btn.dataset.value;
    });
  });

  nextBtn.addEventListener('click', () => {
    if (step < 2) {
      goTo(step + 1);
    } else {
      const name  = document.getElementById('cs-name')?.value  || '';
      const phone = document.getElementById('cs-phone')?.value || '';
      const msg   = document.getElementById('cs-msg')?.value   || '';
      const text  = `Hi Henry Corporation!\n\nName: ${name}\nPhone: ${phone}\nMarketplace: ${selections.marketplace || '—'}\nService: ${selections.service || '—'}\nNote: ${msg}\n\nPlease get in touch!`;
      window.open(waHref(text), '_blank', 'noopener');
    }
  });

  backBtn.addEventListener('click', () => { if (step > 0) goTo(step - 1); });
}

/* ── Init ───────────────────────────────────────────────── */
function init() {
  renderMeta();
  renderNav();
  renderMobileNav();
  renderPage();
  renderFooter();
  renderFloats();

  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();

  initScrollNav();
  initHeroHeadline();
  initParallax();
  initHeroScroll();
  initReveal();
  initServiceTabs();
  initFAQ();
  initMobileMenu();
  initStatCounters();
  initContactSlider();
}

document.addEventListener('DOMContentLoaded', init);
