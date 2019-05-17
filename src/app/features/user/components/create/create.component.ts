import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationExtras
} from '@angular/router';

import { UserService } from '../../../../api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    console.log('create!!', route, router)
    console.log('userService')
    this.userService.getAllUser().subscribe((v) => {
      console.log('v', v)
    })
  }

  ngOnInit(): void { }

  onValueForm(value) {
    // console.log('valueForm', value)
    // const navigationExtras: NavigationExtras = {
    //   state: value
    // };
    // this.router.navigate(['/users'], { state: { example: 'bar' } });
    // this.router.navigate(['action-selection'], { state: { example: 'bar' } });
    this.router.navigate(['/users']);



  }
}
