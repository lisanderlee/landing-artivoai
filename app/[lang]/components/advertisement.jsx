'use client'

import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  ImageIcon,
  Film,
  Focus,
  Replace,
  Grip,
  Ratio,
  BotMessageSquare,
  Candy,
  ImagePlusIcon,
  WandSparkles,
} from 'lucide-react'

export const Advertisement = ({ dict }) => {
  return (
    <section className="m-10 text-[#1D0D27] lg:mb-30">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <p className="rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]">
          TODO EN UN SOLO LUGAR
        </p>
        <h3 className="mt-6 max-w-5xl text-6xl font-medium">
          Herramientas especializadas para potenciar tu flujo de trabajo.
        </h3>
        <p className="mt-2.5 max-w-2xl text-[20px] leading-6.5 text-black">
          Accede a las mejores erramientas ya los modelos mas abanzados con una sola subcripcion.
        </p>
      </div>
      <div className="mt-12.5 grid grid-cols-3 items-center rounded-[20px] bg-gradient-to-b from-[#38203F] to-[#1B0C25] lg:px-20 lg:pt-20">
        <div className="col-span-1 space-y-8 text-white">
          <h6 className="text-6xl font-medium">Genera la imagen perfecta con IA</h6>
          <p className="text-[20px]">
            Experimenta con estilos, fondos y composiciones ilimitadas para crear imágenes .
          </p>
          <button className="rounded-[50px] bg-[#7A57D2] px-4 py-2.5 text-lg">
            Comienza a Crear
          </button>
        </div>
        <div className="col-span-2 ml-10 flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-row-reverse">
              <div className="max-h-[674px] w-md">
                <Image
                  width={1200}
                  height={800}
                  src="/images/ad-jar.png"
                  alt="Generated Jar"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="mt-25 -mr-20 max-h-[674px] w-[420px]">
                <Image
                  width={1200}
                  height={800}
                  src="/images/ad-shoe.png"
                  alt="Generated Jar"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <ImageIcon className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.image}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Film className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.video}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Focus className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.background}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Replace className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.product}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Grip className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.upscale}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                    <Ratio className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white text-zinc-800">
                  <p>{dict.home.tools.resize}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="grid max-w-xl -translate-y-20 grid-cols-5 items-end gap-4 lg:gap-2">
            {/* Prompt Input Area */}
            <div className="col-span-5 mx-auto w-full -translate-y-20 gap-2 rounded-[20px] lg:col-span-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="rounded-md bg-zinc-800 p-2.5 text-zinc-50 transition-colors">
                  <BotMessageSquare className="h-4 w-4" />
                </div>
                <div className="w-full rounded-[20px] shadow-sm">
                  <div className="grid max-h-36 min-h-28 w-full flex-1 grid-cols-2 grid-rows-3 items-end gap-1 rounded-[20px] border-none bg-zinc-800 p-2.5 shadow-sm lg:min-h-32 lg:grid-cols-5 lg:p-3">
                    <textarea
                      rows={3}
                      placeholder={dict.home.input.placeholder}
                      className="col-span-5 row-span-2 mb-4 resize-none border-0 bg-transparent p-0 font-sans text-sm text-white shadow-none placeholder:text-zinc-400 focus:ring-0 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0 sm:mb-0 lg:col-span-3"
                    />
                    <div className="row-span-1 hidden h-full w-full lg:col-span-2" />

                    {/* Bottom Left Controls */}
                    <div className="font-outfit col-span-3 row-span-1 flex items-center gap-2 font-medium capitalize">
                      <div className="flex w-2/3 flex-wrap gap-1 lg:w-full lg:gap-2">
                        {/* Size Dropdown */}
                        <button className="flex h-[21px] min-h-0 items-center justify-center gap-0.5 rounded-2xl border border-transparent bg-[#404040] px-2.5 py-[3px] text-[11px] leading-0 text-zinc-50 hover:border-zinc-600">
                          Size
                        </button>

                        {/* Quality Dropdown */}
                        <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#404040] px-2.5 py-[3px] text-[11px] leading-0 text-zinc-50 hover:border-zinc-600">
                          Quality
                        </button>

                        {/* Length Dropdown */}

                        <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#404040] px-2.5 py-[3px] text-[11px] leading-0 text-zinc-50 hover:border-zinc-600">
                          Length
                        </button>

                        {/* Definition Dropdown */}
                        <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#404040] px-2.5 py-[3px] text-[11px] leading-0 text-zinc-50 hover:border-zinc-600">
                          Definition
                        </button>
                      </div>
                    </div>

                    {/* Bottom Right Controls */}
                    <div className="font-outfit col-span-2 row-span-2 flex items-end justify-end gap-2">
                      <button className="flex h-14 w-14 flex-col items-center justify-center gap-0 rounded-md border-none bg-[#404040] p-0 text-[#A1A1A7] hover:bg-zinc-600 xl:rounded-[20px]">
                        <ImagePlusIcon className="h-3 w-3" />
                        <span className="hidden text-[8px] xl:block">Background</span>
                      </button>

                      {/* Product Image Selector */}

                      <button className="flex h-14 w-14 flex-col items-center justify-center gap-0 rounded-md border-none bg-[#404040] p-0 text-[#A1A1A7] hover:bg-zinc-600 xl:rounded-[20px]">
                        <Candy className="h-3 w-3" />
                        <span className="hidden text-[8px] xl:block">Product</span>
                      </button>

                      <button
                        size="sm"
                        className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white px-3 font-sans text-zinc-900 shadow-lg hover:bg-white hover:shadow-sm disabled:cursor-not-allowed disabled:bg-white disabled:text-zinc-500 disabled:opacity-100"
                      >
                        <WandSparkles className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Example Prompt */}
              <div className="mt-2.5 flex items-center justify-center gap-4.5">
                <div className="rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50">
                  Prompt Examples
                </div>
                <div className="rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50">
                  Prompt Examples
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
