'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useRouter, usePathname } from 'next/navigation'
import { Fragment } from 'react'

export default function LanguageSwitcher({ currentLang, dict }) {
  const router = useRouter()
  const pathname = usePathname()
  const switchLanguage = (newLang) => {
    // Remove current language from pathname
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '') || '/'

    // For Spanish (default), don't add prefix
    if (newLang === 'es') {
      router.push(pathWithoutLang === '/' ? '/' : pathWithoutLang)
    } else {
      // For other languages, add prefix
      router.push(`/${newLang}${pathWithoutLang}`)
    }
  }

  const languages = [
    { code: 'es', name: dict.language.spanish, flag: '🇪🇸' },
    { code: 'en', name: dict.language.english, flag: '🇺🇸' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-10 justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50">
          {currentLanguage.name}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="origin-top-center absolute right-0 z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
      >
        <div className="py-1">
          {languages.map((language) => (
            <MenuItem key={language.code}>
              <button
                onClick={() => switchLanguage(language.code)}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {language.name}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
