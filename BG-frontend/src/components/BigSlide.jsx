import { useState } from "react"
import photoBefore from '../assets/photo-before.jpg'
import photoAfter from '../assets/photo-after.png'

const BigSlide = () => {


  const [sliderposition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) =>{
    setSliderPosition(e.target.value)
  }



  return (
    <div className="pb-10 md:py-4 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl pb-1 lg:text-4xl font-semibold bg-linear-to-r from-blue-900 to-red-400 bg-clip-text text-transparent">
        Remove Background with High <br /> Quality and Accuracy.
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto  shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 bg-white rounded-xl">
        {/* background image */}
        <img src={photoBefore} alt="beforeImage" className="absolute top-0 left-0 w-full h-full select-none" style={{ clipPath: `inset(0 ${100.2 - sliderposition}% 0 0)` }} />
        {/* foreGround image  */}
        <img src={photoAfter} alt="afterImage" style={{ clipPath: `inset(0 0 0 ${sliderposition}%)` }} className="select-none" />

        {/* slider */}
        <input onChange={handleSliderChange} className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full z-10 slider  " type="range" min={0} max={100} value={sliderposition} />

      </div>

    </div>
  )
}

export default BigSlide
