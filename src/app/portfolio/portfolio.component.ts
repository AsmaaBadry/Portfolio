import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {name:"Web design",background:"black"},
    {name:"Mobile Design",background:"navy"},
    {name:"Logo Design",background:"black"},
    {name:"Web Application Development",background:"navy"},
    {name:"Mobile Application Development",background:"black"},
    {name:"PWA Development",background:"navy"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
