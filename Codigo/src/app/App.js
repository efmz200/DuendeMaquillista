import React, {Component} from "react";
import { render } from "react-dom";
import Header from './Header'; // Importa el componente de encabezado
import Login from "./Login";


class App extends Component {
    constructor(){
        super();
        this.Titulo = 'DUENDE MAQUILLISTA'


    }
    render(){
        return (
            
            <div>
                <Header />    
                <Login/>        
            </div>       
        )
    }
}

export default App;