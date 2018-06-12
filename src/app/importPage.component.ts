import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{ImportServiceComponent} from './importPage.service'

import {Post} from './post';

@Component({
   selector: 'app-import',
 
  templateUrl:'./html/importPage.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ImportComponent implements OnInit   {
 
 
 
   // typeDataCollection:Post[];
   // priorityDataCollection:Post[]; 
   // typeDropdown:string; 
   // priorities=[];
   types:Post[];
   priorities:Post[];
  

   constructor(public importService:ImportServiceComponent,private router: Router){
	//alert("jjjjjjjjjjjj")

   }


      ngOnInit(){
  	

          this.importService.getTypeDetails()
          .subscribe(data => this.types=data);

         // console.log(this.typeDataCollection)

         //   this.types=this.typeDataCollection;

console.log(this.types)

       this.importService.getPriorityDetails()
          .subscribe(llData => this.priorities=llData);

       //   // console.log(this.projectSelectionData)

       //     this.priorities=this.priorityDataCollection;




      }


          // typeData(){

          //   // sessionStorage.setItem('key',this.selectedDropdown);
          //   //  this.router.navigate(['/projectDetail']);

          // }
          //     priorityData(){

          //   // sessionStorage.setItem('key',this.selectedDropdown);
          //   //  this.router.navigate(['/projectDetail']);

          // }
 

  


}
