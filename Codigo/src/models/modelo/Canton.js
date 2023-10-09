
export class Canton{
    #nombre;
    #listaDistritos = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get listaDistritos() {
        return this.#listaDistritos;
    }
    addDistrito(distrito) {
        this.#listaDistritos.push(distrito);
    }
    borrarDistrito(distrito) {
        for (let i = 0; i < this.#listaDistritos.length; i++) {
            if (this.#listaDistritos[i].nombre === distrito.nombre) {
                this.#listaDistritos.pop(this.#listaDistritos[i]);
            }
        }        
    }

}