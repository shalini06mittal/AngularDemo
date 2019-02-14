import { Directive ,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appJoke]'
})
export class JokeDirective {

  constructor(private el:ElementRef,private render:Renderer2) { 
    
  }
  @HostListener('mouseover')
  onMouseOver()
  {
    this.render.setStyle(this.el.nativeElement.querySelector('.card-text'),'display','block');
    
  }
  @HostListener('mouseout')
  onMouseOut()
  {
    this.render.setStyle(this.el.nativeElement.querySelector('.card-text'),'display','none');
  }
}