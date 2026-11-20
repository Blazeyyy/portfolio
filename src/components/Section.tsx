import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mb-12 max-w-2xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
      </motion.header>
      {children}
    </section>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-panel-2 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-teal/40 hover:text-fg">
      {children}
    </span>
  )
}
