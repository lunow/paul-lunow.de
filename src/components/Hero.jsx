import Image from 'next/image'

import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/Cover-riaru-web.jpg'
import backgroundImage from '@/images/background2.jpg'
import { Preorder } from '@/components/Preorder'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-teal-950 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          "Dieses Buch ist spannend und leicht verständlich. Ich liebe es!”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-teal-950 before:content-['—_']">
          Olga
        </strong>
        , technisch weniger versierte Testleserin, Künstlerin
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          {/* <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-teal-950 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40"> */}
          {/* <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 overflow-hidden rounded-br-6xl bg-teal-950 bg-cover bg-center text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40"> */}
          {/* <div
            className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 overflow-hidden rounded-br-6xl bg-teal-950 bg-cover bg-center text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          > */}
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 overflow-hidden rounded-br-6xl bg-black bg-cover bg-center text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="50%"
              y="50%"
              patternTransform="translate(64 32)"
              scale={0.5}
            />
            <div
              className="absolute inset-0 left-0 h-full w-full bg-cover bg-right bg-no-repeat xl:bg-contain"
              style={{
                backgroundImage: `url(${backgroundImage.src})`,
                opacity: 0.5,
              }}
            ></div>
            {/* <p className="ml-4 w-full whitespace-pre-wrap text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              cupiditate atque excepturi iste ducimus ad expedita illum mollitia
              quia fugit enim doloremque, sunt dolorem nihil laboriosam modi
              quis iure ea!
            </p> */}
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Dein Blick hinter die Kulissen
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Riaru ist der Debütroman von Paul&nbsp;K.&nbsp;Lunow und gibt
              einen Einblick in die Welt der Tech-Unternehmen.
            </p>
            <Preorder></Preorder>
          </div>
        </div>
      </div>
    </header>
  )
}
