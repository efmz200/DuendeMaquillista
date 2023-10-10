export class DTOUsuario{
    #nombre;
    #apellido;
    #correo;
    #contrasena;
    #nacimiento;
    #telefono;
    #genero;

    constructor(nombre, apellido, correo, contrasena, nacimiento, telefono, genero){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#correo = correo;
        this.#contrasena = contrasena;
        this.#nacimiento = nacimiento;
        this.#telefono = telefono;
        this.#genero = genero;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }

    get apellido(){
        return this.#apellido;
    }
    set apellido(apellido){
        this.#apellido = apellido;
    }

    get correo(){
        return this.#correo;
    }
    set correo(correo){
        this.#correo = correo;
    }

    get contrasena(){
        return this.#contrasena;
    }
    set contrasena(contrasena){
        this.#contrasena = contrasena;
    }

    get nacimiento(){
        return this.#nacimiento;
    }
    set nacimiento(nacimiento){
        this.#nacimiento = nacimiento;
    }

    get telefono(){
        return this.#telefono;
    }
    set telefono(telefono){
        this.#telefono = telefono;
    }

    get genero(){
        return this.#genero;
    }
    set genero(genero){
        this.#genero = genero;
    }

}