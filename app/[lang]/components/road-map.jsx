import { PlugZap, RefreshCcwDot, Shrink, Shuffle } from 'lucide-react'
import Image from 'next/image'

export const RoadMap = ({ dict }) => {
  return (
    <section className="mx-auto my-10 max-w-[1730px] px-10 text-[#1D0D27] lg:mt-10 lg:mb-30">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <p className="rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]">
          UNA INTEGRACION CON TODO EL AI
        </p>
        <h3 className="mt-6 max-w-4xl text-6xl font-medium">API para empresas super poderasa.</h3>
        <p className="mt-2.5 max-w-2xl text-[20px] leading-6.5 text-black">
          Integra una sola ves y deja que artivo te traiga los mejores modelso sin tener que hacer
          nada.
        </p>
      </div>

      <div className="relative mt-12 flex h-full items-center justify-between gap-7 rounded-[20px] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-11 py-8">
        <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-[89px]" />

        <Image
          src="/images/logo-icon-dark.svg"
          alt="logo"
          width={100}
          height={100}
          className="relative h-24 w-24"
        />
      </div>
      <div className="mt-5 flex items-center justify-around gap-30 text-2xl text-zinc-950">
        <div className="my-4 flex items-center gap-3.5">
          <PlugZap className="h-6 w-6" />
          Una integracion.
        </div>
        <div className="my-4 flex items-center gap-3.5">
          <Shrink className="h-6 w-6" />
          Todos los modelos.
        </div>
        <div className="my-4 flex items-center gap-3.5">
          <RefreshCcwDot className="h-6 w-6" />
          Procesamiento en lote.
        </div>
        <div className="my-4 flex items-center gap-3.5">
          <Shuffle className="h-6 w-6" />
          Workflows personalizados.
        </div>
      </div>
    </section>
  )
}
