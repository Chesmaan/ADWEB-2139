import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  Employees1:any;

  constructor(private empservice: EmployeeServiceService) { }

  ngOnInit(): void {
    this.Employees1 = this.empservice.Employees();
  }

}


//<!--Kenn Chester Ducut WD-302-->