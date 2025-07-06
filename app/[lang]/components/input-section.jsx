import { BotMessageSquare, Candy, ImagePlusIcon, WandSparkles } from 'lucide-react'

export const InputSection = ({ dict }) => {
  return (
    <section className="grid -translate-y-20 grid-cols-7 items-end gap-4 lg:gap-2">
      <div className="col-span-0 lg:col-span-1"></div>

      <div className="col-span-7 mx-auto w-full max-w-4xl gap-2 rounded-[20px] lg:col-span-5">
        <div className="flex w-full flex-col items-start gap-2 lg:flex-row">
          <div className="rounded-md bg-white p-2.5 text-zinc-950 transition-colors">
            <BotMessageSquare className="h-4 w-4" />
          </div>
          {/* Prompt Input Area */}
          <div className="w-full rounded-[20px] shadow-sm">
            <div className="grid max-h-36 min-h-28 w-full flex-1 grid-cols-2 grid-rows-3 items-end gap-1 rounded-[20px] border-none bg-white p-2.5 shadow-sm lg:min-h-32 lg:grid-cols-5 lg:p-3">
              <textarea
                rows={3}
                disabled
                placeholder={dict.home.input.placeholder}
                className="col-span-5 row-span-2 mb-4 resize-none border-0 bg-transparent p-0 font-sans text-sm shadow-none focus:ring-0 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0 sm:mb-0 lg:col-span-3"
              />
              <div className="row-span-1 hidden h-full w-full lg:col-span-2" />

              {/* Bottom Left Controls */}
              <div className="font-outfit col-span-3 row-span-1 flex items-center gap-2 font-medium capitalize">
                <div className="flex w-2/3 flex-wrap gap-1 lg:w-full lg:gap-2">
                  {/* Size Dropdown */}
                  <button className="flex h-[21px] min-h-0 items-center justify-center gap-0.5 rounded-2xl border border-transparent bg-[#EBEBEB] px-2.5 py-[3px] text-[11px] leading-0 text-[#414141] hover:border-zinc-300">
                    Size
                  </button>

                  {/* Quality Dropdown */}
                  <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#EBEBEB] px-2.5 py-[3px] text-[11px] leading-0 text-[#414141] hover:border-zinc-300">
                    Quality
                  </button>

                  {/* Length Dropdown */}

                  <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#EBEBEB] px-2.5 py-[3px] text-[11px] leading-0 text-[#414141] hover:border-zinc-300">
                    Length
                  </button>

                  {/* Definition Dropdown */}
                  <button className="h-[21px] min-h-0 gap-0.5 rounded-2xl border border-transparent bg-[#EBEBEB] px-2.5 py-[3px] text-[11px] leading-0 text-[#414141] hover:border-zinc-300">
                    Definition
                  </button>
                </div>
              </div>

              {/* Bottom Right Controls */}
              <div className="font-outfit col-span-2 row-span-2 flex items-center justify-end gap-2">
                <button className="flex h-10 w-10 flex-col items-center justify-center gap-0 rounded-md border-none bg-[#DDDDDD] p-0 text-[#414141] hover:bg-zinc-400 xl:h-[71px] xl:w-[71px] xl:rounded-[20px]">
                  <ImagePlusIcon className="h-3 w-3 lg:h-6 lg:w-6" />
                  <span className="hidden text-[8px] xl:block">Background</span>
                </button>

                {/* Product Image Selector */}

                <button className="flex h-10 w-10 flex-col items-center justify-center gap-0 rounded-md border-none bg-[#DDDDDD] p-0 text-[#414141] hover:bg-zinc-400 xl:h-[71px] xl:w-[71px] xl:rounded-[20px]">
                  <Candy className="h-3 w-3 lg:h-6 lg:w-6" />
                  <span className="hidden text-[8px] xl:block">Product</span>
                </button>

                <button
                  size="sm"
                  className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white px-3 font-sans text-zinc-900 shadow-lg hover:bg-white hover:shadow-sm disabled:cursor-not-allowed disabled:bg-white disabled:text-zinc-500 disabled:opacity-100 lg:rounded-2xl xl:h-[71px] xl:w-28 xl:px-7"
                >
                  <WandSparkles className="h-4 w-4" />
                  <span className="hidden xl:inline">Generate</span>
                </button>
              </div>
            </div>
            {/* Prompt Suggestions Carousel */}
            {/* <Carousel
              hidePagination
              className="mt-2 w-[calc(100vw-1rem)] max-w-4xl md:w-full lg:mt-4"
              options={OPTIONS}
            >
              {SLIDES.map((slide, index) => (
                <button
                  onClick={() => setPrompt(slide)}
                  className="max-w-2xl min-w-0 flex-[0_0_calc(40%-0.5rem)] shrink-0 transform-gpu cursor-pointer rounded-md border border-zinc-200 bg-zinc-50 px-2 py-2 text-center font-sans text-sm font-medium hover:bg-zinc-100 md:flex-[0_0_calc(25%-1.25rem)] md:px-4 md:pl-4 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                  key={index}
                >
                  <span className="line-clamp-1">{slide}</span>
                </button>
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
      <div className="col-span-0 lg:col-span-1"></div>
    </section>
  )
}
