'use server'

import { cookies, headers } from 'next/headers'

import { defaultLocale, Locale, locales } from '@/i18n/config'

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE'

export const getUserLocale = async () => {
  const languageInCookies = (await cookies()).get(COOKIE_NAME)

  if (languageInCookies) {
    return languageInCookies.value
  }

  const rawLanguage = (await headers()).get('accept-language')

  // Check if the header exists and split it by comma to parse the different languages
  if (rawLanguage) {
    const languages = rawLanguage.split(',').map((lang) => {
      // Languages are usually specified along with a priority, which we need to remove
      const [language] = lang.split(';')

      return language
    })

    // Find a language that exists in the locales array
    const userLanguage = languages.find((language) => locales.includes(language))

    // If a language is found, return it. Otherwise, return the defaultLocale
    return userLanguage || defaultLocale
  }

  // If there are no headers, return the default
  return defaultLocale
}

export const setUserLocale = async (locale) => {
  ;(await cookies()).set(COOKIE_NAME, locale)
}
