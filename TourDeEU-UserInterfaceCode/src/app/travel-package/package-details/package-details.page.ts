import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.page.html',
  styleUrls: ['./package-details.page.scss'],
})
export class PackageDetailsPage implements OnInit {


  public specificPackage;
  
  constructor(private packageService: PackageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.getspecificPackage(this.activatedRoute.snapshot.params.id);

/*     this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(paramMap.has(id)){

        return;
      }
      const id=paramMap.get('id');
     this.specificPackage= this.packageService.getPackage(id);
    }); */

  }

/*    getspecificPackage(id:any){

    this.packageService.getPackage(id).subscribe(
      data=>{
        this.specificPackage=data;
      },
      err=>console.error(err),
      ()=>console.log('Package loaded')
    );

  }  */

}
