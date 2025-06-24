import Image from 'next/image'
import FlatButton from './FlatButton'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import LanguageSwitcher from './language-switcher'

const products = [
  {
    name: 'Dueños de Tiendas Online',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Agencias y Equipos de Marketing',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Social Media Managers',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Creativos y Diseñadores',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Especialistas en Moda',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default async function NavBar({ dict, lang }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const getLocalizedPath = (path) => {
    return lang === 'es' ? path : `/${lang}${path}`
  }

  return (
    <header className="sticky top-0 z-10 w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1780px] items-center justify-between p-6 lg:px-20"
      >
        <div className="flex lg:flex-1">
          <Link href={getLocalizedPath('/')} className="-m-1.5 p-1.5">
            <span className="sr-only">Artivo Ai</span>
            <Image width={117} height={32} alt="" src="/images/logo.svg" className="w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            // onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          <Link
            href={getLocalizedPath('/')}
            className="text-xl leading-6.5 font-normal text-black hover:text-gray-700"
          >
            {dict.navigation.home}
          </Link>
          <Link
            href={getLocalizedPath('/')}
            className="text-xl leading-6.5 font-normal text-black hover:text-gray-700"
          >
            {dict.navigation.use_cases}
          </Link>
          <Link
            href={getLocalizedPath('/')}
            className="text-xl leading-6.5 font-normal text-black hover:text-gray-700"
          >
            {dict.navigation.tools}
          </Link>
          <Link
            href={getLocalizedPath('/')}
            className="text-xl leading-6.5 font-normal text-black hover:text-gray-700"
          >
            {dict.navigation.pricing}
          </Link>
        </div>
        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          <LanguageSwitcher currentLang={lang} dict={dict} />
          <div>
            <button className="rounded-[50px] bg-[#351E3C] px-6 py-4 leading-6.5 font-semibold text-white">
              {dict.buttons.start_creating}
            </button>
          </div>
        </div>
      </nav>
      {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={120}
                height={31}
                alt="Artivo AI Logo"
                src="/images/logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Casos de Uso
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Workflows
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Precios
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
    </header>
  )
}
