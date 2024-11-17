import Image from 'next/image'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/profile.jpg'
import { CheckIcon } from '@/components/CheckIcon'
import { ContactLinks } from '@/components/ContactLinks'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              Kontakt
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-teal-700">Paul K. Lunow –</span>
              Head of Technology at XU Group GmbH.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Ich freue mich, von Dir zu hören! Auf dieser Seite habe ich
              zusammengefasst, was mich antreibt, inspiriert und ausmacht. Wenn
              Du Fragen hast oder den Austausch suchst, erreichst Du mich per
              E-Mail oder über meine sozialen Kanäle. Hier sind ein paar gute
              Gründe, warum Du mir schreiben könntest:
            </p>
            <ul role="list" className="mt-8 space-y-3">
              {[
                '<span class="font-semibold">Du hast eine neue Start-up- oder Projektidee</span> und suchst einen Sparringspartner für die Umsetzung.',
                '<span class="font-semibold">Dein Team braucht Unterstützung,</span> um Projekte effizient voranzutreiben.',
                '<span class="font-semibold">Du möchtest ein signiertes Exemplar meines Buchs</span> oder ein Interview mit mir führen.',
                '<span class="font-semibold">Für Deine Veranstaltung suchst Du einen Speaker</span> oder Workshop-Leiter.',
                '<span class="font-semibold">Du hast Feedback</span> zu meiner Arbeit, meiner Website oder möchtest einfach in Kontakt treten.',
              ].map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon className="h-8 w-8 flex-none fill-teal-800" />
                  <span
                    className="ml-4"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  ></span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              <span className="font-bold">Impressum:</span> Auf dieser Seite
              werden keine personenbezogenen Daten gespeichert – deshalb
              musstest Du auch kein nerviges Cookie-Banner wegklicken. Diese
              Seite dient ausschließlich dazu, mich und meine Arbeit
              vorzustellen. Gemäß Telemediengesetz stehe ich als verantwortliche
              Person für den Inhalt dieser Website ein.
            </p>
            <ContactLinks></ContactLinks>
          </div>
        </div>
      </div>
    </section>
  )
}
