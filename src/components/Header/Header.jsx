import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom' // Standard React Router Link & NavLink
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  // Reusable dynamic class generator for active navigation links
  const getLinkClass = ({ isActive }) =>
    `text-sm/6 font-semibold transition-colors ${isActive ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-600'
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors ${isActive ? 'text-blue-600 bg-blue-50/50 font-bold' : 'text-gray-900 hover:bg-slate-50'
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        {/* LOGO AREA (DESKTOP) */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 focus:outline-none">
            <span className="sr-only">FrostFix Appliances</span>
            {/* Added the img tag with src here */}
            <img
              src="/Frostfixicon2.webp"
              alt="FrostFix Appliances Logo"
              className="h-12 w-auto object-contain"
              width="400"
              height="48"
            // Note: We DO NOT add loading="lazy" here because this logo is at the very top of the page
            />
            <span className="font-bold text-xl text-slate-900 hidden sm:block">FrostFix Appliances</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={getLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:+917506320321" className="text-sm/6 font-semibold text-white bg-blue-600 px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-all shadow-sm flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            +91 75063 20321
          </a>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={closeMenu}>
              <span className="sr-only">FrostFix Appliances</span>
              {/* Added the img tag with src here for mobile as well */}
              <img
                src="/Frostfixicon.webp"
                alt="FrostFix Appliances Logo"
                className="h-8 w-auto object-contain"
                width="400"
                height="32"
              />
              <span className="font-bold text-lg text-slate-900">FrostFix</span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={getMobileLinkClass}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={closeMenu}
                  className={getMobileLinkClass}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={getMobileLinkClass}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={getMobileLinkClass}
                >
                  Contact
                </NavLink>
              </div>
              <div className="py-6">
                <a
                  href="tel:+917506320321"
                  className="-mx-3 flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-base/7 font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}