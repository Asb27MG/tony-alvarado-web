import type { HTMLAttributes, PropsWithChildren } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    delay?: number
  }
>

export function Reveal({ children, className = '', delay = 0, style, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
