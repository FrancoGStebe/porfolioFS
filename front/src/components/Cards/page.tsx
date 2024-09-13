export const Card = () => {
  return (
      <>
          <h1 className="font-marker text-white text-4xl text-center">Proyectos</h1>
          <div className="flex flex-col justify-center items-center p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg w-full">
                  {/* Card 1 */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group">
                      <img src="/comicraft.png" alt="Mountain" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">ComiCraft</h2>
                          <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                              Proyecto grupal creado con next.js, talwind para los estilos y typeScript para la identificacion temprana de errores.
                          </p>
                          <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe y compañeros</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group">
                      <img src="https://images.unsplash.com/photo-1506748686214e9df14f6d3f1" alt="Beach" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian'S ecommerce</h2>
                          <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                              vehicula elit. Nunc et ex at turpis rutrum viverra.
                          </p>
                          <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                              <span className="text-gray-600 transition-colors duration-300 group-hover:text-gray-400">3 hours ago</span>
                          </div>
                      </div>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group">
                      <img src="https://images.unsplash.com/photo-1522630733443-4d6bfb8a8710" alt="Forest" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian'S Barber</h2>
                          <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                              vehicula elit. Nunc et ex at turpis rutrum viverra.
                          </p>
                          <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                              <span className="text-gray-600 transition-colors duration-300 group-hover:text-gray-400">4 hours ago</span>
                          </div>
                      </div>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:bg-gray-800 group">
                      <img src="https://images.unsplash.com/photo-1516640975561-57b5732f91c6" alt="City" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">Nadrian'S Cine</h2>
                          <p className="text-gray-700 leading-tight mb-4 transition-colors duration-300 group-hover:text-gray-300">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                              vehicula elit. Nunc et ex at turpis rutrum viverra.
                          </p>
                          <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                  <img src="/perfil.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                  <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-white">Franco Stebe</span>
                              </div>
                              <span className="text-gray-600 transition-colors duration-300 group-hover:text-gray-400">5 hours ago</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};


