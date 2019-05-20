import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() open = false;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() accept = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  onAccept() {
    this.accept.emit(true);
  }

  onCancel() {
    this.open = false;
    this.cancel.emit(true);
  }
}
