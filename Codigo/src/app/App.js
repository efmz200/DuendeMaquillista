import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {IniciarSesion,RegistrarUsuario} from './FrLogin';
import {VisualizarCategoriaProductos,VisualizarProductos,FrTienda,VisualizarCarrito,VisualizarPublicacion,VisualizarTienda,VisualizarFactura} from './FrTienda';
import MenuSuperior from './MenuSuperior';

import './App.css';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            Titulo: 'DUENDE MAQUILLISTA',
            myConstant: 'This is a constant value',
        };
    }
    updateConstantValue = (newValue) => {
        this.setState({ myConstant: newValue });
    }

    render() {
        return (
            <div style={{ backgroundColor: "#033734" }}>
                <h1>
                    {this.state.myConstant}
                </h1>
                <Router>
                    <MenuSuperior />
                    <Header />
                    <Routes>
                        
                        <Route path="/login" element={<IniciarSesion myConstant={this.state.myConstant} updateConstantValue={this.updateConstantValue} />} />
                        
                        <Route path="/Registrar" element={<RegistrarUsuario />} />
                        <Route path="/" element={<FrTienda />} />
                        <Route path="/categorias" element={<VisualizarCategoriaProductos />} />
                        <Route path="/categoriaproductos" element={<VisualizarProductos />} />
                        <Route path="/carrito" element={<VisualizarCarrito />} />
                        <Route path="/factura" element={<VisualizarFactura />} />
                        <Route path="/contenido" element={<VisualizarTienda />} />
                        <Route path="/publicacion" element={<VisualizarPublicacion />} />

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;