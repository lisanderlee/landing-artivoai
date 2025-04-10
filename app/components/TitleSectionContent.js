import Flag from "./Flag";
export default function TitleSection({ title, color, headline, description }) {
  return (
    <>
      <div className="mx-auto max-w-4xl text-center">
        <div>
          <Flag text={title} variant={color} />
        </div>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white- sm:text-6xl">
          {headline}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-white sm:text-xl/8">
        {description}
      </p>
    </>
  );
}
