import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('route', route.snapshot.params.id)
  }

  ngOnInit(): void { }
}
