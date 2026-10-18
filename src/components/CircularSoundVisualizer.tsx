import type { CSSProperties } from 'react'

/**
 * Simulación visual decorativa de un ecualizador circular.
 * No analiza el audio de YouTube: su API no expone los datos de frecuencia.
 */
const bars = Array.from({ length: 112 }, (_, index) => {
  const variation = (Math.sin(index * 1.618 + 3) + Math.cos(index * 0.837 + 5)) / 2
  const duration = 620 + ((index * 71) % 620)
  const delay = -((index * 139) % 1320)
  const level = 0.72 + variation * 0.2
  return {
    angle: (360 / 112) * index,
    style: {
      '--bar-duration': `${duration}ms`,
      '--bar-delay': `${delay}ms`,
      '--bar-mid': String(level * .72),
      '--bar-high': String(level * 1.28),
    } as CSSProperties,
  }
})

type Props = { playing: boolean }

export function CircularSoundVisualizer({ playing }: Props) {
  return (
    <svg
      className={`hero-circular-spectrum ${playing ? 'is-playing' : ''}`}
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="300" cy="300" r="249" fill="none" stroke="#d4b965" strokeWidth="1" strokeOpacity="0.4" />
      {bars.map((bar, index) => (
        <g key={index} transform={`rotate(${bar.angle} 300 300)`}>
          <g className="hero-circular-spectrum-bar" style={bar.style}>
            {Array.from({ length: 9 }, (_, dash) => (
              <rect
                key={dash}
                x="298.15"
                y={46 - dash * 4.65}
                width="3.7"
                height="2.7"
                rx="0.5"
                fill={dash > 6 ? '#977222' : '#c6a43d'}
                opacity={1 - dash * 0.026}
              />
            ))}
          </g>
        </g>
      ))}
    </svg>
  )
}
