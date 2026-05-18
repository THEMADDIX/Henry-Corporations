/* ================================================================
   Henry Corporation — Rendering & Interactions
   Reads all content from HC (data.js) and builds the page.
   ================================================================ */

// ── Shared SVG Icons ─────────────────────────────────────────────
const I = {
  arrow:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  check:   `<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  wa:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"/></svg>`,
  waLg:    `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"/></svg>`,
  phone:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  pin:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  trend:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  checkOk: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
};

function waHref(msg) {
  return `https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(msg)}`;
}

// ── Meta / SEO ────────────────────────────────────────────────────
function renderMeta() {
  const m = HC.meta;
  const c = HC.company;
  document.title = m.title;
  setMeta('name',     'description', m.description);
  setMeta('name',     'keywords',    m.keywords);
  setMeta('property', 'og:type',     'website');
  setMeta('property', 'og:title',    m.ogTitle);
  setMeta('property', 'og:description', m.ogDescription);
  setMeta('property', 'og:locale',   'en_IN');
  const schema = {
    '@context':   'https://schema.org',
    '@type':      'ProfessionalService',
    name:         c.name,
    description:  m.description,
    telephone:    c.phone,
    email:        c.email,
    areaServed:   ['IN', 'AE'],
    serviceType:  ['E-Commerce Account Management', 'GST Filing', 'Accounting', 'UAE VAT', 'Bookkeeping'],
    knowsAbout:   ['Amazon Seller Management', 'Flipkart Seller Services', 'Meesho GST', 'E-commerce Compliance India'],
  };
  const ld = document.getElementById('schema-ld');
  if (ld) ld.textContent = JSON.stringify(schema, null, 2);
}

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

// ── Nav ───────────────────────────────────────────────────────────
function renderNav() {
  const c = HC.company;
  const links  = HC.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');
  const mLinks = HC.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');
  document.getElementById('nav-root').innerHTML = `
    <a href="#" class="nav-logo" aria-label="${c.name} Home">
      <div class="logo-icon" aria-hidden="true">${c.brandLetter}</div>
      <span class="logo-text">Henry <span>Corp</span></span>
    </a>
    <div class="nav-links" role="list">${links}</div>
    <a href="#contact" class="btn btn-primary btn-sm nav-cta">Get Free Consultation</a>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>`;
  document.getElementById('mobile-nav').innerHTML = `
    ${mLinks}
    <a href="#contact" class="m-cta btn btn-sm">📞 Get Free Consultation</a>`;
}

// ── Hero ──────────────────────────────────────────────────────────
function renderHero() {
  const h = HC.hero;
  const trust = h.trustItems.map(t => `
    <div class="hero-trust-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${'#F59E0B'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${t.label}</span>
    </div>`).join('');
  const metrics = h.dashMetrics.map(m => `
    <div class="d-metric">
      <div class="d-metric-lbl">${m.label}</div>
      <div class="d-metric-val${m.label === 'GST Compliance' ? ' gold' : ''}">${m.value}</div>
      <div class="d-metric-delta">&#8593; ${m.delta}</div>
    </div>`).join('');
  const mps = h.platforms.map(p => `<div class="mp-chip">${p}</div>`).join('');

  return `
<section class="hero" aria-label="Hero">
  <div class="container hero-inner">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="hero-badge" role="text"><span class="badge-dot" aria-hidden="true"></span>${h.badge}</div>
        <h1 class="hero-h1">${h.title}</h1>
        <p class="hero-sub">${h.sub}</p>
        <div class="cta-group">
          <a href="${h.ctaHref}" class="btn btn-primary btn-lg">${I.arrow} ${h.ctaText}</a>
          <a href="${waHref(h.waMsg)}" target="_blank" rel="noopener" class="btn btn-outline-white btn-lg">${I.wa} ${h.waText}</a>
        </div>
        <div class="hero-trust" aria-label="Trust indicators">${trust}</div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="float-card fc-tl">
          <div class="fc-icon green-bg">${I.checkOk}</div>
          <div>
            <div class="fc-lbl">${h.badge1.label}</div>
            <div class="fc-val">${h.badge1.val}</div>
          </div>
        </div>
        <div class="hero-dash">
          <div class="dash-head">
            <div class="dash-live"><span class="live-dot"></span>Seller Dashboard · Live</div>
            <div class="dash-dots"><span></span><span></span><span></span></div>
          </div>
          <div class="dash-metrics">${metrics}</div>
          <div class="dash-chart">
            <div class="dash-chart-head">
              <strong>Sales Performance</strong>
              <span class="c-badge">${h.chartBadge}</span>
            </div>
            <div class="chart-bars">
              <div class="bar"></div><div class="bar"></div><div class="bar"></div>
              <div class="bar hi"></div><div class="bar"></div>
              <div class="bar hi"></div><div class="bar"></div>
            </div>
          </div>
          <div class="dash-mps">${mps}</div>
        </div>
        <div class="float-card fc-bl">
          <div class="fc-icon gold-bg">${I.trend}</div>
          <div>
            <div class="fc-lbl">${h.badge2.label}</div>
            <div class="fc-val">${h.badge2.val}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ── Trust Bar ─────────────────────────────────────────────────────
function renderTrustBar() {
  const logos = `
    <span class="mp-logo mp-amazon"  title="Amazon India">amazon</span>
    <span class="mp-logo mp-flipkart"title="Flipkart">flipkart</span>
    <span class="mp-logo mp-meesho"  title="Meesho">meesho</span>
    <span class="mp-logo mp-myntra"  title="Myntra">myntra</span>
    <span class="mp-logo mp-shopsy"  title="Shopsy">shopsy</span>`;
  return `
<div class="trust-bar" aria-label="Trusted marketplace partners">
  <div class="container">
    <div class="trust-bar-inner">
      <span class="trust-label">Marketplace Partners</span>
      <div class="trust-sep" aria-hidden="true"></div>
      <div class="mp-logos" role="list">${logos}</div>
      <div class="trust-sep" aria-hidden="true"></div>
      <span class="trust-label">GST & Tax Compliant</span>
      <div class="trust-sep" aria-hidden="true"></div>
      <span class="trust-label">500+ Sellers Served</span>
    </div>
  </div>
</div>`;
}

// ── Marquee ───────────────────────────────────────────────────────
function renderMarquee() {
  const pills = [...HC.marquee, ...HC.marquee].map(m =>
    `<div class="m-pill"><span class="dot" style="background:${m.color};" aria-hidden="true"></span>${m.name}</div>`
  ).join('');
  return `
<div class="marquee-wrap" aria-hidden="true">
  <div class="marquee-track">${pills}</div>
</div>`;
}

// ── Stats ─────────────────────────────────────────────────────────
function renderStats() {
  const items = HC.stats.map(s => `
    <div class="stat-item">
      <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">
        ${s.value}<span class="gold">${s.suffix}</span>
      </div>
      <div class="stat-lbl">${s.label}</div>
    </div>`).join('');
  return `
<section class="stats-section" aria-label="Company statistics">
  <div class="container">
    <div class="stats-grid">${items}</div>
  </div>
</section>`;
}

// ── Services ──────────────────────────────────────────────────────
function renderServices() {
  const cats = HC.serviceCategories;
  const tabs = cats.map((c, i) => `
    <button class="svc-tab${i === 0 ? ' active' : ''}" data-tab="${c.id}" aria-selected="${i === 0}" role="tab">
      ${c.label}
    </button>`).join('');

  const panels = cats.map((cat, i) => {
    const cards = cat.services.map(s => `
      <article class="svc-card reveal">
        <div class="svc-icon-box" aria-hidden="true">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="${s.link}" class="svc-cta-link">${s.linkText} ${I.arrow}</a>
      </article>`).join('');
    return `
    <div class="svc-panel${i === 0 ? ' active' : ''}" id="panel-${cat.id}" role="tabpanel">
      <div class="svc-grid">${cards}</div>
    </div>`;
  }).join('');

  return `
<section id="services" class="section" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-gold">Our Services</div>
      <h2 class="section-title" id="services-title">
        Everything Your <span class="highlight">E-Commerce Business</span> Needs
      </h2>
      <p class="section-sub">One team, one point of contact — handling your compliance, books, accounts and growth end to end.</p>
    </div>
    <div class="svc-tabs" role="tablist" aria-label="Service categories">${tabs}</div>
    ${panels}
  </div>
</section>`;
}

// ── Problems ──────────────────────────────────────────────────────
function renderProblems() {
  const cards = HC.problems.map(p => `
    <div class="prob-card reveal">
      <div class="prob-emoji" aria-hidden="true">${p.emoji}</div>
      <h4>${p.title}</h4>
    </div>`).join('');
  return `
<section id="platforms" class="section section-gray" aria-labelledby="problems-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-navy">We Solve This</div>
      <h2 class="section-title" id="problems-title">
        Facing Problems <span class="highlight">Managing Your Seller Business?</span>
      </h2>
      <p class="section-sub">These are the most common challenges faced by Indian e-commerce sellers every day. Henry Corporation solves all of them.</p>
    </div>
    <div class="problems-grid">${cards}</div>
    <div class="solution-block reveal">
      <h3>Henry Corporation Handles <span style="color:var(--gold)">Everything For You.</span></h3>
      <p>Stop losing sleep over GST notices, account suspensions and reconciliation issues. Let our expert team manage your complete seller operations while you focus on growing your business.</p>
      <div class="cta-group" style="justify-content:center;">
        <a href="#contact" class="btn btn-primary btn-lg">${I.arrow} Get Free Marketplace Audit</a>
        <a href="${waHref('Hi, I need help with my seller account')}" target="_blank" rel="noopener" class="btn btn-outline-white btn-lg">${I.wa} Talk to Expert Now</a>
      </div>
    </div>
  </div>
</section>`;
}

// ── Why Us ────────────────────────────────────────────────────────
function renderWhyUs() {
  const cards = HC.whyUs.map(w => `
    <div class="why-card reveal">
      <div class="why-icon" aria-hidden="true">${w.emoji}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>`).join('');
  return `
<section id="why-us" class="section" aria-labelledby="whyus-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-gold">Why Henry Corporation</div>
      <h2 class="section-title" id="whyus-title">
        The <span class="highlight">Smarter Choice</span> for E-Commerce Sellers
      </h2>
      <p class="section-sub">Over 500 Indian e-commerce sellers trust Henry Corporation to manage their business operations. Here's why.</p>
    </div>
    <div class="why-grid">${cards}</div>
  </div>
</section>`;
}

// ── Testimonials ──────────────────────────────────────────────────
function renderTestimonials() {
  const stars = n => '★'.repeat(n);
  const cards = HC.testimonials.map(t => `
    <article class="testi-card reveal">
      <div class="t-stars" aria-label="${t.stars} out of 5 stars">${stars(t.stars)}</div>
      <p class="t-quote">${t.quote}</p>
      <div class="t-author">
        <div class="t-avatar ${t.avatarClass}" aria-hidden="true">${t.initials}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </article>`).join('');
  return `
<section class="section section-gray" aria-labelledby="testi-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-navy">Client Reviews</div>
      <h2 class="section-title" id="testi-title">
        Real Results from <span class="highlight">Real Sellers</span>
      </h2>
      <p class="section-sub">Don't take our word for it. Here's what Indian e-commerce sellers say about working with Henry Corporation.</p>
    </div>
    <div class="testi-grid">${cards}</div>
  </div>
</section>`;
}

// ── Process ───────────────────────────────────────────────────────
function renderProcess() {
  const steps = HC.process.map(s => `
    <div class="process-step reveal">
      <div class="step-num" aria-hidden="true">${s.num}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>`).join('');
  return `
<section class="section section-alt" aria-labelledby="process-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-navy">How It Works</div>
      <h2 class="section-title" id="process-title">
        Get Started in <span class="highlight">4 Simple Steps</span>
      </h2>
      <p class="section-sub">From your first free consultation to full monthly management — here's how we onboard and run your seller operations.</p>
    </div>
    <div class="process-grid">${steps}</div>
  </div>
</section>`;
}

// ── Pricing ───────────────────────────────────────────────────────
function renderPricing() {
  const cards = HC.pricing.map(p => {
    const feats = p.features.map(f => `
      <li class="plan-feat">
        <span class="feat-check" aria-hidden="true">${I.check}</span>
        ${f}
      </li>`).join('');
    return `
    <div class="price-card${p.popular ? ' popular' : ''} reveal">
      ${p.popular ? `<span class="popular-tag">Most Popular</span>` : ''}
      <div class="plan-label">${p.name}</div>
      <div class="plan-price">${p.price}<sub>/mo</sub></div>
      <div class="plan-period">${p.period} · ${p.desc}</div>
      <ul class="plan-features">${feats}</ul>
      <a href="#contact" class="btn ${p.popular ? 'btn-navy' : 'btn-outline'} btn-full">
        ${I.arrow} Get Started
      </a>
      <p class="plan-note">No setup fee · Cancel anytime</p>
    </div>`;
  }).join('');
  return `
<section id="pricing" class="section" aria-labelledby="pricing-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-gold">Pricing Plans</div>
      <h2 class="section-title" id="pricing-title">
        Simple, <span class="highlight">Transparent Pricing</span>
      </h2>
      <p class="section-sub">Choose the plan that matches your scale. All plans include a dedicated account manager and monthly reporting. No hidden charges.</p>
    </div>
    <div class="pricing-grid">${cards}</div>
    <p style="text-align:center;margin-top:32px;font-size:14px;color:var(--text-muted);">
      Need a custom plan for enterprise accounts? <a href="#contact" style="color:var(--navy);font-weight:600;">Contact us →</a>
    </p>
  </div>
</section>`;
}

// ── CTA Banner ────────────────────────────────────────────────────
function renderCTA() {
  const c = HC.company;
  return `
<section class="cta-section" aria-labelledby="cta-title">
  <div class="container">
    <div class="tag tag-white" style="margin:0 auto 16px;">🚀 Start Growing Today</div>
    <h2 class="cta-title" id="cta-title">Ready to <span style="color:var(--gold)">Grow Your</span> E-Commerce Business?</h2>
    <p class="cta-sub">Join ${c.sellerCount}+ Indian sellers who let Henry Corporation handle compliance, books and operations — so they can focus entirely on selling more.</p>
    <div class="cta-group" style="justify-content:center;">
      <a href="#contact" class="btn btn-primary btn-lg">${I.arrow} Schedule Free Consultation</a>
      <a href="${waHref("Hi Henry Corporation, I want to grow my seller business")}" target="_blank" rel="noopener" class="btn btn-wa btn-lg">${I.wa} Chat on WhatsApp</a>
    </div>
  </div>
</section>`;
}

// ── FAQ ───────────────────────────────────────────────────────────
function renderFAQ() {
  const items = HC.faqs.map(f => `
    <div class="faq-item reveal">
      <button class="faq-q" aria-expanded="false">${f.q}</button>
      <div class="faq-a" role="region">${f.a}</div>
    </div>`).join('');
  return `
<section id="faq" class="section section-gray" aria-labelledby="faq-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-navy">FAQ</div>
      <h2 class="section-title" id="faq-title">
        Frequently Asked <span class="highlight">Questions</span>
      </h2>
      <p class="section-sub">Everything you need to know about working with Henry Corporation.</p>
    </div>
    <div class="faq-list" role="list">${items}</div>
  </div>
</section>`;
}

// ── Contact ───────────────────────────────────────────────────────
function renderContact() {
  const c  = HC.company;
  const cf = HC.contactForm;
  const mpOpts  = cf.marketplaces.map(m => `<option value="${m}">${m}</option>`).join('');
  const svcOpts = cf.services.map(s => `<option value="${s}">${s}</option>`).join('');
  return `
<section id="contact" class="section" aria-labelledby="contact-title">
  <div class="container">
    <div class="section-head reveal">
      <div class="tag tag-gold">Get In Touch</div>
      <h2 class="section-title" id="contact-title">
        Get Your <span class="highlight">Free Seller Consultation</span>
      </h2>
      <p class="section-sub">Tell us about your business and we will respond within one working day with a personalised plan.</p>
    </div>
    <div class="contact-grid">
      <div class="contact-info reveal">
        <div class="ci-head">
          <h3>Talk to a Specialist</h3>
          <p>Pick the channel that works best for you. Most replies happen within an hour during business hours.</p>
        </div>
        <a href="${c.phoneTel}" class="ci-channel">
          <div class="ci-icon ci-gold">${I.phone}</div>
          <div class="ci-txt"><strong>Call Us</strong><span>${c.phone}</span></div>
        </a>
        <a href="${waHref("Hi Henry Corporation, I'd like a free seller consultation")}" target="_blank" rel="noopener" class="ci-channel">
          <div class="ci-icon ci-green">${I.wa}</div>
          <div class="ci-txt"><strong>WhatsApp</strong><span>Chat instantly — fastest response</span></div>
        </a>
        <a href="mailto:${c.email}" class="ci-channel">
          <div class="ci-icon">${I.mail}</div>
          <div class="ci-txt"><strong>Email</strong><span>${c.email}</span></div>
        </a>
        <div class="ci-footer">
          <p>${I.clock} <strong>Hours:</strong> ${c.hours}</p>
          <p>${I.pin} <strong>Serving:</strong> ${c.location}</p>
        </div>
      </div>
      <div class="contact-form-box reveal">
        <div class="form-head">
          <h3>Send Us a Message</h3>
          <p>We'll review your details and get back with a customized proposal.</p>
        </div>
        <form id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-field"><label for="f-name">Your Name *</label><input id="f-name" type="text" name="name" placeholder="Full name" required autocomplete="name"/></div>
            <div class="form-field"><label for="f-biz">Business Name</label><input id="f-biz" type="text" name="business" placeholder="Your brand or shop" autocomplete="organization"/></div>
          </div>
          <div class="form-row">
            <div class="form-field"><label for="f-mob">Mobile Number *</label><input id="f-mob" type="tel" name="mobile" placeholder="+91 99999 99999" required autocomplete="tel"/></div>
            <div class="form-field"><label for="f-mp">Marketplace</label><select id="f-mp" name="marketplace"><option value="">Select marketplace</option>${mpOpts}</select></div>
          </div>
          <div class="form-field"><label for="f-svc">Service Needed</label><select id="f-svc" name="service"><option value="">Choose a service</option>${svcOpts}</select></div>
          <div class="form-field"><label for="f-msg">Message</label><textarea id="f-msg" name="message" placeholder="Tell us about your business and what you need help with…"></textarea></div>
          <button type="submit" class="form-submit-btn">Send Enquiry →</button>
          <p class="form-note">Or WhatsApp us directly — usually replies within the hour.</p>
        </form>
      </div>
    </div>
  </div>
</section>`;
}

// ── Footer ────────────────────────────────────────────────────────
function renderFooter() {
  const c  = HC.company;
  const fl = HC.footerLinks;
  const mkLinks = (arr) => arr.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  document.getElementById('footer-root').innerHTML = `
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="f-brand-logo">
          <div class="logo-icon" style="width:34px;height:34px;font-size:16px;" aria-hidden="true">${c.brandLetter}</div>
          <span class="logo-text">Henry <span>Corp</span></span>
        </div>
        <p class="f-desc">${c.footerDesc}</p>
      </div>
      <div class="footer-col"><h5>Services</h5><ul>${mkLinks(fl.services)}</ul></div>
      <div class="footer-col"><h5>Platforms</h5><ul>${mkLinks(fl.platforms)}</ul></div>
      <div class="footer-col"><h5>Company</h5><ul>${mkLinks(fl.company)}<li><a href="${c.phoneTel}">${c.phone}</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="yr"></span> ${c.name}. All rights reserved.</div>
      <div>${c.gstin}</div>
      <div>India & UAE · GST Compliant</div>
    </div>
  </div>`;
}

// ── Floating Elements ─────────────────────────────────────────────
function renderFloats() {
  const c = HC.company;
  document.getElementById('floats-root').innerHTML = `
  <a href="${waHref("Hi Henry Corporation, I'd like a free consultation")}" target="_blank" rel="noopener"
     class="float-wa" aria-label="Chat on WhatsApp">${I.waLg}</a>
  <div class="mobile-sticky-cta" aria-label="Mobile call to action">
    <a href="${c.phoneTel}" class="btn btn-outline btn-sm">${I.phone} Call Us</a>
    <a href="${waHref("Hi Henry Corporation, I need seller management help")}" target="_blank" rel="noopener" class="btn btn-wa btn-sm">${I.wa} WhatsApp</a>
  </div>`;
}

// ── Build Page ────────────────────────────────────────────────────
function renderPage() {
  document.getElementById('main-root').innerHTML = [
    renderHero(),
    renderTrustBar(),
    renderMarquee(),
    renderStats(),
    renderServices(),
    renderProblems(),
    renderWhyUs(),
    renderTestimonials(),
    renderProcess(),
    renderPricing(),
    renderCTA(),
    renderFAQ(),
    renderContact(),
  ].join('\n');
}

// ── Interactions ──────────────────────────────────────────────────
function initScrollNav() {
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initServiceTabs() {
  document.querySelectorAll('.svc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      document.querySelectorAll('.svc-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('panel-' + id);
      if (panel) {
        panel.classList.add('active');
        panel.querySelectorAll('.reveal').forEach(el => {
          el.classList.remove('in');
          setTimeout(() => el.classList.add('in'), 50);
        });
      }
    });
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('open');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-nav');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.mobile-nav a, .nav-links a').forEach(a =>
    a.addEventListener('click', () => { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); })
  );
}

function initStatCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let   cur    = 0;
      const inc    = target / (1400 / 16);
      const tick   = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.innerHTML = Math.floor(cur) + `<span class="gold">${suffix}</span>`;
        if (cur >= target) clearInterval(tick);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(el => obs.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const text = [
      "Hi Henry Corporation, I'd like a free seller consultation.",
      '',
      `Name: ${d.get('name')}`,
      `Business: ${d.get('business')}`,
      `Mobile: ${d.get('mobile')}`,
      `Marketplace: ${d.get('marketplace')}`,
      `Service: ${d.get('service')}`,
      `Message: ${d.get('message')}`,
    ].join('\n');
    window.open(`https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// ── Init ──────────────────────────────────────────────────────────
function init() {
  renderMeta();
  renderNav();
  renderPage();
  renderFooter();
  renderFloats();

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  initScrollNav();
  initReveal();
  initServiceTabs();
  initFAQ();
  initMobileMenu();
  initStatCounters();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', init);
