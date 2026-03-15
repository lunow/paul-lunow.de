import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'

import '@/styles/tailwind.css'
import favicon from '@/images/favicon.png'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://www.paul-lunow.de'),
  title: 'Paul K. Lunow – Autor, CTO & Mentor | Debütroman Riaru',
  description:
    'Paul K. Lunow: Autor des Cyber-Romans Riaru, CTO bei Vention, Podcast-Host und Mentor. Tech-Leadership, Beratung und ein packender Roman über die digitale Welt.',
}

const schemaData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.paul-lunow.de/#person',
    name: 'Paul K. Lunow',
    url: 'https://www.paul-lunow.de',
    image: 'https://www.paul-lunow.de/og-image.jpg',
    jobTitle: 'CTO',
    worksFor: {
      '@type': 'Organization',
      name: 'Vention Solutions GmbH',
      url: 'https://ventionteams.com/',
    },
    description:
      'Paul K. Lunow is a CTO, author, podcast host and mentor with 20 years in the tech industry. Author of the debut novel Riaru (2025) and the audiobook Riaru (2026).',
    sameAs: [
      'https://www.linkedin.com/in/paul-lunow',
      'https://www.instagram.com/paullunow/',
    ],
    email: 'mailto:hallo26@paul.lun.io',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.paul-lunow.de/#website',
    url: 'https://www.paul-lunow.de',
    name: 'Paul K. Lunow',
    description:
      'Personal website of Paul K. Lunow – CTO, author of Riaru, podcast host and tech consultant.',
    inLanguage: ['de', 'en'],
    author: { '@id': 'https://www.paul-lunow.de/#person' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': 'https://www.paul-lunow.de/#book-riaru',
    name: 'Riaru',
    author: { '@id': 'https://www.paul-lunow.de/#person' },
    publisher: {
      '@type': 'Organization',
      name: 'Periplaneta',
      url: 'https://www.periplaneta.com/',
    },
    datePublished: '2025-01-15',
    numberOfPages: 244,
    inLanguage: 'de',
    bookFormat: 'https://schema.org/Paperback',
    description:
      'Riaru ist der Debütroman von Paul K. Lunow – ein Cyber-Roman über Tech-Konzerne, Metadaten und die Frage, was hinter den Systemen unserer digitalen Welt steckt.',
    image: 'https://www.paul-lunow.de/og-image.jpg',
    url: 'https://www.paul-lunow.de/de/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Audiobook',
    '@id': 'https://www.paul-lunow.de/#audiobook-riaru',
    name: 'Riaru – Willkommen im modernsten Unternehmen der Welt',
    author: { '@id': 'https://www.paul-lunow.de/#person' },
    readBy: {
      '@type': 'Person',
      name: 'Rebecca Veil',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lauscher Lounge',
      url: 'https://www.lauscherlounge.de/',
    },
    datePublished: '2026-01-30',
    duration: 'PT8H19M',
    isbn: '978-3-911421-17-1',
    inLanguage: 'de',
    bookFormat: 'https://schema.org/AudiobookFormat',
    description:
      'Das Hörbuch zu Riaru, dem Debütroman von Paul K. Lunow. Gesprochen von Rebecca Veil, produziert von Daniel Lewy.',
    url: 'https://www.lauscherlounge.de/produktionen/riaru',
    sameAs: 'https://www.lauscherlounge.de/produktionen/riaru',
    workExample: { '@id': 'https://www.paul-lunow.de/#book-riaru' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    '@id': 'https://www.paul-lunow.de/#podcast',
    name: 'Product & Cake',
    description:
      'Podcast about tech products and leadership by Paul K. Lunow.',
    webFeed: 'https://podcast-feed.paul-lunow.de/',
    author: { '@id': 'https://www.paul-lunow.de/#person' },
    sameAs: [
      'https://podcasts.apple.com/gb/podcast/product-and-cake/id1651982219',
      'https://open.spotify.com/show/6GWmx7OdEn04inrQjp3Bif',
    ],
  },
]

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link rel="icon" href={favicon.src} />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        <meta
          property="og:image"
          content="https://www.paul-lunow.de/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Riaru – Debütroman von Paul K. Lunow"
        />
        <meta property="og:url" content="https://www.paul-lunow.de" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Paul K. Lunow – Autor, CTO & Mentor"
        />
        <meta
          property="og:description"
          content="Debütroman Riaru, Hörbuch, Podcast, CTO bei Vention, Mentoring & Beratung."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>

      <Script id="matomo-tracking" strategy="afterInteractive">
        {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//gdpr-conform-tracking.lun.io/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '4']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
      </Script>
    </html>
  )
}
