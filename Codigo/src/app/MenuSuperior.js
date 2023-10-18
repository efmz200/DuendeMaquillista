import React from 'react';
//const imagen = require('./pruebaImagenes/img1.jpg');

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
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
    </div>
    );
}

export default MenuSuperior;