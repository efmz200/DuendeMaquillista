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

function CarritoProductos() {

  return (

                    <div className="col s4" >
                        <div className="card" style={{ backgroundColor: "#033734" }}>
                            <div className="card-content">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>img</h1>
                                    </div>
                                    
                                    
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className='row' style={{  width: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" , color: "#FFFFFF  " }}>
                                        <div className='col s3'>
                                            <span> precio</span>
                                        </div>
                                        <div className='col s3'>
                                            <span>spinbox3f3</span>
                                            <input type="text" pattern="[0-9]*" />
                                        </div>
                                        <div className='col s3'>
                                            <button type="submit" className="btn" style={{ backgroundColor: "#033734",color: "#FFFFFF" }}>
                                                
                                                <span class="material-icons">
                                                    favorite
                                                </span>
                                            </button>
                                        </div>
                                        <div className='col s3'>
                                            <button type="submit" className="btn" style={{ backgroundColor: "#033734",color: "#FFFFFF" }}>
                                                
                                            <span class="material-icons">
                                                delete
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>

    );
}

export default CarritoProductos;