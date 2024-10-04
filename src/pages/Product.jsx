
import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrum"
import ProductDetails from "../components/ProductDetails"
import DescriptionsBox from "../components/DescriptionsBox"
import Relatedproduct from "../components/Relatedproduct"



const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId) )
  return (
    <section  className="mt-32 md:w-[80vw] w-dvw mx-auto">
        <Breadcrum  product={product}/>
        <ProductDetails product={product}/>
        <DescriptionsBox />
        <Relatedproduct />
    </section>
  )
}

export default Product