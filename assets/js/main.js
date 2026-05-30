/* ================================================================
   Henry Corporation — Rendering & Interactions (ROEH-style)
   All content is read from HC in data.js — edit that file only.
   ================================================================ */

/* ── Page Detection ─────────────────────────────────────── */
const PAGE = document.body.getAttribute('data-page') || 'home';
const IS_BLOG_POST = PAGE === 'blog-post';
const PATH_PREFIX  = IS_BLOG_POST ? '../' : '';

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
  minus:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
};

function waHref(msg) {
  return `https://wa.me/${HC.company.waNumber}?text=${encodeURIComponent(msg)}`;
}

/* ── Meta / SEO ─────────────────────────────────────────── */
function renderMeta() {
  // Blog posts and legal pages carry their own complete static meta in the
  // HTML <head>. Skip JS-driven meta injection to avoid overwriting it.
  if (IS_BLOG_POST || PAGE === 'privacy' || PAGE === 'terms') return;

  const setMeta = (name, content, prop) => {
    let el = document.querySelector(prop ? `meta[property="${name}"]` : `meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      prop ? el.setAttribute('property', name) : el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const pageMeta = {
    home: {
      title: HC.meta.title,
      desc:  HC.meta.description,
      ogTitle: HC.meta.ogTitle,
      ogDesc:  HC.meta.ogDescription,
    },
    services: {
      title: 'Export Consulting & International Trade Services India | Henry Corporation',
      desc:  'Complete export and international trade services — IEC registration, export documentation, international buyer sourcing, UAE expansion, Europe market entry, and Amazon Global seller setup.',
      ogTitle: 'Export & International Trade Services — Henry Corporation',
      ogDesc:  'Export consulting, buyer sourcing, market entry strategy, and global expansion services.',
    },
    platforms: {
      title: 'Global Marketplaces — Amazon, UAE, Europe & Alibaba | Henry Corporation',
      desc:  'Sell on Amazon International, Noon UAE, Bol.com, Allegro, and Alibaba.com. Henry Corporation manages global marketplace expansion for Indian manufacturers and exporters.',
      ogTitle: 'Global Marketplaces — Henry Corporation',
      ogDesc:  'Amazon, UAE, Europe & Global Marketplace Expansion for Indian businesses.',
    },
    'why-us': {
      title: 'Why Choose Henry Corporation — India\'s Trusted Export Consulting Partner',
      desc:  '500+ businesses served. 5+ years of cross-border expertise. 20+ markets reached. See why Indian manufacturers, exporters, and D2C brands trust Henry Corporation for international expansion.',
      ogTitle: 'Why Choose Henry Corporation — 500+ Businesses Served',
      ogDesc:  '500+ businesses served. Your trusted export consulting and global expansion partner.',
    },
    pricing: {
      title: 'Pricing Plans — Export Consulting & Global Expansion Services | Henry Corporation',
      desc:  'Simple, transparent pricing for export consulting, GST/IEC registration, UAE VAT, and international marketplace management. Starter plans from ₹2,999/month.',
      ogTitle: 'Pricing — Henry Corporation | Starting ₹2,999/month',
      ogDesc:  'Transparent pricing for export consulting, GST/IEC, and international expansion services.',
    },
    contact: {
      title: 'Contact Us — Book a Free Export Consultation | Henry Corporation',
      desc:  'Book a free 30-minute consultation with Henry Corporation. Expert help with export consulting, international buyer sourcing, UAE expansion, and global business growth.',
      ogTitle: 'Contact Henry Corporation — Free Export Consultation',
      ogDesc:  'Book a free 30-minute consultation. Expert export and international trade consulting.',
    },
    blog: {
      title: 'Export & International Trade Blog | Henry Corporation',
      desc:  'Expert guides on exporting from India, UAE business setup, IEC registration, Amazon UAE selling, EU market entry, and international trade consulting.',
      ogTitle: 'Export & International Trade Blog — Henry Corporation',
      ogDesc:  'Expert guides for Indian exporters and businesses going global.',
    },
  };

  const m = pageMeta[PAGE] || pageMeta.home;
  document.title = m.title;
  setMeta('description',    m.desc);
  setMeta('keywords',       HC.meta.keywords);
  setMeta('og:title',       m.ogTitle,  true);
  setMeta('og:description', m.ogDesc,   true);
  setMeta('og:type',        'website',  true);
  setMeta('og:image',       'https://henry-corporation.com/assets/logo.png', true);
  setMeta('og:image:alt',   'Henry Corporation — Export Consulting & Global Business Expansion', true);
  setMeta('og:locale',      'en_IN',    true);
  setMeta('og:site_name',   HC.company.name, true);
  setMeta('twitter:card',   'summary_large_image');
  setMeta('twitter:title',  m.ogTitle);
  setMeta('twitter:description', m.ogDesc);
  setMeta('twitter:image',  'https://henry-corporation.com/assets/logo.png');
  setMeta('twitter:image:alt', 'Henry Corporation — Export Consulting & Global Business Expansion');

  // Geo / local targeting — primary base India, strong UAE presence.
  setMeta('geo.region',    'IN');
  setMeta('geo.placename', 'India & Dubai, UAE');
  setMeta('theme-color',   '#0B1F3A');

  const baseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':   'Organization',
        '@id':     'https://henry-corporation.com/#organization',
        name:       HC.company.name,
        legalName:  HC.company.name,
        url:        'https://henry-corporation.com',
        logo: {
          '@type':  'ImageObject',
          url:      'https://henry-corporation.com/assets/logo.png',
          width:    '512',
          height:   '512',
        },
        image:      'https://henry-corporation.com/assets/logo.png',
        description: HC.meta.description,
        telephone:  HC.company.phone,
        email:      HC.company.email,
        foundingDate: '2020',
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'Netherlands' },
          { '@type': 'Country', name: 'United States' },
        ],
        knowsAbout: [
          'Export Consulting',
          'International Buyer Sourcing',
          'UAE Business Setup',
          'Europe Market Entry',
          'Amazon Global Selling',
          'IEC Code Registration',
          'GST Compliance',
          'UAE VAT Registration',
          'Export Documentation',
          'International Trade Advisory',
        ],
        sameAs: Object.values(HC.company.social || {}),
        contactPoint: {
          '@type':       'ContactPoint',
          telephone:     HC.company.phone,
          email:         HC.company.email,
          contactType:   'Customer Service',
          areaServed:    ['IN', 'AE', 'GB', 'DE', 'FR', 'NL', 'US'],
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type':   ['LocalBusiness', 'ProfessionalService'],
        '@id':     'https://henry-corporation.com/#business',
        name:       HC.company.name,
        description: HC.meta.description,
        url:        'https://henry-corporation.com',
        telephone:  HC.company.phone,
        email:      HC.company.email,
        priceRange: '₹₹',
        address: [
          {
            '@type':         'PostalAddress',
            addressCountry:  'IN',
            addressRegion:   'India',
          },
          {
            '@type':         'PostalAddress',
            addressCountry:  'AE',
            addressLocality: 'Dubai',
            addressRegion:   'Dubai',
          },
        ],
        areaServed: [
          { '@type': 'Country',          name: 'India' },
          { '@type': 'Country',          name: 'United Arab Emirates' },
          { '@type': 'City',             name: 'Dubai' },
          { '@type': 'AdministrativeArea', name: 'Europe' },
        ],
        openingHours: 'Mo-Sa 10:00-19:00',
        sameAs: Object.values(HC.company.social || {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name:    'Export & International Trade Consulting Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Export Consulting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Buyer Sourcing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UAE Business Setup' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Europe Market Entry' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon Global Selling' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Export Documentation' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id':   'https://henry-corporation.com/#website',
        url:     'https://henry-corporation.com',
        name:    HC.company.name,
        description: HC.company.tagline,
        publisher: { '@id': 'https://henry-corporation.com/#organization' },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target:  'https://henry-corporation.com/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  // BreadcrumbList for inner pages (non-home)
  if (PAGE !== 'home') {
    const pageNames = {
      services: 'Services', platforms: 'Platforms', 'why-us': 'Why Us',
      pricing: 'Pricing', contact: 'Contact', blog: 'Blog',
      privacy: 'Privacy Policy', terms: 'Terms & Conditions',
    };
    const pageName = pageNames[PAGE] || PAGE;
    const pageUrl  = `https://henry-corporation.com/${PAGE}.html`;
    baseSchema['@graph'].push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://henry-corporation.com/' },
        { '@type': 'ListItem', position: 2, name: pageName, item: pageUrl },
      ],
    });
  }

  // Blog hub — emit ItemList of blog posts
  if (PAGE === 'blog' && HC.blogPosts && HC.blogPosts.length) {
    baseSchema['@graph'].push({
      '@type': 'ItemList',
      itemListElement: HC.blogPosts.map((p, i) => ({
        '@type':   'ListItem',
        position:  i + 1,
        url:       `https://henry-corporation.com/blog/${p.slug}.html`,
        name:      p.title,
      })),
    });
  }

  if (PAGE === 'pricing' && HC.faqs && HC.faqs.length) {
    baseSchema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: HC.faqs.map(f => ({
        '@type':          'Question',
        name:             f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  if (PAGE === 'home' && HC.homeFaqs && HC.homeFaqs.length) {
    baseSchema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: HC.homeFaqs.map(f => ({
        '@type':          'Question',
        name:             f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  const schemaEl = document.getElementById('schema-ld');
  if (schemaEl) schemaEl.textContent = JSON.stringify(baseSchema);
}

/* ── Nav ────────────────────────────────────────────────── */
function renderNav() {
  const navRoot = document.getElementById('nav-root');
  if (!navRoot) return;
  navRoot.innerHTML = `
    <a href="${PATH_PREFIX}index.html" class="nav-logo" aria-label="${HC.company.name} home">
      <img src="${PATH_PREFIX}assets/logo.png" alt="${HC.company.name} — Export Consulting & Global Business Expansion" class="nav-logo-img" />
    </a>
    <ul class="nav-links" role="list">
      ${HC.nav.map(n => {
        const isActive = window.location.pathname.endsWith(n.href) ||
                         (PAGE !== 'home' && n.href === PAGE + '.html') ||
                         (PAGE === n.href.replace('.html',''));
        return `<li><a href="${PATH_PREFIX}${n.href}" class="${isActive ? 'active' : ''}">${n.label}</a></li>`;
      }).join('')}
    </ul>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  `;
}

function renderMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  if (!mobileNav) return;
  mobileNav.innerHTML = `
    ${HC.nav.map(n => `<a href="${PATH_PREFIX}${n.href}">${n.label}</a>`).join('')}
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
        ${HC.hero.tagline ? `<p class="hero-tagline">${HC.hero.tagline}</p>` : ''}
      </div>
      <div class="hero-bottom">
        <div class="reveal-left">
          <div class="hero-badge-pill">${HC.hero.badge}</div>
          <div class="hero-rule"></div>
          <p class="hero-sub">${HC.hero.sub}</p>
          <div class="hero-cta-row">
            <a href="${HC.hero.ctaHref}" class="btn-solid-coral">${HC.hero.ctaText} ${I.arrow}</a>
            <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} ${HC.hero.waText}</a>
          </div>
          <div class="hero-trust">
            ${HC.hero.trustItems.map(t => `<span class="hero-trust-item">${t.label}</span>`).join('')}
          </div>
        </div>
        <div class="reveal-right">
          <div class="hero-badge-strip">
            ${HC.hero.trustBadges.map(b => `
              <div class="hero-badge-card">
                <div class="hero-badge-card-icon">${b.icon}</div>
                <div class="hero-badge-card-label">${b.label}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="hero-scroll" id="hero-scroll" aria-label="Scroll down">${I.arrowDown}</div>
    </section>
  `;
}

/* ── Page Hero (coral, inner pages) ────────────────────── */
function renderPageHero(pageId) {
  const h = HC.pageHeroes[pageId];
  if (!h) return '';
  return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-inner">
          <h1 class="page-hero-title reveal">${h.title}</h1>
          <div class="page-hero-line"></div>
          <p class="page-hero-sub reveal reveal-d1">${h.sub}</p>
          <div class="page-hero-scroll" id="hero-scroll">${I.arrowDown}</div>
        </div>
      </div>
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
        <div class="stats-eyebrow">
          <span class="section-label light">By The Numbers</span>
        </div>
        <div class="stats-grid">
          ${HC.stats.map((s, i) => `
            <div class="stat-item reveal reveal-d${i + 1}">
              <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-lbl">${s.label}</div>
              ${s.sub ? `<div class="stat-sub">${s.sub}</div>` : ''}
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── Platform Logos ─────────────────────────────────────── */
function renderPlatformLogos() {
  const bizTypes = HC.homeTrustBar || [];
  const platforms = [
    { name: 'Amazon',   color: '#FF9900' },
    { name: 'Flipkart', color: '#2874F0' },
    { name: 'Meesho',   color: '#F43397' },
    { name: 'Myntra',   color: '#FF3F6C' },
    { name: 'Alibaba',  color: '#FF6A00' },
    { name: 'Noon',     color: '#FEEE00', textColor: '#000' },
  ];
  return `
    <div class="biz-trust-bar">
      <div class="container">
        <p class="biz-trust-label">Trusted By Growing Businesses Looking To Expand Internationally</p>
        <div class="biz-trust-row">
          ${bizTypes.map(b => `
            <div class="biz-trust-item">
              <span class="biz-trust-icon">${b.icon}</span>
              <span class="biz-trust-name">${b.label}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="platform-logos-section">
      <div class="container">
        <p class="platform-logos-label">We manage seller accounts on</p>
        <div class="platform-logos-row">
          ${platforms.map(p => `
            <div class="platform-logo-item">
              <span class="platform-logo-dot" style="background:${p.color}"></span>
              <span class="platform-logo-name">${p.name}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── Home About Section ─────────────────────────────────────── */
function renderHomeAbout() {
  const a = HC.homeAbout;
  if (!a) return '';
  return `
    <section class="home-about section" id="about">
      <div class="container">
        <div class="home-about-inner">
          <div class="home-about-left reveal-left">
            <div class="section-label">${a.label}</div>
            <h2 class="section-title">${a.title}</h2>
            ${a.paras.map(p => `<p class="home-about-para">${p}</p>`).join('')}
            <a href="${a.ctaHref}" class="btn-solid-coral">${a.ctaText} ${I.arrow}</a>
          </div>
          <div class="home-about-right reveal-right">
            <div class="home-about-highlights">
              ${a.highlights.map((h, i) => `
                <div class="home-about-highlight reveal reveal-d${i + 1}">
                  <span class="ha-icon">${h.icon}</span>
                  <span class="ha-text">${h.text}</span>
                </div>`).join('')}
            </div>
            <div class="home-about-cta-strip">
              <a href="contact.html" class="btn-outline-coral">Book Free Consultation ${I.arrow}</a>
              <a href="${waHref('Hi Henry Corporation, I want to learn about international trade consulting')}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Home Services (6 Export/Trade Cards) ──────────────────── */
function renderHomeServices() {
  const svcs = HC.homeServices;
  if (!svcs || !svcs.length) return '';
  return `
    <section class="home-svc-section section-dark section" id="home-services">
      <div class="container">
        <div class="home-svc-hdr reveal">
          <div class="section-label light">What We Do</div>
          <h2 class="section-title" style="color:var(--white)">Our Core Services</h2>
          <p class="section-sub" style="color:rgba(255,255,255,0.52);max-width:580px">From export consulting and buyer sourcing to market entry strategy and international trade advisory — we cover every step of your global expansion.</p>
        </div>
        <div class="home-svc-grid">
          ${svcs.map((s, i) => `
            <div class="home-svc-card reveal reveal-d${(i % 3) + 1}">
              <div class="home-svc-card-top">
                <span class="home-svc-num">${s.num}</span>
                <span class="home-svc-icon">${s.icon}</span>
              </div>
              <h3 class="home-svc-title">${s.title}</h3>
              <p class="home-svc-desc">${s.desc}</p>
              <div class="home-svc-benefit">${I.check} ${s.benefit}</div>
              <a href="${s.link}" class="home-svc-lnk">Learn More ${I.arrow}</a>
            </div>`).join('')}
        </div>
        <div class="home-svc-footer reveal">
          <a href="services.html" class="btn-solid-coral">Explore All Services ${I.arrow}</a>
          <a href="contact.html" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Home Global Expansion (Expand Beyond India) ───────────── */
function renderHomeGlobalExpansion() {
  const items = [
    { icon: '🇦🇪', title: 'UAE Expansion',              desc: 'LLC formation, FTA VAT, Amazon.ae & Noon setup. Most popular first step for Indian exporters.'       },
    { icon: '🇪🇺', title: 'Europe Market Entry',        desc: 'Amazon EU, Bol.com, Allegro. VAT/OSS registration, CE marking, and multilingual listings.'          },
    { icon: '🛒', title: 'Amazon Global Selling',       desc: 'FBA enrollment, Brand Registry, ASIN localisation, and cross-border tax compliance.'                  },
    { icon: '🏪', title: 'Shopify International',       desc: 'Multi-currency global storefront with international shipping, GST/LUT compliance, and FEMA support.'  },
    { icon: '🌍', title: 'D2C Global Brand',            desc: 'Take your brand direct-to-consumer internationally via your own storefront and social commerce.'      },
    { icon: '🤝', title: 'Distributor Network',         desc: 'Find and connect with verified international distributors and wholesale partners in 20+ countries.'    },
  ];
  return `
    <section class="home-ge-section section" id="global-expansion">
      <div class="container">
        <div class="home-ge-hdr reveal">
          <div class="section-label">International Expansion</div>
          <h2 class="section-title">Expand Beyond India</h2>
          <p class="section-sub">We open doors to international markets — with hands-on support at every step from strategy to live sales.</p>
        </div>
        <div class="home-ge-grid">
          ${items.map((item, i) => `
            <div class="home-ge-card reveal reveal-d${(i % 3) + 1}">
              <span class="home-ge-icon">${item.icon}</span>
              <h3 class="home-ge-title">${item.title}</h3>
              <p class="home-ge-desc">${item.desc}</p>
            </div>`).join('')}
        </div>
        <div class="home-ge-cta reveal">
          <a href="contact.html" class="btn-solid-coral">Discuss Expansion Strategy ${I.arrow}</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Services Intro (top 3, white editorial) ────────────── */
function renderServicesIntro() {
  const featured = HC.serviceCategories[0].services.slice(0, 3);
  return `
    <section class="svc-intro section" id="services">
      <div class="container">
        <div class="svc-intro-header">
          <div>
            <div class="section-label">What We Do</div>
            <h2 class="section-title reveal-left">From India to Global Markets.<br>One Expert Team.</h2>
          </div>
          <div class="svc-intro-right reveal-right">
            <p class="section-sub">Henry Corporation helps Indian businesses expand internationally — GST, UAE VAT, Amazon International seller accounting, export compliance, LLC formation, and global marketplace management across India, UAE, Europe and beyond.</p>
            <br>
            <a href="platforms.html" class="link-text" style="color:var(--coral)">Explore All Services ${I.arrow}</a>
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

/* ── Service Detail Panel ───────────────────────────────── */
function renderDetailPanel(d, cardId) {
  return `
    <div class="svc-detail-panel" id="detail-${cardId}" hidden>
      <div class="sdp-overview">
        <div class="sdp-section-label">Overview</div>
        <p class="sdp-overview-text">${d.overview}</p>
      </div>
      <div class="sdp-two-col">
        <div class="sdp-col">
          <div class="sdp-section-label">What's Included</div>
          <ul class="sdp-list">
            ${d.includes.map(item => `<li>${I.check} ${item}</li>`).join('')}
          </ul>
        </div>
        <div class="sdp-col">
          <div class="sdp-section-label">Documents Needed</div>
          <ul class="sdp-list">
            ${d.documents.map(doc => `<li>${I.check} ${doc}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="sdp-process">
        <div class="sdp-section-label">Process</div>
        <ol class="sdp-process-list">
          ${d.process.map((step, i) => `<li><span class="sdp-step-num">${String(i + 1).padStart(2, '0')}</span>${step}</li>`).join('')}
        </ol>
      </div>
      <div class="sdp-meta">
        <span class="sdp-badge sdp-badge--time">${I.clock} ${d.timeline}</span>
        <span class="sdp-badge sdp-badge--price">${d.pricing}</span>
      </div>
      <a href="contact.html" class="sdp-cta">Book Free Consultation ${I.arrow}</a>
    </div>`;
}

function renderServiceCard(s, j, categoryId) {
  const cardId = `${categoryId}-${j}`;
  const benefits = s.detail && s.detail.includes
    ? s.detail.includes.slice(0, 4).map(b => `<li>${I.check} ${b}</li>`).join('')
    : '';
  return `
    <div class="svc-card-full reveal reveal-d${(j % 3) + 1}" data-id="${cardId}">
      ${s.icon ? `<div class="svc-card-icon">${s.icon}</div>` : `<div class="svc-card-n">0${j + 1}</div>`}
      <h3 class="svc-card-title">${s.title}</h3>
      <p class="svc-card-desc">${s.desc}</p>
      ${benefits ? `<ul class="svc-benefit-list">${benefits}</ul>` : ''}
      ${s.detail && s.detail.pricing ? `<div class="svc-card-price">${s.detail.pricing}</div>` : ''}
      <div class="svc-card-footer">
        <a href="${s.link}" class="svc-card-lnk">${s.linkText} ${I.arrow}</a>
        ${s.detail ? `<button class="svc-detail-btn" aria-expanded="false" aria-controls="detail-${cardId}">Full Details ${I.plus}</button>` : ''}
      </div>
      ${s.detail ? renderDetailPanel(s.detail, cardId) : ''}
    </div>`;
}

/* ── Full Tabbed Services (black section) ───────────────── */
function renderServices() {
  return `
    <section class="services-full">
      <div class="container">
        <div class="svc-tab-bar" role="tablist" aria-label="Service categories">
          ${HC.serviceCategories.map((c, i) => `
            <button class="svc-tab${i === 0 ? ' active' : ''}"
              role="tab" aria-selected="${i === 0}" data-tab="${c.id}">${c.label}</button>`).join('')}
        </div>
        ${HC.serviceCategories.map((c, i) => `
          <div class="svc-panel${i === 0 ? ' active' : ''}" role="tabpanel" id="panel-${c.id}">
            <div class="svc-panel-hdr">
              <div class="section-label light">Our Services</div>
              <h2 class="section-title reveal">${c.title}</h2>
              <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.52)">${c.sub}</p>
            </div>
            <div class="svc-grid-full">
              ${c.services.map((s, j) => renderServiceCard(s, j, c.id)).join('')}
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
          <div class="section-label light">Sound Familiar?</div>
          <h2 class="section-title reveal">Struggling with these<br>seller and export challenges?</h2>
          <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.5)">Sound familiar? These are the exact challenges hundreds of Indian sellers and exporters face every month — until they partner with Henry Corporation.</p>
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
            <a href="contact.html" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
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
    <section class="why-section">
      <div class="container">
        <div class="why-hdr">
          <div>
            <div class="section-label">Why Henry Corp</div>
            <h2 class="section-title reveal-left">Why Growing Businesses<br>Choose Henry Corporation</h2>
          </div>
          <p class="section-sub reveal-right" style="max-width:380px;margin-top:0;align-self:flex-end">We're not just a compliance firm — we're your complete international expansion partner for India, UAE, and global markets.</p>
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
    <section class="process-section" id="how-we-work">
      <div class="container">
        <div class="process-hdr">
          <div class="section-label light">How It Works</div>
          <h2 class="section-title reveal">How We Work</h2>
          <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.52)">A proven 5-step process — from free consultation to global expansion. Transparent, structured, and results-driven.</p>
        </div>
        <div class="process-grid">
          ${HC.process.map((p, i) => `
            <div class="process-step reveal reveal-d${i + 1}">
              <div class="process-num">${p.num}</div>
              <h3 class="process-title">${p.title}</h3>
              <p class="process-desc">${p.desc}</p>
            </div>`).join('')}
        </div>
        <div class="process-cta reveal">
          <a href="contact.html" class="btn-ghost">Start Your Journey ${I.arrow}</a>
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
          <div class="section-label">Client Stories</div>
          <h2 class="section-title reveal">What Our Clients Say</h2>
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
          <div class="section-label" style="justify-content:center">Transparent Pricing</div>
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
              <a href="contact.html" class="price-cta">Get Started ${I.arrow}</a>
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
          <div>
            <div class="section-label" style="color:rgba(255,255,255,0.55);margin-bottom:14px">Get Started Today</div>
            <h2 class="cta-banner-title reveal-left">Ready to Take Your<br>Business Global?</h2>
          </div>
          <div class="cta-banner-actions reveal-right">
            <a href="contact.html" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
            <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Home FAQ ────────────────────────────────────────────────── */
function renderHomeFAQ() {
  if (!HC.homeFaqs || !HC.homeFaqs.length) return '';
  return `
    <section class="faq-section section" id="home-faq">
      <div class="container">
        <div class="faq-hdr">
          <div class="section-label">Common Questions</div>
          <h2 class="section-title reveal">Frequently Asked Questions</h2>
          <p class="section-sub reveal reveal-d1">Everything you need to know about international trade, export consulting, and expanding your business globally.</p>
        </div>
        <div class="faq-list">
          ${HC.homeFaqs.map(f => `
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                ${f.q}
                <span class="faq-icon">${I.plus}</span>
              </button>
              <div class="faq-a"><p>${f.a}</p></div>
            </div>`).join('')}
        </div>
        <div class="faq-cta reveal">
          <p>Have more questions? We're here to help.</p>
          <a href="contact.html" class="btn-solid-coral">Book a Free Consultation ${I.arrow}</a>
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
          <div class="section-label">Common Questions</div>
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

/* ── Contact — Enhanced 3-step form ─────────────────────── */
function renderContact() {
  const steps = [
    { label: 'Step 1 of 3 — Your marketplace', title: 'Where do you sell?',          type: 'btns', key: 'marketplace', items: HC.contactForm.marketplaces },
    { label: 'Step 2 of 3 — Service needed',   title: 'What do you need help with?', type: 'btns', key: 'service',     items: HC.contactForm.services },
    { label: 'Step 3 of 3 — Your details',     title: 'How should we reach you?',    type: 'form' },
  ];

  const directActionsHtml = `
    <div class="cs-direct-actions">
      <a href="${waHref('Hi Henry Corporation, I would like to book a free consultation')}" class="cs-direct-btn cs-direct-wa" target="_blank" rel="noopener">
        ${I.wa}
        <span>
          <span class="cs-direct-label">WhatsApp Us Now</span>
          <span class="cs-direct-sub">Typically replies in &lt; 1 hour</span>
        </span>
      </a>
      <a href="${HC.company.phoneTel}" class="cs-direct-btn cs-direct-call">
        ${I.phone}
        <span>
          <span class="cs-direct-label">Call Us</span>
          <span class="cs-direct-sub">${HC.company.phone}</span>
        </span>
      </a>
      <a href="mailto:${HC.company.email}" class="cs-direct-btn cs-direct-mail">
        ${I.mail}
        <span>
          <span class="cs-direct-label">Email Us</span>
          <span class="cs-direct-sub">${HC.company.email}</span>
        </span>
      </a>
    </div>
  `;

  return `
    <section class="contact-section" id="contact">
      <div class="cs-left">
        <div class="section-label light">Free Consultation</div>
        <h2 class="cs-left-title reveal-left">Let's Grow Your<br>Business Globally</h2>
        <p class="cs-left-sub reveal-left reveal-d1">Fill the form and we'll get back to you within 2 business hours — or reach out directly via WhatsApp for an instant response.</p>
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
        <div class="cs-trust-row reveal-left reveal-d3">
          <span class="cs-trust-item">✓ Free 30-min Consultation</span>
          <span class="cs-trust-item">✓ Response within 2 hours</span>
          <span class="cs-trust-item">✓ 500+ Businesses Served</span>
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
                <div class="cs-form-row">
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-name">Full Name <span class="cs-required">*</span></label>
                    <input class="cs-form-input" type="text" id="cs-name" placeholder="Rahul Sharma" required />
                  </div>
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-company">Company Name</label>
                    <input class="cs-form-input" type="text" id="cs-company" placeholder="ABC Exports Pvt Ltd" />
                  </div>
                </div>
                <div class="cs-form-row">
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-phone">Phone / WhatsApp <span class="cs-required">*</span></label>
                    <input class="cs-form-input" type="tel" id="cs-phone" placeholder="+91 98765 43210" required />
                  </div>
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-email">Email Address</label>
                    <input class="cs-form-input" type="email" id="cs-email" placeholder="rahul@company.com" />
                  </div>
                </div>
                <div class="cs-form-row">
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-product">Product Category</label>
                    <select class="cs-form-input cs-form-select" id="cs-product">
                      <option value="">Select category…</option>
                      ${HC.contactForm.productCategories.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                  </div>
                  <div class="cs-form-group">
                    <label class="cs-form-label" for="cs-country">Target Country</label>
                    <select class="cs-form-input cs-form-select" id="cs-country">
                      <option value="">Select country…</option>
                      ${HC.contactForm.targetCountries.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                  </div>
                </div>
                <div class="cs-form-group">
                  <label class="cs-form-label" for="cs-msg">Your Requirement</label>
                  <textarea class="cs-form-input cs-form-textarea" id="cs-msg" placeholder="Tell us about your current situation, monthly turnover, specific challenge or goal…" rows="3"></textarea>
                </div>
                <p class="cs-form-note">By submitting this form you agree to be contacted by Henry Corporation. We never share your data with third parties.</p>
              </div>
            `}
          </div>`).join('')}

        <div class="cs-slide cs-slide--success" data-step="3">
          <div class="cs-success">
            <div class="cs-success-icon">✓</div>
            <h3 class="cs-success-title">Message Sent!</h3>
            <p class="cs-success-sub">Thank you! We'll get back to you within 2 business hours. For an instant response, WhatsApp us directly.</p>
            <a href="${waHref('Hi Henry Corporation, I just submitted a consultation request. Please get in touch!')}" class="btn-solid-coral" target="_blank" rel="noopener" style="margin-top:20px">${I.wa} WhatsApp Us Now</a>
          </div>
        </div>

        <div class="cs-nav" id="cs-nav-row">
          <button class="cs-back-btn hidden" id="cs-back">← Back</button>
          <button class="cs-next-btn" id="cs-next">Next ${I.arrow}</button>
        </div>
      </div>
    </section>
    <section class="section section-alt" style="padding:60px 0">
      <div class="container">
        <div class="section-label" style="justify-content:center;margin-bottom:8px">Or Reach Us Directly</div>
        <h2 class="section-title reveal" style="text-align:center;margin-bottom:40px">Prefer to Connect Directly?</h2>
        ${directActionsHtml}
      </div>
    </section>
  `;
}

/* ── Platform Grid (platforms page) ────────────────────── */
function renderPlatformGrid() {
  return `
    <section class="section">
      <div class="container">
        <div class="platform-grid">
          ${HC.platformDetails.map((p, i) => `
            <div class="platform-card reveal reveal-d${(i % 3) + 1}">
              <div class="platform-card-top">
                <span class="platform-dot" style="background:${p.color}"></span>
                <span class="platform-name">${p.name}</span>
                ${p.badge ? `<span class="platform-badge">${p.badge}</span>` : ''}
              </div>
              <h3 class="platform-tagline">${p.tagline}</h3>
              <p class="platform-desc">${p.desc}</p>
              <ul class="platform-services">
                ${p.services.map(s => `<li>${I.check} ${s}</li>`).join('')}
              </ul>
              <a href="contact.html" class="link-text" style="color:var(--coral);margin-top:auto">Get Started ${I.arrow}</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Footer ─────────────────────────────────────────────── */
function renderFooter() {
  const socialLinks = HC.company.social ? `
    <div class="footer-social">
      <a href="${HC.company.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Henry Corporation on LinkedIn" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="${HC.company.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Henry Corporation on Instagram" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="${HC.company.social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Henry Corporation on Facebook" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="${HC.company.social.twitter}" target="_blank" rel="noopener noreferrer" aria-label="Henry Corporation on Twitter" class="footer-social-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
      </a>
    </div>
  ` : '';

  const newsletterHtml = `
    <div class="footer-newsletter">
      <div class="footer-newsletter-title">Export Insights Newsletter</div>
      <p class="footer-newsletter-sub">Monthly tips on GST, UAE VAT, global marketplace strategies, and export compliance — free.</p>
      <form class="footer-newsletter-form" id="footer-newsletter-form" onsubmit="handleNewsletterSubmit(event)">
        <input type="email" class="footer-newsletter-input" placeholder="your@email.com" aria-label="Email for newsletter" required />
        <button type="submit" class="footer-newsletter-btn">Subscribe ${I.arrow}</button>
      </form>
      <p class="footer-newsletter-note" id="newsletter-msg" hidden>✓ Subscribed! Check your inbox.</p>
    </div>
  `;

  document.getElementById('footer-root').innerHTML = `
    <div class="footer-cta-strip">
      <div class="container">
        <div class="footer-cta-inner">
          <div>
            <div class="footer-cta-label">Your Global Expansion Partner</div>
            <div class="footer-cta-title">Ready to Take Your Business International?</div>
          </div>
          <div class="footer-cta-actions">
            <a href="contact.html" class="btn-ghost">Book Free Consultation ${I.arrow}</a>
            <a href="${waHref(HC.hero.waMsg)}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${PATH_PREFIX}assets/logo.png" alt="${HC.company.name} logo" class="footer-logo-img" loading="lazy" width="200" height="120" />
          <p class="footer-tagline">${HC.company.footerDesc.slice(0, 160)}…</p>
          <div class="footer-contact-block">
            <a href="${HC.company.phoneTel}" class="footer-contact-item">${I.phone} ${HC.company.phone}</a>
            <a href="mailto:${HC.company.email}" class="footer-contact-item">${I.mail} ${HC.company.email}</a>
            <span class="footer-contact-item">${I.clock} ${HC.company.hours}</span>
          </div>
          ${socialLinks}
        </div>
        <div>
          <div class="footer-col-title">🇮🇳 India Services</div>
          <ul class="footer-links">
            ${HC.footerLinks.india.map(l => `<li><a href="${PATH_PREFIX}${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-col-title">🇦🇪 UAE Services</div>
          <ul class="footer-links">
            ${HC.footerLinks.uae.map(l => `<li><a href="${PATH_PREFIX}${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-col-title">🛒 E-Commerce</div>
          <ul class="footer-links">
            ${HC.footerLinks.ecommerce.map(l => `<li><a href="${PATH_PREFIX}${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            ${HC.footerLinks.company.map(l => `<li><a href="${PATH_PREFIX}${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      ${newsletterHtml}
      <div class="footer-bottom">
        <div class="footer-copy">© <span id="footer-year"></span> ${HC.company.name}. All rights reserved. Serving businesses across India &amp; UAE.</div>
        <div class="footer-trust-badges">
          <span class="ftb">GST Compliant Agency</span>
          <span class="ftb">FTA Registered</span>
          <span class="ftb">500+ Businesses Served</span>
          <span class="ftb">India &amp; UAE</span>
        </div>
      </div>
    </div>
  `;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('newsletter-msg');
  if (msg) { msg.hidden = false; }
  form.style.display = 'none';
}

/* ── Certifications / Trust Section ─────────────────────── */
function renderCertifications() {
  if (!HC.certifications || !HC.certifications.length) return '';
  return `
    <section class="certs-section section-alt section">
      <div class="container">
        <div class="certs-inner">
          <div class="certs-left reveal-left">
            <div class="section-label">Credentials & Trust</div>
            <h2 class="section-title" style="font-size:clamp(1.6rem,3vw,2.4rem)">Registered,<br>Certified & Trusted</h2>
            <p class="section-sub" style="margin-top:14px;font-size:0.88rem">Henry Corporation operates as a fully compliant professional services firm — registered with Indian and UAE regulatory bodies, serving 500+ businesses globally.</p>
          </div>
          <div class="certs-grid reveal-right">
            ${HC.certifications.map(c => `
              <div class="cert-card">
                <div class="cert-icon">${c.icon}</div>
                <div class="cert-label">${c.label}</div>
                <div class="cert-desc">${c.desc}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Floats ─────────────────────────────────────────────── */
function renderFloats() {
  const root = document.getElementById('floats-root');
  if (!root) return;
  root.innerHTML = `
    <a class="float-wa" href="${waHref(HC.hero.waMsg)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      ${I.wa}
    </a>
    <a class="mobile-sticky-cta" href="${PATH_PREFIX}${HC.hero.ctaHref}">${HC.hero.ctaText} ${I.arrow}</a>
  `;
}

/* ── Blog Teaser (homepage) ─────────────────────────────── */
function renderBlogTeaser() {
  if (!HC.blogPosts || !HC.blogPosts.length) return '';
  const featured = HC.blogPosts.filter(p => p.featured).slice(0, 3);
  if (!featured.length) return '';
  return `
    <section class="blog-teaser section" id="from-the-blog">
      <div class="container">
        <div class="blog-teaser-hdr">
          <div>
            <div class="section-label">From the Blog</div>
            <h2 class="section-title reveal-left">Export Insights &<br>International Trade Guides</h2>
          </div>
          <a href="${PATH_PREFIX}blog.html" class="link-text reveal-right" style="color:var(--coral)">View All Posts ${I.arrow}</a>
        </div>
        <div class="blog-teaser-grid">
          ${featured.map((p, i) => `
            <a href="${PATH_PREFIX}blog/${p.slug}.html" class="blog-teaser-card reveal reveal-d${i + 1}">
              <div class="blog-teaser-card-icon">${p.icon}</div>
              <div class="blog-teaser-card-tag">${p.category}</div>
              <h3 class="blog-teaser-card-title">${p.title}</h3>
              <p class="blog-teaser-card-excerpt">${p.excerpt.slice(0, 130)}…</p>
              <div class="blog-teaser-card-meta">
                <span>${p.readTime}</span>
                <span class="blog-teaser-card-link">Read More ${I.arrow}</span>
              </div>
            </a>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Blog Hub Page ──────────────────────────────────────── */
function renderBlogPage() {
  const posts = HC.blogPosts || [];
  document.getElementById('main-root').innerHTML = `
    <section class="blog-hub-hero">
      <div class="container">
        <div class="blog-hub-hero-inner">
          <div class="section-label light" style="justify-content:center">Henry Corporation Blog</div>
          <h1 class="blog-hub-title">Export & International<br>Trade Insights</h1>
          <p class="blog-hub-sub">Expert guides on exporting from India, UAE business setup, IEC registration, Amazon UAE selling, EU market entry, and international trade consulting — written by the Henry Corporation team.</p>
        </div>
      </div>
    </section>

    <section class="blog-hub-section section">
      <div class="container">
        <div class="blog-hub-grid">
          ${posts.map((p, i) => `
            <a href="blog/${p.slug}.html" class="blog-hub-card reveal reveal-d${(i % 3) + 1}">
              <div class="blog-hub-card-top">
                <span class="blog-hub-card-icon">${p.icon}</span>
                ${p.featured ? '<span class="blog-hub-card-featured">★ Featured</span>' : ''}
              </div>
              <div class="blog-hub-card-tag">${p.category}</div>
              <h2 class="blog-hub-card-title">${p.title}</h2>
              <p class="blog-hub-card-excerpt">${p.excerpt}</p>
              <div class="blog-hub-card-meta">
                <span>${p.date}</span>
                <span class="blog-hub-meta-dot"></span>
                <span>${p.readTime}</span>
              </div>
              <span class="blog-hub-card-link">Read Full Article ${I.arrow}</span>
            </a>`).join('')}
        </div>
      </div>
    </section>

    ${renderCTA()}
  `;
}

/* ── Page Renderers ─────────────────────────────────────── */
function renderHomePage() {
  document.getElementById('main-root').innerHTML = [
    renderHero(),
    renderPlatformLogos(),
    renderMarquee(),
    renderStats(),
    renderHomeAbout(),
    renderHomeServices(),
    renderHomeGlobalExpansion(),
    renderWhyUs(),
    renderProcess(),
    renderBlogTeaser(),
    renderCertifications(),
    renderTestimonials(),
    renderHomeFAQ(),
    renderServicesLeadForm(),
    renderCTA(),
  ].join('');
}

/* ── Services Page Hero (dark, trade-themed) ────────────── */
function renderServicesHero() {
  const h = HC.servicesHero;
  if (!h) return renderPageHero('services');
  return `
    <section class="svc-page-hero" id="svc-hero-top">
      <div class="svc-page-hero-bg" aria-hidden="true"></div>
      <div class="container svc-page-hero-inner">
        <div class="svc-page-hero-left">
          <div class="hero-badge-pill">${h.badge}</div>
          <h1 class="svc-page-hero-title reveal-left">${h.title}</h1>
          <p class="svc-page-hero-sub reveal-left reveal-d1">${h.sub}</p>
          <div class="hero-cta-row reveal-left reveal-d2">
            <a href="${h.ctaHref}" class="btn-solid-coral">${h.ctaText} ${I.arrow}</a>
            <a href="${waHref('Hi Henry Corporation, I want to discuss international expansion for my business')}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} ${h.waText}</a>
          </div>
          <div class="hero-trust">
            ${h.trustItems.map(t => `<span class="hero-trust-item">${t}</span>`).join('')}
          </div>
        </div>
        <div class="svc-page-hero-right reveal-right reveal-d1">
          <div class="svc-hero-stats">
            ${h.stats.map((s, i) => `
              <div class="svc-hero-stat reveal reveal-d${i + 1}">
                <div class="svc-hero-stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
                <div class="svc-hero-stat-lbl">${s.label}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="svc-page-hero-scroll" id="hero-scroll" aria-label="Scroll to services">${I.arrowDown}</div>
    </section>
  `;
}

/* ── Global Expansion Services Section ──────────────────── */
function renderGlobalExpansion() {
  if (!HC.globalExpansionServices) return '';
  return `
    <section class="ge-section section-dark section" id="global-expansion">
      <div class="container">
        <div class="ge-hdr reveal">
          <div class="section-label light">Premium Global Services</div>
          <h2 class="section-title" style="color:var(--white)">Global Expansion Services</h2>
          <p class="section-sub" style="color:rgba(255,255,255,0.52);max-width:600px">
            End-to-end support for brands entering UAE, Europe, and international markets — from company formation to live marketplace sales.
          </p>
        </div>
        <div class="ge-grid">
          ${HC.globalExpansionServices.map((s, i) => `
            <div class="ge-card reveal reveal-d${(i % 3) + 1}">
              <div class="ge-card-top">
                <span class="ge-tag">${s.tag}</span>
                <span class="ge-icon">${s.icon}</span>
              </div>
              <h3 class="ge-title">${s.title}</h3>
              <p class="ge-overview">${s.overview}</p>
              <ul class="ge-benefits">
                ${s.benefits.map(b => `<li>${I.check} ${b}</li>`).join('')}
              </ul>
              <div class="ge-outcome">
                <span class="ge-outcome-label">Outcome</span>
                <span class="ge-outcome-text">${s.outcome}</span>
              </div>
              <a href="contact.html" class="ge-cta">${s.cta} ${I.arrow}</a>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Services Why Choose Us ──────────────────────────────── */
function renderServicesWhyUs() {
  if (!HC.servicesWhyUs) return '';
  return `
    <section class="svcu-section section">
      <div class="container">
        <div class="svcu-hdr">
          <div class="section-label">Why Choose Us</div>
          <h2 class="section-title reveal">Why Businesses Choose<br>Henry Corporation</h2>
          <p class="section-sub reveal reveal-d1">We're not a typical compliance firm. We're a hands-on international expansion partner — with market knowledge, a global network, and a track record that speaks for itself.</p>
        </div>
        <div class="svcu-grid">
          ${HC.servicesWhyUs.map((w, i) => `
            <div class="svcu-card reveal reveal-d${(i % 3) + 1}">
              <div class="svcu-icon">${w.icon}</div>
              <h3 class="svcu-title">${w.title}</h3>
              <p class="svcu-desc">${w.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Services Stats Bar ──────────────────────────────────── */
function renderServicesStats() {
  const stats = HC.servicesHero ? HC.servicesHero.stats : HC.stats;
  return `
    <div class="svs-stats-bar">
      <div class="container">
        <div class="svs-stats-grid">
          ${stats.map((s, i) => `
            <div class="svs-stat reveal reveal-d${i + 1}">
              <div class="svs-stat-num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="svs-stat-lbl">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ── How We Work (5-Step Timeline) ──────────────────────── */
function renderHowWeWork() {
  if (!HC.howWeWork) return '';
  return `
    <section class="hww-section section-dark section" id="how-we-work">
      <div class="container">
        <div class="hww-hdr">
          <div class="section-label light">Our Process</div>
          <h2 class="section-title reveal" style="color:var(--white)">How We Work</h2>
          <p class="section-sub reveal reveal-d1" style="color:rgba(255,255,255,0.52)">A proven 5-step process — from free consultation to global expansion. Transparent, structured, and results-driven.</p>
        </div>
        <div class="hww-steps">
          ${HC.howWeWork.map((p, i) => `
            <div class="hww-step reveal reveal-d${i + 1}">
              <div class="hww-step-head">
                <span class="hww-num">${p.step}</span>
                ${i < HC.howWeWork.length - 1 ? '<span class="hww-connector" aria-hidden="true"></span>' : ''}
              </div>
              <div class="hww-step-icon">${p.icon}</div>
              <h3 class="hww-step-title">${p.title}</h3>
              <p class="hww-step-desc">${p.desc}</p>
            </div>`).join('')}
        </div>
        <div class="hww-cta reveal">
          <a href="contact.html" class="btn-solid-coral">Start Your Journey ${I.arrow}</a>
          <a href="${waHref('Hi Henry Corporation, I want to start my international expansion')}" class="btn-ghost" target="_blank" rel="noopener">${I.wa} WhatsApp Us</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Services Lead Capture Form ──────────────────────────── */
function renderServicesLeadForm() {
  return `
    <section class="slf-section" id="get-roadmap">
      <div class="container">
        <div class="slf-inner">
          <div class="slf-left reveal-left">
            <div class="section-label light">Get Started Today</div>
            <h2 class="slf-title">Ready To Expand Your<br>Business Globally?</h2>
            <p class="slf-sub">Tell us about your business and we'll build a personalised international expansion roadmap — completely free.</p>
            <ul class="slf-benefits">
              <li>${I.check} Free 30-minute consultation</li>
              <li>${I.check} Custom expansion roadmap</li>
              <li>${I.check} No obligation, no pressure</li>
              <li>${I.check} Response within 2 business hours</li>
            </ul>
          </div>
          <div class="slf-right reveal-right">
            <form class="slf-form" id="slf-form" novalidate>
              <div class="slf-form-row">
                <div class="slf-group">
                  <label class="slf-label" for="slf-name">Full Name <span class="cs-required">*</span></label>
                  <input class="slf-input" type="text" id="slf-name" placeholder="Rajesh Kumar" required />
                </div>
                <div class="slf-group">
                  <label class="slf-label" for="slf-company">Company</label>
                  <input class="slf-input" type="text" id="slf-company" placeholder="ABC Exports Pvt Ltd" />
                </div>
              </div>
              <div class="slf-form-row">
                <div class="slf-group">
                  <label class="slf-label" for="slf-product">Product / Category <span class="cs-required">*</span></label>
                  <input class="slf-input" type="text" id="slf-product" placeholder="e.g. Handicrafts, Spices, Fashion" required />
                </div>
                <div class="slf-group">
                  <label class="slf-label" for="slf-country">Target Country</label>
                  <select class="slf-input slf-select" id="slf-country">
                    <option value="">Select target market…</option>
                    ${HC.contactForm.targetCountries.map(c => `<option value="${c}">${c}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="slf-form-row">
                <div class="slf-group">
                  <label class="slf-label" for="slf-email">Email Address</label>
                  <input class="slf-input" type="email" id="slf-email" placeholder="you@company.com" />
                </div>
                <div class="slf-group">
                  <label class="slf-label" for="slf-phone">Phone / WhatsApp <span class="cs-required">*</span></label>
                  <input class="slf-input" type="tel" id="slf-phone" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div class="slf-group">
                <label class="slf-label" for="slf-msg">Message / Requirement</label>
                <textarea class="slf-input slf-textarea" id="slf-msg" placeholder="Tell us about your products, current export status, and what you want to achieve internationally…" rows="3"></textarea>
              </div>
              <button type="submit" class="slf-submit">Get My Expansion Roadmap ${I.arrow}</button>
              <p class="slf-privacy">Your information is 100% confidential. We never share data with third parties.</p>
            </form>
            <div class="slf-success" id="slf-success" hidden>
              <div class="cs-success-icon">✓</div>
              <h3 class="cs-success-title">Request Received!</h3>
              <p class="cs-success-sub">Thank you! We'll reach out within 2 business hours to discuss your expansion goals. Check WhatsApp for a quick confirmation.</p>
              <a href="${waHref('Hi Henry Corporation! I just submitted an expansion roadmap request. Looking forward to speaking with you.')}" class="btn-solid-coral" target="_blank" rel="noopener" style="margin-top:20px;display:inline-flex">${I.wa} Confirm on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Services-Specific FAQ ───────────────────────────────── */
function renderServicesFAQ() {
  if (!HC.servicesFaqs) return '';
  return `
    <section class="faq-section section" id="services-faq">
      <div class="container">
        <div class="faq-hdr">
          <div class="section-label">Have Questions?</div>
          <h2 class="section-title reveal">Frequently Asked Questions</h2>
          <p class="section-sub reveal reveal-d1">Everything you need to know about our international trade and export consulting services.</p>
        </div>
        <div class="faq-list">
          ${HC.servicesFaqs.map(f => `
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

/* ── Services Page Composer ──────────────────────────────── */
function renderServicesPage() {
  document.getElementById('main-root').innerHTML = [
    renderServicesHero(),
    renderMarquee(),
    renderServicesStats(),
    renderServices(),
    renderGlobalExpansion(),
    renderServicesWhyUs(),
    renderHowWeWork(),
    renderTestimonials(),
    renderServicesLeadForm(),
    renderServicesFAQ(),
    renderCTA(),
  ].join('');
}

/* ── Why Sell Globally ─────────────────────────────────── */
function renderWhySellGlobally() {
  return `
    <section class="section wsg-section">
      <div class="container">
        <div class="wsg-hdr">
          <div class="eyebrow">Why Go Global?</div>
          <h2 class="wsg-title">6 Reasons Indian Brands Are Selling Worldwide</h2>
          <p class="wsg-sub">The global e-commerce opportunity for Indian brands has never been larger. Here's why smart businesses are expanding now.</p>
        </div>
        <div class="wsg-grid">
          ${HC.whySellGlobally.map((w, i) => `
            <div class="wsg-card reveal reveal-d${(i % 3) + 1}">
              <div class="wsg-icon">${w.icon}</div>
              <div class="wsg-stat">${w.stat}</div>
              <div class="wsg-label">${w.label}</div>
              <p class="wsg-desc">${w.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Export Process ────────────────────────────────────── */
function renderExportProcess() {
  return `
    <section class="section ep-section">
      <div class="container">
        <div class="ep-hdr">
          <div class="eyebrow">How It Works</div>
          <h2 class="ep-title">Your 8-Step Journey to Global Markets</h2>
          <p class="ep-sub">From assessment to launch — we handle everything so you can focus on your products.</p>
        </div>
        <div class="ep-grid">
          ${HC.exportProcess.map((p, i) => `
            <div class="ep-step reveal reveal-d${(i % 4) + 1}">
              <div class="ep-step-num">${p.step}</div>
              <h3 class="ep-step-title">${p.title}</h3>
              <p class="ep-step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── D2C Global ────────────────────────────────────────── */
function renderD2CGlobal() {
  return `
    <section class="section d2c-section">
      <div class="container">
        <div class="d2c-hdr">
          <div class="eyebrow">D2C Global</div>
          <h2 class="d2c-title">Direct-to-Consumer Global Expansion</h2>
          <p class="d2c-sub">Build your own global brand — sell directly to international customers through your own store and social channels, not just marketplaces.</p>
        </div>
        <div class="d2c-grid">
          ${HC.d2cGlobal.map((s, i) => `
            <div class="d2c-card reveal reveal-d${(i % 4) + 1}">
              <div class="d2c-icon">${s.icon}</div>
              <h3 class="d2c-card-title">${s.title}</h3>
              <p class="d2c-card-desc">${s.desc}</p>
              <span class="d2c-price">${s.pricing}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── B2B Export ────────────────────────────────────────── */
function renderB2BExport() {
  return `
    <section class="section b2b-section">
      <div class="container">
        <div class="b2b-hdr">
          <div class="eyebrow">B2B Export</div>
          <h2 class="b2b-title">B2B Export & Wholesale Services</h2>
          <p class="b2b-sub">Beyond retail marketplaces — unlock wholesale and B2B export opportunities through Alibaba, international buyer networks and direct export channels.</p>
        </div>
        <div class="b2b-grid">
          ${HC.b2bExport.map((s, i) => `
            <div class="b2b-card reveal reveal-d${(i % 4) + 1}">
              <div class="b2b-icon">${s.icon}</div>
              <h3 class="b2b-card-title">${s.title}</h3>
              <p class="b2b-card-desc">${s.desc}</p>
              <span class="b2b-price">${s.pricing}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ── Country Markets ───────────────────────────────────── */
function renderCountryDetailPanel(d, countryId) {
  return `
    <div class="cm-detail-panel" id="cm-detail-${countryId}" hidden>
      <div class="cm-detail-inner">
        <div class="cm-detail-overview">
          <div class="cm-detail-label">Overview</div>
          <p class="cm-detail-text">${d.overview}</p>
        </div>
        <div class="cm-detail-grid">
          <div class="cm-detail-col">
            <div class="cm-detail-label">Eligibility Requirements</div>
            <ul class="cm-detail-list">
              ${d.eligibility.map(e => `<li>${I.check} ${e}</li>`).join('')}
            </ul>
          </div>
          <div class="cm-detail-col">
            <div class="cm-detail-label">Documents Required</div>
            <ul class="cm-detail-list">
              ${d.documents.map(doc => `<li>${I.check} ${doc}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="cm-detail-process">
          <div class="cm-detail-label">Setup Process</div>
          <ol class="cm-process-list">
            ${d.process.map((step, i) => `<li><span class="cm-step-num">${String(i + 1).padStart(2, '0')}</span>${step}</li>`).join('')}
          </ol>
        </div>
        <div class="cm-detail-grid cm-detail-grid--3">
          <div class="cm-detail-info-box">
            <div class="cm-detail-label">VAT / Tax</div>
            <p class="cm-detail-text cm-detail-text--sm">${d.vatInfo}</p>
          </div>
          <div class="cm-detail-info-box">
            <div class="cm-detail-label">Logistics</div>
            <p class="cm-detail-text cm-detail-text--sm">${d.logistics}</p>
          </div>
          <div class="cm-detail-info-box cm-detail-info-box--cta">
            <div class="cm-detail-label">Timeline & Pricing</div>
            <div class="cm-meta-badges">
              <span class="cm-badge cm-badge--time">${I.clock} ${d.timeline}</span>
              <span class="cm-badge cm-badge--price">${d.pricing}</span>
            </div>
            <a href="contact.html" class="btn-solid-coral cm-cta-btn">Start Expansion ${I.arrow}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCountryMarkets() {
  return `
    <section class="section cm-section">
      <div class="container">
        <div class="cm-hdr">
          <div class="eyebrow">Country-by-Country Expansion</div>
          <h2 class="cm-title">Choose Your Target Market</h2>
          <p class="cm-sub">Click any country to see platforms, compliance requirements, setup process, VAT details, logistics and pricing — everything you need to expand there.</p>
        </div>
        <div class="cm-list">
          ${HC.countryMarkets.map((c, i) => `
            <div class="cm-card reveal reveal-d${(i % 3) + 1}" data-country="${c.id}">
              <button class="cm-card-header" aria-expanded="false" aria-controls="cm-detail-${c.id}">
                <div class="cm-card-header-left">
                  <span class="cm-flag">${c.flag}</span>
                  <div class="cm-card-info">
                    <span class="cm-country-name">${c.name}</span>
                    <span class="cm-region">${c.region}</span>
                  </div>
                  <span class="cm-tagline">${c.tagline}</span>
                </div>
                <div class="cm-card-header-right">
                  <div class="cm-platform-tags">
                    ${c.platforms.slice(0, 3).map(p => `<span class="cm-platform-tag">${p}</span>`).join('')}
                    ${c.platforms.length > 3 ? `<span class="cm-platform-tag cm-platform-tag--more">+${c.platforms.length - 3} more</span>` : ''}
                  </div>
                  <span class="cm-toggle-icon">${I.plus}</span>
                </div>
              </button>
              <div class="cm-card-intro">${c.intro}</div>
              ${renderCountryDetailPanel(c.detail, c.id)}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderPlatformsPage() {
  document.getElementById('main-root').innerHTML = [
    renderPageHero('platforms'),
    renderMarquee(),
    renderWhySellGlobally(),
    renderCountryMarkets(),
    renderD2CGlobal(),
    renderB2BExport(),
    renderExportProcess(),
    renderPlatformGrid(),
    renderStats(),
    renderCTA(),
  ].join('');
}

function renderWhyUsPage() {
  document.getElementById('main-root').innerHTML = [
    renderPageHero('why-us'),
    renderWhyUs(),
    renderCertifications(),
    renderTestimonials(),
    renderProcess(),
    renderCTA(),
  ].join('');
}

function renderPricingPage() {
  document.getElementById('main-root').innerHTML = [
    renderPageHero('pricing'),
    renderPricing(),
    renderFAQ(),
    renderCTA(),
  ].join('');
}

function renderContactPage() {
  document.getElementById('main-root').innerHTML = renderContact();
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
    const target = document.querySelector('.trust-bar') || document.querySelector('main > *:nth-child(2)');
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
        panel.querySelectorAll('.svc-detail-btn[aria-expanded="true"]').forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          btn.innerHTML = `Details ${I.plus}`;
          const p = btn.closest('.svc-card-full').querySelector('.svc-detail-panel');
          if (p) { p.style.maxHeight = '0'; p.hidden = true; }
        });
      }
    });
  });
}

function initServiceDetails() {
  document.querySelectorAll('.svc-detail-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card   = btn.closest('.svc-card-full');
      const panel  = card.querySelector('.svc-detail-panel');
      if (!panel) return;

      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      const grid = card.closest('.svc-grid-full');
      if (grid) {
        grid.querySelectorAll('.svc-detail-btn[aria-expanded="true"]').forEach(otherBtn => {
          if (otherBtn === btn) return;
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.innerHTML = `Details ${I.plus}`;
          const otherPanel = otherBtn.closest('.svc-card-full').querySelector('.svc-detail-panel');
          if (otherPanel) {
            otherPanel.style.maxHeight = '0';
            setTimeout(() => { otherPanel.hidden = true; }, 450);
          }
        });
      }

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `Details ${I.plus}`;
        panel.style.maxHeight = '0';
        setTimeout(() => { panel.hidden = true; }, 450);
      } else {
        panel.hidden = false;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          });
        });
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = `Close ${I.plus}`;
        panel.addEventListener('transitionend', () => {
          if (btn.getAttribute('aria-expanded') === 'true') {
            panel.style.maxHeight = 'none';
          }
        }, { once: true });
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
  const items = document.querySelectorAll('.stat-num[data-target], .svc-hero-stat-num[data-target], .svs-stat-num[data-target]');
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
  const slides   = document.querySelectorAll('.cs-slide:not(.cs-slide--success)');
  const successSlide = document.querySelector('.cs-slide--success');
  const counter  = document.getElementById('cs-counter');
  const promptEl = document.getElementById('cs-prompt');
  const nextBtn  = document.getElementById('cs-next');
  const backBtn  = document.getElementById('cs-back');
  const navRow   = document.getElementById('cs-nav-row');
  if (!nextBtn || !slides.length) return;

  const prompts = [
    'Step 1 of 3 — Your marketplace',
    'Step 2 of 3 — Service needed',
    'Step 3 of 3 — Your details',
  ];

  function goTo(n) {
    slides[step].classList.remove('active');
    step = n;
    if (step < slides.length) {
      slides[step].classList.add('active');
    }
    counter.textContent  = `${Math.min(step + 1, 3)} / 3`;
    promptEl.textContent = prompts[Math.min(step, 2)];
    backBtn.classList.toggle('hidden', step === 0);
    nextBtn.innerHTML = step === 2
      ? `Send Enquiry ${I.arrow}`
      : `Next ${I.arrow}`;
  }

  document.querySelectorAll('.cs-svc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      document.querySelectorAll(`.cs-svc-btn[data-key="${key}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selections[key] = btn.dataset.value;
      setTimeout(() => { if (step < 2) goTo(step + 1); }, 280);
    });
  });

  nextBtn.addEventListener('click', () => {
    if (step < 2) {
      goTo(step + 1);
      return;
    }
    const nameEl  = document.getElementById('cs-name');
    const phoneEl = document.getElementById('cs-phone');
    if (nameEl && !nameEl.value.trim()) { nameEl.focus(); nameEl.style.borderColor = 'var(--coral)'; return; }
    if (phoneEl && !phoneEl.value.trim()) { phoneEl.focus(); phoneEl.style.borderColor = 'var(--coral)'; return; }

    const name    = nameEl?.value || '';
    const company = document.getElementById('cs-company')?.value || '';
    const phone   = phoneEl?.value || '';
    const email   = document.getElementById('cs-email')?.value || '';
    const product = document.getElementById('cs-product')?.value || '';
    const country = document.getElementById('cs-country')?.value || '';
    const msg     = document.getElementById('cs-msg')?.value || '';

    const text = [
      `Hi Henry Corporation! I'd like to book a free consultation.`,
      ``,
      `Name: ${name}`,
      company ? `Company: ${company}` : '',
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Marketplace: ${selections.marketplace || '—'}`,
      `Service Needed: ${selections.service || '—'}`,
      product ? `Product Category: ${product}` : '',
      country ? `Target Country: ${country}` : '',
      msg ? `Requirement: ${msg}` : '',
      ``,
      `Please get in touch at your earliest convenience!`,
    ].filter(Boolean).join('\n');

    window.open(waHref(text), '_blank', 'noopener');

    slides[step].classList.remove('active');
    if (successSlide) successSlide.classList.add('active');
    if (navRow) navRow.style.display = 'none';
    counter.textContent = '✓ Done';
    promptEl.textContent = 'Your message has been prepared';
  });

  backBtn.addEventListener('click', () => { if (step > 0) goTo(step - 1); });
}

function initServicesLeadForm() {
  const form = document.getElementById('slf-form');
  const success = document.getElementById('slf-success');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl  = document.getElementById('slf-name');
    const phoneEl = document.getElementById('slf-phone');
    const prodEl  = document.getElementById('slf-product');
    let valid = true;
    [nameEl, phoneEl, prodEl].forEach(el => {
      if (el && el.required && !el.value.trim()) {
        el.style.borderColor = 'var(--coral)';
        if (valid) el.focus();
        valid = false;
      } else if (el) {
        el.style.borderColor = '';
      }
    });
    if (!valid) return;

    const name    = nameEl?.value.trim() || '';
    const company = document.getElementById('slf-company')?.value.trim() || '';
    const product = prodEl?.value.trim() || '';
    const country = document.getElementById('slf-country')?.value || '';
    const email   = document.getElementById('slf-email')?.value.trim() || '';
    const phone   = phoneEl?.value.trim() || '';
    const msg     = document.getElementById('slf-msg')?.value.trim() || '';

    const text = [
      `Hi Henry Corporation! I'd like to get my International Expansion Roadmap.`,
      ``,
      `Name: ${name}`,
      company ? `Company: ${company}` : '',
      `Product / Category: ${product}`,
      country ? `Target Market: ${country}` : '',
      phone   ? `Phone: ${phone}` : '',
      email   ? `Email: ${email}` : '',
      msg     ? `Requirement: ${msg}` : '',
      ``,
      `Please send me a personalised expansion roadmap!`,
    ].filter(Boolean).join('\n');

    window.open(waHref(text), '_blank', 'noopener');

    form.hidden = true;
    if (success) success.hidden = false;
  });
}

function initCountryAccordions() {
  document.querySelectorAll('.cm-card-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const card   = btn.closest('.cm-card');
      const panel  = card.querySelector('.cm-detail-panel');
      const intro  = card.querySelector('.cm-card-intro');
      if (!panel) return;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // close all open panels
      document.querySelectorAll('.cm-card-header[aria-expanded="true"]').forEach(b => {
        if (b === btn) return;
        b.setAttribute('aria-expanded', 'false');
        b.querySelector('.cm-toggle-icon').innerHTML = I.plus;
        const p = b.closest('.cm-card').querySelector('.cm-detail-panel');
        const intro2 = b.closest('.cm-card').querySelector('.cm-card-intro');
        if (p) { p.style.maxHeight = '0'; setTimeout(() => { p.hidden = true; }, 400); }
        if (intro2) intro2.style.maxHeight = '0';
      });

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.cm-toggle-icon').innerHTML = I.plus;
        panel.style.maxHeight = '0';
        if (intro) intro.style.maxHeight = '0';
        setTimeout(() => { panel.hidden = true; }, 400);
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.cm-toggle-icon').innerHTML = I.minus;
        panel.hidden = false;
        if (intro) {
          intro.style.maxHeight = intro.scrollHeight + 'px';
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.addEventListener('transitionend', () => {
              if (btn.getAttribute('aria-expanded') === 'true') panel.style.maxHeight = 'none';
            }, { once: true });
          });
        });
      }
    });
  });
}

/* ── Init ───────────────────────────────────────────────── */
function init() {
  renderMeta();
  renderNav();
  renderMobileNav();

  const pageMap = {
    home:      renderHomePage,
    services:  renderServicesPage,
    platforms: renderPlatformsPage,
    'why-us':  renderWhyUsPage,
    pricing:   renderPricingPage,
    contact:   renderContactPage,
    blog:      renderBlogPage,
    // Legal pages carry their own static <main> content — no-op render.
    privacy:   () => {},
    terms:     () => {},
  };
  // Blog post pages render their own static article — don't overwrite <main>
  if (PAGE !== 'blog-post') {
    (pageMap[PAGE] || renderHomePage)();
  }

  renderFooter();
  renderFloats();

  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();

  initScrollNav();
  if (PAGE === 'home') { initHeroHeadline(); initParallax(); initHeroScroll(); }
  else initHeroScroll();
  initReveal();
  if (PAGE === 'services' || PAGE === 'home') { initServiceTabs(); initServiceDetails(); }
  initFAQ();
  initMobileMenu();
  initStatCounters();
  if (PAGE === 'contact' || PAGE === 'home') initContactSlider();
  if (PAGE === 'services' || PAGE === 'home') initServicesLeadForm();
  if (PAGE === 'platforms') initCountryAccordions();
}

document.addEventListener('DOMContentLoaded', init);
