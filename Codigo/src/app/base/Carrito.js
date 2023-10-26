import React from 'react';

import CarritoProductos from "./CarritoProductos";
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

function Carrito() {
    const numColumnas = 4; // Cantidad de columnas que deseas

    // Un array de elementos JSX para representar las columnas
    const columnas = [];
  
    for (let i = 0; i < numColumnas; i++) {
      columnas.push(
        <CarritoProductos/>
      );
    }
    
  return (
    <div>
            <div style={{ color: "#FFFFFF" }}>
                <h1>Carrito de Compras  </h1>
            </div>
            <div className="row">
                <div className="row">
                    {columnas}
                    
                </div>
                
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}
                <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "#FFFFFF " }}>
                  Realizar Compra
                </button>
              </div>
            </div>
    </div>
    );
}

export default Carrito;