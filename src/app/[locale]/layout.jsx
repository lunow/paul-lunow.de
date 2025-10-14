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
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
    },
  }
}

export default function LocaleLayout({ children, params: { locale } }) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>
}


