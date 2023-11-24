// src/components/Calendar.js
import React, { Fragment, useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';


import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js";
import Modal from "../components/Modal/Modal.js";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Lógica para obtener eventos desde la API o cualquier otra fuente de datos
    // Puedes implementar la lógica CRUD aquí también
    // Ejemplo: fetchEventsFromAPI().then(data => setEvents(data));
  }, []);

  const handleDateClick = (arg) => {
    // Implementa la lógica para crear un nuevo evento
    // Puedes mostrar un formulario para ingresar detalles del evento
    // y luego agregar el nuevo evento a la lista de eventos
  };

  const handleEventClick = (arg) => {
    // Implementa la lógica para actualizar o eliminar un evento
    // Puedes mostrar un modal con opciones de edición/eliminación
  };
  

  let navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddCat, setShowModalAddCat] = useState(false);

  const [nombrePublicacion, setNombrePublicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [palabraClave, setPalabraClave] = useState("");
  const [tags, setTags] = useState("");

  const [categorias, setCategorias] = useState([]); //Arreglo donde se cargan las categorias
  const [selectedCategoria, setSelectedCategoria] = useState(""); //Categoria seleccionada en el select
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [nuevaSubCategoria, setNuevaSubCategoria] = useState("");

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [subCats, setSubCats] = useState([]);

  const [imagenSeleccionada, setImagenSeleccionada] = useState('');
  const [contenidos, setContenidos] = useState([]);
  const [idContenidoToDelete, setIdContenidoToDelete] = useState("");

  const [formulario, setFormulario] = useState({
    nombre: "",
    imagen: null, // Para almacenar el archivo de imagen
    descripcion: "",
    categoria: "",
    subcategoria: "",
    palabrasClave: "",
    tags: "",
});

//------------------------------------
useEffect(() => {
  // Hacer una solicitud GET a tu API para obtener la lista de contenidos
  fetch("http://localhost:3000/api/contenido/getContenidos")
    .then((response) => response.json())
    .then((data) => setContenidos(data))
    .catch((error) => console.error("Error al obtener contenidos:", error));
}, []);

//----------------------------------------

const handleDelete = (idpubli) => {

  console.log("Valores a registrar:", idContenidoToDelete);

  var url = "http://localhost:3000/api/contenido/eliminarContenido";
  var response =fetch(url, {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify({ idContenido:idContenidoToDelete}),
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          

      })
      .catch(err => console.err(err));
};


  // -------------------------------------------

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

const Baseparacargarproducto = async () => {
  try {

  const response = await fetch('http://localhost:3000/api/contenido/registarContenido', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idContenido: nombrePublicacion,
        imagen:imagenSeleccionada,
        descripcion: descripcion,
        categoria:categoriaSeleccionada,
        subcategoria:subCats,
        palabrasClave:palabraClave,
        tags: tags,
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

  //*********************** Funciones acciones post get en la pagina ***********************
  
  // Esta función obtiene las categorías disponibles
  const obtenerCategorias = () => {
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
  };

  useEffect(() => {
      obtenerCategorias(); // Cuando se monta el componente, obtiene las categorías disponibles
  }, []);

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

  
  useEffect(() => {
    // Realizar una solicitud al servidor para obtener los contenidos
    fetch("http://localhost:3000/api/contenido/getContenidos")
      .then((response) => response.json())
      .then((data) => {
        setContenidos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los contenidos:", error);
      });
  }, []);


  //Funciones para navegar entre menus
  const handleGaleria = () => {
    navigate('/galeriaDuende', {});
  }

  const handleAgenda = () => {
    navigate('/Agenda', {});
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

        <div class="bg-white flex flex-col justify-center py-4 px-10 sm:px-24lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h3 className="text-center text-xl font-regular">
                LA AGENDA DEL DUENDE
              </h3>
            </div>

            <div>
              <hr className="my-2 h-0.5 border-t-0 bg-gray-400 opacity-100 dark:opacity-50" />
            </div>

            <div class="">
              <div className="calendar-container">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  events={events}
                  dateClick={handleDateClick}
                  eventClick={handleEventClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
  );
};

export default Calendar;
