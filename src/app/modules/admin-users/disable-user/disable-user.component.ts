import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../component/user.component';

@Component({
  selector: 'app-disable-user',
  templateUrl: './disable-user.component.html',
  styleUrls: ['./disable-user.component.scss']
})
export class DisableUserComponent {

  durationInSeconds = 5;
  constructor(
      public dialogRef: MatDialogRef<UserComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  disableUser() {
    this.dialogRef.close();
    // this.toast.openSnackBar('Perfil dado de baja.', 'check_circle');
    this.dismissError();        
  }
  

  private dismissError(): void {    
    setTimeout(() => {      
      // this.toast.dismissToast();    
    }, 9000);  
  }
}
