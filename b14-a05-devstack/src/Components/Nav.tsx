const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button className="lg:hidden">☰</button>

        <img src="assets/logo-text.png" alt="DevStack" className="w-24 lg:w-auto" />

       <ul className="hidden gap-6 lg:flex">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li> 
        </ul>

        <div className="flex items-center gap-2 lg:gap-4">
          <button>Sign In</button>

          <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-2 font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;