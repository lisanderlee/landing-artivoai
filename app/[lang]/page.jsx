import NavBar from './components/navbar'
import { getDictionary } from './dictionaries'
import { HeroSection } from './components/hero-section'
import { InputSection } from './components/input-section'
import { Cards } from './components/cards'
import { UseCases } from './components/use-cases'
import { Advertisement } from './components/advertisement'
import { RoadMap } from './components/road-map'
import { Pricing } from './components/pricing'
import { MarqueeText } from './components/marquee-text'
import { Faqs } from './components/faqs'
import { Footer } from './components/footer'

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <div className="bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat p-4">
        <div className="rounded-[20px] bg-[radial-gradient(68.61%_51.48%_at_13.55%_20.28%,_rgba(253,253,253,0.49)_0%,_rgba(231,231,231,0.49)_100%)] px-6 lg:pr-10 lg:pl-20">
          <NavBar dict={dict} lang={lang} />
          <HeroSection dict={dict} />

          <p className="text-center text-[15px] text-[#878787]">
            Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux Pro -
            Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux Pro -
            Flux - ChatGPT - VEO 3 - Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux{' '}
          </p>
        </div>
        {/* <Hero />
      <UseCases />
      <Ticker />
      <Workflows />
      <PriceSection />
      <Testimonials /> */}
        {/* <Faq /> */}
        {/* <Footer /> */}
      </div>
      <InputSection dict={dict} />
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
