import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Outfit } from 'next/font/google'
import '../globals.css'

const outfit = Outfit({
  subsets: ['latin'],

  display: 'swap',
})

export const metadata = {
  title: 'Artivo AI - Your AI Art Studio',
  description:
    'Create stunning AI-generated art effortlessly with Artivo AI. Explore our features, pricing, and community today!',
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body className={`${outfit.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
