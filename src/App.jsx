import React from "react";
import { Route, Routes } from "react-router-dom";

import CareerTips from "./components/careerTips/careerTips";
import Home from "./components/home/home";
import Header from "./components/navbar/Header";
import WishList from "./components/WishList/wish-list";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/career-tips" element={<CareerTips />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
