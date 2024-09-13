import { Card } from "@/components/Cards/page";
import { Descripcion } from "@/components/Descripcion/page";
import { Foto } from "@/components/Fotuli/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow mt-20"> 
          <div className="w-1/2">
            <Foto />
          </div>
          <div className="w-1/2 mt-28 mr-20"> 
            <Descripcion />
          </div>
        </div>
        
        <div id="proyectos" className="flex-grow mt-96"> 
          <Card />
        </div>
      </div>
    </>
  );
}
