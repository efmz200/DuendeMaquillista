import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {IniciarSesion,RegistrarUsuario} from './FrLogin';
import {VisualizarCategoriaProductos,VisualizarProductos,FrTienda,VisualizarCarrito,VisualizarPublicacion} from './FrTienda';
import MenuSuperior from './MenuSuperior';

class App extends Component {
    
    constructor() {
        super();
        this.Titulo = 'DUENDE MAQUILLISTA';
    }

    render() {
        return (
            <div style={{ backgroundColor: "#033734" }}>
                <Router>
                    <MenuSuperior />
                    <Header />
                    <Routes>
                        <Route path="/login" element={<IniciarSesion />} />
                        <Route path="/Registrar" element={<RegistrarUsuario />} />
                        <Route path="/" element={<FrTienda />} />
                        <Route path="/categorias" element={<VisualizarCategoriaProductos />} />
                        <Route path="/categoriaproductos" element={<VisualizarProductos />} />
                        <Route path="/carrito" element={<VisualizarCarrito />} />
                        
                        <Route path="/publicacion" element={<VisualizarPublicacion />} />

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;