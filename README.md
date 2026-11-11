# More Math. More STEM?

An interactive, bilingual (English / Hebrew) research story for the paper
**“Advanced High School Math and the STEM Pipeline: Does Israel’s ‘Give-Five’ Reform Increase STEM Entry and Reduce Socioeconomic Gaps?”**
by Assaf Elmaliah (November 2025).

Built with React, Vite and TypeScript. No backend, no analytics. Charts are hand-built HTML/SVG, so there is no charting library to load.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Open `?lang=he` or `?lang=en` to force a language. Otherwise the site remembers the visitor's last choice, or falls back to their browser language.

## Where things live

| What | File |
| --- | --- |
| **Every number on the site** (with the table/page it comes from) | `src/data/research.ts` |
| All text, in English and Hebrew | `src/i18n/copy.ts` |
| Page sections | `src/components/Sections.tsx` |
| Charts | `src/components/charts.tsx` |
| Language toggle and header | `src/components/Header.tsx` |
| Styles, colors, fonts | `src/index.css` (colors are variables at the top) |
| The paper PDF | `public/Elmaliah-2025-Give-Five-STEM.pdf` |
| Social share image | `public/og-image.png` (1200×630) |
| SEO and share tags | `index.html` |

### Updating figures
Edit `src/data/research.ts` only. The charts and labels read from it. The paper reports **period averages only** (2017–2019 and 2020–2024), so do not add yearly values.

### Replacing the PDF
Put the new file at `public/Elmaliah-2025-Give-Five-STEM.pdf` (same name). If you rename it, update `pdfPath` in `src/data/research.ts`. If the file is missing, the site shows a notice instead of a broken download button.

### Editing text
Change the matching keys in both the `en` and `he` objects in `src/i18n/copy.ts`. TypeScript will flag a key that exists in one language but not the other.

## Deploying

The repo includes `netlify.toml`, so Netlify needs no extra settings.

1. In Netlify, choose **Add new site → Import an existing project → GitHub**, then pick this repository.
2. Netlify reads the build command (`npm run build`) and the publish folder (`dist`) from `netlify.toml`. Click **Deploy**.
3. Every push to `main` redeploys automatically.

After the first deploy, put your final site URL into the `og:image` / `twitter:image` tags in `index.html` as an absolute URL (for example `https://your-site.netlify.app/og-image.png`). LinkedIn needs the full URL to show the preview image.
