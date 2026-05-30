/* ================================================================
   Henry Corporation — Static Pre-render Build
   ----------------------------------------------------------------
   Bakes the JS-rendered content (nav, page sections, footer, and the
   JSON-LD schema) directly into each HTML file so search engines, AI
   crawlers and social scrapers index real content WITHOUT executing
   JavaScript. The client-side scripts still run and re-render the same
   markup on load (hydration), so behaviour is unchanged for users.

   Re-run this whenever you edit assets/js/data.js or assets/js/main.js:

       npm install     # first time only
       npm run build

   Only the JS-rendered pages are processed. Blog posts and the legal
   pages already ship their content statically and are left untouched.
   ================================================================ */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const dataSrc = readFileSync(`${ROOT}/assets/js/data.js`, 'utf8');
const mainSrc = readFileSync(`${ROOT}/assets/js/main.js`, 'utf8');
// Run both source files inside ONE eval so the render functions close
// over the HC data object and the icon table just like they do in-browser.
const appSrc = `${dataSrc}\n;\n${mainSrc}`;

const BASE = 'https://henry-corporation.com';

const PAGES = [
  { file: 'index.html',     url: `${BASE}/`,               render: 'renderHomePage'      },
  { file: 'services.html',  url: `${BASE}/services.html`,  render: 'renderServicesPage'  },
  { file: 'platforms.html', url: `${BASE}/platforms.html`, render: 'renderPlatformsPage' },
  { file: 'why-us.html',    url: `${BASE}/why-us.html`,    render: 'renderWhyUsPage'     },
  { file: 'pricing.html',   url: `${BASE}/pricing.html`,   render: 'renderPricingPage'   },
  { file: 'contact.html',   url: `${BASE}/contact.html`,   render: 'renderContactPage'   },
  { file: 'blog.html',      url: `${BASE}/blog.html`,      render: 'renderBlogPage'      },
];

for (const p of PAGES) {
  const html = readFileSync(`${ROOT}/${p.file}`, 'utf8');

  // Build a DOM from the source shell. `outside-only` keeps jsdom from
  // executing the page's own <script> tags — we drive rendering ourselves.
  const dom = new JSDOM(html, { url: p.url, runScripts: 'outside-only' });
  const { window } = dom;

  // main.js registers init() on DOMContentLoaded. init() runs interactive
  // setup (IntersectionObserver, etc.) that jsdom doesn't implement, so
  // neutralise that one listener — we call the content renderers ourselves.
  const origAdd = window.document.addEventListener.bind(window.document);
  window.document.addEventListener = (type, ...rest) =>
    type === 'DOMContentLoaded' ? undefined : origAdd(type, ...rest);

  // Define HC + all render functions in the page's window scope.
  window.eval(appSrc);

  // Reproduce init()'s content phase only (no interactive/observer code,
  // which depends on browser APIs jsdom doesn't implement).
  window.renderMeta();
  window.renderNav();
  window.renderMobileNav();
  if (typeof window[p.render] !== 'function') {
    throw new Error(`${p.file}: render function ${p.render} not found`);
  }
  window[p.render]();
  window.renderFooter();
  window.renderFloats();

  const yr = window.document.getElementById('footer-year');
  if (yr) yr.textContent = String(new Date().getFullYear());

  // Serialise the fully populated document back to disk. Deterministic,
  // so re-running the build produces identical output (idempotent).
  writeFileSync(`${ROOT}/${p.file}`, `<!DOCTYPE html>\n${dom.serialize().replace(/^<!DOCTYPE html>/i, '').trimStart()}`);
  console.log(`✓ prerendered ${p.file}`);
}

console.log(`\nDone — ${PAGES.length} pages prerendered.`);
