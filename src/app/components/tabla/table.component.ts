
import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/pagination.component';
import { Router } from '@angular/router';
import { Settings } from 'src/app/models/settings.interface';

@Component({
    selector: 'ng-table-component',
    templateUrl: 'table.component.html'
})

/**
 * Clase que maneja el componente de tabla
 */
export class TableComponent implements OnChanges {

    /**
     * Parámetros de entrada. @Input()
     * @param data datos de la grilla
     * @param settings Cabecera
     */
    @Input()
    data: any;

    @Input() settings: Settings[];

    @Input()
    disabledButton: boolean;

    valSort: number = 0;

    /**
     * Parámetros de salida @Output().
     * @param edit editar
     * @param remove eliminar
     * @param descarga descarga
     * @param enlace enlace a otra pantalla
     * @param consulta consulta
     * @param rbtn boton dentro de la tablla
     */
    @Output()
    edit: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    remove: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    descarga: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    enlace: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    consulta: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    rbtn: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    chkBtn: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    visualiza: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    validar: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    darDeBaja: EventEmitter<any> = new EventEmitter<any>();

    columnMaps: any[];

    editing: boolean = false;

    returnedArray: any;

    checked: boolean = false;

    menuVisible = false;

    /** Constructor de la clase 
     * @param _root objeto routeo para la navegación, tipo Router
     */
    constructor(private _root: Router) {
    }

    /** Función para esperar algun cambio de datos */
    ngOnChanges() {
        this.returnedArray = this.data != undefined ? this.data : [];

        if (this.settings) { // when settings provided
            this.columnMaps = this.settings;
            this.disabledButton;
        } else { // no settings, create column maps with defaults
            if (this.data != undefined) {
                if (this.data.length > 0) {
                    this.columnMaps = Object.keys(this.data[0])
                        .map(key => {
                            return {
                                primaryKey: key,
                                header: key.slice(0, 1).toUpperCase() +
                                    key.replace(/_/g, ' ').slice(1)
                            }
                        });
                }
            }
        }

    }
    /**
     * Función que consultar con ventana emergente.
     */
    consultar(item: any) {
        this.consulta.emit(item);
    }
    /**
     * Función que hace el radio button
     */
    rbtnClick(item: any, input: any) {
        item.checked = input.checked;

        this.rbtn.emit(item);
    }

    /**
    * Función que hace el check button
    */
    chkClick(item: any, input: any) {
        item.checked = input.checked;

        this.chkBtn.emit(item);
    }


    /**
     * Función que permite ir a otra pantalla como consulta
     */
    linkConsulta(item: any, url: string) {
        item.consulta = true;
        this._root.navigate([url]);
        localStorage.setItem('item', JSON.stringify(item));
    }

    /**
     * Función que editar con ventana emergente.
     */
    editar(item: any) {
        this.edit.emit(item);
    }

    /**
     * Función que eliminar con ventana emergente.
     */
    eliminar(item: any): void {
        this.remove.emit(item);
    }

    /**
     * Función que emite un mensaje de retorno para descargar.
     */
    descargar(item: any) {
        this.descarga.emit(item);
    }

    /**
     * Función que emite un mensaje de retorno para visualizar.
     */
    visualizar(item: any) {
        this.visualiza.emit(item);
    }

    /**
     * Función que permite ir a otra pantalla
     */
    link(item: any, url: string) {
        item.edicion = true;
        this._root.navigate([url]);
        localStorage.setItem('item', JSON.stringify(item));
    }

    /**
     * Función que permite ir a otra pantalla para registrar
     */
    valida(item: any) {
        this.validar.emit(item);
        localStorage.setItem('item', JSON.stringify(item));
    }

    /**
     * Función que permite ir a otra pagina
     * @param url url del sistema, tipo string.
     */
    linkPage(url: string) {
        this._root.navigate([url]);
    }

    openOpcionsEditar(item: any){
        console.log("se abre modal de EDITAR", item)
        // this.darDeBaja.emit(item);
        // this.menuVisible = !this.menuVisible;
    }

    openOpcionsEliminar(item: any){
        console.log("se abre modal de ELIMINAR", item)
        this.darDeBaja.emit(item);
        // this.menuVisible = !this.menuVisible;
    }

    ordenar(type: number){
        if(type == 0) { 
            console.log("ORDENAR ASC")
            this.valSort = 1;
        } else { 
            console.log("ORDENAR DESC")
            this.valSort = 0;
        }
    }


}