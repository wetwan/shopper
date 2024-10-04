/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Items = ({item}) => {
  return (
    <div className='md:w-[350px] w-[300px] mx-auto hover:scale-105 duration-75  p-2 '>
        <Link onClick={window.scrollTo(0,0)} to={`/product/${item.id}`}> 
          <div className="md:w-[300px] mx-auto"> 
              <img src={item.image} alt="" className="w-full" />
            </div>
        </Link>
        
        <div className="w-[300px] mx-2">
            <p className='mx-2 my-0'>{item.name}</p>
            <div className='flex items-center gap-5 mx-1'>
                <p className=' text-[#374151] text-lg font-semibold '>$ {item.new_price}</p>
                <p className='text-[#8c8c8c] text-lg font-medium line-through '>$ {item.old_price}</p>
            </div>     
        </div>
       
    </div>
  )
}

export default Items