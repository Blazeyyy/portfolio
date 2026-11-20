import { motion } from 'framer-motion'
import { experience } from '../data/content'
import { Badge, Section } from './Section'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Production data engineering for enterprise clients"
      intro="Two client engagements at LTIMindtree, from May 2024 to present: operating a Spark-on-Kubernetes revenue platform for Lufthansa Group and building Azure ETL/ELT analytics for Microsoft Learn."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, idx) => (
          <motion.li
            key={job.project}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="relative"
          >
            <span
              className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-teal ring-4 ring-ink sm:-left-[47px]"
              aria-hidden="true"
            />
            <article className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-teal">{job.client}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{job.project}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {job.role} · {job.company}
                  </p>
                </div>
                <p className="rounded-full border border-line bg-panel-2 px-3 py-1 font-mono text-xs text-muted">
                  {job.period}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted">{job.context}</p>

              <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.stack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <ul className="mt-6 space-y-4">
                {job.bullets.map((b) => (
                  <li key={b.lead} className="grid gap-1 text-sm leading-relaxed sm:grid-cols-[170px_1fr] sm:gap-4">
                    <span className="font-medium text-fg">{b.lead}</span>
                    <span className="text-muted">{b.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
