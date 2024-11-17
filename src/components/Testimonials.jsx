import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Vielen Dank auch nochmal für deinen Impuls. Dieser war wirklich sehr gelungen – wir konnten einiges daraus mitnehmen.',
      author: {
        name: 'Antonio',
        role: 'Vorstand',
        image: avatarImage3,
      },
    },
    {
      content:
        'Bleib in den Vorträgen so ehrlich, was auch nicht funktioniert – das kam sehr gut an!',
      author: {
        name: 'Julius',
        role: 'Sprecher des Vorstands',
        image: avatarImage4,
      },
    },
    {
      content:
        'Man I swear I like you so much and thank you for getting back to me, this means a lot for me',
      author: {
        name: 'Mohammad',
        role: 'Senior Full Stack Engineer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Wir sprechen noch oft von dir und sind dir sehr dankbar, was du uns alles aufgebaut hast. Ohne dich wären wir nie so weit gekommen. Komm bald mal wieder bei uns vorbei!',
      author: {
        name: 'Ulla',
        role: 'Corporate Communications',
        image: avatarImage11,
      },
    },
    {
      content:
        'Jedes Team kann super happy sein Dich und Deine nice, neugierige Energie an Bord zu haben.',
      author: {
        name: 'Katharina',
        role: 'HR Manager',
        image: avatarImage8,
      },
    },
    {
      content:
        'Merke immer wieder wie sehr es mir Spaß macht mit dir zusammenzuarbeiten. Pragmatisch, schnell, auf Augenhöhe.',
      author: {
        name: 'Luisa',
        role: 'Head of Marketing',
        image: avatarImage5,
      },
    },
  ],
  [
    {
      content:
        'Ich finde deine Ideen sehr spannend, ein bisschen unkonventionell und sehr inspirierend und zukunftsorientiert.',
      author: {
        name: 'Eva',
        role: 'Head of Agile Transformation',
        image: avatarImage10,
      },
    },
    {
      content:
        'Mit was für einer Ruhe und Leichtigkeit du die Fragen stellst. Und wirklich gute Fragen - das ist eine Kunst.',
      author: {
        name: 'Miriam',
        role: 'Founder',
        image: avatarImage6,
      },
    },
    {
      content:
        'Building a new team consisting of externals and internals from multiple teams is rather challenging. He managed to bring all of us together around the same goal, which I find very impressive in such a short time.',
      author: {
        name: 'Ghonche',
        role: 'Lead Product Manager',
        image: avatarImage7,
      },
    },
    {
      content:
        'Es ist toll jemandem wie dich mit Unternehmergeist sowie echtem Drive für unsere Kunden UND unsere Umwelt UND unsere Teams an Board zu haben!',
      author: {
        name: 'Patricia',
        role: 'CEO',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
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
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
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

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Nette Worte aus meinem Umfeld...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Ich bin so glücklich über die vielen tollen Menschen aus der ganzen
          Welt mit denen ich zusammenarbeiten durfte und darf. Hier sind einige
          Zitate, leicht gekürzt und anonymisiert. Ich danke euch allen!
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
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
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
