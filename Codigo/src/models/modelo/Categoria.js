import { subcategoria } from "./SubCategoria.js";
export class categoria{
    #nombre;
    #subcategorias = [];

    constructor(nombre, subcategorias) {
        this.#nombre = nombre;
        for (let subC of subcategorias) {
            let subcat = new subcategoria(subC.nombre);
            this.#subcategorias.push(subcat);
        };
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    //funcion que agrega una subcategoria a una categoria por nombre
    addSubcategoria(Nombresubcategoria){
        let subcat = new subcategoria(Nombresubcategoria);
        this.#subcategorias.push(subcat);
    }

    //función que elimina una subcategoria de una categoria por nombre
    dellSubcategoria(Nombresubcategoria){
        for (let subC of this.#subcategorias) {
            if (subC.nombre == Nombresubcategoria) {
                this.#subcategorias.pop(subC);
            }
        }
    }
}