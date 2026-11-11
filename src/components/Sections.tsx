import { ArrowDown, ArrowUpRight, BookOpen, ChevronDown, Download, FileText, Info } from 'lucide-react'
import { background, did, overall, paper, reform } from '../data/research'
import { fmt, useLang } from '../lib/lang'
import { useCountUp, useInView, usePdfAvailable } from '../lib/hooks'
import { DeclineFigure, DidChart, Dumbbell, MathLevelBars, SpecChart } from './charts'

function Kicker({ n, children }: { n: string; children: string }) {
  return (
    <p className="kicker" data-reveal>
      <span className="kicker__n">{n}</span>
      <span className="kicker__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/* ---------------- Hero ---------------- */
export function Hero() {
  const { t, lang } = useLang()
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <svg className="hero__five" viewBox="0 0 400 560" aria-hidden="true">
        <text x="50%" y="470" textAnchor="middle">
          5
        </text>
      </svg>
      <div className="wrap hero__inner">
        <p className="hero__eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__l1">{t.hero.line1}</span>
          <span className="hero__l2">
            {t.hero.line2a}
            <em lang="en" dir="ltr">
              {t.hero.line2b}
            </em>
            <span className="hero__q">{t.hero.line2c}</span>
          </span>
        </h1>
        <p className="hero__sub">{t.hero.subtitle}</p>
        <div className="hero__by">
          <span className="hero__bylabel">{t.hero.by}</span>
          <span className="hero__author">{lang === 'he' ? paper.authorHe : paper.authorEn}</span>
          <span className="hero__date">{lang === 'he' ? paper.dateHe : paper.dateEn}</span>
        </div>
      </div>
      <a href="#stat" className="hero__scroll">
        <span>{t.hero.scroll}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}

/* ---------------- Attention stat ---------------- */
export function StatBand() {
  const { t } = useLang()
  const key = background.stemTrackByMathLevel[0].pct
  const [ref, inView] = useInView<HTMLParagraphElement>(0.6)
  const v = useCountUp(key, inView)
  return (
    <section className="stat" id="stat" aria-label={t.stat.barsLabel}>
      <div className="wrap stat__inner">
        <div className="stat__text" data-reveal>
          <p className="stat__num" ref={ref}>
            <span aria-hidden="true">{fmt(v)}</span>
            <span className="sr-only">{fmt(key)}</span>
            <span className="stat__pct">%</span>
          </p>
          <p className="stat__lead">
            {t.stat.lead} <strong>{t.stat.leadStrong}</strong> {t.stat.lead2}
          </p>
          <p className="stat__compare">{t.stat.compare}</p>
        </div>
        <div className="stat__chart" data-reveal>
          <MathLevelBars />
          <p className="source">{t.stat.source}</p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Challenge ---------------- */
export function Challenge() {
  const { t } = useLang()
  return (
    <section className="section challenge" aria-labelledby="ch-title">
      <div className="wrap">
        <Kicker n="01">{t.challenge.kicker}</Kicker>
        <h2 id="ch-title" className="h2" data-reveal>
          {t.challenge.title}
        </h2>
        <div className="challenge__cols">
          <div className="prose" data-reveal>
            <p>{t.challenge.p1}</p>
            <p>{t.challenge.p2}</p>
          </div>
          <div data-reveal>
            <DeclineFigure />
          </div>
        </div>
        <blockquote className="pull" data-reveal>
          <p>{t.challenge.pull}</p>
        </blockquote>
      </div>
    </section>
  )
}

/* ---------------- Reform ---------------- */
export function Reform() {
  const { t } = useLang()
  return (
    <section className="section reform" aria-labelledby="rf-title">
      <div className="wrap">
        <Kicker n="02">{t.reform.kicker}</Kicker>
        <div className="reform__head">
          <h2 id="rf-title" className="h2" data-reveal>
            {t.reform.title}
          </h2>
          <p className="lede" data-reveal>
            {t.reform.intro}
          </p>
        </div>
        <ol className="cards">
          {t.reform.cards.map((c, i) => (
            <li key={c.tag} className="card" data-reveal style={{ ['--d' as string]: `${i * 110}ms` }}>
              <span className="card__tag">
                <span className="card__idx">0{i + 1}</span> {c.tag}
              </span>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__fig" dir="ltr">
                {c.fromTo[0] && (
                  <>
                    <span className="card__from">{c.fromTo[0]}</span>
                    <span className="card__arrow" aria-hidden="true">
                      →
                    </span>
                  </>
                )}
                <span className="card__to">{c.fromTo[1]}</span>
              </p>
              <p className="card__unit">{c.unit}</p>
              <p className="card__body">{c.body}</p>
            </li>
          ))}
        </ol>
        <p className="reform__note" data-reveal>
          <Info size={16} aria-hidden="true" />
          <span>{t.reform.note}</span>
        </p>
        <span className="sr-only">
          {reform.schools2015} → {reform.schools2018}
        </span>
      </div>
    </section>
  )
}

/* ---------------- Research question ---------------- */
export function Question() {
  const { t } = useLang()
  return (
    <section className="section question" aria-labelledby="q-title">
      <div className="wrap">
        <Kicker n="03">{t.question.kicker}</Kicker>
        <h2 id="q-title" className="question__title" data-reveal>
          {t.question.title}
        </h2>
        <p className="question__sub" data-reveal>
          {t.question.sub}
        </p>
        <p className="lede question__p" data-reveal>
          {t.question.p1}
        </p>
        <ol className="pipe">
          {t.question.steps.map((s, i) => (
            <li key={s.label} className="pipe__step" data-reveal style={{ ['--d' as string]: `${i * 120}ms` }}>
              <span className="pipe__label">{s.label}</span>
              <span className="pipe__fig" dir="auto">
                {s.figure}
              </span>
              <span className="pipe__figlabel">{s.figureLabel}</span>
              <h3 className="pipe__title">{s.title}</h3>
              <p className="pipe__body">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="context" data-reveal>
          <span className="context__label">{t.question.contextLabel}</span>
          <p className="context__body">{t.question.contextBody}</p>
          <div className="context__vals" dir="ltr">
            <span>
              <small>{t.question.periodPre}</small>
              <b>{fmt(overall.pre)}%</b>
            </span>
            <span className="context__arrow" aria-hidden="true">
              →
            </span>
            <span>
              <small>{t.question.periodPost}</small>
              <b>{fmt(overall.post)}%</b>
            </span>
          </div>
          <p className="context__note">{t.question.contextNote}</p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Main finding ---------------- */
export function Finding() {
  const { t } = useLang()
  return (
    <section className="section finding" aria-labelledby="f-title">
      <div className="wrap">
        <Kicker n="04">{t.finding.kicker}</Kicker>
        <div className="finding__hero">
          <h2 id="f-title" className="finding__fig" data-reveal dir="ltr">
            {t.finding.figure}
          </h2>
          <p className="finding__unit" data-reveal>
            {t.finding.unit}
          </p>
          <p className="finding__cap" data-reveal>
            {t.finding.caption}
          </p>
          <p className="badge" data-reveal>
            <span className="badge__dot" aria-hidden="true" />
            {t.finding.badge}
          </p>
        </div>
        <div className="finding__body">
          <div data-reveal>
            <SpecChart />
          </div>
          <p className="finding__read" data-reveal>
            {t.finding.read}
          </p>
        </div>
        <div className="timing" data-reveal>
          <div className="timing__text">
            <h3 className="timing__title">{t.finding.timingTitle}</h3>
            <p>{t.finding.timingBody}</p>
            <p className="timing__pre">
              {t.finding.preTrend}: +{fmt(did.preTrend.ppPerYear)} {t.pp} / {t.finding.perYear} (SE{' '}
              {fmt(did.preTrend.sePp)})
            </p>
          </div>
          <DidChart />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Inequality ---------------- */
export function Inequality() {
  const { t } = useLang()
  return (
    <section className="section inequality" aria-labelledby="in-title">
      <div className="wrap">
        <Kicker n="05">{t.inequality.kicker}</Kicker>
        <h2 id="in-title" className="h2 h2--xl" data-reveal>
          {t.inequality.title}
        </h2>
        <p className="lede" data-reveal>
          {t.inequality.intro}
        </p>
        <div data-reveal>
          <Dumbbell />
        </div>
        <p className="caveat" data-reveal>
          {t.inequality.caveat}
        </p>
        <p className="source">{t.inequality.sesNote}</p>
      </div>
    </section>
  )
}

/* ---------------- Takeaway ---------------- */
export function Takeaway() {
  const { t } = useLang()
  return (
    <section className="section takeaway" aria-labelledby="tk-title">
      <div className="wrap">
        <Kicker n="06">{t.takeaway.kicker}</Kicker>
        <blockquote className="takeaway__quote" data-reveal>
          <p id="tk-title">{t.takeaway.quote}</p>
        </blockquote>
        <div className="takeaway__cols">
          {t.takeaway.cols.map((c, i) => (
            <div key={c.title} className="takeaway__col" data-reveal style={{ ['--d' as string]: `${i * 110}ms` }}>
              <span className="takeaway__n">{['A', 'B', 'C'][i]}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Methodology ---------------- */
export function Method() {
  const { t } = useLang()
  return (
    <section className="section method" aria-labelledby="m-title">
      <div className="wrap wrap--narrow">
        <Kicker n="07">{t.method.kicker}</Kicker>
        <h2 id="m-title" className="h3" data-reveal>
          {t.method.title}
        </h2>
        <div className="acc">
          {t.method.items.map((it) => (
            <details key={it.q} className="acc__item" data-reveal>
              <summary>
                <span>{it.q}</span>
                <ChevronDown size={18} aria-hidden="true" className="acc__chev" />
              </summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Paper ---------------- */
export function PaperCard() {
  const { t, lang } = useLang()
  const ok = usePdfAvailable(paper.pdfPath)
  return (
    <section className="section paper" id="paper" aria-labelledby="p-title">
      <div className="wrap">
        <Kicker n="08">{t.paperCard.kicker}</Kicker>
        <article className="paper__card" data-reveal>
          <div className="paper__cover" aria-hidden="true">
            <span className="paper__cover5">5</span>
            <span className="paper__coverlines">
              <i />
              <i />
              <i />
              <i />
            </span>
            <FileText size={20} />
          </div>
          <div className="paper__info">
            <span className="paper__label">
              <BookOpen size={14} aria-hidden="true" /> {t.paperCard.label} · {paper.year}
            </span>
            <h2 id="p-title" className="paper__title" lang="en" dir="ltr">
              {paper.titleEn}
            </h2>
            {lang === 'he' && <p className="paper__titlehe">{paper.titleHe}</p>}
            <p className="paper__meta">
              {lang === 'he' ? paper.authorHe : paper.authorEn} · {lang === 'he' ? paper.dateHe : paper.dateEn} ·{' '}
              {t.paperCard.meta}
            </p>
            {ok === false ? (
              <p className="paper__missing" role="status">
                PDF not found at <code>public{paper.pdfPath}</code>.
              </p>
            ) : (
              <a className="btn" href={paper.pdfPath} target="_blank" rel="noopener" type="application/pdf">
                <Download size={18} aria-hidden="true" />
                <span>{t.paperCard.button}</span>
                <ArrowUpRight size={18} aria-hidden="true" className="btn__arrow" />
              </a>
            )}
            {lang === 'he' && <p className="paper__lang">{t.paperCard.lang}</p>}
          </div>
        </article>
      </div>
    </section>
  )
}

export function Footer() {
  const { t, lang } = useLang()
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          <strong>{lang === 'he' ? paper.authorHe : paper.authorEn}</strong> · {paper.year}
        </p>
        <p>{t.footer.rights}</p>
        <a href="#top">{t.footer.top} ↑</a>
      </div>
    </footer>
  )
}
