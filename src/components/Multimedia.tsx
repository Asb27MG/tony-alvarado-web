import { siteData } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Multimedia() {
  return (
    <section id="multimedia" className="bg-warm px-6 py-24 lg:px-[7vw]">
      <SectionHeading eyebrow="Discos & audiovisual" title="Escucha mi Arte" description="Producciones como solista, colaboraciones y música para historias que también se cuentan en la pantalla." />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="grid h-full min-h-[360px] grid-cols-1 overflow-hidden border border-[#e4d8c4] bg-white md:grid-cols-[.78fr_1.22fr]">
            <img src="/assets/images/vinilo.webp" alt="Detalle de disco de vinilo" className="h-full max-h-[440px] min-h-64 w-full object-cover md:max-h-none" />
            <div className="flex flex-col justify-center p-7 sm:p-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-dark">Mi música</p>
              <h3 className="mt-3 font-serif text-3xl font-medium text-ink">Producciones musicales</h3>
              <p className="mt-3 text-xs leading-6 text-muted">Mi camino en el estudio, como solista, arpista, arreglista y productor.</p>
              <div className="mt-4 max-h-52 overflow-y-auto border-y border-line py-1 pr-2">
                {siteData.productions.map((production) => (
                  <div key={production.title} className="border-b border-line/60 py-2 last:border-b-0">
                    <b className="block font-serif text-base font-medium leading-5 text-ink">{production.title}</b>
                    <small className="text-[9px] leading-4 text-muted">{production.category}</small>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://open.spotify.com/search/Tony%20Alvarado" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold bg-gold px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-ink transition hover:bg-transparent">♫ Spotify ↗</a>
                <a href="https://music.apple.com/us/search?term=Tony%20Alvarado" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-gold-dark transition hover:bg-gold hover:text-ink">Apple Music ↗</a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="group flex h-full min-h-[430px] flex-col overflow-hidden bg-[#17130f]">
            <a
              href="https://www.youtube.com/watch?v=1YHhIWvxJe4"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex min-h-[285px] flex-1 items-center justify-center overflow-hidden p-5"
              aria-label="Ver Clásicos en Tres Tiempos de Tony Alvarado en YouTube"
            >
              <img
                src="/assets/images/clasicos-en-tres-tiempos.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-30 blur-2xl transition duration-700 group-hover:scale-[1.35]"
              />
              <img
                src="/assets/images/clasicos-en-tres-tiempos.jpg"
                alt="Portada del álbum Clásicos en Tres Tiempos de Tony Alvarado"
                className="relative h-full max-h-[330px] w-full max-w-[330px] object-contain shadow-2xl transition duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute left-1/2 top-1/2 z-10 grid h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-gold-dark shadow-xl transition group-hover:scale-105" aria-hidden="true">▶</span>
            </a>
            <div className="relative z-10 bg-linear-to-t from-black to-[#17130f] px-7 pb-7 pt-5 text-white">
              <span className="block text-[9px] uppercase tracking-[0.12em] text-white/70">Video destacado · Tony Alvarado</span>
              <b className="mt-1 block font-serif text-2xl font-medium">Clásicos en Tres Tiempos</b>
              <p className="mt-2 max-w-xl text-[11px] leading-6 text-white/85">Disfruta esta producción de Tony Alvarado y descubre el sonido de su arpa.</p>
              <a href="https://www.youtube.com/watch?v=1YHhIWvxJe4" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex border-b border-gold pb-1 text-[9px] font-semibold uppercase tracking-[0.09em] text-white transition hover:text-gold">Ver video en YouTube ↗</a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
