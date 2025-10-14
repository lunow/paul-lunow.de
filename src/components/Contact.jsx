import Image from 'next/image'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/profile.jpg'
import { CheckIcon } from '@/components/CheckIcon'
import { ContactLinks } from '@/components/ContactLinks'

export function Contact({ translations }) {
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
              {translations.title}
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-teal-700">{translations.heading}</span>
              {translations.subtitle}
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {translations.description}
            </p>
            <ul role="list" className="mt-8 space-y-3">
              {translations.reasons.map((reason, index) => (
                <li key={index} className="flex">
                  <CheckIcon className="h-8 w-8 flex-none fill-teal-800" />
                  <span
                    className="ml-4"
                    dangerouslySetInnerHTML={{ __html: reason }}
                  ></span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              <span className="font-bold">{translations.impressum}</span> {translations.impressumText}
            </p>
            <ContactLinks></ContactLinks>
          </div>
        </div>
      </div>
    </section>
  )
}
