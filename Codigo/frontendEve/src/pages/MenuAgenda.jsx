import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/styles.js"

function MenuAgenda() {
    //Declaracion variables
    let navigate = useNavigate();

    const handleServicios = () => {
        navigate('/servicioMaquillaje', {});
    }

    const handleCursos = () => {
        navigate('/cursosTalleres', {});
    }

    const handleEntregas = () => {
        navigate('/entregasClientes', {});
    }

    const handleMenu = () => {
        navigate('/menuAdmin', {});
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
                        
                            <div><br/>
                                <h1  className='mt-8 text-center text-4xl font-semibold text-white'>
                                    Agenda Duende
                                </h1>
                            </div><br/>
                            <div className='bg-darkGreen py-8 px-6 shadow sm:rounded-lg sm:px-10'>
                                <div>
                                    
                                    <button onClick={handleServicios} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Servicios Maquillaje
                                    </button><br/> 

                                    <button onClick={handleCursos} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Cursos y Talleres
                                    </button><br/> 

                                    <button onClick={handleEntregas} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Entregas para Clientes
                                    </button>
                                    <br/>
                                    <button onClick={handleMenu} className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Volver
                                    </button>
                                </div> 
                            </div><br/>
                    </div>
            </div>        
        </div>               
    </div>

    </div>



    )
}

export default MenuAgenda