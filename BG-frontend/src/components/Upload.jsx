

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"



const Upload = () => {

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
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mt-4 font-semibold bg-linear-to-r from-blue-900 to-red-400 bg-clip-text text-transparent py-5">
        See the magic. Try now!
      </h1>

      <div className="text-center mb-24">
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
  )
}

export default Upload
