import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js";
import Modal from "../components/Modal/Modal.js";

function TiendaDuende() {
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


    const [subCategoria, setSubCategoria] = useState("");
    const [categorias, setCategorias] = useState([]); //Arreglo donde se cargan las categorias
    const [selectedCategoria, setSelectedCategoria] = useState(""); //Categoria seleccionada en el select
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevaSubCategoria, setNuevaSubCategoria] = useState("");

    //*********************** Funciones acciones post get en la pagina ***********************

    //Funcion para cargar las categorias
    useEffect(() => {
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
        navigate("/menuAgenda", {});
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
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:bg-green"
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
                                LA TIENDA DEL DUENDE
                            </h3>
                        </div>

                        <div class="flex justify-center">
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
                                <label for="underline_select" class="sr-only">
                                    Underline select
                                </label>
                                <select
                                    id="underline_select"
                                    class="block py-2.5 px-6 w-full bg-transparent border-0 border-b-2 border-medGreen text-white text-sm peer"
                                >
                                    <option selected class="bg-black">
                                        Categoría
                                    </option>
                                    <option value="A" class="bg-black">
                                        A
                                    </option>
                                    <option value="B" class="bg-black">
                                        B
                                    </option>
                                    <option value="C" class="bg-black">
                                        C
                                    </option>
                                    <option value="D" class="bg-black">
                                        D
                                    </option>
                                </select>

                                <label for="underline_select" class="sr-only">
                                    Underline select
                                </label>
                                <select
                                    id="underline_select"
                                    class="block py-2.5 px-6 w-full bg-transparent border-0 border-b-2 border-medGreen text-white text-sm peer"
                                >
                                    <option selected class="bg-black">
                                        Subcategoría ----
                                    </option>
                                    <option value="A" class="bg-black">
                                        A
                                    </option>
                                    <option value="B" class="bg-black">
                                        B
                                    </option>
                                    <option value="C" class="bg-black">
                                        C
                                    </option>
                                    <option value="D" class="bg-black">
                                        D
                                    </option>
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
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Hacer un foreach para cada una de las imagenes y tarjetas del arreglo en BD */}

                            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-medGreen">
                                <a href="#!" class="flex items-center justify-center">
                                    <img
                                        class="mx-auto rounded-t-lg"
                                        src="https://m.media-amazon.com/images/I/81LDRu+48lL._AC_UF1000,1000_QL80_.jpg"
                                        alt=""
                                    />
                                </a>
                                <div class="p-6">
                                    <h5 class="mb-2 text-xl align-it font-medium leading-tight text-medGreen dark:text-neutral-50">
                                        Kit maquillaje
                                    </h5>
                                    <p class="mb-2 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                                        Descripción
                                    </p>
                                    <p class="mb-2 px-16 text-base text-medGreen dark:text-neutral-200 flex-wrap inline-block">
                                        $ precio
                                    </p>

                                    <div class="sm:order-1 inline-block">
                                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                            <button class="flex items-center justify-center rounded-l-md bg-black px-4 transition hover:bg-green hover:text-white text-white">
                                                -
                                            </button>
                                            <div class="flex w-12 items-center justify-center bg-darkGreen px-4 text-xs uppercase transition text-white">
                                                1
                                            </div>
                                            <button class="flex items-center justify-center rounded-r-md bg-black px-4 transition hover:bg-green hover:text-white text-white">
                                                +
                                            </button>
                                        </div>
                                    </div>
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
                                            onClick={() => setShowModal(true)}
                                        >
                                            Cambiar imagen
                                        </button>
                                        <button
                                            type="button"
                                            class="inline-block bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            onClick={() => setShowModalEdit(true)}
                                        >
                                            Editar Producto
                                        </button>
                                        <button
                                            type="button"
                                            class="inline-block rounded-r bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            onClick={() => setShowModalDel(true)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="p-6">
                    <form className="space-y-6">
                        <div>
                            <h3 className="text-center text-2xl font-semibold text-white">
                                Actualizar Imagen
                            </h3>
                        </div>
                        <label htmlFor="text" className="text-gray-100">
                            Nueva imagen
                        </label>
                        <input
                            class="block w-full text-m py-2 px-2 text-white border border-green rounded-lg cursor-pointer bg-medGreen dark:text-white focus:outline-none dark:bg-darkGreen dark:border-green dark:placeholder-gray-400"
                            id="file_input"
                            type="file"
                        />
                        <div class="p-4 text-center">
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2"
                            >
                                Actualizar Imagen
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal isVisible={showModalEdit} onClose={() => setShowModalEdit(false)}>
                <div className="p-6">
                    <form className="space-y-2">
                        <div>
                            <h3 className="text-center text-2xl font-semibold text-white">
                                Editar Producto
                            </h3>
                        </div>
                        <textarea
                            name="descripcion"
                            type="text"
                            required
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Descripción"
                        />

                        <input
                            name="cantidad"
                            type="number"
                            required
                            value={cantidadProducto}
                            onChange={(e) => setCantidadProducto(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Cantidad Producto"
                        />

                        <input
                            name="precio"
                            type="number"
                            required
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Precio Producto"
                        />

                        <select
                            id="underline_select"
                            class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer"
                        >
                            <option selected>Categoría</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>

                        <select
                            id="underline_select"
                            class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer"
                        >
                            <option selected>Subcategoría</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>

                        <div class="p-4 text-center">
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2"
                            >
                                Actualizar Producto
                            </button>
                            <button
                                onClick={() => setShowModalEdit(false)}
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal isVisible={showModalDel} onClose={() => setShowModalDel(false)}>
                <div className="p-6">
                    <div class="p-6 text-center">
                        <svg
                            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
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
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <h3 class="mb-5 text-lg font-normal dark:text-white">
                            ¿Está seguro que desea eliminar está publicación?
                        </h3>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        >
                            Sí, Estoy seguro
                        </button>
                        <button
                            data-modal-hide="popup-modal"
                            onClick={() => setShowModalDel(false)}
                            type="button"
                            class="text-white rounded-lg text-sm font-medium px-5 py-2.5 hover:text-green focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:ring-green"
                        >
                            No, cancelar
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal isVisible={showModalAdd} onClose={() => setShowModalAdd(false)}>
                <div className="p-6">
                    <form className="space-y-2">
                        <div>
                            <h3 className="text-center text-2xl font-semibold text-white">
                                Agregar Producto Inventario
                            </h3>
                            <br />
                        </div>

                        <input
                            name="nombreProducto"
                            type="text"
                            required
                            value={nombreProducto}
                            onChange={(e) => setNombreProducto(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Nombre Producto"
                        />

                        <textarea
                            name="descripcion"
                            type="text"
                            required
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Descripción"
                        />

                        <input
                            name="cantidadProducto"
                            type="text"
                            required
                            value={cantidadProducto}
                            onChange={(e) => setCantidadProducto(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Cantidad Producto"
                        />

                        <input
                            name="precio"
                            type="text"
                            required
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                            placeholder="Precio Producto"
                        />

                        <select
                            id="underline_select"
                            class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer"
                        >
                            <option selected>Categoría</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>

                        <select
                            id="underline_select"
                            class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer"
                        >
                            <option selected>Subcategoría</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>

                        <input
                            class="block w-full text-sm py-2 px-2 text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-800 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-800"
                            id="file_input"
                            type="file"
                            multiple
                        />

                        <div class="p-4 text-center">
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2"
                            >
                                Agregar Producto
                            </button>
                            <button
                                onClick={() => setShowModalAdd(false)}
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal isVisible={showModalAddCat} onClose={() => setShowModalAddCat(false)}>
                <div className="p-6">
                    <form className="space-y-2">
                        <div>
                            <h3 className='text-center text-2xl font-semibold text-white'>Agregar Categorías</h3><br />
                        </div>

                        <input name='nuevaCategoria' type='text' required value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Nueva categoría" />

                        <div>
                            <h3 className='text-center text-xl font-semibold py-2 text-white'>Agregar SubCategorías</h3><br />
                        </div>

                        <select
                            value={selectedCategoria} onChange={(e) => setSelectedCategoria(e.target.value)}
                            id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
                            <option value="">Selecciona una categoría</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.nombre} value={categoria.nombre}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>

                        <input name='nuevaSubCategoria' type='text' required value={nuevaSubCategoria} onChange={(e) => setNuevaSubCategoria(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Nueva subcategoría" />

                        <div class="p-4 text-center">
                            <button
                                onClick={agregarCategoria}
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                                Agregar Categoría
                            </button>

                            <button
                                onClick={agregarSubCategoria}
                                data-modal-hide="popup-modal"
                                type="button"
                                class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                                Agregar SubCategoría
                            </button>

                            <button onClick={() => setShowModalAddCat(false)} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Cancelar</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </Fragment>
    );
}

export default TiendaDuende;
