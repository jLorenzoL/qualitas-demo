import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { UserComponent } from './modules/admin-users/component/user.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: PrincipalComponent, children: [
            { path: 'usuario', component: UserComponent },
        ]
    }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);