export class Servicio{
    #nombre;
    #telefono;
    #notas;
    #imagen;

    constructor(nombre, telefono, notas, imagen){
        this.#nombre = nombre;
        this.#telefono = telefono;
        this.#notas = notas;
        this.#imagen = imagen;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }

    get telefono(){
        return this.#telefono;
    }
    set telefono(telefono){
        this.#telefono = telefono;
    }

}