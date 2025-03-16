import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./Component/Home"
import About from './Component/About'
import Navbar from "./Component/navbar" 
import Place_order from './Component/Place_order'
import Order_summary from './Component/Order_summary'
import Nomatch from './Component/Nomatch'
import Product from './Component/Product'
import Feature from './Component/Feature'
import Newproduct from './Component/Newproduct'
import User from './User'
import Details from './Component/Details'
import Search from './Component/Searchparam'
import Profile from './Component/Profile'
function App() {

  return (
    <>
    
    <Navbar/>
   
    

      
       <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="about" element={<About/>}/>
        <Route path="place-order" element={<Place_order/>}/>
        <Route path="order-summary" element={<Order_summary/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="user/:id" element={<Details />} />
        <Route path="search" element={<Search/>} />
        <Route path="profile" element={<Profile/>} />

        {/* Nested Route */}
        <Route path="product" element={<Product/>}> 
        <Route path="feature" element={<Feature/>}/>
        <Route path="newproduct" element={<Newproduct/>}/>
        </Route>

        <Route path="*" element= {<Nomatch/>}/>
        </Routes>

       </>
  )
}

export default App
