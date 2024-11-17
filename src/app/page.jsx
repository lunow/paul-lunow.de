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
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tim, technisch versierter Testleser',
          role: 'Creative Director',
          image: avatarImage1,
        }}
      >
        <p>
          “Typisch Paul: Schnell, präzise, lustig und immer mit wertvollen
          Insights.”
        </p>
      </Testimonial>
      <NavBar />
      <Welcome />
      <Podcasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gabriel',
          role: 'Full Stack Engineer',
          image: avatarImage2,
        }}
      >
        <p>
          “I am listening now your Product & Cake podcast and you really
          practice what you preach, Paul. I find that very honest.”
        </p>
      </Testimonial>
      <Mentoring />
      <FreeChapters />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
