// src/components/Calendar.js
import React, { Fragment, useState, useEffect, useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import Event from './Event';
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js";


const Calendar = () => {
  let navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: '', start: '', end: '', type: 'tipo' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const calendarRef = useRef();

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().batchRendering(() => {
        calendarRef.current.getApi().removeAllEvents();
        calendarRef.current.getApi().addEventSource(events);
      });
    }
  }, [events]);

  const handleDateClick = (arg) => {
    setFormData({ title: '', start: arg.date, end: arg.date, type: 'other' });
    setSelectedEvent(null);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setFormData({
      title: info.event.title,
      start: info.event.start.toISOString().split('Z'),
      end: info.event.end ? info.event.end.toISOString().split('Z') : '',
      type: info.event.extendedProps.type || 'other',
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      selectedEvent.setProp('title', formData.title);
      selectedEvent.setStart(formData.start);
      selectedEvent.setEnd(formData.end);
      selectedEvent.setExtendedProp('type', formData.type);
      setEvents((prevEvents) => prevEvents.map((event) => (event === selectedEvent ? selectedEvent : event)));
      setSelectedEvent(null);
    } else {
      const newEvent = {
        title: formData.title,
        start: formData.start,
        end: formData.end,
        allDay: false,
        extendedProps: {
          type: formData.type,
        },
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    setFormData({ title: '', start: '', end: '', type: 'other' });
  };

  const handleEventDelete = () => {
    if (selectedEvent) {
      selectedEvent.remove();
      setEvents((prevEvents) => prevEvents.filter((event) => event !== selectedEvent));
      setSelectedEvent(null);
      setFormData({ title: '', start: '', end: '', type: 'other' });
    }
  };


  // ------------------------------------------------- handle botones menu -------------------------------------------

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


    <div className=" bg-black main-h-screen flex flex-col justify-center py-2">


      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-regular bg-black text-white">
          DUENDE MAQUILLISTA
        </h2>
        <br />
      </div>

      <div className="bg-medGreen flex flex-col justify-center py-2 sm:px-6 lg:px-8">
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
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:bg-green dark:focus:bg-green"
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
              type="button"
              //onClick={() => setShowModalEvento(true)}
              class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-medGreen rounded-lg hover:bg-medGreen focus:ring-4 focus:outline-none focus:ring-green dark:bg-medGreen dark:hover:bg-green dark:focus:ring-green"
            >
              Agregar Evento
            </button>
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

          <div className="px-40 items-center justify-center">
            <div className="items-center justify-center py-4">

              <form onSubmit={handleFormSubmit}>
                <div>
                <label className="mr-2">
                  Evento:
                  <input
                    className="ml-2"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  
                  <select className="mr-2"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="tipo">Tipo de evento</option>
                    <option value="cursoTaller">Curso o Taller</option>
                    <option value="maquillaje">Servicio Maquillaje</option>
                    <option value="entregas">Entregas</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                <label className="mr-8">
                  Inicio:
                  <input
                    className="ml-2"
                    type="datetime-local"
                    name="start"
                    value={formData.start}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="mr-2">
                  Fin:
                  <input 
                  className="ml-2"
                    type="datetime-local"
                    name="end"
                    value={formData.end}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit" className="bg-medGreen hover:bg-green text-white px-2 py-1 mr-4 ml-4 rounded">
                  {selectedEvent ? 'Actualizar' : 'Agregar Evento'}
                </button>
                {selectedEvent && (
                  <button
                    type="button"
                    onClick={handleEventDelete}
                    className="bg-red-800 hover:bg-red-500 text-white px-3 py-1 rounded ml-2 "
                  >
                    Eliminar
                  </button>
                )}</div>
              </form>




            </div>
            <div className="mx-auto w-full max-w-lx" >
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
                  eventContent={(eventContent) => {
                    return (
                      <div>
                        <p>{eventContent.event.title}</p>
                        <b>{eventContent.timeText}</b>
                        <p>{eventContent.event.extendedProps.type}</p>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div><br />
      </div><br /><br /><br /><br /><br />

    </div>


  );
};

export default Calendar;
