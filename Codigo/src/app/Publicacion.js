

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

function Publicacion() {

  return (
    <div>
        <div className="row" style={{ color: "#FFFFFF" }} >
            <h1>
                Publicacion
            </h1>
        </div>
            <div className="row" >
                        
                        <div className="col s6">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div style={{ backgroundColor: "white", width: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1>img</h1>
                                </div>
                                
                                
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                
                                <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}
                                    <form onSubmit={cancelareventos} style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                        <span>Si te interesa contratar el servicio de este makeup no dudes en escribirme</span>
                                        <br/>
                                        <div className="row">
                                            <div className="col s8">
                                                <input name="Mensaje" onChange={handleChange} type="text" defaultValue="Me interesa, que precio tiene?" style={{border: "1px solid #000000" }}/>
                                            </div>
                                            <div className="col s4">
                                                <button type="submit" className="btn" style={{ backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid #000000" }}>
                                                    Enviar
                                                </button>
                                            </div>
                                            
                                        </div>
                                        
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col s6" >
                            <div  className="col s8"  style={{ backgroundColor: "#FFFFFF", color: "#000000" , fontSize: "26px" }}>
                                <br/>
                                <div className="col s10">
                                    <span>Descripcion</span>
                                </div>
                                
                                <br/>
                                <div className="col s10"  style={{border: "1px solid #000000" }}>
                                    <span >Descripcion de productos </span>
                                    
                                </div>

                                <br/>
                                <br/>
                                <div className="col s10">
                                    <span>Categoria</span>
                                </div>
                                
                                <br/>
                                <div className="col s10"  style={{border: "1px solid #000000" }}>
                                    <span >categoria de productos </span>
                                    
                                </div>
                                <br/>
                                <br/>
                                <div className="col s10">
                                    <span>Subcategoria</span>
                                </div>
                                
                                <br/>
                                <div className="col s10"  style={{border: "1px solid #000000" }}>
                                    <span >subcategoria de productos </span>
                                    
                                </div>
                                <br/>
                                <br/>
                                <div className="col s10">
                                    <span>Palabras clave</span>
                                </div>
                                
                                <br/>
                                <div className="col s10"  style={{border: "1px solid #000000" }}>
                                    <span >Palabras clave de productos </span>
                                    
                                </div>
                                <br/>
                                <br/>
                                <div className="col s10">
                                    <span>#tags</span>
                                </div>
                                
                                <br/>
                                <div className="col s10"  style={{border: "1px solid #000000" }}>
                                    <span >tags de productos </span>
                                    
                                </div>
                                <br/>
                            </div>
                           
                            
                            
                        
                        </div>
                        
                        
                    
            </div>
    </div>

                    

    );
}

export default Publicacion;