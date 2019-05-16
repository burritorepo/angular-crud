import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  @ViewChild('card') card;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }

  onDelete(e, id) {
    // console.log('e', e)
    // console.log('id', id)
    // console.log('renderer', this.renderer)
    // console.log('card', this.card)
    // this.card.remove
    console.log('this', this.el, this.card)
    this.renderer.removeChild(this.el.nativeElement, this.card.nativeElement);
  }
}
