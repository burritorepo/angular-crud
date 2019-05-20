import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  createUser(body) {
    return this.apiService.post(`/users`, body);
  }

  deleteUser(id) {
    return this.apiService.delete(`/users/${id}`);
  }

  getUser(id) {
    return this.apiService.get(`/users/${id}`);
  }

  saveUser(id, body) {
    return this.apiService.put(`/users/${id}`, body);
  }

  getAllUser() {
    return this.apiService.get('/users');
  }
}

