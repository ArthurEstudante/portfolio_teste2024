import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Materias() {
  return (
 <>
 <h1>Matérias: </h1>
 
 <Link to={"/matematica"}>Matematica</Link><br />
 <Link to={"/humanas"}>Humanas</Link><br />
 <Link to={"/linguagens"}>Linguagens</Link><br />
 <Link to={"/natureza"}>Natureza</Link><br />
 <Link to={"/tecnico"}>Técnico</Link><br />
 </>
  )
}

export default Materias
