import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
//   @Input() courseName = "";
@Input() progressStyl="0%";
  // @Input() progressStyl:any=[
  //   {wdth:"100",color:"bg-succeed"},
  //   {wdth:"95",color:"bg-danger"},
  //   {wdth:"80",color:"bg-primary"},
  //   {wdth:"70",color:"bg-info"},
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
