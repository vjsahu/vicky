import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post'
@Injectable()
export class ProjectDetailServiceComponent {

 
 constructor(public http:Http){

 }
   getProjectDetails():Observable<Post[]>{
 	//alert("ll00")
   return this.http.get("/detailProject")
  .map((response:Response)=><Post[]>response.json());

  }
  
}