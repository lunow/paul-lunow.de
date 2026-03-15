# SEO Action Plan — paul-lunow.de
**Generated:** 2026-03-12 | **Overall Score: 54/100**

---

## Critical — Fix Immediately

### C1. Add `robots.txt`
**Impact:** Crawlability | **Effort:** 10 min | **Files:** `public/robots.txt` (create)

No robots.txt exists. Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.paul-lunow.de/sitemap.xml
```

---

### C2. Add `sitemap.xml`
**Impact:** Indexability | **Effort:** 15 min | **Files:** `public/sitemap.xml` (create)

No sitemap exists. Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.paul-lunow.de/de/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.paul-lunow.de/de/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.paul-lunow.de/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.paul-lunow.de/de/"/>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.paul-lunow.de/en/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.paul-lunow.de/de/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.paul-lunow.de/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.paul-lunow.de/de/"/>
    <lastmod>2025-01-15</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

### C3. Add hreflang + canonical tags
**Impact:** International SEO, deduplication | **Effort:** 20 min | **Files:** `src/app/[locale]/layout.jsx`

The bilingual site has no hreflang — Google may serve wrong language or treat pages as duplicates.

In `src/app/[locale]/layout.jsx`, update `generateMetadata`:
```js
export async function generateMetadata({ params: { locale } }) {
  const t = getTranslations(locale)
  return {
    metadataBase: new URL('https://www.paul-lunow.de'),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `https://www.paul-lunow.de/${locale}/`,
      languages: {
        'de': 'https://www.paul-lunow.de/de/',
        'en': 'https://www.paul-lunow.de/en/',
        'x-default': 'https://www.paul-lunow.de/de/',
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `https://www.paul-lunow.de/${locale}/`,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? 'en_US' : 'de_DE',
    },
  }
}
```

Also add `metadataBase` to the root `src/app/layout.jsx`:
```js
export const metadata = {
  metadataBase: new URL('https://www.paul-lunow.de'),
  // ...
}
```

---

### C4. Fix missing alt text on cover and profile images
**Impact:** Accessibility, image SEO | **Effort:** 5 min

**`src/components/Hero.jsx` line 51** — cover image has `alt=""`:
```jsx
// Before:
<Image className="w-full" src={coverImage} alt="" priority />
// After (pass locale-aware alt via props):
<Image className="w-full" src={coverImage} alt={translations.coverAlt} priority />
```
Add to locale JSON: `"coverAlt": "Riaru – Debütroman von Paul K. Lunow, erschienen Januar 2025"` (DE) / `"Riaru – debut novel by Paul K. Lunow, published January 2025"` (EN)

**`src/components/Contact.jsx` line 23** — profile photo has `alt=""`:
```jsx
// Before:
<Image src={authorImage} alt="" sizes="..." />
// After:
<Image src={authorImage} alt="Paul K. Lunow, CTO at Vention GmbH" sizes="..." />
```

---

### C5. Add schema / structured data (JSON-LD)
**Impact:** Rich results, Knowledge Graph, AI citations | **Effort:** 30 min | **Files:** `src/app/layout.jsx`

Zero schema markup exists. Add to `<head>` in `src/app/layout.jsx`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.paul-lunow.de/#person",
      "name": "Paul K. Lunow",
      "url": "https://www.paul-lunow.de",
      "image": "https://www.paul-lunow.de/og-image.jpg",
      "jobTitle": "CTO",
      "worksFor": {
        "@type": "Organization",
        "name": "Vention Solutions GmbH",
        "url": "https://ventionteams.com/"
      },
      "description": "Paul K. Lunow is a CTO, author, podcast host and mentor with 20 years in the tech industry. Author of the debut novel Riaru (2025).",
      "sameAs": [
        "https://www.linkedin.com/in/paul-lunow",
        "https://www.instagram.com/paullunow/"
      ],
      "email": "mailto:hallo26@paul.lun.io"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.paul-lunow.de/#website",
      "url": "https://www.paul-lunow.de",
      "name": "Paul K. Lunow",
      "author": { "@id": "https://www.paul-lunow.de/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": "https://www.paul-lunow.de/#book-riaru",
      "name": "Riaru",
      "author": { "@id": "https://www.paul-lunow.de/#person" },
      "publisher": {
        "@type": "Organization",
        "name": "Periplaneta",
        "url": "https://www.periplaneta.com/"
      },
      "datePublished": "2025-01-15",
      "numberOfPages": 244,
      "inLanguage": "de",
      "bookFormat": "https://schema.org/Paperback",
      "description": "Riaru ist der Debütroman von Paul K. Lunow – ein Cyber-Roman über Tech-Konzerne und Metadaten.",
      "image": "https://www.paul-lunow.de/og-image.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Audiobook",
      "@id": "https://www.paul-lunow.de/#audiobook-riaru",
      "name": "Riaru – Willkommen im modernsten Unternehmen der Welt",
      "author": { "@id": "https://www.paul-lunow.de/#person" },
      "readBy": {
        "@type": "Person",
        "name": "Rebecca Veil"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lauscher Lounge",
        "url": "https://www.lauscherlounge.de/"
      },
      "datePublished": "2026-01-30",
      "duration": "PT8H19M",
      "isbn": "978-3-911421-17-1",
      "inLanguage": "de",
      "bookFormat": "https://schema.org/AudiobookFormat",
      "description": "Das Hörbuch zu Riaru, dem Debütroman von Paul K. Lunow. Gesprochen von Rebecca Veil, produziert von Daniel Lewy.",
      "url": "https://www.lauscherlounge.de/produktionen/riaru",
      "sameAs": "https://www.lauscherlounge.de/produktionen/riaru",
      "workExample": { "@id": "https://www.paul-lunow.de/#book-riaru" }
    },
    {
      "@context": "https://schema.org",
      "@type": "PodcastSeries",
      "@id": "https://www.paul-lunow.de/#podcast",
      "name": "Product & Cake",
      "description": "Podcast about tech products and leadership by Paul K. Lunow.",
      "webFeed": "https://podcast-feed.paul-lunow.de/",
      "author": { "@id": "https://www.paul-lunow.de/#person" },
      "sameAs": [
        "https://podcasts.apple.com/gb/podcast/product-and-cake/id1651982219",
        "https://open.spotify.com/show/6GWmx7OdEn04inrQjp3Bif"
      ]
    }
  ]) }}
/>
```

---

## High Priority — Fix Within 1 Week

### H1. Fix the og:image to use an absolute URL
**Impact:** Social sharing, link previews | **Effort:** 15 min | **Files:** `src/app/layout.jsx`, `public/`

The current `og:image` uses `coverImage.src` which resolves to a hashed path like `/_next/static/media/Cover-riaru-web.jpg.abc123.jpg` — social networks require absolute URLs.

1. Copy `src/images/Cover-riaru-web.jpg` to `public/og-image.jpg`
2. In `src/app/layout.jsx` replace:
   ```jsx
   <meta property="og:image" content={coverImage.src} />
   ```
   With:
   ```jsx
   <meta property="og:image" content="https://www.paul-lunow.de/og-image.jpg" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta property="og:image:alt" content="Riaru – Debütroman von Paul K. Lunow" />
   ```

---

### H2. Add Twitter/X Card tags
**Impact:** Social sharing on X/Twitter | **Effort:** 10 min | **Files:** `src/app/[locale]/layout.jsx`

No Twitter Card tags exist anywhere. Add to `generateMetadata()`:
```js
twitter: {
  card: 'summary_large_image',
  title: t.meta.title,
  description: t.meta.description,
  images: ['https://www.paul-lunow.de/og-image.jpg'],
},
```

---

### H3. Fix the root redirect — use permanentRedirect
**Impact:** SEO authority consolidation, consistency | **Effort:** 10 min | **Files:** `src/app/page.jsx`, `next.config.js`

The root `/` redirects to `/de` via `redirect()` (which issues a 307), but `next.config.js` has a dead redirect to `/en` that doesn't fire in static export. Fix:

In `src/app/page.jsx`:
```js
import { permanentRedirect } from 'next/navigation'

export default function RootPage() {
  permanentRedirect('/de')
}
```

Remove the `redirects()` function from `next.config.js` (it is dead code in static export mode):
```js
// Remove this block entirely:
async redirects() {
  return [{ source: '/', destination: '/en', permanent: false }]
}
```

---

### H4. Fix the `lang` attribute — set it server-side
**Impact:** Language signals, accessibility | **Effort:** 20 min | **Files:** `src/app/[locale]/layout.jsx`, `src/app/layout.jsx`

The `lang` attribute is currently set via `useEffect` in `LocaleProvider.jsx` — meaning it's absent from the static HTML delivered to Google. The locale layout needs to pass `lang` to the root `<html>` element.

The cleanest fix for a static export with Next.js App Router is to set a default `lang` in the root layout:

In `src/app/layout.jsx`:
```jsx
<html lang="de" className={...}>
```

This makes the German version (primary) correct by default. The English version would need a layout override, which requires restructuring the `<html>` tag emission. A pragmatic alternative: accept that `/en/` shows `lang="de"` on the HTML tag but has correct `hreflang` alternates — Google can infer language from hreflang even if the `lang` attribute is imperfect.

---

### H5. Update stale "pre-order" CTA copy
**Impact:** Trust, conversion rate | **Effort:** 10 min | **Files:** `src/locales/de/common.json`, `src/locales/en/common.json`

The book was released January 15, 2025. The CTA and meta description still say "Jetzt vorbestellen!" / "Pre-order now!" — which is over a year out of date.

In both locale files, update `preorder.amazonButton`:
- DE: `"Jetzt auf Amazon kaufen*"` (or `"Auf Amazon bestellen*"`)
- EN: `"Buy on Amazon*"`

Also update the meta descriptions to remove the pre-order call-to-action.

---

### H6. Self-host Cabinet Grotesk font
**Impact:** LCP (render-blocking font), reliability | **Effort:** 45 min | **Files:** `src/app/layout.jsx`, `public/fonts/`

The external Fontshare stylesheet is render-blocking. Switch to `next/font/local`:

1. Download Cabinet Grotesk font files (OTF/WOFF2) from Fontshare
2. Place in `public/fonts/`
3. In `src/app/layout.jsx`:
```js
import localFont from 'next/font/local'

const cabinetGrotesk = localFont({
  src: [
    { path: '../../public/fonts/CabinetGrotesk-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/CabinetGrotesk-Bold.woff2', weight: '700' },
    { path: '../../public/fonts/CabinetGrotesk-Extrabold.woff2', weight: '800' },
  ],
  display: 'swap',
  variable: '--font-cabinet-grotesk',
})
```
4. Remove the `<link rel="preconnect">` and `<link rel="stylesheet">` for Fontshare

**Expected LCP improvement: -200ms to -500ms**

---

### H7. Fix heading hierarchy — replace `<p>` with semantic headings
**Impact:** On-page SEO, heading structure | **Effort:** 20 min | **Files:** `src/components/Introduction.jsx`, `src/components/Contact.jsx`

Two display-styled `<p>` tags should be semantic headings:

**`src/components/Introduction.jsx` line 56:**
```jsx
// Before:
<p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
// After:
<h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
```

**`src/components/Contact.jsx` line 33:**
```jsx
// Before:
<p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
// After:
<h2 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
```

---

### H8. Add a crawlable link between `/de/` and `/en/`
**Impact:** Crawl graph, language discovery | **Effort:** 15 min | **Files:** `src/components/LanguageSwitcher.jsx`

The language switcher uses `router.push()` — there are zero crawlable `<a>` tags linking `/de/` to `/en/`. Googlebot crawling `/de/` will never find `/en/`.

Fix by rendering the LanguageSwitcher as a real `<a>` tag:
```jsx
// Instead of router.push(), use an <a> tag:
<a href={`/${locale === 'de' ? 'en' : 'de'}/`}>
  {locale === 'de' ? t.language.switchToEnglish : t.language.switchToGerman}
</a>
```

---

### H9. Improve page titles with keywords
**Impact:** Click-through rate, keyword relevance | **Effort:** 5 min | **Files:** `src/locales/de/common.json`, `src/locales/en/common.json`

Current title "Paul K. Lunow" is 14 characters — too short and generic.

Update `meta.title` in locale files:
- DE: `"Paul K. Lunow – Autor, CTO & Mentor | Debütroman Riaru"`
- EN: `"Paul K. Lunow – Author, CTO & Mentor | Debut Novel Riaru"`

---

### H10. Improve meta descriptions — include full value proposition
**Impact:** CTR, keyword signals | **Effort:** 10 min | **Files:** `src/locales/de/common.json`, `src/locales/en/common.json`

Both descriptions focus only on the book. Update to reflect the full persona:

- DE: `"Paul K. Lunow: Autor des Cyber-Romans Riaru, CTO bei Vention, Podcast-Host und Mentor. Tech-Leadership, Beratung und ein packender Roman über die digitale Welt."`
- EN: `"Paul K. Lunow: Author of cyber novel Riaru, CTO at Vention, podcast host & mentor. Tech leadership, consulting, and a gripping novel about the digital world."`

---

## Medium Priority — Fix Within 1 Month

### M1. Pre-build podcast episode data at build time
**Impact:** CLS, Googlebot indexability of podcast content | **Effort:** 2 hours
**Files:** `src/components/Podcasts.jsx`, build script

The podcast section fetches RSS client-side — episodes are invisible to Googlebot and cause CLS. Move the fetch to build time using `rss-parser` (already installed):

Create `scripts/fetch-podcast.js`:
```js
const Parser = require('rss-parser')
const fs = require('fs')

async function main() {
  const parser = new Parser()
  const feed = await parser.parseURL('https://podcast-feed.paul-lunow.de/')
  const episodes = feed.items.slice(0, 4).map(item => ({
    title: item.title,
    pubDate: item.pubDate,
    link: item.link,
    description: item.contentSnippet,
  }))
  fs.writeFileSync('src/data/podcast-episodes.json', JSON.stringify(episodes, null, 2))
}
main()
```

Add to `package.json` scripts: `"prebuild": "node scripts/fetch-podcast.js"`

Then import the JSON in `Podcasts.jsx` instead of fetching at runtime.

---

### M2. Add podcast fallback UI
**Impact:** UX, perceived quality | **Effort:** 30 min | **Files:** `src/components/Podcasts.jsx`

When the RSS fetch fails, the podcast section shows nothing (empty array, no loading state, no error message). Add a fallback:
```jsx
{episodes.length === 0 && !loading && (
  <p className="text-slate-500">Podcast episodes konnten nicht geladen werden.
    <a href="https://podcast-feed.paul-lunow.de/">Alle Episoden ansehen</a>
  </p>
)}
```

---

### M3. Optimize images — replace JPEGs with WebP
**Impact:** LCP, page size | **Effort:** 1 hour

`images: { unoptimized: true }` means all images are served as-is. At minimum, manually convert key images to WebP before deploying:
- `Cover-riaru-web.jpg` → `Cover-riaru-web.webp`
- `background2.jpg` → `background2.webp`
- `lunow-lunow-293.jpeg` → `lunow-lunow-293.webp`

Or configure an image CDN loader (Cloudinary, imgix) in `next.config.js` for automatic optimization with static exports.

**Expected LCP improvement: -500ms to -1.2s**

---

### M4. Fix NavBar scroll handler — add requestAnimationFrame throttle
**Impact:** INP on mobile | **Effort:** 30 min | **Files:** `src/components/NavBar.jsx`

The navbar scroll handler calls `getBoundingClientRect()` on every scroll event without debouncing, causing layout thrashing:
```js
// Wrap in requestAnimationFrame:
let rafScheduled = false
const handleScroll = () => {
  if (!rafScheduled) {
    rafScheduled = true
    requestAnimationFrame(() => {
      updateActiveIndex()
      setStuckAtTop(window.scrollY > 10)
      rafScheduled = false
    })
  }
}
```

---

### M5. Fix LanguageSwitcher CLS — prevent null render
**Impact:** CLS | **Effort:** 20 min | **Files:** `src/components/LanguageSwitcher.jsx`

The switcher renders `null` until mounted, causing a layout shift. Replace with a skeleton placeholder matching the button dimensions:
```jsx
if (!mounted) {
  return <div className="w-[120px] h-8" aria-hidden="true" /> // Match actual button dimensions
}
```

---

### M6. Add `og:title` and `og:description` to root layout
**Impact:** Social sharing fallback | **Effort:** 5 min | **Files:** `src/app/layout.jsx`

The root layout `<head>` has `og:image`, `og:url`, `og:type` but is missing `og:title` and `og:description`. These are the fallback used if the locale layout OG tags aren't read.

```jsx
<meta property="og:title" content="Paul K. Lunow – Autor, CTO & Mentor" />
<meta property="og:description" content="Debütroman Riaru, Podcast, CTO bei Vention, Mentoring & Beratung." />
```

---

### M7. Add impressum physical address (TMG compliance)
**Impact:** Legal compliance, trust | **Effort:** 10 min | **Files:** `src/locales/de/common.json`, `src/locales/en/common.json`

Under §5 TMG, a professional/commercial website must include a physical address. The current Impressum only states legal responsibility without an address. Add a postal address to the contact translations.

---

### M8. Add preconnect for `api.fontshare.com`
**Impact:** Font loading speed | **Effort:** 5 min | **Files:** `src/app/layout.jsx`

The existing preconnect is for `cdn.fontshare.com` but the CSS is loaded from `api.fontshare.com` — a different origin. Add:
```jsx
<link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
```
(This is a temporary fix until H6 self-hosting is implemented)

---

### M9. Remove dead template code from Welcome component
**Impact:** Code quality | **Effort:** 5 min | **Files:** `src/components/Welcome.jsx`

Lines 12–36 contain an unused `tableOfContents` variable from the Figma tutorial template this site was adapted from. Remove it:
```js
// Delete the entire tableOfContents variable (lines 12-36 in Welcome.jsx)
```

---

## Low Priority — Backlog

### L1. Add `llms.txt` for AI crawler guidance
**Impact:** AI search readiness | **Effort:** 15 min | **Files:** `public/llms.txt`

Create a `llms.txt` file to guide AI crawlers:
```
# Paul K. Lunow
> Author of Riaru, CTO at Vention, podcast host and tech mentor

## About
Paul K. Lunow is a German tech entrepreneur, CTO, published author, and podcast host.

## Book
Riaru (2025) - Cyber fiction novel about tech corporations, published by Periplaneta

## Podcast
Product & Cake - Tech product and leadership podcast

## Services
CTO consulting, startup mentoring, advisory board participation (contact: hallo25@paul.lun.io)
```

---

### L2. Add a dedicated Impressum page
**Impact:** Legal, trust, linkability | **Effort:** 1 hour

Create `/de/impressum/` and `/en/imprint/` as separate pages so the legal information can be directly linked to from other sites and appears as a crawlable URL.

---

### L3. Add privacy policy page
**Impact:** Trust, GDPR transparency | **Effort:** 2 hours

Even with GDPR-compliant Matomo, a privacy policy page strengthens trust signals and is a quality rater consideration.

---

### L4. Fix Footer — bilingual "All rights reserved"
**Impact:** Consistency | **Effort:** 5 min | **Files:** `src/components/Footer.jsx`, locale JSON

"All rights reserved." is hardcoded in English even on the German version. Add to locale JSON:
- DE: `"footer.rights": "Alle Rechte vorbehalten."`
- EN: `"footer.rights": "All rights reserved."`

---

### L5. Consider creating dedicated landing pages for key topics
**Impact:** Long-tail SEO | **Effort:** High

The site is currently one page covering: novel, CTO work, podcast, and mentoring. Each topic could be a separate URL targeting different search queries:
- `/de/riaru/` — book landing page with more content
- `/de/beratung/` — consulting services page
- `/de/podcast/` — podcast page
- `/de/blog/` — thought leadership content

This is the highest long-term SEO opportunity but requires the most work.

---

## Score Improvement Estimates

Implementing all Critical + High items would raise the score from **54 → ~78/100**:

| Category | Current | After C+H fixes |
|----------|---------|-----------------|
| Technical SEO | 48 | 78 |
| Content Quality | 68 | 74 |
| On-Page SEO | 52 | 74 |
| Schema | 10 | 72 |
| Performance | 65 | 75 |
| Images | 55 | 68 |
| AI Readiness | 70 | 82 |
| **Total** | **54** | **~76** |

Adding Medium items would push to **~83/100**.

---

## Quick Wins Summary (sorted by effort vs. impact)

| Task | Effort | Impact |
|------|--------|--------|
| C4: Fix alt texts on 2 images | 5 min | High |
| L4: Fix bilingual footer | 5 min | Low |
| H9: Improve page titles | 5 min | High |
| H10: Improve meta descriptions | 10 min | High |
| H2: Add Twitter Card tags | 10 min | Medium |
| H3: Fix permanent redirect | 10 min | Medium |
| H5: Fix stale "pre-order" CTA | 10 min | High |
| C1: Add robots.txt | 10 min | Critical |
| M8: Add fontshare preconnect | 5 min | Medium |
| C2: Add sitemap.xml | 15 min | Critical |
| H1: Fix og:image to absolute URL | 15 min | High |
| H8: Add crawlable locale link | 15 min | High |
| M9: Remove dead template code | 5 min | Low |
| C3: Add hreflang + canonical | 20 min | Critical |
| H7: Fix heading hierarchy | 20 min | Medium |
| C5: Add JSON-LD schema | 30 min | Critical |
