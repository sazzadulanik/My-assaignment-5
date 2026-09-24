

const Nav = () => {
  return (
     <nav>
      
    <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-5">
       <button className="text-xl lg:hidden">
  ☰
</button>
     <img
  src="assets/logo-text.png"
  alt=""
  className="w-24 lg:w-auto"
/>
      <ul className="hidden lg:flex gap-6">

          <li className="hover:text-pink-500"> Home </li>

          <li className="hover:text-pink-500"> Technologies </li>

          <li className="hover:text-pink-500"> Projects</li>

          <li className="hover:text-pink-500"> About </li>

          <li className="hover:text-pink-500"> Contact</li>
          
        </ul>

      
     <div className="flex items-center gap-1.5 lg:gap-4">

          <button className="font-medium text-gray-600">
            Sign In
          </button>

         <button className="px-3 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
 
};

export default Nav;