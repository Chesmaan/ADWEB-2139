import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prelim-Lab-5';

  //Interpolation
  appName = "This is an interpolation example! - Kenn Chester Ducut"

  //Property Binding
  clientName:string = "Kenn Chester";

  //Style Binding with Class Binding
  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = "red";

  getData(data:any)
  {
    console.warn(data);
  }

  //Event Binding
  showData($event:any){
    console.log("The Button is clicked by kenn"); if($event){
      console.log($event.target);
    }
  }

  //Kenn Chester Ducut - WD - 302
}
