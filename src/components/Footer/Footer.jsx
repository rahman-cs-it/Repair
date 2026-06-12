import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col space-y-10 justify-center m-10 border-t border-slate-200 pt-10">

      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-blue-600 transition-colors" to="/">Home</Link>
        <Link className="hover:text-blue-600 transition-colors" to="/services">Services</Link>
        <Link className="hover:text-blue-600 transition-colors" to="/about">About Us</Link>
        <Link className="hover:text-blue-600 transition-colors" to="/contact">Contact</Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5">
        <a href="https://www.facebook.com/wasifurrahman.siddique/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="text-gray-500 hover:text-blue-600 transition-colors">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rahman-cs-it/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-gray-500 hover:text-blue-600 transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/siddiquewasifur/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="text-gray-500 hover:text-pink-500 transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://x.com/rahman_cs_it" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
          className="text-gray-500 hover:text-black transition-colors">
          <FaXTwitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 font-medium text-sm">
        &copy; {currentYear} FrostFix Appliances. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer