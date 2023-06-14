import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
    {
        path: '', component: PrincipalComponent, children: []
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }