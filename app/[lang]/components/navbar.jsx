'use client'

import Image from 'next/image'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import LanguageSwitcher from './language-switcher'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

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

const navItems = [
  { name: 'Home', href: '/', dictKey: 'home' },
  { name: 'Use Cases', href: '/use-cases', dictKey: 'use_cases' },
  { name: 'Tools', href: '/tools', dictKey: 'tools' },
  { name: 'Pricing', href: '/pricing', dictKey: 'pricing' },
]

export default function NavBar({ dict, lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const getLocalizedPath = (path) => {
    return lang === 'es' ? path : `/${lang}${path}`
  }
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setHasScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 right-0 z-10 w-full py-6"
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-[1730px] items-center justify-between">
        <motion.div
          className="flex lg:flex-1"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href={getLocalizedPath('/')} className="-m-1.5 p-1.5">
            <span className="sr-only">Artivo Ai</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Image width={117} height={32} alt="" src="/images/logo.svg" className="w-auto" />
            </motion.div>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </motion.button>
        </div>
        <motion.div
          className="hidden lg:flex lg:gap-x-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <NavItem key={index} href={getLocalizedPath(item.href)} index={index}>
              {dict.navigation[item.dictKey] || item.name}
            </NavItem>
          ))}
          {/* <Link
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
          </Link> */}
        </motion.div>
        <motion.div
          className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <LanguageSwitcher currentLang={lang} dict={dict} />
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(53, 30, 60, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="cursor-pointer overflow-hidden rounded-[50px] bg-[#351E3C] px-6 py-4 leading-6.5 font-semibold text-white transition-colors hover:bg-gray-900 hover:shadow-md"
          >
            <span className="relative z-10"> {dict.buttons.start_creating}</span>
          </motion.button>
        </motion.div>
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
    </motion.header>
  )
}

const NavItem = ({ href, children, index }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
    >
      <Link
        href={href}
        className="relative text-xl leading-6.5 font-normal text-black hover:text-gray-700"
      >
        <motion.span
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-[#7A57D2]"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}
