export class DTOProducto{
    #nombre;
    #cantidad;
    #disponibilidad;
    #descripcion;
    #imagen;

    constructor(nombre, cantidad, disponibilidad, descripcion, imagen){
        this.#nombre = nombre;
        this.#cantidad = cantidad;
        this.#disponibilidad = disponibilidad;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
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