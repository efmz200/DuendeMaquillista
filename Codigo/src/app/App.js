import React, {Component} from "react";
import { render } from "react-dom";
import Header from './Header'; // Importa el componente de encabezado
import Login from "./Login";
import Registrarte from "./Registrarte";
import Tienda from "./Tienda";
import MenuSuperior from "./MenuSuperior";
import Publicacion from "./Publicacion";
import Carrito from "./Carrito";
import Factura from "./Factura";

class App extends Component {
    constructor(){
        super();
        this.Titulo = 'DUENDE MAQUILLISTA'


    }
    render(){
        return (
            
            <div style={{ backgroundColor: "#033734" }}>
                <Header />    
                <Login/>     
                <Registrarte/> 
                <MenuSuperior/>
                <Tienda/>  
                <MenuSuperior/>
                <Publicacion/>
                <MenuSuperior/>
                <Carrito/>
                <MenuSuperior/>
                <Factura/>
            </div>       
        )
    }
}

export default App;