import React, {useEffect,useState }  from 'react';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 


    

    


export function RegistrarUsuario(){
        console.log('abriendo registras')
        function registrarUsuarioClick(){
        
            console.log("Valores a registrar:", formData);
            console.log('are');
            fetch('/api/usuario/registrarUsuario',{
                
                method: 'POST',
                body: JSON.stringify(formData),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
    
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //M.toast({html:'archivo comprimido'});
                    //this.setState({ruta: '', compresion:"",tipo_archivo:'',etiqueta:''})
                    //this.demelosArchivos(this.state.propietario);
    
                })
                .catch(err => console.err(err));

    }



    
        document.addEventListener('DOMContentLoaded', function() {
                const datepickers = document.querySelectorAll('.datepicker');
                M.Datepicker.init(datepickers, {
                    format: 'dd/mm/yyyy', // Personaliza el formato de fecha según tus necesidades
                });
            });
        
        function cancelareventos(e){
            e.preventDefault();
        }
        const [formData, setFormData] = useState({
            nombre: "",
            apellido: "",
            correo: "",
            contrasena: "",
            nacimiento: "10-10-2022",
            telefono: "",
            genero: "F",
        });
    
        function handleChange(e) {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }

    
        return (
            <div>
                <div className="row">
                    <div className="col s12" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="card" style={{ backgroundColor: "#033734"}}>
                        <div className="card-content">
                        <form onSubmit={cancelareventos} >
                            <div class="row" style={{ color: "#FFFFFF",display: "flex", justifyContent: "center" }}>
                                <h4>
                                    Registrarte
                                </h4>
                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}}>
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div >
                                            
                                            <input name="nombre" onChange={handleChange} type="text" placeholder="Nombre" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}}>
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div  >
                                            <input name="apellido" onChange={handleChange} type="text" placeholder="Apellidos" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div  >
                                            <input name="correo" onChange={handleChange} type="text" placeholder="Correo Electrónico" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div  >
                                            <input name="contrasena" onChange={handleChange} type="text" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row"  style={{ backgroundColor: "#FFFFFF"}}>
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div >
                                            <input  name="nacimiento" type="text" onChange={handleChange} class="datepicker"  placeholder="Fecha de Nacimiento"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div  >
                                            <input name="telefono" onChange={handleChange} type="text" placeholder="Telefono" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style={{ backgroundColor: "#FFFFFF"}}>
                                <p>
                                <label>Género</label>
                                <label>
                                    <input name="genero" onChange={handleChange} type="radio" checked />
                                    <span>F</span>
                                </label>
                                <label>
                                    <input   type="radio" />
                                    <span>M</span>
                                    </label>
                                </p>
                                
                            </div>

                            

                            
                            <div className="row">
                                
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="submit" className="btn " onClick={registrarUsuarioClick} style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>
                                    Registrarse
                                    </button>
                                </div>
                                
                            </div>
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }

export function IniciarSesion(props){
    const { myConstant, updateConstantValue } = props;
    const navigate = useNavigate();

    // Access and display the constant value
    console.log(myConstant);

    // Function to update the constant value
    
    function cancelareventos(e){
        e.preventDefault();
    }
    const [formData, setFormData] = useState({
        nombre: "",
        contrasena: "",
        
    });

    const updateConstant = () => {
        const newValue = formData.nombre;
        updateConstantValue(newValue);
        navigate(`/contenido`);
        
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

        
        return (
            <div>
                <div className="row">
                    <div className="col s12" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="card" style={{ backgroundColor: "#033734"}}>
                        <div className="card-content">
                        <form onSubmit={cancelareventos} >
                            <div class="row" style={{ color: "#FFFFFF",display: "flex", justifyContent: "center" }}>
                                <h4>
                                    Login
                                </h4>
                            </div>
                            <div class="row" >
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ backgroundColor: "#FFFFFF"}}>
                                            <i class="material-icons prefix">account_circle</i>
                                            <input name="nombre" onChange={handleChange} type="text" placeholder="Usuario" />
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <div class="row" >
                                <div class="input-field col s12">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div  style={{ backgroundColor: "#FFFFFF"}}>
                                            <i class="material-icons prefix">phone</i>
                                            <input name="contrasena" onChange={handleChange} type="text" placeholder="Contraseña" />
                                        </div>
                                        
                        
                                    </div>
                                </div>
                                
                            </div>
        
                            
        
                            
                            <div className="row">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="submit" className="btn "style={{ backgroundColor: "#000000", color: "#FFFFFF"}} >
                                        <Link to="/contenido" state={{ user: formData }} style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>Login</Link>
                                    </button>
                                </div>
                                <br />
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="submit" className="btn " style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>
                                    
                                    <Link to="/Registrar" style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>Registrarse</Link>
                                    </button>
                                    <button onClick={updateConstant}>Update Constant</button>
                                    
                                </div>
                                
                            </div>
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
          );
    
    }



    


//onClick={registrarUsuario} 


//export default {IniciarSesion,RegistrarUsuario};

