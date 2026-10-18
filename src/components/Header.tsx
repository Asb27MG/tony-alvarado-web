import { useEffect, useState } from 'react'

const navItems = [
  ['Presentación', '#inicio'],
  ['Mi historia', '#biografia'],
  ['Repertorio', '#repertorio'],
  ['Eventos', '#conciertos'],
  ['Galería', '#galeria'],
  ['Contacto', '#contacto'],
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting)
        if (current) setActive(`#${current.target.id}`)
      },
      { threshold: 0.25, rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 grid h-[78px] grid-cols-[1fr_auto] items-center lg:grid-cols-[190px_1fr_150px] border-b px-7 transition-all duration-300 lg:px-12 ${scrolled ? 'border-line bg-cream/95 shadow-[0_6px_22px_rgba(38,31,22,0.06)] backdrop-blur-xl' : 'border-transparent bg-cream/80 backdrop-blur-md'}`}
    >
      <a href="#inicio" className="block w-[168px]" aria-label="Tony Alvarado - Inicio">
        <img src="/assets/images/logo-tony-alvarado.png" alt="Tony Alvarado" className="h-14 w-full object-contain object-left" />
      </a>

      <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Navegación principal">
        {navItems.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={`relative text-[10px] font-medium uppercase tracking-[0.08em] transition-colors after:absolute after:-bottom-2 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-gold after:transition-all ${active === href ? 'text-ink after:w-full' : 'text-muted after:w-0 hover:text-ink hover:after:w-full'}`}
          >
            {label}
          </a>
        ))}
      </nav>

      <a href="#contacto" className="hidden justify-self-end border border-gold bg-gold px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:bg-transparent lg:inline-flex">
        Contrataciones
      </a>

      <button
        type="button"
        className="relative ml-auto h-11 w-11 lg:hidden"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span className={`absolute left-2 top-[17px] h-px w-7 bg-ink transition ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
        <span className={`absolute left-2 top-[25px] h-px w-7 bg-ink transition ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
      </button>

      <div className={`fixed inset-x-0 top-[78px] z-40 flex h-[calc(100vh-78px)] flex-col items-center justify-center gap-7 bg-cream/98 transition-transform duration-300 lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} className="font-serif text-3xl text-ink" onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contacto" className="mt-3 border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest" onClick={() => setMenuOpen(false)}>
          Contrataciones
        </a>
      </div>
    </header>
  )
}
