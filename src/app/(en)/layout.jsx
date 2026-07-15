import { RootDocument } from '@/components/RootDocument'
import { getTranslations } from '@/lib/translations'

const t = getTranslations('en')

export const metadata = {
  metadataBase: new URL('https://www.paul-lunow.de'),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: 'https://www.paul-lunow.de/',
    languages: {
      en: 'https://www.paul-lunow.de/',
      de: 'https://www.paul-lunow.de/de/',
      'x-default': 'https://www.paul-lunow.de/',
    },
  },
  openGraph: {
    type: 'website',
    title: t.meta.title,
    description: t.meta.description,
    url: 'https://www.paul-lunow.de/',
    locale: 'en_US',
    alternateLocale: 'de_DE',
    images: [
      {
        url: 'https://www.paul-lunow.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riaru – debut novel by Paul K. Lunow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
    images: ['https://www.paul-lunow.de/og-image.jpg'],
  },
}

export default function EnglishLayout({ children }) {
  return <RootDocument lang="en">{children}</RootDocument>
}
