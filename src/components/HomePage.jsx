import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Work } from '@/components/Work'
import { Mentoring } from '@/components/Mentoring'
import { Podcasts } from '@/components/Podcasts'
import { Welcome } from '@/components/Welcome'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { LocaleProvider } from '@/components/LocaleProvider'
import { getTranslations } from '@/lib/translations'

export function HomePage({ locale }) {
  const t = getTranslations(locale)

  return (
    <LocaleProvider locale={locale}>
      <Welcome translations={t.welcome} />
      <NavBar translations={t.navbar} />
      <Podcasts translations={t.podcasts} />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: t.testimonials.testimonial2.author,
          role: t.testimonials.testimonial2.role,
        }}
        locale={locale}
      >
        <p>
          {t.testimonials.testimonial2.text}
        </p>
      </Testimonial>
      <Work translations={t.work} locale={locale} />
      <Mentoring translations={t.mentoring} />
      <FreeChapters translations={t.freeChapters} />
      <Hero translations={t.hero} preorderTranslations={t.preorder} />
      <Introduction translations={t.introduction} preorderTranslations={t.preorder} />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: t.testimonials.testimonial1.author,
          role: t.testimonials.testimonial1.role,
        }}
        locale={locale}
      >
        <p>
          {t.testimonials.testimonial1.text}
        </p>
      </Testimonial>
      <Testimonials translations={t.testimonials} locale={locale} />
      <Contact translations={t.contact} />
      <Footer />
    </LocaleProvider>
  )
}
