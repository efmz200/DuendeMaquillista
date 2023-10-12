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
                                    <input name="Usuario" onChange={handleChange} type="text" placeholder="Usuario" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row" >
                        <div class="input-field col s12">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div  style={{ backgroundColor: "#FFFFFF"}}>
                                    <i class="material-icons prefix">phone</i>
                                    <input name="Contrasena" onChange={handleChange} type="text" placeholder="Contraseña" />
                                </div>
                                
                
                            </div>
                        </div>
                        
                    </div>

                    

                    
                    <div className="row">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="btn "style={{ backgroundColor: "#000000", color: "#FFFFFF"}} >
                            Login
                            </button>
                        </div>
                        <br />
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

export default Login;