import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnouncementDetailsModule } from './anouncement-details/anouncement-details.module';
import { AnouncementAddModule } from './anouncement-add/anouncement-add.module';
import { UsersModule } from './users/users.module';
import { UserAnouncementModule } from './user-anouncement/user-anouncement.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AnouncementDetailsModule,AnouncementAddModule,UsersModule,UserAnouncementModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
