import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post'
@Injectable()
export class ProjectSelectionServiceComponent {

 
 constructor(public http:Http){

 }
   getProjectSelectionDetails():Observable<Post[]>{
 	//alert("ll00")
   return this.http.get("/selectionProject")
  .map((response:Response)=><Post[]>response.json());

  }
  
}