import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Home() {
  return (
 <>
 <h1>Bem-vindo ao meu Portfólio</h1>
 <h2>Sou Arthur D´eça</h2>
 <p>Botões: </p>
 
 <Link to={"/SobreMim"}>Sobre-Mim</Link><br />
 <Link to={"/Materias"}>Matérias</Link><br />
 <Link to={"/Curriculo"}>Curriculo</Link><br />
 </>
  )
}

export default Home
