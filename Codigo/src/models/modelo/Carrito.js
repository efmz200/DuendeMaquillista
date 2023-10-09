import Producto from "./Producto.js";

export class Carrito{
    #listaProductos = [];

    addProducto(producto){
        if (producto.cantidad >= 0){
            this.#listaProductos.push(producto);
            producto.cantidad--;
        }
    }

    borrarProducto(producto) {
        this.#listaProductos = this.#listaProductos.filter(p => p !== producto);
        for (let i = 0; i < this.#listaProductos.length; i++) {
            if (this.#listaProductos[i].id == producto.id){
                this.#listaProductos.pop(this.#listaProductos[i]);
            }
        }
    }
}