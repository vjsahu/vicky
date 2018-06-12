import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import {Post} from './post'


@Injectable()
export class FeatureServiceComponent {

 
 constructor(public http:Http){

 }
   featureServiceDetails(featureName){

  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('featureName', featureName);



 	//alert(urlSearchParams+"yy")
 	//console.log(urlSearchParams)
    return this.http.post('/postFeatureName', urlSearchParams)
      .subscribe(data => {
      console.log(data);
    });
 

  }
}