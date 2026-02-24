

import { testimonialsData } from "../assets/assets/assets.js"


const Testimonial = () => {

  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mt-4 font-semibold bg-linear-to-r from-blue-900 to-red-400 bg-clip-text text-transparent">
        Customer Testomonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div key={index} className=" drop-shadow-lg max-w-lg m-auto shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 bg-white rounded-xl hover:scale-105 transition-all duration-700">
            <p className="text-4xl text-black">’’</p>
            <p className="text-sm text-black">{item.message}</p>
            <div className="flex items-center gap-3 mt-6">
              <img src={item.image} alt="image" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial


