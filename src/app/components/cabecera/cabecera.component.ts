
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cabecera-component',
    templateUrl: 'cabecera.component.html'
})

/**
 * Clase que maneja el componente de cabecera
 */
export class CabeceraComponent implements OnInit {
    nombre: string;
    fecha: string;

    nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    /** Constructor de la clase 
     * @param generalService        servicio general, tipo generalService
     * @param _root                 objeto routeo para la navegación, tipo Router
     * @param _cookie               servicio de cookie , tipo CookieService
     */
    constructor(
        private _root: Router
    ) {

    }

    /**
     * Función de carga inicial
     */
    ngOnInit() {
        this.datosSesion();
    }

    /**
     * Función que permite obtener los datos de sesión.
     */
    datosSesion() {
        // this.generalService.datosSesion()
        //     .subscribe(resp => {
        //         let fechaActual = new  Date(resp.fechaActual);
        //         this.nombre = resp.nombres;
        //         this.fecha = fechaActual.getDate() + " de " + this.nombreMes[fechaActual.getMonth()] + " del " + fechaActual.getFullYear();

        //     });
    }

    /**
     * Función que permite cerrar la sesión
     */
    cerrarSesion() {
        // this.generalService.cerrarSession().subscribe(resp => {
        //     localStorage.removeItem('item');
        //     localStorage.removeItem('usuarioActual');
        //     this._cookie.deleteAll();
        //     this._root.navigate(['sesion'])
        // })

    }
}