// import React from 'react'

const LoginSignupPage = () => {
  return (
    <section className="w-full h-dvh bg-[#fde4ff] md:p-24 mt-16 ">
          <div className=" md:w-[500px] md:h-[600px] border w-5/6    bg-white mx-auto py-10 px-16">
            <h1 className="capitalize my-5 mx-0 text-2xl font-bold "> sign up</h1> 
          
            <div className="flex flex-col  gap-8 mt-8 text-black ">
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder="username" 
                  className="placeholder-shown:capitalize  border h-14 rounded-lg w-full pl-5 outline-none border-[#c8c8c8] text-[#5d5d5d] text-lg"
                  />
                <input 
                  type="email" 
                  name="email" 
                  id="email"  
                  placeholder="email"
                 className="placeholder-shown:capitalize  border h-14 rounded-lg w-full pl-5 outline-none border-[#c8c8c8] text-[#5d5d5d] text-lg"
                  />
                <input 
                  type="password"
                  name="password" 
                  id="password" 
                  placeholder="password" 
                  className="placeholder-shown:capitalize  border h-14 rounded-lg w-full pl-5 outline-none border-[#c8c8c8] text-[#5d5d5d] text-lg"
                  />
            </div> 
            <button className='w-full h-14 rounded-lg capitalize  text-white bg-[#fd4242] mt-7 text-2xl font-medium cursor-pointer mx-auto block  ' >continue</button>
            <p className=" mt-5 text-lg text-[#5d5d5d] font-medium">Already have an account? <span className="text-[#FF4242] font-semibold"> Login here</span> </p>
            <div className=" flex py-2 items-center my-5 gap-5 text-sm font-medium ">
              <input type="checkbox" name="" id="" className="w-4 accent-rose-800 " />
              <p>Agreed to Term and Services </p>
            </div>
          </div>
    </section>
  )
}

export default LoginSignupPage