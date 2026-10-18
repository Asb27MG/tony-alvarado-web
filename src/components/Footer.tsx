import { siteData } from '../data/site'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-10 border-t border-line bg-cream px-6 pb-7 pt-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_.65fr_.8fr_1fr] lg:px-[7vw]">
      <div>
        <img src="/assets/images/logo-tony-alvarado.png" alt="Tony Alvarado" className="h-16 w-48 object-contain object-left" />
        <p className="mt-3 max-w-sm text-[10px] leading-5 text-muted">Arpista, arreglista, productor y docente venezolano. Desde Miami, compartiendo las raíces del llano con el mundo.</p>
      </div>

      <FooterColumn title="Secciones" links={[["Presentación", "#inicio"], ["Mi historia", "#biografia"], ["Repertorio", "#repertorio"], ["Eventos", "#conciertos"], ["Reconocimientos", "#reconocimientos"]]} />
      <div>
        <h3 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.1em] text-gold-dark">Escúchame y acompáñame</h3>
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-1">
          {siteData.socials.map((social) => (
            <a key={`${social.label}-${social.href}`} href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[10px] leading-5 text-muted transition hover:text-gold-dark" aria-label={`Visitar ${social.label} de Tony Alvarado`}>
              <SocialIcon name={social.icon} className="h-4 w-4 shrink-0 object-contain" />
              <span>{social.label} <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.1em] text-gold-dark">Hablemos de tu evento</h3>
        <p className="mb-4 text-[10px] leading-6 text-muted">Cada ocasión merece una música especial. Contame qué estás imaginando.</p>
        <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex border border-gold bg-gold px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:bg-transparent">Escribir por WhatsApp ↗</a>
        <a href={`mailto:${siteData.contact.email}`} className="mt-3 block text-[10px] text-gold-dark hover:underline">{siteData.contact.email}</a>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-3 border-t border-[#dfd6c7] pt-5 text-[9px] text-[#817a70] sm:flex-row">
        <span>© {new Date().getFullYear()} Tony Alvarado. Todos los derechos reservados.</span>
        <a href="#top" className="transition hover:text-ink">Volver arriba ↑</a>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.1em] text-gold-dark">{title}</h3>
      <div className="flex flex-col gap-2">
        {links.map(([label, href]) => <a key={`${label}-${href}`} href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined} className="text-[10px] leading-5 text-muted transition hover:text-gold-dark">{label}{href.startsWith('https:') ? ' ↗' : ''}</a>)}
      </div>
    </div>
  )
}
