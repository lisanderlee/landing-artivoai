import Flag from "./Flag";
import TextButton from "./TextButton";
import FlatButton from "./FlatButton";
import Image from "next/image";

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
    <div className="bg-stone-900 p-8 w-[1300]  rounded-3xl  ">
      <div
        className={`mx-auto flex  flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse lg:gap-x-10" : "lg:flex-row"
        } gap-x-5 justify-between items-center`}
      >
        {" "}
        <div className="flex flex-col gap-y-6 lg:w-2/3 sm:w-full lg:mb-0 sm:mb-15">
          <div className="flex lg:flex-row gap-x-3 items-center md:flex-row flex-col ">
            <div className="rounded-full flex items-center  px-5 py-1 bg-gray-100">
              {icon}
            </div>
            <div className="flex">
              <Flag text={flag} variant="white" />
            </div>
          </div>
          <h2 className=" lg:text-5xl/14 font-semibold  tracking-wide text-white sm:text-4xl">
            {title}
          </h2>
          <p className="  max-w-4/5 font-light text-xl/8 mb-5 text-gray-300">
            {description}
          </p>
          <div className="flex flex-row  items-center gap-x-10">
            <FlatButton text={cta_primary} />
            <TextButton text={cta_secondary} />
          </div>
        </div>
        <div className="flex flex-col flex-2/3 gap-y-3">
          <div
            className={`grid gap-4 ${
              images.length === 1
                ? "grid-cols-1"
                : images.length === 2
                ? "grid-cols-2"
                : "grid-cols-2"
            }`}
          >
            {images.map((image, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={image}
                  width={800}
                  height={800}
                  alt={alt}
                  className={`w-full h-full object-cover rounded-xl ${
                    images.length === 1
                      ? "aspect-[4/3]"
                      : images.length === 2
                      ? "aspect-[2/3]"
                      : "aspect-square"
                  }`}
                />
                {images.length > 1 && (
                  <p className="text-gray-500 mt-2 text-sm">
                    {index % 2 === 0 ? "Antes" : "Después"}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
