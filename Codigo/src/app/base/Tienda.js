import React from 'react';
import TiendaCategorias from "./TiendaCategorias";
import TiendaProductos from "./TiendaProductos";
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

function Tienda() {
    const numColumnas = 4; // Cantidad de columnas que deseas

    // Un array de elementos JSX para representar las columnas
    const columnas = [];
  
    for (let i = 0; i < numColumnas; i++) {
      columnas.push(
        <TiendaProductos/>
      );
    }
    const columnas2 = [];
  
    for (let i = 0; i < numColumnas; i++) {
      columnas2.push(
        <TiendaCategorias/>
      );
    }
  return (
    <div>
            <div style={{ color: "#FFFFFF" }}>
                <h1>La Tienda del Duende  </h1>
            </div>
            <div className="row">
                <div className="row">
                    {columnas}
                    
                </div>
                
            </div>
    </div>
    );
}

export default Tienda;