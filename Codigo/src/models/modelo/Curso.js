export class Curso{
    #nombre;
    #notas;

    constructor(nombre, notas){
        this.#nombre = nombre;
        this.#notas = notas;
    }
    
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }

    get notas(){
        return this.#notas;
    }
    set notas(notas){
        this.#notas = notas;
    }
}