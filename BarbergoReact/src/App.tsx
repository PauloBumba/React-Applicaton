import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav.tsx";


import { Login } from "./Components/Public/Pages/Login";
import { Register } from "./Components/Public/Pages/Revord";
import { Home } from "./Components/Public/Pages/Home";
// Páginas para as rotas


const App: React.FC = () => {
  return (
    <Router>
      {/* Barra de navegação */}
      <Nav />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
