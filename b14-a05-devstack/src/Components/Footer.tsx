
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">

        
        <div>
          <div className="flex items-center gap-2">
          <img src="/logo-text.png" alt="DevStack" className="w-24"/>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
           Curated tools, technologies, and resources for developers building modern software.
          </p>

          <ul className="mt-5 flex gap-5 text-sm text-gray-500">
            <li className="hover:text-gray-900">
              GitHub
            </li>

            <li className="hover:text-gray-900">
              Twitter
            </li>

            <li className="hover:text-gray-900">
              LinkedIn
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Product
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">

            <li className="block hover:text-gray-900">Home</li>

            <li className="block hover:text-gray-900">Technologies </li>

            <li className="block hover:text-gray-900"> Projects </li>

          </ul>
        </div>

      
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">

            <li className="block hover:text-gray-900">About</li>

            <li className="block hover:text-gray-900">Contact</li>

            <li className="block hover:text-gray-900">Careers </li>

          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Legal
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">

            <li className="block hover:text-gray-900"> Privacy Policy </li>

            <li className="block hover:text-gray-900">Terms of Service</li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
       <div className="mx-auto flex flex-col gap-3 max-w-7xl px-6 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex gap-5">
            
            <li className="hover:text-gray-700">Privacy</li>

            <li className="hover:text-gray-700">Terms</li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;