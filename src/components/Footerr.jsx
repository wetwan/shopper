import { Link } from 'react-router-dom'
import footer_logo from '../assets/logo_big.png'
import { footericons, footernav } from '../static'
// import { data } from 'autoprefixer'
const Footerr = () => {
  return (
    <footer >
        <div className="flex h-[60vh] md:h-auto flex-1 flex-col items-center justify-center gap-14">
            <div className='flex items-center gap-5  '>
              <div>
                <img src={footer_logo} alt="footer" />
              </div>
              <p className='text-[#373737] text-[46px] uppercase font-bold'> shopper</p>
            </div>

          <ul className='flex list-none md:gap-14 gap-3 '>
            {footernav.map((nav)=>(
              <li key={nav.id}>
                <Link className='md:text-xl text-[#242425] capitalize cursor-pointer' to={nav.link}> {nav.label}</Link>
              </li>
            ))}
          </ul>

          <ul className='flex gap-14 items-center justify-center'>
            {
              footericons.map((icon)=>(
                <li key={icon.id} className='p-3 shadow-md shadow-gray-500 rounded-md bg-[#fcfcfc] pb-2  border-[#ececec]'>
                    <img src={icon.image} alt={icon.label} />
                </li>
              ))
            }
          </ul>
          <div className="text-[#1b1b1b] text-lg  flex flex-col w-full items-center gap-8 mb-8 capitalize ">
            <hr className='md:w-5/6 w-3/6 border-none rounded-xl p-0.5 bg-[#c8c8c8]' />
            <p>copyright &copy; {new Date().getFullYear()} all right resevred  </p>
          </div> 
        </div>
    </footer>
  )
}

export default Footerr