import Flag from "./Flag";
import Image from "next/image";
import a from "@/public/a.svg";
export default function TickerCard({ title, images }) {
  return (
    <div className=" relative flex flex-col items-start gap-y-2 ml-2">
      <Flag text={title} variant="purple" icon="yes" />

      <div className="flex flex-row gap-x-2 bg-violet-700 p-2 rounded-xl">
        <div className=" absolute bg-gray-100 rounded-full p-3 top-48  left-[335px] ">
       
          <Image alt="Artivo logo" src={a} width={30} height={30} />
        </div>

        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={800}
            height={800}
            alt={title}
            className="w-[350px] h-[350px] object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
