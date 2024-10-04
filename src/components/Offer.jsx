import exculsive from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <section 
    className="flex flex-col-reverse  md:flex-row   items-center lg:w-[65%] md:h-[60vh]  m-auto px-0 lg:py-36 my-10  md:mb-36 md:bg-custom-gradient bg-custom-gradient2 "
    >
        <div className="flex flex-1 flex-col justify-center ml-7 lg:items-center">
            <h1 className='  mb-4 capitalize  text-[#171717] md:text-5xl lg:text-7xl font-semibold  text-4xl  '>exclusive</h1>
            <h1 className='  mb-4 capitalize  text-[#171717] md:text-5xl lg:text-7xl font-semibold  text-4xl  '>offers for you</h1>
            <p className='uppercase text-[#171717] md:text-xl   font-semibold '>only the best seller for you</p>
            <button className="w-72 h-16 rounded-full  border-none text-white text-xl font-medium mt-8 cursor-pointer capitalize bg-[#ff4141] "> claim now</button>
        </div>
        <div className=" flex flex-1 items-center justify-end md:pt-12 h-[60vh] md:h-auto">
            <div className='w-[80%]'> 
               <img src={exculsive} alt="" /></div>
            </div>
    </section>
  )
}

export default Offer