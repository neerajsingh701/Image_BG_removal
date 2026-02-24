import logo from '../assets/assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Cookies from "js-cookie";


const NavBar = () => {

  const navigate = useNavigate();
  const { utoken, userData, setuToken, setUserData } = useContext(AppContext);
  const handleLogout = () => {
    Cookies.remove("token");
    setuToken("");
    setUserData(null);
    navigate('/login');
  }


  return (
    <div className="flex justify-between items-center p-4 bg-[#ffffff] text-[#111827]">
      <img onClick={() => navigate('/')} src={logo} alt="javascript-logo" className="w-40 sm:w-50 lg:w-100 rounded-full cursor-pointer" />


      <div className="flex items-center">
        {utoken && userData ? (
          <>

            <span className='font-semibold'>Hello, <span className=' font-semibold text-red-500 tracking-tight'>{userData.username}</span> </span>
            <button onClick={handleLogout} className='border-white ml-2 px-3 py-1 text-x1 rounded-md bg-[#2563EB] text-[#ffffff] font-semibold hover:bg-[#1D4ED8]  hover:scale-105 transition-all duration-700'>Logout</button>
          </>

        ) : (<>
          <button onClick={() => navigate('/login')} className='border-none mx-2 px-3 py-1 text-x1 rounded-md bg-[#2563EB] text-[#ffffff] font-semibold hover:bg-[#1D4ED8]  hover:scale-105 transition-all duration-700  '>Login</button>
          <button onClick={() => navigate('/register')} className='border-none px-3 py-1 text-x1 rounded-md bg-[#2563EB] text-[#ffffff] font-semibold hover:bg-[#1D4ED8]  hover:scale-105 transition-all duration-700 '>Sign Up</button>
        </>

        )

        }
      </div>
    </div>
  )
}

export default NavBar
