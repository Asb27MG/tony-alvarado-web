import { useEffect, useState } from 'react'
import type { RepertoireItem } from '../data/site'
import { siteData } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Repertoire() {
  const [selected, setSelected] = useState<RepertoireItem | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="repertorio" className="bg-warm px-6 py-24 lg:px-[7vw]">
      <SectionHeading eyebrow="Expresiones del arpa" title="Un Universo de Cuerdas" description="De nuestras raíces llaneras a nuevas sonoridades, con propuestas musicales para cada ocasión." />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {siteData.repertoire.map((item, index) => (
          <Reveal key={item.id} delay={index * 110}>
            <article className="group flex min-h-[280px] h-full flex-col border border-[#e4d8c4] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_40px_rgba(54,42,20,0.08)]">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f5ecd6] font-serif text-xl text-gold-dark transition group-hover:bg-gold group-hover:text-ink">{item.icon}</div>
              <h3 className="mt-7 font-serif text-2xl font-medium text-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-muted">{item.description}</p>
              <button type="button" onClick={() => setSelected(item)} className="mt-7 inline-flex items-center gap-2 self-start text-[10px] font-semibold uppercase tracking-[0.08em] text-gold-dark transition group-hover:gap-3">
                Conocer propuesta <span>→</span>
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-[#14110d]/85 p-5 backdrop-blur-sm" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null) }}>
          <div role="dialog" aria-modal="true" aria-labelledby="repertoire-title" className="relative w-full max-w-2xl bg-white p-8 shadow-2xl sm:p-12">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line bg-warm text-2xl text-ink" aria-label="Cerrar">×</button>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-dark">Mi propuesta musical</p>
            <h2 id="repertoire-title" className="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">{selected.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{selected.detail}</p>
            <div className="mt-6 grid gap-1">
              {selected.pieces.map((piece) => <span key={piece} className="border-b border-line py-3 font-serif text-xl text-ink">{piece}</span>)}
            </div>
            <a href="#contacto" onClick={() => setSelected(null)} className="mt-8 inline-flex border border-gold bg-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:bg-transparent">Consultar presentación</a>
          </div>
        </div>
      )}
    </section>
  )
}
