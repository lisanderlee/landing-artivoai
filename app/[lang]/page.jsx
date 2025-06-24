import NavBar from './components/navbar'
import { getDictionary } from './dictionaries'

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const getLocalizedPath = (path) => {
    return lang === 'es' ? path : `/${lang}${path}`
  }

  return (
    <div className="relative bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat p-4">
      <div className="rounded-[20px] bg-[radial-gradient(68.61%_51.48%_at_13.55%_20.28%,_rgba(253,253,253,0.49)_0%,_rgba(231,231,231,0.49)_100%)]">
        <NavBar dict={dict} lang={lang} />
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
  )
}
