import { useState, type FormEvent, type ReactNode } from 'react'
import { siteData } from '../data/site'
import { Reveal } from './Reveal'

export function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const get = (key: string) => String(data.get(key) ?? '').trim()
    const lines = [
      'Hola, quisiera consultar una presentación con Tony Alvarado.',
      '',
      `Nombre: ${get('nombre')}`,
      `Correo: ${get('email')}`,
      `Tipo de evento: ${get('tipo')}`,
      `Fecha estimada: ${get('fecha') || 'Por coordinar'}`,
      `Detalles: ${get('detalle') || 'A conversar'}`,
    ]
    const url = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    const windowRef = window.open(url, '_blank')
    if (windowRef) {
      windowRef.opener = null
    } else {
      window.location.href = url
    }
    setStatus('Se preparó tu consulta. Confirmá el envío del mensaje en WhatsApp para completar la solicitud.')
  }

  return (
    <section id="contacto" className="grid grid-cols-1 gap-14 bg-white px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-[8vw]">
      <Reveal className="pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-gold-dark">Contrataciones</p>
        <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">Hagamos Música Juntos</h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted">Estoy disponible para bodas, ceremonias, eventos privados y corporativos, conciertos, producciones y colaboraciones especiales. Contame sobre tu idea.</p>

        <div className="mt-9 grid gap-4">
          <a href={`mailto:${siteData.contact.email}`} className="group grid grid-cols-[42px_1fr] items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f4e9c9] text-gold-dark">✉</span>
            <p className="m-0"><b className="block font-serif text-lg font-medium text-ink">Correo</b><small className="block text-[10px] text-muted group-hover:text-gold-dark">{siteData.contact.email}</small></p>
          </a>
          <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[42px_1fr] items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f4e9c9] text-gold-dark">☎</span>
            <p className="m-0"><b className="block font-serif text-lg font-medium text-ink">WhatsApp / Teléfono</b><small className="block text-[10px] text-muted group-hover:text-gold-dark">{siteData.contact.phone}</small></p>
          </a>
          <div className="grid grid-cols-[42px_1fr] items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f4e9c9] text-gold-dark">⌖</span>
            <p className="m-0"><b className="block font-serif text-lg font-medium text-ink">Base artística</b><small className="block text-[10px] text-muted">{siteData.contact.location}</small></p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <form onSubmit={handleSubmit} className="border border-[#e5dccb] bg-warm p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
            <Field label="Nombre completo"><input type="text" name="nombre" placeholder="Tu nombre" autoComplete="name" required className="field-control" /></Field>
            <Field label="Email de contacto"><input type="email" name="email" placeholder="nombre@correo.com" autoComplete="email" required className="field-control" /></Field>
            <Field label="Tipo de presentación">
              <select name="tipo" className="field-control">
                <option>Boda</option><option>Ceremonia</option><option>Evento privado</option><option>Evento corporativo</option><option>Recital / concierto</option><option>Producción audiovisual</option><option>Otro</option>
              </select>
            </Field>
            <Field label="Fecha estimada"><input type="date" name="fecha" className="field-control" /></Field>
          </div>
          <Field label="Detalles de la contratación"><textarea name="detalle" rows={5} placeholder="Contame sobre el evento, ciudad, horario y requerimientos..." className="field-control min-h-32 resize-y" /></Field>
          <button type="submit" className="mt-1 w-full border border-gold bg-gold px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:bg-transparent">Enviar consulta por WhatsApp ↗</button>
          <p className="mt-3 min-h-6 text-[10px] leading-5 text-muted">Se abrirá WhatsApp con tu mensaje preparado. El envío se confirma allí.</p>
          <p className="min-h-6 text-[10px] leading-5 text-gold-dark" role="status" aria-live="polite">{status}</p>
        </form>
      </Reveal>
    </section>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="mb-5 grid gap-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-ink">{label}{children}</label>
}
