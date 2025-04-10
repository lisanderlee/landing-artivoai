import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Flag from "./Flag";
const features = [
  {
    title: "PRODUCTO EN USO",
    name: "Ubica tu producto en cualquier tipo de escena",
    description:
      "Genera sesiones de moda impactantes visualiza tus prendas con total creatividad sin un equipo de producción.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "FONDO DE PRODUCTO",
    name: "Fotografia de productos para tu e-commerce",
    description:
      "Transforma fotos simples en imágenes llamativas con fondos personalizados en un solo clic, optimizadas para captar la atención en e-commerce.",
    icon: LockClosedIcon,
  },
];
import FlatButton from "./FlatButton";
export default function WorkflowCard() {
  return (
    <div className=" bg-black py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-neutral-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-12 xl:px-12">
          <div className="mx-auto flex flex-row gap-x-5 items-center">
            <div className="flex flex-col gap-y-6 w-1/2">
              <div>
                <Flag text="PRODUCTO EN USO" variant="white" />
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Workflows especializados para potenciar tu flujo de trabajo.
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Escribe prompts, navega y accede a todas las herramientas en
                español, con soporte en tu idioma cuando lo necesites.
              </p>
              <div>
            
                <FlatButton />
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-y-3">
              <div className="flex flex-row gap-x-3">
                <div className="flex flex-col gap-y-2">
                  <div>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="aspect-[4/5] rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <p>Antes</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="aspect-[4/5] rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <p>Antes</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-3">
                <div className="flex flex-col gap-y-2">
                  <div>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="aspect-[4/5] rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <p>Antes</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="aspect-[4/5] rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <p>Antes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
