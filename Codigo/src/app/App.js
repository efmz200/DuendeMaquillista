import React, {Component} from "react";
import { render } from "react-dom";
import Header from './Header'; // Importa el componente de encabezado
import Login from "./Login";
import Registrarte from "./Registrarte";

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
            </div>       
        )
    }
}

export default App;