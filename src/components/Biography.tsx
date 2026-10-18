import { useEffect, useRef, useState } from 'react'
import { siteData } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function AnimatedStat({ value, prefix, suffix, label }: { value: number; prefix: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [display, setDisplay] = useState(value)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || started) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      setStarted(true)
      const start = performance.now()
      const duration = 900
      const first = value - 36
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(first + (value - first) * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.55 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [started, value])

  return (
    <div ref={ref} className="border-l border-gold/45 pl-3 first:border-l-0 first:pl-0 sm:pl-4">
      <strong className="block font-serif text-2xl font-medium text-gold-dark sm:text-3xl">{prefix}{display}{suffix}</strong>
      <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.08em] text-muted">{label}</span>
    </div>
  )
}

export function Biography() {
  return (
    <>
      <section id="biografia" className="bg-white px-6 pb-6 pt-24 lg:px-[7vw]">
        <SectionHeading eyebrow="Trayectoria & pasión" title="Mi Historia" description="De El Pao, Cojedes, a los escenarios del mundo: una vida contada a través de las cuerdas del arpa." />
      </section>

      <section className="grid grid-cols-1 items-center gap-12 bg-white px-6 pb-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-[8vw]">
        <Reveal>
          <div className="relative mx-auto max-w-md before:absolute before:-left-4 before:-top-4 before:h-full before:w-full before:border before:border-gold/45">
            <img src="/assets/images/tony-alvarado-retrato-estudio.webp" alt="Tony Alvarado junto a su arpa en un retrato de estudio" className="relative z-10 aspect-[4/5] w-full object-cover shadow-[0_18px_48px_rgba(31,24,15,0.11)]" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="max-w-2xl">
            {siteData.artist.biography.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-sm leading-8 text-[#5f5a52]">{paragraph}</p>
            ))}
            <p className="mb-8 border-l-2 border-gold pl-4 font-serif text-xl italic leading-7 text-gold-dark">“{siteData.artist.quote}”</p>
            <div className="grid grid-cols-3 gap-3 border-t border-line pt-7 sm:gap-5">
              {siteData.stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
            </div>
            <a href="#trayectoria" className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-gold-dark transition hover:gap-4">Conocer mi trayectoria <span aria-hidden="true">↓</span></a>
          </div>
        </Reveal>
      </section>

      <section id="trayectoria" className="bg-warm px-6 py-24 lg:px-[8vw]">
        <SectionHeading eyebrow="Una vida junto al arpa" title="Historias que Llevo Conmigo" description="La música me ha permitido aprender, enseñar, viajar y llevar las raíces de Venezuela a cada nuevo encuentro." />
        <div className="mx-auto max-w-6xl border-t border-line">
          {siteData.story.map((chapter, index) => (
            <Reveal key={chapter.title} delay={Math.min(index, 2) * 60}>
              <article className="grid gap-5 border-b border-line py-9 md:grid-cols-[200px_1fr] md:gap-14 md:py-12">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-px w-7 shrink-0 bg-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-dark">{chapter.period}</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">{chapter.title}</h3>
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-5 max-w-3xl text-[13px] leading-8 text-[#5f5a52]">{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
