
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import video from '../assets/assets/video.mp4'

const Header = () => {

  const { removeBg, utoken } = useContext(AppContext)
  const navigate = useNavigate()

  // onchanging condition
  const handleUpload = (file) => {
    if (!utoken || utoken === "null" || utoken === "undefined") {
      navigate("/login");
      return
    }

    removeBg(file);

  }




  return (
    <div className="flex items-center rounded-xl justify-between bg-[#ffffff] text-[#111827] max-sm:flex-col-reverse  gap-y-10 px-4 mb-8 mt-2 mx-4 lg:px-44 sm:mt-4 py-6">
      {/* left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl font-bold  text-[#111827] leading-tight">Remove the
          <br className="max-md:hidden" />
          <span className="bg-linear-to-r font-rubik from-blue-600 to-fuchsia-300 bg-clip-text text-transparent"> background </span>from <br className="max-md:hidden" /> images for free
        </h1>

        <p className="my-6 text-[15px] text-[#111827] w-[90%]">
          Transform your photos effortlessly! With UnifiedMentor BG-removal software, you can easily
          eliminate backgrounds from images,enhancing your creativity and making you visuals pop.
          <br className="mx-md:hidden" />Whether for social media, marketing, or personal projects, our tool is designed for everyone, ensuring high-quality results in just a few clicks.
        </p>

        <div>
          <input
            onChange={(e) => handleUpload(e.target.files[0])}
            type="file"
            id="upload1"
            accept="image/*"
            hidden
          />


          <button
            onClick={() => {
              if (!utoken) {
                navigate("/login")
              }
              else {
                document.getElementById("upload1").click();
              }
            }}
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-linear-to-r font-rubik from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white">
            <span>Upload Image</span>
          </button>
        </div>
      </div>


      {/* Right sid e  */}


    </div>
  )
}

export default Header

// 1:25
