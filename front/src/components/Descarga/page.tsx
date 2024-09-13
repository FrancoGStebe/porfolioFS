"use client";

export const Descarga = () => {
    return (
        <div>
            <button
                type="button"
                className="flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => window.open('/cv.pdf', '_blank')}
            >
                <img 
                    src="/descarga.png" 
                    alt="Icono de descarga" 
                    className="w-5 h-5 mr-2"
                />
                Descargar CV
            </button>
        </div>
    )
}
