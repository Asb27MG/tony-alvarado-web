import { useEffect, useRef, useState, type RefObject } from 'react'

const VIDEO_ID = '1YHhIWvxJe4'
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

type PlayerEvent = { target: YouTubePlayer }
type PlayerStateEvent = PlayerEvent & { data: number }
type YouTubePlayer = {
  playVideo: () => void
  pauseVideo: () => void
  destroy: () => void
}
type YouTubeAPI = {
  Player: new (element: HTMLElement, options: {
    width: number
    height: number
    videoId: string
    playerVars: Record<string, string | number>
    events: {
      onReady: (event: PlayerEvent) => void
      onStateChange: (event: PlayerStateEvent) => void
      onAutoplayBlocked: () => void
      onError: () => void
    }
  }) => YouTubePlayer
}

declare global {
  interface Window {
    YT?: YouTubeAPI
    onYouTubeIframeAPIReady?: () => void
  }
}

let youtubeReadyPromise: Promise<YouTubeAPI> | undefined

/** API oficial de YouTube para enlazar la canción y controlar su estado. */
function loadYouTube(): Promise<YouTubeAPI> {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (!youtubeReadyPromise) {
    youtubeReadyPromise = new Promise((resolve, reject) => {
      const previousCallback = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.()
        if (window.YT?.Player) resolve(window.YT)
        else reject(new Error('La API de YouTube no se pudo iniciar.'))
      }
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.onerror = () => {
        youtubeReadyPromise = undefined
        reject(new Error('No se pudo cargar YouTube.'))
      }
      document.head.appendChild(script)
    })
  }
  return youtubeReadyPromise
}

type Status = 'loading' | 'ready' | 'playing' | 'paused' | 'outside' | 'blocked' | 'ended' | 'error'

type HeroMusicProps = {
  heroRef: RefObject<HTMLElement | null>
  onPlaybackChange: (playing: boolean) => void
}

export function HeroMusic({ heroRef, onPlaybackChange }: HeroMusicProps) {
  const videoContainerRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<YouTubePlayer | null>(null)
  const inHeroRef = useRef(true)
  const startedRef = useRef(false)
  const manuallyPausedRef = useRef(false)
  const automaticPauseRef = useRef(false)
  const [status, setStatus] = useState<Status>('loading')
  const [ready, setReady] = useState(false)
  const [inHero, setInHero] = useState(true)

  useEffect(() => {
    let cancelled = false
    const hero = heroRef.current

    const checkHeroVisibility = () => {
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      // Music is only allowed while the viewport centre is inside the hero.
      // Unlike IntersectionObserver percentages this works on tall mobile heroes.
      const visible = document.visibilityState === 'visible' &&
        rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5
      if (visible === inHeroRef.current) return
      inHeroRef.current = visible
      setInHero(visible)

      if (!visible) {
        if (playerRef.current) {
          automaticPauseRef.current = true
          playerRef.current.pauseVideo()
        }
        onPlaybackChange(false)
        setStatus((previous) => previous === 'error' ? previous : 'outside')
      } else if (startedRef.current && !manuallyPausedRef.current) {
        // Auto-resume only if the listener previously started playback.
        playerRef.current?.playVideo()
      } else if (startedRef.current) {
        setStatus('paused')
      } else {
        setStatus((previous) => previous === 'outside' ? 'ready' : previous)
      }
    }

    checkHeroVisibility()
    window.addEventListener('scroll', checkHeroVisibility, { passive: true })
    window.addEventListener('resize', checkHeroVisibility)
    document.addEventListener('visibilitychange', checkHeroVisibility)

    loadYouTube().then((api) => {
      if (cancelled || !videoContainerRef.current) return
      // YouTube replaces this placeholder with an iframe. We create it inside
      // a React-owned wrapper so StrictMode's effect cleanup can safely rebuild it.
      const placeholder = document.createElement('div')
      videoContainerRef.current.replaceChildren(placeholder)
      playerRef.current = new api.Player(placeholder, {
        width: 210,
        height: 210,
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: ({ target }) => {
            if (cancelled) return
            setReady(true)
            if (inHeroRef.current) {
              // An audible autoplay attempt; browsers may block it until a click.
              target.playVideo()
              setStatus('ready')
            } else {
              setStatus('outside')
            }
          },
          onStateChange: ({ data, target }) => {
            if (cancelled) return
            if (data === 1) { // YT.PlayerState.PLAYING
              if (!inHeroRef.current) {
                automaticPauseRef.current = true
                target.pauseVideo()
                onPlaybackChange(false)
                setStatus('outside')
                return
              }
              startedRef.current = true
              manuallyPausedRef.current = false
              automaticPauseRef.current = false
              setStatus('playing')
              onPlaybackChange(true)
            } else if (data === 2) { // PAUSED (by scrolling, tab change or the user)
              if (automaticPauseRef.current) {
                automaticPauseRef.current = false
              } else if (inHeroRef.current) {
                manuallyPausedRef.current = true
              }
              setStatus(inHeroRef.current ? 'paused' : 'outside')
              onPlaybackChange(false)
            } else if (data === 0) { // ENDED
              manuallyPausedRef.current = true
              setStatus('ended')
              onPlaybackChange(false)
            }
          },
          onAutoplayBlocked: () => {
            if (cancelled) return
            setStatus('blocked')
            onPlaybackChange(false)
          },
          onError: () => {
            if (cancelled) return
            setStatus('error')
            onPlaybackChange(false)
          },
        },
      })
    }).catch(() => {
      if (cancelled) return
      setStatus('error')
      onPlaybackChange(false)
    })

    return () => {
      cancelled = true
      window.removeEventListener('scroll', checkHeroVisibility)
      window.removeEventListener('resize', checkHeroVisibility)
      document.removeEventListener('visibilitychange', checkHeroVisibility)
      playerRef.current?.destroy()
      playerRef.current = null
      videoContainerRef.current?.replaceChildren()
    }
  }, [heroRef, onPlaybackChange])

  const playing = status === 'playing'
  const togglePlayback = () => {
    if (!playerRef.current || !inHero) return
    if (playing) {
      manuallyPausedRef.current = true
      playerRef.current.pauseVideo()
      setStatus('paused')
      onPlaybackChange(false)
    } else {
      manuallyPausedRef.current = false
      playerRef.current.playVideo()
      setStatus('ready')
    }
  }

  const statusText: Record<Status, string> = {
    loading: 'Preparando la música…',
    ready: 'Tocá el círculo para escuchar.',
    playing: 'Reproduciendo Clásicos en Tres Tiempos.',
    paused: 'Música pausada.',
    outside: 'Música pausada al salir de la presentación.',
    blocked: 'El navegador requiere un clic para escuchar la música.',
    ended: 'La canción terminó.',
    error: 'No se pudo reproducir YouTube en esta página.',
  }

  return (
    <>
      {/* YouTube conserva su propia fuente; el control visible está dentro de la foto circular. */}
      <div className="hero-youtube-player-host" aria-hidden="true">
        <div ref={videoContainerRef} className="h-[210px] w-[210px]" />
      </div>
      <button
        type="button"
        className={`hero-audio-control ${playing ? 'is-playing' : ''}`}
        onClick={togglePlayback}
        disabled={!ready || !inHero || status === 'error'}
        aria-label={playing ? 'Pausar música de Tony Alvarado' : 'Escuchar música de Tony Alvarado'}
        aria-pressed={playing}
        title={statusText[status]}
      >
        <span className="hero-audio-control-icon" aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
        {playing ? 'Pausar arpa' : 'Escuchar arpa'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">{statusText[status]}</span>
      {status === 'error' && (
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-audio-fallback"
        >
          Abrir canción en YouTube ↗
        </a>
      )}
    </>
  )
}
