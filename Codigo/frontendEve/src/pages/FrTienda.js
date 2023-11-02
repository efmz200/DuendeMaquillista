import React, {Fragment,useEffect,useState }  from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from "../components/Modal/Modal.js";


/**export default class FrTienda {
    constructor() {
    }*/


function MenuSuperior2() {
        const navigate = useNavigate();
      
        const handleGaleria = () => {
            navigate('/contenido', {});
        }
    
        /*const handleAgenda = () => {
            navigate('/menuAgenda', {});
        }*/
    
        const handleTienda = () => {
            navigate('/categorias', {});
        }
        const handleCarrito = () => {
            navigate('/carrito', {});
        }
    
        /*const handleMensajes = () => {
            navigate('/mensajesAdmin', {});
        }
    
        const handleMenuAdmin = () => {
            navigate('/menuAdmin', {});
        }*/
      
        return (
            <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-regular text-white">
                DUENDE MAQUILLISTA
              </h2>
              <br />
            </div>
    
    
            <div className="bg-medGreen flex flex-col justify-center py-4 sm:px-6 lg:px-8">
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={handleGaleria}
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-green bg-transparent border border-green rounded-l-lg hover:bg-green hover:text-white focus:z-10 focus:ring-2 focus:ring-green focus:bg-green focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:bg-green"
                >
                  La Galería del Duende
                </button>
                {/**<button
                  onClick={handleAgenda}
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:bg-green"
                >
                  La Agenda del Duende
        </button>*/}
                <button
                  onClick={handleTienda}
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:bg-green"
                >
                  La Tienda del Duende
                </button>
    
                <div className="ml-auto flex space-x-2">
                  {" "}
                  {/* Utilizamos ml-auto para mover estos botones al lado derecho*/ }
                  <button
                    onClick={handleCarrito}
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-medGreen rounded-lg hover:bg-medGreen focus:ring-4 focus:outline-none focus:ring-green dark:bg-medGreen dark:hover:bg-green dark:focus:ring-green"
                  >
                    C
                    
                  </button>
                  {/*<button
                    onClick={handleMensajes}
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-medGreen rounded-lg hover:bg-medGreen focus:ring-4 focus:outline-none focus:ring-green dark:bg-medGreen dark:hover:bg-green dark:focus:ring-green"
                  >
                    Mensajes
                    <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-green rounded-full">
                      2
                    </span>
                  </button>
                  <button
                    onClick={handleMenuAdmin}
                    type="button"
                    class="text-white focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-medgreen dark:hover:bg-green dark:focus:ring-green"
                  >
                    Menú Principal
                    <svg
                      class="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
    </button>*/}
                </div>
    
              </div>
            </div>
    
            </div>
            
        );
      }
function     cancelareventos(e){
        e.preventDefault();
    }
   
function    handleChange(e){
        const {name,value }= e.target;
        this.setState({
            [name]: value
        });
    
    }
    
export function    VisualizarCarrito(){//casilita *****
    



    
        
        const [listaProductos, setlistaProductos] = useState([]);
        
        const idCarrito = '6537366bd6e4e15f3beb9b0f'; // Reemplaza con el ID del carrito que estás buscando
        const url = 'http://localhost:3000/api/productos/getCarrito'; // Reemplaza con la URL de tu servidor
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
                                            
                                            <input type="number" name="cantidad" maxLength="16" value={listaProductos[i].cantidad} style={{  width: "50px", height: "30px",backgroundColor: "#FFFFFF" ,color:'#000000'}}/>
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
        <Fragment>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
        
        <MenuSuperior2 />
        


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular text-white">
                Carrito de Compras
              </h3>
            </div>

            




            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {columnas}
              

            </div>
          </div>
          <div className="text-center">
          <button type="submit" className="btn" style={{ backgroundColor: "#000000", color: "#FFFFFF " }}>
                    
                    <Link to="/factura" state={{  products:listaProductos }} style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>Realizar Compra</Link>
                                        
                </button>
          </div>
        </div>
      </div>
      

    </Fragment>
        );
        
    }

export function   VisualizarPublicacion(){//casi no lista *****

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
                    <div className="row" class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                
                                <div class="col s6">
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
                                <div class="col s6" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                    <div  className="col s8"  style={{ margin: '20px',borderRadius: '10px',backgroundColor: "#FFFFFF", color: "#000000" , fontSize: "26px" }}>
                                        
                                        <div className="col s12">
                                            <span>Descripcion</span>
                                        </div>
                                        
                                        
                                        <div className="col s12"  style={{border: "1px solid #000000"}} >
                                            <span >{objeto.descripcion} </span>
                                            
                                        </div>
        
                                        
                                        <div className="col s12">
                                            <span>Categoria</span>
                                        </div>
                                        
                                        
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            
                                            <span >{strCategoria}</span>
                                            
                                        </div>
                                        
                                        <div className="col s12">
                                            <span>Subcategoria</span>
                                        </div>
                                        
                                        
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strsubategoria}</span>
                                            
                                        </div>
                                        
                                        <div className="col s12">
                                            <span>Palabras clave</span>
                                        </div>
                                        
                                        
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strpalabrasClave}</span>
                                            
                                        </div>
                                        
                                        <div className="col s12">
                                            <span>#tags</span>
                                        </div>
                                        
                                        
                                        <div className="col s12"  style={{border: "1px solid #000000" }}>
                                            <span >{strtags} </span>
                                            
                                        </div>
                                        
                                        <h1></h1>
                                    </div>
                                   
                                    
                                    
                                
                                </div>
                                
                                
                            
                    </div>
            </div>
        )
        return (
            <Fragment>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
        <MenuSuperior2 />


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            

            




            <div >

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {cuadro}
              

            </div>
          </div>
        </div>
      </div>
      

    </Fragment>)
    }
export function    VisualizarCategoriaProductos(props){//lista ****
    const { user} = props;
    
    const [categorias2, setCategorias] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/api/productos/getCategoriaProductos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategorias(data.cats);
                
                
            });
    }, []);
    
    //console.log(numColumnas)
    console.log(categorias2)
    

    const columnas2 = [];

    for (let i = 0; i < categorias2.length; i++) {
        const data = { id: i, name: 'Ejemplo' };
        columnas2.push(
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-medGreen">
                <a href="#!" class="flex items-center justify-center">
                  <img
                    class="mx-auto rounded-t-lg"
                    src="https://i.pinimg.com/564x/3c/73/93/3c7393c4d177db993866c2752cb0e708.jpg"
                    alt=""
                  />
                </a>
                

                <div class="mb-4 flex items-center justify-center">
                  <div
                    class="inline-flex rounded-md shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                    role="group">
                    
                    
                    <button
                      type="button"
                      class="inline-block rounded-r bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      >
                      <Link to="/categoriaproductos" state={{ name: categorias2[i].nombre, products:categorias2[i].Productos }} class="inline-block rounded-r bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black">{ categorias2[i].nombre }</Link>
                                                              
                    </button>
                    <button type="submit" className="btn" style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                                            
                                        
                                            
                                        </button>
                  </div>
                </div>

              </div>
                
        );
    }

    return (
        <Fragment>
            <h1>
                {user}
            </h1>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
        <MenuSuperior2 />


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular text-white">
                La Tienda de DUENDE
              </h3>
            </div>

            




            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {columnas2}
              

            </div>
          </div>
        </div>
      </div>
      

    </Fragment>
    );
}
export function    VisualizarProductos(){//casi lista *****
        
        const clickAgregarProducto = (codigo,cantidad) => {
            
            agregarProductoCarrito(codigo,cantidad);
        }
    
        const agregarProductoCarrito = async (codigo,cantidad) => {
            try {
            const response = await fetch('http://localhost:3000/api/productos/agregarProductoCarrito', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idCarrito: '6537366bd6e4e15f3beb9b0f', // Asigna los valores adecuados
                    codigoProducto: codigo,
                    cantidad: cantidad
                })
            });
        
            const data = await response.json();
            console.log(data); // Maneja la respuesta como necesites en tu aplicación React
        
            // Actualiza la interfaz o el estado según sea necesario
            } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            // Maneja los errores
            }
        };
        const location = useLocation();
        console.log('hola');
        console.log(location.state);//"any type"
        //<p>Contenido de la página 2. Datos recibidos: {data.name}</p>
        const numColumnas = location.state.products.length; // Cantidad de columnas que deseas
        // Un array de elementos JSX para representar las columnas
        const columnas = [];

        for (let i = 0; i < numColumnas; i++) {
        let cantidadInput = React.createRef(); // Crear una referencia para cada input

        
        columnas.push(
            <div className="col s4" >
                        
                            
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ backgroundColor: "white", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={location.state.products[i].imagen} alt="Descripción de la imagen" style={{  width: "200px", height: "150px" }}/>
                                    </div>
                                    
                                    
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className='row' style={{  width: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" , color: "#FFFFFF  " }}>
                                        <div className='col s4'>
                                            <span> {location.state.products[i].precio}</span>
                                        </div>
                                        <div className='col s4'>
                                            
                                        <input
                                            type="number"
                                            ref={cantidadInput} // Asignar la referencia al input
                                            name="cantidad"
                                            maxLength="16"
                                            style={{ width: "30px", height: "30px", backgroundColor: "#FFFFFF", color: "#000000" }}
                                        /></div>
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
                                        <button type="submit" onClick={() => clickAgregarProducto(location.state.products[i].codigo, parseInt(cantidadInput.current.value))} className="btn" style={{ borderRadius: '10px',backgroundColor: "#000000", color: "#FFFFFF " }}>
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
            <Fragment>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
      <MenuSuperior2 />


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular text-white">
              {location.state.name}
              </h3>
            </div>

            




            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {columnas}
              

            </div>
          </div>
        </div>
      </div>
      

    </Fragment>)

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

    
export function    VisualizarTienda(){//casi lista ****
    
        
        const [contenidos, setCategorias] = useState([]);
        const [numColumnas, setNumColumnas] = useState(0);
    
        useEffect(() => {
            fetch('http://localhost:3000/api/contenido/getContenidos')
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
            <Fragment>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
      <MenuSuperior2 />


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular text-white">
              La galeria del duende
              </h3>
            </div>

            




            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {columnas2}
              

            </div>
          </div>
        </div>
      </div>
      

    </Fragment>)
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
            <div className="row" class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <           div className="col s8" >
                    <div className="col s10"  style={{border: "1px solid #000000" }}>
                        <span >{location.state.products[i].producto.nombre}</span>
                    </div>            
                </div>
                
                <div className="col s2" >
                    <div className="col s10"  style={{border: "1px solid #000000" }}>
                        <span >{location.state.products[i].cantidad}</span>
                    </div>            
                </div>
            </div>
           
        );
        }

    const cuando = (<div>
        <div className="row" style={{ color: "#FFFFFF" }} >
            <h1>
                Factura
            </h1>
        </div>
            
            <div className='row' class="grid grid-cols-1 md:grid-cols-2 gap-2">

            
                        <div  className="col s6">
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
                        <div  className="col s6" >
                            <div  className="col s8"  style={{ backgroundColor: "#FFFFFF", color: "#000000" , fontSize: "26px" }}>
                                <br/>
                                <div className="row" class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div className="col s8" >
                                        <div className="col s10"  >
                                            <span >Detalle de compra</span>
                                        </div>            
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
                                <div className="row" class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div class="input-field col s4">
                                        <select>
                                        <option value="" disabled selected>Provincia</option>
                                        <option value="Cartago">Cartago</option>
                                        <option value="San Jose">San Jose</option>
                                        
                                        </select>
                                        
                                    </div>
                                    <div class="input-field col s4">
                                        <select>
                                        <option value="" disabled selected>Canton</option>
                                        <option value="Turrialba">Turrialba</option>
                                        <option value="Montes de Oca">Montes de Oca</option>
                                        
                                        </select>
                                        
                                    </div>
                                    <div class="input-field col s4">
                                        <select>
                                        <option value="" disabled selected>Distrito</option>
                                        <option value="Santa Teresita">Santa Teresita</option>
                                        <option value="Sabanilla">Sabanilla</option>
                                        
                                        </select>
                                        
                                    </div>
                                </div>
                                
                                
                                <div className="row">
                                    <div className="col s12">
                                        <span>Detalles de direccion</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <textarea style={{ width: "300px", height: "200px",border: "1px solid #000000"}} />
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div className="col s5" style={{border: "1px solid #000000"}}>
                                            <span>Total de compra</span>
                                        </div>
                                        <div>

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
)
    return (
        <Fragment>
      <div className="main-h-screen bg-black flex flex-col justify-center py-4">
      <MenuSuperior2 />


        <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular text-white">
                La Tienda de DUENDE
              </h3>
            </div>

            




            <div >

              {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}
                {cuando}
              

            </div>
          </div>
        </div>
      </div>
      

    </Fragment>
        
                        
    
        );
}
//}
//export default FrTienda;
