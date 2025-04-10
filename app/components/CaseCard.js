import Flag from "./Flag";
import Image from "next/image";
export default function CaseCard({ title, image, body, url }) {
  console.log({ image });
  return (
    
    <div className="rounded-2xl bg-white  shadow-xl  ">
      <div className="overflow-hidden rounded-lg">
        <div className="p-6 flex flex-col gap-y-5">
          <div className="mb-4">
            <Flag text={title} variant="gray" />
          </div>
          <div>
            <Image
              alt=""
              src={image}
              width={500}
              height={500}
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="text-base/7 text-gray-600">{body}</div>
          <div>
            <a href={url} className="text-indigo-600 hover:text-indigo-500">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
