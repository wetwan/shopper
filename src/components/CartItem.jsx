import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import remove_cert from '../assets/cart_cross_icon.png'

const CartItem = () => {
    const{ all_product, cartItems,removeFromCart, getTotalcat} = useContext(ShopContext)
    const shipping = getTotalcat() / 50
 return (
    <section className="my-24 mx-44 ">
        <div className="items-center gap-20 py-5 capitalize  grid px-0 text-lg font-semibold grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr]">
            <p>product</p>
            <p>tittle</p>
            <p>price</p>
            <p> quantity</p>
            <p>total</p>
        </div>
        <hr  className="p-0.5 bg-[#e3e3e3] rounded-full"/>
        {all_product.map((e) => {
            if(cartItems[e.id] > 0){
                return  <div key={e.id} className="">
                            <div className= " items-center gap-20 py-5 capitalize  grid px-0 text-lg font-medium  grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr]">
                                <img src={e.image} alt="" className=" h-16" />
                                <p className="">{e.name}</p>
                                <p className="">${e.new_price}</p>
                                <button className=" border-2 w-16 h-12 border-[#ECECEC] text-black bg-white  ">{cartItems[e.id]}</button>
                                <p className="">${e.new_price*cartItems[e.id]}</p>
                                <img 
                                    src={remove_cert}  
                                    alt="x" 
                                    className=" w-4 my-0 mx-10 cursor-pointer" 
                                    onClick={() => {removeFromCart(e.id)}}
                                    />
                                </div>
                            <hr />
                        </div>
            }
            return null
        })}
        <div className="flex  my-24 mx-0  capitalize">
            <div className="flex flex-1 flex-col mr-52 gap-10 capitalize">
                <h1>
                    cart totals
                </h1>
                <div className="">
                    <div className="flex justify-between py-4 mx-0">
                        <p className="">subtotal</p>
                        <p className="">${getTotalcat()}</p>
                      
                    </div>
                    <hr />
                    <div className="flex justify-between py-4 mx-0">
                        <p>shipping fee</p>
                        <p>${shipping}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-4 mx-0">
                        <h3> total</h3>
                        <h3>$ {getTotalcat()+ shipping}</h3>
                    </div>
                </div>
                <button className="bg-red-400 text-white text-lg cursor-default font-semibold  w-[262px] h-14 outline-none border-none"> proceed to checkout</button>
            </div>
            <div className=" flex-1 font-normal text-lg   ">
                <p className="#555">if you have a promo code, Enter it here</p>
                <div className="w-[500px] mt-4 pl-5 h-14 bg-[#ebebeb] flex">
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className=" placeholder-shown:capitalize outline-none bg-transparent text-lg w-80 h-12"
                        placeholder="enter your promo code" 
                    />
                    <button className="w-[170px] text-white bg-black h-14 cursor-pointer text-lg "> Submit </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItem