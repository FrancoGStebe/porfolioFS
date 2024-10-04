export const Card = () => {
    return (
        <>
            <h1 className="font-marker text-white text-4xl text-center">Proyectos</h1>
            <div className="flex flex-col justify-center items-center p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg w-full">
  
                    {/* ComiCraft */}
                    <a href="https://comiccraft.vercel.app/">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group cursor-pointer min-h-[400px] flex flex-col">
                          <img src="/comicraft.png" alt="Mountain" className="w-full h-64 object-cover" />
                          <div className="p-6 flex-grow">
                              <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">ComiCraft</h2>
                              <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                                Proyecto grupal del lado del Front-end desarrollado con Next.js, Tailwind CSS para los estilos y TypeScript para la detección temprana de errores. 
                                Disfruta de una amplia selección de cómics y accede a beneficios exclusivos suscribiéndote a una membresía mensual o anual. 
                                Además, tienes la opción de convertirte en creador y ganar seguidores con tus propias historias.
                              </p>
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe y compañeros</span>
                              </div>
                          </div>
                      </div>
                    </a>
  
                    {/* Nadrian'S ecommerce */}
                    <a href="https://github.com/FrancoGStebe/NadrianS_Ecommerce">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group cursor-pointer min-h-[400px] flex flex-col">
                          <img src="/ecommerce.png" alt="Beach" className="w-full h-64 object-cover" />
                          <div className="p-6 flex-grow">
                              <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian&apos;S ecommerce</h2>
                              <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                                Proyecto Full Stack desarrollado con Next.js para el Front-end, utilizando Tailwind CSS para el diseño responsivo y TypeScript para una mejor identificación de errores en tiempo de desarrollo. 
                                En el Back-end, se utiliza PostgreSQL como base de datos relacional. Los usuarios pueden registrarse, iniciar sesión, agregar productos al carrito, gestionar su compra y completar la transacción sin inconvenientes.
                              </p>
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                          </div>
                      </div>
                    </a>
  
                    {/* Nadrian'S Barber */}
                    <a href="https://github.com/FrancoGStebe/Nadrians_Barber">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group cursor-pointer min-h-[400px] flex flex-col">
                          <img src="/peluqueria.png" alt="Forest" className="w-full h-64 object-cover" />
                          <div className="p-6 flex-grow">
                              <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian&apos;S Barber</h2>
                              <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                                Proyecto desarrollado con React y Vite, utilizando TypeScript para una mejor gestión de errores y CSS para los estilos. 
                                En el Back-end, se emplea PostgreSQL como base de datos. Los usuarios pueden registrarse, iniciar sesión, y reservar o cancelar turnos en la barbería de manera fácil y rápida.
                              </p>
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                          </div>
                      </div>
                    </a>
  
                    {/* Nadrian'S Cine */}
                    <a href="https://github.com/FrancoGStebe/NadrianS_Cine">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group cursor-pointer min-h-[400px] flex flex-col">
                          <img src="/cine.png" alt="City" className="w-full h-64 object-cover" />
                          <div className="p-6 flex-grow">
                              <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian&apos;S Cine</h2>
                              <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                                Proyecto desarrollado con HTML y CSS para el Front-end y MongoDB en el Back-end. 
                                Los usuarios pueden subir su película favorita, la cual se mostrará en la página de inicio para que todos puedan visualizarla.
                              </p>
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                          </div>
                      </div>
                    </a>
  
                </div>
            </div>
        </>
    );
  };
  
