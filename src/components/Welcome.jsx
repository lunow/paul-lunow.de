import { Container } from '@/components/Container'
import Image from 'next/image'
import { BentoCard } from '@/components/BentoCard'
import { ContactLinks } from '@/components/ContactLinks'
import authorImage from '@/images/lunow-lunow-293.jpeg'

export function Welcome({ translations }) {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-title"
      className="scroll-mt-6 py-16 sm:py-20 lg:py-32"
    >
      <Container>
        <h2
          id="welcome-title"
          className="pb-16 font-display text-4xl font-light tracking-tight text-slate-900 sm:pb-20 md:text-6xl lg:pb-24"
        >
          {translations.greeting}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <BentoCard className="lg:col-span-2 lg:row-span-2">
            <Image
              alt="Paul K. Lunow berät und coacht Teams und Unternehmen"
              src={authorImage}
              className="h-full min-h-96 w-full object-cover"
            />
          </BentoCard>

          <BentoCard tint="stone" className="p-8 lg:col-span-3 sm:p-10">
            <h3 className="font-display text-xl font-medium tracking-tight text-teal-700">
              {translations.story1}
            </h3>
            <p className="mt-3 text-lg font-light tracking-tight text-slate-700">
              {translations.story1Text}
            </p>
          </BentoCard>

          <BentoCard tint="sage" className="p-8 lg:col-span-3 sm:p-10">
            <h3 className="font-display text-xl font-medium tracking-tight text-teal-700">
              {translations.story2}
            </h3>
            <p className="mt-3 text-lg font-light tracking-tight text-slate-700">
              {translations.story2Text}
            </p>
          </BentoCard>

          <BentoCard className="p-8 lg:col-span-5 sm:p-10">
            <p className="text-lg font-light tracking-tight text-slate-700">
              {translations.story3}
            </p>
          </BentoCard>
        </div>

        <BentoCard tint="dark" className="mt-6 px-8 py-12 sm:px-12 lg:mt-8">
          <p className="font-display text-2xl font-light tracking-tight md:text-center">
            <span className="font-medium">{translations.cta}</span>{' '}
            <span className="text-white/70">{translations.ctaText}</span>
          </p>
          <ContactLinks variant="dark"></ContactLinks>
        </BentoCard>
      </Container>
    </section>
  )
}
