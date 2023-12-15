import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnouncementAddComponent } from './anouncement-add.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnouncementAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ]
})
export class AnouncementAddModule { }
