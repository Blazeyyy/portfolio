import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/content'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-teal to-indigo"
        aria-hidden="true"
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-panel-2 font-mono text-xs text-teal ring-1 ring-line">
            AK
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-fg ${
                  active === item.id ? 'text-fg' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="ml-2 rounded-lg bg-fg px-3.5 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      // Scroll explicitly: the menu unmounts mid-navigation, which can cancel the native anchor jump.
                      e.preventDefault()
                      setOpen(false)
                      history.replaceState(null, '', `#${item.id}`)
                      // Wait for the menu's exit animation so the layout is stable before scrolling.
                      window.setTimeout(
                        () => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                        250,
                      )
                    }}
                    className="block rounded-lg px-3 py-3 text-base text-muted hover:bg-panel hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  className="mt-2 block rounded-lg bg-fg px-3 py-3 text-center text-base font-medium text-ink"
                >
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
