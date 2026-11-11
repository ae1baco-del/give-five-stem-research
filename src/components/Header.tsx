import { useEffect, useRef } from 'react'
import { useLang } from '../lib/lang'

function FlagUS() {
  return (
    <svg viewBox="0 0 38 26" className="flag" aria-hidden="true">
      <rect width="38" height="26" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * 2} width="38" height="2" fill="#B22234" />
      ))}
      <rect width="16" height="14" fill="#3C3B6E" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={2.5 + c * 3.7} cy={2.6 + r * 4.3} r="0.8" fill="#fff" />),
      )}
    </svg>
  )
}

function FlagIL() {
  return (
    <svg viewBox="0 0 38 26" className="flag" aria-hidden="true">
      <rect width="38" height="26" fill="#fff" />
      <rect y="3" width="38" height="3.6" fill="#0038B8" />
      <rect y="19.4" width="38" height="3.6" fill="#0038B8" />
      <g fill="none" stroke="#0038B8" strokeWidth="1.3">
        <path d="M19 7.6 L24.2 16.6 L13.8 16.6 Z" />
        <path d="M19 18.4 L13.8 9.4 L24.2 9.4 Z" />
      </g>
    </svg>
  )
}

export function Header() {
  const { lang, setLang, t } = useLang()
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
        if (bar.current) bar.current.style.transform = `scaleX(${p})`
      })
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className="topbar">
      <a href="#main" className="skip">
        {t.nav.skip}
      </a>
      <div className="topbar__progress" aria-hidden="true">
        <div ref={bar} />
      </div>
      <div className="topbar__inner">
        <a href="#top" className="brand" aria-label="Give Five research">
          <span className="brand__five">5</span>
          <span className="brand__txt">Give Five · STEM</span>
        </a>
        <div className="langswitch" role="group" aria-label={t.nav.langLabel}>
          <button
            type="button"
            lang="en"
            className={lang === 'en' ? 'is-on' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            <FlagUS />
            <span>{t.nav.en}</span>
          </button>
          <button
            type="button"
            lang="he"
            className={lang === 'he' ? 'is-on' : ''}
            aria-pressed={lang === 'he'}
            onClick={() => setLang('he')}
          >
            <FlagIL />
            <span>{t.nav.he}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
