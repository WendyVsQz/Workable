import React from 'react'
import Nav from "./components/navbar/navbar";
import Home from "./components/home/Home";
import Wishlist from "./components/WishList/WishList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <Wishlist/>
  {/*   <CareerTips/>
    <Mbti/> */}
    <Footer/>
    
    </>

  )
}

export default App
