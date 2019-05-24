import { ApiService } from './core';
import { AuthService } from './auth.service';
export const API_PROVIDERS = [
  ApiService,
  AuthService
]

export * from './core';
export * from './user.service';
export * from './auth.service';