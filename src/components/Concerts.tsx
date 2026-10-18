import { siteData } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Concerts() {
  return (
    <section id="conciertos" className="bg-white px-6 py-24 lg:px-[7vw]">
      <SectionHeading eyebrow="Presentaciones & contrataciones" title="Música para Cada Ocasión" description="Bodas, celebraciones, conciertos y encuentros especiales. Cada presentación se adapta al momento que deseas vivir." />
      <Reveal className="mx-auto max-w-7xl border-t border-line">
        {siteData.events.map((event) => (
          <article key={event.number} className="grid grid-cols-[70px_1fr] items-center gap-x-4 gap-y-3 border-b border-line py-6 transition hover:bg-warm/70 sm:grid-cols-[70px_110px_1fr_160px_115px] sm:px-4">
            <div className="text-center">
              <strong className="block font-serif text-3xl font-medium text-gold-dark">{event.number}</strong>
            </div>
            <div className="hidden text-[9px] font-semibold uppercase tracking-[0.06em] text-gold-dark sm:block">{event.category}</div>
            <div>
              <h3 className="font-serif text-xl font-medium text-ink">{event.title}</h3>
              <p className="mt-1 text-[10px] leading-5 text-muted">{event.place}</p>
            </div>
            <div className="col-start-2 text-[10px] text-muted sm:col-start-auto">♫ {event.time}</div>
            <a href="#contacto" className="col-start-2 inline-flex w-fit border border-gold bg-gold px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.06em] text-ink transition hover:bg-transparent sm:col-start-auto sm:justify-self-end">{event.action}</a>
          </article>
        ))}
      </Reveal>
    </section>
  )
}
