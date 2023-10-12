import React from 'react';
//import './Header.css'; // Asegúrate de importar tu archivo CSS

       
function cancelareventos(e){
    e.preventDefault();
}

function handleChange(e){
    const {name,value }= e.target;
    this.setState({
        [name]: value
    });

}

function Registrate() {
    document.addEventListener('DOMContentLoaded', function() {
        const datepickers = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepickers, {
            format: 'dd/mm/yyyy', // Personaliza el formato de fecha según tus necesidades
        });
    });
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
                                    
                                    <input name="Nombre" onChange={handleChange} type="text" placeholder="Nombre" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row" style={{ backgroundColor: "#FFFFFF"}}>
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div  >
                                    <input name="Apellidos" onChange={handleChange} type="text" placeholder="Apellidos" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div  >
                                    <input name="CorreoElectronico" onChange={handleChange} type="text" placeholder="Correo Electrónico" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div  >
                                    <input name="Contrasena" onChange={handleChange} type="text" placeholder="Contraseña" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row"  style={{ backgroundColor: "#FFFFFF"}}>
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div >
                                    <input  name="FechadeNacimiento" type="text" class="datepicker"  placeholder="Fecha de Nacimiento"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ backgroundColor: "#FFFFFF"}} >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div  >
                                    <input name="Telefono" onChange={handleChange} type="text" placeholder="Telefono" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ backgroundColor: "#FFFFFF"}}>
                        <p>
                        <label>Género</label>
                        <label>
                            <input name="group1" type="radio" checked />
                            <span>F</span>
                        </label>
                        <label>
                            <input name="group1" type="radio" />
                            <span>M</span>
                            </label>
                        </p>
                        
                    </div>

                    

                    
                    <div className="row">
                        
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="btn "style={{ backgroundColor: "#000000", color: "#FFFFFF"}}>
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

export default Registrate;