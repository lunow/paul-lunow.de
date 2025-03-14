import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { Preorder } from '@/components/Preorder'

const stats = [
  { id: 1, name: 'Seitenzahl', value: '244' },
  { id: 2, name: 'Sprache', value: 'deutsch' },
  {
    id: 3,
    name: 'Herausgeber',
    value: 'Periplaneta',
    link: 'https://www.periplaneta.com/',
  },
  { id: 4, name: 'Erscheinungstermin', value: '15.01.2025' },
]

export default function Facts() {
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

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Willkommen im modernsten Unternehmen der Welt
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Riaru ist das global erfolgreichste Unternehmen: ein
          Online-Multiplayer-Game, das seinen Usern ermöglicht, in fremde Welten
          einzutauchen, sich selbst zu verwirklichen und sogar das eigene
          Business gewinnbringend zu vermarkten. Die Welt für jeden zu einem
          besseren Ort zu machen, ist das erklärte Ziel von Riaru.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Mic möchte unbedingt an dieser idealistischen Idee mitwirken. Doch
          selbst ein exzellenter Studienabschluss in Softwareentwicklung ist
          unbedeutend, wenn man ihn in einer argentinischen Kleinstadt erworben
          hat. Der Karrieresprung nach Europa scheint aussichtlos. Doch dann
          wird Tuuli, die Gründerin von Riaru, auf Mic aufmerksam. Der Job im
          Berliner Headquarter gleicht einem Traum. Bis Mic erwacht.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Paul K. Lunow, selbst Gründer und Programmierer, gewährt in diesem
          spannenden Cyber-Roman tiefe Einblicke in die Struktur von
          Tech-Konzernen und den Umgang mit Metadaten. Mit seinem umfangreichen
          Hintergrundwissen macht er uns begreiflich, welch komplexe digitalen
          Abläufe in den Systemen hinter unseren Monitoren geschehen.
        </p>

        <Facts></Facts>
        <div className="flex justify-center pt-8 text-center">
          <Preorder learnMore="false"></Preorder>
        </div>
      </Container>
    </section>
  )
}
