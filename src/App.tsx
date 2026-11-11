import { Header } from './components/Header'
import {
  Challenge,
  Finding,
  Footer,
  Hero,
  Inequality,
  Method,
  PaperCard,
  Question,
  Reform,
  StatBand,
  Takeaway,
} from './components/Sections'
import { useRevealAll } from './lib/hooks'
import { useLang } from './lib/lang'

export default function App() {
  const { lang } = useLang()
  useRevealAll()
  return (
    <div className="app" key={lang}>
      <Header />
      <main id="main">
        <Hero />
        <StatBand />
        <Challenge />
        <Reform />
        <Question />
        <Finding />
        <Inequality />
        <Takeaway />
        <Method />
        <PaperCard />
      </main>
      <Footer />
    </div>
  )
}
