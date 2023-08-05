
import { Page } from "./paginacion.interface";

/**
 * Clase con los datos para la busqueda del inmueble
 */
export class Busqueda extends Page {
    codigo: string;
    descripcion: string;
    estado: string;
    criteria: string;

    /**
     * Constructor de la clase Busqueda
     */
    constructor() {
        super();
        this.codigo = "";
        this.descripcion = "";
        this.estado = "";
        this.criteria = "";
    }

}