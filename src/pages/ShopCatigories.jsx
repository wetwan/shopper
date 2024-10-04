/* eslint-disable react/prop-types */


import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import dropdown from '../assets/dropdown_icon.png'
import Items from "../components/Items"

const ShopCatigories = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
      <main className="mt-[100px]  ">
        <div className="mb-6 block w-[85%] mx-auto ">
          <img src={props.banner} alt={props.title} />
        </div>
        <div className=" flex flex-col md:flex-row gap-4 justify-start my-0 mx-4 lg:mx-[170px] md:mx-20 md:justify-between  md:items-center ">
          <p>
             <span className="font-semibold">showing 1- 12 </span> out of 36 products
          </p>
          <div className=" py-3 px-5 w-3/6 flex items-center justify-center  gap-2 rounded-full  border border-[#999]">
             sort by 
              <img src={dropdown} className="inline mx-3 w-2 h-2" alt={dropdown} />
          </div>
        </div>

        <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8 md:w-5/6 w-full  mx-auto p-2'>
            {all_product 
               .filter((item) => item.category
                === props.category)
                .map((item) => (
                  <Items key={item.id} item={item} /> 
             ))}
        </div>
        <div className="flex justify-center items-center my-10 md:my-[150px] mx-auto w-[233px] h-20 rounded-full text-[#797979] bg-[#efefef] font-medium text-lg capitalize    ">
             explore more
        </div>
      </main>
  )
}
export default ShopCatigories