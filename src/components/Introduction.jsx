import Link from 'next/link'

import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { Preorder } from '@/components/Preorder'

export default function Facts({ translations }) {
  const stats = [
    { id: 1, name: translations.stats.pages, value: '244' },
    { id: 2, name: translations.stats.audiobookLength, value: '8h 19min' },
    { id: 3, name: translations.stats.language, value: translations.stats.language === 'Language' ? 'German' : 'deutsch' },
    {
      id: 4,
      name: translations.stats.publisher,
      value: 'Periplaneta',
      link: 'https://www.periplaneta.com/',
    },
    { id: 5, name: translations.stats.releaseDate, value: '15.01.2025' },
  ]
  const tints = ['sage', 'stone', 'white', 'clay', 'stone']
  return (
    <dl className="mt-16 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat, index) => (
        <BentoCard
          key={stat.id}
          tint={tints[index % tints.length]}
          className="flex flex-col p-6"
        >
          <dt className="text-sm font-light text-slate-600">{stat.name}</dt>
          <dd className="order-first font-display text-xl font-light tracking-tight text-slate-900 sm:text-2xl">
            {stat.link ? (
              <Link
                href={stat.link}
                target="_blank"
                className="hover:text-teal-700"
              >
                {stat.value}
              </Link>
            ) : (
              stat.value
            )}
          </dd>
        </BentoCard>
      ))}
    </dl>
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
        <h2 className="mt-8 font-display text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
          {translations.title}
        </h2>
        <p className="mt-4 text-lg font-light tracking-tight text-slate-700">
          {translations.paragraph1}
        </p>
        <p className="mt-4 text-lg font-light tracking-tight text-slate-700">
          {translations.paragraph2}
        </p>
        <p className="mt-4 text-lg font-light tracking-tight text-slate-700">
          {translations.paragraph3}
        </p>
        <p className="mt-4 text-lg font-medium tracking-tight text-slate-900">
          {translations.audiobook}
        </p>

        <Facts translations={translations}></Facts>
        <div className="flex justify-center pt-8 text-center">
          <Preorder learnMore="false" translations={preorderTranslations}></Preorder>
        </div>
      </Container>
    </section>
  )
}