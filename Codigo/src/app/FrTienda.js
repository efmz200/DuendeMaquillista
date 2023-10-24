import React from 'react';

export default class FrTienda {
    constructor() {
    }
     cancelareventos(e){
        e.preventDefault();
    }
    
     handleChange(e){
        const {name,value }= e.target;
        this.setState({
            [name]: value
        });
    
    }
    
    visualizarCarrito(){
        const numColumnas = 4; // Cantidad de columnas que deseas

        // Un array de elementos JSX para representar las columnas
        const columnas = [];
    
        for (let i = 0; i < numColumnas; i++) {
        columnas.push(
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
                                            <span>spinbox</span>
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

    visualizarPublicacion(){

        const cuadro =  []
        
        cuadro.push(
            <div className="row">
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
                                            <form onSubmit={this.cancelareventos} style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                                <span>Si te interesa contratar el servicio de este makeup no dudes en escribirme</span>
                                                <br/>
                                                <div className="row">
                                                    <div className="col s8">
                                                        <input name="Mensaje" onChange={this.handleChange} type="text" defaultValue="Me interesa, que precio tiene?" style={{border: "1px solid #000000" }}/>
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
        )
        return (
            <div className="row">
                {cuadro}
            </div>
            
        )
    }
    visualizarCategoriaProductos(){
        
        const categorias = [];

        
        
        fetch('/api/contenido/getCategorias')
            .then(res => res.json())
            .then(data =>{ 
                console.log(data);
                categorias.push( data);

        
        console.log(categorias);

                
        //console.log(categorias[0].length);

        const numColumnas = 4; 
        console.log(numColumnas);

            
        
        const columnas2 = [];
            
        for (let i = 0; i < numColumnas; i++) {
                columnas2.push(
                    <div className="col s4" >
                                <div className="card" style={{ backgroundColor: "#033734" }}>
                                    <div className="card-content">
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <h1>img</h1>
                                            </div>
                                            
                                            
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            
                                            <div style={{ marginTop: "10px" }}> 
                                                <button type="submit" className="btn" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                                    Nombre producto
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                );
        }
        return (
        <div className="row">
                    
            {columnas2}
        </div>)
            });
        
        }
    visualizarProductos(categoria){
        const numColumnas = 4; // Cantidad de columnas que deseas

        // Un array de elementos JSX para representar las columnas
        const columnas = [];
    
        for (let i = 0; i < numColumnas; i++) {
        columnas.push(
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
                                        <div className='col s4'>
                                            <span> precio</span>
                                        </div>
                                        <div className='col s4'>
                                            <span>spinbox</span>
                                        </div>
                                        <div className='col s4'>
                                            <button type="submit" className="btn" style={{ backgroundColor: "#033734",color: "#FFFFFF" }}>
                                                
                                                <span class="material-icons">
                                                    favorite
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    
                                    <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}
                                        <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "#FFFFFF " }}>
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", color: "#FFFFFF  " }}>
                                    
                                    <span>stock</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        );
        }
        return (
            <div className="row">
            
                {columnas}
            </div>)

    }

    visualizarTienda() {
        return (
            <div>
                <div style={{ color: "#FFFFFF" }}>
                    <h1>La Tienda del Duende</h1>
                    
                    {this.visualizarCategoriaProductos()}
                    {this.visualizarProductos('categoria2')}
                    {this.visualizarPublicacion()}
                    {this.visualizarCarrito()}
                    
                </div>
            </div>
        );
    }
    
}
