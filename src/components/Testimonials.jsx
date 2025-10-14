import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
// Avatar images are no longer used - we use emojis instead

// Testimonials are now provided via translations prop

function Testimonial({ author, children, locale = 'en' }) {
  const emojis = [
    '👤',
    '🧑',
    '🧑‍🦱',
    '🧑‍🦳',
    '🧑‍🦰',
    '🧑‍🦲',
    '🧑‍🎓',
    '🧑‍💻',
    '🧑‍🏫',
    '🧑‍🔬',
    '🧑‍🎨',
    '🧑‍⚖️',
    '🧑‍🚀',
    '🧑‍⚕️',
    '🧑‍🍳',
    '🧑‍🌾',
    '🧑‍🎤',
    '🧑‍🔧',
    '🧑‍🏭',
  ]

  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p
          className={clsx(
            'text-lg tracking-tight text-slate-900',
            locale === 'de'
              ? "before:content-['„'] after:content-['“']"
              : "before:content-['“'] after:content-['”']",
            'before:mr-0.5 after:ml-0.5'
          )}
        >
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          {/* <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          /> */}
          <span className="align-center flex h-12 w-12 items-center justify-center text-2xl">
            {getRandomEmoji()}
          </span>
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-none tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials({ translations, locale = 'en' }) {
  const all = translations.allTestimonials
  // Distribute flat array into three columns
  const columns = [[], [], []]
  all.forEach((item, index) => {
    columns[index % 3].push(item)
  })
  
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {translations.title}
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          {translations.description}
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {columns
            .map((column) => column[0])
            .filter(Boolean)
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author} locale={locale}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {columns.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author} locale={locale}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>{translations.readMore}</ExpandableButton>
      </Expandable>
    </section>
  )
}
