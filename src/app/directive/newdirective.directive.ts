import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNewdirective]'
})
export class NewdirectiveDirective implements OnInit {

  constructor(private er: ElementRef) { }

  ngOnInit(){
     this.er.nativeElement.style.textTransform='uppercase';
  }

}
