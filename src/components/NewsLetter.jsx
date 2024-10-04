
const NewsLetter = () => {
  return (
    <section 
    className="lg:w-[65%] md:w-[85%] md:bg-custom-gradient bg-custom-gradient2 gap-8 flex flex-col h-[50vh]  items-center md:px-0 px-2 py-5 lg:py-36 md:py-20 lg:mb-36 mb-10 md:my-20 m-auto justify-center  "
    >
        <h1 className="capitalize lg:text-6xl md:text-4xl text-xl font-semibold text-[#452245] "> get exculsive offer in your email</h1>
        <p className="capitalize text-xl text-[#454545] w-[90%] mx-auto text-center"> subscribe to our NewsLetter and stay updated</p>
        <div className="flex w-full items-center justify-between bg-white md:w-[650px] lg:w-[730px] border rounded-full border-[#3e3e3e] h-16">
            <label htmlFor="email" className="absolute  left-[9999999px]"></label>
            <input 
                type="email" 
                name="email" 
                id="email"
                className=" placeholder-shown:capitalize w-4/6 p-2 md:w-[500px] border-none outline-none font-poppins text-lg   text-[#616161] ml-8"    
                placeholder="your email"    
            />
            <button 
                className="md:w-52 w-2/6 h-16 rounded-full capitalize bg-black text-white md:text-lg cursor-pointer "> subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter