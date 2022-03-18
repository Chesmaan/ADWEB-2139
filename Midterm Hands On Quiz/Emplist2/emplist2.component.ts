import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  Employees2:any;

  constructor(private empservice: EmployeeServiceService) { }

  ngOnInit(): void {
    this.Employees2 = this.empservice.Employees();
  }

}

//<!--Kenn Chester Ducut WD-302-->
