import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/header/NavBar";
import ItemListContainer from "./Components/productsList/ItemListContainer";
import ItemDetailContainer from "./Components/item/ItemDetailContainer";
import Footer from "./Components/footer/Footer";
import CartContainer from "./Components/cart/CartContainer";
import React, { useState } from "react";
import { DarkModeCtx } from "./context/DarkModeContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const darkModeToogle = () => {
    console.log("darkmode:", darkMode)
    setDarkMode(!darkMode)
  }
  
  return (
      <>
        <DarkModeCtx.Provider value={darkMode}>
          <BrowserRouter>
            <NavBar />
            {/* <button className="btn bg-red p-3" onClick={darkModeToogle}>{darkMode ? "light" : "dark"}</button> */}
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DarkModeCtx.Provider>
      </>
  )
}
