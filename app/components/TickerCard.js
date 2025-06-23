import Flag from './Flag'
import Image from 'next/image'
import a from '@/public/a.svg'
export default function TickerCard({ title, images }) {
  return (
    <div className="relative ml-2 flex flex-col items-start gap-y-2">
      <Flag text={title} variant="purple" icon="yes" />

      <div className="flex flex-row gap-x-2 rounded-xl bg-violet-700 p-2">
        <div className="absolute top-48 left-[335px] rounded-full bg-gray-100 p-3">
          <Image alt="Artivo logo" src={a} width={30} height={30} />
        </div>

        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={800}
            height={800}
            alt={title}
            className="h-[350px] w-[350px] rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  )
}
