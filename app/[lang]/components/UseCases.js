import CaseCard from './CaseCard'
import creativos_image from '@/public/images/creativos.png'
import agencias_image from '@/public/images/agencias.png'
import tienda_image from '@/public/images/tienda.png'
import { useTranslations } from 'next-intl'

export default function UseCases() {
  const t = useTranslations('use_cases')

  return (
    <>
      <div className="relative">
        <div className="-mt-40">
          <div className="isolate overflow-visible">
            <div className="mx-auto max-w-[1300px] px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <CaseCard
                  title={t('creatives_designers.title')}
                  image={t('creatives_designers.image')}
                  body={t('creatives_designers.description')}
                  cta={t('creatives_designers.cta')}
                />
                <CaseCard
                  title={t('online_stores.title')}
                  image={t('online_stores.image')}
                  body={t('online_stores.description')}
                  cta={t('online_stores.cta')}
                />
                <CaseCard
                  title={t('marketing_agencies.title')}
                  image={t('marketing_agencies.image')}
                  body={t('marketing_agencies.description')}
                  cta={t('marketing_agencies.cta')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
