import Flag from './Flag'
import Image from 'next/image'
import TextButton from './TextButton'
import { ChevronRight } from 'lucide-react'

export default function CaseCard({ title, image, body, cta }) {
  console.log()
  return (
    <div className="rounded-2xl bg-white shadow-xl">
      <div className="overflow-hidden rounded-lg">
        <div className="flex flex-col gap-y-5 p-6">
          <div className="mb-4">
            <Flag text={title} variant="gray" />
          </div>
          <div>
            <Image
              alt={title}
              src={image}
              width={500}
              height={500}
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="text-lg font-normal text-gray-600">{body}</div>
          <div>
            <TextButton text={cta} variant="purple" url="#" />
          </div>
        </div>
      </div>
    </div>
  )
}
