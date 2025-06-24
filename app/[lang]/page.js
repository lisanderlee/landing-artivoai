import { useTranslations } from 'next-intl'
import NavBar from './components/navbar'

import Footer from '../sections/Footer'
import { getDictionary } from './dictionaries'

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
    <div className="bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
      <NavBar dict={dict} lang={lang} />
      {/* <Hero />
      <UseCases />
      <Ticker />
      <Workflows />
      <PriceSection />
      <Testimonials /> */}
      {/* <Faq /> */}
      <Footer />
    </div>
  )
}
