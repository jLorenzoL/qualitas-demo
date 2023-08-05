
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule, TooltipConfig } from 'ngx-bootstrap/tooltip';
import { MaterialModule } from 'src/app/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        TooltipModule.forRoot(),
        MaterialModule,
        // NgxSpinnerModule.forRoot()
    ],
    exports: [TableComponent],
    declarations: [
        TableComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

/**
 * Clase de tabla dinámica
 */
export class TableDynamicModule { }

