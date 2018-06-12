import { Component,OnInit,OnChanges,SimpleChanges,Input} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectSelectionServiceComponent} from './projectSelection.service';
//import {ProjectDetailComponent} from './pDetail.component';
import {Post} from './post';
@Component({
  selector: 'app-selection',
  templateUrl:'./html/projectSelection.html' ,

   providers: [ProjectSelectionServiceComponent],

    


 })//componrnt  closing

export class SelectionComponent implements OnInit, OnChanges {
   datas:Post[]; 
   selectedDropdown:string; 
   child:string
   projectSelectionData=[];

   constructor(private ata:ProjectSelectionServiceComponent,private router: Router){
	

   }


      ngOnInit(){
  	

          this.ata.getProjectSelectionDetails()
          .subscribe(llData => this.datas=llData, error => console.log(error));

          console.log(this.datas)

          // this.datas=this.projectSelectionData;



      }


          dropdownData(dataSelected){

            sessionStorage.setItem('key',this.selectedDropdown);
             this.router.navigate(['/projectDetail']);

          }

             ngOnChanges(){


             }








}