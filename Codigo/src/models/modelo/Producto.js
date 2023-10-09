export class Producto{
    #codigo;
    #nombre;
    #precio;
    #cantidad;
    #disponibilidad;
    #descripcion;
    #imagen;

    constructor(codigo, nombre, precio, cantidad, disponibilidad, descripcion, imagen){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#disponibilidad = disponibilidad;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }

    get precio(){
        return this.#precio;
    }
    set precio(precio){
        this.#precio = precio;
    }

    get cantidad(){
        return this.#cantidad;
    }
    set cantidad(cantidad){
        this.#cantidad = cantidad;
    }

    get disponibilidad(){
        return this.#disponibilidad;
    }
    set disponibilidad(disponibilidad){
        this.#disponibilidad = disponibilidad;
    }

    get descripcion(){
        return this.#descripcion;
    }
    set descripcion(descripcion){
        this.#descripcion = descripcion;
    }

    get imagen(){
        return this.#imagen;
    }
    set imagen(imagen){
        this.#imagen = imagen;
    }

}