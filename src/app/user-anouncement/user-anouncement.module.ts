import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAnouncementComponent } from './user-anouncement.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


//link the module with component
@NgModule({
  declarations: [UserAnouncementComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class UserAnouncementModule { }
