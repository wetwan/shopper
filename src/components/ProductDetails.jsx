/* eslint-disable react/prop-types */
import star from '../assets/star_icon.png'
import stardull from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';


const ProductDetails = ({product }) => {
    const { addToCart } = useContext(ShopContext); 
  
  return (
    <section className="flex flex-col lg:grid grid-cols-2 
      md:p-2 items-center  md:mx-auto mx-5   ">
        <div className=" flex flex-col lg:grid grid-cols-5 gap-3    ">
            <div className="flex grid-cols-subgrid lg:flex-col my-5  overflow-x-scroll overflow-y-hidden    gap-5">
                <div className=" md:h-[150px] h-[200px]      overflow-hidden ">
                    <img src={product.image} className='h-full object-cover w-full ' alt="image" />
                </div>
                <div className=" md:h-[150px] h-[200px]    overflow-hidden ">
                    <img src={product.image} className='h-full object-cover w-full ' alt="image" />
                </div>
                <div className=" md:h-[150px] h-[200px]    overflow-hidden ">
                    <img src={product.image} className='h-full object-cover w-full ' alt="image" />
                </div>
                <div className=" md:h-[150px] h-[200px]    overflow-hidden ">
                    <img src={product.image} className='h-full object-cover w-full ' alt="image" />
                </div>
              
            </div>
            <div className=" my-5 mx-auto lg:mx-0 ">
                <div className="  mx-auto h-full -green-600  lg:w-[400px] md:w-3/4 md:h-3/4 lg:h-[657px] w-[350px]">
                    <img src={product.image} className='w-full h-full object-cover ' alt="" />
                </div>
            </div>

        </div>
        <div className="my-0 mx-5  flex flex-col  ">
            <h1 className='text-[#3f3f3f] text-4xl font-bold'> {product.name}</h1>
            <div className=" flex gap-1 items-center mt-3 text-[#1d1d1d] text-sm ">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={stardull} alt="" />
                <p>(122)</p>
            </div>
            <div className=" flex items-center gap-8 text-2xl font-bold my-9 mx-0 ">
                <p className="line-through text-[#838383]"> $ {product.old_price}</p>
                <p className=" text-[#ff4242]"> $ {product.new_price}</p>
            </div>
           <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Necessitatibus accusamus ut officiis beatae minima quia 
              culpa iste porro laudantium sit!
           </p>
           <div className="">
                <h1 className='capitalize mt-14 text-[#676767] text-xl font-semibold'>
                    select size
                </h1>
                    <div className="mx-1 uppercase flex items-center gap-5 mt-8 md:mx-0 my-3">
                        <div className=" py-4 md:px-6 px-5 bg-[#fcfcfc] shadow-md shadow-stone-400 rounded-md cursor-pointer">s</div>
                        <div className=" py-4 md:px-6 px-5 bg-[#fcfcfc] shadow-md shadow-stone-400 rounded-md cursor-pointer">m</div>
                        <div className=" py-4 md:px-6 px-5 bg-[#fcfcfc] shadow-md shadow-stone-400 rounded-md cursor-pointer">l</div>
                        <div className=" py-4 md:px-6 px-5 bg-[#fcfcfc] shadow-md shadow-stone-400 rounded-md cursor-pointer">xl</div>
                        <div className=" py-4 md:px-6 px-5 bg-[#fcfcfc] shadow-md shadow-stone-400 rounded-md cursor-pointer">xxl</div>
                    </div>
           </div>
           <button 
                className='mx-1 capitalize py-5 px-10 text-lg font-semibold w-[200px] cursor-pointer text-white mb-10 outline-none -none bg-red-400 rounded'
                onClick={(e) => { addToCart(product.id,e) }}
                > add to cart </button>
           <p className="capitalize   mt-3"> <span className='font-semibold'> Category :</span > {product.category} </p>
           <p className="capitalize  mt-3"> <span className='font-semibold'> tags : </span>{product.tag} </p>
        </div>
    </section>
  )
}

export default ProductDetails