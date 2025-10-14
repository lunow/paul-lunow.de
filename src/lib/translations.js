import deTranslations from '@/locales/de/common.json'
import enTranslations from '@/locales/en/common.json'

const translations = {
  de: deTranslations,
  en: enTranslations,
}

export function getTranslations(locale = 'de') {
  return translations[locale] || translations.de
}

export function getNestedTranslation(translations, key) {
  return key.split('.').reduce((obj, key) => obj?.[key], translations)
}
