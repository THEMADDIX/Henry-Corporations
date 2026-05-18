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
    tagline:     "India's Complete E-Commerce Back-Office Partner",
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
    footerDesc:  'Henry Corporation is India\'s complete e-commerce back-office partner — handling GST, accounting, seller account management and compliance for Amazon, Flipkart, Meesho, Myntra and Shopsy sellers.',
  },

  // ── SEO / Meta ───────────────────────────────────────────────────
  meta: {
    title:         'Henry Corporation — E-Commerce Seller Account Management, GST & Accounting Services India',
    description:   'Henry Corporation provides complete e-commerce seller management services including Amazon account management, Flipkart seller support, GST filing, bookkeeping, cataloging and UAE VAT. Trusted by 500+ Indian sellers.',
    keywords:      'Amazon seller account management India, Flipkart seller services, GST for ecommerce sellers, ecommerce accounting services, Meesho seller support, Amazon catalog services, ecommerce GST filing India, marketplace account management, seller compliance India',
    ogTitle:       'Henry Corporation — Complete E-Commerce Seller Management India',
    ogDescription: "India's complete back-office partner for Amazon, Flipkart, Meesho, Myntra & Shopsy sellers — GST, accounting, compliance and growth.",
  },

  // ── Navigation ───────────────────────────────────────────────────
  nav: [
    { label: 'Services',   href: '#services'     },
    { label: 'Platforms',  href: '#platforms'     },
    { label: 'Why Us',     href: '#why-us'        },
    { label: 'Pricing',    href: '#pricing'       },
    { label: 'Contact',    href: '#contact'       },
  ],

  // ── Hero Section ─────────────────────────────────────────────────
  hero: {
    badge:      'Trusted by 500+ E-Commerce Sellers',
    title:      'Complete <span class="coral">E-Commerce Seller</span> Management Services Across India',
    sub:        'From GST filing and taxation to Amazon, Flipkart, Meesho and Myntra account management — Henry Corporation handles your complete e-commerce business operations under one roof.',
    ctaText:    'Book Free Consultation',
    ctaHref:    '#contact',
    waText:     'Talk on WhatsApp',
    waMsg:      'Hi Henry Corporation, I need seller management services',
    trustItems: [
      { label: '500+ Happy Clients' },
      { label: '5+ Years Experience' },
      { label: 'All Major Marketplaces' },
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
    { value: 500,  suffix: '+', label: 'Happy Clients'     },
    { value: 5,    suffix: '+', label: 'Years Experience'  },
    { value: 2000, suffix: '+', label: 'GST Filings Done'  },
    { value: 500,  suffix: '+', label: 'Accounts Managed'  },
  ],

  // ── Service Categories ───────────────────────────────────────────
  serviceCategories: [
    {
      id:    'ecommerce',
      label: '🛒 Seller Services',
      title: 'E-Commerce Seller Management',
      sub:   'Complete account management across all major Indian marketplaces. We handle your listings, cataloging, compliance and growth so you can focus on your products.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
          title: 'Amazon Account Management',
          desc:  'End-to-end Amazon seller account handling — listings, A+ content, brand registry, account health and A-to-Z claim resolution.',
          link:  '#contact', linkText: 'Get Started',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
          title: 'Flipkart Seller Support',
          desc:  'Flipkart seller hub management, listing optimization, performance compliance and seller growth advisory for Indian sellers.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
          title: 'Product Listing & Cataloging',
          desc:  'Professional product listings with SEO-optimized titles, bullet points, descriptions and high-quality A+ content for better conversions.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>`,
          title: 'Meesho & Shopsy Support',
          desc:  'Complete catalog management, GST & invoicing, return reconciliation and compliance support for Meesho and Shopsy sellers.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
          title: 'Myntra Brand Management',
          desc:  'Brand onboarding, catalog imagery norms, compliance handling and performance management for Myntra fashion sellers.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
          title: 'Marketplace Reconciliation',
          desc:  'TCS reconciliation, payout mismatch resolution and complete financial reconciliation across all marketplace platforms.',
          link:  '#contact', linkText: 'Learn More',
        },
      ],
    },
    {
      id:    'gst',
      label: '📊 GST & Compliance',
      title: 'GST & Tax Compliance Services',
      sub:   'End-to-end GST compliance management for e-commerce sellers. We ensure your filings are accurate, on-time and fully compliant with all regulations.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 13 12 17 8 13"/><line x1="12" y1="17" x2="12" y2="7"/></svg>`,
          title: 'GST Registration',
          desc:  'Complete GST registration support for new e-commerce sellers including GSTIN application, documentation and verification. Starting from ₹499.',
          link:  '#contact', linkText: 'Register Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
          title: 'GSTR-1 & GSTR-3B Filing',
          desc:  'Timely monthly GSTR-1 and GSTR-3B filings with multi-marketplace sales data consolidation and reconciliation.',
          link:  '#contact', linkText: 'File GST',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
          title: 'TDS/TCS Management',
          desc:  'Tax Collected at Source (TCS) reconciliation across Amazon, Flipkart and all marketplaces with accurate credit matching.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
          title: 'LUT Filing',
          desc:  'Letter of Undertaking filing for export sellers, enabling zero-rated GST on exports without payment of IGST.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
          title: 'GST Notice Handling',
          desc:  'Expert response and resolution for all types of GST notices, scrutiny cases and demand orders from tax authorities.',
          link:  '#contact', linkText: 'Get Help',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
          title: 'Annual GST Return (GSTR-9)',
          desc:  'Accurate annual GST return filing with complete reconciliation of monthly returns and financial statements.',
          link:  '#contact', linkText: 'Learn More',
        },
      ],
    },
    {
      id:    'accounting',
      label: '📚 Accounting & Tax',
      title: 'Accounting & Income Tax Services',
      sub:   'Keep your books clean and finances clear. Our expert accounting team handles bookkeeping, P&L, income tax and financial reporting for e-commerce businesses.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
          title: 'Bookkeeping & Accounts',
          desc:  'Daily bookkeeping, purchase/expense recording and complete financial records maintenance for e-commerce businesses.',
          link:  '#contact', linkText: 'Start Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
          title: 'Payout Reconciliation',
          desc:  'Complete marketplace payout reconciliation — identifying short payments, commission errors and marketplace deductions.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
          title: 'Income Tax Filing (ITR)',
          desc:  'Accurate ITR filing for individuals and businesses, including multi-marketplace income consolidation and deductions.',
          link:  '#contact', linkText: 'File ITR',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
          title: 'Profit & Loss Reporting',
          desc:  'Monthly P&L statements, gross margin analysis and category-wise profitability reports to understand your true business health.',
          link:  '#contact', linkText: 'Learn More',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
          title: 'UAE VAT Services',
          desc:  'FTA registration, quarterly UAE VAT filings and cross-border India↔UAE tax structuring for expanding brands. Starting from 60 AED.',
          link:  '#contact', linkText: 'UAE Services',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
          title: 'Financial Health Reports',
          desc:  'Monthly financial health dashboards showing key metrics, trends and actionable insights to grow your business.',
          link:  '#contact', linkText: 'Learn More',
        },
      ],
    },
    {
      id:    'business',
      label: '💼 Business Support',
      title: 'Business & Growth Support',
      sub:   'Beyond compliance — we help you grow. From loan documentation to strategic growth consulting, we are your complete business partner.',
      services: [
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
          title: 'Project Reports for Loans',
          desc:  'CMA data, detailed project reports and financial projections to help you secure business loans and credit lines from banks.',
          link:  '#contact', linkText: 'Get Report',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
          title: 'Business Loan Documentation',
          desc:  'Complete loan file preparation — financials, projections, business profiles and bank presentation documents.',
          link:  '#contact', linkText: 'Apply Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
          title: 'Dedicated Account Manager',
          desc:  'Your personal account manager who knows your business, marketplaces and filing calendar — one contact for everything.',
          link:  '#contact', linkText: 'Get Manager',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
          title: 'Seller Growth Strategy',
          desc:  'Data-driven growth recommendations — pricing strategy, marketplace expansion, seasonal planning and revenue optimization.',
          link:  '#contact', linkText: 'Grow Now',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          title: 'Compliance Audit',
          desc:  'Complete marketplace and GST compliance audit to identify gaps, risks and areas of improvement for your seller business.',
          link:  '#contact', linkText: 'Get Audit',
        },
        {
          icon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M22.54 6.42a23.5 23.5 0 010 11.16M1.46 6.42a23.5 23.5 0 000 11.16"/></svg>`,
          title: 'D2C & Shopify Support',
          desc:  'Storefront setup, payment gateway integration, GST compliance and cross-border advisory for direct-to-consumer brands.',
          link:  '#contact', linkText: 'Learn More',
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
  ],

  // ── Contact Form Options ─────────────────────────────────────────
  contactForm: {
    marketplaces: ['Amazon', 'Flipkart', 'Meesho', 'Shopsy', 'Myntra', 'D2C / Shopify', 'UAE Marketplace', 'Multiple Platforms'],
    services:     ['E-Commerce Seller Management', 'GST & Tax Filing', 'Accounting & Bookkeeping', 'UAE VAT Services', 'Loan & Project Reports', 'Complete Management Package'],
  },

  // ── Footer Links ─────────────────────────────────────────────────
  footerLinks: {
    services: [
      { label: 'Amazon Management',   href: '#services'  },
      { label: 'GST Filing',          href: '#services'  },
      { label: 'Bookkeeping',         href: '#services'  },
      { label: 'UAE VAT',             href: '#services'  },
      { label: 'Loan Reports',        href: '#services'  },
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
};
