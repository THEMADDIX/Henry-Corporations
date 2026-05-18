/* ================================================================
   Henry Corporation — Site Data
   ================================================================
   This is the SINGLE SOURCE OF TRUTH for all site content.
   Edit here to update text, contacts, services, or any copy.
   ================================================================ */

const HC = {

  // ── Company & Contact ────────────────────────────────────────────
  company: {
    name:        'Henry Corporation',
    shortName:   'Henry Corp',
    brandLetter: 'H',
    phone:       '+91 96933 34119',
    phoneTel:    'tel:+919693334119',
    waNumber:    '919693334119',
    hours:       'Mon – Sat, 10:00 AM – 7:00 PM IST',
    serving:     'India & UAE',
    sellerCount: 500,
    footerDesc:  'Complete e-commerce seller management — GST, accounting, compliance and growth — for Amazon, Flipkart, Meesho, Shopsy, Myntra sellers and UAE businesses.',
  },

  // ── SEO / Meta ──────────────────────────────────────────────────
  meta: {
    title:         'Henry Corporation — Complete E-Commerce Seller Management | GST, Accounting & UAE VAT',
    description:   'Henry Corporation helps Amazon, Flipkart, Meesho, Shopsy & Myntra sellers manage GST, taxation, accounting, cataloging & compliance. UAE VAT services included. Trusted by 500+ sellers.',
    keywords:      'Amazon seller GST filing, Flipkart seller accountant, Meesho GST services, E-commerce GST consultant India, Amazon account management services, UAE VAT filing services, E-commerce bookkeeping India, Seller account management company',
    ogTitle:       'Henry Corporation — Complete E-Commerce Seller Management',
    ogDescription: 'From GST to Growth — your back office for e-commerce success across Amazon, Flipkart, Meesho, Myntra & UAE marketplaces.',
  },

  // ── Navigation ───────────────────────────────────────────────────
  nav: [
    { label: 'Services',  href: '#services'     },
    { label: 'Platforms', href: '#marketplaces'  },
    { label: 'UAE',       href: '#uae'           },
    { label: 'About',     href: '#about'         },
    { label: 'Contact',   href: '#contact'       },
  ],

  // ── Hero Section ─────────────────────────────────────────────────
  hero: {
    eyebrow:      'Trusted by 500+ Indian Sellers',
    title:        'Your <span class="grad-text">complete e-commerce</span> back office.',
    sub:          'Henry Corporation handles your GST, accounting, seller accounts and UAE VAT — so you can focus entirely on growing your business across Amazon, Flipkart, Meesho and more.',
    ctaText:      'Free Consultation',
    ctaHref:      '#contact',
    waText:       'WhatsApp Us',
    waMsg:        "Hi Henry Corporation, I'd like a consultation",
    trustText:    '500+ sellers trust Henry Corp',
    trustAvatars: ['AK', 'PS', 'RM', 'VN'],
    badge1: { label: 'Monthly Revenue',   val: '₹12.4L ↑ 23%'       },
    badge2: { label: 'Compliance Status', val: 'All filings current ✓'   },
    dashMetrics: [
      { label: 'GST Filed',          value: '₹8.2L', delta: 'On time'   },
      { label: 'Payouts Reconciled', value: '100%',       delta: 'Zero gaps' },
    ],
    chartBadge:  '+28% MoM',
    platforms:   ['AMZ', 'FK', 'MSH', 'SHP', 'MYN'],
  },

  // ── Statistics ───────────────────────────────────────────────────
  stats: [
    { value: 500, suffix: '+',          label: 'Active Sellers'       },
    { value: 5,   suffix: '+',          label: 'Marketplaces Covered' },
    { value: 99,  suffix: '%',          label: 'On-time Filing Rate'  },
    { value: 2,   suffix: ' Countries', label: 'India &amp; UAE'      },
  ],

  // ── Marquee ──────────────────────────────────────────────────────
  marquee: [
    { name: 'Amazon India', color: '#ff9900' },
    { name: 'Flipkart',     color: '#2874f0' },
    { name: 'Meesho',       color: '#f43397' },
    { name: 'Shopsy',       color: '#2874f0' },
    { name: 'Myntra',       color: '#ff3f6c' },
    { name: 'Shopify D2C',  color: '#96bf48' },
    { name: 'Amazon UAE',   color: '#a855f7' },
    { name: 'UAE Noon',     color: '#10b981' },
  ],

  // ── Services ─────────────────────────────────────────────────────
  services: [
    {
      featured: true,
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      title:    'E-Commerce Seller Management',
      desc:     'Full account management across Amazon, Flipkart, Meesho, Shopsy and Myntra — catalog, listings, performance health and seller support handled.',
      linkHref: '#contact',
      linkText: 'Get started',
    },
    {
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      title:    'GST &amp; Taxation',
      desc:     'GSTR-1, GSTR-3B, TCS reconciliation and notice handling across all your marketplaces. On-time, every time.',
      linkHref: '#contact',
      linkText: 'Learn more',
    },
    {
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      title:    'Accounting &amp; Bookkeeping',
      desc:     'Clean books, monthly P&amp;L, payout reconciliation and a real view of your margins — so every business decision is data-backed.',
      linkHref: '#contact',
      linkText: 'Learn more',
    },
    {
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      title:    'UAE VAT Services',
      desc:     'FTA registration, quarterly VAT filings and cross-border India↔UAE tax structuring for Indian brands expanding to the UAE.',
      linkHref: '#uae',
      linkText: 'Explore UAE',
    },
    {
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      title:    'Loan &amp; Project Reports',
      desc:     'Professionally prepared CMA data, project reports and financial projections to help you secure business loans and credit lines.',
      linkHref: '#contact',
      linkText: 'Learn more',
    },
    {
      icon:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title:    'Dedicated Account Manager',
      desc:     'One expert who knows your business, your marketplaces and your filing calendar. No handoffs, no repeat explanations — ever.',
      linkHref: '#contact',
      linkText: 'Get yours',
    },
  ],

  // ── Platforms ────────────────────────────────────────────────────
  platforms: [
    {
      id:       'amazon',
      name:     'amazon',
      region:   'India',
      features: ['Catalog management', 'Account handling', 'A-to-Z claims &amp; appeals', 'Brand registry support'],
    },
    {
      id:       'flipkart',
      name:     'Flipkart',
      region:   'India',
      features: ['Seller hub management', 'Listing &amp; cataloging', 'Performance compliance', 'Seller growth support'],
    },
    {
      id:       'meesho',
      name:     'Meesho',
      region:   'India',
      features: ['Catalog management', 'GST &amp; invoicing', 'Return reconciliation', 'Compliance support'],
    },
    {
      id:       'shopsy',
      name:     'Shopsy',
      region:   'India',
      features: ['Account onboarding', 'Product listing', 'Order &amp; return ops', 'Seller growth advisory'],
    },
    {
      id:       'myntra',
      name:     'Myntra',
      region:   'India',
      features: ['Brand onboarding', 'Catalog &amp; imagery norms', 'Compliance handling', 'Seller growth support'],
    },
    {
      id:       'd2c',
      name:     'D2C / Shopify',
      region:   '+UAE',
      features: ['Storefront setup', 'Payment &amp; GST integration', 'Cross-border compliance', 'Growth advisory'],
    },
  ],

  // ── UAE Section ──────────────────────────────────────────────────
  uae: {
    flag:    'United Arab Emirates',
    title:   'Expand globally with <span class="grad-text">UAE VAT</span> support.',
    sub:     'Whether you’re an Indian D2C brand entering Dubai, an Amazon.ae seller, or a UAE-based business needing accounting — we handle registration, filings and ongoing compliance so you can scale without friction.',
    ctaText: 'Talk to UAE Expert',
    waMsg:   'Hi, I need UAE VAT support',
    features: [
      {
        title: 'UAE VAT Registration',
        desc:  'End-to-end onboarding with FTA',
        icon:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
      },
      {
        title: 'Quarterly Return Filing',
        desc:  'Accurate, on-time submissions',
        icon:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>`,
      },
      {
        title: 'Cross-Border Taxation',
        desc:  'India ↔ UAE structuring &amp; advisory',
        icon:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg>`,
      },
      {
        title: 'UAE Seller Accounting',
        desc:  'Books, payouts &amp; reconciliation',
        icon:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
    ],
  },

  // ── Process Steps ────────────────────────────────────────────────
  process: [
    { num: '01', title: 'Consultation',           desc: 'Free 30-min call to understand your marketplace, scale and compliance gaps.' },
    { num: '02', title: 'Documentation',          desc: 'We collect KYC, GST credentials &amp; marketplace logins on a secure channel.' },
    { num: '03', title: 'Setup &amp; Compliance', desc: 'Account audit, catalog cleanup, GST filing backlog and reconciliation baseline.' },
    { num: '04', title: 'Monthly Management',     desc: 'Dedicated manager, monthly reports and proactive growth recommendations.' },
  ],

  // ── Testimonials ─────────────────────────────────────────────────
  testimonials: [
    {
      quote:       '“Henry’s team cleaned up six months of unfiled GST and reconciled my Amazon payouts in three weeks. I finally know what my actual margins are.”',
      name:        'Arun Kumar',
      role:        'Amazon Seller · Home &amp; Kitchen',
      initials:    'AK',
      avatarClass: 'a',
    },
    {
      quote:       '“The Meesho return-to-payout mismatch was killing us. They built a reconciliation system that catches every short payment. Worth every rupee.”',
      name:        'Priya Sharma',
      role:        'Meesho Seller · Fashion',
      initials:    'PS',
      avatarClass: 'd',
    },
    {
      quote:       '“Set up our UAE VAT registration from scratch and now handle our quarterly filings. Genuinely the easiest cross-border experience we’ve had.”',
      name:        'Rashid Al-Mansouri',
      role:        'UAE Business Owner · Dubai',
      initials:    'RM',
      avatarClass: 'c',
    },
    {
      quote:       '“Quick response on every Flipkart performance notice. Our account health score went from ‘at risk’ to ‘good standing’ in two months.”',
      name:        'Vikram Nair',
      role:        'Flipkart Seller · Electronics',
      initials:    'VN',
      avatarClass: 'b',
    },
    {
      quote:       '“I run on three marketplaces. Having one team handle GST, listings and books across all of them is a game-changer. Highly recommend.”',
      name:        'Sneha Gupta',
      role:        'Multi-Marketplace D2C Brand',
      initials:    'SG',
      avatarClass: 'a',
    },
    {
      quote:       '“They handled a tricky GST notice I’d been worrying about for weeks. Calm, clear, fast. Felt like I had a real CFO in my corner.”',
      name:        'Mohit Jain',
      role:        'Myntra Seller · Apparel',
      initials:    'MJ',
      avatarClass: 'c',
    },
  ],

  // ── FAQs ─────────────────────────────────────────────────────────
  faqs: [
    {
      q: 'Do you work with sellers on all major marketplaces?',
      a: 'Yes — Amazon India, Flipkart, Meesho, Shopsy, Myntra, and D2C platforms like Shopify. We also support UAE marketplaces including Amazon.ae and Noon.',
    },
    {
      q: 'How does GST filing work for multi-marketplace sellers?',
      a: 'We consolidate sales data from each marketplace, reconcile it with payouts, calculate the correct GST liability (including TCS), and file GSTR-1 and GSTR-3B on time. We also manage FBA-related interstate complexity.',
    },
    {
      q: 'Do you handle UAE VAT for Indian businesses expanding overseas?',
      a: 'Yes. We help with FTA registration, ongoing quarterly VAT filings, cross-border invoicing structures and accounting for both your India and UAE entities.',
    },
    {
      q: 'Will I get a dedicated point of contact?',
      a: 'Every client is assigned a dedicated account manager who knows your marketplaces, your books and your filing calendar. You’ll never have to re-explain your business.',
    },
    {
      q: 'How quickly can you onboard my business?',
      a: 'Most onboarding completes in 5–7 working days once documents are shared. Urgent cases (notices, deadlines) can be expedited within 24–48 hours.',
    },
    {
      q: 'Do you offer pricing plans?',
      a: 'We offer monthly retainers tailored to your scale and number of marketplaces. Reach out via WhatsApp or the contact form and we’ll share a quote within a day.',
    },
  ],

  // ── Contact Form Options ─────────────────────────────────────────
  contactForm: {
    marketplaces: ['Amazon', 'Flipkart', 'Meesho', 'Shopsy', 'Myntra', 'D2C / Shopify', 'UAE Marketplace', 'Multiple'],
    services:     ['E-Commerce Seller Management', 'GST & Taxation', 'Accounting & Bookkeeping', 'UAE VAT Services', 'Loan & Project Reports', 'Multiple Services'],
  },

  // ── Footer Links ─────────────────────────────────────────────────
  footerLinks: {
    services: [
      { label: 'Seller Management',  href: '#services'    },
      { label: 'GST &amp; Taxation', href: '#services'    },
      { label: 'Accounting',         href: '#services'    },
      { label: 'UAE VAT',            href: '#uae'         },
      { label: 'Loan Documentation', href: '#services'    },
    ],
    platforms: [
      { label: 'Amazon',   href: '#marketplaces' },
      { label: 'Flipkart', href: '#marketplaces' },
      { label: 'Meesho',   href: '#marketplaces' },
      { label: 'Shopsy',   href: '#marketplaces' },
      { label: 'Myntra',   href: '#marketplaces' },
    ],
  },
};
