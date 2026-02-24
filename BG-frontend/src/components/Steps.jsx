
import { assets } from "../assets/assets/assets"

const Steps = () => {
  return (
    <div className="mx-4 lg-mx-44 py-12">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-linear-to-r from-blue-900 to-red-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 bg-white rounded-xl  pb-10  hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt="Upload icon" className="max-w-9 mt-6" />
          <div className="">
            <p className="text-x1 font-medium">Upload Image </p>
            <p className="text-sm text-black mt-1">Select the image you want to edit. Out tool support various formats, including JPG, PNG, and more, ensuring a seamless experience.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 bg-white rounded-xl  pb-10  hover:scale-105 transition-all duration-500">
          <img src={assets.remove_icon} alt="Remove icon" className="max-w-9 mt-6" />
          <div>
            <p className="text-x1 font-medium">Remove Background </p>
            <p className="text-sm text-black mt-1">With a single click, out intelligent alogorithm will remove the background, leaving you with a clean and professional image ready for use.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 bg-white rounded-xl  pb-10  hover:scale-105 transition-all duration-500">
          <img src={assets.download_icon} alt="Download icon" className="max-w-9 mt-6" />
          <div>
            <p className="text-x1 font-medium">Download Image </p>
            <p className="text-sm text-black mt-1">Once you &apos;re satisfied with the result, simply download your image in high resolution.It's ready to be used for any personal use</p>
          </div>
        </div>

        {/* hera we have to import the assests for my steps to make data... */}
      </div>
      <p className="mt-12 mb-8 sm:mb-20 text-center text-xl md:text-1xl pb-1 lg:text-2xl font-semibold  bg-linear-to-r from-blue-900 to-red-400 bg-clip-text text-transparent">Experience the fastest and most accurate background removal tool---simplifying your workflow and saving you time</p>
    </div>

  )
}

export default Steps

// 1.41