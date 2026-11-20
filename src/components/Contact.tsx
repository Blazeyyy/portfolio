import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Section } from './Section'

const linkClass =
  'flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3.5 text-sm transition-colors hover:border-teal/50'

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk data engineering">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-3xl p-7 sm:p-12"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-[90px]"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              I'm open to Data Engineer, Azure Data Engineer and Cloud Data Engineer roles.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              If your team is building or running Azure data platforms and needs an engineer who can keep Spark pipelines
              reliable, I'd be glad to hear from you.
            </p>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </div>

          <ul className="space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <Mail size={18} className="text-teal" aria-hidden="true" />
                <span className="break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <LinkedinIcon className="h-4.5 w-4.5 text-teal" />
                linkedin.com/in/adith-krishna
              </a>
            </li>
            {profile.github && (
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <GithubIcon className="h-4.5 w-4.5 text-teal" />
                  {profile.github.replace(/^https?:\/\//, '')}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3.5 text-sm">
              <MapPin size={18} className="text-teal" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
