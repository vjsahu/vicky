import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()


export class LoginServiceComponent {

 
 constructor(private _http:Http){


 }
  getLoginDetails(){
 	
   return this._http.get("/loginDetails")
   .map((response:Response)=>response.json());
 
  }
}
