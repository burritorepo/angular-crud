import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import { AuthService } from '../../../../api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login().subscribe((val) => {
        if (val) {
          const url = this.authService.redirectUrl || '/users';
          this.router.navigate([url]);
        }
      });
    }
  }
}
