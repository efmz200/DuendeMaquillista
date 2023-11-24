import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js"

function MenuAdmin() {
    //Declaracion variables
    const navigate = useNavigate();

    const handleGaleria = () => {
        navigate('/galeriaDuende', {});
    }

    const handleInventario = () => {
        navigate('/tiendaDuende', {});
    }

    const handleAgenda = () => {
        navigate('/Agenda', {});
    }

    const handleMensajes = () => {
        navigate('/mensajesAdmin', {});
    }

    const handleLogOut = () => {
        navigate('/', {});
    }

    return (
    <div >
        <div className='main-h-screen bg-black flex flex-col justify-center py-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='text-center text-3xl font-regular text-white'>
                    DUENDE MAQUILLISTA
                </h2>
                <br/>
            </div>
            <div className='bg-darkGreen flex flex-col justify-center py-8 sm:px-6 lg:px-8'></div>
            <div class="bg-[url('./RegistrarUsuario.png')] bg-no-repeat bg-cover bg-center bg-fixed w-full">
            <div className="my-40  sm:mx-auto sm:w-full sm:max-w-md">
                    <div className='bg-darkGreen py-4 px-6 shadow sm:rounded-lg sm:px-10'>
                        
                            <div>
                                <h1  className='mt-6 text-center text-4xl font-semibold text-white'>
                                    Menu Administrador
                                </h1>
                            </div>
                            <div className='bg-darkGreen py-8 px-6 shadow sm:rounded-lg sm:px-10'>
                                <div>
                                    
                                    <button onClick={handleGaleria} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Galería
                                    </button><br/> 

                                    <button onClick={handleInventario} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Inventario
                                    </button><br/> 

                                    <button onClick={handleAgenda} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Agenda
                                    </button>
                                    <br/> 

                                    <button onClick={handleMensajes} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Mensajes
                                    </button>
                                    <br/> 
                                
                                    <button onClick={handleLogOut} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Cerrar Sesión
                                    </button>
                                </div> 
                            </div>
                    </div>
            </div>        
        </div>               
    </div>

    </div>



    )
}

export default MenuAdmin