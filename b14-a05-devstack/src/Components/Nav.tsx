

const Nav = () => {
  return (
     <nav>
      <div className="mx-auto px-6 py-5 flex items-center justify-between">

        <div>
         <img src="assets/logo-text.png" alt="" />
        </div>

        <div className="flex gap-8 font-medium text-gray-600">

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

      
        <div className="flex gap-4">

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