import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Home from "./pages/HomeFile/Home";
import About from "./pages/AboutFile/About";
import Ciel from "./pages/CielFile/Ciel";
import Nuvola from "./pages/NuvolaFile/Nuvola";
import Occhi from "./pages/OcchiFile/Occhi";
import Catalogo from "./pages/CielFile/Catalogo";
import CuricIrma from "./pages/AboutFile/CuricIrma";
import CuricFred from "./pages/AboutFile/CuricFred";
import CuricVanessa from "./pages/AboutFile/CuricVanessa";
import Pecci from "./pages/CielFile/Pecci";
import Stampa from "./pages/CielFile/Stampa";
import Tirreno from "./pages/CielFile/Tirreno";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/cielincitta" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ciel" element={<Ciel />} />
          <Route path="/nuvola" element={<Nuvola />} />
          <Route path="/occhi" element={<Occhi />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/curicIrma" element={<CuricIrma />} />
          <Route path="/curicFred" element={<CuricFred />} />
          <Route path="/curicVanessa" element={<CuricVanessa />} />
          <Route path="/pecci" element={<Pecci />} />
          <Route path="/stampa" element={<Stampa />} />
          <Route path="/tirreno" element={<Tirreno />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
