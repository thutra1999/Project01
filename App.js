import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DogList from "./Pages/DogList";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Intro from "./Pages/Intro";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductItem from "./Components/ProductItem/ProductItem";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dogList" element={<DogList />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="intro" element={<Intro />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      {/* <ProductItem/> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
