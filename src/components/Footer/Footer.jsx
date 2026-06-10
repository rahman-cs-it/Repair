import React from 'react'
import { Link } from 'react-router-dom' // 1. Imported Link for fast routing

function Footer() {
    // 2. Automatically get the current year so it never goes out of date
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col space-y-10 justify-center m-10 border-t border-slate-200 pt-10">

            {/* Navigation Links */}
            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-blue-600 transition-colors" to="/">Home</Link>
                <Link className="hover:text-blue-600 transition-colors" to="/services">Services</Link>
                
                <Link className="hover:text-blue-600 transition-colors" to="/about">About Us</Link>
                <Link className="hover:text-blue-600 transition-colors" to="/contact">Contact</Link>
                <Link className="hover:text-blue-600 transition-colors" to="/gallery">Gallery</Link>
            </nav>

            {/* Social Icons */}
            <div className="flex justify-center space-x-5">
                {/* External links stay as <a> tags! */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                </a>
            </div>
            
            {/* Copyright */}
            <p className="text-center text-gray-500 font-medium text-sm">
                &copy; {currentYear} Perfect Refrigeration. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer