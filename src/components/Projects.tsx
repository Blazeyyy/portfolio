import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { projects, type Project } from '../data/content'
import { Badge, Section } from './Section'

function Architecture({ steps }: { steps: Project['architecture'] }) {
  return (
    <div
      className="flex flex-col items-stretch gap-2 rounded-xl border border-line bg-ink/60 p-4 sm:flex-row sm:items-center"
      role="img"
      aria-label={`Architecture: ${steps.map((s) => s.label).join(' to ')}`}
    >
      {steps.map((s, i) => (
        <div key={s.label} className="flex flex-1 flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-lg border border-line bg-panel-2 px-3 py-2.5">
            <p className="font-mono text-xs text-fg">{s.label}</p>
            {s.sub && <p className="mt-0.5 text-[11px] text-muted">{s.sub}</p>}
          </div>
          {i < steps.length - 1 && (
            <svg viewBox="0 0 40 12" className="mx-auto h-3 w-10 shrink-0 rotate-90 sm:rotate-0" aria-hidden="true">
              <line x1="0" y1="6" x2="34" y2="6" stroke="#5eead4" strokeWidth="1.5" className="flow-line" />
              <path d="M30 2 L38 6 L30 10" fill="none" stroke="#818cf8" strokeWidth="1.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-teal">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const panelId = `project-${p.id}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className="glass rounded-2xl transition-colors hover:border-teal/30"
    >
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs text-teal">
          {p.client} · {p.tag}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{p.problem}</p>

        <div className="mt-6">
          <Architecture steps={p.architecture} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-teal"
        >
          <ChevronRight size={16} className={`transition-transform ${open ? 'rotate-90' : ''}`} aria-hidden="true" />
          {open ? 'Hide case study details' : 'Read case study details'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 border-t border-line p-6 sm:p-8 md:grid-cols-2">
              <Block title="My contribution">
                <List items={p.contribution} />
              </Block>
              <Block title="Engineering challenges">
                <List items={p.challenges} />
              </Block>
              <div className="md:col-span-2">
                <Block title="Outcome">
                  <p>{p.outcome}</p>
                </Block>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Engineering case studies"
      intro="Real client platforms I have worked on. Contributions are described as they appear on my resume."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
