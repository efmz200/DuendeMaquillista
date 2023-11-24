import React from 'react';
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage,SignUpPage, MenuAdmin, GaleriaDuende, TiendaDuende, MensajesAdmin, Agenda} from "./Routes.js"
import {VisualizarCategoriaProductos,VisualizarProductos,FrTienda, VisualizarCarrito,VisualizarPublicacion,VisualizarTienda,VisualizarFactura} from './pages/FrTienda';

import './App.css';

const App = () => {
  const [user, setUser] = useState(['valor_inicial']);
  const updateConstantValue = (newValue) => {
    setUser(newValue);
    console.log('holasaaaa')
    console.log(newValue)
}

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage user={user} updateConstantValue={updateConstantValue}/>} />
        <Route path="/signUp" element={<SignUpPage user={user}/>} />
        <Route path="/menuAdmin" element={<MenuAdmin user={user}/>} />
        <Route path="/galeriaDuende" element={<GaleriaDuende user={user}/>} />
        <Route path="/tiendaDuende" element={<TiendaDuende user={user}/>} />
        <Route path="/mensajesAdmin" element={<MensajesAdmin user={user}/>} />
        <Route path="/agenda" element={<Agenda user={user}/>} />
        
        
        <Route path="/categorias" element={<VisualizarCategoriaProductos user={user}  />} />
        <Route path="/categoriaproductos" element={<VisualizarProductos user={user}/>} />
        <Route path="/carrito" element={<VisualizarCarrito user={user}/>} />
        <Route path="/factura" element={<VisualizarFactura user={user}/>} />
        <Route path="/contenido" element={<VisualizarTienda user={user}/>} />
        <Route path="/publicacion" element={<VisualizarPublicacion user={user}/>} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
