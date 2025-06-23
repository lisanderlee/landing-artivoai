import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { getUserLocale } from '@/lib/locale'
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  //   const requested = await requestLocale;
  //   const locale = hasLocale(routing.locales, requested)
  //     ? requested
  //     : routing.defaultLocale;
  const locale = await getUserLocale()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
