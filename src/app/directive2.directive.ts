import { Directive , ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  @Input() customColor = 'gray';
  constructor(private ele:ElementRef) { 
  }

  ngOnInit(){
    this.ele.nativeElement.style.color = this.customColor;
  }

}
