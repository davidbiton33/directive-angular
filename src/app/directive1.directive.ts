import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {
  bgcolor = 'yellow';
  color1= 'red';

  constructor(private elem:ElementRef) { 
  this.elem.nativeElement.style.backgroundColor = this.bgcolor;
  this.elem.nativeElement.style.color = this.color1;

  }
  



}
