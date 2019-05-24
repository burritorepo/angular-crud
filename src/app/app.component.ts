import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  constructor() {
  }

  ngOnInit(): void { }
}
