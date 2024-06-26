import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Food from "./pages/Food/Food";
import Cart from "./pages/cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/search/:searchTerm" element={<Menu />} />
      <Route path="/menu/tags/:tag" element={<Menu />} />
      <Route path="/food/:id" element={<Food />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
