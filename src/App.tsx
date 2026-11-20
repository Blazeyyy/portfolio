import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ExperienceSection } from './components/Experience'
import { ProjectsSection } from './components/Projects'
import { SkillsSection } from './components/Skills'
import { ExpertiseSection } from './components/Expertise'
import { EducationSection } from './components/Education'
import { ContactSection } from './components/Contact'
import { profile } from './data/content'

export default function App() {
  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ExpertiseSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </>
  )
}
