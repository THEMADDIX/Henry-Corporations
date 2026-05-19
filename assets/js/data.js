/* ================================================================
   Henry Corporation — Site Data  (Single Source of Truth)
   ================================================================
   Edit THIS FILE to update any content, copy, contact info,
   services, pricing, testimonials, FAQs, or SEO text.
   No HTML or JS knowledge required.
   ================================================================ */

const HC = {

  // ── Company & Contact ────────────────────────────────────────────
  company: {
    name:        'Henry Corporation',
    shortName:   'Henry Corp',
    brandLetter: 'H',
    tagline:     "India & UAE's Premier GST, VAT & E-Commerce Compliance Agency",
    phone:       '+91 96933 34119',
    phoneTel:    'tel:+919693334119',
    email:       'aarif@henry-corporation.com',
    waNumber:    '919693334119',
    hours:       'Mon – Sat, 10:00 AM – 7:00 PM IST',
    location:    'India & UAE',
    gstin:       'GSTIN: Available on request',
    sellerCount: 500,
    yearsExp:    5,
    gstFilings:  2000,
    accountsMgd: 500,
    footerDesc:  'Henry Corporation is a premium global taxation, GST, VAT, and e-commerce compliance agency — serving Amazon, Flipkart, Meesho, Myntra, Alibaba sellers and UAE businesses with end-to-end compliance, accounting, and company formation services.',
  },

  // ── SEO / Meta ───────────────────────────────────────────────────
  meta: {
    title:         'Henry Corporation — GST Filing, UAE VAT & E-Commerce Compliance Agency | India & UAE',
    description:   'Henry Corporation is a premium GST filing, UAE VAT, and e-commerce compliance agency. Serving Amazon, Flipkart, Meesho, Myntra & Alibaba sellers in India and UAE with expert taxation, accounting, company formation and compliance management.',
    keywords:      'GST filing India, UAE VAT filing, Amazon seller accountant, ecommerce tax consultant, LLC formation UAE, Alibaba seller taxation, Flipkart compliance, ITR filing ecommerce, GSTR-1 GSTR-3B, UAE corporate tax, company registration India, Meesho GST filing, cross border ecommerce accounting, GST registration India, UAE VAT registration, TDS TCS reconciliation',
    ogTitle:       'Henry Corporation — Global GST, VAT & E-Commerce Compliance Agency',
    ogDescription: 'Premium compliance agency for India & UAE — GST filing, UAE VAT, Amazon & Alibaba seller accounting, company formation and e-commerce compliance.',
  },

  // ── Navigation ───────────────────────────────────────────────────
  nav: [
    { label: 'Services',   href: 'services.html'  },
    { label: 'Platforms',  href: 'platforms.html' },
    { label: 'Why Us',     href: 'why-us.html'    },
    { label: 'Pricing',    href: 'pricing.html'   },
    { label: 'Contact',    href: 'contact.html'   },
  ],

  // ── Hero Section ─────────────────────────────────────────────────
  hero: {
    badge:      'Trusted by 500+ Businesses Across India & UAE',
    title:      'Global GST, VAT & <span class="coral">E-Commerce Compliance</span> Solutions',
    sub:        'Helping Amazon, Flipkart, Meesho, Alibaba & UAE businesses with taxation, VAT filing, accounting, company formation, and compliance management.',
    ctaText:    'Book Free Consultation',
    ctaHref:    'contact.html',
    waText:     'WhatsApp Support',
    waMsg:      'Hi Henry Corporation, I need GST/VAT compliance and e-commerce services',
    trustBadges: [
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`, label: 'GST Compliance' },
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, label: 'UAE VAT Filing' },
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`, label: 'Amazon Seller Support' },
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`, label: 'LLC Formation' },
    ],
    trustItems: [
      { label: '500+ Businesses Served' },
      { label: '5+ Years Expertise' },
      { label: 'India & UAE Coverage' },
    ],
    dashMetrics: [
      { label: 'Monthly Revenue',   value: '₹12.4L', delta: '↑ 23% MoM' },
      { label: 'GST Compliance',    value: '100%',   delta: '↑ On Time'  },
    ],
    chartBadge: '+28% MoM',
    platforms:  ['AMZ', 'FK', 'MSH', 'MYN', 'SHP'],
    badge1:     { label: 'Account Health', val: 'All Good ✓' },
    badge2:     { label: 'GST Filed',      val: '₹8.2L Filed' },
  },

  // ── Trust / Marquee ──────────────────────────────────────────────
  marquee: [
    { name: 'Amazon India',   color: '#FF9900' },
    { name: 'Flipkart',       color: '#2874F0' },
    { name: 'Meesho',         color: '#F43397' },
    { name: 'Myntra',         color: '#FF3F6C' },
    { name: 'Shopsy',         color: '#2874F0' },
    { name: 'Shopify D2C',    color: '#96bf48' },
    { name: 'Amazon UAE',     color: '#F59E0B' },
    { name: 'UAE Noon',       color: '#10B981' },
    { name: 'GST Filing',     color: '#6366F1' },
    { name: 'TCS/TDS',        color: '#0B1F3A' },
  ],

  // ── Statistics ───────────────────────────────────────────────────
  stats: [
    { value: 500,  suffix: '+', label: 'GST Returns Filed',          sub: 'Accurate & On-Time'     },
    { value: 100,  suffix: '+', label: 'E-Commerce Sellers Managed', sub: 'Across All Platforms'   },
    { value: 5,    suffix: '+', label: 'Years of Expertise',         sub: 'India & UAE Operations' },
    { value: 50,   suffix: '+', label: 'Business Formations Done',   sub: 'India & UAE Entities'   },
  ],

  // ── Service Categories ───────────────────────────────────────────
  serviceCategories: [
    {
      id:    'india',
      label: '🇮🇳 India Services',
      title: 'India GST, Tax & Compliance',
      sub:   'Complete compliance solutions for Indian businesses — GST registration, ITR filing, company formation, MSME registration, and full accounting support.',
      services: [
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`,
          title: 'GST Registration',
          desc:  'Complete GST registration for new businesses and e-commerce sellers. GSTIN application, documentation and verification. Starting from ₹499.',
          link: 'contact.html', linkText: 'Register Now',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
          title: 'GSTR-1 & GSTR-3B Filing',
          desc:  'Accurate monthly GST filing with multi-marketplace data consolidation, TCS reconciliation and timely submission for every business.',
          link: 'contact.html', linkText: 'File GST',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
          title: 'ITR Filing',
          desc:  'Income tax return filing for individuals and businesses — multi-marketplace income consolidation and maximum deductions for e-commerce sellers.',
          link: 'contact.html', linkText: 'File ITR',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
          title: 'TDS/TCS Filing',
          desc:  'Tax Deducted/Collected at Source filing and reconciliation across all marketplace platforms with accurate credit matching and compliance.',
          link: 'contact.html', linkText: 'Learn More',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
          title: 'Company Registration',
          desc:  'Private limited, LLP and sole proprietorship registration — MCA filing, documentation, and complete post-incorporation compliance support.',
          link: 'contact.html', linkText: 'Register Now',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          title: 'MSME / Udyam Registration',
          desc:  'Udyam registration for small businesses to access government schemes, subsidies and priority lending benefits with zero complications.',
          link: 'contact.html', linkText: 'Register Now',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
          title: 'Project Reports for Loans',
          desc:  'CMA data, detailed project reports and financial projections designed for bank loan applications and credit line approvals for e-commerce businesses.',
          link: 'contact.html', linkText: 'Get Report',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
          title: 'Accounting & Bookkeeping',
          desc:  'Daily bookkeeping, P&L statements, expense tracking and complete financial records — clean books for better decisions and stress-free compliance.',
          link: 'contact.html', linkText: 'Start Now',
        },
      ],
    },
    {
      id:    'ecommerce',
      label: '🛒 E-Commerce',
      title: 'E-Commerce Seller Services',
      sub:   'End-to-end account management and compliance for Amazon, Flipkart, Meesho, Myntra and Alibaba sellers — we handle your operations so you can focus on growth.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
          title: 'Amazon Seller Accounting',
          desc:  'Complete Amazon seller financial management — payout reconciliation, TCS filing, P&L reporting and monthly financial dashboards for FBA and FBM sellers.',
          link:  'contact.html', linkText: 'Get Started',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
          title: 'Flipkart Compliance',
          desc:  'Flipkart seller hub management, listing optimization, performance compliance, returns reconciliation and seller growth advisory.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>`,
          title: 'Meesho GST Filing',
          desc:  'GST filing specifically for Meesho sellers — invoice management, return-to-payout reconciliation and compliance support.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
          title: 'Myntra Seller Taxation',
          desc:  'Fashion seller taxation on Myntra — GST, TCS reconciliation, brand compliance and quarterly tax filing for apparel and lifestyle brands.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
          title: 'Product Catalog Management',
          desc:  'SEO-optimized product listings, A+ content, catalog imagery norms and bulk upload management across all marketplace platforms.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
          title: 'Inventory Accounting',
          desc:  'Inventory valuation, COGS tracking, dead stock analysis and comprehensive inventory financial reporting for marketplace sellers.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
          title: 'Seller Account Management',
          desc:  'End-to-end marketplace account management — account health monitoring, suspension appeal, performance improvement and growth advisory.',
          link:  'contact.html', linkText: 'Learn More',
        },
      ],
    },
    {
      id:    'uae',
      label: '🇦🇪 UAE Services',
      title: 'UAE VAT & Business Setup',
      sub:   'Premium compliance and business formation services for UAE — VAT registration, corporate tax filing, LLC formation, and cross-border India↔UAE structuring.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
          title: 'UAE VAT Registration',
          desc:  'Complete FTA VAT registration for UAE businesses and foreign entities. Documentation, application and Federal Tax Authority compliance. Starting from 60 AED.',
          link:  'contact.html', linkText: 'Register Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
          title: 'UAE VAT Return Filing',
          desc:  'Accurate quarterly UAE VAT return filing with input tax reconciliation, FTA-compliant reporting and deadline management.',
          link:  'contact.html', linkText: 'File VAT',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
          title: 'UAE Corporate Tax Filing',
          desc:  'UAE Corporate Tax compliance since June 2023 — registration, assessment, deductions and annual CIT return filing for businesses.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
          title: 'LLC Company Formation in UAE',
          desc:  'End-to-end LLC company setup in UAE — trade license, MOA, bank account opening and post-formation compliance for Indian entrepreneurs.',
          link:  'contact.html', linkText: 'Form LLC',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
          title: 'UAE Accounting & Bookkeeping',
          desc:  'AED-denominated bookkeeping, financial statements, payroll and complete accounting for UAE registered businesses.',
          link:  'contact.html', linkText: 'Start Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
          title: 'Import/Export Compliance',
          desc:  'UAE customs compliance, import duty advisory, trade documentation and India↔UAE cross-border transaction structuring.',
          link:  'contact.html', linkText: 'Learn More',
        },
      ],
    },
    {
      id:    'global',
      label: '🌐 Global Business',
      title: 'Global Business Services',
      sub:   'Cross-border compliance and advisory for sellers expanding globally — Alibaba, international taxation, multi-country accounting and business structuring.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
          title: 'Alibaba Seller Compliance',
          desc:  'Taxation, invoicing, GST/VAT compliance and financial management for Indian sellers selling on Alibaba.com and global B2B marketplaces.',
          link:  'contact.html', linkText: 'Get Started',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
          title: 'International Tax Consultation',
          desc:  'Expert cross-border tax advisory — DTAA benefits, transfer pricing, permanent establishment risk and multi-jurisdiction compliance planning.',
          link:  'contact.html', linkText: 'Consult Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
          title: 'Cross-border E-commerce Accounting',
          desc:  'Multi-currency accounting, foreign income consolidation and tax-compliant financial reporting for sellers operating across borders.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
          title: 'Business Structuring',
          desc:  'Strategic business structure planning for India-UAE dual operations — entity selection, holding company setup and tax-efficient corporate structures.',
          link:  'contact.html', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          title: 'Compliance Audit',
          desc:  'Multi-jurisdiction compliance audit — identifying GST, VAT, corporate tax and marketplace compliance gaps across your business operations.',
          link:  'contact.html', linkText: 'Get Audit',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>`,
          title: 'D2C & Shopify Global',
          desc:  'Direct-to-consumer global expansion — GST, VAT, customs, multi-currency payments and cross-border logistics compliance for D2C brands.',
          link:  'contact.html', linkText: 'Learn More',
        },
      ],
    },
  ],

  // ── Problems Section ─────────────────────────────────────────────
  problems: [
    { emoji: '🚫', title: 'Amazon Account Suspension'  },
    { emoji: '📑', title: 'GST Mismatch & Notices'    },
    { emoji: '📉', title: 'Falling Sales & Rankings'   },
    { emoji: '🖼️', title: 'Catalog & Listing Errors'  },
    { emoji: '💰', title: 'TCS Reconciliation Issues'  },
    { emoji: '⚠️', title: 'Compliance Violations'     },
    { emoji: '📦', title: 'Inventory Confusion'        },
    { emoji: '😰', title: 'Tax Filing Stress'          },
  ],

  // ── Why Choose Us ────────────────────────────────────────────────
  whyUs: [
    {
      emoji: '👤',
      title: 'Dedicated Account Manager',
      desc:  'One expert who knows your business, marketplaces and filing calendar. No handoffs, no re-explaining.',
    },
    {
      emoji: '🛒',
      title: 'Marketplace Specialists',
      desc:  'Deep expertise in Amazon, Flipkart, Meesho, Myntra and Shopsy — each platform\'s unique rules and requirements.',
    },
    {
      emoji: '⚡',
      title: 'Fast Compliance Support',
      desc:  'Urgent compliance cases, notices and suspensions handled within 24–48 hours. No delays when it matters.',
    },
    {
      emoji: '💰',
      title: 'Affordable & Transparent',
      desc:  'Clear monthly pricing with no hidden charges. You know exactly what you\'re paying for every month.',
    },
    {
      emoji: '🏆',
      title: 'End-to-End Management',
      desc:  'From product listing to GST filing to payout reconciliation — complete seller operations under one roof.',
    },
    {
      emoji: '📊',
      title: 'Data-Driven Growth',
      desc:  'Monthly reports with actionable insights to improve your sales, margins and marketplace performance.',
    },
    {
      emoji: '🔒',
      title: 'Secure & Confidential',
      desc:  'Your business data and marketplace credentials are handled with strict security and confidentiality protocols.',
    },
    {
      emoji: '🌐',
      title: 'India & UAE Coverage',
      desc:  'Whether you sell in India or the UAE — we cover both markets with local expertise and cross-border advisory.',
    },
  ],

  // ── Testimonials ─────────────────────────────────────────────────
  testimonials: [
    {
      stars:       5,
      quote:       '"Henry Corporation cleaned up 6 months of unfiled GST and reconciled all my Amazon payouts in 3 weeks. I finally know my actual margins. Game changer for my business."',
      name:        'Arun Kumar',
      role:        'Amazon Seller · Home & Kitchen',
      initials:    'AK',
      avatarClass: 'av-a',
    },
    {
      stars:       5,
      quote:       '"The Meesho return-to-payout mismatch was killing our profitability. They built a reconciliation system that catches every short payment now. Worth every rupee."',
      name:        'Priya Sharma',
      role:        'Meesho Seller · Fashion',
      initials:    'PS',
      avatarClass: 'av-d',
    },
    {
      stars:       5,
      quote:       '"Set up UAE VAT registration from scratch and handles our quarterly filings perfectly. The easiest cross-border compliance experience we have ever had as a brand."',
      name:        'Rashid Al-Mansouri',
      role:        'UAE Business Owner · Dubai',
      initials:    'RM',
      avatarClass: 'av-c',
    },
    {
      stars:       5,
      quote:       '"Quick response on every Flipkart performance notice. Our account health score went from at-risk to good standing in just 2 months. Highly professional team."',
      name:        'Vikram Nair',
      role:        'Flipkart Seller · Electronics',
      initials:    'VN',
      avatarClass: 'av-b',
    },
    {
      stars:       5,
      quote:       '"I sell on 3 marketplaces. Having one team manage GST, listings and accounts across all of them has saved me 30+ hours every month. Highly recommend their services."',
      name:        'Sneha Gupta',
      role:        'Multi-Platform D2C Seller',
      initials:    'SG',
      avatarClass: 'av-a',
    },
    {
      stars:       5,
      quote:       '"They handled a complex GST notice I had been stressed about for weeks — calmly, clearly and fast. Felt like having a real CA and CFO working for my small business."',
      name:        'Mohit Jain',
      role:        'Myntra Seller · Apparel',
      initials:    'MJ',
      avatarClass: 'av-c',
    },
  ],

  // ── Process Steps ────────────────────────────────────────────────
  process: [
    { num: '01', title: 'Free Consultation',      desc: '30-minute call to understand your marketplace setup, scale and compliance gaps — completely free.' },
    { num: '02', title: 'Secure Documentation',   desc: 'We collect GST credentials, marketplace logins and KYC on a 100% secure and encrypted channel.' },
    { num: '03', title: 'Setup & Onboarding',     desc: 'Account audit, catalog cleanup, GST backlog clearance and a clean reconciliation baseline.' },
    { num: '04', title: 'Monthly Management',     desc: 'Dedicated manager, monthly reports, proactive filings and continuous growth recommendations.' },
  ],

  // ── Pricing Plans ────────────────────────────────────────────────
  pricing: [
    {
      id:       'starter',
      name:     'Starter Seller',
      price:    '₹2,999',
      period:   'per month',
      popular:  false,
      desc:     'Perfect for sellers just starting out on 1–2 marketplaces.',
      features: [
        '1 Marketplace Account Management',
        'Monthly GST Filing (GSTR-1 & 3B)',
        'Basic Bookkeeping',
        '10 Product Listings / Month',
        'TCS Reconciliation',
        'Email & Chat Support',
      ],
    },
    {
      id:       'growth',
      name:     'Growth Seller',
      price:    '₹5,999',
      period:   'per month',
      popular:  true,
      desc:     'Most popular for active sellers on 2–3 platforms.',
      features: [
        'Up to 3 Marketplace Accounts',
        'GST + TCS Filing & Reconciliation',
        'Full Bookkeeping & P&L Reports',
        '30 Product Listings / Month',
        'Payout Reconciliation',
        'Dedicated Account Manager',
        'Priority Phone & WhatsApp Support',
      ],
    },
    {
      id:       'complete',
      name:     'Complete Management',
      price:    '₹9,999',
      period:   'per month',
      popular:  false,
      desc:     'Full-service management for serious multi-platform sellers.',
      features: [
        'Unlimited Marketplace Accounts',
        'Complete GST & Tax Services (ITR)',
        'Advanced Accounting & Reporting',
        'Unlimited Product Listings',
        'Full Financial Reconciliation',
        'UAE VAT Services Included',
        'CMA / Loan Report (1 per quarter)',
        '24/7 Priority Support',
      ],
    },
  ],

  // ── FAQs ─────────────────────────────────────────────────────────
  faqs: [
    {
      q: 'Do you manage sellers on all major Indian marketplaces?',
      a: 'Yes — we manage Amazon India, Flipkart, Meesho, Shopsy, Myntra and D2C platforms like Shopify. We also support UAE marketplaces including Amazon.ae and Noon.',
    },
    {
      q: 'How does GST filing work for multi-marketplace sellers?',
      a: 'We consolidate sales data from each marketplace, reconcile it with payouts, calculate the correct GST liability including TCS, and file GSTR-1 and GSTR-3B on time every month.',
    },
    {
      q: 'Can you help resolve Amazon account suspension?',
      a: 'Yes. Our marketplace specialists handle account health issues, policy violations and suspension appeals with a strong track record of successful reinstatements.',
    },
    {
      q: 'How quickly can you onboard my business?',
      a: 'Standard onboarding completes in 5–7 working days. For urgent cases like active suspensions or GST notices, we can expedite to 24–48 hours.',
    },
    {
      q: 'Do you help with loans and project reports?',
      a: 'Yes. We prepare CMA data, detailed project reports and financial projections specifically designed for bank loan applications for e-commerce businesses.',
    },
    {
      q: 'What is included in the monthly management retainer?',
      a: 'Monthly GST filings, marketplace account monitoring, payout reconciliation, bookkeeping, performance reports and access to your dedicated account manager.',
    },
    {
      q: 'What is the starting cost for GST registration in India?',
      a: 'GST registration starts from ₹499 for standard businesses. This includes application preparation, documentation support, GSTIN application on the GST portal and follow-up until your GSTIN is issued. E-commerce sellers on Amazon or Flipkart require mandatory GST registration regardless of turnover.',
    },
    {
      q: 'How does UAE VAT registration work for an Indian business?',
      a: 'If your UAE business has an annual turnover exceeding AED 375,000, VAT registration with the Federal Tax Authority (FTA) is mandatory. We handle the entire FTA registration process — including documentation, online application, and post-registration compliance. Our UAE VAT services start from 60 AED. Even below the threshold, voluntary registration is often advisable for B2B businesses.',
    },
    {
      q: 'Do Amazon FBA sellers need a GST number? How is TCS handled?',
      a: 'Yes — all Amazon India sellers require a GSTIN, regardless of turnover, as per the GST law for e-commerce operators. Amazon deducts 1% Tax Collected at Source (TCS) on your payouts. We consolidate your sales data, reconcile TCS credits across all marketplaces, and file accurate GSTR-1 and GSTR-3B returns monthly so your ITC and TCS credits are fully utilized.',
    },
    {
      q: 'Can an Indian resident form an LLC company in the UAE?',
      a: 'Yes. Indian residents can form an LLC in the UAE either through a Free Zone (100% foreign ownership allowed) or on the Mainland (with a local service agent in some categories). We handle the complete formation — trade license, Memorandum of Association, visa, bank account opening and ongoing compliance. This is popular for sellers targeting Amazon.ae, Noon and international markets.',
    },
  ],

  // ── Contact Form Options ─────────────────────────────────────────
  contactForm: {
    marketplaces: ['Amazon', 'Flipkart', 'Meesho', 'Shopsy', 'Myntra', 'D2C / Shopify', 'UAE Marketplace', 'Multiple Platforms'],
    services:     ['E-Commerce Seller Management', 'GST & Tax Filing', 'Accounting & Bookkeeping', 'UAE VAT Services', 'Loan & Project Reports', 'Complete Management Package'],
  },

  // ── Footer Links ─────────────────────────────────────────────────
  footerLinks: {
    services: [
      { label: 'GST Registration',      href: 'services.html' },
      { label: 'UAE VAT Filing',         href: 'services.html' },
      { label: 'Amazon Seller Accounting', href: 'services.html' },
      { label: 'LLC Formation UAE',      href: 'services.html' },
      { label: 'ITR Filing',             href: 'services.html' },
      { label: 'Company Registration',   href: 'services.html' },
    ],
    platforms: [
      { label: 'Amazon India',    href: '#platforms' },
      { label: 'Flipkart',        href: '#platforms' },
      { label: 'Meesho',          href: '#platforms' },
      { label: 'Myntra',          href: '#platforms' },
      { label: 'Shopsy',          href: '#platforms' },
    ],
    company: [
      { label: 'Why Choose Us',   href: '#why-us'    },
      { label: 'Pricing',         href: '#pricing'   },
      { label: 'FAQs',            href: '#faq'       },
      { label: 'Contact Us',      href: '#contact'   },
    ],
  },

  // ── Page Heroes ──────────────────────────────────────────────────
  pageHeroes: {
    services: {
      title: 'Specialized Services.<br>Strategic Depth.',
      sub:   'Henry Corporation delivers integrated e-commerce and financial compliance services — designed to handle the regulatory, operational and growth challenges that define your business.',
    },
    platforms: {
      title: 'All Major Marketplaces.<br>One Expert Team.',
      sub:   'From Amazon to Flipkart, Meesho to Myntra — we manage seller accounts, listings and compliance across every platform so you can focus on growth.',
    },
    'why-us': {
      title: 'Why 500+ Sellers<br>Choose Henry Corp.',
      sub:   "We're not just a compliance firm — we're your complete e-commerce operations partner. Here's what makes us genuinely different.",
    },
    pricing: {
      title: 'Simple, Transparent<br>Pricing.',
      sub:   'No hidden fees. No surprises. Choose a plan that fits your current scale — upgrade anytime as you grow.',
    },
    contact: {
      title: 'Get in Touch<br>with Us.',
      sub:   "We're ready to handle your GST, accounts, marketplace management and business growth. Start with a free 30-minute consultation.",
    },
  },

  // ── Platform Detail Cards ────────────────────────────────────────
  platformDetails: [
    {
      id: 'amazon', name: 'Amazon India', color: '#FF9900', badge: 'Most Sellers',
      tagline: "India's largest marketplace. Managed end-to-end.",
      desc: 'From account setup and A+ content to brand registry, account health monitoring and A-to-Z claim resolution — we handle your complete Amazon seller operations.',
      services: ['Seller Account Management', 'A+ Content Creation', 'Brand Registry', 'Account Health Monitoring', 'Suspension Appeal & Reinstatement', 'Listing SEO Optimization', 'TCS Reconciliation'],
    },
    {
      id: 'flipkart', name: 'Flipkart', color: '#2874F0', badge: '',
      tagline: 'Performance-first Flipkart management.',
      desc: 'Complete Flipkart seller hub management — listing optimization, performance compliance, returns reconciliation and growth advisory.',
      services: ['Seller Hub Management', 'Listing & Catalog', 'Performance Compliance', 'Returns Reconciliation', 'Payout Management', 'Growth Advisory'],
    },
    {
      id: 'meesho', name: 'Meesho & Shopsy', color: '#F43397', badge: '',
      tagline: 'Meesho seller growth without the complexity.',
      desc: 'Complete catalog management, GST & invoicing, return-to-payout reconciliation and compliance support for Meesho and Shopsy sellers.',
      services: ['Catalog Management', 'GST & Invoicing', 'Return-to-Payout Reconciliation', 'Compliance Support', 'Seller Growth Advisory'],
    },
    {
      id: 'myntra', name: 'Myntra', color: '#FF3F6C', badge: 'Fashion',
      tagline: 'Fashion-forward Myntra brand management.',
      desc: 'Brand onboarding, catalog imagery norms, compliance handling and performance management for Myntra fashion and lifestyle sellers.',
      services: ['Brand Onboarding', 'Catalog Imagery Compliance', 'Performance Management', 'Return Analytics', 'Brand Health Reports'],
    },
    {
      id: 'shopify', name: 'D2C / Shopify', color: '#96BF48', badge: '',
      tagline: 'Direct-to-consumer storefront support.',
      desc: 'Storefront setup, payment gateway integration, GST compliance and cross-border advisory for brands going direct-to-consumer.',
      services: ['Store Setup & Configuration', 'Payment Gateway Integration', 'GST Compliance', 'Inventory Sync', 'Cross-border Advisory'],
    },
    {
      id: 'uae', name: 'UAE Markets', color: '#F59E0B', badge: 'International',
      tagline: 'Cross-border India ↔ UAE market expertise.',
      desc: 'FTA VAT registration, quarterly UAE VAT filings, Amazon.ae and Noon seller management, and cross-border tax structuring for expanding brands.',
      services: ['UAE VAT Registration (FTA)', 'Quarterly VAT Filing', 'Amazon.ae Management', 'Noon Seller Support', 'Cross-border Tax Advisory', 'India↔UAE Structuring'],
    },
  ],
};
