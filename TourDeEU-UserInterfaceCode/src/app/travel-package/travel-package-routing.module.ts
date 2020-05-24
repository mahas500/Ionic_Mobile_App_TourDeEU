import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelPackagePage } from './travel-package.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPackagePage
  },
  {
    path: 'package-details',
    loadChildren: () => import('./package-details/package-details.module').then( m => m.PackageDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelPackagePageRoutingModule {}
