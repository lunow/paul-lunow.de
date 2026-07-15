import { RootDocument } from '@/components/RootDocument'
import { getTranslations } from '@/lib/translations'

const t = getTranslations('de')

export const metadata = {
  metadataBase: new URL('https://www.paul-lunow.de'),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: 'https://www.paul-lunow.de/de/',
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
    url: 'https://www.paul-lunow.de/de/',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    images: [
      {
        url: 'https://www.paul-lunow.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riaru – Debütroman von Paul K. Lunow',
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

export default function GermanLayout({ children }) {
  return <RootDocument lang="de">{children}</RootDocument>
}
