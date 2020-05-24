import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPackagePageRoutingModule } from './travel-package-routing.module';

import { TravelPackagePage } from './travel-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelPackagePageRoutingModule
  ],
  declarations: [TravelPackagePage]
})
export class TravelPackagePageModule {}
