
export class Page {
    pagina: number;
    pageSize: number;
    nroRegistro: number;
    numeroTotalRegistros: number;

    /**
     * Constructor de la clase Page
     */
    constructor() {
        this.pagina = 1;
        this.nroRegistro = 6;
        this.numeroTotalRegistros = 0;
    }

}