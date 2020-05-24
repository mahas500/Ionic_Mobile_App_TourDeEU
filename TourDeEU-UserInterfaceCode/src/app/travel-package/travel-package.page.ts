import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PhotoViewer, PhotoViewerOptions } from '@ionic-native/photo-viewer/ngx';
import * as data from './json-data/package.json';

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.page.html',
  styleUrls: ['./travel-package.page.scss'],
})
export class TravelPackagePage implements OnInit {
  
  public packagelists;
  url:any;
  

  constructor(private packageService: PackageService,private vibration: Vibration,private photoViewer: PhotoViewer) {}

  ngOnInit(){
    this.getPackageData();
  }

  viewImageInFull(event){

    console.log(event);

    

    this.photoViewer.show("packagelist.image","Image in big screen",{share: true});
  }

  ShowMe(){
    this.vibration.vibrate(2000);
  }

  getPackageData(){
    
   
    this.packageService.getPackages().subscribe(
      data=>{
        this.packagelists=data
        console.log(this.packagelists);
        
      },
      err=>console.log(err),
      ()=>console.log('Packages loaded')
    );
  }

}
