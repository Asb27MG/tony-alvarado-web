import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-gold-dark">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">{description}</p>
      <div className="mx-auto mt-6 flex w-40 items-center gap-3 text-gold" aria-hidden="true">
        <span className="h-px flex-1 bg-gold/50" />
        <b className="font-serif text-base font-normal">♪</b>
        <span className="h-px flex-1 bg-gold/50" />
      </div>
    </Reveal>
  )
}
