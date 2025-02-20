'use client'

import { useEffect, useState } from 'react'
import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {year} Paul K. Lunow</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
