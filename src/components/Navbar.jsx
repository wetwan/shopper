
import logo from '../assets/logo.png'
import shoppingCart from '../assets/cart_icon.png'
import hambug from '../assets/list.svg'

import { nav } from "../static"
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {
  	const [isOpen, setIsOpen ]= useState (false)
    const menu  =()=> setIsOpen(!isOpen)
    const {getToatlcartItems} = useContext(ShopContext)
  return (
   <header className="z-50 mb-52 pb-2  bg-pink-50 md:[90%]w-full mx-auto font-poppins fixed top-0 left-0 right-0">
   <div className=" md:w-[97%] flex items-center md:justify-evenly justify-between mx-auto lg:p-4">
        <a href='/' className="h-14  flex items-center  "> 
              <img src={logo} className="h-full w-full mx-2 my-0.5 object-cover" alt={logo}  />
              <h1 className='font-bold text-2xl uppercase font-sans '>shopper </h1>
          </a>
          <nav className='w-1/3 md:block hidden  h-16 p-3 mx-5 '>
            <ul className=" flex  h-5/6 items-center justify-between gap-10 p-5">
               {nav.map((nav)=>(
                <li key={nav.id}> 
                    <NavLink 
                        to={nav.link}
                        // className='font-poppins font-bold text-blue-400 hover:opacity-75 capitalize relative hover:before:absolute before:w-5 before:bg-blue-300  before:h-1 before:rounded-lg before:-bottom-2 before:left-2 before:right-1 before:translate-x-[5%]'
                        className={({ isActive }) => isActive ? 'font-poppins font-bold text-blue-900 hover:opacity-75 capitalize relative before:absolute before:w-5 before:bg-blue-300  before:h-1 before:rounded-lg before:-bottom-2 before:left-2 before:right-1 before:translate-x-[5%]' : 'capitalize text-black font-poppins opacity-100'}
                        >{nav.label}</NavLink>
                </li>
               ))}
            </ul>
          </nav>
          <div className='hidden items-center md:flex p-2  gap-10  justify-center w-1/5 '>
          <Link to='/login'>
           <button className='cursor-pointer border border-red-500  active:bg-[#f4f4f4] p-1 w-36    h-12 rounded-full text-stone-500 capitalize text-lg text-center '> login</button> 
          </Link>
          <Link to='/cart'>
            <div className='w-12 h-10  px-1 relative '>
               <img   src={shoppingCart} alt=""  />
               <div className='absolute  w-5 h-5 rounded-full -top-1 -right-1 bg-red-700 text-white  text-center text-xs mx-1 font-bold  -py-0.5'>{getToatlcartItems()}</div>

            </div>
                </Link> 
          </div>
          <div className="block md:hidden">
            <img src={hambug}
            onClick={menu}
             className='w-10 h-8 mr-2' alt="" />
          </div>
   </div>
          <hr className='rounded-full bg-red-100 h-1 text-red-500 w-[80% ]' />
          {
            isOpen && 
              <nav className=' between rounded-l-2xl h-[80vh] md:hidden fixed right-0 w-5/6  z-50 bg-pink-200  animate-spin-slow' >
                <ul className='flex gap-5  items-center justify-center flex-col  -green-600 h-4/6 mt-2'>
                  {nav.map((nav)=>(
                    <li 
                       onClick={!menu}
                      key={nav.id}
                      className=' text-center text-xl capitalize  w-full '
                      >
                        <Link 
                        onClick={!menu}
                        className='py-3  block w-5/6 mx-auto rounded-2xl bg-white' to={nav.link}> {nav.label}</Link>
                    </li>
                   ))}
                </ul>
                      <div className=' items-center flex p-2 mt-28  w gap-10  justify-'>
                            <Link to='/login'>
                            <button className='cursor-pointer border-green-200 border active:bg-[#f4f4f4] p-1 w-36    h-12 rounded-full text-stone-500 capitalize text-lg text-center '> login</button> 
                            </Link>
                              
                              <div className='w-12 h-10  px-1 relative '>
                              <Link to='/cart'>
                              <img   src={shoppingCart} alt=""  />
                              <div className='absolute  w-5 h-5 rounded-full -top-1 -right-1 bg-red-700 text-white  text-center text-xs mx-1 font-bold  -py-0.5'>{getToatlcartItems()}</div>
                              </Link>
                    
                 
                  </div>
                  
          </div>

              </nav>
          }
   </header>
  )
}

export default Navbar