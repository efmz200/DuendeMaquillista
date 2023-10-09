
export class Direccion{
    #provincia;
    #caton;
    #distrito;
    #detalles;

    constructor(provincia, caton, distrito, detalles){
        this.#provincia = provincia;
        this.#caton = caton;
        this.#distrito = distrito;
        this.#detalles = detalles;
    }

    get provincia(){
        return this.#provincia;
    }
    set provincia(provincia){
        this.#provincia = provincia;
    }

    get caton(){
        return this.#caton;
    }
    set caton(caton){
        this.#caton = caton;
    }

    get distrito(){
        return this.#distrito;
    }
    set distrito(distrito){
        this.#distrito = distrito;
    }

    get detalles(){
        return this.#detalles;
    }
    set detalles(detalles){
        this.#detalles = detalles;
    }
    
}