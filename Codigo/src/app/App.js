import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import {IniciarSesion,RegistrarUsuario} from './FrLogin';
import FrTienda from './FrTienda';

class App extends Component {
    
    constructor() {
        super();
        this.Titulo = 'DUENDE MAQUILLISTA';
    }

    render() {
        return (
            <div style={{ backgroundColor: "#033734" }}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/login" element={<IniciarSesion />} />
                        <Route path="/Registrar" element={<RegistrarUsuario />} />
                        <Route path="/" element={<FrTienda />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;