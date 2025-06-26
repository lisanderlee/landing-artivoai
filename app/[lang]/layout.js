import { Outfit } from 'next/font/google'
import '../globals.css'
import { getDictionary } from './dictionaries'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: `Artivo-${dict.meta.title}`,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    other: {
      'Content-Language': lang,
    },
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  console.log('Current Language:', lang)
  return (
    <html lang={lang}>
      <body className={`${outfit.className} antialiased`}>
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
