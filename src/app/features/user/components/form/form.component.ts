import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // name = new FormControl('');
  // userForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // });
  @Output() valueForm = new EventEmitter<boolean>();

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    photo: ['', Validators.required],
    about: ['', Validators.required]
  });

  // userForm = {}

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.userForm.valid) {
      this.valueForm.emit(this.userForm.value)
    }
    console.log('submit!!', JSON.stringify(this.userForm))
    // console.log('this.userForm', this.userForm)
  }
}
