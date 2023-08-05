import { UserService } from './../../../services/user.service';
import { Component, OnInit } from "@angular/core";
import { Busqueda } from "src/app/models/busqueda.interface";
import { Page } from "src/app/models/paginacion.interface";
import { Settings } from "src/app/models/settings.interface";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisableUserComponent } from '../disable-user/disable-user.component';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'user-containers',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    inputValue = '';
    dataGrilla: any[];
    settings: Settings[];

    currentPage: number = 1;

    pagina: number = 1;
    paginaTemporal: number = 1;
    registro: number;

    pageNumber: number = 1;
    mensaje: string = "";
    contadorTemporal: number = 0;

    personaNatural: boolean;
    visible: boolean = false;

    busqueda: Busqueda = new Busqueda();

    searchControl = new FormControl();

    resultCountText= false;

    constructor(
        private _userService : UserService,
        public dialog: MatDialog,
        private spinner: NgxSpinnerService
    ){
        this.searchControl.valueChanges
        .pipe(debounceTime(500)) 
        .subscribe(value => {
          this.busqueda.criteria = value;
          this.buscar();
        });
    }

    ngOnInit(): void {
        this.settings = [
            {
                primaryKey: 'employee',
                header: 'No. de empleado',
            },
            {
                primaryKey: 'name',
                header: 'Nombres'
            },
            {
                primaryKey: 'firstLastname',
                header: 'Apellido Paterno'
            },
            {
              primaryKey: 'secondLastname',
              header: 'Apellido Materno'
            },
            {
              primaryKey: 'sise',
              header: 'SISE'
            },
            {
              property: 'personalized',
              primaryKey: 'profile',
              header: 'Perfil'
            },
            {
              property: 'chipPersonalize',  
              primaryKey: 'state',
              header: 'Estatus',
              subProperty: 'sort',
              children: [
                {
                    type: 'sort',
                    primaryKey: '/registro-garante',
                    icon: 'fa-sort',
                    tooltip: 'Ordenar'
                }
              ]
            },
            {
                property: 'button',
                children: [
                    {
                        type: 'options',
                        primaryKey: '/registro-garante',
                        icon: 'fa-ellipsis-v',
                        tooltip: 'Opciones'
                    }
                ]
            }
      
        ];

        this.busqueda = new Busqueda();
    }

    buscar() {
        this.pagina = 1;
        this.busqueda.pageSize = 1;
        this.busqueda.pagina = 1;
        //this.buscarUsuario();
    }

    buscarUsuario(){
        this.spinner.show();
        this._userService.getListUser(this.busqueda).subscribe(x => {
            this.resultCountText = true
            let numerador = this.grillaItem(x.data, this.busqueda, this.paginaTemporal, this.contadorTemporal);
            this.dataGrilla = numerador.grilla;
            this.contadorTemporal = numerador.contadorTemporal;
            this.registro = x.totalRecords;
            this.visible = this.dataGrilla.length > 0;
            this.spinner.hide();
        });
    }

    public grillaItem(grilla: any, paginacion: Page, paginaTemporal: number, contadorTemporal: number, temporalPaginacion?: boolean): any {
        let resultado = {}
        let paginasAdelante = 0;
        let paginasAtras = 0;
        let paginasTotal = 0;

        if (paginacion.pagina == 1) {
            contadorTemporal = 0
        }
        else if (paginacion.pagina > 1 && paginacion.pagina != paginaTemporal) {
            contadorTemporal = (paginacion.pagina - 1) * paginacion.nroRegistro;
        }
        else if (paginacion.pagina > 1) {
            contadorTemporal = contadorTemporal;
        }

        grilla = temporalPaginacion ? grilla : grilla.slice(0, paginacion.nroRegistro)
        for (let i = 0; grilla.length > i; i++) {
            contadorTemporal = contadorTemporal + 1;
            grilla[i].item = contadorTemporal;
            if (temporalPaginacion) {
                grilla[i].checked = true;
            }
        }
        resultado = {
            grilla: temporalPaginacion ? grilla : grilla.slice(0, paginacion.nroRegistro),
            contadorTemporal: contadorTemporal
        }

        return resultado;
    }

    paginacionClick(pageChange: PageChangedEvent) {
        this.busqueda.pagina = pageChange.page;
        this.busqueda.nroRegistro = 6;

        this.buscarUsuario();
    }

    darDeBajaUsuario(item: any): void {
        let template = "";
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
    
        const dialogRef = this.dialog.open(DisableUserComponent,{
          width: '312px',
          height: '280px',
          panelClass:"custom-contain",
        });
        
    }
    
    editarUsuario(item: any): void {
    let template = "";

    
    }


    enlaceClick(item: any): void {
    let template = "";

    
    }

    abrirModal(event:any){
        let x = '10rem';
        let y = '10vh';
        
        // let dialogRef = this.dialog.open(DialogComponent,{
        // width:'552px',
        // position: {right: x, top: y} 
        // })

        // dialogRef.afterClosed().subscribe({
        // next:(val) => {
        // // if(val){
        //     console.log('cerró modal')
        // // }
        // }
        // });
    }

}