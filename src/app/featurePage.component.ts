import { Component} from '@angular/core';
import{FeatureServiceComponent} from './featurePage.service'

@Component({
   selector: 'app-feature',
 
  templateUrl:'./html/featurePage.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class FeatureComponent   {
 
    featureName:string;
  

    constructor(private sendFeatureName:FeatureServiceComponent) {
  //alert("jjj")
  
 
    }
 
 

   saveFeatureName(){
//alert(this.moduleName)
this.sendFeatureName.featureServiceDetails(this.featureName)

   }  


}
