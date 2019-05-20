import {
  Component,
  OnInit
} from '@angular/core';

import { UserService } from '../../../../api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:Array<object>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    })
  }
}
