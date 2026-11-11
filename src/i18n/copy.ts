/**
 * All site text in English and Hebrew. Numbers come from src/data/research.ts;
 * text here should only describe them, never introduce new figures.
 */

const en = {
  pp: 'pp',
  meta: {
    title: 'More Math. More STEM? | Give Five research by Assaf Elmaliah',
  },
  nav: {
    skip: 'Skip to content',
    langLabel: 'Language',
    en: 'ENG',
    he: 'עברית',
  },
  hero: {
    eyebrow: 'Education policy / Israel / Research 2025',
    line1: 'More Math.',
    line2a: 'More ',
    line2b: 'STEM',
    line2c: '?',
    subtitle:
      'Did Israel’s expansion of advanced mathematics translate into greater STEM participation, and did it help close socioeconomic gaps?',
    by: 'Research by',
    scroll: 'Scroll to read the story',
    paper: 'Read the paper (PDF)',
  },
  stat: {
    lead: 'of students who passed',
    leadStrong: '5-unit math',
    lead2: 'went on to study science, engineering or computing.',
    compare: 'Among graduates with 4 or 3 units of math, the shares were about 30% and 13%.',
    barsLabel: 'Share pursuing scientific tracks, by level of high-school math',
    units: 'units',
    source: 'Israel Democracy Institute analysis, as cited in the paper.',
  },
  challenge: {
    kicker: 'The challenge',
    title: 'One exam that decides who gets in',
    p1: 'In Israel, the 5-unit matriculation exam in mathematics is the highest level a high-school student can take. It is a prerequisite for most selective programs in engineering, computer science and the sciences, the programs that lead into the high-tech sector that makes up about a fifth of Israel’s GDP.',
    p2: 'Yet for years, fewer students were taking it. Participation fell by roughly 30% between 2006 and 2012, and the drop was sharpest among students from weaker socioeconomic backgrounds. Small schools in peripheral towns often could not open an advanced class at all.',
    declineLabel: 'Grade-12 students completing 5-unit math',
    declineSource: 'Bank of Israel, as cited in the paper.',
    pull: 'Access to advanced math was quietly becoming access to the economy’s best-paid fields.',
  },
  reform: {
    kicker: 'The reform',
    title: '“Give Five”, 2015',
    intro:
      'In August 2015 the Ministry of Education launched a national program to reverse the decline. Its goal: double the number of 5-unit math students within four years, from about 9,700 in 2014 to more than 18,000.',
    cards: [
      {
        tag: 'Access',
        title: 'Smaller classes allowed',
        fromTo: ['15', '6'],
        unit: 'minimum students to open a 5-unit class',
        body: 'Lowering the threshold let small or under-resourced schools offer the advanced track for the first time.',
      },
      {
        tag: 'Resources',
        title: 'Hours and teachers',
        fromTo: ['', '~15'],
        unit: 'weekly teaching hours funded per 12th-grade cohort',
        body: 'Schools also received teacher training and certification programs, plus support for enrichment.',
      },
      {
        tag: 'Participation',
        title: 'From pilot to national',
        fromTo: ['108', '406'],
        unit: 'participating high schools, 2015 → 2018',
        body: 'By 2018 that was about 39% of regular secular high schools, backed by public campaigns and math marathons.',
      },
    ],
    note: 'An early Bank of Israel evaluation found the share of students taking the 5-unit exam rose by almost 3 percentage points by 2017, without a notable drop in scores. The open question was what happened next.',
  },
  question: {
    kicker: 'The research question',
    title: 'Does expanding advanced math participation translate into more STEM students?',
    sub: 'And was the link any stronger in socioeconomically disadvantaged towns?',
    p1: 'Earlier evaluations stopped at the high-school door. This study follows the pipeline one step further, into higher education, by linking two official data sources at the level of the municipality.',
    steps: [
      {
        label: 'High school',
        title: 'Matriculation records',
        body: 'Ministry of Education exam records for every school, 2013–2021, aggregated to municipalities.',
        figure: '121,475',
        figureLabel: 'school-level exam records',
      },
      {
        label: 'Exposure',
        title: 'How much did math expand?',
        body: 'Change in each town’s 5-unit share between 2013–2014 and 2016–2019.',
        figure: 'Δ 5-unit',
        figureLabel: 'share of math examinees',
      },
      {
        label: 'University & college',
        title: 'Who enters STEM?',
        body: 'CBS data on new first-degree students by home town and field: STEM share in 2017–2019 vs. 2020–2024.',
        figure: '164',
        figureLabel: 'municipalities compared',
      },
    ],
    contextLabel: 'National context',
    contextBody: 'Average STEM share among new undergraduates (population-weighted)',
    contextNote: 'A descriptive trend, not an estimate of the reform’s effect.',
    periodPre: '2017–2019',
    periodPost: '2020–2024',
  },
  finding: {
    kicker: 'The main finding',
    figure: '+2 to +3',
    unit: 'percentage points',
    caption:
      'Higher STEM share associated with a 10-percentage-point increase in advanced math participation.',
    badge: 'Observational association, not a causal impact estimate',
    chartTitle: 'Implied change in STEM share for +10 pp of 5-unit participation',
    chartNote: 'Change-on-change regressions across 164 municipalities, weighted by population. Robust standard errors in parentheses.',
    specs: {
      A: 'Simple',
      B: '+ controls',
      C: '+ SES cluster fixed effects',
    },
    preferred: 'Preferred model',
    coefLabel: 'coefficient',
    read: 'Towns where more students moved into 5-unit math later sent a larger share of their graduates into STEM. The pattern holds after accounting for baseline STEM levels, socioeconomic status and town size.',
    timingTitle: 'But does the timing point to the reform?',
    timingBody:
      'A difference-in-differences comparison asks whether high-exposure towns jumped after 2019, when reform cohorts reached higher education. At first they seem to. But those towns were already pulling ahead before then, by about 1.1 pp per year. Once that existing trend is taken into account, the post-2019 jump nearly disappears.',
    didSimple: 'Simple comparison',
    didAdjusted: 'Allowing for pre-existing trends',
    didSig: 'statistically significant',
    didNs: 'not statistically significant',
    preTrend: 'Pre-period trend gap, high vs. low exposure',
    perYear: 'year',
  },
  inequality: {
    kicker: 'The inequality question',
    title: 'Who benefited from the expansion?',
    intro:
      'STEM shares rose in every group, but the starting lines were far apart. The gap between high- and low-SES towns was there before reform cohorts reached university, and it is still there.',
    toggleSes: 'By socioeconomic status',
    toggleExp: 'By math expansion',
    groups: {
      high: 'High-SES towns',
      mid: 'Middle-SES towns',
      low: 'Low-SES towns',
      highExp: 'High math expansion',
      lowExp: 'Low math expansion',
    },
    legendPre: '2017–2019',
    legendPost: '2020–2024',
    gapLabel: 'Gap, top vs. bottom group',
    gapNote: 'Difference between reported group means.',
    chartAria: 'Dumbbell chart of STEM share by group, comparing 2017–2019 with 2020–2024.',
    caveat:
      'These are descriptive averages. They show that socioeconomic differences remained substantial; they do not show that the reform widened or narrowed them. A preliminary model found no statistically detectable difference in the math-to-STEM link for low-SES towns, which is not the same as proving the effect was equal.',
    sesNote: 'SES groups follow the CBS 2015 socioeconomic cluster; low SES = clusters 1–4.',
  },
  takeaway: {
    kicker: 'The takeaway',
    quote:
      'Expanding access to advanced mathematics is an important step. Translating that opportunity into broader access to STEM higher education is a more complex challenge.',
    cols: [
      {
        title: 'What the data show',
        body: 'A clear positive association: towns that expanded 5-unit math saw larger gains in STEM entry.',
      },
      {
        title: 'What remains uncertain',
        body: 'Whether the reform caused those gains. Once differences in underlying trends are considered, the causal evidence weakens.',
      },
      {
        title: 'What it means for policy',
        body: 'Opening the gate to advanced math may not be enough on its own to close socioeconomic gaps in who reaches STEM.',
      },
    ],
  },
  method: {
    kicker: 'Methodology & interpretation',
    title: 'How to read these results',
    items: [
      {
        q: 'Towns, not individual students',
        a: 'The analysis is at the municipality level. Individual students were not tracked from high school to higher education; results describe how changes in a town’s math participation relate to its graduates’ choices.',
      },
      {
        q: 'Exposure is measured, not assigned',
        a: 'There is no official list of which schools joined Give Five or when. Exposure is proxied by each town’s observed growth in 5-unit participation, which reflects realized expansion rather than formal program assignment.',
      },
      {
        q: 'Timing of higher-education entry',
        a: 'Israeli students often begin higher education several years after high school, partly due to military or national service. Outcome windows (2017–2019 vs. 2020–2024) are approximations of when reform cohorts arrive.',
      },
      {
        q: 'The parallel-trends test failed',
        a: 'The simple difference-in-differences estimate (+1.6 pp) assumes high- and low-exposure towns were on the same path. They were not: high-exposure towns were already rising faster. Allowing for that trend shrinks the estimate to about +0.1 pp, statistically indistinguishable from zero.',
      },
      {
        q: 'Association is not causation',
        a: 'Exposure was not randomly assigned and is correlated with socioeconomic status and baseline STEM levels. The +2 to +3 pp relationship is descriptive and robust to observable controls, but it is not a treatment effect.',
      },
      {
        q: 'What counts as STEM',
        a: 'Engineering and architecture; mathematics, statistics and computer science; physical sciences; and biological sciences. The outcome covers all new first-degree students recorded by the CBS, not only selective universities.',
      },
    ],
  },
  paperCard: {
    kicker: 'The full paper',
    label: 'Research paper',
    meta: '24 pages · PDF',
    button: 'Read the Full Research Paper (PDF)',
    lang: 'Paper is in English.',
  },
  footer: {
    rights: 'All findings and figures are drawn from the paper.',
    built: 'Designed as an interactive companion to the research.',
    top: 'Back to top',
  },
}

export type Copy = typeof en

const he: Copy = {
  pp: 'נ״א',
  meta: {
    title: 'יותר מתמטיקה. יותר STEM? | מחקר על "תנו חמש" מאת אסף אלמליח',
  },
  nav: {
    skip: 'דלגו לתוכן',
    langLabel: 'שפה',
    en: 'ENG',
    he: 'עברית',
  },
  hero: {
    eyebrow: 'מדיניות חינוך / ישראל / מחקר 2025',
    line1: 'יותר מתמטיקה.',
    line2a: 'יותר ',
    line2b: 'STEM',
    line2c: '?',
    subtitle:
      'האם הרחבת לימודי המתמטיקה המתקדמת בישראל הובילה ליותר סטודנטים במקצועות STEM, והאם היא סייעה לצמצם פערים חברתיים-כלכליים?',
    by: 'מחקר מאת',
    scroll: 'גללו לסיפור המלא',
    paper: 'לקריאת המחקר (PDF)',
  },
  stat: {
    lead: 'מבוגרי',
    leadStrong: '5 יחידות מתמטיקה',
    lead2: 'המשיכו ללימודי מדעים, הנדסה או מחשבים.',
    compare: 'בקרב בוגרי 4 או 3 יחידות, השיעורים עמדו על כ-30% וכ-13% בהתאמה.',
    barsLabel: 'שיעור הפונים למסלולים מדעיים, לפי רמת המתמטיקה בתיכון',
    units: 'יח״ל',
    source: 'ניתוח של המכון הישראלי לדמוקרטיה, כפי שמצוטט במחקר.',
  },
  challenge: {
    kicker: 'האתגר',
    title: 'בחינה אחת שקובעת מי נכנס',
    p1: 'בגרות במתמטיקה ברמת 5 יחידות היא הרמה הגבוהה ביותר בתיכון. היא תנאי קבלה לרוב המסלולים הסלקטיביים בהנדסה, במדעי המחשב ובמדעים, המסלולים שמובילים להייטק, ענף שמהווה כחמישית מהתוצר של ישראל.',
    p2: 'ובכל זאת, במשך שנים פחות ופחות תלמידים ניגשו אליה. ההשתתפות ירדה בכ-30% בין 2006 ל-2012, והירידה הייתה החדה ביותר בקרב תלמידים מרקע חברתי-כלכלי חלש. בתי ספר קטנים בפריפריה לא הצליחו לפתוח כיתת הקבצה מתקדמת בכלל.',
    declineLabel: 'תלמידי י״ב שסיימו 5 יחידות מתמטיקה',
    declineSource: 'בנק ישראל, כפי שמצוטט במחקר.',
    pull: 'הגישה למתמטיקה מתקדמת הפכה, בשקט, לגישה לתחומים המתגמלים ביותר במשק.',
  },
  reform: {
    kicker: 'הרפורמה',
    title: '"תנו חמש", 2015',
    intro:
      'באוגוסט 2015 השיק משרד החינוך תוכנית לאומית לבלימת הירידה. היעד: להכפיל תוך ארבע שנים את מספר תלמידי 5 יחידות מתמטיקה, מכ-9,700 ב-2014 ליותר מ-18,000.',
    cards: [
      {
        tag: 'נגישות',
        title: 'כיתות קטנות יותר',
        fromTo: ['15', '6'],
        unit: 'מינימום תלמידים לפתיחת כיתת 5 יחידות',
        body: 'הורדת הרף אפשרה לבתי ספר קטנים או מוחלשים להציע את המסלול המתקדם לראשונה.',
      },
      {
        tag: 'משאבים',
        title: 'שעות ומורים',
        fromTo: ['', '~15'],
        unit: 'שעות הוראה שבועיות ממומנות לכל שכבת י״ב',
        body: 'בתי הספר קיבלו גם הכשרות והסמכות למורים, ותמיכה בפעילויות העשרה.',
      },
      {
        tag: 'השתתפות',
        title: 'מפיילוט לתוכנית לאומית',
        fromTo: ['108', '406'],
        unit: 'תיכונים משתתפים, 2015 ← 2018',
        body: 'עד 2018 היו אלה כ-39% מהתיכונים הממלכתיים הרגילים, בליווי קמפיינים ציבוריים ומרתוני מתמטיקה.',
      },
    ],
    note: 'הערכה מוקדמת של בנק ישראל מצאה ששיעור הניגשים לבחינת 5 יחידות עלה בכמעט 3 נקודות אחוז עד 2017, בלי ירידה ניכרת בציונים. השאלה הפתוחה הייתה מה קרה אחר כך.',
  },
  question: {
    kicker: 'שאלת המחקר',
    title: 'האם הרחבת ההשתתפות במתמטיקה מתקדמת מתורגמת ליותר סטודנטים ב-STEM?',
    sub: 'והאם הקשר חזק יותר ביישובים מוחלשים מבחינה חברתית-כלכלית?',
    p1: 'הערכות קודמות נעצרו בשער התיכון. המחקר הזה ממשיך צעד אחד קדימה, להשכלה הגבוהה, באמצעות חיבור בין שני מקורות נתונים רשמיים ברמת היישוב.',
    steps: [
      {
        label: 'תיכון',
        title: 'נתוני בגרות',
        body: 'נתוני בחינות של משרד החינוך לכל בית ספר, 2013–2021, מצרפיים לרמת היישוב.',
        figure: '121,475',
        figureLabel: 'רשומות בחינה ברמת בית הספר',
      },
      {
        label: 'חשיפה',
        title: 'כמה התרחבה המתמטיקה?',
        body: 'השינוי בשיעור 5 היחידות בכל יישוב בין 2013–2014 ל-2016–2019.',
        figure: 'Δ 5 יח״ל',
        figureLabel: 'מתוך הניגשים במתמטיקה',
      },
      {
        label: 'אוניברסיטה ומכללה',
        title: 'מי נכנס ל-STEM?',
        body: 'נתוני הלמ״ס על סטודנטים חדשים לתואר ראשון לפי יישוב מגורים ותחום: שיעור STEM ב-2017–2019 לעומת 2020–2024.',
        figure: '164',
        figureLabel: 'יישובים בהשוואה',
      },
    ],
    contextLabel: 'התמונה הארצית',
    contextBody: 'שיעור STEM הממוצע בקרב סטודנטים חדשים לתואר ראשון (משוקלל אוכלוסייה)',
    contextNote: 'מגמה תיאורית, לא אומדן להשפעת הרפורמה.',
    periodPre: '2017–2019',
    periodPost: '2020–2024',
  },
  finding: {
    kicker: 'הממצא המרכזי',
    figure: '+2 עד +3',
    unit: 'נקודות אחוז',
    caption: 'שיעור STEM גבוה יותר, בקשר לעלייה של 10 נקודות אחוז בהשתתפות במתמטיקה מתקדמת.',
    badge: 'קשר תצפיתי, לא אומדן של השפעה סיבתית',
    chartTitle: 'השינוי המשתמע בשיעור STEM לכל +10 נ״א בהשתתפות ב-5 יחידות',
    chartNote: 'רגרסיות שינוי-על-שינוי על פני 164 יישובים, משוקללות לפי אוכלוסייה. טעויות תקן חסינות בסוגריים.',
    specs: {
      A: 'פשוט',
      B: '+ משתני בקרה',
      C: '+ אפקטים קבועים לאשכול חברתי-כלכלי',
    },
    preferred: 'המודל המועדף',
    coefLabel: 'מקדם',
    read: 'יישובים שבהם יותר תלמידים עברו ל-5 יחידות מתמטיקה שלחו בהמשך חלק גדול יותר מבוגריהם ללימודי STEM. הדפוס נשמר גם אחרי התחשבות ברמת ה-STEM ההתחלתית, במעמד החברתי-כלכלי ובגודל היישוב.',
    timingTitle: 'אבל האם התזמון מצביע על הרפורמה?',
    timingBody:
      'השוואת הפרש-בהפרשים בודקת אם יישובים בעלי חשיפה גבוהה זינקו אחרי 2019, כשמחזורי הרפורמה הגיעו להשכלה הגבוהה. במבט ראשון נראה שכן. אבל יישובים אלה כבר צברו יתרון עוד קודם, בכ-1.1 נקודות אחוז בשנה. כשמביאים בחשבון את המגמה הקיימת, הזינוק שאחרי 2019 כמעט נעלם.',
    didSimple: 'השוואה פשוטה',
    didAdjusted: 'בהתחשב במגמות קודמות',
    didSig: 'מובהק סטטיסטית',
    didNs: 'לא מובהק סטטיסטית',
    preTrend: 'פער המגמה לפני התקופה, חשיפה גבוהה מול נמוכה',
    perYear: 'שנה',
  },
  inequality: {
    kicker: 'שאלת אי-השוויון',
    title: 'מי נהנה מההרחבה?',
    intro:
      'שיעורי ה-STEM עלו בכל הקבוצות, אבל קווי הזינוק היו רחוקים זה מזה. הפער בין יישובים חזקים לחלשים היה קיים לפני שמחזורי הרפורמה הגיעו לאקדמיה, והוא עדיין קיים.',
    toggleSes: 'לפי מעמד חברתי-כלכלי',
    toggleExp: 'לפי הרחבת המתמטיקה',
    groups: {
      high: 'יישובים חזקים',
      mid: 'יישובים בינוניים',
      low: 'יישובים חלשים',
      highExp: 'הרחבה גבוהה',
      lowExp: 'הרחבה נמוכה',
    },
    legendPre: '2017–2019',
    legendPost: '2020–2024',
    gapLabel: 'פער בין הקבוצה העליונה לתחתונה',
    gapNote: 'ההפרש בין ממוצעי הקבוצות המדווחים.',
    chartAria: 'תרשים משקולות של שיעור STEM לפי קבוצה, 2017–2019 לעומת 2020–2024.',
    caveat:
      'אלה ממוצעים תיאוריים. הם מראים שהפערים החברתיים-כלכליים נותרו משמעותיים; הם אינם מראים שהרפורמה הרחיבה או צמצמה אותם. מודל ראשוני לא מצא הבדל מובהק בקשר בין מתמטיקה ל-STEM ביישובים חלשים, וזה לא אותו דבר כמו הוכחה שההשפעה הייתה זהה.',
    sesNote: 'הקבוצות מבוססות על האשכול החברתי-כלכלי של הלמ״ס (2015); חלש = אשכולות 1–4.',
  },
  takeaway: {
    kicker: 'השורה התחתונה',
    quote:
      'הרחבת הגישה למתמטיקה מתקדמת היא צעד חשוב. להפוך את ההזדמנות הזו לגישה רחבה יותר להשכלה גבוהה ב-STEM זה אתגר מורכב יותר.',
    cols: [
      {
        title: 'מה הנתונים מראים',
        body: 'קשר חיובי ברור: יישובים שהרחיבו את לימודי 5 היחידות ראו עלייה גדולה יותר בכניסה ל-STEM.',
      },
      {
        title: 'מה עדיין לא ודאי',
        body: 'האם הרפורמה היא שגרמה לעלייה. כשמתחשבים בהבדלים במגמות הבסיס, הראיות הסיבתיות נחלשות.',
      },
      {
        title: 'מה זה אומר למדיניות',
        body: 'פתיחת השער למתמטיקה מתקדמת אולי אינה מספיקה לבדה כדי לסגור פערים חברתיים-כלכליים במי שמגיע ל-STEM.',
      },
    ],
  },
  method: {
    kicker: 'מתודולוגיה ופרשנות',
    title: 'איך לקרוא את התוצאות',
    items: [
      {
        q: 'יישובים, לא תלמידים בודדים',
        a: 'הניתוח נעשה ברמת היישוב. לא נעשה מעקב אחר תלמידים בודדים מהתיכון להשכלה הגבוהה; התוצאות מתארות כיצד שינויים בהשתתפות במתמטיקה ביישוב קשורים לבחירות של בוגריו.',
      },
      {
        q: 'החשיפה נמדדת, לא מוקצית',
        a: 'אין רשימה רשמית של בתי הספר שהצטרפו ל"תנו חמש" או מתי. החשיפה נמדדת לפי הגידול בפועל בשיעור 5 היחידות בכל יישוב, כלומר התרחבות שהתממשה ולא שיוך רשמי לתוכנית.',
      },
      {
        q: 'התזמון של הכניסה לאקדמיה',
        a: 'בישראל סטודנטים מתחילים לימודים לרוב כמה שנים אחרי התיכון, בין היתר בגלל שירות צבאי או לאומי. חלונות התוצאה (2017–2019 מול 2020–2024) הם קירוב לזמן הגעת מחזורי הרפורמה.',
      },
      {
        q: 'מבחן המגמות המקבילות נכשל',
        a: 'אומדן ההפרש-בהפרשים הפשוט (+1.6 נ״א) מניח שיישובים בעלי חשיפה גבוהה ונמוכה היו באותו מסלול. הם לא היו: יישובים בעלי חשיפה גבוהה כבר עלו מהר יותר. כשמתחשבים במגמה הזו, האומדן מצטמק לכ-+0.1 נ״א, ולא ניתן להבחין בינו לבין אפס.',
      },
      {
        q: 'מתאם אינו סיבתיות',
        a: 'החשיפה לא הוקצתה באקראי והיא מתואמת עם מעמד חברתי-כלכלי ועם רמת ה-STEM ההתחלתית. הקשר של +2 עד +3 נ״א הוא תיאורי ועמיד למשתני בקרה נצפים, אבל הוא אינו אפקט טיפול.',
      },
      {
        q: 'מה נחשב STEM',
        a: 'הנדסה ואדריכלות; מתמטיקה, סטטיסטיקה ומדעי המחשב; מדעים פיזיקליים; ומדעים ביולוגיים. התוצאה כוללת את כל הסטודנטים החדשים לתואר ראשון שמדווחים בלמ״ס, לא רק אוניברסיטאות סלקטיביות.',
      },
    ],
  },
  paperCard: {
    kicker: 'המחקר המלא',
    label: 'מאמר מחקר',
    meta: '24 עמודים · PDF',
    button: 'לקריאת המחקר המלא (PDF)',
    lang: 'המאמר כתוב באנגלית.',
  },
  footer: {
    rights: 'כל הממצאים והנתונים לקוחים מהמחקר.',
    built: 'עוצב כליווי אינטראקטיבי למחקר.',
    top: 'חזרה למעלה',
  },
}

export const copy = { en, he }
export type Lang = keyof typeof copy
