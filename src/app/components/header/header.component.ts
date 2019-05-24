import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private autService: AuthService
  ) { }

  logout() {
    console.log('logout')
    this.autService.logout();
  }

  ngOnInit(): void { }
}
