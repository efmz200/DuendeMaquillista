export class contenido {
    #id;
    #imagen;
    #descripcion;
    #categoria;
    #subcategoria;
    #listaPalabrasClave = [];
    #listaTags = [];

    constructor(id, imagen, descripcion, categoria, subcategoria, listaPalabrasClave, listaTags) {
        this.#id = id;
        this.#imagen = imagen;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
        this.#subcategoria = subcategoria;
        this.#listaPalabrasClave = listaPalabrasClave;
        this.#listaTags = listaTags;
    }

    
    contenido(){}
    cambiarRutaImagenPersonalAGlobal(){}

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get imagen() {
        return this.#imagen;
    }
    set imagen(imagen) {
        this.#imagen = imagen;
    }

    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }

    get categoria() {
        return this.#categoria;
    }
    set categoria(categoria) {
        this.#categoria = categoria;
    }

    get subcategoria() {
        return this.#subcategoria;
    }
    set subcategoria(subcategoria) {
        this.#subcategoria = subcategoria;
    }

    get listaPalabrasClave() {
        return this.#listaPalabrasClave;
    }
    set listaPalabrasClave(listaPalabrasClave) {
        this.#listaPalabrasClave = listaPalabrasClave;
    }

    get listaTags() {
        return this.#listaTags;
    }
    set listaTags(listaTags) {
        this.#listaTags = listaTags;
    }
}