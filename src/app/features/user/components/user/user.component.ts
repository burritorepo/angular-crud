import {
  Component,
  OnInit
} from '@angular/core';
import { createSelector, Store } from '@ngrx/store';

import { UserService } from '../../../../api';

import {
  AddUsers
} from '../../store';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<object>;

  constructor(
    private userService: UserService,
    private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new AddUsers());
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    })
  }
}
