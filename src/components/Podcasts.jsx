'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Parser from 'rss-parser'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'
import podcastCover from '@/images/product-and-cake.png'
import { Button } from './Button'

const videos = [
  {
    title: 'S03E06 - Why It’s Crucial to Focus on Needs, Not Demographics',
    description:
      'In this episode of Product and Cake, Ghonche Tavoosi and Paul Lunow delve into the fundamentals of identifying your target market and why it’s critical to focus on the customer’s needs rather than demographic details.',
    image: podcastCover,
    runtime: { minutes: 21, seconds: 8 },
  },
  {
    title: 'S03E05 - The Ultimate Toolkit for Product Managers',
    description:
      'They explore their favorite tools for task management, collaboration, and product design, offering insights on how each can enhance your workflow.',
    image: podcastCover,
    runtime: { minutes: 27, seconds: 26 },
  },
  {
    title: 'S03E04 - Navigating the Product Life Cycle',
    description:
      'Whether you’re just starting with an idea, transitioning to an MVP, or managing a mature product, this episode will guide you through each stage. ',
    image: podcastCover,
    runtime: { minutes: 35, seconds: 50 },
  },
  {
    title: 'S03E03 - Do You Really Need a Product Manager?',
    description:
      'Whether you’re building a startup or managing a growing business, this episode explores when the product management role becomes essential and why it can make or break your company’s success.',
    image: podcastCover,
    runtime: { minutes: 21, seconds: 50 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

function PauseIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <rect x="6" y="5" width="1" height="6" />
      <rect x="9" y="5" width="1" height="6" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

function LoadingIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <circle
        className="path"
        cx="8"
        cy="8"
        r="6"
        fill="none"
        strokeWidth="2"
        strokeDasharray="37.69911184307752" // Circumference of the circle (2 * π * r)
        strokeDashoffset="5" // Adjust this value to create the gap
      />
      <style jsx>{`
        @keyframes spin {
          0% {
            stroke-dashoffset: 28.274333882308138;
          }
          100% {
            stroke-dashoffset: 90;
          }
        }
        .path {
          stroke: currentColor;
          stroke-linecap: round;
          animation: spin 2s linear infinite;
        }
      `}</style>
    </svg>
  )
}

const parser = new Parser()

const fetchLatestEpisodes = async () => {
  const feed = await parser.parseURL('https://podcast-feed.paul-lunow.de/')

  return feed.items
    .slice(-4)
    .reverse()
    .map((item) => ({
      title: item.title,
      description: item.contentSnippet,
      image: item.itunes.image,
      runtime: parseDuration(item.itunes.duration),
      link: item.enclosure.url,
      season: item.itunes.season,
      episode: item.itunes.episode,
    }))
}

const parseDuration = (duration) => {
  const parts = duration.split(':')
  return {
    minutes: parseInt(parts[0], 10),
    seconds: parseInt(parts[1], 10),
  }
}

export function Podcasts() {
  const [episodes, setEpisodes] = useState([])
  const [isPlaying, setIsPlaying] = useState(-1)
  const [isLoading, setIsLoading] = useState(-1)
  const [currentTime, setCurrentTime] = useState({ minutes: 0, seconds: 0 })
  const audioRef = useRef(null)

  useEffect(() => {
    const getEpisodes = async () => {
      const latestEpisodes = await fetchLatestEpisodes()
      setEpisodes(latestEpisodes)
    }

    getEpisodes()
  }, [])

  useEffect(() => {
    const handleLoadedData = () => {
      setIsLoading(-1)
    }

    const handleTimeUpdate = () => {
      const audioElement = audioRef.current
      if (audioElement) {
        const currentMinutes = Math.floor(audioElement.currentTime / 60)
        const currentSeconds = Math.floor(audioElement.currentTime % 60)
        setCurrentTime({ minutes: currentMinutes, seconds: currentSeconds })
      }
    }

    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.addEventListener('loadeddata', handleLoadedData)
      audioElement.addEventListener('timeupdate', handleTimeUpdate)
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('loadeddata', handleLoadedData)
        audioElement.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [])

  const handlePlayAudio = (i, link) => {
    setIsLoading(i)
    if (audioRef.current) {
      if (audioRef.current.src !== link) {
        audioRef.current.src = link
        audioRef.current.play()
        setIsPlaying(i)
      } else {
        if (audioRef.current.paused) {
          audioRef.current.play()
          setIsPlaying(i)
        } else {
          audioRef.current.pause()
          setIsPlaying(-1)
        }
        setIsLoading(-1)
      }
    }
  }

  const showTime = (runtime, currentTime) => {
    const totalRuntimeInSeconds = runtime.minutes * 60 + runtime.seconds
    const currentTimeInSeconds = currentTime.minutes * 60 + currentTime.seconds
    const remainingTimeInSeconds = totalRuntimeInSeconds - currentTimeInSeconds

    const remainingMinutes = Math.floor(remainingTimeInSeconds / 60)
    const remainingSeconds = remainingTimeInSeconds % 60

    return `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <section
      id="podcasts"
      aria-labelledby="podcasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="podcasts-title">
          Podcast
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Product&amp;Cake Podcast ist der perfekte Begleiter in der wilden
          Product-Tech-Welt.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Ghonche und ich haben uns bei mobile.de im Podcast Studio getroffen.
          Wir hatten einen Kuchen dabei, und niemand brauchte gerade das Studio,
          also haben wir aus Spaß einen Podcast aufgenommen. Das Feedback im
          internen Chat war überwältigend. Genau so wie der Spaß den wir bei der
          Aufnahme hatten. Also haben wir weiter gemacht!
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {episodes.map((video, index) => (
            <li
              key={video.title}
              className="cursor-pointer [counter-increment:video]"
              onClick={() => handlePlayAudio(index, video.link)}
            >
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image
                    src={podcastCover}
                    width="200"
                    height="200"
                    alt=""
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  {isLoading === index ? (
                    <LoadingIcon className="h-4 w-4 fill-current stroke-current" />
                  ) : isPlaying === index ? (
                    <PauseIcon className="h-4 w-4 fill-current stroke-current" />
                  ) : (
                    <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  )}

                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {isPlaying === index
                      ? showTime(video.runtime, currentTime)
                      : `${video.runtime.minutes}:${video.runtime.seconds
                          .toString()
                          .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-8 line-clamp-2 text-base font-medium leading-tight tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500">
                {video.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                {video.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
      <audio ref={audioRef} controls className="hidden" />

      <Container>
        <p className="mt-4 pt-10 text-center text-lg tracking-tight text-slate-700">
          Subscribe on your favorite podcast platform to get the latest
          episodes.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button
            as="a"
            href="https://podcastle.ai/show/product-and-cake-9408"
            target="_blank"
            variant="solid"
            color="blue"
          >
            Website
          </Button>

          <Button
            as="a"
            href="https://podcasts.apple.com/gb/podcast/product-and-cake/id1651982219"
            target="_blank"
            variant="outline"
          >
            Apple
          </Button>

          <Button
            as="a"
            href="https://open.spotify.com/show/6GWmx7OdEn04inrQjp3Bif"
            target="_blank"
            variant="outline"
          >
            Spotify
          </Button>
        </div>
      </Container>
    </section>
  )
}
