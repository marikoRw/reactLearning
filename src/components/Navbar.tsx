import { useState } from 'react';
import logo from '../assets/LOGO.jpeg';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">

        {/* menu when clicked mobileMenuIsOpen(false) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                {/* Logo */}
                <div className='flex items-center space-x-1 group cursor-pointer'>
                    <div>
                        <img src={logo} alt="Paradox Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl sm:rounded-3xl"/>
                    </div>
                    <span className='text-lg sm:text-xl md:text-2xl'>
                        <span className='text-white'>Paradox</span>
                        <span className='text-green-700 font-bold'> TECH</span>
                    </span>
                </div>

                {/*Navigation links  */}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a 
                        href='#features' 
                        className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >Features</a>

                    <a 
                        href='#pricing' 
                        className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >Pricing</a>

                    <a 
                        href='#testimonials' 
                        className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >Testimonials</a>

                    <a 
                        href='#footer' 
                        className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >Footer</a>
                </div>

                {/* X & humburger menu */}
                <button className='md:hidden p-2 text-gray-300 hover:text-white' onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                    {mobileMenuIsOpen ? 
                    (<X className='w-5 h-5 sm:w-6 sm:h-6'/>
                    ) : (
                        <Menu className='w-5 h-5 sm:w-6 sm:h-6'/>
                    )}
                </button>

            </div>

        </div>

        {/* menu when clicked mobileMenuIsOpen(true) */}
        {mobileMenuIsOpen && 
        <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300'>
            
            <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
                <a 
                    href='#features'
                    onClick={() => setMobileMenuIsOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                >Features</a>

                <a 
                    href='#pricing' 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                >Pricing</a>

                <a 
                    href='#testimonials' 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                >Testimonials</a>

                <a 
                    href='#footer' 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                >Footer</a>
            </div>

        </div>}

    </nav>
  )
}

export default Navbar