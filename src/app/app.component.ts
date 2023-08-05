import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  template: string = `<img src="./assets/img/cargando.gif" />`

  type: string = "ball-spin-fade-rotating";

  title = 'qualitas-demo';

  constructor(private ng4LoadingSpinnerService: NgxSpinnerService
    ) {
  
    }
    
}
