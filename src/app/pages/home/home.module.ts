import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { HomePageRoutingModule } from './home-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import {IonicRouteStrategy } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    Vibration,
    Flashlight,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
})
export class HomePageModule {}
