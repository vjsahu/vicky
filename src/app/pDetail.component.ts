import { Component, Input,OnInit} from '@angular/core';
import {SelectionComponent} from './projectSelection.component';
import { ActivatedRoute, Router } from '@angular/router';
//import { ModuleComponent } from './module.component';
@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./css/pDetail.component.css'],

       

})//componrnt  closing

export class ProjectDetailComponent implements OnInit  {
 

    projectName:string;
 moduleName:string;
  moduleChild:string;

    show: boolean;
testExecution:boolean;
    constructor(private router: Router,private route:ActivatedRoute) {
    this.show = false;
 this.testExecution=false;
    }
 
 

      ngOnInit(){


             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;
             this.moduleName="gg";
             this.moduleChild="cc"

      }
 
    message:string;
 
        changeShowStatus(){
//alert("1")
           this.show = true;
           this.testExecution=false;
 
        }
        showTestExecution(){
//alert("2")
this.show = false;
   this.testExecution=true;
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
