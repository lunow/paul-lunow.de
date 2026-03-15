'use client'

import { useEffect, useState } from 'react'
import { GridPattern } from '@/components/GridPattern'
import { useLocale } from '@/components/LocaleProvider'

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  const locale = useLocale()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const rights = locale === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'

  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {year} Paul K. Lunow</p>
        <p>{rights}</p>
      </div>
    </footer>
  )
}
