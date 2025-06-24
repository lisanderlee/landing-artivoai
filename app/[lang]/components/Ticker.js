import Marquee from 'react-fast-marquee'
import TickerCard from './TickerCard'
import { useTranslations } from 'next-intl'

export default function Ticker() {
  const t = useTranslations('tickers')
  const tickerKeys = t.raw('ticker_1.images')
  console.log(tickerKeys)
  return (
    <div className="relative py-36">
      <Marquee autoFill={true}>
        <TickerCard title={t('ticker_1.title')} images={tickerKeys} />
        <TickerCard title={t('ticker_2.title')} images={tickerKeys} />
        <TickerCard title={t('ticker_3.title')} images={tickerKeys} />
      </Marquee>
    </div>
  )
}
