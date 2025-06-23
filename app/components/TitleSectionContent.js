import Flag from './Flag'
export default function TitleSection({ title, color, headline, description }) {
  return (
    <>
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-10">
          <Flag text={title} variant={color} />
        </div>
        <p className="text-white- mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {headline}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-light text-pretty text-white sm:text-xl/8">
        {description}
      </p>
    </>
  )
}
