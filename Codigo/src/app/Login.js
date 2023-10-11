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

function Login() {
  return (
    <div>
        <div className="row">
            <div className="col s12" style={{ display: "flex", justifyContent: "center" }}>
            <div className="card">
                <div className="card-content">
                <form onSubmit={cancelareventos}>
                    <div class="row" >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div>
                                    <i class="material-icons prefix">account_circle</i>
                                    <input name="Usuario" onChange={handleChange} type="text" placeholder="Usuario" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row" >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div>
                                    <i class="material-icons prefix">phone</i>
                                    <input name="Contrasena" onChange={handleChange} type="text" placeholder="Contraseña" />
                                </div>
                                
                
                            </div>
                        </div>
                        
                    </div>

                    

                    
                    <div className="row">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="btn light-blue darken-4 centered" >
                            Login
                            </button>
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="btn light-blue darken-4">
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

export default Login;