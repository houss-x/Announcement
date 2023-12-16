import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// adding the two route of user and Home
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then( m => m.UsersModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
// import the Router module in add our route for the app then export it to be accessible to the app
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
