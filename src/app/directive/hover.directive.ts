import { Directive ,ElementRef,Renderer2,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() appHover:string;
  constructor(private el:ElementRef,private render:Renderer2) { 
    //el.nativeElement.style.backgroundColor ='blue';
   // render.setStyle(this.el.nativeElement,'backgroundColor','gray');
  }
  @HostListener('mouseover')
  onMouseOver()
  {
    this.render.setStyle(this.el.nativeElement,'backgroundColor',this.appHover);
  }
  @HostListener('mouseout')
  onMouseOut()
  {
    this.render.setStyle(this.el.nativeElement,'backgroundColor','');
  }


}
