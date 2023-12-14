import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementListComponent } from './announcement-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AnnouncementListComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class AnnouncementListModule { }
