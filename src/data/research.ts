/**
 * Every number on the site lives here, with a pointer to where it appears in the paper
 * (Elmaliah, "Advanced High School Math and the STEM Pipeline", Nov 2025).
 * Edit values here only; components read from this file.
 * All STEM shares are population-weighted (2015 population) period means, in percent.
 * Do NOT add yearly values: the paper only reports period averages.
 */

export const paper = {
  titleEn:
    'Advanced High School Math and the STEM Pipeline: Does Israel’s “Give-Five” Reform Increase STEM Entry and Reduce Socioeconomic Gaps?',
  titleHe:
    'מתמטיקה מתקדמת בתיכון וצינור ה-STEM: האם רפורמת "תנו חמש" בישראל הגדילה את הכניסה למקצועות STEM וצמצמה פערים חברתיים-כלכליים?',
  authorEn: 'Assaf Elmaliah',
  authorHe: 'אסף אלמליח',
  year: 2025,
  dateEn: 'November 2025',
  dateHe: 'נובמבר 2025',
  pages: 24,
  /** File in /public. If you rename it, update this path. */
  pdfPath: '/Elmaliah-2025-Give-Five-STEM.pdf',
  pdfSizeKb: 502,
} as const

/** Background facts cited in the paper's literature review (Section 2). */
export const background = {
  /** IDI analysis cited on p.4: share of graduates by math level who pursued scientific tracks. */
  stemTrackByMathLevel: [
    { units: 5, pct: 56.6, approx: false },
    { units: 4, pct: 30, approx: true },
    { units: 3, pct: 13, approx: true },
  ],
  /** Bank of Israel, cited p.3: 12th graders completing 5-unit math. */
  fiveUnitShareDecline: { from: 16.1, to: 10.9, fromYear: 2013, toYear: 2016 },
  /** Knesset Research Center, cited p.3: drop in 5-unit participation 2006–2012. */
  knessetDropPct: 30,
} as const

/** Give Five design (p.3–4). */
export const reform = {
  launched: 'August 2015',
  minClassBefore: 15,
  minClassAfter: 6,
  weeklyHours: 15,
  schools2015: 108,
  schools2018: 406,
  schools2018SharePct: 39,
  studentsTarget: { base: 9.7, target: 18, baseYear: 2014 }, // thousands, goal within 4 years
  shareGoal: { from: 10.8, to: 18 }, // percent of grade-12, goal within 10 years
  boiEarlyEffectPp: 3, // "almost 3 pp" by 2017 (Bank of Israel evaluation, p.4)
} as const

/** Data and design (Sections 3–5, Table 1, Table 4). */
export const data = {
  examRecords: 121475,
  localityYearsExposure: 2295,
  localityYearsOutcome: 1312,
  localitiesCrossSection: 164,
  exposurePre: '2013–2014',
  exposurePost: '2016–2019',
  outcomePre: '2017–2019',
  outcomePost: '2020–2024',
} as const

/** Table 1: overall population-weighted STEM share among new first-degree students. */
export const overall = { pre: 34.9, post: 37.0, all: 36.2 } as const

/**
 * Table 4: change-on-change regressions. Coefficient on exposure index (robust SE).
 * effect10 = implied pp change in STEM share for +0.10 (10 pp) exposure, as reported.
 */
export const changeOnChange = [
  { id: 'A', coef: 0.197, se: 0.036, stars: '***', effect10: 2.0, r2: 0.075, n: 164 },
  { id: 'B', coef: 0.322, se: 0.063, stars: '***', effect10: 3.2, r2: 0.177, n: 164 },
  { id: 'C', coef: 0.295, se: 0.08, stars: '**', effect10: 3.0, r2: 0.266, n: 164, preferred: true },
] as const

/** Table 5: DiD estimates, converted to percentage points. */
export const did = {
  simple: { pp: 1.6, sePp: 0.4, stars: '***', n: 1309 },
  preTrend: { ppPerYear: 1.1, sePp: 0.3, stars: '**', n: 478 },
  trendAdjusted: { pp: 0.1, sePp: 0.6, stars: '', n: 1309 },
} as const

/** Table 2: STEM share by SES group (CBS cluster, 2015). Low = clusters 1–4. */
export const bySes = [
  { key: 'high', pre: 38.8, post: 41.9 },
  { key: 'mid', pre: 38.0, post: 40.0 },
  { key: 'low', pre: 30.1, post: 31.7 },
] as const

/** Table 3: STEM share by exposure group. */
export const byExposure = [
  { key: 'highExp', pre: 38.3, post: 41.6 },
  { key: 'lowExp', pre: 33.5, post: 35.1 },
] as const
