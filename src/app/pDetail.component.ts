import { Component, Input,OnInit} from '@angular/core';
import {SelectionComponent} from './projectSelection.component';
import { ActivatedRoute, Router } from '@angular/router';
//import { ModuleComponent } from './module.component';
@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ProjectDetailComponent implements OnInit  {
 

    projectName:string;


    show: boolean;

    constructor(private router: Router,private route:ActivatedRoute) {
    this.show = false;
 
    }
 
 

      ngOnInit(){


             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;

      }
 
    message:string;
 
        changeShowStatus(){

           this.show = true;
 
        }

        goCreateModule(){
          this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
           goCreateFeature(){
          this.router.navigate(['CreateFeature'],{relativeTo:this.route})
        }
       goImport(){
         //alert("1st")
          this.router.navigate(['ImportPage']);
        }

}
