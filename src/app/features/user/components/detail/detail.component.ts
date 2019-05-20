import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import { UserService } from '../../../../api';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user:object;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    const { snapshot: { params: { id } } } = this.route;
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
    })
   }
}
