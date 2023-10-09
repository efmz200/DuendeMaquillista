
export class Distrito{
    #nombre;

    constructor(nombre) {
        this.#nombre = nombre;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}