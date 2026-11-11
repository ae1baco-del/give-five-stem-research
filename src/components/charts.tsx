import { useState } from 'react'
import { background, byExposure, bySes, changeOnChange, did } from '../data/research'
import { fmt, useLang } from '../lib/lang'
import { useInView } from '../lib/hooks'

/* ---------- Hero stat: share pursuing scientific tracks by math level ---------- */
export function MathLevelBars() {
  const { t } = useLang()
  const [ref, inView] = useInView<HTMLDivElement>(0.4)
  return (
    <figure className="levels" ref={ref} data-in={inView || undefined}>
      <figcaption className="levels__cap">{t.stat.barsLabel}</figcaption>
      <ul className="levels__list">
        {background.stemTrackByMathLevel.map((d, i) => (
          <li key={d.units} className={`levels__row ${d.units === 5 ? 'is-key' : ''}`}>
            <span className="levels__units">
              <b>{d.units}</b> {t.stat.units}
            </span>
            <span className="levels__track" aria-hidden="true">
              <span
                className="levels__bar"
                style={{ width: `${(d.pct / 60) * 100}%`, transitionDelay: `${i * 140}ms` }}
              />
            </span>
            <span className="levels__val">
              {d.approx ? '~' : ''}
              {d.approx ? d.pct : fmt(d.pct)}%
            </span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

/* ---------- Challenge: 5-unit share decline (two reported points only) ---------- */
export function DeclineFigure() {
  const { t } = useLang()
  const { from, to, fromYear, toYear } = background.fiveUnitShareDecline
  const [ref, inView] = useInView<SVGSVGElement>(0.5)
  const y = (v: number) => 20 + (1 - v / 20) * 140
  return (
    <figure className="decline">
      <figcaption className="decline__cap">{t.challenge.declineLabel}</figcaption>
      <svg
        ref={ref}
        viewBox="0 0 320 190"
        className="decline__svg"
        data-in={inView || undefined}
        role="img"
        aria-label={`${t.challenge.declineLabel}: ${fromYear} ${from}%, ${toYear} ${to}%`}
        direction="ltr"
      >
        <line x1="40" x2="280" y1="160" y2="160" className="decline__axis" />
        <line x1="60" x2="260" y1={y(from)} y2={y(to)} className="decline__line" pathLength={1} />
        <circle cx="60" cy={y(from)} r="7" className="decline__dot decline__dot--a" />
        <circle cx="260" cy={y(to)} r="7" className="decline__dot decline__dot--b" />
        <text x="60" y={y(from) - 18} textAnchor="middle" className="decline__val">
          {fmt(from)}%
        </text>
        <text x="260" y={y(to) - 18} textAnchor="middle" className="decline__val decline__val--b">
          {fmt(to)}%
        </text>
        <text x="60" y="182" textAnchor="middle" className="decline__year">
          {fromYear}
        </text>
        <text x="260" y="182" textAnchor="middle" className="decline__year">
          {toYear}
        </text>
      </svg>
      <p className="source">{t.challenge.declineSource}</p>
    </figure>
  )
}

/* ---------- Main finding: the three change-on-change specifications ---------- */
export function SpecChart() {
  const { t } = useLang()
  const [ref, inView] = useInView<HTMLDivElement>(0.35)
  const max = 4
  return (
    <figure className="spec" aria-labelledby="spec-title">
      <figcaption id="spec-title" className="spec__title">
        {t.finding.chartTitle}
      </figcaption>
      <div className="spec__plot" ref={ref} data-in={inView || undefined}>
        <div className="spec__grid" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((g) => (
            <span key={g} style={{ bottom: `${(g / max) * 100}%` }}>
              <i>{g === 0 ? '0' : `+${g}`}</i>
            </span>
          ))}
        </div>
        {changeOnChange.map((s, i) => {
          const preferred = 'preferred' in s && s.preferred
          return (
            <div key={s.id} className={`spec__col ${preferred ? 'is-preferred' : ''}`}>
              <div className="spec__barwrap">
                <div
                  className="spec__bar"
                  style={{ height: `${(s.effect10 / max) * 100}%`, transitionDelay: `${i * 160}ms` }}
                >
                  <span className="spec__val">+{fmt(s.effect10)}</span>
                </div>
              </div>
              <div className="spec__label">
                <span className="spec__name">
                  {s.id}. {t.finding.specs[s.id]}
                </span>
                <span className="spec__coef">
                  {t.finding.coefLabel} {s.coef.toFixed(3)} ({s.se.toFixed(3)}){s.stars}
                </span>
                {preferred && <span className="spec__pref">{t.finding.preferred}</span>}
              </div>
            </div>
          )
        })}
      </div>
      <p className="spec__note">{t.finding.chartNote}</p>
      <div className="sr-only"><table>
        <caption>{t.finding.chartTitle}</caption>
        <tbody>
          {changeOnChange.map((s) => (
            <tr key={s.id}>
              <th scope="row">{t.finding.specs[s.id]}</th>
              <td>+{fmt(s.effect10)} pp</td>
              <td>
                {s.coef} (SE {s.se}){s.stars}
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </figure>
  )
}

/* ---------- DiD: simple vs trend-adjusted ---------- */
export function DidChart() {
  const { t } = useLang()
  const [ref, inView] = useInView<HTMLDivElement>(0.4)
  const rows = [
    { label: t.finding.didSimple, ...did.simple, sig: true },
    { label: t.finding.didAdjusted, ...did.trendAdjusted, sig: false },
  ]
  return (
    <div className="did" ref={ref} data-in={inView || undefined}>
      {rows.map((r, i) => (
        <div key={r.label} className={`did__row ${r.sig ? '' : 'is-ns'}`}>
          <div className="did__head">
            <span className="did__label">{r.label}</span>
            <span className="did__val">
              +{fmt(r.pp)} <small>{t.pp}</small>
            </span>
          </div>
          <div className="did__track" aria-hidden="true">
            <span
              className="did__bar"
              style={{ width: `${Math.max(1.2, (r.pp / 2) * 100)}%`, transitionDelay: `${i * 220}ms` }}
            />
          </div>
          <span className="did__sig">
            SE {fmt(r.sePp)} {t.pp} · {r.sig ? t.finding.didSig : t.finding.didNs}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---------- Inequality: dumbbell chart with toggle ---------- */
type View = 'ses' | 'exp'
export function Dumbbell() {
  const { t } = useLang()
  const [view, setView] = useState<View>('ses')
  const [active, setActive] = useState<string | null>(null)
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const rows = view === 'ses' ? bySes : byExposure
  const lo = 25
  const hi = 45
  const x = (v: number) => ((v - lo) / (hi - lo)) * 100
  const ticks = [25, 30, 35, 40, 45]
  const g = t.inequality.groups

  const first = rows[0]
  const last = rows[rows.length - 1]
  const gapPre = first.pre - last.pre
  const gapPost = first.post - last.post

  return (
    <figure className="dumb" aria-label={t.inequality.chartAria}>
      <div className="dumb__top">
        <div className="seg" role="radiogroup" aria-label={t.inequality.title}>
          {(['ses', 'exp'] as const).map((v) => (
            <button
              key={v}
              role="radio"
              aria-checked={view === v}
              className={`seg__btn ${view === v ? 'is-on' : ''}`}
              onClick={() => {
                setView(v)
                setActive(null)
              }}
            >
              {v === 'ses' ? t.inequality.toggleSes : t.inequality.toggleExp}
            </button>
          ))}
        </div>
        <div className="dumb__legend" aria-hidden="true">
          <span>
            <i className="dot dot--pre" /> {t.inequality.legendPre}
          </span>
          <span>
            <i className="dot dot--post" /> {t.inequality.legendPost}
          </span>
        </div>
      </div>

      <div className="dumb__plot" ref={ref} data-in={inView || undefined}>
        <div className="dumb__ticks" aria-hidden="true">
          {ticks.map((tk) => (
            <span key={tk} style={{ insetInlineStart: `${x(tk)}%` }}>
              <i>{tk}%</i>
            </span>
          ))}
        </div>
        {rows.map((r, i) => {
          const name = g[r.key as keyof typeof g]
          const isOn = active === r.key
          const dim = active !== null && !isOn
          return (
            <div
              key={`${view}-${r.key}`}
              className={`dumb__row ${isOn ? 'is-on' : ''} ${dim ? 'is-dim' : ''} ${
                r.key === 'low' || r.key === 'lowExp' ? 'is-low' : ''
              }`}
              tabIndex={0}
              onMouseEnter={() => setActive(r.key)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(r.key)}
              onBlur={() => setActive(null)}
              aria-label={`${name}: ${t.inequality.legendPre} ${fmt(r.pre)}%, ${t.inequality.legendPost} ${fmt(
                r.post,
              )}%`}
              style={{ ['--i' as string]: i }}
            >
              <span className="dumb__name">{name}</span>
              <span className="dumb__lane" aria-hidden="true">
                <span
                  className="dumb__line"
                  style={{ insetInlineStart: `${x(r.pre)}%`, width: `${x(r.post) - x(r.pre)}%` }}
                />
                <span className="dumb__pt dumb__pt--pre" style={{ insetInlineStart: `${x(r.pre)}%` }}>
                  <b>{fmt(r.pre)}%</b>
                </span>
                <span className="dumb__pt dumb__pt--post" style={{ insetInlineStart: `${x(r.post)}%` }}>
                  <b>{fmt(r.post)}%</b>
                </span>
                <span className="dumb__delta" style={{ insetInlineStart: `${x(r.post)}%` }}>
                  +{fmt(r.post - r.pre)} {t.pp}
                </span>
              </span>
            </div>
          )
        })}
      </div>

      <div className="dumb__gap">
        <span className="dumb__gaplabel">{t.inequality.gapLabel}</span>
        <span className="dumb__gapvals">
          <span>
            <small>{t.inequality.legendPre}</small> {fmt(gapPre)} {t.pp}
          </span>
          <span className="dumb__arrow" aria-hidden="true">
            →
          </span>
          <span>
            <small>{t.inequality.legendPost}</small> {fmt(gapPost)} {t.pp}
          </span>
        </span>
        <span className="dumb__gapnote">{t.inequality.gapNote}</span>
      </div>

      <div className="sr-only"><table>
        <caption>{t.inequality.chartAria}</caption>
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">{t.inequality.legendPre}</th>
            <th scope="col">{t.inequality.legendPost}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <th scope="row">{g[r.key as keyof typeof g]}</th>
              <td>{fmt(r.pre)}%</td>
              <td>{fmt(r.post)}%</td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </figure>
  )
}
