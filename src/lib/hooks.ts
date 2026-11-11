import { useEffect, useRef, useState } from 'react'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/** Returns a ref and whether the element has entered the viewport (once). */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, inView])
  return [ref, inView] as const
}

/** Animates 0 → target once `start` is true. Jumps straight to target under reduced motion. */
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(reduced ? target : 0)
  useEffect(() => {
    if (!start) return
    if (reduced) {
      setValue(target)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration, reduced])
  return value
}

/** Adds `is-visible` to every [data-reveal] element as it scrolls into view. */
export function useRevealAll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  })
}

/** Checks the paper PDF is actually served (not an SPA fallback page). */
export function usePdfAvailable(path: string) {
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    let alive = true
    fetch(path, { method: 'HEAD' })
      .then((r) => alive && setOk(r.ok && (r.headers.get('content-type') ?? '').includes('pdf')))
      .catch(() => alive && setOk(false))
    return () => {
      alive = false
    }
  }, [path])
  return ok
}
