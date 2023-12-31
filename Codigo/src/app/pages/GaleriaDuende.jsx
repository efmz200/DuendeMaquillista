import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js";
import Modal from "../components/Modal/Modal.js";

function GaleriaDuende() {

  let navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddCat, setShowModalAddCat] = useState(false);

  const [nombrePublicacion, setNombrePublicacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [palabraClave, setPalabraClave] = useState("");
  const [tags, setTags] = useState("");

  const [categoria, setCategoria] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [subCategoria, setSubCategoria] = useState("");


  const handleGaleria = () => {
    navigate('/galeriaDuende', {});
  }

  const handleAgenda = () => {
    navigate('/menuAgenda', {});
  }

  const handleTienda = () => {
    navigate('/tiendaDuende', {});
  }

  const handleMensajes = () => {
    navigate('/mensajesAdmin', {});
  }

  const handleMenuAdmin = () => {
    navigate('/menuAdmin', {});
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
                LA GALERÍA DEL DUENDE
              </h3>
            </div>

            <div class="flex justify-center">



              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-80">

                  <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full pl-10 p-2.5  dark:bg-black dark:border-medGreen dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Realizar búsqueda" required />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-medGreen rounded-lg border border-medGreen hover:bg-green focus:ring-4 focus:outline-none focus:ring-green dark:bg-medGreen dark:hover:bg-green dark:focus:ring-green">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>

              <div class="p-10 px-20 flex items-center">

                <label for="underline_select" class="sr-only">Underline select</label>
                <select id="underline_select" class="block py-2.5 px-6 w-full bg-transparent border-0 border-b-2 border-medGreen text-white text-sm peer">
                  <option selected class="bg-black">Categoría</option>
                  <option value="A" class="bg-black">A</option>
                  <option value="B" class="bg-black">B</option>
                  <option value="C" class="bg-black">C</option>
                  <option value="D" class="bg-black">D</option>
                </select>

                <label for="underline_select" class="sr-only">Underline select</label>
                <select id="underline_select" class="block py-2.5 px-6 w-full bg-transparent border-0 border-b-2 border-medGreen text-white text-sm peer">
                  <option selected class="bg-black">Subcategoría  ----</option>
                  <option value="A" class="bg-black">A</option>
                  <option value="B" class="bg-black">B</option>
                  <option value="C" class="bg-black">C</option>
                  <option value="D" class="bg-black">D</option>
                </select>



                <div class="inline-block relative">
                  <button
                    type="button"
                    class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green">
                    Filtrar
                  </button>
                </div>

                <div class="inline-block relative px-2">
                  <button
                    type="button"
                    class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green"
                    onClick={() => setShowModalAdd(true)}>
                    Agregar
                  </button>
                </div>
                <div class="inline-block relative">
                  <button
                    type="button"
                    class="bg-medGreen text-white font-semibold py-2.5 px-8 rounded inline-flex items-center dark:hover:bg-green dark:focus:ring-green"
                    onClick={() => setShowModalAddCat(true)}>
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
                    src="https://i.pinimg.com/564x/3c/73/93/3c7393c4d177db993866c2752cb0e708.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="mb-2 text-xl align-it font-medium leading-tight text-medGreen dark:text-neutral-50">
                    Nombre maquillaje
                  </h5>
                  <p class="mb-4 text-base text-medGreen dark:text-neutral-200 flex-wrap">
                    Descripción
                  </p>
                  <p class="mb-4 text-base text-medGreen dark:text-neutral-200">
                    #hashtag
                  </p>

                  <form>
                    <div class="flex items-center px-3 py-2 rounded-lg bg-green dark:bg-medGreen">

                      <textarea id="chat" rows="1" class="block mx-4 p-4 w-full text-sm text-white bg-green rounded-lg border border-green focus:ring-green focus:border-green dark:bg-black dark:border-medGreen dark:placeholder-gray-400 dark:text-green dark:focus:ring-green dark:focus:border-green" placeholder="Tu mensaje..."></textarea>
                      <button type="submit" class="inline-flex justify-center p-2 text-green rounded-full cursor-pointer hover:bg-green dark:text-black dark:hover:bg-green">
                        <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span class="sr-only">Enviar mensaje</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div class="mb-4 flex items-center justify-center">
                  <div
                    class="inline-flex rounded-md shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                    role="group">
                    <button
                      type="button"
                      class="inline-block rounded-l bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => setShowModal(true)}>
                      Cambiar imagen
                    </button>
                    <button
                      type="button"
                      class="inline-block bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => setShowModalEdit(true)}>
                      Editar Publicación
                    </button>
                    <button
                      type="button"
                      class="inline-block rounded-r bg-black px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-black dark:hover:bg-black dark:focus:bg-black dark:active:bg-black"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => setShowModalDel(true)}>
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
              <h3 className='text-center text-2xl font-semibold text-white'>Actualizar Imagen</h3>
            </div>
            <label htmlFor='text' className='text-gray-100'>Nueva imagen</label>
            <input
              name='imagen'
              type='text'
              required value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Url Imagen" />
            <div class="p-4 text-center">
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                Actualizar Imagen
              </button>
              <button onClick={() => setShowModal(false)} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Cancelar</button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal isVisible={showModalEdit} onClose={() => setShowModalEdit(false)}>
        <div className="p-6">
          <form className="space-y-2">
            <div>
              <h3 className='text-center text-2xl font-semibold text-white'>Editar Publicación</h3>
            </div>

            <textarea name='descripcion' type='text' required value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Descripción" />

            <input name='descripcion' type='text' required value={palabraClave} onChange={(e) => setPalabraClave(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Palabras Clave" />


            <select id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
              <option selected>Categoría</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <select id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
              <option selected>Subcategoría</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <input name='descripcion' type='text' required value={tags} onChange={(e) => setTags(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="#Tags" />


            <div class="p-4 text-center">
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                Actualizar Publicación
              </button>
              <button onClick={() => setShowModalEdit(false)} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Cancelar</button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal isVisible={showModalDel} onClose={() => setShowModalDel(false)}>
        <div className="p-6">
          <div class="p-6 text-center">
            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 class="mb-5 text-lg font-normal dark:text-white">¿Está seguro que desea eliminar está publicación?</h3>
            <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Sí, Estoy seguro
            </button>
            <button data-modal-hide="popup-modal" onClick={() => setShowModalDel(false)} type="button" class="text-white rounded-lg text-sm font-medium px-5 py-2.5 hover:text-green focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:hover:bg-green dark:focus:ring-green">No, cancelar</button>

          </div>
        </div>
      </Modal>

      <Modal isVisible={showModalAdd} onClose={() => setShowModalAdd(false)}>
        <div className="p-6">
          <form className="space-y-2">
            <div>
              <h3 className='text-center text-2xl font-semibold text-white'>Agregar Publicación</h3><br />
            </div>

            <input name='nombrePublicacion' type='text' required value={nombrePublicacion} onChange={(e) => setNombrePublicacion(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Nombre Publicación" />

            <input name='imagen' type='text' required value={imagen} onChange={(e) => setImagen(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Url Imagen" />


            <textarea name='descripcion' type='text' required value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Descripción" />

            <input name='descripcion' type='text' required value={palabraClave} onChange={(e) => setPalabraClave(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Palabras Clave" />


            <select id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
              <option selected>Categoría</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <select id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
              <option selected>Subcategoría</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <input name='descripcion' type='text' required value={tags} onChange={(e) => setTags(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="#Tags" />


            <div class="p-4 text-center">
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                Actualizar Publicación
              </button>
              <button onClick={() => setShowModalAdd(false)} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Cancelar</button>
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
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Nueva categoría/subcategoría" />

            <input name='descripcion' type='text' required value={palabraClave} onChange={(e) => setPalabraClave(e.target.value)}
              className='appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-green focus:border-green sm:text-sm' placeholder="Palabras Clave" />


            <select id="underline_select" class="block py-2.5 px-6 w-full bg-white rounded-lg border-0 border-b-2 border-medGreen text-gray-800 text-sm peer">
              <option selected>Tipo</option>
              <option value="categoria">Categoría</option>
              <option value="subcategoria">Subcategoría</option>
            </select>

            <div class="p-4 text-center">
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-white hover:bg-green focus:ring-4 focus:outline-none rounded-lg border-darkGreen text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-darkGreen dark:text-white dark:hover:text-white dark:focus:ring-green mr-2">
                Agregar
              </button>
              <button onClick={() => setShowModalAddCat(false)} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Cancelar</button>
            </div>
          </form>
        </div>
      </Modal>

    </Fragment>
  );
}

export default GaleriaDuende;
