import Image from 'next/image'
import NavBar from './components/navbar'
import { getDictionary } from './dictionaries'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Image as ImageIcon, Film, Focus, Replace, Grip, Ratio } from 'lucide-react'

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const getLocalizedPath = (path) => {
    return lang === 'es' ? path : `/${lang}${path}`
  }

  return (
    <div className="relative bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat p-4">
      <div className="rounded-[20px] bg-[radial-gradient(68.61%_51.48%_at_13.55%_20.28%,_rgba(253,253,253,0.49)_0%,_rgba(231,231,231,0.49)_100%)] p-6 lg:px-20">
        <NavBar dict={dict} lang={lang} />
        <section className="mx-auto mb-32 flex max-w-[1730px] items-center justify-between gap-6 pt-16.5 lg:gap-10">
          <div className="w-full lg:w-8/12">
            <h1 className="text-8xl font-normal text-black">
              <span>{dict.home.title.pre}</span>
              <span className="text-[#7A57D2]">{dict.home.title.highlight}</span>
              <span>{dict.home.title.post}</span>
            </h1>
            <p className="mt-4 w-2/3 text-lg text-[#585858] lg:mt-8">{dict.home.description}</p>
            <button className="mt-6 cursor-pointer rounded-[50px] bg-white px-4.5 py-4 text-lg font-semibold text-[#7A57D2] transition-colors hover:bg-gray-100 lg:mt-10">
              {dict.buttons.start_creating}
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="hidden w-4/5 flex-row-reverse items-end justify-start lg:flex">
              <Image
                width={700}
                height={900}
                src="/images/image-tool-lg.webp"
                alt={dict.home.image_alts.image_lg}
                className="max-w-[493px] rounded-[36px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/images/image-tool-can.png"
                alt={dict.home.image_alts.image_sm}
                className="-mr-10 -mb-10 h-60 w-60 rounded-[38px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <ImageIcon className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.image}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Film className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.video}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Focus className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.background}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Replace className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.product}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Grip className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.upscale}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Ratio className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.resize}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>
        <p className="text-center text-[15px] text-[#878787]">
          Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux Pro -
          Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux Pro -
          Flux - ChatGPT - VEO 3 - Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux{' '}
        </p>
      </div>
      <section></section>
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
