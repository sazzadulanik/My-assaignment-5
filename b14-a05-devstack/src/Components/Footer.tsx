const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-600 text-xs font-bold text-white">
              DS
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              Dev Stack
            </h2>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">
              GitHub
            </a>

            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>

            <a href="#" className="hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Product
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-gray-900">
              Home
            </a>
            <a href="#" className="block hover:text-gray-900">
              Technologies
            </a>
            <a href="#" className="block hover:text-gray-900">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Company
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-gray-900">
              About
            </a>
            <a href="#" className="block hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="block hover:text-gray-900">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Legal
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;