import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections"
import NewsLetter from "../components/NewsLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"

const Shop = () => {
  return (
    <div className="font-poppins ">
           <Hero />
           <Popular/>
           <Offer />
           <NewCollections />
           <NewsLetter />
        
    </div>
  )
}

export default Shop