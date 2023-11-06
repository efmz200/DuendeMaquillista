
import Login from "../components/Login/Login.jsx"

import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../styles/styles.js"

function     cancelareventos(e){
    e.preventDefault();
}



export function LoginPage(props) {
  const { user,updateConstantValue} = props;
  const { userdatos,updateuserdatos} = useState([]);
  
  
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
const CambiarUser = async () => {
    var response = ''
    
    try {
        response = await fetch('http://localhost:3000/api/usuario/iniciarSesion', {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    correo: email, // Asigna los valores adecuados
                    contrasena: password,
                    
                }),
            })
        const data = await response.json();
        console.log(data); 

            
    

        
        //updateConstantValue(data.usuario)
        if(data.estatus === 'Sesion iniciada'){
            
            if (data.usuario.admin){
                            navigate('/galeriaDuende', {});
                            console.log('1')
            }else{
                            navigate('/categorias', {});
                            console.log('2')
                        }

        }
            
                //.catch(err => console.err(err));



        
 
        }catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            // Maneja los errores
            }
        
    } 
    

                

        
            
  
  return (
    <div>
      <h1>
        {user}
      </h1>
      <div >
        
        <div className='main-h-screen bg-black flex flex-col justify-center py-4'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='text-center text-3xl font-regular text-white'>
                    DUENDE MAQUILLISTA
                </h2>
                <br/>
            </div>
            <div className='bg-darkGreen flex flex-col justify-center py-4 sm:px-6 lg:px-8'></div>
            <div class="bg-[url('./loginBackground.png')] bg-no-repeat bg-cover bg-center bg-fixed w-full">
            <div className="my-60  sm:mx-auto sm:w-full sm:max-w-md">
                    <div className='bg-darkGreen py-4 px-6 shadow sm:rounded-lg sm:px-10'>

                        <form  onSubmit={cancelareventos} className="space-y-10">
                            <div>
                                <h1  className='mt-4 text-center text-4xl font-semibold text-white'>
                                    Login
                                </h1>
                            </div>
                            <div className=''>
                                <label htmlFor='email' className='block text-sm text-gray-100'>
                                    Correo Electrónico
                                </label>
                                <div className='mt-1'>
                                    <input 
                                    name='email' 
                                    type='email' 
                                    autoComplete='email' 
                                    required value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className = 'appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm'/>
                                </div>
                                <br/>
                                <label htmlFor='password' className='block text-sm text-gray-100'>
                                    Contraseña
                                </label>
                                <div className='mt-1 relative align-left'>
                                    <input 
                                    name='password' 
                                    type= {visible ? "text" : "password"}
                                    autoComplete='current-password' 
                                    required value={password} 
                                    onChange={(p) => setPassword(p.target.value)} 
                                    className = 'appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm'/>
                                    {
                                        visible ? (
                                            <AiOutlineEye
                                            className='absolute right-2 top-2 cursor-pointer'
                                            size={25}
                                            onClick={() => setVisible(false)}/>
                                        ) : (
                                            <AiOutlineEyeInvisible
                                            className='absolute right-2 top-2 cursor-pointer'
                                            size={25}
                                            onClick={() => setVisible(true)}/>
                                        )
                                    }
                                </div>
                                <br/>
                                
                                <div className={`${styles.noramlFlex} justify-between`}>
                                    
                                    </div>
                                    <div>
                                    <button 
                                        onClick={() => CambiarUser()}
                                        type="submit"
                                        className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green">
                                        Iniciar Sesión
                                    </button>
                                    </div>
                                    <div className={`${styles.noramlFlex} text-white w-full justify-center`}>
                                    <h2>Aún no tienes cuenta?</h2>
                                    <Link to="/signUp" className="text-green pl-2">
                                        Registrarse
                                    </Link>
                                </div>


                                
                            </div>
                        </form>
                    </div>
            </div>        
        </div>               
    </div>

    </div>
    </div>
  )
}
