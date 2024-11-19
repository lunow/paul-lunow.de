import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({ name, description, price, features, href, featured = false }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-green-700 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        {/* <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500',
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p> */}
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="4" id="work-title">
          Arbeit
        </SectionHeading>
        <p className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Einzigartige Online Wissensplattform zu den Megatrends unsere Zeit
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Bei{' '}
          <a
            href="https://www.xu.de"
            target="_blank"
            className="underline hover:text-teal-700"
          >
            XU sustainable
          </a>{' '}
          darf ich das Tech Team leiten. Wir bauen Weiterbildungsangebote mit
          denen Du Dich und Dein Team auf eine volatile Zukunft vorbereitest.
        </p>
      </Container>
      <div className="mx-auto mt-16 hidden max-w-5xl md:block lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Check the Website"
            description="Schau Dich um und finde heraus ob unser Angebot zu Dir passt."
            price="15"
            href="https://www.xu.de"
            features={[
              'Schlüsselfertige Lösung',
              'Hilfreiche Unterstützung',
              'Use cases',
            ]}
          />
          <Plan
            featured
            name="Talk to sales"
            description="Ich habe wunderbare Sales Kollegen, die mit Dir über Dein Projekt sprechen."
            price="229"
            href="https://xu.de/kontakt/"
            features={[
              'Über 400h Lernmaterial',
              'Alle Megatrends unserer Zeit',
              'Innovative Lernformate',
              'Zugeschnittene Projekte',
              'Signiertes Exemplar meines Buches*',
            ]}
          />
          <p></p>
          <p className="pt-2 text-right text-sm text-gray-500">
            (*OK, das muss ich noch besprechen)
          </p>
        </div>
      </div>
    </section>
  )
}
