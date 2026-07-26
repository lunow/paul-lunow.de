import Image from 'next/image'

import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/Cover-riaru-web.jpg'
import { Preorder } from '@/components/Preorder'

function Testimonial({ translations }) {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-teal-700 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-light text-slate-900">
          "{translations.testimonial}"
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-medium text-teal-700 before:content-['—_']">
          {translations.testimonialAuthor}
        </strong>
        , {translations.testimonialRole}
      </figcaption>
    </figure>
  )
}

export function Hero({ translations, preorderTranslations }) {
  return (
    <header
      id="writing"
      className="scroll-mt-6 overflow-hidden py-16 sm:py-20 lg:py-32"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <BentoCard
            tint="dark"
            className="flex items-center justify-center p-10 lg:col-span-5 lg:row-span-2"
          >
            <div className="absolute inset-0 text-white/10">
              <GridPattern
                x="50%"
                y="50%"
                patternTransform="translate(64 32)"
                scale={0.5}
              />
            </div>
            <div className="relative flex w-56 shadow-xl md:w-64">
              <Image
                className="w-full rounded-lg"
                src={coverImage}
                alt="Riaru – Debütroman von Paul K. Lunow, erschienen Januar 2025"
                priority
              />
            </div>
          </BentoCard>

          <BentoCard tint="stone" className="p-8 lg:col-span-7 sm:p-10">
            <Testimonial translations={translations} />
          </BentoCard>

          <BentoCard className="p-8 lg:col-span-7 sm:p-10 lg:p-12">
            <h1 className="font-display text-5xl font-light tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              {translations.title}
            </h1>
            <p className="mt-4 text-2xl font-light tracking-tight text-slate-600">
              {translations.subtitle}
            </p>
            <Preorder translations={preorderTranslations}></Preorder>
          </BentoCard>
        </div>
      </Container>
    </header>
  )
}
