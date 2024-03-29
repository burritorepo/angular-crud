import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        sessionStorage.setItem('token','123456')
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.clear();
  }
}

