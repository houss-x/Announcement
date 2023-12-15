import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnouncementDetailsComponent } from './anouncement-details.component';



@NgModule({
  declarations: [
    AnouncementDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ]
    
})
export class AnouncementDetailsModule { 

}

