/** SVGs locales para que los iconos no dependan de servicios externos. */
export function SocialIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  return <img src={`/assets/social/${name}.svg`} alt="" aria-hidden="true" className={className} loading="lazy" />
}
