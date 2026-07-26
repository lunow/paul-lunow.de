import clsx from 'clsx'

const tints = {
  white: 'bg-white ring-slate-900/5',
  stone: 'bg-stone-100/70 ring-slate-900/5',
  sage: 'bg-teal-50 ring-teal-900/[0.07]',
  clay: 'bg-clay-50 ring-clay-900/[0.07]',
  dark: 'bg-slate-900 text-white ring-white/10',
}

export function BentoCard({ tint = 'white', className, children, ...props }) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[2rem] ring-1',
        tints[tint],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
