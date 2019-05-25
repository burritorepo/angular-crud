import {
  Component,
  OnInit
} from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import {
  GetUsers
} from '../../store';

const selectorListUsers = createSelector(
  (state: any) => state.users,
  (state: any) => state.listUsers
);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<object>
  constructor(
    private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
    this.store.select(selectorListUsers)
    .subscribe((users) => {
      this.users = users;
    })
  }
}
