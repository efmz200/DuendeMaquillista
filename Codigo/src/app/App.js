import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {IniciarSesion,RegistrarUsuario} from './FrLogin';
import {VisualizarCategoriaProductos,VisualizarProductos,FrTienda,VisualizarCarrito,VisualizarPublicacion,VisualizarTienda,VisualizarFactura} from './FrTienda';
import MenuSuperior from './MenuSuperior';

import {LoginPage, SignUpPage, MenuAdmin, GaleriaDuende, TiendaDuende, MenuAgenda, 
    CursosTalleres, ServicioMaquillaje,  EntregasClientes, MensajesAdmin} from "./Routes.js"

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
            </Routes>
            </BrowserRouter>
            /**
            <div style={{ backgroundColor: "#033734" }}>
                <h1>
                    {this.state.myConstant}
                </h1>
                <Router>
                    <MenuSuperior />
                    <Header />
                    <Routes>

                        <Route path="/" element={<LoginPage />} />
                        
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
        ); */
        )
    }
}

export default App;