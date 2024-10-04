import hand_icon from '../assets/hand_icon.png'
import arrows from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'
const Hero = () => {
  return (
   <main className="font-poppins  md:h-lvh mt-10 flex flex-col-reverse md:flex-row items-center md:bg-custom-gradient bg-custom-gradient2 gap-2 justify-center w-full  mx-auto my-0.5 p-2">
        <div className="md:w-2/5 w-full ml-10 lg:ml-48 my-10 flex flex-1 flex-col">
            <h2 className="font-bold text-lg text-stone-500 uppercase  mb-5 ">
                new arrivals only
            </h2>
            <div className='font-bold  pb-2 mb-4 text-3xl md:text-5xl capitalize space-y-5'>
                <div className=" gap-3 flex items-center">
                    <p > new</p>
                    <img src={hand_icon} alt="hand"  className='h-11 w-11 '/>
                </div>
            <p className='text-green-300'>collections</p>
            <p>for everyone</p>
            </div>
            
            <button className='flex cursor-pointer text-center justify-center items-center gap-4 w-52 shadow-md shadow-white  rounded-3xl  bg-red-500 '>
               <p className='py-3 px-2 capitalize text-white'>
                least collection
               </p>
               <img src={arrows} alt="arrow" className='w-4 h-3' />
            </button>
      
        </div>
        <div className="md:w-3/5 flex flex-1 items-center justify-center">
            <div className='lg:h-[650px] md:h-[750px] mx-auto'>
                <img src={hero_img} alt="" className='h-full w-full object-contain   ' />
            </div>
        </div>
   </main>
  )
}

export default Hero