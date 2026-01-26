import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import logo from '../assets/LOGO.jpeg';

interface footerLink {
    Product: string[];
    Company: string[];
    Resources: string[];
    Legal: string[];
}

const footerLinks: footerLink = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className='max-w-7xl mx-auto px-4 xm:px-6 lg:px-8 py-8 sm:py12 lg:py-16'>

        {/* main part of footer hidden on mobile */}
        <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-12 mb-8 sm:mb-12'>

          <div className='col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left'>

            {/* logo and name */}
            <div className='flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4'>
              <div className='rounded-lg'>
                <img src={logo} alt="Paradox Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl sm:rounded-3xl"/>
              </div>
              <span className='text-base sm:text-lg md:text-xl'>
                <span className='text-white'>Paradox</span>
                <span className='text-green-700 font-bold'> TECH</span>
              </span>
            </div>

            {/* Small yap for the footer */}
            <p className='text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base'>Build and Deploy a Fully Responsive Modern Website using React</p>

            {/* section of logos */}
            <div className='flex justify-center sm:justify-start space-x-3 sm:space-x-4'>
              <a href='#' className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200'>
                <Twitter className='w-5 h-5 sm:w-5 sm:h-5'/>
              </a>

              <a href='#' className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200'>
                <Github className='w-5 h-5 sm:w-5 sm:h-5'/>
              </a>

              <a href='#' className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200'>
                <Linkedin className='w-5 h-5 sm:w-5 sm:h-5'/>
              </a>

              <a href='#' className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200'>
                <Mail className='w-5 h-5 sm:w-5 sm:h-5'/>
              </a>
            </div>

          </div>

          {/* the links */}
          <div className='sm:col-span-3 lg:col-span-4'>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className='font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base'>
                    {category}
                  </h3>
                  <ul className='space-y-2 sm:space-y-3'>
                    {links.map((link: string) => (
                      <li key={link}>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-xl'>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* little words */}
        <div className='flex justify-between text-xs sm:text-sm text-gray-400'>
            <div>
              @ 2025 ParadoxTECH All rights reserved
            </div>

            <div className='space-x-3 sm:space-x-4'>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer