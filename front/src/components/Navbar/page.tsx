export const Navbar = () => {
  return (
    <header
      className="fixed inset-x-0 bottom-6 z-30 mx-auto flex justify-center items-center w-28 h-14 bg-white shadow backdrop-blur-lg rounded-full border border-gray-100"
    >
      <div className="flex items-center justify-between w-full h-full px-2">
        <a
          href="#"
          aria-label="Home"
          className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:ring-2 hover:ring-gray-300 transition"
        >
          <img className="h-6 w-6" src="/home.png" alt="Home" />
        </a>
        <a
          href="#proyectos" 
          aria-label="Proyectos"
          className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:ring-2 hover:ring-gray-300 transition"
        >
          <img className="h-6 w-6" src="/proyecto.png" alt="Proyectos" />
        </a>
      </div>
    </header>
  );
};
