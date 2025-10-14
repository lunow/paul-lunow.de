import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import { ContactLinks } from '@/components/ContactLinks'

export function Mentoring({ translations }) {
  return (
    <section
      id="mentoring"
      aria-labelledby="mentoring-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="mentoring-title">
          {translations.title}
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {translations.heading}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {translations.description}
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {translations.resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-1 px-3 sm:grid-cols-[25%_1fr] sm:gap-y-4 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative flex overflow-hidden text-2xl sm:items-center sm:justify-center">
                {resource.emoji}
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
      <Container>
        <p className="pt-32 tracking-tight text-slate-900 md:text-center">
          {translations.cta}
        </p>
      </Container>
    </section>
  )
}
