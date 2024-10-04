// import React from 'react'

const DescriptionsBox = () => {
  return (
    <main className=" mx-3 my-10 lg:my-[120px] "> 
        <div className=" flex items-center">
            <div className=" flex items-center justify-center  font-semibold text-lg w-[172px] h-[70px] border border-[#d1d1d1]">
                Description
            </div>
            <div className=" flex items-center justify-center  font-semibold text-lg w-[172px] h-[70px] border border-[#d1d1d1] bg-[#fcfcfc] text-[#555]">
                Reviews (122)
            </div>
        </div>
        <div className=" flex flex-col gap-6 border border-[#d1d1d1] p-12 pb-16 ">
            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea, exercitationem tenetur reiciendis facere voluptatibus asperiores explicabo quasi, nobis architecto maiores repellat voluptatum, cumque esse. Deleniti obcaecati commodi consectetur dignissimos?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui voluptate omnis, facere tempora libero magnam velit ducimus placeat! Aliquam.</p>
        </div>
    </main>
  )
}

export default DescriptionsBox