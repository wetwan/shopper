import data_product from '../assets/data'
import Items from './Items'

const Relatedproduct = () => {
  return (
    <section className='flex flex-col items-center gap-3 mx-3 my-10 h-[80vh]'> 
        <h1 className="capitalize text-[#181818] font-semibold text-5xl ">related product</h1>
        <hr className='w-2/6 p-0.5 rounded-full bg-[#f6c9c9]'/>
        <div className=" flex overflow-x-scroll lg:overflow-y-hidden mt-6  overflow-y-hidden w-full  ">
            {
                data_product.map((item)=>(
                    <Items key={item.id} item={item} />
                ))
            }
        </div>
    </section>
  )
}

export default Relatedproduct