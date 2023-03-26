import React from "react";
import { Route, Routes } from "react-router-dom";

import CareerTips from "./components/careerTips/careerTips";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Header from "./components/navbar/Header";
import Wishlist from "./components/WishList/wishlist";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/career-tips" element={<CareerTips />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
