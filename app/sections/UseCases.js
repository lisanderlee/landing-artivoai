import CaseCard from "../components/CaseCard";
import creativos_image from "@/public/images/creativos.png"
import agencias_image from "@/public/images/agencias.png"
import tienda_image from "@/public/images/tienda.png"
export default function UseCases() {
  return (
    <>
    <div className="relative  " > 
      <div className="  -mt-40">
        <div className=" isolate overflow-visible">
          <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8  ">
              <CaseCard
                title="Para Creativos y Diseñadores"
                image={creativos_image}
                body="Explora nuevas ideas y crea variaciones de imágenes con IA en segundos."
                url="Url"
              />
              <CaseCard
                title="Para Tiendas Online"
                image={tienda_image}
                body="Mejora la conversión en tu tienda online con contenido visual optimizado."
                url="Url"
              />
              <CaseCard
                title="Para Agencias y Equipos de Marketing"
                image={agencias_image}
                body="Ahorra tiempo y entrega contenido visual impactante más rápido."
                url="Url"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
