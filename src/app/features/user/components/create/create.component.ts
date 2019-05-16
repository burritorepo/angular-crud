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

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('create!!', route, router)
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