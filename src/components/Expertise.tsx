import { motion } from 'framer-motion'
import { expertise } from '../data/content'
import { Icon } from '../lib/icons'
import { Section } from './Section'

export function ExpertiseSection() {
  return (
    <Section
      id="expertise"
      eyebrow="Engineering expertise"
      title="How I think about data systems"
      intro="Each area is tied to the work where I applied it, so you can see where the experience comes from."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {expertise.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.07 }}
            className="group rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-indigo/40"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-panel-2 text-indigo ring-1 ring-line transition-colors group-hover:text-teal">
                <Icon name={e.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
                <p className="mt-3 border-l-2 border-teal/40 pl-3 font-mono text-[11px] leading-relaxed text-muted">
                  {e.evidence}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
