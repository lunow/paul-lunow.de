import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script'

import '@/styles/tailwind.css'
import coverImage from '@/images/Cover-riaru-web.jpg'
import favicon from '@/images/favicon.png'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Paul K. Lunow',
  description: 'Entdecke Riaru, den Debütroman von Paul K. Lunow. Ein packender Cyber-Roman, der die Geheimnisse von Tech-Konzernen und die Macht von Metadaten enthüllt. Jetzt vorbestellen!',
}

export default function RootLayout({ children }) {
  return (
    <html
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
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        <meta property="og:image" content={coverImage.src} />
        <meta property="og:url" content="https://www.paul-lunow.de" />
        <meta property="og:type" content="website" />
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
