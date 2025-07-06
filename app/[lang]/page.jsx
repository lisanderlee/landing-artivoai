import { getDictionary } from './dictionaries'
import { Cards } from './components/cards'
import { UseCases } from './components/use-cases'
import { Advertisement } from './components/advertisement'
import { RoadMap } from './components/road-map'
import { Pricing } from './components/pricing'
import { MarqueeText } from './components/marquee-text'
import { Faqs } from './components/faqs'
import { Footer } from './components/footer'
import { HeroWrapper } from './components/hero-wrapper'

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroWrapper dict={dict} lang={lang} />
      <Cards dict={dict} />
      <UseCases dict={dict} />
      <Advertisement dict={dict} />
      <RoadMap dict={dict} />
      <Pricing dict={dict} />
      <MarqueeText dict={dict} />
      <Faqs dict={dict} />
      <Footer dict={dict} />
    </>
  )
}
