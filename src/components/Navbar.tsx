import logo from '../assets/LOGO.jpeg';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                {/* Logo */}
                <div className='flex items-center space-x-1 group cursor-pointer'>
                    <div>
                        <img src={logo} alt="Paradox Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl"/>
                    </div>
                    <span className='text-lg sm:text-xl md:text-2xl'>
                        <span className='text-white'>Paradox</span>
                        <span className='text-green-700 font-bold'> TECH</span>
                    </span>
                </div>

                {/*Navigation links  */}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a href='#features' className='text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>
                    <a href='#pricing' className='text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>
                    <a href='#testimonials' className='text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
                </div>

                <button className='md:hidden'>
                    <Menu className='w-5 h-5 sm:w-6 sm:h-6'/>
                </button>

            </div>
        </div>
    </nav>
  )
}

export default Navbar