'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { getTranslations } from '@/lib/translations'

const LocaleContext = createContext({
  locale: 'en',
  t: (key) => key,
  translations: {},
})

export function LocaleProvider({ locale, children }) {
  const translations = useMemo(() => getTranslations(locale), [locale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({ locale, translations, t: (key) => key.split('.').reduce((obj, k) => obj?.[k], translations) }),
    [locale, translations],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext).locale
}

export function useT() {
  return useContext(LocaleContext).t
}

export function useTranslations() {
  return useContext(LocaleContext).translations
}

