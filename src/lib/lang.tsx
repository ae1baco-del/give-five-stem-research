import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy, type Copy, type Lang } from '../i18n/copy'

type Ctx = { lang: Lang; t: Copy; setLang: (l: Lang) => void }
const LangContext = createContext<Ctx | null>(null)

function initialLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'he' || q === 'en') return q
    const saved = window.localStorage.getItem('lang')
    if (saved === 'he' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('he') ? 'he' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'he' ? 'rtl' : 'ltr'
    document.title = copy[lang].meta.title
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const value = useMemo(() => ({ lang, t: copy[lang], setLang }), [lang, setLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}

/** Locale-aware number formatting with fixed decimals. */
export function fmt(n: number, digits = 1) {
  return n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
}
