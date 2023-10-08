

export class admUsuario {
    #nombre;
    #apellido;
    #correo;
    #contrasenia;
    #nacimiento;
    #telefono;
    #genero;

    constructor(nombre, apellido, correo, contrasenia, nacimiento, telefono, genero) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#correo = correo;
        this.#contrasenia = contrasenia;
        this.#nacimiento = nacimiento;
        this.#telefono = telefono;
        this.#genero = genero;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get apellido() {
        return this.#apellido;
    }
    set apellido(apellido) {
        this.#apellido = apellido;
    }

    get correo() {
        return this.#correo;
    }
    set correo(correo) {
        this.#correo = correo;
    }

    get contrasenia() {
        return this.#contrasenia;
    }
    set contrasenia(contrasenia) {
        this.#contrasenia = contrasenia;
    }

    get nacimiento() {
        return this.#nacimiento;
    }
    set nacimiento(nacimiento) {
        this.#nacimiento = nacimiento;
    }

    get telefono() {
        return this.#telefono;
    }
    set telefono(telefono) {
        this.#telefono = telefono;
    }

    get genero() {
        return this.#genero;
    }
    set genero(genero) {
        this.#genero = genero;
    }
}
