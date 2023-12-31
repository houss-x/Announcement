import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserAnouncementComponent } from '../user-anouncement/user-anouncement.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,     
      }
      ,
      // routing for user anouncement component with given id
      {
        path: 'user/:id',
        component: UserAnouncementComponent,
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}
