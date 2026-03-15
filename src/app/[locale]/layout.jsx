import { LocaleProvider } from '@/components/LocaleProvider'
import { getTranslations } from '@/lib/translations'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}

export async function generateMetadata({ params: { locale } }) {
  const t = getTranslations(locale)
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `https://www.paul-lunow.de/${locale}/`,
      languages: {
        de: 'https://www.paul-lunow.de/de/',
        en: 'https://www.paul-lunow.de/en/',
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
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: ['https://www.paul-lunow.de/og-image.jpg'],
    },
  }
}

export default function LocaleLayout({ children, params: { locale } }) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>
}
