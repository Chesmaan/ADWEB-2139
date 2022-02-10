import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  // Two way data binding
  firstName="";
  lastName="";
  email="";
  institution="";

  constructor() { }

  ngOnInit(): void {
  }

}

//Kenn Chester C. Ducut WD-302
