import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //image Interpolation/binding
  imageUrl:string="assets/images/pic2.jpg"

    //two way data binding
    studName="";
    prelim=0;
    midterm=0;
    final=0;


  constructor() { }

  ngOnInit(): void {
  }

}
// Kenn Chester Ducut WD-302