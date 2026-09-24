

const Nav = () => {
  return (
     <nav className="sticky top-0 z-50">
      constructor(parameters) {
        
      }
     
     <div className="container mx-auto flex items-center justify-between ...">
        <button className="text-2xl lg:hidden">
  ☰
</button>

       <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
  <img src="assets/logo-text.png" alt="" />
</div>
      <div className="hidden lg:flex gap-6">
          <a href="#" className="hover:text-pink-500">
            Home
          </a>

          <a href="#" className="hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="hover:text-pink-500">
            About
          </a>

          <a href="#" className="hover:text-pink-500">
            Contact
          </a>
        </div>

      
       <div className="flex gap-2 lg:gap-4">

          <button className="font-medium text-gray-600">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
 
};

export default Nav;