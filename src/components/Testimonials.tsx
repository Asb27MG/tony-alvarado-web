import { siteData } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Se preserva el diseño de las tarjetas; se muestran hitos reales en vez de testimonios inventados. */
export function Testimonials() {
  return (
    <section id="reconocimientos" className="bg-warm px-6 py-24 lg:px-[7vw]">
      <SectionHeading eyebrow="Premios & distinciones" title="Reconocimientos en el Camino" description="Cada reconocimiento representa años de escenarios, aprendizajes y música compartida." />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {siteData.highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 110}>
            <article className="flex min-h-[270px] h-full flex-col border border-[#e4d8c4] bg-white p-8">
              <span className="font-serif text-5xl leading-none text-gold">✦</span>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-8 text-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-muted">{item.description}</p>
              <footer className="mt-6 border-t border-line pt-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-gold-dark">{item.year}</footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
