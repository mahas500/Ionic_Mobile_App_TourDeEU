import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'travel-package', pathMatch: 'full' 
  },

  {
    path: 'travel-package',
    children:[
      {
        path: '',
        loadChildren: './travel-package/travel-package.module#TravelPackagePageModule'
      },
      {
        path: ':packageID',
        loadChildren: './travel-package/package-details/package-details.module#PackageDetailsPageModule'

      }
    ]
    
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUSPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
