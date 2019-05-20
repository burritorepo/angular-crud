import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef
} from '@angular/core';

import { UserService } from '../../../../api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  modalOpen = false;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private userService: UserService) {

  }

  ngOnInit(): void {
  }

  onDelete() {
    this.modalOpen = true;
  }

  toggleModal() {
    return this.modalOpen = !this.modalOpen;
  }

  acceptCallback() {
    // this.renderer.removeChild(this.el.nativeElement, this.card.nativeElement);
    this.el.nativeElement.remove();
    this.userService.deleteUser(this.user.id).subscribe(() => {
      this.toggleModal();
    })
  }

  cancelCallback() {
    console.log('cancel user');
    this.toggleModal();
  }
}
