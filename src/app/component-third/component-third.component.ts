import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-third',
  templateUrl: './component-third.component.html',
  styleUrls: ['./component-third.component.css']
})
export class ComponentThirdComponent implements OnInit {

  names:any[] = [
    {name:'xyz'},
    {name:'zxy'},
    {name:'yzx'}
  ];

  h='hll';

  constructor() { }


  ngOnInit(): void {
  }

}
