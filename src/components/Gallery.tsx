import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type GalleryItem = {
  src: string
  alt: string
  className?: string
  objectPosition?: string
}

/** Fotografías proporcionadas por Tony Alvarado. */
const gallery: GalleryItem[] = [
  {
    src: '/assets/images/Tony_Alvarado_Arpa_Sentado.webp',
    alt: 'Tony Alvarado sentado interpretando el arpa en un escenario',
    className: 'md:row-span-2',
    objectPosition: 'center 38%',
  },
  {
    src: '/assets/images/Tony_Alvarado_Concierto_Arpa_Azul.webp',
    alt: 'Tony Alvarado tocando un arpa azul durante un concierto',
    objectPosition: 'center 31%',
  },
  {
    src: '/assets/images/Tony_Alvarado_Retrato_Arpa.webp',
    alt: 'Retrato de Tony Alvarado junto a las cuerdas de su arpa',
    objectPosition: 'center 28%',
  },
  {
    src: '/assets/images/Tony_Alvarado_Concierto_Teatro.webp',
    alt: 'Presentación musical desde el escenario de un teatro con público',
    className: 'md:col-span-2',
  },
  {
    src: '/assets/images/Tony_Alvarado_Arpa_Estudio.webp',
    alt: 'Tony Alvarado tocando el arpa en una sesión fotográfica',
    objectPosition: 'center 32%',
  },
  {
    src: '/assets/images/Tony_Alvarado_Arpa_En_Vivo.webp',
    alt: 'Tony Alvarado interpretando el arpa durante una actuación en vivo',
    objectPosition: 'center 35%',
  },
  {
    src: '/assets/images/Tony_Alvarado_Retrato_Sonrisa.webp',
    alt: 'Tony Alvarado sonriendo en un retrato',
    objectPosition: 'center 25%',
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="galeria" className="bg-white px-6 py-24 lg:px-[7vw]">
      <SectionHeading
        eyebrow="Momentos & escenarios"
        title="Galería de Tony Alvarado"
        description="Retratos y momentos reales sobre el escenario, siempre acompañado por el sonido del arpa."
      />
      <Reveal className="mx-auto grid max-w-7xl auto-rows-[230px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[280px] md:grid-cols-3">
        {gallery.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`Ampliar fotografía: ${item.alt}`}
            className={`group relative overflow-hidden bg-[#eee] text-left ${item.className ?? ''}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: item.objectPosition ?? 'center' }}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span aria-hidden="true" className="absolute bottom-4 right-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white/90 font-serif text-xl text-gold-dark opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">+</span>
          </button>
        ))}
      </Reveal>

      {selected && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
          onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null) }}
        >
          <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-black/30 text-2xl text-white" aria-label="Cerrar imagen">×</button>
          <img src={selected.src} alt={selected.alt} className="max-h-[86vh] max-w-[94vw] object-contain shadow-2xl" />
        </div>
      )}
    </section>
  )
}
