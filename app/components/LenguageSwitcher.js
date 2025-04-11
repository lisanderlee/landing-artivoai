"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // current route
  const currentLocale = pathname.split("/")[1]; // get 'en' or 'es'

  const getNewPath = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-10 justify-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900  ring-gray-300 hover:bg-gray-50">
          {currentLocale.toUpperCase()}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2  origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {routing.locales.map((locale) => (
            <MenuItem key={locale}>
              <a
                href={getNewPath(locale)}
                disabled={locale === currentLocale}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {locale.toUpperCase()}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
