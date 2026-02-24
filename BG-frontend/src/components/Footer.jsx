

import logo from '../assets/assets/logo.svg'
import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-[#ffffff] gap-4 px-4 mb-4">
      <img src={logo} alt="logo" className='w-40 sm:w-50 lg:w-100 rounded-full cursor-pointer' />
      <p className='flex-1  pl-4 text-sm text-black max-sm:hidden rounded-full'>
        All Right Reserved &copy; {new Date().getFullYear()} | NEERAJ SINGH.com

      </p>
      <div className="flex gap-1 ">
        {/* google icon or linkedin icon */}
        <a href="https://www.linkedin.com/in/neerajsingh521/">
          <img src={assets.linkedin_logo1} alt="linkedin" className=' w-16 h-16 cursor-pointer transition-transform duration-700  ease-out hover:scale-110 select-none' />
        </a>
        <a href="https://github.com/neerajsingh701">
          <img src={assets.github_logo1} alt="github" className=' w-16 h-16 cursor-pointer transition-transform duration-700  ease-out hover:scale-110 select-none' />
        </a>
        <a href="#">
          <img src={assets.twitter_logo1} alt="twitter" className=' w-16 h-16 cursor-pointer transition-transform duration-700  ease-out hover:scale-110  select-none' />
        </a>
      </div>
    </div>
  )
}

export default Footer
