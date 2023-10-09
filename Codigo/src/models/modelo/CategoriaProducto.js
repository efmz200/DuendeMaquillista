export class CategoriaProducto{
    #nombre;
    #productos = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    addProducto(producto) {
        this.#productos.push(producto);
    }

    borrarProducto(producto) {
        this.#productos = this.#productos.filter(p => p !== producto);
        for (let i = 0; i < this.#productos.length; i++) {
            if (this.#productos[i].id == producto.id){
                this.#productos.pop(this.#productos[i]);
            }
        }
    }
}