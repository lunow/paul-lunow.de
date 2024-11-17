import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import { ContactLinks } from '@/components/ContactLinks'

const resources2 = [
  {
    title: 'Start-ups',
    emoji: '🚀',
    description:
      'Als Sparring Partner, Coach und Zuhörer darf ich einige Gründerinnen und Gründer in der spannendsten Phase ihres Lebens begleiten.',
  },
  {
    title: 'Mentoring',
    emoji: '🤝',
    description:
      'Als Mentor bei Tech4Germany unterstütze ich junge Talente dabei, unsere Regierung digitaler zu machen!',
  },
  {
    title: 'Advisory Board',
    emoji: '✨',
    description:
      'Der Blick von Außen ist für jedes Unternehmen wichtig. Als Mitglied im Advisory Board bringe ich meine Erfahrungen ein.',
  },
]

const resources = [
  {
    title: 'Erfahrung',
    emoji: '🏆',
    description:
      'Fundierte Einblicke in Gründung, Wachstum und Leadership – gepaart mit praktischen Lösungen.',
  },
  {
    title: 'Klarheit',
    emoji: '💡',
    description:
      'Ich helfe Dir, schnelle Entscheidungen zu treffen und falsche Wege frühzeitig zu erkennen.',
  },
  {
    title: 'Perspektive',
    emoji: '🎯',
    description:
      'Frische Impulse, die Dir helfen, komplexe Herausforderungen aus einem neuen Blickwinkel zu sehen.',
  },
]

export function Mentoring() {
  return (
    <section
      id="mentoring"
      aria-labelledby="mentoring-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="mentoring-title">
          Beratung und Mentoring
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Binde mich in dein Team ein! Ich helfe Wege zu finden in dem weiten
          Meer aus Möglichkeiten.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Als Gründer mehrerer Firmen, Teamleiter und Strategieberater habe ich
          in den letzten Jahren umfassende Erfahrungen gesammelt: vom Aufbau und
          Führen motivierter Teams über das erfolgreiche Pitchen von Ideen bis
          hin zur Umsetzung skalierbarer Lösungen. Dieses Wissen gebe ich heute
          weiter – an Menschen, Teams und Unternehmen, die Orientierung suchen,
          Herausforderungen bewältigen oder ihre Ziele schneller erreichen
          wollen.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
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
          Es begeistert mich immer wieder, Menschen und Unternehmen dabei zu
          unterstützen, das Beste aus sich herauszuholen – motiviert, effizient
          und mit klarem Fokus auf die Zukunft. Wenn Du Dich angesprochen
          fühlst, lass uns gemeinsam herausfinden, wie ich Dich oder Dein Team
          unterstützen kann. Geträu meinem Motto: "The&nbsp;answer to how is
          yes!"
        </p>
      </Container>
    </section>
  )
}
