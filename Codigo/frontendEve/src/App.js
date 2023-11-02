import React from 'react';
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignUpPage, MenuAdmin, GaleriaDuende, TiendaDuende, MenuAgenda, 
        CursosTalleres, ServicioMaquillaje,  EntregasClientes, MensajesAdmin} from "./Routes.js"
import {VisualizarCategoriaProductos,VisualizarProductos,FrTienda,VisualizarCarrito,VisualizarPublicacion,VisualizarTienda,VisualizarFactura} from './pages/FrTienda';
import './App.css';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/menuAdmin" element={<MenuAdmin />} />
        <Route path="/galeriaDuende" element={<GaleriaDuende />} />
        <Route path="/tiendaDuende" element={<TiendaDuende />} />
        <Route path="/menuAgenda" element={<MenuAgenda />} />
        <Route path="/cursosTalleres" element={<CursosTalleres />} />
        <Route path="/servicioMaquillaje" element={<ServicioMaquillaje />} />
        <Route path="/entregasClientes" element={<EntregasClientes />} />
        <Route path="/mensajesAdmin" element={<MensajesAdmin />} />
        <Route path="/publicacion" element={<VisualizarPublicacion />} />
        
        <Route path="/categorias" element={<VisualizarCategoriaProductos />} />
        <Route path="/categoriaproductos" element={<VisualizarProductos />} />
                        <Route path="/carrito" element={<VisualizarCarrito />} />
                        <Route path="/factura" element={<VisualizarFactura />} />
                        <Route path="/contenido" element={<VisualizarTienda />} />
                        <Route path="/publicacion" element={<VisualizarPublicacion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
