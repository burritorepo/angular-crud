import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

import { UserService } from '../../../../api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void { }

  onValueForm(value) {
    this.userService.createUser(value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
