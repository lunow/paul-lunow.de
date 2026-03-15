# SEO Audit Report — paul-lunow.de
**Date:** 2026-03-12
**Audited URL:** https://www.paul-lunow.de
**Tech Stack:** Next.js 15, React 18, TailwindCSS, Static Export
**Auditor:** Claude Code SEO Audit

---

## Executive Summary

**Overall SEO Health Score: 54 / 100**

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 48/100 | 25% | 12.0 |
| Content Quality | 68/100 | 25% | 17.0 |
| On-Page SEO | 52/100 | 20% | 10.4 |
| Schema / Structured Data | 10/100 | 10% | 1.0 |
| Performance (CWV) | 65/100 | 10% | 6.5 |
| Images | 55/100 | 5% | 2.75 |
| AI Search Readiness | 70/100 | 5% | 3.5 |
| **Total** | | | **53.15 → 54/100** |

### Business Type Detected
Personal brand / author website for Paul K. Lunow — a bilingual (DE/EN) single-page site promoting:
- **Riaru** (debut novel, cyber fiction)
- **CTO role** at Vention
- **Podcast** (Product & Cake)
- **Consulting & Mentoring** services

### Top 5 Critical Issues
1. **No robots.txt** — Search engines are crawling blind, no crawl budget direction
2. **No sitemap.xml** — Search engines cannot discover or prioritize pages
3. **No hreflang tags** — Bilingual site (DE/EN) without language signals to Google
4. **Cover and profile images missing alt text** — Key images not indexed or accessible
5. **No schema markup whatsoever** — Missing Person, WebSite, Book, and more

### Top 5 Quick Wins
1. Add `robots.txt` to `public/` (10 minutes)
2. Add `sitemap.xml` to `public/` (15 minutes)
3. Add hreflang tags in `[locale]/layout.jsx` (20 minutes)
4. Fix alt text on cover image in `Hero.jsx` and profile image in `Contact.jsx` (5 minutes)
5. Add Person + WebSite schema in `layout.jsx` (30 minutes)

---

## 1. Technical SEO — Score: 48/100

### 1.1 robots.txt
**Status: MISSING ❌ (Critical)**

No `public/` directory exists. There is no robots.txt served at `https://www.paul-lunow.de/robots.txt` (returns 404).

**Impact:** Search engines crawl without guidance. Cannot disallow irrelevant paths. Cannot point to sitemap.

**Fix:** Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.paul-lunow.de/sitemap.xml
```

### 1.2 XML Sitemap
**Status: MISSING ❌ (Critical)**

No sitemap.xml found at `/sitemap.xml` or `/sitemap_index.xml`.

**Impact:** Google cannot efficiently discover both `/de/` and `/en/` pages. Both language versions may be slow to index.

**Fix:** Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.paul-lunow.de/de/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.paul-lunow.de/de/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.paul-lunow.de/en/"/>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.paul-lunow.de/en/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.paul-lunow.de/de/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.paul-lunow.de/en/"/>
    <lastmod>2025-01-15</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

### 1.3 Hreflang Tags
**Status: MISSING ❌ (Critical)**

The site serves content in German (`/de/`) and English (`/en/`) but has no `<link rel="alternate" hreflang="...">` tags in the `<head>`.

**Impact:** Google may serve the wrong language to users. Risk of duplicate content penalty between `/de/` and `/en/` pages. Language switcher exists in UI but is invisible to crawlers.

**Fix:** In `src/app/[locale]/layout.jsx`, add to `generateMetadata()`:
```js
alternates: {
  canonical: `https://www.paul-lunow.de/${locale}/`,
  languages: {
    'de': 'https://www.paul-lunow.de/de/',
    'en': 'https://www.paul-lunow.de/en/',
    'x-default': 'https://www.paul-lunow.de/de/',
  },
},
```

### 1.4 Canonical Tags
**Status: MISSING ⚠️ (High)**

No canonical tags are set in either the root layout or the locale layout. With trailing slashes enabled (`trailingSlash: true`), both `/de` and `/de/` may be accessible, creating duplicate URLs.

**Fix:** The `alternates.canonical` in the `generateMetadata` fix above also solves this.

### 1.5 Root Redirect
**Status: INCONSISTENT ⚠️ (High)**

Two conflicting redirect implementations:
- `next.config.js`: `/ → /en` (302, temporary) — only applies in dev server, NOT in static export
- `src/app/page.jsx`: `redirect('/de')` — this is what actually fires in the static export

The resulting static `out/index.html` redirects to `/de` but `next.config.js` suggests intent to redirect to `/en`. This is confusing and the redirect is not marked permanent (301).

**Fix:** Align both redirects to the same destination. Since the primary language is German, redirect to `/de/`. In `page.jsx`:
```js
redirect('/de', 'permanent')  // Next.js 15 supports second argument
```
Or use the `permanentRedirect()` function:
```js
import { permanentRedirect } from 'next/navigation'
export default function RootPage() {
  permanentRedirect('/de')
}
```

### 1.6 HTTPS & Security
**Status: GOOD ✅**

Site is served over HTTPS. No issues detected.

### 1.7 URL Structure
**Status: GOOD ✅**

- Clean URLs with trailing slashes (`/de/`, `/en/`)
- Logical structure
- Static export = fast server response

### 1.8 Crawlability Summary
Pages indexed: `/de/` and `/en/` (2 pages total for a single-page site)

---

## 2. Content Quality — Score: 68/100

### 2.1 E-E-A-T Assessment

**Experience: STRONG ✅**
- 20 years in tech industry stated explicitly
- Founder of multiple companies
- Published author (Riaru, Jan 2025)
- CTO role at Vention (named company with links)

**Expertise: STRONG ✅**
- Specific technical background (software development, leadership)
- Podcast co-host (Product & Cake)
- Mentor at Tech4Germany
- Advisory board memberships

**Authority: MODERATE ⚠️**
- 13 genuine testimonials from named people with roles
- No backlink profile visible
- LinkedIn and Instagram linked (social proof)
- Publisher (Periplaneta) linked

**Trust: MODERATE ⚠️**
- Imprint/Impressum present in contact section ✅
- Email address present (hallo25@paul.lun.io) ✅
- No cookie banner (Matomo, privacy-friendly) ✅
- No privacy policy page ⚠️
- Matomo tracking domain is a subdomain (`gdpr-conform-tracking.lun.io`) — not mainstream, some ad blockers may flag it

### 2.2 Content Depth

**German version (primary):** Rich, multi-section content covering:
- Hero with testimonial and book CTA
- Book introduction with plot summary and factual stats
- Author biography
- Podcast section
- Mentoring/consulting services with specific examples
- Work section (Vention)
- 13 testimonials (expandable)
- Contact section

**English version:** Full translation of all content. Both versions have substantively equivalent content.

**Content thin spots:**
- The "freeChapters" section title is "Let's talk about your project" but offers no actual free chapters (misleading component name from template)
- No blog, no articles, no regular content updates — limits long-tail keyword opportunities
- The site is a single-page app — all content lives at one URL

### 2.3 Readability
- Text is clear and well-written in both languages
- Good use of short paragraphs
- Testimonials break up the content effectively
- German content uses informal "Du" consistently (appropriate for target audience)

### 2.4 Duplicate Content Risk
- `/de/` and `/en/` are different-language versions of the same content
- Without hreflang, Google may see these as duplicate pages
- This is solvable with hreflang (see Technical SEO section)

### 2.5 Template Remnants (Code Issue)
**In `src/components/Welcome.jsx`:** A `tableOfContents` object exists from the original template (a Figma tutorial book template) but is never used:
```js
const tableOfContents = {
  'Getting started': { 'Getting started': 1, 'Intro to Figma': 15, ... },
  ...
}
```
This is dead code from the UI template. Not an SEO issue, but indicates incomplete template cleanup.

---

## 3. On-Page SEO — Score: 52/100

### 3.1 Title Tags

**German:** "Paul K. Lunow" — 14 characters
**English:** "Paul K. Lunow" — 14 characters

**Issues:**
- Too short and generic — doesn't communicate expertise or value
- No keywords about author, CTO, novel, mentor
- Same title for both languages
- Ideal length: 50-60 characters

**Recommended titles:**
- DE: `Paul K. Lunow – Autor, CTO & Mentor | Debütroman Riaru`
- EN: `Paul K. Lunow – Author, CTO & Mentor | Debut Novel Riaru`

### 3.2 Meta Descriptions

**German:** "Entdecke Riaru, den Debütroman von Paul K. Lunow. Ein packender Cyber-Roman, der die Geheimnisse von Tech-Konzernen und die Macht von Metadaten enthüllt. Jetzt vorbestellen!"
**English:** "Discover Riaru, the debut novel by Paul K. Lunow. A gripping cyber novel that reveals the secrets of tech corporations and the power of metadata. Pre-order now!"

**Issues:**
- Both focus exclusively on the book, ignoring CTO role, podcast, and mentoring
- Good length (within 150-160 char limit) ✅
- Has a CTA ("Jetzt vorbestellen!") ✅

**Recommended:**
- DE: `Paul K. Lunow: Autor des Cyber-Romans Riaru, CTO bei Vention, Podcast-Host und Mentor. Erfahre mehr über Tech-Leadership, mein Buch und Beratung.`
- EN: `Paul K. Lunow: Author of cyber novel Riaru, CTO at Vention, podcast host & mentor. Explore tech leadership, my book, and consulting services.`

### 3.3 Heading Structure

**H1 (Hero.jsx):**
- DE: "Dein Blick hinter die Kulissen" ✅ (exists, unique)
- EN: "Your look behind the scenes" ✅

**H2 (SectionHeading component):** Properly uses `<h2>` tag ✅
- Section headings: "Herzlich Willkommen", "Kontakt", etc.

**Content headings using `<p>` instead of semantic tags ❌:**
- `Introduction.jsx` line 56: `<p className="font-display text-4xl font-bold">` — should be `<h2>` or `<h3>`
  Text: "Willkommen im modernsten Unternehmen der Welt"
- `Contact.jsx` line 33: `<p className="font-display text-5xl font-extrabold">` — should be `<h2>`
  Text: "Paul K. Lunow – / CTO at Vention GmbH."
- `Welcome.jsx` line 50: `<p className="font-display text-3xl font-bold">` — should be `<h3>`
  Text: "Hi, ich bin Paul. Und Du bist auf meiner persönlichen Webseite gelandet."

### 3.4 Open Graph Tags

**Present:**
- `og:image` ✅ (but potentially relative path — see below)
- `og:url` ✅ (hardcoded to `https://www.paul-lunow.de` — not locale-specific)
- `og:type` ✅ (`website`)
- `og:title` ✅ (via locale layout generateMetadata)
- `og:description` ✅ (via locale layout generateMetadata)
- `og:locale` ✅ (`de_DE` / `en_US`)

**Issues:**
- `og:image` uses `coverImage.src` which in Next.js static export is a hashed path like `/_next/static/media/Cover-riaru-web.jpg.abc123.jpg`. This is a **relative path** — Open Graph requires absolute URLs. The image may not render when shared on social media.
- `og:url` is always `https://www.paul-lunow.de` — should be locale-specific (`/de/` or `/en/`)
- No `og:image:width`, `og:image:height`, `og:image:alt` tags

**Fix:** In `src/app/layout.jsx`, use an absolute URL:
```js
<meta property="og:image" content="https://www.paul-lunow.de/og-image.jpg" />
```
Copy the cover image to `public/og-image.jpg` for a stable, absolute URL.

### 3.5 Twitter Card Tags
**Status: MISSING ⚠️**

No Twitter/X Card tags found. Add to `generateMetadata`:
```js
twitter: {
  card: 'summary_large_image',
  title: t.meta.title,
  description: t.meta.description,
  images: ['https://www.paul-lunow.de/og-image.jpg'],
},
```

### 3.6 Internal Linking
- Single-page app — all "links" are anchor scroll links (`#welcome`, `#podcasts`, etc.)
- No traditional internal link structure
- External links: LinkedIn, Instagram, Vention (German + English), Amazon, Periplaneta publisher, podcast platforms

---

## 4. Schema / Structured Data — Score: 10/100

### 4.1 Current Implementation
**Status: NONE ❌ (Critical)**

No JSON-LD, no Microdata, no RDFa found anywhere in the codebase.

### 4.2 Recommended Schema Types

**Priority 1 — Person Schema (Root Layout)**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Paul K. Lunow",
  "url": "https://www.paul-lunow.de",
  "image": "https://www.paul-lunow.de/og-image.jpg",
  "jobTitle": "CTO",
  "worksFor": {
    "@type": "Organization",
    "name": "Vention",
    "url": "https://ventionteams.com"
  },
  "sameAs": [
    "https://www.linkedin.com/in/paul-lunow",
    "https://www.instagram.com/paullunow/"
  ],
  "knowsAbout": ["Technology Leadership", "Software Development", "Startup Mentoring", "Cyber Fiction"],
  "nationality": "German"
}
```

**Priority 2 — WebSite Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.paul-lunow.de",
  "name": "Paul K. Lunow",
  "description": "Personal website of Paul K. Lunow — author, CTO, podcast host and mentor"
}
```

**Priority 3 — Book Schema (Introduction section)**
```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Riaru",
  "author": {
    "@type": "Person",
    "name": "Paul K. Lunow"
  },
  "isbn": "",
  "numberOfPages": 244,
  "inLanguage": "de",
  "publisher": {
    "@type": "Organization",
    "name": "Periplaneta",
    "url": "https://www.periplaneta.com/"
  },
  "datePublished": "2025-01-15",
  "genre": "Cyber Fiction",
  "url": "https://www.amazon.de/..."
}
```

**Priority 4 — Audiobook Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Audiobook",
  "@id": "https://www.paul-lunow.de/#audiobook-riaru",
  "name": "Riaru – Willkommen im modernsten Unternehmen der Welt",
  "author": { "@id": "https://www.paul-lunow.de/#person" },
  "readBy": { "@type": "Person", "name": "Rebecca Veil" },
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
  "url": "https://www.lauscherlounge.de/produktionen/riaru",
  "workExample": { "@id": "https://www.paul-lunow.de/#book-riaru" }
}
```

**Priority 5 — PodcastSeries Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "name": "Product & Cake",
  "author": { "@type": "Person", "name": "Paul K. Lunow" },
  "description": "Podcast about tech products and leadership"
}
```

---

## 5. Performance (Core Web Vitals) — Score: 65/100

### 5.1 Architecture Assessment
- **Static Export** (`output: 'export'`) — excellent for performance, pre-rendered HTML ✅
- **No server-side rendering** — eliminates TTFB variability ✅

### 5.2 Estimated Core Web Vitals

**LCP (Largest Contentful Paint): NEEDS ATTENTION ⚠️**
- Likely element: Book cover image (Hero.jsx) or background image
- Cover image has `priority` prop ✅ (preloads)
- Background image uses CSS `background-image: url(...)` — not optimized ❌
- External font from fontshare.com (`cabinet-grotesk`) — no preload, render-blocking risk ❌

**CLS (Cumulative Layout Shift): RISK ⚠️**
- `images: { unoptimized: true }` — no automatic dimension attributes
- `Cover image in Hero.jsx`: `<Image className="w-full" src={coverImage} alt="" priority />` — no explicit `width`/`height` — Next.js Image component should handle this, but unoptimized mode may not reserve space
- Author photo in Welcome.jsx has explicit `width="600" height="900"` ✅

**INP (Interaction to Next Paint): LIKELY GOOD ✅**
- Limited JavaScript interactions (collapsible testimonials, language switcher, navbar)
- Matomo analytics loaded `afterInteractive` ✅

### 5.3 Font Loading Issues
```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap" />
```
- Third-party font from `api.fontshare.com` — introduces network dependency ❌
- No `rel="preconnect"` for `api.fontshare.com` (only `cdn.fontshare.com` has preconnect) ❌
- `display=swap` is good ✅ but only if the font loads quickly

### 5.4 Image Optimization
- `images: { unoptimized: true }` in next.config.js — disables WebP/AVIF conversion ❌
- All images in `/src/images/` — served as-is in static export
- Background images loaded via CSS — not optimized, not lazy-loaded

---

## 6. Images — Score: 55/100

### 6.1 Missing Alt Text (Critical)

| File | Image | Current Alt | Status |
|------|-------|-------------|--------|
| `Hero.jsx:51` | Book cover (Cover-riaru-web.jpg) | `""` (empty) | ❌ Critical |
| `Contact.jsx:23` | Profile photo (profile.jpg) | `""` (empty) | ❌ Critical |

**Fixed:** Welcome.jsx has a good alt text:
```jsx
alt="Paul K. Lunow berät und coacht Teams und Unternehmen"  ✅
```

### 6.2 Recommended Alt Text Fixes
- **Cover image (Hero):** `alt="Riaru – Debütroman von Paul K. Lunow, erschienen Januar 2025"` (DE) / `alt="Riaru – debut novel by Paul K. Lunow, published January 2025"` (EN) — use locale-aware alt text
- **Profile (Contact):** `alt="Paul K. Lunow, CTO at Vention"`

### 6.3 Image Formats
- All images are JPEG/PNG — no WebP or AVIF conversion (due to `unoptimized: true`)
- Missing opportunity for 25-35% file size reduction

### 6.4 Avatar Images
Testimonial avatars (avatar-1.png through avatar-N.png) — alt text depends on avatar component implementation. Should include the testimonial author's name.

---

## 7. AI Search Readiness — Score: 70/100

### 7.1 AI Crawler Access
- No robots.txt = no crawler restrictions (all bots allowed by default) ✅
- No `llms.txt` file

### 7.2 Content Citability
**Strong signals:**
- Clear author identity with verifiable credentials ✅
- Specific factual claims (20 years in tech, CTO at Vention, 244-page book, release date Jan 2025) ✅
- Named publisher (Periplaneta) with link ✅
- 13 testimonials with real names and roles ✅
- Tech4Germany mentorship — verifiable institution ✅

**Weak signals:**
- No structured FAQ section
- No date-stamped articles or blog posts
- No clear "last updated" signals on content
- No citations or external references

### 7.3 Brand Mention Opportunities
- "Riaru" as a unique, searchable book title ✅
- "Product & Cake" podcast — distinctive name ✅
- "Paul K. Lunow" — uncommon name, low ambiguity ✅

---

## 8. Internationalization (i18n) SEO

### 8.1 Architecture
- Two locales: `de` (primary) and `en`
- URL structure: `/de/` and `/en/` ✅ (subdirectory approach — recommended by Google)
- Both pages generated statically ✅
- Language switcher in navbar ✅

### 8.2 Issues
- **No hreflang** (covered in Technical SEO)
- **x-default not set** — Google needs x-default to know which language to show for unmatched locales
- **og:url** hardcoded to base URL, not locale-specific
- **Root redirect** (`/` → `/de`) is not permanent (302), could cause issues in some indexing scenarios
- **Footer copyright:** "All rights reserved." is only in English even on the German page

---

## 9. Additional Findings

### 9.1 Template Cleanup Required
`src/components/Welcome.jsx` contains dead code from the Tailwind UI template:
```js
const tableOfContents = {
  'Getting started': { ... },
  'Fundamentals': { ... },
  'Boolean operations': { ... },
  'Optimizing for production': { ... },
}
```
This `tableOfContents` variable is never used anywhere. Not an SEO issue, but indicates incomplete template cleanup.

### 9.2 Privacy Policy Missing
The Impressum text says "no personal data is stored" but the site runs Matomo analytics (even if GDPR-friendly). A dedicated privacy policy page would strengthen trust signals.

### 9.3 Anchor ID Naming
Section IDs use English names (`welcome`, `podcasts`, `mentoring`, `work`, `contact`) even on the German version. The URL fragment would be `/de/#welcome` — acceptable but slightly inconsistent with locale.

### 9.4 Missing `lang` Attribute on Root HTML
The root `layout.jsx` renders `<html>` without a `lang` attribute — it only has `className`. The locale layout wraps in `LocaleProvider` but doesn't set `lang` on the HTML element.

**Fix in `src/app/[locale]/layout.jsx`:**
This requires the locale layout to actually render the `<html>` tag, which in Next.js App Router means the root layout needs the locale parameter. This is a structural change but important for accessibility and SEO.

**Simpler workaround:** Since the content is in a specific locale, set `lang` in root layout based on default:
```jsx
<html lang="de" ...>
```
Or better, refactor so `[locale]/layout.jsx` can pass `lang` to the html element.
