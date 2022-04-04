import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlit]'
})
export class BetterHighlitDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
  }

}
