

export class Provincia{
    #nombre;
    #listaCantones = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get listaCantones() {
        return this.#listaCantones;
    }
    addCanton(Canton) {
        this.#listaCantones.push(Canton);
    }
    borrarCanton(Canton) {
        for (let i = 0; i < this.#listaCantones.length; i++) {
            if (this.#listaCantones[i].nombre === Canton.nombre) {
                this.#listaCantones.pop(this.#listaCantones[i]);
            }
        }        
    }

}