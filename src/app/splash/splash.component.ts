import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router : Router, private service : DataServiceService) { 
  }

  ngOnInit(): void {
  }

  play1 = document.querySelector(".player1") as HTMLElement;
  play2 = document.querySelector(".player2") as HTMLElement;
  checkVal1 : any;
  checkVal2 : any;
  condition : any;

  errorLine : string = "";

  // Getting the values of input fields
  async getValue1(val: any){
    this.checkVal1 = val;
    // console.log(this.checkVal1.length);
  }
  async getValue2(val: any){
    this.checkVal2 = val;
    // console.log(this.checkVal2.length);
  }
  // check the input field 
  startGame(){
    const design = document.querySelector(".design");
    if(this.checkVal1 == undefined || this.checkVal2 == undefined){
      this.errorLine = "Please Select a symbol!!";
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 1000);
    }
    else if(this.checkVal1.length > 1 || this.checkVal2.length > 1){
      this.errorLine = "More Than One Character is not Allowed!";
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 1000);
    }
    else if(this.checkVal1 != undefined && this.checkVal2 != undefined && this.checkVal1 === this.checkVal2){
      this.errorLine = "Please Select a Different Symbol!!";
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 1000);
    }
    else{
      this.service.value1 = this.checkVal1;
      this.service.value2 = this.checkVal2;
      this.router.navigate(['/', 'Play']);
    }
  }
}
