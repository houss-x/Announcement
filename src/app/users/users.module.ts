import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
