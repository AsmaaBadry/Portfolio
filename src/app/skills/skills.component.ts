import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  // progressStyl:any=[
  //   {wdth:"100",color:"bg-succeed"},
  //   {wdth:"95",color:"bg-danger"},
  //   {wdth:"80",color:"bg-primary"},
  //   {wdth:"70",color:"bg-info"},
  // ]
  progressStyl:any[]=[
    "100%" , "95%", "90%" , "85%" , "80%" , "75%"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
