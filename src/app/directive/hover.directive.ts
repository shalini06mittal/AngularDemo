import { Directive ,ElementRef,Renderer2,HostListener,Input,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('class.dec') isHover:boolean;
  @Input() appHover:string;
  constructor(private el:ElementRef,private render:Renderer2) { 
    //el.nativeElement.style.backgroundColor ='blue';
   // render.setStyle(this.el.nativeElement,'backgroundColor','gray');
  }
  @HostListener('mouseover')
  onMouseOver()
  {
    this.render.setStyle(this.el.nativeElement,'backgroundColor',this.appHover);
    this.render.setStyle(this.el.nativeElement.querySelector('.c1'),'display','block');
    this.isHover = true;
    
  }
  @HostListener('mouseout')
  onMouseOut()
  {
    this.render.setStyle(this.el.nativeElement,'backgroundColor','');
    this.render.setStyle(this.el.nativeElement.querySelector('.c1'),'display','none');
    this.isHover = false;
  }


}
