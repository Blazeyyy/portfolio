import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/content'
import { Section } from './Section'

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education & certifications" title="Foundations and credentials">
      <div className="grid gap-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <GraduationCap className="h-6 w-6 text-teal" aria-hidden="true" />
          <h3 className="mt-4 font-display text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
          <p className="mt-4 font-mono text-xs text-muted">{education.period}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.07 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <Award className="h-6 w-6 text-indigo" aria-hidden="true" />
          <h3 className="mt-4 font-display text-xl font-semibold">Certifications & training</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start justify-between gap-3 text-sm">
                <span>
                  {c.name}
                  <span className="block text-xs text-muted">{c.issuer}</span>
                </span>
                <span className="shrink-0 rounded-md border border-line bg-panel-2 px-2 py-0.5 font-mono text-[10px] text-muted">
                  {c.kind}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
