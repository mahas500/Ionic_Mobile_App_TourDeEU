import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PackageService {

 

  

  constructor(private http: HttpClient) { }

  getPackages(){
  

   return this.http.get("/assets/json-data/packages.json");

  }

  getPackage(id: any){
    console.log("hi")
  

  }



 
}
