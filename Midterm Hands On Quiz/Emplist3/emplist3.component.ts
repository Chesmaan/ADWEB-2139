import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  Employees3:any;

  constructor(private empservice: EmployeeServiceService) { }

  ngOnInit(): void {
    this.Employees3 = this.empservice.Employees();
  }

}


//<!--Kenn Chester Ducut WD-302-->
