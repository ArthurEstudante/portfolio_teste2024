import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim";
import Materias from "./pages/Materias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMim" element={<SobreMim />} />
          <Route path="/Materias" element={<Materias                                                                                                                               />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
