import React from 'react';
//const imagen = require('./pruebaImagenes/img1.jpg');
import { Link } from 'react-router-dom';
function cancelareventos(e){
    e.preventDefault();
}

function handleChange(e){
    const {name,value }= e.target;
    this.setState({
        [name]: value
    });

}

function MenuSuperior() {
  return (
    <div>

    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#06495E" }}>
        <ul id="nav-mobile" className="left">
          
          <li><Link to="/categorias" >Categorias</Link>
                                    </li>
          <li><Link to="/carrito" >Carrito</Link>
                                    </li>
          <li><Link to="/contenido" >Contenido</Link>
                                    </li>
          <li><Link to="/login" >Login</Link>
                                    </li>
        </ul>
      </div>
    </nav>
    </div>
    );
}

export default MenuSuperior;