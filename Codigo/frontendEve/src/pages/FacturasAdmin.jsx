import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js";
import Modal from "../components/Modal/Modal.js";

function FacturasAdmin() {
    let navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalAddCat, setShowModalAddCat] = useState(false);

    const [nombreProducto, setNombreProducto] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidadProducto, setCantidadProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [codigoproductoUI, setcodigoproductoUI] = useState("");

    const [contenidos, setContenidos] = useState([]);


    const [subCategoria, setSubCategoria] = useState("");
    const [categorias, setCategorias] = useState([]); //Arreglo donde se cargan las categorias
    const [selectedCategoria, setSelectedCategoria] = useState(""); //Categoria seleccionada en el select
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevaSubCategoria, setNuevaSubCategoria] = useState("");

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [subCats, setSubCats] = useState([]);
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');

    //*********************** Funciones acciones post get en la pagina ***********************

    const handleImageChange = (event) => {
        const archivoImagen = event.target.files[0];

        if (archivoImagen && archivoImagen.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = () => {
            setImagenSeleccionada(reader.result);
        };

        reader.readAsDataURL(archivoImagen);
        } else {
        setImagenSeleccionada('');
        // Puedes manejar el error o mostrar un mensaje al usuario aquí
        }
        //baseparacargarproducto()
    };
    // Esta función obtiene las categorías disponibles
    /*const obtenerCategorias = () => {
        fetch("http://localhost:3000/api/productos/getCategoriaProductos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener categorías");
                }
                return response.json();
            })
            .then((data) => {
                setCategorias(data.cats);
            })
            .catch((error) => {
                console.error("Error al obtener categorías:", error);
            });
    };

    useEffect(() => {
        obtenerCategorias(); // Cuando se monta el componente, obtiene las categorías disponibles
    }, []);*/
    const cambiarEstado = async (numeroFacturap,estadop) => {
        try {
        const response = await fetch('http://localhost:3000/api/notificaciones/actualizarEstadoFactura', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numeroFactura: numeroFacturap,
                estado: estadop,
                })
            
        });
        try {
            const response = await fetch('http://localhost:3000/api/notificaciones/agregarNotificacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correoEmisor:'ad.min@gmail.com',
                    correoReceptor:'jose@p.com',
                    mensaje: 'la factura #'+numeroFacturap+' ha pasado a sido ' + estadop
                })

            });

            const data = await response.json();
            console.log(data); // Maneja la respuesta como necesites en tu aplicación React
           

            // Actualiza la interfaz o el estado según sea necesario
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            // Maneja los errores
        }
    
        const data = await response.json();
        console.log(data); // Maneja la respuesta como necesites en tu aplicación React
        
        // Actualiza la interfaz o el estado según sea necesario
        } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        // Maneja los errores
        }
    };

    const handleCategoriaChange = (e) => {
        const selectedCategoria = e.target.value;
        setCategoriaSeleccionada(selectedCategoria);
        setSubCats([]); // Limpia las subcategorías al cambiar la categoría seleccionada
        console.log(selectedCategoria);

        if (selectedCategoria) {
            // Si se seleccionó una categoría, obtener las subcategorías correspondientes
            fetch(`http://localhost:3000/api/contenido/getSubcategoria?categoria=${selectedCategoria}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al obtener subcategorías");
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.status) {
                        setSubCats(data.subCats);
                    } else {
                        console.error(data.descripcion);
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener subcategorías:", error);
                });
        }
    };

    //---------------------------------------------------------------------------------------
    //Funcion para cargar las categorias
    /*useEffect(() => {
        // Hacer una solicitud para obtener las categorías desde la API
        fetch("http://localhost:3000/api/contenido/getCategorias")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener categorías");
                }
                return response.json();
            })
            .then((data) => {
                setCategorias(data);
            })
            .catch((error) => {
                console.error("Error al obtener categorías:", error);
            });
    }, []);*/


    useEffect(() => {
        // Hacer una solicitud para obtener las categorías desde la API
        fetch("http://localhost:3000/api/notificaciones/verFacturas",{
            method: 'POST',
            body: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener productos");
                }
                return response.json();
            })
            .then((data) => {
                setContenidos(data.facturas);
                console.log(data.facturas)
            })
            .catch((error) => {
                console.error("Error al obtener categorías:", error);
            });
    }, []);

    //Funcion agregar una categoria a BD
    function agregarCategoria() {
        var categoria = {
            pNombreCategoria: nuevaCategoria
        };

        console.log("Valores a registrar:", categoria);

        fetch('http://localhost:3000/api/contenido/agregarCategorias', {
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(err => console.err(err));
    }

    //Funcion agregar una subCategoria
    function agregarSubCategoria() {
        console.log(selectedCategoria);
        var categoria = {
            categoria: selectedCategoria,
            nombre: nuevaSubCategoria
        };

        console.log("Valores a registrar:", categoria);

        fetch('http://localhost:3000/api/contenido/agregarSubcategoria', {
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(err => console.err(err));
    }

    //Funcion obtener lista categorias para el select
    function cargarCategorias() {
        // Realizar una solicitud GET a la API para obtener las categorías
        fetch('http://localhost:3000/api/contenido/getCategorias')
            .then(response => response.json())
            .then(data => {
                this.setState({ categorias: data });
            })
            .catch(error => {
                console.error('Error al obtener las categorías:', error);
            });
    }

    //Funcion obtener lista categorias para el select
    function cargarSubCategorias() {
        // Realizar una solicitud GET a la API para obtener las categorías
        fetch('http://localhost:3000/api/contenido/getSubcategoria')
            .then(response => response.json())
            .then(data => {
                this.setState({ categorias: data });
            })
            .catch(error => {
                console.error('Error al obtener las categorías:', error);
            });
    }


    const handleServicios = () => {
        navigate("/servicioMaquillaje", {});
    };

    const handleCursos = () => {
        navigate("/cursosTalleres", {});
    };

    const handleEntregas = () => {
        navigate("/entregasClientes", {});
    };

    const handleMenu = () => {
        navigate("/menuAdmin", {});
    };

    const handleGaleria = () => {
        navigate("/galeriaDuende", {});
    };

    const handleAgenda = () => {
        navigate("/Agenda", {});
    };

    const handleTienda = () => {
        navigate("/tiendaDuende", {});
    };

    const handleMensajes = () => {
        navigate("/mensajesAdmin", {});
    };

    const handleMenuAdmin = () => {
        navigate("/menuAdmin", {});
    };

    const columnas = [];

    for (let i = 0; i < contenidos.length; i++) {
            const data = { id: contenidos.id};
            columnas.push(<div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-medGreen">
               
            
            <div class="p-6">
                <h5 class="mb-2 text-xl align-it font-medium leading-tight text-medGreen dark:text-neutral-50">
                { contenidos[i].numeroFactura}
                </h5>
                <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                { contenidos[i].detalleCompra}
                </p>
                <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                { contenidos[i].fecha}
                </p>
                
                <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                    ${ contenidos[i].total}
                </p>
                <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                { contenidos[i].direccion}
                </p>
                <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                { contenidos[i].estado}
                </p>
                <img
                    class="mx-auto rounded-t-lg"
                    src={ contenidos[i].comprobante}
                    alt=""
                />

                
            </div>

            <div class="mb-4 flex items-center justify-center">
                <div
                    class="inline-flex rounded-md shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                    role="group"
                >
                    <button
                        type="button"
                        class="inline-block rounded-l bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => cambiarEstado(contenidos[i].numeroFactura,'Aceptada')}
                    >
                        Aceptar
                    </button>
                    
                    <button
                        type="button"
                        class="inline-block rounded-r bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => cambiarEstado(contenidos[i].numeroFactura,'Rechazada ')}
                    >
                        Rechazar
                    </button>
                </div>
            </div>
        </div>);
    }

    return (
        <Fragment>
            <div className="main-h-screen bg-black flex flex-col justify-center py-4">
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
                        <button
                            onClick={handleAgenda}
                            type="button"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:bg-green"
                        >
                            La Agenda del Duende
                        </button>
                        <button
                            onClick={handleTienda}
                            type="button"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:bg-green dark:focus:bg-green"
                        >
                            La Tienda del Duende
                        </button>

                        <div className="ml-auto flex space-x-2">
                            {" "}
                            {/* Utilizamos ml-auto para mover estos botones al lado derecho */}
                            <button
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
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-darkGreen flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h3 className="text-center text-xl font-regular text-white">
                                Facturas
                            </h3>
                        </div>

{/**                        <div class="flex justify-center">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">
                                    Search
                                </label>
                                <div class="relative w-80">
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full pl-10 p-2.5  dark:bg-black dark:border-medGreen dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green"
                                        placeholder="Realizar búsqueda"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="p-2.5 ml-2 text-sm font-medium text-white bg-medGreen rounded-lg border border-medGreen hover:bg-green focus:ring-4 focus:outline-none focus:ring-green dark:bg-medGreen dark:hover:bg-green dark:focus:ring-green"
                                >
                                    <svg
                                        class="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </form>

                            <div class="p-10 px-20 flex items-center">
                                <label for="underline_select" class="sr-only">Underline select</label>
                                <select id="underline_select" value={categoriaSeleccionada} onChange={handleCategoriaChange}
                                    class="block py-2.5 px-6 w-full bg-transparent border-0 border-b-2 border-medGreen text-white text-sm peer">
                                    <option value="" class="bg-black">Categoría</option>
                                    {categorias.map((cat, index) => (
                                        <option class="bg-black" key={index} value={cat.nombre}>
                                            {cat.nombre}
                                        </option>
                                    ))}
                                </select>

                                
                                <div class="inline-block relative">
                                    <button
                                        type="button"
                                        class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green"
                                    >
                                        Filtrar
                                    </button>
                                </div>

                                <div class="inline-block relative px-2">
                                    <button
                                        type="button"
                                        class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green"
                                        onClick={() => setShowModalAdd(true)}
                                    >
                                        Agregar
                                    </button>
                                </div>
                                <div class="inline-block relative">
                                    <button
                                        type="button"
                                        class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green"
                                        onClick={() => setShowModalAddCat(true)}
                                    >
                                        +Categoría
                                    </button>
                                </div>
                            </div>
                                    </div>*/}

                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}

                            {columnas}
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}

export default FacturasAdmin;
