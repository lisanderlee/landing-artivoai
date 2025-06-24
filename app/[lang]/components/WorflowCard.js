import Flag from './Flag'
import TextButton from './TextButton'
import FlatButton from './FlatButton'
import Image from 'next/image'

export default function WorkflowCard({
  flag,
  icon,
  title,
  alt,
  images,
  description,
  cta_primary,
  cta_secondary,
  reverse,
}) {
  return (
    <div className="w-[1300] rounded-3xl bg-stone-900 p-8">
      <div
        className={`mx-auto flex flex-col lg:flex-row ${
          reverse ? 'lg:flex-row-reverse lg:gap-x-10' : 'lg:flex-row'
        } items-center justify-between gap-x-5`}
      >
        {' '}
        <div className="flex flex-col gap-y-6 sm:mb-15 sm:w-full lg:mb-0 lg:w-2/3">
          <div className="flex flex-col items-center gap-x-3 md:flex-row lg:flex-row">
            <div className="flex items-center rounded-full bg-gray-100 px-5 py-1">{icon}</div>
            <div className="flex">
              <Flag text={flag} variant="white" />
            </div>
          </div>
          <h2 className="font-semibold tracking-wide text-white sm:text-4xl lg:text-5xl/14">
            {title}
          </h2>
          <p className="mb-5 max-w-4/5 text-xl/8 font-light text-gray-300">{description}</p>
          <div className="flex flex-row items-center gap-x-10">
            <FlatButton text={cta_primary} />
            <TextButton text={cta_secondary} />
          </div>
        </div>
        <div className="flex flex-2/3 flex-col gap-y-3">
          <div
            className={`grid gap-4 ${
              images.length === 1
                ? 'grid-cols-1'
                : images.length === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-2'
            }`}
          >
            {images.map((image, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={image}
                  width={800}
                  height={800}
                  alt={alt}
                  className={`h-full w-full rounded-xl object-cover ${
                    images.length === 1
                      ? 'aspect-[4/3]'
                      : images.length === 2
                        ? 'aspect-[2/3]'
                        : 'aspect-square'
                  }`}
                />
                {images.length > 1 && (
                  <p className="mt-2 text-sm text-gray-500">
                    {index % 2 === 0 ? 'Antes' : 'Después'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
