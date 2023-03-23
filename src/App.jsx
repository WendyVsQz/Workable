import React from 'react'
import Nav from './components/navbar/navbar'
import Home from './components/home/home'
import Wishlist from './components/WishList/wishList'
/* import CareerTips from './components/careerTips/careerTips'
import Mbti from './components/MBTI/mbti' */
import Footer from './components/footer/footer'

const matPicture = new URL ("./images/istockphoto-868704438-612x612.jpg", import.meta.url)

const App = () => {
  
  return (
    <>
    <Nav/>
    <Home/>
    <div>
    <img src={matPicture}/>
    </div>
    
    <Wishlist/>
  {/*   <CareerTips/>
    <Mbti/> */}
    <Footer/>
    
    </>

  )
}

export default App
