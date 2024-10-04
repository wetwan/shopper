/* eslint-disable react/prop-types */
import arrow from '../assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product} = props
  return (
    <>
          <div className='capitalize md:hidden flex items-center gap-2 text-nowrap md:text-sm font-semibold my-5 full ml-5 '>
              home <img className='inline' src={arrow} alt="" /> shop <img className='inline' src={arrow} alt="" /> {product.category} <img className='inline' src={arrow} alt="" /> {product.name.slice(0,15)+'...'}
          </div>
          <div className='capitalize hidden md:flex items-center gap-2 text-nowrap md:text-sm font-semibold   lg:my-16    '>
              home <img className='inline' src={arrow} alt="" /> shop <img className='inline' src={arrow} alt="" /> {product.category} <img className='inline' src={arrow} alt="" /> {product.name}
          </div>
    </>
  
  )
}

export default Breadcrum