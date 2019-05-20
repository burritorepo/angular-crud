import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { UserService } from '../../../../api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user:object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    const { snapshot: { params: { id } } } = this.route;

    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
    })
  }

  onValueForm(value) {
    const { snapshot: { params: { id } } } = this.route;
    const newValue = Object.assign(value, {id});
    this.userService.saveUser(id, newValue).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
