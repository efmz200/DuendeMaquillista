import React, {useEffect,useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

/**export default class FrTienda {
    constructor() {
    }*/
function     cancelareventos(e){
        e.preventDefault();
    }
   
function    handleChange(e){
        const {name,value }= e.target;
        this.setState({
            [name]: value
        });
    
    }
    
export function    VisualizarCarrito(){
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
                                            
                                            <input type="number" name="cantidad" maxLength="16" style={{ backgroundColor: "#FFFFFF" }}/>
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

export function   VisualizarPublicacion(){
        const location = useLocation();
        console.log('hola');
        console.log(location.state);//"any type"
        const objeto = location.state.name
        console.log(objeto);
        var strCategoria = ""
        var strsubategoria = ""
        var strpalabrasClave = ""
        var strtags= ""
        for (let m = 0; m < objeto.categoria.length; m++) {
            strCategoria += objeto.categoria[m].nombre
            strCategoria += ","
        }
        for (let m = 0; m < objeto.subcategoria.length; m++) {
            strsubategoria += objeto.subcategoria[m].nombre
            strsubategoria += ","
        }
        for (let m = 0; m < objeto.palabrasClave.length; m++) {
            strpalabrasClave += objeto.palabrasClave[m]
            strpalabrasClave += ","
        }
        for (let m = 0; m < objeto.tags.length; m++) {
            strtags += objeto.tags[m]
            strtags += ","
        }


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
                                            <img src={objeto.imagen} alt="Descripción de la imagen" style={{  width: "500px", height: "500px" }}/>
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
                                            <span >{objeto.descripcion} </span>
                                            
                                        </div>
        
                                        <br/>
                                        <br/>
                                        <div className="col s10">
                                            <span>Categoria</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s10"  style={{border: "1px solid #000000" }}>
                                            <span >{strCategoria}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s10">
                                            <span>Subcategoria</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s10"  style={{border: "1px solid #000000" }}>
                                            <span >{strsubategoria}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s10">
                                            <span>Palabras clave</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s10"  style={{border: "1px solid #000000" }}>
                                            <span >{strpalabrasClave}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s10">
                                            <span>#tags</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s10"  style={{border: "1px solid #000000" }}>
                                            <span >{strtags} </span>
                                            
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
export function    VisualizarCategoriaProductos(){
    const [categorias2, setCategorias] = useState([]);
    const [numColumnas, setNumColumnas] = useState(0);

    useEffect(() => {
        fetch('/api/productos/getCategoriaProductos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategorias(data.cats);
                setNumColumnas(categorias2.length); // Establece el número de columnas
                
            });
    }, []);
    
    //console.log(numColumnas)
    console.log(categorias2)
    

    const columnas2 = [];

    for (let i = 0; i < categorias2.length; i++) {
        const data = { id: i, name: 'Ejemplo' };
        columnas2.push(
            <div className="col s4" id= {categorias2[i].id}>
                <div className="card" style={{ backgroundColor: "#033734" }}>
                    <div className="card-content">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>img</h1>
                                    </div>
                                    
                                    
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    
                                    <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}
                                        <button type="submit" className="btn" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                            
                                        
                                            <Link to="/categoriaproductos" state={{ name: categorias2[i].nombre, products:categorias2[i].Productos }} style={{ backgroundColor: "#FFFFFF", color: "#000000"}}>{ categorias2[i].nombre }</Link>
                                            
                                        </button>
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
                <h1>La Tienda del Duende</h1>
                <div className="row">
                    {columnas2}
                </div>
            </div>
        </div>
    );
}
export function    VisualizarProductos(){
        
        const location = useLocation();
        console.log('hola');
        console.log(location.state);//"any type"
        //<p>Contenido de la página 2. Datos recibidos: {data.name}</p>
        const numColumnas = location.state.products.length; // Cantidad de columnas que deseas
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
                                            <span> {location.state.products[i].precio}</span>
                                        </div>
                                        <div className='col s4'>
                                            <input type="number" name="cantidad" maxLength="16" style={{ backgroundColor: "#FFFFFF" }}/>
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
                                    
                                    <span>{location.state.products[i].disponibilidad} en stock</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        );
        }
        return (
            <div className="row">
                <h1>{location.state.name}</h1>
                {columnas}
            </div>)

    }

export function    FrTienda() {
        return (
            <div>
                <div style={{ color: "#FFFFFF" }}>
                    <h1>La Tienda del Duende</h1>
                    
                    
                    {VisualizarProductos('categoria2')}
                    {VisualizarCategoriaProductos()}
                    {VisualizarPublicacion()}
                    {VisualizarCarrito()}
                    
                </div>
            </div>
        );
    }

    
export function    VisualizarTienda(){
        
        const [contenidos, setCategorias] = useState([]);
        const [numColumnas, setNumColumnas] = useState(0);
    
        useEffect(() => {
            fetch('/api/contenido/getContenidos')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCategorias(data);
                    setNumColumnas(contenidos.length); // Establece el número de columnas
                    
                });
        }, []);
        
        //console.log(numColumnas)
        console.log(contenidos)
        
    
        const columnas2 = [];
    
        for (let i = 0; i < contenidos.length; i++) {
            const data = { id: i, name: 'Ejemplo' };
            columnas2.push(
                <div className="col s4" id= {contenidos[i].id}>
                    <div className="card" style={{ backgroundColor: "#033734" }}>
                        <div className="card-content">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            
                                            
                                            <Link to="/publicacion" state={{ name: contenidos[i] }} style={{ backgroundColor: "#FFFFFF", color: "#000000"}}>
                                                <img src={contenidos[i].imagen} alt="Descripción de la imagen" style={{  width: "200px", height: "150px" }}/>
                                            </Link>
                                                
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
                    <h1>La Tienda del Duende</h1>
                    <div className="row">
                        {columnas2}
                    </div>
                </div>
            </div>
        );
    }
//}
//export default FrTienda;
