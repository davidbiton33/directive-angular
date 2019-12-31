import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appDirective3]'
})
export class Directive3Directive  {
  constructor(private elem:ElementRef) { }

  @Input() customColor = 'gray'; 
  @Input() hoverColor = 'red';

   @HostListener('mouseenter') onMouseEnter(){
     this.changeColor(this.hoverColor);
   }
 @HostListener('mouseleave') onMouseLeave(){
   this.changeColor(this.customColor);
 }





  ngOninit(){
    this.changeColor(this.customColor);
  }




  private changeColor(color:string){
    this.elem.nativeElement.style.backgroundColor = color;
    }




}
