import React from 'react'
import "./home.css"
import DisplaySearch from "../DisplaySearch/DisplaySearch"
import Nav from "../navbar/Header"
//import App from "../api/app"
import Footer from "../footer/footer"
import "../footer/style.css"

const home = () => {
  return (
    <>
    <DisplaySearch />
 
    <Nav/>
    
    <Footer/>
    </>
  )
}
export default home
