import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Event Binding
  showData($event:any){
    console.log("Early Bird Registration is clicked"); if($event){
      console.log($event.target);
    }
  }
  //Image Interpolation
  featureImg:string="./assets/images/featured.jpg"
  franceImg:string="./assets/images/france.jpg"
  seoulImg:string="./assets/images/seoul.jpg"
  sanfranImg:string="./assets/images/sanfrancisco.jpg"
  bostonImg:string="./assets/images/boston.jpeg"
  

  constructor() { }

  ngOnInit(): void {
  }

}

//Kenn Chester C. Ducut WD-302
