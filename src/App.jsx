import React from 'react'
import Nav from './components/navbar/Header'
import Home from './components/home/home'
import Wishlist from './components/WishList/wishList'
import CareerTips from './components/careerTips/careerTips'
import Footer from './components/footer/footer'
import Jobs from './components/jobsDiv/jobs'

const App = () => {
  
  return (
    <>
    <Nav/> 
    <Home/>
    <Jobs/>
    <Wishlist/>
  <CareerTips/>
    <Footer/>
    
    </>

  )
}

export default App
