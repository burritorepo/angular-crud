import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() valueUser: any;
  @Output() valueForm = new EventEmitter<boolean>();

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    photo: ['', Validators.required],
    about: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.valueUser) {
      this.userForm.patchValue(
        this.valueUser
      )
    }
  }

  onSubmit() {
    console.log('this.userForm.valid', this.userForm.valid)
    if (this.userForm.valid) {
      this.valueForm.emit(this.userForm.value)
    }
  }
}
