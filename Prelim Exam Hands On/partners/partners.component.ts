import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  //ngFor Directives
  partners = [
    { company: 'Microsoft', trademark: "./assets/images/microsoft.png", sponsorship: 'Platinum', website: "Go to Website"},
    { company: 'Apple, Inc', trademark: "./assets/images/apple.png", sponsorship: 'Gold', website: "Go to Website"},
    { company: 'Amazon', trademark: "./assets/images/amazon.png", sponsorship: 'Silver', website: "Go to Website"},
    { company: 'Google, Inc.', trademark: "./assets/images/google.png", sponsorship: 'Bronze', website: "Go to Website"},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}


//Kenn Chester C. Ducut WD-302