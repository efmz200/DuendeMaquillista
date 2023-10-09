
export class Factura{
    #numeroFactura;
    #datalleCompra;
    #fecha;
    #cliente;
    #total;
    #direccion;
    #comprobante;

    constructor(numeroFactura, datalleCompra, fecha, cliente, total, comprobante){
        this.#numeroFactura = numeroFactura;
        this.#datalleCompra = datalleCompra;
        this.#fecha = fecha;
        this.#cliente = cliente;
        this.#total = total;
        this.#comprobante = comprobante;
    }

    get numeroFactura(){
        return this.#numeroFactura;
    }
    set numeroFactura(numeroFactura){
        this.#numeroFactura = numeroFactura;
    }

    get datalleCompra(){
        return this.#datalleCompra;
    }
    set datalleCompra(datalleCompra){
        this.#datalleCompra = datalleCompra;
    }

    get fecha(){
        return this.#fecha;
    }
    set fecha(fecha){
        this.#fecha = fecha;
    }

    get cliente(){
        return this.#cliente;
    }
    set cliente(cliente){
        this.#cliente = cliente;
    }

    get total(){
        return this.#total;
    }
    set total(total){
        this.#total = total;
    }

    get direccion(){
        return this.#direccion;
    }
    addDireccion(provincia,canton,distrito,detalles){
        this.#direccion = new Direccion(provincia,canton,distrito,detalles);
    }

    get comprobante(){
        return this.#comprobante;
    }
    set comprobante(comprobante){
        this.#comprobante = comprobante;
    }
}