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

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function Welcome() {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="welcome-title">
          Herzlich Willkommen
        </SectionHeading>

        <p className="mt-8 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Hi, ich bin Paul. Und Du bist auf meiner persönlichen Webseite
          gelandet.
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
                  Schon als Kind hatte ich den Traum, Schriftsteller zu werden.
                </span>{' '}
                Dieser Wunsch hat mich dazu inspiriert, ein Literaturportal zu
                programmieren – ein Ort, an dem ich und meine Freund:innen
                während der Schulzeit unsere Ideen und Gedanken teilen konnten.
                Aus diesem Traum wurde eine Reise: 20 Jahre in der Tech-Branche,
                in denen ich in nahezu jeder vorstellbaren Rolle rund um
                Technologie tätig war. Nun wird mein Kindheitstraum wahr: Im
                Januar 2025 erscheint mein erster Roman, Riaru.
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                <span className="font-semibold">
                  Heute lebe ich an der Schnittstelle von Technologie, Führung
                  und Kreativität.
                </span>{' '}
                Als Head of Technology bei der XU Gruppe in Berlin unterstütze
                ich Unternehmen dabei, innovative digitale Lösungen zu
                entwickeln und umzusetzen. Mit meinem Podcast teile ich mein
                Wissen über Tech-Produkte und Leadership. Zudem begleite ich als
                Mentor und Berater Teams und Unternehmen, die Orientierung in
                der digitalen Welt suchen.
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                Diese Website spiegelt alle Facetten meiner Arbeit und
                Leidenschaft wider. Egal, ob Du mein Buch vorbestellen möchtest,
                nach inspirierenden Podcast-Folgen suchst oder auf der Suche
                nach einem Sparringspartner für Deine digitalen
                Herausforderungen bist – ich freue mich auf Deine Nachricht und
                Dein Feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-8 bg-slate-50 py-12 sm:rounded-6xl">
          <p className="px-8 tracking-tight text-slate-900 md:text-center">
            <span className="font-semibold">Lass uns ins Gespräch kommen!</span>{' '}
            Folge mir auf LinkedIn oder Instagram, oder schreib mir eine
            Nachricht – ich freue mich, von Dir zu hören.
          </p>
          <ContactLinks></ContactLinks>
        </div>
      </Container>
    </section>
  )
}
