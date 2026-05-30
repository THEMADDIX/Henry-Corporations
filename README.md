# Henry Corporation

Marketing website for Henry Corporation — export consulting & global business
expansion services (India · UAE · Europe).

## Editing content

All site copy lives in **`assets/js/data.js`** (the single source of truth).
Rendering logic is in `assets/js/main.js`. You usually only need to edit
`data.js`.

## Build (important)

The site renders content with JavaScript in the browser, but the HTML files
are **pre-rendered** so search engines, AI crawlers and social scrapers see
full content without running JS.

> After editing `assets/js/data.js` or `assets/js/main.js`, re-run the build
> so the HTML reflects your changes:

```bash
npm install        # first time only
npm run build      # bakes content + JSON-LD into the .html files
```

The build (`build/prerender.mjs`) is idempotent — running it repeatedly
produces identical output. Blog posts (`blog/*.html`) and the legal pages
(`privacy.html`, `terms.html`) carry their content statically and are not
processed by the build.

## SEO / GEO notes

- Per-page `title`, `description`, canonical, Open Graph and Twitter tags.
- Geo targeting: `geo.region = IN`, `geo.placename = India` (India-based;
  UAE/Europe served remotely and listed under schema `areaServed`).
- Structured data (`Organization`, `LocalBusiness`, `WebSite`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`) baked into the HTML.
- `sitemap.xml` + `robots.txt` at the site root.
