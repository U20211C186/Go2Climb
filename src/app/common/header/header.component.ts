import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userType: any;
  // userType: number = 2;


  constructor() {
    sessionStorage.getItem('userType');
  }

   ngOnInit(): void {
     this.userType=sessionStorage.getItem('userType');
     console.log(this.userType)
   }

  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes)
  //   this.temp=sessionStorage.getItem('userType');
  //   console.log(this.temp)
  // }


}
