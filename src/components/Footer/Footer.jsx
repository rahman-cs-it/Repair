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
                
            </nav>

            {/* Social Icons */}
            <div className="flex justify-center space-x-5">
                {/* External links stay as <a> tags! */}
                <a href="https://www.facebook.com/wasifurrahman.siddique/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/rahman-cs-it/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/siddiquewasifur/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                
                <a href="https://x.com/rahman_cs_it" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
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