import { useEffect, useRef, useState } from 'react'
import { HeroMusic } from './HeroMusic'
import { CircularSoundVisualizer } from './CircularSoundVisualizer'
import { Reveal } from './Reveal'
import { siteData } from '../data/site'
import { SocialIcon } from './SocialIcon'

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const photoRef = useRef<HTMLDivElement | null>(null)
  const orbitRef = useRef<HTMLDivElement | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer:fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      if (photoRef.current) photoRef.current.style.transform = `translate(${x * 7}px, ${y * 7}px)`
      if (orbitRef.current) orbitRef.current.style.transform = `translate(${x * -9}px, ${y * -9}px)`
    }

    const onLeave = () => {
      if (photoRef.current) photoRef.current.style.transform = ''
      if (orbitRef.current) orbitRef.current.style.transform = ''
    }

    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    return () => {
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section ref={heroRef} id="inicio" className="relative grid min-h-screen grid-cols-1 items-center overflow-hidden bg-cream px-6 pb-24 pt-32 lg:grid-cols-[1.08fr_.92fr] lg:px-[7vw] lg:pb-16 lg:pt-[110px]">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-[#ead9a1]/18 blur-3xl" />

      <Reveal className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-gold-dark">Arpista · productor · docente venezolano</p>
        <img src="/assets/images/logo-tony-alvarado.png" alt="Tony Alvarado" className="mx-auto mt-5 h-24 w-[290px] object-contain object-center lg:mx-0 lg:object-left" />
        <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.7rem,5.3vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-ink">
          {siteData.artist.tagline}
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-muted lg:mx-0">
          {siteData.artist.shortDescription}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href={siteData.music.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex min-w-48 items-center justify-center gap-2 border border-gold bg-gold px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-200 hover:border-[#dfba54] hover:bg-[#dfba54] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark">
            <SocialIcon name="spotify" className="h-4 w-4" /> Escuchar mi música ↗
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center border border-gold px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-gold-dark transition hover:bg-gold hover:text-ink">
            Consultar contratación
          </a>
        </div>
        <p className="mt-4 text-[10px] leading-5 text-muted">De Venezuela a Miami, llevando nuestras raíces a cada escenario.</p>
      </Reveal>

      <Reveal delay={120} className="relative mt-14 min-h-[350px] lg:mt-0 lg:min-h-[640px]">
        <div className="hero-harp-stage absolute left-1/2 top-1/2 aspect-square w-[min(94vw,580px)] -translate-x-1/2 -translate-y-1/2">
          <div className={`hero-harp-halo ${musicPlaying ? 'is-playing' : ''}`} aria-hidden="true" />
          <div ref={orbitRef} className="pointer-events-none absolute inset-[1.5%] rounded-full border border-gold/40 transition-transform duration-500 ease-out" />
          <CircularSoundVisualizer playing={musicPlaying} />
          <div className="pointer-events-none absolute inset-[8.8%] rounded-full bg-gold/10 blur-2xl" />
          <div ref={photoRef} className="pointer-events-none absolute inset-[9.2%] overflow-hidden rounded-full border-[5px] border-gold bg-white shadow-[0_28px_90px_rgba(67,49,18,0.16)] transition-transform duration-500 ease-out">
            <img src="/assets/images/Tony_Alvarado_Hero_Arpa_Azul.webp" alt="Tony Alvarado junto a su arpa azul en estudio" className="h-full w-full object-cover object-[52%_35%]" />
          </div>
          <HeroMusic heroRef={heroRef} onPlaybackChange={setMusicPlaying} />
        </div>
      </Reveal>

      <a href="#biografia" aria-label="Bajar a biografía" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-muted lg:flex">
        Descubrir
        <span className="h-12 w-px animate-scroll-line bg-gold/70" />
      </a>
    </section>
  )
}
