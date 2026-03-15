import { Container } from '@/components/Container'
import Image from 'next/image'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactLinks } from '@/components/ContactLinks'
import authorImage from '@/images/lunow-lunow-293.jpeg'

export function Welcome({ translations }) {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="welcome-title">
          {translations.title}
        </SectionHeading>

        <p className="mt-8 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {translations.greeting}
        </p>
      </Container>

      <div className="relative mt-8 bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-96 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                alt="Paul K. Lunow berät und coacht Teams und Unternehmen"
                src={authorImage}
                className="absolute inset-0 size-full bg-gray-50 object-cover"
                width="600"
                height="900"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                <span className="font-semibold">
                  {translations.story1}
                </span>{' '}
                {translations.story1Text}
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                <span className="font-semibold">
                  {translations.story2}
                </span>{' '}
                {translations.story2Text}
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                {translations.story3}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-8 bg-slate-50 py-12 sm:rounded-6xl">
          <p className="px-8 tracking-tight text-slate-900 md:text-center">
            <span className="font-semibold">{translations.cta}</span>{' '}
            {translations.ctaText}
          </p>
          <ContactLinks></ContactLinks>
        </div>
      </Container>
    </section>
  )
}
