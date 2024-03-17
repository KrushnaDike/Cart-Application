import React from "react";
import { Routes, Route } from "react-router-dom";

// importing components
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
