'use client'

import { useEffect, useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import clsx from 'clsx'

function MenuIcon(props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function NavBar({ translations }) {
  const sections = translations.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }))

  let [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    function updateActiveIndex() {
      let newActiveIndex = null
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el) => el !== null)
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + 96

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
    <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
      <Popover className="relative">
        {({ open }) => (
          <>
            <PopoverButton
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm ring-1 ring-slate-900/10 backdrop-blur transition hover:bg-white hover:ring-teal-600/20',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60',
              )}
              aria-label="Toggle navigation menu"
            >
              {open ? (
                <CloseIcon className="h-4 w-4 stroke-slate-700" />
              ) : (
                <MenuIcon className="h-4 w-4 stroke-slate-700" />
              )}
            </PopoverButton>
            <PopoverPanel
              transition
              anchor={{ to: 'bottom end', gap: '0.5rem' }}
              className="w-52 rounded-2xl bg-white/95 p-1.5 text-sm shadow-lg ring-1 ring-slate-900/10 backdrop-blur transition duration-150 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0"
            >
              <ol role="list" className="[counter-reset:section]">
                {sections.map((section, sectionIndex) => (
                  <li key={section.id} className="[counter-increment:section]">
                    <PopoverButton
                      as="a"
                      href={`#${section.id}`}
                      className={clsx(
                        'flex items-center rounded-xl px-3 py-2 font-light tracking-tight transition',
                        sectionIndex === activeIndex
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-slate-700 hover:bg-slate-50',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="w-5 font-mono text-xs text-slate-400 before:content-[counter(section,decimal-leading-zero)]"
                      />
                      <span className="ml-2">{section.title}</span>
                    </PopoverButton>
                  </li>
                ))}
              </ol>
              <div className="mt-1.5 flex justify-center border-t border-slate-900/5 pt-1.5">
                <LanguageSwitcher variant="pill" />
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  )
}
