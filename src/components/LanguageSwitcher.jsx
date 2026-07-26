'use client'

import { useLocale, useTranslations } from '@/components/LocaleProvider'
import clsx from 'clsx'

export function LanguageSwitcher({ variant = 'pill', bordered = true, className }) {
  const locale = useLocale()
  const translations = useTranslations()

  const nextLocale = locale === 'de' ? 'en' : 'de'
  const label = nextLocale === 'en' ? 'English' : 'Deutsch'
  const href = nextLocale === 'de' ? '/de/' : '/'

  if (variant === 'pill') {
    return (
      <a
        href={href}
        aria-label={
          locale === 'de'
            ? translations.language.switchToEnglish
            : translations.language.switchToGerman
        }
        className={clsx(
          'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 underline-offset-4 transition ease-out duration-200 hover:text-slate-900',
          bordered
            ? 'bg-white/90 shadow-sm ring-1 ring-slate-900/10 hover:-translate-y-px hover:bg-teal-50 hover:shadow-md hover:ring-teal-500/20'
            : 'hover:underline',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60',
          className,
        )}
      >
        <span className="leading-none">{label}</span>
      </a>
    )
  }

  return (
    <a
      href={href}
      className={clsx(
        'rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-900/10 hover:bg-white hover:text-slate-700',
        className,
      )}
    >
      {locale === 'de' ? 'English' : 'Deutsch'}
    </a>
  )
}
