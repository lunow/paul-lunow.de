'use client'

import { useEffect, useRef, useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslations } from '@/components/LocaleProvider'
import clsx from 'clsx'

function MenuIcon({ open, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  )
}

function Logo() {
  return (
    <a
      href="#welcome"
      aria-label="Paul Lunow"
      className="flex shrink-0 items-center gap-2.5"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 font-display text-sm font-bold text-white sm:hidden"
      >
        PL
      </span>
      <span className="hidden font-display text-xl font-bold tracking-tight text-slate-900 sm:inline">
        Paul Lunow
      </span>
    </a>
  )
}

export function NavBar({ translations }) {
  const sections = translations.sections.map(section => ({
    id: section.id,
    title: (
      <>
        <span className="hidden lg:inline">{section.title}</span>
        <span className="lg:hidden">{section.titleShort}</span>
      </>
    ),
  }))

  let navBarRef = useRef(null)
  let [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return
      }

      let newActiveIndex = null
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el) => el !== null)
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index
        } else {
          break
        }
      }

      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    let rafId = null
    function onScroll() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        updateActiveIndex()
        rafId = null
      })
    }

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      ref={navBarRef}
      className="fixed inset-x-0 top-0 z-50 bg-white/95 [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur"
    >
      <div className="flex h-12 items-center justify-between px-4 sm:h-14 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 sm:flex">
          {sections.map((section, sectionIndex) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={clsx(
                'px-3 py-1.5 text-sm font-medium underline-offset-4 transition',
                sectionIndex === activeIndex
                  ? 'text-slate-900 underline'
                  : 'text-slate-700 hover:text-slate-900 hover:underline',
              )}
            >
              {section.title}
            </a>
          ))}
          <span aria-hidden="true" className="mx-2 text-slate-300">
            |
          </span>
          <LanguageSwitcher variant="pill" bordered={false} />
        </nav>

        <Popover className="sm:hidden">
          {({ open }) => (
            <>
              <PopoverButton
                className="-mr-1 flex items-center gap-2 py-1.5 pl-2"
                aria-label="Toggle navigation menu"
              >
                <span className="text-sm font-medium text-slate-900">
                  {translations.menuLabel ?? 'Menu'}
                </span>
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700" />
              </PopoverButton>
              <PopoverPanel
                className="absolute inset-x-0 top-full border-t border-slate-200 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur"
              >
                {sections.map((section, sectionIndex) => (
                  <PopoverButton
                    as="a"
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center px-4 py-1.5"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-teal-600"
                    >
                      {(sectionIndex + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="ml-4 text-base font-medium text-slate-900">
                      {section.title}
                    </span>
                  </PopoverButton>
                ))}
                <div className="mt-2 border-t border-slate-200 px-4 pt-2">
                  <LanguageSwitcher variant="pill" bordered={false} />
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>
    </header>
  )
}
