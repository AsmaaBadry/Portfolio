import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
name = "Asmaa Badry";
jobTitle = "Web Developer and Designer";
  constructor() { }

  ngOnInit(): void {
  }

}
