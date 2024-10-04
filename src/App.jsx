
import Navbar from "./components/Navbar"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import ShopCatigories from "./pages/ShopCatigories"
import Product from './pages/Product'
import Cart from "./pages/Cart"
import LoginSignupPage from "./pages/LoginSignupPage"
import Footerr from "./components/Footerr"

import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar /> 
       <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<ShopCatigories banner={men_banner} category='men' />} />
          <Route path="/women" element={<ShopCatigories banner={women_banner} category='women' />} />
          <Route path="/kids" element={<ShopCatigories banner={kids_banner} category='kid' />} />
          <Route path="/product" element={<Product  />} >
             <Route path=":productId" element={<Shop />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignupPage />} />
       </Routes>
       <Footerr />
    </BrowserRouter>
    
    </>
  )
}

export default App