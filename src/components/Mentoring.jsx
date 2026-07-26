import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const tints = ['sage', 'stone', 'clay']

export function Mentoring({ translations }) {
  return (
    <section
      id="mentoring"
      aria-labelledby="mentoring-title"
      className="scroll-mt-6 py-16 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="mentoring-title">
          {translations.title}
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-light tracking-tight text-slate-900">
          {translations.heading}
        </p>
        <p className="mt-4 text-lg font-light tracking-tight text-slate-700">
          {translations.description}
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {translations.resources.map((resource, index) => (
            <li key={resource.title}>
              <BentoCard tint={tints[index % tints.length]} className="h-full p-8">
                <div className="text-3xl">{resource.emoji}</div>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm font-light text-slate-600">
                  {resource.description}
                </p>
              </BentoCard>
            </li>
          ))}
        </ol>
        <ol role="list" className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {translations.activities.map((activity, index) => (
            <li key={activity.title}>
              <BentoCard
                tint={tints[(index + 1) % tints.length]}
                className="h-full p-8"
              >
                <div className="text-3xl">{activity.emoji}</div>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-slate-900">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm font-light text-slate-600">
                  {activity.description}
                </p>
              </BentoCard>
            </li>
          ))}
        </ol>
      </Container>
      <Container>
        <p className="pt-16 font-light tracking-tight text-slate-900 md:text-center">
          {translations.cta}
        </p>
      </Container>
    </section>
  )
}
