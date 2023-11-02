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
        const [listaProductos, setlistaProductos] = useState([]);
        
        const idCarrito = '6537366bd6e4e15f3beb9b0f'; // Reemplaza con el ID del carrito que estás buscando
        const url = '/api/productos/getCarrito'; // Reemplaza con la URL de tu servidor
        var response = '';
        useEffect(() => {
            response =fetch(url, {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ idCarrito }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setlistaProductos(data.productos);
                    
                    
                    
    
                })
                .catch(err => console.err(err));
            
        }, []);
        console.log('listaProductos')
        console.log(listaProductos)

        // Un array de elementos JSX para representar las columnas
        const columnas = [];
    
        for (let i = 0; i < listaProductos.length; i++) {
        columnas.push(
            <div className="col s4" >
                        <div className="card" style={{ backgroundColor: "#033734" }}>
                            <div className="card-content">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        
                                        <img src={listaProductos[i].producto.imagen} alt="Descripción de la imagen" style={{  width: "200px", height: "150px" }}/>
                                    </div>
                                    
                                    
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className='row' style={{  width: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" , color: "#FFFFFF  " }}>
                                        <div className='col s3'>
                                            <span> {listaProductos[i].producto.precio}</span>
                                        </div>
                                        <div className='col s3'>
                                            
                                            <input type="number" name="cantidad" maxLength="16" value={listaProductos[i].cantidad} style={{  width: "50px", height: "30px",backgroundColor: "#FFFFFF" }}/>
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
                    <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "# " }}>
                    
                        <Link to="/factura" state={{  products:listaProductos }} style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>Realizar Compra</Link>
                                            
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
                                        
                                        <div className="row" > {/* Agregar margen superior de 10px */}
                                            <form onSubmit={cancelareventos} style={{marginTop: "10px" ,borderRadius: '10px',backgroundColor: "#FFFFFF", color: "#000000" }}>
                                                <div  style={{margin: '20px'}}>
                                                    <div >
                                                        <span >Si te interesa contratar el servicio de este makeup no dudes en escribirme</span>
                                                    </div>
                                                    
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col s8">
                                                            <input name="Mensaje" onChange={handleChange} type="text" defaultValue="Me interesa, que precio tiene?" style={{borderRadius: '10px',border: "1px solid #000000" }}/>
                                                        </div>
                                                        <div className="col s4">
                                                            <button type="submit" className="btn" style={{ borderRadius: '10px',backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid #000000" }}>
                                                                Enviar
                                                            </button>
                                                        </div>
                                                        
                                                    </div>

                                                </div>
                                                
                                                
                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6" >
                                    <div  className="col s8"  style={{ margin: '20px',borderRadius: '10px',backgroundColor: "#FFFFFF", color: "#000000" , fontSize: "26px" }}>
                                        <br/>
                                        <div className="col s12">
                                            <span>Descripcion</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s12"  style={{border: "1px solid #000000"}} >
                                            <span >{objeto.descripcion} </span>
                                            
                                        </div>
        
                                        <br/>
                                        <br/>
                                        <div className="col s12">
                                            <span>Categoria</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            
                                            <span >{strCategoria}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s12">
                                            <span>Subcategoria</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strsubategoria}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s12">
                                            <span>Palabras clave</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strpalabrasClave}</span>
                                            
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="col s12">
                                            <span>#tags</span>
                                        </div>
                                        
                                        <br/>
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strtags} </span>
                                            
                                        </div>
                                        <br/>
                                        <h1></h1>
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
                
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "250px", height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                            <input type="number" name="cantidad" maxLength="16" style={{ width: "50px", height: "30px",backgroundColor: "#FFFFFF" }}/>
                                        </div>
                                        <div className='col s4'>
                                            <button type="submit" class="btn" style={{  width: "30px", height: "30px",backgroundColor: "#033734",color: "#FFFFFF" }}>
                                                
                                                <span class="material-icons">
                                                    favorite
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    
                                    <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}
                                        <button type="submit" className="btn" style={{ borderRadius: '10px',backgroundColor: "#000000", color: "#FFFFFF " }}>
                                            Agregar al carrito
                                        </button>
                                            
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", color: "#FFFFFF  " }}>
                                    
                                    <span>{location.state.products[i].disponibilidad} en stock</span>
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

export function    VisualizarFactura(){
    const location = useLocation();
    console.log('hola');
    console.log(location.state);//"any type"
    //<p>Contenido de la página 2. Datos recibidos: {data.name}</p>
    const numColumnas = location.state.products.length; // Cantidad de columnas que deseas
    console.log(numColumnas);
    const columnas = [];
    var suma = 0;
    for (let i = 0; i < numColumnas; i++) {
        suma += location.state.products[i].producto.precio*location.state.products[i].cantidad
        columnas.push(
            <div className="row">
    <           div className="col s8" >
                    <div className="col s10"  style={{border: "1px solid #000000" }}>
                        <span >{location.state.products[i].producto.nombre}</span>
                    </div>            
                </div>
                <div className="col s2" >
                                
                </div>
                <div className="col s2" >
                    <div className="col s10"  style={{border: "1px solid #000000" }}>
                        <span >{location.state.products[i].cantidad}</span>
                    </div>            
                </div>
            </div>
           
        );
        }
    return (
        <div>
            <div className="row" style={{ color: "#FFFFFF" }} >
                <h1>
                    Factura
                </h1>
            </div>
                <div className="row" >
                            
                            <div className="col s6">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>img</h1>
                                    </div>
                                    
                                    
                                </div>
                                <div >
                                    <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}                             
                                                <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "#FFFFFF " }}>
                                                    Adjuntar Comprobante
                                                </button>                                 
                                        </div>
                                    </div>
                                    
                                    <br/>
                                    <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ marginTop: "10px" }}> {/* Agregar margen superior de 10px */}                             
                                                <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "#FFFFFF " }}>
                                                    Pagar
                                                </button>                                 
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col s6" >
                                <div  className="col s8"  style={{ backgroundColor: "#FFFFFF", color: "#000000" , fontSize: "26px" }}>
                                    <br/>
                                    <div className="row">
                                        <div className="col s8" >
                                            <div className="col s10"  >
                                                <span >Detalle de compra</span>
                                            </div>            
                                        </div>
                                        <div className="col s1" >
                                                        
                                        </div>
                                        <div className="col s2" >
                                            <div className="col s10"  >
                                                <span >Cantidad</span>
                                            </div>            
                                        </div>
                                    </div>
                                    {columnas}
                                    
                                    
    
                                    
                                    <div className="row">
                                        <div className="col s12">
                                            <span>Direccion de entrega</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="input-field col s12">
                                            <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            </select>
                                            <label>Materialize Select</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="row">
                                        <div className="col s12">
                                            <span>Detalles de direccion</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <textarea style={{ width: "300px", height: "200px" }} />
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div>
                                            <div className="col s5" style={{border: "1px solid #000000", marginLeft: "50px",marginRight:"100px"}}>
                                                <span>Total de compra</span>
                                            </div>
                                            
                                            <div className="col s3" style={{border: "1px solid #000000" }}>
                                                <span>{suma}</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                               
                                
                                
                            
                            </div>
                            
                            
                        
                </div>
        </div>
    
                        
    
        );
}
//}
//export default FrTienda;
