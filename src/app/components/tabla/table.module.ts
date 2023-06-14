
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule, TooltipConfig } from 'ngx-bootstrap/tooltip';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        TooltipModule.forRoot(),
        MaterialModule
    ],
    exports: [TableComponent],
    declarations: [
        TableComponent
    ]
})

/**
 * Clase de tabla dinámica
 */
export class TableDynamicModule { }

