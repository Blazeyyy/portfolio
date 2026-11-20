import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { heroStats, heroTech, profile } from '../data/content'
import { Badge } from './Section'
import { PipelineVisual } from './PipelineVisual'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-105 w-175 -translate-x-1/2 rounded-full bg-indigo/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
        <div>
          <motion.p {...fade(0)} className="flex items-center gap-2 font-mono text-xs text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Data Engineer · LTIMindtree
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="mt-2 block text-gradient text-3xl sm:text-4xl lg:text-5xl">Azure Data Engineer</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-fg/90">
            {profile.summary}
          </motion.p>
          <motion.p {...fade(0.22)} className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-6 flex flex-wrap gap-2">
            {heroTech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </motion.div>

          <motion.div {...fade(0.34)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} aria-hidden="true" /> View Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 text-sm font-medium transition-colors hover:border-teal/50"
            >
              Explore Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-teal/50 hover:text-fg"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-teal/50 hover:text-fg"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
            )}
          </motion.div>

          <motion.p {...fade(0.4)} className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} aria-hidden="true" /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="glass rounded-2xl p-4 sm:p-6"
        >
          <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-muted">
            <span>pipeline.overview</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal pulse-node" aria-hidden="true" /> running
            </span>
          </div>
          <div className="aspect-9/5">
            <PipelineVisual />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <motion.dl
          {...fade(0.5)}
          className="grid grid-cols-2 divide-line overflow-hidden rounded-2xl border border-line bg-panel/60 sm:grid-cols-4 sm:divide-x"
        >
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col p-5 ${i % 2 === 0 ? 'border-r border-line sm:border-r-0' : ''} ${
                i > 1 ? 'border-t border-line sm:border-t-0' : ''
              }`}
            >
              <dt className="order-2 mt-1 text-xs leading-snug text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
