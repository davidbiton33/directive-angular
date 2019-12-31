import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.css']
})
export class DirectivesExComponent implements OnInit {
  color1: any;
  userColor:string;
  constructor() { }
  changeMe(){
    this.color1 = 3;
  }

  selectColor(color){
    this.userColor = color;
  }
  ngOnInit() {
  }

}
