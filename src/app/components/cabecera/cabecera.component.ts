
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReusableService } from 'src/app/services/reusable.service';

@Component({
    selector: 'cabecera-component',
    templateUrl: 'cabecera.component.html',
    styleUrls: ['./cabecera.component.scss']
})

/**
 * Clase que maneja el componente de cabecera
 */
export class CabeceraComponent implements OnInit {
    nombre: string;
    fecha: string;
    rol: string;
    avatar: string;

    nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    /** Constructor de la clase 
     * @param generalService        servicio general, tipo generalService
     * @param _root                 objeto routeo para la navegación, tipo Router
     * @param _cookie               servicio de cookie , tipo CookieService
     */
    constructor(
        private _root: Router,
        private _reusableService: ReusableService,
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
        
        const dataToken = this._reusableService.getToken();

        console.log(dataToken);
        let fechaActual = new  Date();
        this.nombre = dataToken.user
        this.rol = dataToken.rol
        this.fecha = fechaActual.getDate() + " / " + this.nombreMes[fechaActual.getMonth()] + " / " + fechaActual.getFullYear();

        const nombreUser = dataToken.user.split(" ")
        const nombe = nombreUser[0]
        const apellido = nombreUser[1]
        console.log(nombreUser)
        this.avatar = nombe[0] + apellido[0]
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