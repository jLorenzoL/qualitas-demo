import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MaterialModule } from './material.module';
import { APP_ROUTING } from './app.routing';
import { UserComponent } from './modules/admin-users/component/user.component';
import { TableDynamicModule } from './components/tabla/table.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { DisableUserComponent } from './modules/admin-users/disable-user/disable-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    UserComponent,
    DisableUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    MaterialModule,
    BrowserAnimationsModule,
    TableDynamicModule,
    PaginationModule.forRoot(),
  ],
  exports: [
    TableDynamicModule,
    PaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
