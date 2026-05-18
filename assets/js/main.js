/* ================================================================
   Henry Corporation — Rendering & Interactions
   Reads all content from data.js (HC object) and builds the page.
   ================================================================ */

// ── Shared SVG icons ─────────────────────────────────────────────
const ICO = {
  arrow:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  arrowLg:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  check:       `<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  wa:          `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"/></svg>`,
  waLg:        `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"/></svg>`,
  phone:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  trendUp:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  checkCircle: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  globe:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
};

function waHref(msg) {
  return `https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(msg)}`;
}

// ── Meta / SEO ────────────────────────────────────────────────────
function renderMeta() {
  const m = HC.meta;
  const c = HC.company;
  document.title = m.title;
  setMeta('name', 'description', m.description);
  setMeta('name', 'keywords', m.keywords);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:title', m.ogTitle);
  setMeta('property', 'og:description', m.ogDescription);
  setMeta('property', 'og:locale', 'en_IN');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: c.name,
    description: 'E-commerce seller management, GST, accounting and UAE VAT services for Amazon, Flipkart, Meesho, Shopsy and Myntra sellers.',
    telephone: c.phone,
    areaServed: ['IN', 'AE'],
    serviceType: ['GST Filing', 'E-commerce Account Management', 'UAE VAT', 'Bookkeeping'],
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
  const { shortName, brandLetter } = HC.company;
  const links = HC.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');
  const mLinks = HC.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');
  document.getElementById('nav-root').innerHTML = `
    <div class="nav">
      <div class="nav-inner">
        <a href="#" class="brand">
          <div class="brand-icon">${brandLetter}</div>
          ${shortName}
        </a>
        <div class="nav-links">${links}</div>
        <a href="#contact" class="btn btn-primary nav-cta">Get Started</a>
        <button class="menu-btn" id="menu-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      ${mLinks}
      <a href="#contact" class="btn btn-primary" style="text-align:center;border-radius:12px;justify-content:center;margin-top:6px;">Get Started</a>
    </div>`;
}

// ── Hero ──────────────────────────────────────────────────────────
function renderHero() {
  const h = HC.hero;
  const avatars = h.trustAvatars.map(a => `<span>${a}</span>`).join('');
  const metrics = h.dashMetrics.map(m => `
    <div class="metric">
      <div class="metric-label">${m.label}</div>
      <div class="metric-value">${m.value}</div>
      <div class="metric-delta">&#8593; ${m.delta}</div>
    </div>`).join('');
  const platforms = h.platforms.map(p => `<div class="plat-chip">${p}</div>`).join('');

  return `
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="eyebrow"><span class="pulse"></span> ${h.eyebrow}</div>
        <h1 class="hero-title">${h.title}</h1>
        <p class="hero-sub">${h.sub}</p>
        <div class="cta-row">
          <a href="${h.ctaHref}" class="btn btn-primary">${ICO.arrowLg} ${h.ctaText}</a>
          <a href="${waHref(h.waMsg)}" target="_blank" rel="noopener" class="btn btn-ghost">${ICO.wa} ${h.waText}</a>
        </div>
        <div class="hero-trust">
          <div class="avatars">${avatars}</div>
          <div class="trust-text"><strong>${h.trustText}</strong></div>
        </div>
      </div>
      <div class="dashboard-wrap">
        <div class="float-badge tl">
          <div class="badge-icon">${ICO.trendUp}</div>
          <div>
            <div class="badge-label">${h.badge1.label}</div>
            <div class="badge-val">${h.badge1.val}</div>
          </div>
        </div>
        <div class="dashboard">
          <div class="dash-header">
            <div class="dash-title"><span class="dash-dot"></span>Seller Dashboard &middot; Live</div>
            <div class="dash-actions"><span></span><span></span><span></span></div>
          </div>
          <div class="dash-metrics">${metrics}</div>
          <div class="dash-chart">
            <div class="chart-head">
              <strong>Sales Performance</strong>
              <span class="chart-badge">${h.chartBadge}</span>
            </div>
            <div class="chart-bars">
              <div class="bar"></div><div class="bar"></div><div class="bar"></div>
              <div class="bar hi"></div><div class="bar"></div>
              <div class="bar hi"></div><div class="bar"></div>
            </div>
          </div>
          <div class="dash-platforms">${platforms}</div>
        </div>
        <div class="float-badge bl">
          <div class="badge-icon">${ICO.checkCircle}</div>
          <div>
            <div class="badge-label">${h.badge2.label}</div>
            <div class="badge-val">${h.badge2.val}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ── Marquee ───────────────────────────────────────────────────────
function renderMarquee() {
  const pills = [...HC.marquee, ...HC.marquee]
    .map(m => `<div class="mp-logo-pill"><span class="dot" style="background:${m.color};"></span>${m.name}</div>`)
    .join('');
  return `
<div class="marquee-strip">
  <div class="marquee-inner">${pills}</div>
</div>`;
}

// ── Stats ─────────────────────────────────────────────────────────
function renderStats() {
  const cards = HC.stats.map(s => `
    <div class="stat-card">
      <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
  return `
<section class="stats-section">
  <div class="container">
    <div class="stats-grid reveal">${cards}</div>
  </div>
</section>`;
}

// ── Services ──────────────────────────────────────────────────────
function renderServices() {
  const cards = HC.services.map(s => `
    <div class="svc-card${s.featured ? ' featured' : ''} reveal">
      <div class="svc-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="${s.linkHref}" class="svc-link">${s.linkText} ${ICO.arrow}</a>
    </div>`).join('');
  return `
<section id="services">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">What we do</span>
      <h2 class="section-title">Everything your e-commerce <span class="grad-text">business needs</span> to scale.</h2>
      <p class="section-sub">One team, one point of contact — handling your compliance, books and accounts end to end.</p>
    </div>
    <div class="services-grid">${cards}</div>
  </div>
</section>`;
}

// ── Platforms ─────────────────────────────────────────────────────
function renderPlatforms() {
  const cards = HC.platforms.map(p => {
    const feats = p.features.map(f => `
      <li><span class="check-icon">${ICO.check}</span>${f}</li>`).join('');
    return `
    <div class="plat-card ${p.id} reveal">
      <div class="plat-name">${p.name}<span class="region">${p.region}</span></div>
      <ul class="plat-feats">${feats}</ul>
    </div>`;
  }).join('');
  return `
<section id="marketplaces">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">Platforms</span>
      <h2 class="section-title">Every major Indian marketplace, <span class="grad-text">fully covered.</span></h2>
      <p class="section-sub">Specialized workflows for each platform's unique seller requirements and compliance rules.</p>
    </div>
    <div class="platforms-grid">${cards}</div>
  </div>
</section>`;
}

// ── UAE ───────────────────────────────────────────────────────────
function renderUAE() {
  const u = HC.uae;
  const feats = u.features.map(f => `
    <div class="uae-feat">
      <div class="uae-feat-icon">${f.icon}</div>
      <div><strong>${f.title}</strong><span>${f.desc}</span></div>
    </div>`).join('');
  return `
<section id="uae">
  <div class="container">
    <div class="uae-wrap reveal">
      <div class="uae-grid">
        <div>
          <div class="uae-flag">${ICO.globe} ${u.flag}</div>
          <h2 class="section-title" style="text-align:left;">${u.title}</h2>
          <p style="color:var(--text-dim);font-size:15.5px;margin-top:16px;line-height:1.75;max-width:440px;">${u.sub}</p>
          <div class="cta-row" style="margin-top:28px;">
            <a href="#contact" class="btn btn-primary">${u.ctaText}</a>
            <a href="${waHref(u.waMsg)}" class="btn btn-ghost" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <div class="uae-feats">${feats}</div>
      </div>
    </div>
  </div>
</section>`;
}

// ── Process ───────────────────────────────────────────────────────
function renderProcess() {
  const steps = HC.process.map(s => `
    <div class="step reveal">
      <div class="step-num">${s.num}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>`).join('');
  return `
<section id="about">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">How it works</span>
      <h2 class="section-title">A simple, <span class="grad-text">4-step</span> process.</h2>
      <p class="section-sub">From first call to monthly management — everything done for you.</p>
    </div>
    <div class="process-grid">${steps}</div>
  </div>
</section>`;
}

// ── Testimonials ──────────────────────────────────────────────────
function renderTestimonials() {
  const cards = HC.testimonials.map(t => `
    <div class="testimonial reveal">
      <div class="t-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="t-quote">${t.quote}</p>
      <div class="t-author">
        <div class="t-avatar ${t.avatarClass}">${t.initials}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');
  return `
<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">Sellers who trust us</span>
      <h2 class="section-title">Real results from <span class="grad-text">real sellers.</span></h2>
    </div>
    <div class="testimonials-grid">${cards}</div>
  </div>
</section>`;
}

// ── FAQs ──────────────────────────────────────────────────────────
function renderFAQs() {
  const items = HC.faqs.map(f => `
    <div class="faq-item reveal">
      <button class="faq-q">${f.q}</button>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
  return `
<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">FAQ</span>
      <h2 class="section-title">Questions, <span class="grad-text">answered.</span></h2>
    </div>
    <div class="faq-list">${items}</div>
  </div>
</section>`;
}

// ── Contact ───────────────────────────────────────────────────────
function renderContact() {
  const c = HC.company;
  const f = HC.contactForm;
  const mpOpts = f.marketplaces.map(m => `<option>${m}</option>`).join('');
  const svcOpts = f.services.map(s => `<option>${s}</option>`).join('');
  return `
<section id="contact">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">Get in touch</span>
      <h2 class="section-title">Let's <span class="grad-text">get started.</span></h2>
      <p class="section-sub">Tell us about your business — we'll respond within one working day.</p>
    </div>
    <div class="contact-wrap">
      <div class="contact-info-card reveal">
        <h3>Talk to a specialist.</h3>
        <p>Pick the channel that's easiest for you. Most replies happen within an hour during business hours.</p>
        <a href="${c.phoneTel}" class="channel">
          <div class="channel-icon">${ICO.phone}</div>
          <div><strong>Call us</strong><span>${c.phone}</span></div>
        </a>
        <a href="${waHref("Hi Henry Corporation, I'd like a consultation")}" target="_blank" rel="noopener" class="channel">
          <div class="channel-icon" style="background:#25d366;">${ICO.wa}</div>
          <div><strong>WhatsApp</strong><span>Chat with us instantly</span></div>
        </a>
        <div class="contact-meta">
          <div><strong>Hours:</strong> ${c.hours}</div>
          <div><strong>Serving:</strong> ${c.serving}</div>
        </div>
      </div>
      <div class="form-card reveal">
        <form id="contact-form">
          <div class="form-row">
            <div class="field"><label>Your Name</label><input type="text" name="name" placeholder="Full name" required /></div>
            <div class="field"><label>Business Name</label><input type="text" name="business" placeholder="Your brand or shop" /></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Mobile Number</label><input type="tel" name="mobile" placeholder="+91" required /></div>
            <div class="field"><label>Marketplace</label>
              <select name="marketplace"><option value="">Select marketplace</option>${mpOpts}</select>
            </div>
          </div>
          <div class="field"><label>Services Needed</label>
            <select name="service"><option value="">Choose service</option>${svcOpts}</select>
          </div>
          <div class="field"><label>Message</label>
            <textarea name="message" placeholder="Tell us about your business or what you need help with&#8230;"></textarea>
          </div>
          <button type="submit" class="form-submit">Send Enquiry &#8594;</button>
          <p class="form-note">Or WhatsApp us directly — replies usually within the hour.</p>
        </form>
      </div>
    </div>
  </div>
</section>`;
}

// ── CTA Banner ────────────────────────────────────────────────────
function renderCTABanner() {
  const c = HC.company;
  return `
<section>
  <div class="container">
    <div class="cta-banner reveal">
      <h2>Ready to grow with a <span class="grad-text">trusted back office?</span></h2>
      <p>Join ${c.sellerCount}+ sellers who let ${c.name} handle the compliance, books and operations — so they can focus on selling more.</p>
      <div class="cta-row" style="justify-content:center;">
        <a href="#contact" class="btn btn-primary">Get Free Consultation</a>
        <a href="https://wa.me/${c.waNumber}" class="btn btn-whatsapp" target="_blank" rel="noopener">
          ${ICO.wa} WhatsApp Now
        </a>
      </div>
    </div>
  </div>
</section>`;
}

// ── Footer ────────────────────────────────────────────────────────
function renderFooter() {
  const c = HC.company;
  const fl = HC.footerLinks;
  const svcLinks = fl.services.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const platLinks = fl.platforms.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  document.getElementById('footer-root').innerHTML = `
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-brand">
          <div class="brand-icon" style="width:30px;height:30px;font-size:14px;">${c.brandLetter}</div>
          ${c.name}
        </div>
        <p class="footer-desc">${c.footerDesc}</p>
      </div>
      <div class="footer-col"><h5>Services</h5><ul>${svcLinks}</ul></div>
      <div class="footer-col"><h5>Platforms</h5><ul>${platLinks}</ul></div>
      <div class="footer-col"><h5>Contact</h5><ul>
        <li><a href="${c.phoneTel}">${c.phone}</a></li>
        <li><a href="https://wa.me/${c.waNumber}" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="#contact">Send Enquiry</a></li>
        <li><a href="#about">About Us</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <div>&copy; <span id="yr"></span> ${c.name}. All rights reserved.</div>
      <div>From GST to Growth &middot; India &amp; UAE</div>
    </div>
  </div>`;
}

// ── Floating WhatsApp ─────────────────────────────────────────────
function renderFloatWA() {
  document.getElementById('floats-root').innerHTML = `
  <a href="${waHref("Hi Henry Corporation, I'd like a consultation")}" target="_blank" rel="noopener" class="float-wa" aria-label="WhatsApp">
    ${ICO.waLg}
  </a>`;
}

// ── Build main content ────────────────────────────────────────────
function renderMain() {
  document.getElementById('main-root').innerHTML = [
    renderHero(),
    renderMarquee(),
    renderStats(),
    `<hr class="divider">`,
    renderServices(),
    `<hr class="divider">`,
    renderPlatforms(),
    `<hr class="divider">`,
    renderUAE(),
    renderProcess(),
    `<hr class="divider">`,
    renderTestimonials(),
    `<hr class="divider">`,
    renderFAQs(),
    renderContact(),
    renderCTABanner(),
  ].join('\n');
}

// ── Interactions ──────────────────────────────────────────────────
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function initMobileMenu() {
  const btn  = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  document.querySelectorAll('.mobile-menu a, .nav-links a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  );
}

function initStatCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el        = entry.target;
      const target    = parseInt(el.dataset.target);
      const suffix    = el.dataset.suffix || '';
      let   start     = 0;
      const increment = target / (1400 / 16);
      const timer = setInterval(() => {
        start = Math.min(start + increment, target);
        el.textContent = Math.floor(start) + suffix;
        if (start >= target) clearInterval(timer);
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
    const d    = new FormData(form);
    const text = `Hi Henry Corporation, I'd like a consultation.\n\nName: ${d.get('name')}\nBusiness: ${d.get('business')}\nMobile: ${d.get('mobile')}\nMarketplace: ${d.get('marketplace')}\nService: ${d.get('service')}\nMessage: ${d.get('message')}`;
    window.open(`https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// ── Init ──────────────────────────────────────────────────────────
function init() {
  renderMeta();
  renderNav();
  renderMain();
  renderFooter();
  renderFloatWA();

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  initReveal();
  initFAQ();
  initMobileMenu();
  initStatCounters();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', init);
