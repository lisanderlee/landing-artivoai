import { Outfit } from 'next/font/google'
import '../globals.css'
import { getDictionary } from './dictionaries'

const outfit = Outfit({
  subsets: ['latin'],

  display: 'swap',
})

export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.home.title,
    description: dict.home.description,
    other: {
      'Content-Language': lang,
    },
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={dict}>
      <body className={`${outfit.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
