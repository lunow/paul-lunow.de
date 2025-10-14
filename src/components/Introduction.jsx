import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { Preorder } from '@/components/Preorder'

export default function Facts({ translations }) {
  const stats = [
    { id: 1, name: translations.stats.pages, value: '244' },
    { id: 2, name: translations.stats.language, value: translations.stats.language === 'Language' ? 'German' : 'deutsch' },
    {
      id: 3,
      name: translations.stats.publisher,
      value: 'Periplaneta',
      link: 'https://www.periplaneta.com/',
    },
    { id: 4, name: translations.stats.releaseDate, value: '15.01.2025' },
  ]
  return (
    <div className="bg-white pt-1">
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
            <dt className="text-sm/6 font-semibold text-gray-600">
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
              {stat.link ? (
                <Link
                  href={stat.link}
                  target="_blank"
                  className="hover:text-teal-800"
                >
                  {' '}
                  {stat.value}{' '}
                </Link>
              ) : (
                stat.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Introduction({ translations, preorderTranslations }) {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {translations.title}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {translations.paragraph1}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {translations.paragraph2}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {translations.paragraph3}
        </p>

        <Facts translations={translations}></Facts>
        <div className="flex justify-center pt-8 text-center">
          <Preorder learnMore="false" translations={preorderTranslations}></Preorder>
        </div>
      </Container>
    </section>
  )
}