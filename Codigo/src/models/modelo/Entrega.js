
export class Entrega{
    #numero;
    #estado;

    constructor(numero, estado){
        this.#numero = numero;
        this.#estado = estado;
    }

    get numero(){
        return this.#numero;
    }
    set numero(numero){
        this.#numero = numero;
    }

    get estado(){
        return this.#estado;
    }
    set estado(estado){
        this.#estado = estado;
    }
    
}