import Flag from "./Flag";




export default function TickerCard({ title, images }) {
  return (
    <div className="flex flex-col items-start gap-y-2 ml-2">
      <Flag text={title} variant="purple" />
     
      <div className="flex flex-row gap-x-2 bg-violet-700 p-2 rounded-xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-[350px] h-[350px] object-cover rounded-xl"
          />
        ))}
      </div>
  
  
    </div>
  );
}
