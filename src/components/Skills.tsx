import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { Icon } from '../lib/icons'
import { Badge, Section } from './Section'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="The stack I work with"
      intro="Grouped as they appear on my resume. Nothing here is listed without hands-on use."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -3 }}
            className="glass rounded-2xl p-6 transition-colors hover:border-teal/30"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-panel-2 text-teal ring-1 ring-line">
                <Icon name={g.icon} className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
