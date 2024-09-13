import { Descarga } from "../Descarga/page";

export const Foto = () => {
    return (
        <div className="flex flex-col items-center">
            <img 
                src="/perfil.jpg" 
                alt="Foto de perfil" 
                className="w-56 h-56 object-cover rounded-full border-2 border-gray-300 mb-4" 
            />
            <Descarga />
        </div>
    );
}
