import data_product from '../assets/data'
import Items from './Items'

const Popular = () => {
  return (
    <section className=" flex flex-col items-center gap-3 ">
        <h1 className='uppercase text-[#171717] text-2xl md:text-5xl font-semibold'> Popular in women</h1>
        <hr className='p-0.5 mt-3 rounded-full  bg-[#171717] md:w-52 w-36'/>
        <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8 md:w-5/6 w-full  mx-auto p-2'>
            {data_product.map((item ,i)=>(
                <Items key={i} item={item} />
            ))}
        </div>
    </section>
  )
}

export default Popular